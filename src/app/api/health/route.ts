import { NextResponse } from "next/server";
import { isSupabaseConfigured } from "@/lib/supabase/admin";

export function GET() {
  return NextResponse.json({
    ok: true,
    app: "budaagency",
    supabaseConfigured: isSupabaseConfigured(),
    calendarConfigured: Boolean(process.env.GOOGLE_CLIENT_ID && process.env.GOOGLE_CLIENT_SECRET),
  });
}
