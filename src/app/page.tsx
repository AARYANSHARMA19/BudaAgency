import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Check, Clock3, Globe2, Layers3, Sparkles, Zap } from "lucide-react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

const proofPoints = ["Clear scope", "Fast feedback", "No mystery fees"];

export default function Home() {
  return (
    <div className="overflow-hidden">
      <SiteHeader />
      <main>
        <section className="noise grid-paper relative border-b border-[var(--line)]">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:px-8 lg:pb-28 lg:pt-24">
            <div className="reveal">
              <div className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink-muted)]"><span className="h-2 w-2 rounded-full bg-[var(--accent-strong)]" /> Independent digital studio · Budapest / remote</div>
              <h1 className="reveal reveal-delay-1 text-balance mt-8 max-w-4xl text-[clamp(3.6rem,8vw,8.25rem)] font-semibold leading-[0.87] tracking-[-0.08em]">A better first impression, <span className="display-serif font-normal">by tomorrow.</span></h1>
              <p className="reveal reveal-delay-2 mt-8 max-w-xl text-lg leading-8 text-[var(--ink-muted)] sm:text-xl">Launch-ready websites for small businesses that need a credible online home, a clear customer journey, and someone who actually answers.</p>
              <div className="reveal reveal-delay-3 mt-9 flex flex-col gap-3 sm:flex-row"><Link href="/book" className="group inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5">Book your free 30-min call <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link><Link href="/services" className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[var(--line)] px-6 text-sm font-semibold hover:-translate-y-0.5 hover:bg-[var(--surface)]">See how we work <ArrowDownRight size={16} /></Link></div>
              <div className="reveal reveal-delay-4 mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--ink-muted)]">{proofPoints.map((point) => <span key={point} className="flex items-center gap-2"><Check size={14} className="text-[var(--accent-strong)]" />{point}</span>)}</div>
            </div>
            <div className="reveal reveal-delay-2 relative lg:pb-3">
              <div className="absolute -right-5 -top-10 h-28 w-28 rounded-full border border-[var(--line)] lg:-right-3" />
              <div className="float-card hover-lift relative rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-5 shadow-[0_28px_70px_rgba(0,0,0,0.08)] sm:p-7">
                <div className="flex items-center justify-between border-b border-[var(--line)] pb-5"><div><p className="text-xs font-semibold uppercase tracking-[0.17em] text-[var(--ink-muted)]">Launch board</p><p className="mt-2 text-xl font-semibold tracking-[-0.04em]">Your website, in motion.</p></div><span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--accent)] text-[#151515]"><Zap size={19} /></span></div>
                <div className="mt-6 space-y-3">{[{n:"01",label:"Positioning + page plan",state:"Done"},{n:"02",label:"Design + build sprint",state:"Today"},{n:"03",label:"Review + publish",state:"Next"}].map((item) => <div key={item.n} className="flex items-center gap-4 rounded-2xl bg-[var(--surface-muted)] p-4"><span className="font-mono text-xs text-[var(--ink-muted)]">{item.n}</span><span className="flex-1 text-sm font-medium">{item.label}</span><span className={`text-[11px] font-semibold uppercase tracking-[0.14em] ${item.state === "Today" ? "text-[var(--foreground)]" : "text-[var(--ink-muted)]"}`}>{item.state}</span></div>)}</div>
                <div className="mt-6 rounded-2xl bg-[var(--night)] p-5 text-[var(--background)]"><div className="flex items-center justify-between"><span className="text-xs uppercase tracking-[0.16em] opacity-55">Next checkpoint</span><Clock3 size={16} className="text-[var(--accent)]" /></div><p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">A clear yes / no.</p><p className="mt-2 text-sm leading-6 opacity-65">You’ll always know what is happening, what we need, and what comes next.</p></div>
              </div>
            </div>
          </div>
          <div className="border-t border-[var(--line)] py-3"><div className="marquee-track flex w-max gap-10 whitespace-nowrap text-[11px] font-semibold uppercase tracking-[0.24em] text-[var(--ink-muted)]"><span>24-hour website setup</span><span>✳</span><span>30-minute free consultation</span><span>✳</span><span>Simple monthly care</span><span>✳</span><span>24-hour website setup</span><span>✳</span><span>30-minute free consultation</span><span>✳</span><span>Simple monthly care</span></div></div>
        </section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><p className="eyebrow">Why BudaAgency</p><h2 className="section-title mt-5 max-w-md">Small business deserves big clarity.</h2></div><div><p className="max-w-2xl text-2xl leading-9 tracking-[-0.03em] sm:text-3xl">Most websites do too much and say too little. We make the important thing obvious: who you help, why it matters, and how someone can take the next step.</p><div className="mt-12 grid gap-4 sm:grid-cols-3">{[{icon:Globe2,title:"A home that works",text:"A polished web presence that feels like your business, not a template."},{icon:Layers3,title:"A focused offer",text:"The right words, pages, and calls to action — without the bloat."},{icon:Sparkles,title:"A calm process",text:"Practical progress, clear checkpoints, and a partner who keeps it moving."}].map((item) => <div key={item.title} className="rounded-2xl border border-[var(--line)] p-5"><item.icon size={20} className="text-[var(--accent-strong)]" /><h3 className="mt-8 text-base font-semibold">{item.title}</h3><p className="mt-3 text-sm leading-6 text-[var(--ink-muted)]">{item.text}</p></div>)}</div></div></div></section>

        <section className="bg-[var(--night)] text-[var(--background)]"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div><p className="eyebrow text-[var(--background)]/55">The offer</p><h2 className="section-title mt-5 max-w-xl">Enough to launch. Built to last.</h2></div><Link href="/pricing" className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:gap-3">See simple pricing <ArrowUpRight size={15} /></Link></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{[{number:"01",title:"Launch",text:"A sharp, responsive website with the pages your customer actually needs."},{number:"02",title:"Connect",text:"A 30-minute working session to turn the fuzzy idea into a useful plan."},{number:"03",title:"Care",text:"Optional ongoing maintenance so your site does not quietly go stale."}].map((item) => <div key={item.number} className="group min-h-64 rounded-[1.6rem] border border-[var(--background)]/15 p-6 transition-colors hover:border-[var(--accent)]/60"><span className="font-mono text-sm text-[var(--accent)]">{item.number}</span><h3 className="mt-16 text-2xl font-semibold tracking-[-0.05em]">{item.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-[var(--background)]/60">{item.text}</p></div>)}</div></div></section>

        <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><div className="rounded-[2rem] bg-[var(--accent)] p-7 text-[#151515] sm:p-12 lg:flex lg:items-end lg:justify-between"><div><p className="text-xs font-semibold uppercase tracking-[0.18em] opacity-60">Your next practical step</p><h2 className="mt-5 max-w-2xl text-[clamp(2.5rem,5vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.07em]">Bring the idea. Leave with a direction.</h2></div><Link href="/book" className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-[#151515] px-6 py-3.5 text-sm font-semibold text-[#f4f2ed] hover:-translate-y-0.5 lg:mt-0">Book your free call <ArrowUpRight size={16} /></Link></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
