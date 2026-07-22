import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const BookingSchema = z
  .object({
    name: z.string().trim().min(2).max(100),
    email: z.string().trim().email().max(254),
    businessName: z.string().trim().min(2).max(150),
    startsAt: z.string().datetime(),
    endsAt: z.string().datetime(),
    timeZone: z.string().trim().min(1).max(80),
    consent: z.literal(true),
  })
  .superRefine((value, context) => {
    const start = Date.parse(value.startsAt);
    const end = Date.parse(value.endsAt);
    const duration = end - start;

    if (!Number.isFinite(start) || !Number.isFinite(end) || duration < 1 || duration > 60 * 60 * 1000) {
      context.addIssue({ code: "custom", path: ["endsAt"], message: "Invalid booking duration" });
    }
  });

export async function POST(request: Request) {
  const idempotencyKey = request.headers.get("Idempotency-Key");

  if (!idempotencyKey || idempotencyKey.length > 100) {
    return NextResponse.json({ error: "Missing idempotency key" }, { status: 400 });
  }

  try {
    const payload = BookingSchema.parse(await request.json());
    const organizationId = process.env.SUPABASE_ORGANIZATION_ID;

    if (isSupabaseConfigured() && organizationId) {
      const supabase = createAdminClient();
      const existing = await supabase
        .from("appointments")
        .select("id,status")
        .eq("idempotency_key", idempotencyKey)
        .maybeSingle();

      if (existing.data) {
        return NextResponse.json({ ok: true, reference: existing.data.id, status: existing.data.status });
      }

      const { data, error } = await supabase
        .from("appointments")
        .insert({
          organization_id: organizationId,
          client_name: payload.name,
          client_email: payload.email,
          business_name: payload.businessName,
          starts_at: payload.startsAt,
          ends_at: payload.endsAt,
          time_zone: payload.timeZone,
          idempotency_key: idempotencyKey,
          status: "provisional",
          consent_version: "booking-v1",
        })
        .select("id,status")
        .single();

      if (error || !data) {
        return NextResponse.json({ error: "That time is no longer available." }, { status: 409 });
      }

      return NextResponse.json({ ok: true, reference: data.id, status: data.status }, { status: 201 });
    }

    // Local/demo mode remains intentionally explicit: it lets the UI be
    // tested without pretending that an external calendar was synced.
    return NextResponse.json({ ok: true, reference: `demo-${idempotencyKey.slice(0, 8)}`, status: "demo" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Please check the booking details." }, { status: 400 });
  }
}
