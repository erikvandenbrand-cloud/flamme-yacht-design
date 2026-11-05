import { notFound } from 'next/navigation';
import { type Locale } from '@/lib/translations';
import { isLocale } from '@/lib/site';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export async function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'nl' }];
}

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;

  // Alles wat geen taal is viel hier eerder stilletjes terug op 'en' en ging
  // daarna verderop stuk op een ontbrekend label: /design en /robots.txt
  // gaven zo een 500 in plaats van een 404.
  if (!isLocale(localeParam)) {
    notFound();
  }

  const locale = localeParam as Locale;

  return (
    <>
      <Header locale={locale} />
      <main className="min-h-screen">{children}</main>
      <Footer locale={locale} />
    </>
  );
}
