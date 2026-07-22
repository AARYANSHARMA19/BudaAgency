create extension if not exists pgcrypto;
create extension if not exists btree_gist;

create type public.member_role as enum ('admin', 'staff', 'client');
create type public.lead_status as enum ('new', 'contacted', 'qualified', 'converted', 'closed');
create type public.appointment_status as enum ('provisional', 'confirmed', 'cancelled', 'failed');
create type public.project_status as enum ('intake', 'in_progress', 'review', 'launched', 'paused');
create type public.task_status as enum ('todo', 'in_progress', 'done');

create table public.organizations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  default_timezone text not null default 'Europe/Budapest',
  created_at timestamptz not null default now()
);

create table public.profiles (
  user_id uuid primary key references auth.users(id) on delete cascade,
  full_name text,
  email text,
  created_at timestamptz not null default now()
);

create table public.organization_members (
  organization_id uuid not null references public.organizations(id) on delete cascade,
  user_id uuid not null references auth.users(id) on delete cascade,
  role public.member_role not null,
  created_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);

create table public.leads (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete set null,
  name text not null,
  email text not null,
  business_name text,
  message text not null,
  source text not null default 'website',
  status public.lead_status not null default 'new',
  consent_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.appointments (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  client_user_id uuid references auth.users(id) on delete set null,
  client_name text not null,
  client_email text not null,
  business_name text not null,
  starts_at timestamptz not null,
  ends_at timestamptz not null,
  time_zone text not null,
  status public.appointment_status not null default 'provisional',
  calendar_event_id text,
  idempotency_key text not null unique,
  consent_version text not null,
  booking_window tstzrange generated always as (tstzrange(starts_at, ends_at, '[)')) stored,
  created_at timestamptz not null default now()
);

alter table public.appointments
  add constraint appointments_no_overlap
  exclude using gist (organization_id with =, booking_window with &&)
  where (status in ('provisional', 'confirmed'));

create table public.projects (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  client_user_id uuid references auth.users(id) on delete set null,
  name text not null,
  status public.project_status not null default 'intake',
  progress smallint not null default 0 check (progress between 0 and 100),
  target_launch_date date,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table public.project_tasks (
  id uuid primary key default gen_random_uuid(),
  project_id uuid not null references public.projects(id) on delete cascade,
  title text not null,
  status public.task_status not null default 'todo',
  visible_to_client boolean not null default true,
  automation_key text,
  due_at timestamptz,
  created_at timestamptz not null default now()
);

create table public.maintenance_plans (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid not null references public.organizations(id) on delete cascade,
  name text not null,
  price_cents integer not null default 900,
  currency text not null default 'USD',
  created_at timestamptz not null default now()
);

create table public.client_maintenance_plans (
  id uuid primary key default gen_random_uuid(),
  plan_id uuid not null references public.maintenance_plans(id) on delete restrict,
  project_id uuid not null references public.projects(id) on delete cascade,
  status text not null default 'active' check (status in ('active', 'paused', 'cancelled')),
  starts_at timestamptz not null default now(),
  ends_at timestamptz
);

create table public.consents (
  id uuid primary key default gen_random_uuid(),
  subject_email text not null,
  purpose text not null,
  policy_version text not null,
  granted_at timestamptz not null default now(),
  revoked_at timestamptz
);

create table public.audit_logs (
  id uuid primary key default gen_random_uuid(),
  organization_id uuid references public.organizations(id) on delete set null,
  actor_user_id uuid references auth.users(id) on delete set null,
  action text not null,
  entity_type text not null,
  entity_id uuid,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);

create index appointments_org_start_idx on public.appointments(organization_id, starts_at, status);
create index leads_org_status_idx on public.leads(organization_id, status, created_at desc);
create index project_tasks_project_status_idx on public.project_tasks(project_id, status, due_at);

alter table public.organizations enable row level security;
alter table public.profiles enable row level security;
alter table public.organization_members enable row level security;
alter table public.leads enable row level security;
alter table public.appointments enable row level security;
alter table public.projects enable row level security;
alter table public.project_tasks enable row level security;
alter table public.maintenance_plans enable row level security;
alter table public.client_maintenance_plans enable row level security;
alter table public.consents enable row level security;
alter table public.audit_logs enable row level security;

create policy "users can read their memberships" on public.organization_members
  for select to authenticated using (user_id = (select auth.uid()));

create policy "users can read their profile" on public.profiles
  for select to authenticated using (user_id = (select auth.uid()));

create policy "members can read leads" on public.leads
  for select to authenticated using (exists (
    select 1 from public.organization_members m
    where m.organization_id = leads.organization_id
      and m.user_id = (select auth.uid())
      and m.role in ('admin', 'staff')
  ));

create policy "members can read appointments" on public.appointments
  for select to authenticated using (client_user_id = (select auth.uid()) or exists (
    select 1 from public.organization_members m
    where m.organization_id = appointments.organization_id
      and m.user_id = (select auth.uid())
      and m.role in ('admin', 'staff')
  ));

create policy "members can read projects" on public.projects
  for select to authenticated using (client_user_id = (select auth.uid()) or exists (
    select 1 from public.organization_members m
    where m.organization_id = projects.organization_id
      and m.user_id = (select auth.uid())
      and m.role in ('admin', 'staff')
  ));

create policy "clients and staff can read visible tasks" on public.project_tasks
  for select to authenticated using (
    visible_to_client = true and exists (
      select 1 from public.projects p
      where p.id = project_tasks.project_id
        and (p.client_user_id = (select auth.uid()) or exists (
          select 1 from public.organization_members m
          where m.organization_id = p.organization_id
            and m.user_id = (select auth.uid())
            and m.role in ('admin', 'staff')
        ))
    )
  );

revoke all on public.leads from anon;
revoke all on public.appointments from anon;
revoke all on public.audit_logs from anon;
