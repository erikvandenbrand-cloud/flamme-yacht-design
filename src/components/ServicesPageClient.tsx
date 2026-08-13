'use client';

import Link from 'next/link';
import { ArrowRight, Compass, Anchor, Ruler, Wrench, RefreshCw } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Locale } from '@/lib/translations';

interface ServicesPageClientProps {
  locale: Locale;
  t: {
    services: {
      title: string;
      subtitle: string;
      intro: string;
      designTitle: string;
      designSubtitle: string;
      designText: string;
      designPoints: string[];
      navalTitle: string;
      navalSubtitle: string;
      navalText: string;
      navalPoints: string[];
      structuralTitle: string;
      structuralSubtitle: string;
      structuralText: string;
      structuralPoints: string[];
      supportTitle: string;
      supportSubtitle: string;
      supportText: string;
      supportPoints: string[];
      refitTitle: string;
      refitSubtitle: string;
      refitText: string;
      ctaTitle: string;
      ctaText: string;
      ctaCta: string;
    };
  };
}

export function ServicesPageClient({ locale, t }: ServicesPageClientProps) {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  return (
    <>
      {/* Hero Section with Faded Background */}
      <section className="relative flex min-h-[70vh] items-center overflow-hidden pt-24">
        {/* Background Image with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="https://ext.same-assets.com/1702387495/2216591311.jpeg"
            alt="Services"
            className="absolute inset-0 h-full w-full object-cover"
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
              {t.services.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.services.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg font-light text-white/70 md:text-xl max-w-xl"
            >
              {t.services.intro}
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Design Service */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 mb-6">
                <Compass className="h-7 w-7 text-primary" />
              </div>
              <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                {t.services.designSubtitle}
              </p>
              <h2 className="mb-6 text-3xl font-extralight tracking-tight md:text-4xl">{t.services.designTitle}</h2>
              <p className="mb-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.services.designText}
              </p>
              <ul className="space-y-4">
                {t.services.designPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-light text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10">
                <img
                  src="https://ext.same-assets.com/1702387495/2216591311.jpeg"
                  alt={t.services.designTitle}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Naval Architecture Service */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10">
                <img
                  src="https://ext.same-assets.com/1702387495/4053814519.jpeg"
                  alt={t.services.navalTitle}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 mb-6">
                <Anchor className="h-7 w-7 text-primary" />
              </div>
              <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                {t.services.navalSubtitle}
              </p>
              <h2 className="mb-6 text-3xl font-extralight tracking-tight md:text-4xl">{t.services.navalTitle}</h2>
              <p className="mb-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.services.navalText}
              </p>
              <ul className="space-y-4">
                {t.services.navalPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-light text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Structural Engineering Service */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <FadeIn direction="left" className="order-2 lg:order-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 mb-6">
                <Ruler className="h-7 w-7 text-primary" />
              </div>
              <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                {t.services.structuralSubtitle}
              </p>
              <h2 className="mb-6 text-3xl font-extralight tracking-tight md:text-4xl">{t.services.structuralTitle}</h2>
              <p className="mb-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.services.structuralText}
              </p>
              <ul className="space-y-4">
                {t.services.structuralPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-primary" />
                    <span className="text-sm font-light text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="order-1 lg:order-2">
              <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10">
                <img
                  src="https://ext.same-assets.com/1702387495/2218467190.jpeg"
                  alt={t.services.structuralTitle}
                  className="h-full w-full object-cover"
                />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Shipyard Support */}
            <FadeIn delay={0}>
              <div className="card-elevated h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 mb-6">
                  <Wrench className="h-7 w-7 text-primary" />
                </div>
                <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                  {t.services.supportSubtitle}
                </p>
                <h3 className="mb-4 text-2xl font-extralight tracking-tight">{t.services.supportTitle}</h3>
                <p className="mb-6 text-sm font-light text-muted-foreground">
                  {t.services.supportText}
                </p>
                <ul className="space-y-3">
                  {t.services.supportPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                      <span className="text-sm font-light text-muted-foreground">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            {/* Refit & Redesign */}
            <FadeIn delay={0.15}>
              <div className="card-elevated h-full">
                <div className="flex h-14 w-14 items-center justify-center rounded-full border border-border/50 mb-6">
                  <RefreshCw className="h-7 w-7 text-primary" />
                </div>
                <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                  {t.services.refitSubtitle}
                </p>
                <h3 className="mb-4 text-2xl font-extralight tracking-tight">{t.services.refitTitle}</h3>
                <p className="text-sm font-light text-muted-foreground">
                  {t.services.refitText}
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-900">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-5xl">
              {t.services.ctaTitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-base font-light text-white/60 md:text-lg">
              {t.services.ctaText}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <Link
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-3 rounded-lg border border-white/20 bg-white/10 px-8 py-4 text-xs font-medium uppercase tracking-[0.2em] text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-slate-900"
            >
              {t.services.ctaCta}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
