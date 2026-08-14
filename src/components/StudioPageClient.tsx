'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Locale } from '@/lib/translations';

interface StudioPageClientProps {
  locale: Locale;
  t: {
    home: { ctaCta: string };
    studio: {
      title: string;
      subtitle: string;
      intro: string;
      founderTitle: string;
      founderRole: string;
      founderBio: string;
      founderBio2: string;
    };
  };
}

const projectImages = [
  '/images/projects/eagle-25-deck.jpg',
  '/images/projects/cooper-680.jpg',
  '/images/projects/flamboyant.jpg',
  '/images/projects/versafish-1400.jpg',
];

export function StudioPageClient({ locale, t }: StudioPageClientProps) {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  return (
    <>
      {/* Hero Section with Faded Background */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
        {/* Background Image with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src="/images/projects/orizzonte-ii.jpg"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/60 to-slate-900/90" />
        </motion.div>

        {/* Hero Content with fade */}
        <motion.div
          className="container-wide relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl py-16">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            >
              {t.studio.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.studio.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/70 md:text-xl max-w-xl"
            >
              {t.studio.intro}
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Founder Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Still a project photo, not Herbert — so it stays decorative until
                we have an actual portrait. */}
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10 lg:aspect-auto lg:min-h-[500px]">
                <Image
                  src="/images/projects/frisia-iv.jpg"
                  alt=""
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex flex-col justify-center">
              <p className="mb-2 text-xs uppercase tracking-[0.35em] text-primary">
                {t.studio.founderRole}
              </p>
              <h2 className="mb-8 text-3xl font-extralight tracking-tight md:text-4xl">{t.studio.founderTitle}</h2>
              <p className="mb-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio}
              </p>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Project images, without claims attached to them */}
      <section className="bg-slate-50 py-16 md:py-24">
        <div className="container-wide">
          <FadeIn>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {projectImages.map((src) => (
                <div
                  key={src}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg"
                >
                  <Image
                    src={src}
                    alt=""
                    fill
                    sizes="(max-width: 768px) 50vw, 25vw"
                    className="object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-900">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-5xl">
              {locale === 'en' ? 'Let\'s create something together' : 'Laten we samen iets creëren'}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 md:text-lg">
              {locale === 'en'
                ? 'Whether you\'re a shipyard, builder, or private client, we\'d be pleased to discuss your next yacht project.'
                : 'Of u nu een werf, bouwer of particuliere klant bent, wij bespreken graag uw volgende jachtproject.'}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              {t.home.ctaCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
