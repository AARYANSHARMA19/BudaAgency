import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--night)] text-[var(--background)]">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-14 lg:grid-cols-[1.3fr_1fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-sm font-bold text-[#151515]">B</span>
            <span className="font-semibold tracking-[-0.03em]">BudaAgency</span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[var(--background)]/65">
            A small, sharp digital partner for businesses that need to look credible, get found, and start taking the next step.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--background)]/45">Explore</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-[var(--background)]/70">
            <Link href="/services" className="hover:text-[var(--background)]">Services</Link>
            <Link href="/pricing" className="hover:text-[var(--background)]">Pricing</Link>
            <Link href="/book" className="hover:text-[var(--background)]">Book a consultation</Link>
            <Link href="/portal" className="hover:text-[var(--background)]">Client portal</Link>
          </div>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--background)]/45">Say hello</p>
          <a href="mailto:hello@budaagency.example" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--background)]/70 hover:text-[var(--background)]">
            <Mail size={15} /> hello@budaagency.example
          </a>
          <Link href="/contact" className="mt-5 flex w-fit items-center gap-2 text-sm font-semibold text-[var(--accent)] hover:gap-3">
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>
      </div>
      <div className="border-t border-[var(--background)]/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-[var(--background)]/45 sm:flex-row sm:items-center sm:justify-between lg:px-8">
          <p>© 2026 BudaAgency. Built with care.</p>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-[var(--background)]">Privacy</Link>
            <Link href="/cookies" className="hover:text-[var(--background)]">Cookies</Link>
            <Link href="/terms" className="hover:text-[var(--background)]">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
