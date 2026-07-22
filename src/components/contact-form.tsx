"use client";

import { Check, LoaderCircle, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    const formElement = event.currentTarget;
    const form = new FormData(formElement);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(form.entries())),
      });
      if (!response.ok) throw new Error("Could not send");
      formElement.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" aria-describedby="contact-status">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium">
          Your name
          <input name="name" required minLength={2} placeholder="Alex Morgan" className="form-input" />
        </label>
        <label className="space-y-2 text-sm font-medium">
          Email address
          <input name="email" required type="email" placeholder="alex@business.com" className="form-input" />
        </label>
      </div>
      <label className="block space-y-2 text-sm font-medium">
        What are you building?
        <textarea name="message" required minLength={10} rows={5} placeholder="Tell us a little about your business and what you need next..." className="form-input resize-none" />
      </label>
      <label className="flex items-start gap-3 text-xs leading-5 text-[var(--ink-muted)]">
        <input name="consent" required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--accent-strong)]" />
        <span>I agree that BudaAgency may use these details to respond to my enquiry. See the <a href="/privacy" className="underline underline-offset-2">privacy notice</a>.</span>
      </label>
      <button type="submit" disabled={status === "loading"} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60">
        {status === "loading" ? <LoaderCircle size={16} className="animate-spin" /> : status === "success" ? <Check size={16} /> : <Send size={16} />}
        {status === "success" ? "Message sent" : "Send enquiry"}
      </button>
      <p id="contact-status" role="status" className="text-sm text-[var(--ink-muted)]">
        {status === "success" ? "Thanks — we’ll reply within one working day." : status === "error" ? "Something went wrong. Please email hello@budaagency.example." : "No sales pressure. Just a useful first conversation."}
      </p>
    </form>
  );
}
