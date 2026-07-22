import { NextResponse } from "next/server";
import { z } from "zod";
import { createAdminClient, isSupabaseConfigured } from "@/lib/supabase/admin";

export const runtime = "nodejs";

const ContactSchema = z.object({
  name: z.string().trim().min(2).max(100),
  email: z.string().trim().email().max(254),
  message: z.string().trim().min(10).max(4000),
  consent: z.union([z.literal("on"), z.literal(true), z.literal("true")]),
});

export async function POST(request: Request) {
  try {
    const payload = ContactSchema.parse(await request.json());

    if (isSupabaseConfigured()) {
      const supabase = createAdminClient();
      const { error } = await supabase.from("leads").insert({
        name: payload.name,
        email: payload.email,
        message: payload.message,
        source: "website-contact",
        consent_at: new Date().toISOString(),
      });

      if (error) {
        console.error("contact_insert_failed", { code: error.code });
        return NextResponse.json({ error: "Unable to save enquiry" }, { status: 503 });
      }
    }

    return NextResponse.json({ ok: true }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Please check the form details." }, { status: 400 });
  }
}
