import { type Locale, getTranslations } from '@/lib/translations';
import { getPublishedPortfolio } from '@/lib/portfolio';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SITE_URL, isLocale, languageAlternates } from '@/lib/site';
import { HomePageClient } from '@/components/HomePageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

// Laat Google zien dat dit bedrijf en deze site bij elkaar horen. Het adres is
// Elburg, zoals de footer en de contactpagina al zeggen; bedrijvengidsen die
// Apeldoorn noemen zijn verouderd.
function organisatieSchema(description: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Flamme Yacht Design',
    url: SITE_URL,
    logo: `${SITE_URL}/images/flamme-logo.png`,
    email: 'info@flamme-yachtdesign.com',
    telephone: '+31626528289',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Industriestraat 25',
      postalCode: '8081 HH',
      addressLocality: 'Elburg',
      addressCountry: 'NL',
    },
    description,
    founder: { '@type': 'Person', name: 'Herbert van den Brand' },
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: languageAlternates(''),
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }
  const t = getTranslations(locale);
  const allProjects = getPublishedPortfolio();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organisatieSchema(t.meta.description)),
        }}
      />
      <HomePageClient locale={locale} t={t} allProjects={allProjects} />
    </>
  );
}
