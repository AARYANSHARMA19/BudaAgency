import { BookingForm } from "@/components/booking-form";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function BookPage() {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--line)] bg-[var(--surface-muted)]"><div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-24"><p className="eyebrow">Book a consultation</p><h1 className="text-balance mt-6 max-w-4xl text-[clamp(3.5rem,8vw,8rem)] font-semibold leading-[0.87] tracking-[-0.08em]">Thirty minutes to make the next step obvious.</h1><p className="mt-8 max-w-xl text-lg leading-8 text-[var(--ink-muted)]">Tell us where you are, what feels stuck, and what “better” would look like. We’ll bring questions, not a sales script.</p></div></section>
        <section className="mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-20"><BookingForm /></section>
      </main>
      <SiteFooter />
    </div>
  );
}
