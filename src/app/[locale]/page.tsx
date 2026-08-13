import { type Locale, getTranslations } from '@/lib/translations';
import { getFeaturedPortfolio, getPublishedPortfolio, categoryLabels, roleLabels } from '@/lib/portfolio';
import type { Metadata } from 'next';
import { HomePageClient } from '@/components/HomePageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: `/${locale}`,
      languages: {
        en: '/en',
        nl: '/nl',
      },
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);
  const featuredProjects = getFeaturedPortfolio();
  const allProjects = getPublishedPortfolio();

  return (
    <HomePageClient
      locale={locale}
      t={t}
      featuredProjects={featuredProjects}
      allProjects={allProjects}
      categoryLabels={categoryLabels[locale]}
      roleLabels={roleLabels[locale]}
    />
  );
}
