# BudaAgency

BudaAgency is a production-minded marketing site and MVP foundation for a small-business website studio. It is built with Next.js App Router, React, TypeScript, Tailwind CSS, and Supabase-ready server boundaries for leads, appointments, auth, and client projects.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

The public marketing, booking, and contact flows work in explicit demo mode without external credentials. Demo mode does not pretend to sync a real Google Calendar; it returns a demo booking reference instead.

## Verify the build 

```bash
npm run typecheck
npm run lint
npm run build
```

## Supabase setup

1. Create separate development, preview, and production Supabase projects or branches.
2. Apply `supabase/migrations/001_budaagency_mvp.sql` through the Supabase CLI or dashboard migration workflow.
3. Create one organization and store its UUID in `SUPABASE_ORGANIZATION_ID`.
4. Configure Auth redirect URLs for local, preview, and production domains.
5. Generate and commit database types after the schema is applied.
6. Use a publishable key in browser code and keep `SUPABASE_SECRET_KEY` server-only.

Required environment variables are documented in `.env.example`. Copy it to `.env.local` for local development; never commit `.env.local`.

## Google Calendar setup

The intended MVP connection is an agency-owned Google Calendar. Create a Web OAuth client, configure exact HTTPS redirect URIs, and request only the narrow calendar scopes required for availability and event creation. Store refresh tokens encrypted server-side. Calendar integration should be completed before advertising “calendar sync” as a live capability.

## Vercel deployment

1. Link the repository to a Vercel project.
2. Add environment variables separately for Development, Preview, and Production.
3. Keep preview deployments connected to preview Supabase credentials.
4. Run `npm run verify` before merging.
5. Let Git integration create preview deployments for branches and production deployments from the protected production branch.

```bash
vercel link
vercel env pull .env.local
vercel deploy
```

## Product and compliance notes

- Replace the `.example` email address before launch.
- Replace all placeholder legal, team, and testimonial content with reviewed, accurate material.
- Do not publish fabricated reviews, invented staff identities, or unlicensed portfolio work.
- The “24-hour” claim is intentionally qualified by the scope, content, access, and feedback required from the client.
- Privacy, cookie, terms, controller/processor, retention, and Hungarian/EU compliance language requires professional legal review.

## Project map

- `src/app/page.tsx` — main marketing homepage
- `src/components/booking-form.tsx` — booking experience
- `src/components/contact-form.tsx` — contact experience
- `src/app/api` — server-side API boundaries
- `src/lib/supabase` — browser, server, and privileged Supabase clients
- `supabase/migrations` — RLS-aware database schema
