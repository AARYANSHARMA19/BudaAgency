import Link from "next/link";
import { ArrowUpRight, Check, Compass, FileText, Gauge, Palette, PenTool, ShieldCheck } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const services = [
  { icon: Compass, number: "01", title: "Direction before decoration", text: "We turn the messy version of your idea into a clear page plan, offer, and call to action before we start styling." },
  { icon: Palette, number: "02", title: "A site that feels like you", text: "A distinctive, responsive visual system with the right amount of personality — no template cosplay required." },
  { icon: PenTool, number: "03", title: "Words that do a job", text: "Clear copy that helps the right people understand what you do and what to do next." },
  { icon: Gauge, number: "04", title: "Fast, practical delivery", text: "A focused sprint with checkpoints, quick decisions, and a launch path that respects your time." },
  { icon: ShieldCheck, number: "05", title: "A sensible foundation", text: "Accessible components, clean structure, responsive behavior, and a handoff you can actually use." },
  { icon: FileText, number: "06", title: "Room to grow", text: "Need bookings, a portal, or a maintenance plan? We build the first version so the next version has somewhere to go." },
];

export default function ServicesPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--line)] bg-[var(--night)] text-[var(--background)]"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="eyebrow text-[var(--background)]/55">Services</p><h1 className="text-balance mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8.5rem)] font-semibold leading-[0.87] tracking-[-0.08em]">The useful bits of a digital agency.</h1><p className="mt-8 max-w-2xl text-lg leading-8 text-[var(--background)]/65">A small senior team, a focused scope, and a website that earns its place in your business.</p></div></section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-px overflow-hidden rounded-[2rem] border border-[var(--line)] bg-[var(--line)] sm:grid-cols-2 lg:grid-cols-3">{services.map((service) => <article key={service.number} className="bg-[var(--surface)] p-7 sm:min-h-72"><div className="flex items-center justify-between"><span className="font-mono text-xs text-[var(--ink-muted)]">{service.number}</span><service.icon size={20} className="text-[var(--accent-strong)]" /></div><h2 className="mt-16 max-w-xs text-2xl font-semibold leading-tight tracking-[-0.05em]">{service.title}</h2><p className="mt-4 text-sm leading-6 text-[var(--ink-muted)]">{service.text}</p></article>)}</div></section>
        <section className="border-y border-[var(--line)] bg-[var(--surface-muted)]"><div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[0.7fr_1.3fr] lg:px-8 lg:py-28"><div><p className="eyebrow">Our promise</p><h2 className="section-title mt-5 max-w-sm">A calm process makes better work.</h2></div><div className="space-y-5 text-xl leading-9 tracking-[-0.03em] text-[var(--ink-muted)] sm:text-2xl"><p><span className="text-[var(--foreground)]">You do not need to become a project manager</span> to get a website over the line. We tell you what we need, keep the decisions small, and make the next action obvious.</p><p><span className="text-[var(--foreground)]">You also do not need to pretend you are bigger than you are.</span> Honest positioning creates better customers than borrowed language ever will.</p></div></div></section>
        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] border border-[var(--line)] p-7 sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="eyebrow">Good to know</p><h2 className="mt-5 max-w-2xl text-4xl font-semibold tracking-[-0.06em] sm:text-6xl">The 24-hour target starts when the inputs are ready.</h2><div className="mt-7 space-y-3 text-sm leading-6 text-[var(--ink-muted)]">{["Your scope is confirmed", "Your content and brand assets are available", "Any required domain or account access is in place"].map((item) => <p key={item} className="flex items-start gap-3"><Check size={17} className="mt-0.5 shrink-0 text-[var(--accent-strong)]" />{item}</p>)}</div></div><Link href="/book" className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-3.5 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5 lg:mt-0">Talk through your project <ArrowUpRight size={16} /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
