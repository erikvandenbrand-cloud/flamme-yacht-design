import { type Locale, getTranslations } from '@/lib/translations';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, languageAlternates } from '@/lib/site';
import { PortfolioPageClient } from '@/components/PortfolioPageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.portfolioTitle,
    description: t.meta.portfolioDescription,
    alternates: {
      canonical: `/${locale}/portfolio`,
      languages: languageAlternates('/portfolio'),
    },
  };
}

export default async function PortfolioPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }

  return <PortfolioPageClient locale={locale} />;
}
