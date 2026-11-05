import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

// Stond er niet, en /robots.txt viel daardoor op [locale] terug en gaf een 500.
// Een 5xx op robots.txt leest Google als "site tijdelijk niet crawlen".
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/admin',
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
