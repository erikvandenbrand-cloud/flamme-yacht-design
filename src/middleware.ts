import { NextResponse, type NextRequest } from 'next/server';

// Nederlands is de standaard. Alleen een bezoeker die aantoonbaar geen
// Nederlands spreekt en niet uit het taalgebied komt, gaat naar de Engelse
// versie. Bij twijfel dus /nl.
const DEFAULT_LOCALE = 'nl';
const DUTCH_COUNTRIES = ['NL', 'BE'];

export function middleware(request: NextRequest) {
  // Vercel zet het land van het IP-adres in deze header. Lokaal ontbreekt hij,
  // en dan valt de keuze terug op de browsertaal.
  const country = request.headers.get('x-vercel-ip-country')?.toUpperCase();
  if (country && DUTCH_COUNTRIES.includes(country)) {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  const accepted = request.headers.get('accept-language');

  // Geen voorkeur bekend: dan de standaard, niet Engels.
  if (!accepted) {
    return NextResponse.redirect(new URL(`/${DEFAULT_LOCALE}`, request.url));
  }

  // Alleen de eerste voorkeur telt. Staat er nl-NL of nl, dan Nederlands.
  const preferred = accepted.split(',')[0]?.trim().toLowerCase() ?? '';
  const locale = preferred.startsWith('nl') ? DEFAULT_LOCALE : 'en';

  return NextResponse.redirect(new URL(`/${locale}`, request.url));
}

// Alleen de kale root omleiden. Wie zelf /en of /nl kiest houdt die keuze.
export const config = {
  matcher: '/',
};
