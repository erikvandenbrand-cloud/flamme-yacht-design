import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Nodemailer opent een echte TCP-verbinding en draait dus niet op de
// Edge-runtime.
export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT ?? 465);
  const user = process.env.SMTP_USER;
  const password = process.env.SMTP_PASSWORD;
  const to = process.env.CONTACT_TO ?? user;

  // Zonder deze gegevens gaat er niets weg. Dan liever een duidelijke fout,
  // zodat de bezoeker het e-mailadres te zien krijgt, dan een bevestiging voor
  // een bericht dat nergens aankomt.
  if (!host || !user || !password || !to) {
    return NextResponse.json({ error: 'not_configured' }, { status: 503 });
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: 'invalid_body' }, { status: 400 });
  }

  const read = (key: string) => String(body[key] ?? '').trim();

  const name = read('name');
  const email = read('email');
  const subject = read('subject');
  const message = read('message');

  // Verborgen veld dat een mens nooit ziet. Vult een bot het in, dan doen we
  // alsof het gelukt is: een foutmelding zou hem alleen laten variëren.
  if (read('company')) {
    return NextResponse.json({ ok: true });
  }

  if (!name || !email || !message) {
    return NextResponse.json({ error: 'missing_fields' }, { status: 400 });
  }

  if (!EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ error: 'invalid_email' }, { status: 400 });
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    // 465 is TLS vanaf de eerste byte, 587 begint onversleuteld en schakelt om
    // met STARTTLS.
    secure: port === 465,
    auth: { user, pass: password },
    connectionTimeout: 10_000,
    greetingTimeout: 10_000,
    socketTimeout: 15_000,
  });

  try {
    await transporter.sendMail({
      // De afzender moet het eigen adres blijven. Het adres van de bezoeker in
      // From zetten oogt handig, maar dan verstuurt de mailserver post namens
      // een domein waar hij niet voor mag tekenen: SPF en DMARC laten dat
      // afkeuren of het bericht belandt in de spammap. Vandaar Reply-To.
      from: `"Flamme Yacht Design" <${user}>`,
      to,
      replyTo: `"${name}" <${email}>`,
      subject: subject
        ? `Website: ${subject}`
        : 'Website: bericht via het contactformulier',
      text: [
        `Naam:      ${name}`,
        `E-mail:    ${email}`,
        `Onderwerp: ${subject || '-'}`,
        '',
        message,
      ].join('\n'),
    });

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'send_failed' }, { status: 502 });
  }
}
