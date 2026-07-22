import { ReactNode } from "react";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export function LegalPage({ eyebrow, title, updated, children }: { eyebrow: string; title: string; updated: string; children: ReactNode }) {
  return (
    <div>
      <SiteHeader />
      <main>
        <section className="border-b border-[var(--line)] bg-[var(--surface-muted)]"><div className="mx-auto max-w-5xl px-5 py-20 lg:px-8 lg:py-24"><p className="eyebrow">{eyebrow}</p><h1 className="mt-6 max-w-4xl text-6xl font-semibold leading-[0.9] tracking-[-0.08em] sm:text-8xl">{title}</h1><p className="mt-7 text-sm text-[var(--ink-muted)]">Template status · Last updated {updated}</p></div></section>
        <article className="legal-copy mx-auto max-w-5xl px-5 py-14 lg:px-8 lg:py-20">{children}</article>
      </main>
      <SiteFooter />
    </div>
  );
}
