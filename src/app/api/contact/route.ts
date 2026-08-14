import { NextResponse } from 'next/server';

// Web3Forms stuurt het bericht door naar het adres dat aan de sleutel hangt.
// De sleutel blijft hier op de server, zodat hij niet in de paginabron staat.
const ENDPOINT = 'https://api.web3forms.com/submit';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // Zonder sleutel gaat er niets weg. Dan liever een duidelijke fout, zodat de
  // bezoeker het e-mailadres te zien krijgt, dan een bevestiging voor een
  // bericht dat nergens aankomt.
  if (!accessKey) {
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

  try {
    const response = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        access_key: accessKey,
        // replyto zorgt dat Beantwoorden naar de afzender gaat en niet naar
        // Web3Forms zelf.
        replyto: email,
        from_name: name,
        subject: subject
          ? `Flamme Yacht Design - ${subject}`
          : 'Flamme Yacht Design - bericht via de site',
        Naam: name,
        Email: email,
        Onderwerp: subject || '-',
        Bericht: message,
      }),
    });

    if (!response.ok) {
      return NextResponse.json({ error: 'upstream' }, { status: 502 });
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: 'upstream' }, { status: 502 });
  }
}
