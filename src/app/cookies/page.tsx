import { LegalPage } from "@/components/legal-page";

export default function CookiesPage() {
  return <LegalPage eyebrow="Cookies" title="Only the cookies we can explain." updated="22 July 2026">
    <p className="max-w-3xl text-xl leading-8 text-[var(--foreground)]">This template assumes the MVP uses essential cookies for preferences and authentication, with non-essential analytics disabled until consent is given.</p>
    <h2>Essential cookies</h2><p>These support security, session management, accessibility preferences, and the basic operation of the website. They do not require a marketing purpose.</p>
    <h2>Optional cookies</h2><p>Analytics, advertising, embedded media, or other non-essential technologies should be listed here by name and purpose. They must not load before the visitor makes an informed choice where consent is required.</p>
    <h2>Your choices</h2><p>The banner should provide “Accept all”, “Reject non-essential”, and granular settings. Visitors can change or withdraw their choice through a persistent “Cookie settings” link.</p>
    <h2>Cookie inventory</h2><ul><li>[Cookie name] — [provider] — [purpose] — [duration] — [category].</li><li>[Cookie name] — [provider] — [purpose] — [duration] — [category].</li></ul>
    <h2>Legal note</h2><p>Cookie rules vary by jurisdiction and implementation. This is not legal advice and should be checked by qualified counsel before launch.</p>
  </LegalPage>;
}
