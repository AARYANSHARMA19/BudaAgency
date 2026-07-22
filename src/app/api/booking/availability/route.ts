import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json({
    mode: process.env.GOOGLE_CLIENT_ID ? "calendar" : "demo",
    durationMinutes: 30,
    slots: ["09:30", "10:30", "11:30", "13:00", "14:00", "15:30", "16:30"],
  });
}
