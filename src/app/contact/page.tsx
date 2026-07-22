import { Mail, MapPin, MessageCircle } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function ContactPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--line)] bg-[var(--night)] text-[var(--background)]"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"><p className="eyebrow text-[var(--background)]/55">Contact</p><h1 className="text-balance mt-6 max-w-5xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.87] tracking-[-0.08em]">A good website starts with a good conversation.</h1></div></section>
        <section className="mx-auto grid max-w-7xl gap-14 px-5 py-20 lg:grid-cols-[0.75fr_1.25fr] lg:px-8 lg:py-28"><div><p className="max-w-md text-2xl leading-9 tracking-[-0.03em]">No perfect brief needed. Send the rough version and we’ll help shape it.</p><div className="mt-12 space-y-5 text-sm text-[var(--ink-muted)]"><p className="flex items-center gap-3"><Mail size={17} className="text-[var(--accent-strong)]" />hello@budaagency.example</p><p className="flex items-center gap-3"><MessageCircle size={17} className="text-[var(--accent-strong)]" />Replies within one working day</p><p className="flex items-center gap-3"><MapPin size={17} className="text-[var(--accent-strong)]" />Budapest / remote</p></div></div><div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-6 sm:p-10"><ContactForm /></div></section>
      </main>
      <SiteFooter />
    </div>
  );
}
