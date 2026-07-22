import { LegalPage } from "@/components/legal-page";

export default function PrivacyPage() {
  return <LegalPage eyebrow="Privacy" title="A plain-English privacy notice." updated="22 July 2026">
    <p className="max-w-3xl text-xl leading-8 text-[var(--foreground)]">This is a production template. Replace the bracketed fields and have the final version reviewed by qualified legal counsel before launch.</p>
    <h2>1. Controller</h2><p><strong>[BudaAgency legal entity]</strong>, [registered address], is the controller for personal data collected through this website. Contact: [privacy email].</p>
    <h2>2. What we collect</h2><p>When you contact us or book a consultation, we may collect your name, email address, business name, appointment details, message, timezone, and consent records. We do not need sensitive personal data, identity documents, or payment card details for the MVP.</p>
    <h2>3. Why we use it</h2><ul><li>To respond to enquiries and prepare requested services.</li><li>To arrange, confirm, cancel, or reschedule consultations.</li><li>To deliver client-portal and project-management services.</li><li>To send transactional updates related to an existing request.</li><li>To send marketing only where a valid consent or other lawful basis applies.</li></ul>
    <h2>4. Calendar connection</h2><p>If an authorised BudaAgency team member connects Google Calendar, the integration uses only the permissions needed to check availability and create appointments. Tokens are stored server-side and should be encrypted. Google OAuth permission is separate from the GDPR lawful basis for processing and should not be treated as a substitute for it.</p>
    <h2>5. Providers</h2><p>We may use Supabase, Vercel, Google, an email delivery provider, and monitoring tools. The final notice will identify the approved subprocessors, processing purposes, retention terms, and any international transfer safeguards.</p>
    <h2>6. Retention</h2><p>We keep contact and booking records only as long as needed for the stated purpose, legal obligations, dispute handling, and documented business retention periods. Insert the exact schedule here: [retention schedule].</p>
    <h2>7. Your rights</h2><p>Subject to applicable law, you may request access, correction, deletion, restriction, objection, portability, or withdrawal of consent. Contact [privacy email]. You may also complain to your local supervisory authority, including NAIH for relevant Hungarian processing.</p>
    <h2>8. Security</h2><p>We use access control, server-side secrets, encrypted transport, least-privilege integrations, audit records, backups, and incident procedures appropriate to the risk. No online service can promise absolute security.</p>
    <h2>9. Legal note</h2><p>This notice is informational until completed and reviewed. It is not legal advice.</p>
  </LegalPage>;
}
