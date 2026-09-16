import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { SITE } from "@/lib/constants";

const ROLES = new Set(["pacient", "clinica", "laborator"]);

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

async function sendViaFormspree(formId: string, email: string, role: string) {
  const res = await fetch(`https://formspree.io/f/${formId}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify({
      email,
      role,
      _subject: `Waitlist DentVeerse — ${role}`,
      _replyto: email,
    }),
  });
  return res.ok;
}

async function sendViaSmtp(email: string, role: string) {
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;
  if (!user || !pass) return false;

  const notifyTo = process.env.WAITLIST_NOTIFY_TO ?? SITE.email;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST ?? "smtp.gmail.com",
    port: Number(process.env.SMTP_PORT ?? 465),
    secure: process.env.SMTP_SECURE !== "false",
    auth: { user, pass },
  });

  const roleLabel =
    role === "pacient" ? "Pacient" : role === "clinica" ? "Clinică" : "Laborator";

  await transporter.sendMail({
    from: `"DentVeerse Waitlist" <${user}>`,
    to: notifyTo,
    replyTo: email,
    subject: `[Waitlist] ${roleLabel} — ${email}`,
    text: `Înscriere nouă pe lista de așteptare DentVeerse\n\nEmail: ${email}\nTip cont: ${roleLabel}\n`,
    html: `<p><strong>Înscriere nouă</strong> pe dentveerse.com</p><ul><li>Email: ${email}</li><li>Tip: ${roleLabel}</li></ul>`,
  });

  return true;
}

export async function POST(request: Request) {
  let body: { email?: string; role?: string; company?: string };
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (body.company) {
    return NextResponse.json({ ok: true });
  }

  const email = (body.email ?? "").trim().toLowerCase();
  const role = body.role ?? "pacient";

  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "Email invalid" }, { status: 400 });
  }
  if (!ROLES.has(role)) {
    return NextResponse.json({ error: "Rol invalid" }, { status: 400 });
  }

  const formspreeId = process.env.FORMSPREE_FORM_ID;

  try {
    if (formspreeId && (await sendViaFormspree(formspreeId, email, role))) {
      return NextResponse.json({ ok: true });
    }

    if (await sendViaSmtp(email, role)) {
      return NextResponse.json({ ok: true });
    }
  } catch (err) {
    console.error("waitlist notify failed", err);
    return NextResponse.json({ error: "Send failed" }, { status: 502 });
  }

  return NextResponse.json(
    {
      error:
        "Waitlist nu e configurat pe server. Adaugă FORMSPREE_FORM_ID sau SMTP_USER + SMTP_PASS în Vercel.",
    },
    { status: 503 }
  );
}
