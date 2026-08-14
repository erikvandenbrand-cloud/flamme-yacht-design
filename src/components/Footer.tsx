import Image from 'next/image';
import Link from 'next/link';
import { type Locale, getTranslations } from '@/lib/translations';

interface FooterProps {
  locale: Locale;
}

export function Footer({ locale }: FooterProps) {
  const t = getTranslations(locale);

  return (
    <footer className="border-t border-border/30 bg-background">
      <div className="container-wide">
        {/* Main Footer - Minimal */}
        <div className="grid gap-16 py-24 md:grid-cols-3 lg:py-32">
          {/* Brand */}
          <div className="md:col-span-2">
            {/* Witte achtergrond hier, dus het volledige logo met woordmerk. */}
            <Link href={`/${locale}`} className="inline-block">
              <Image
                src="/images/flamme-logo.png"
                alt="Flamme Yacht Design"
                width={665}
                height={494}
                className="h-16 w-auto"
              />
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
          </div>

          {/* Contact - Minimal */}
          <div className="space-y-6">
            <a
              href="mailto:info@flamme-yachtdesign.com"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              info@flamme-yachtdesign.com
            </a>
            <a
              href="tel:+31626528289"
              className="block text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              +31 6 265 282 89
            </a>
            <p className="text-sm text-muted-foreground">
              Industriestraat 25
              <br />
              8081 HH Elburg
              <br />
              {locale === 'en' ? 'The Netherlands' : 'Nederland'}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gradient-to-r from-transparent via-border to-transparent" />

        {/* Bottom Bar - Minimal */}
        <div className="flex flex-col items-center justify-between gap-4 py-8 md:flex-row">
          <p className="text-xs tracking-wide text-muted-foreground">
            {t.footer.copyright}
          </p>
          <Link
            href={`/${locale}/privacy`}
            className="text-xs tracking-wide text-muted-foreground transition-colors hover:text-foreground"
          >
            {t.footer.privacy}
          </Link>
        </div>
      </div>
    </footer>
  );
}
