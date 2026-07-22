import { LegalPage } from "@/components/legal-page";

export default function TermsPage() {
  return <LegalPage eyebrow="Terms" title="Clear expectations for good work." updated="22 July 2026">
    <p className="max-w-3xl text-xl leading-8 text-[var(--foreground)]">This is a commercial template, not a final contract. Replace all bracketed fields and obtain legal review before accepting payment or client data.</p>
    <h2>1. Services</h2><p>BudaAgency provides the agreed website, content, design, setup, and maintenance services described in the project scope. The scope is confirmed before work begins.</p>
    <h2>2. Pricing</h2><p>The baseline offer is $90 one-time for the agreed launch work and $9/month for the selected maintenance plan. Taxes, domain registration, paid tools, premium assets, advertising, and work outside scope may be charged separately if agreed in writing.</p>
    <h2>3. 24-hour delivery target</h2><p>The 24-hour target begins after scope, content, brand assets, decisions, and required third-party access are available. It is a target, not an unconditional guarantee, and may be affected by client delays or third-party outages.</p>
    <h2>4. Client responsibilities</h2><p>The client is responsible for the accuracy and legality of supplied content, rights to images and trademarks, timely feedback, and access they choose to provide.</p>
    <h2>5. Ownership and access</h2><p>Specify here when final work, domain access, source files, and third-party accounts transfer to the client: [ownership terms].</p>
    <h2>6. Cancellation and maintenance</h2><p>Specify cancellation, refunds, renewal, notice periods, maintenance scope, response times, and what happens when a plan ends: [commercial terms].</p>
    <h2>7. Limitations</h2><p>We do not guarantee search rankings, third-party availability, uninterrupted hosting, or outcomes outside the agreed scope. No clause should remove rights that cannot legally be excluded.</p>
    <h2>8. Legal note</h2><p>This template is informational and is not legal advice. Have qualified counsel review the final agreement for the applicable country and customer type.</p>
  </LegalPage>;
}
