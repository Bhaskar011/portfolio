import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/schema";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

// Best-effort, per-instance rate limit (5 requests / 10 min / IP).
const hits = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_HITS = 5;

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_HITS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [k, v] of hits) if (v.every((t) => now - t >= WINDOW_MS)) hits.delete(k);
  }
  return false;
}

function json(body: Record<string, unknown>, status = 200) {
  return NextResponse.json(body, { status, headers: { "Cache-Control": "no-store" } });
}

export async function POST(req: Request) {
  // Same-origin check
  const origin = req.headers.get("origin");
  const host = req.headers.get("host");
  if (origin && host) {
    try {
      if (new URL(origin).host !== host) return json({ ok: false, error: "Forbidden." }, 403);
    } catch {
      return json({ ok: false, error: "Forbidden." }, 403);
    }
  }

  if (!(req.headers.get("content-type") ?? "").includes("application/json")) {
    return json({ ok: false, error: "Unsupported request." }, 415);
  }

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (limited(ip)) {
    return json({ ok: false, error: "Too many messages. Please try again in a few minutes." }, 429);
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json({ ok: false, error: "Invalid request." }, 400);
  }

  const parsed = contactSchema.safeParse(raw);
  if (!parsed.success) {
    // Honeypot filled => pretend success so bots learn nothing.
    const honeypot = (raw as { company?: unknown } | null)?.company;
    if (typeof honeypot === "string" && honeypot.length > 0) return json({ ok: true });
    return json(
      { ok: false, error: "Please check the form and try again.", fields: parsed.error.flatten().fieldErrors },
      400,
    );
  }

  const { name, email, subject, message, startedAt } = parsed.data;
  if (typeof startedAt === "number" && Date.now() - startedAt < 2500) {
    return json({ ok: true }); // submitted impossibly fast: bot
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>";
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or CONTACT_TO_EMAIL is not configured.");
    return json({ ok: false, error: "The contact service isn't configured yet. Please email me directly." }, 503);
  }

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `[Portfolio] ${subject}`,
      text: `New message from your portfolio\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\n${message}\n`,
    });
    if (error) {
      console.error("Resend error:", error.name, error.message);
      return json({ ok: false, error: "Couldn't send your message. Please try again shortly." }, 502);
    }
    return json({ ok: true });
  } catch (err) {
    console.error("Contact form failure:", err instanceof Error ? err.message : err);
    return json({ ok: false, error: "Couldn't send your message. Please try again shortly." }, 500);
  }
}

export function GET() {
  return json({ ok: false, error: "Method not allowed." }, 405);
}
