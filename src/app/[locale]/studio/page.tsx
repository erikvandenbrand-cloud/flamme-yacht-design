import { type Locale, getTranslations } from '@/lib/translations';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isLocale, languageAlternates } from '@/lib/site';
import { StudioPageClient } from '@/components/StudioPageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.studioTitle,
    description: t.meta.studioDescription,
    alternates: {
      canonical: `/${locale}/studio`,
      languages: languageAlternates('/studio'),
    },
  };
}

export default async function StudioPage({ params }: PageProps) {
  const { locale } = await params;

  if (!isLocale(locale)) {
    notFound();
  }
  const t = getTranslations(locale);

  return <StudioPageClient locale={locale} t={t} />;
}
