import Link from "next/link";
import { ArrowUpRight, Check, CircleUserRound, Clock3, FileCheck2, Sparkles } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const tasks = [
  { label: "Confirm business details", done: true },
  { label: "Send logo and brand colors", done: true },
  { label: "Review first draft", done: false },
  { label: "Approve launch checklist", done: false },
];

export default function PortalPage() {
  return (
    <div>
      <SiteHeader />
      <main className="bg-[var(--surface-muted)]"><section className="border-b border-[var(--line)]"><div className="mx-auto max-w-7xl px-5 py-14 lg:px-8 lg:py-20"><div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow">Client portal · Preview</p><h1 className="mt-5 text-5xl font-semibold tracking-[-0.07em] sm:text-7xl">Your launch, in one place.</h1><p className="mt-5 max-w-xl text-[var(--ink-muted)]">This demo view shows the simple, transparent project space we are building for clients.</p></div><Link href="/book" className="inline-flex w-fit items-center gap-2 rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Start a project <ArrowUpRight size={15} /></Link></div></div></section><section className="mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-16"><div className="grid gap-5 lg:grid-cols-[1.15fr_0.85fr]"><div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-8"><div className="flex items-start justify-between"><div><p className="eyebrow">Morgan Studio</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.06em]">Website launch</h2></div><span className="rounded-full bg-[var(--accent)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.14em] text-[#151515]">In review</span></div><div className="mt-10"><div className="flex items-center justify-between text-xs text-[var(--ink-muted)]"><span>Progress</span><span>68%</span></div><div className="mt-3 h-2 rounded-full bg-[var(--surface-muted)]"><div className="h-full w-[68%] rounded-full bg-[var(--accent-strong)]" /></div></div><div className="mt-10 grid gap-3 sm:grid-cols-3"><div className="rounded-2xl bg-[var(--surface-muted)] p-4"><Clock3 size={16} /><p className="mt-7 text-sm font-semibold">Next review</p><p className="mt-1 text-xs text-[var(--ink-muted)]">Tomorrow</p></div><div className="rounded-2xl bg-[var(--surface-muted)] p-4"><FileCheck2 size={16} /><p className="mt-7 text-sm font-semibold">Pages ready</p><p className="mt-1 text-xs text-[var(--ink-muted)]">4 of 6</p></div><div className="rounded-2xl bg-[var(--surface-muted)] p-4"><Sparkles size={16} /><p className="mt-7 text-sm font-semibold">Care plan</p><p className="mt-1 text-xs text-[var(--ink-muted)]">$9/month</p></div></div></div><aside className="rounded-[2rem] bg-[var(--night)] p-6 text-[var(--background)] sm:p-8"><div className="flex items-center gap-3"><CircleUserRound size={20} className="text-[var(--accent)]" /><p className="text-sm font-semibold">Launch checklist</p></div><div className="mt-8 space-y-5">{tasks.map((task) => <p key={task.label} className={`flex items-start gap-3 text-sm leading-6 ${task.done ? "text-[var(--background)]/55" : "text-[var(--background)]"}`}><span className={`mt-1 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border ${task.done ? "border-[var(--accent)] bg-[var(--accent)] text-[#151515]" : "border-[var(--background)]/30"}`}>{task.done ? <Check size={11} /> : null}</span><span className={task.done ? "line-through" : ""}>{task.label}</span></p>)}</div><button type="button" className="mt-9 w-full rounded-full border border-[var(--background)]/20 px-5 py-3 text-sm font-semibold hover:border-[var(--accent)] hover:text-[var(--accent)]">Ask a question</button></aside></div></section></main>
      <SiteFooter />
    </div>
  );
}
