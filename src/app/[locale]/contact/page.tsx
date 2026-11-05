import { type Locale, getTranslations } from '@/lib/translations';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, languageAlternates } from '@/lib/site';
import { ContactPageClient } from '@/components/ContactPageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.contactTitle,
    description: t.meta.contactDescription,
    alternates: {
      canonical: `/${locale}/contact`,
      languages: languageAlternates('/contact'),
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <ContactPageClient locale={locale} />;
}
