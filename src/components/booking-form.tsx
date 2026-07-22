"use client";

import { CalendarDays, Check, Clock3, LoaderCircle } from "lucide-react";
import Link from "next/link";
import { FormEvent, useMemo, useState } from "react";

const slots = ["09:30", "10:30", "11:30", "13:00", "14:00", "15:30", "16:30"];

function toReadableDate(value: string) {
  if (!value) return "Select a date";
  return new Intl.DateTimeFormat("en", { weekday: "short", month: "short", day: "numeric" }).format(new Date(`${value}T12:00:00`));
}

export function BookingForm() {
  const [date, setDate] = useState("");
  const [slot, setSlot] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [reference, setReference] = useState("");

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!date || !slot) return;
    setStatus("loading");
    const form = new FormData(event.currentTarget);
    const idempotencyKey = crypto.randomUUID();
    const start = new Date(`${date}T${slot}:00`);
    const end = new Date(start.getTime() + 30 * 60 * 1000);

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json", "Idempotency-Key": idempotencyKey },
        body: JSON.stringify({
          name: form.get("name"),
          email: form.get("email"),
          businessName: form.get("businessName"),
          startsAt: start.toISOString(),
          endsAt: end.toISOString(),
          timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
          consent: form.get("consent") === "on",
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error ?? "Booking failed");
      setReference(data.reference);
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-7 sm:p-10" role="status">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent)] text-[#151515]"><Check size={21} /></div>
        <p className="mt-8 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">You’re on the calendar</p>
        <h2 className="mt-3 text-3xl font-semibold tracking-[-0.04em]">A useful conversation is booked.</h2>
        <p className="mt-4 max-w-md leading-7 text-[var(--ink-muted)]">We’ve reserved {toReadableDate(date)} at {slot}. A confirmation will be sent to your inbox. Your reference is <span className="font-mono text-sm text-[var(--foreground)]">{reference}</span>.</p>
        <Link href="/" className="mt-8 inline-flex rounded-full bg-[var(--foreground)] px-5 py-3 text-sm font-semibold text-[var(--background)]">Back to BudaAgency</Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-[2rem] border border-[var(--line)] bg-[var(--surface)] p-5 sm:p-8" aria-describedby="booking-status">
      <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">Step 01 / Choose a time</p>
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[var(--surface-muted)] p-4">
            <CalendarDays size={19} />
            <div><p className="text-sm font-semibold">30 minutes, no prep required</p><p className="mt-1 text-xs text-[var(--ink-muted)]">Times shown in your local timezone.</p></div>
          </div>
          <label className="mt-8 block space-y-2 text-sm font-medium">Date<input name="date" required type="date" min={minDate} value={date} onChange={(event) => { setDate(event.target.value); setSlot(""); }} className="form-input" /></label>
          <p className="mt-3 text-xs text-[var(--ink-muted)]">{toReadableDate(date)}</p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">Step 02 / Pick a slot</p>
          <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {slots.map((item) => <button key={item} type="button" disabled={!date} onClick={() => setSlot(item)} className={`flex min-h-12 items-center justify-center gap-2 rounded-xl border text-sm font-semibold ${slot === item ? "border-[var(--foreground)] bg-[var(--foreground)] text-[var(--background)]" : "border-[var(--line)] bg-[var(--surface)] hover:-translate-y-0.5 hover:border-[var(--foreground)]"} disabled:cursor-not-allowed disabled:opacity-35`}><Clock3 size={14} />{item}</button>)}
          </div>
          <p className="mt-4 text-xs text-[var(--ink-muted)]">Select a date first to unlock available slots.</p>
        </div>
      </div>
      <div className="my-8 border-t border-[var(--line)]" />
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--ink-muted)]">Step 03 / Tell us where to send the details</p>
      <div className="mt-5 grid gap-5 sm:grid-cols-3">
        <label className="space-y-2 text-sm font-medium">Name<input name="name" required minLength={2} className="form-input" placeholder="Alex Morgan" /></label>
        <label className="space-y-2 text-sm font-medium">Email<input name="email" required type="email" className="form-input" placeholder="alex@business.com" /></label>
        <label className="space-y-2 text-sm font-medium">Business<input name="businessName" required minLength={2} className="form-input" placeholder="Morgan Studio" /></label>
      </div>
      <label className="mt-5 flex items-start gap-3 text-xs leading-5 text-[var(--ink-muted)]"><input name="consent" required type="checkbox" className="mt-1 h-4 w-4 accent-[var(--accent-strong)]" /><span>I agree to receive the booking confirmation and understand that BudaAgency will use these details to arrange the consultation.</span></label>
      <div className="mt-7 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <button type="submit" disabled={!date || !slot || status === "loading"} className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[var(--foreground)] px-6 text-sm font-semibold text-[var(--background)] hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-45">{status === "loading" ? <LoaderCircle size={16} className="animate-spin" /> : <CalendarDays size={16} />}Confirm consultation</button>
        <p id="booking-status" role="status" className="text-sm text-[var(--ink-muted)]">{status === "error" ? "That slot could not be reserved. Please choose another time." : "Free, friendly, and focused on your next practical step."}</p>
      </div>
    </form>
  );
}
