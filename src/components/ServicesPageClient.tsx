'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Locale } from '@/lib/translations';

interface ServicesPageClientProps {
  locale: Locale;
  t: {
    services: {
      title: string;
      subtitle: string;
      intro: string;
      deliverablesLabel: string;
      disciplines: {
        number: string;
        title: string;
        subtitle: string;
        text: string;
        points: string[];
      }[];
      additional: string[];
      ctaTitle: string;
      ctaText: string;
      ctaCta: string;
    };
  };
}

// One image per discipline, in the same order as the translations array.
const disciplineImages = [
  '/images/projects/discipline-design.jpg',
  '/images/projects/discipline-naval.jpg',
  '/images/projects/discipline-structural.jpg',
];

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
          <Image
            src="/images/projects/discipline-design.jpg"
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
              {t.services.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.services.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/70 md:text-xl max-w-xl"
            >
              {t.services.intro}
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* The three disciplines, numbered and alternating */}
      {t.services.disciplines.map((discipline, index) => {
        const reversed = index % 2 === 1;

        return (
          <section
            key={discipline.number}
            className={`py-24 md:py-32 lg:py-40 ${reversed ? 'bg-slate-50' : 'bg-background'}`}
          >
            <div className="container-wide">
              <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
                <FadeIn direction="left" className={reversed ? 'lg:order-2' : ''}>
                  <div className="flex items-center gap-5">
                    <span className="text-sm font-medium tracking-[0.2em] text-primary">
                      {discipline.number}
                    </span>
                    <span className="h-px flex-1 bg-border/60" />
                  </div>
                  <h2 className="mt-6 text-3xl tracking-tight md:text-4xl lg:text-5xl">
                    {discipline.title}
                  </h2>
                  <p className="mt-3 text-base text-muted-foreground md:text-lg">
                    {discipline.subtitle}
                  </p>
                  <p className="mt-8 text-base leading-relaxed text-muted-foreground">
                    {discipline.text}
                  </p>

                  <p className="mt-10 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                    {t.services.deliverablesLabel}
                  </p>
                  <ul className="mt-4 divide-y divide-border/50 border-t border-border/50">
                    {discipline.points.map((point) => (
                      <li key={point} className="py-3 text-sm text-muted-foreground">
                        {point}
                      </li>
                    ))}
                  </ul>
                </FadeIn>

                <FadeIn direction="right" delay={0.15} className={reversed ? 'lg:order-1' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10">
                    <Image
                      src={disciplineImages[index]}
                      alt={discipline.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                </FadeIn>
              </div>
            </div>
          </section>
        );
      })}

      {/* Supporting work — deliberately quiet, these are not the main offer */}
      <section className="border-t border-border/40 bg-background py-16 md:py-20">
        <div className="container-wide">
          <FadeIn>
            <p className="text-sm tracking-wide text-muted-foreground">
              {t.services.additional.join('  ·  ')}
            </p>
          </FadeIn>
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
            <p className="mx-auto mb-10 max-w-2xl text-base text-white/60 md:text-lg">
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
