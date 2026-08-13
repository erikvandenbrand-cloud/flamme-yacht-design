import { type Locale, getTranslations } from '@/lib/translations';
import type { Metadata } from 'next';
import { ServicesPageClient } from '@/components/ServicesPageClient';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const t = getTranslations(locale);

  return {
    title: t.meta.servicesTitle,
    description: t.meta.servicesDescription,
    alternates: {
      canonical: `/${locale}/services`,
      languages: {
        en: '/en/services',
        nl: '/nl/services',
      },
    },
  };
}

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const t = getTranslations(locale);

  return <ServicesPageClient locale={locale} t={t} />;
}
