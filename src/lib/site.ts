import type { Locale } from './translations';

// Het canonieke adres van de site. Staat hier hard in plaats van in een
// omgevingsvariabele, omdat Next zonder metadataBase relatieve canonicals
// uitstuurt en hreflang dan door Google wordt genegeerd.
export const SITE_URL = 'https://www.flamme-yachtdesign.com';

// Nederlands eerst: dat is de standaardtaal van de site.
export const LOCALES = ['nl', 'en'] as const;

export const DEFAULT_LOCALE: Locale = 'nl';

// De paden onder /nl en /en, zonder taalprefix. Gebruikt door de sitemap.
export const ROUTES = ['', '/studio', '/services', '/portfolio', '/contact'] as const;

// Een onbekend eerste padsegment belandde op [locale] en liet de pagina
// klappen met een 500. Hiermee wordt dat een nette 404.
export function isLocale(value: string): value is Locale {
  return value === 'nl' || value === 'en';
}

// hreflang hoort absolute URL's te bevatten, inclusief protocol.
export function languageAlternates(path: string) {
  return {
    nl: `${SITE_URL}/nl${path}`,
    en: `${SITE_URL}/en${path}`,
    'x-default': `${SITE_URL}/nl${path}`,
  };
}
