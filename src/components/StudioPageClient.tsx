'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { FadeIn, StaggerChildren, StaggerItem } from '@/components/animations';
import { motion, useScroll, useTransform } from 'framer-motion';
import type { Locale } from '@/lib/translations';

interface StudioPageClientProps {
  locale: Locale;
  t: {
    home: { ctaCta: string };
    studio: {
      title: string;
      subtitle: string;
      founderTitle: string;
      founderRole: string;
      founderBio: string;
      founderBio2: string;
      philosophyTitle: string;
      philosophyText: string;
      philosophyText2: string;
      valuesTitle: string;
      values: { title: string; text: string }[];
      experienceTitle: string;
      experienceText: string;
    };
  };
}

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
          <img
            src="https://ext.same-assets.com/1702387495/2228340057.jpeg"
            alt="Studio"
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
              {t.studio.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.studio.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg font-light text-white/70 md:text-xl max-w-xl"
            >
              {locale === 'en'
                ? 'A professional yacht design studio with decades of experience in creating vessels that are as buildable as they are beautiful.'
                : 'Een professioneel jachtontwerpbureau met decennia aan ervaring in het creëren van vaartuigen die zo bouwbaar als mooi zijn.'}
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
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10 lg:aspect-auto lg:min-h-[500px]">
                <img
                  src="https://ext.same-assets.com/1702387495/2228340057.jpeg"
                  alt={t.studio.founderTitle}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-light uppercase tracking-[0.35em] text-primary">
                {t.studio.founderRole}
              </p>
              <h2 className="mb-8 text-3xl font-extralight tracking-tight md:text-4xl">{t.studio.founderTitle}</h2>
              <p className="mb-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio}
              </p>
              <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio2}
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50">
        <div className="container-narrow">
          <FadeIn className="mx-auto max-w-3xl text-center">
            <h2 className="mb-8 text-3xl font-extralight tracking-tight md:text-4xl">{t.studio.philosophyTitle}</h2>
            <p className="mb-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {t.studio.philosophyText}
            </p>
            <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
              {t.studio.philosophyText2}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container-wide">
          <FadeIn className="mb-16 text-center">
            <h2 className="text-3xl font-extralight tracking-tight md:text-4xl">{t.studio.valuesTitle}</h2>
          </FadeIn>

          <StaggerChildren className="grid gap-8 md:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
            {t.studio.values.map((value, index) => (
              <StaggerItem key={index}>
                <div className="card-elevated group text-center h-full">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-2xl font-light text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                    {index + 1}
                  </div>
                  <h3 className="mb-4 text-lg font-medium">{value.title}</h3>
                  <p className="text-sm font-light text-muted-foreground">{value.text}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 md:py-32 lg:py-40 bg-slate-50">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2">
            <FadeIn direction="left">
              <h2 className="mb-6 text-3xl font-extralight tracking-tight md:text-4xl">{t.studio.experienceTitle}</h2>
              <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.experienceText}
              </p>
            </FadeIn>
            <FadeIn direction="right" delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <img
                    src="https://ext.same-assets.com/1702387495/4192207021.jpeg"
                    alt="Project"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <img
                    src="https://ext.same-assets.com/1702387495/107137140.jpeg"
                    alt="Project"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <img
                    src="https://ext.same-assets.com/1702387495/1823381250.jpeg"
                    alt="Project"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                <div className="relative aspect-square overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <img
                    src="https://ext.same-assets.com/1702387495/33237816.jpeg"
                    alt="Project"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
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
              {locale === 'en' ? 'Let\'s create something together' : 'Laten we samen iets creëren'}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-2xl text-base font-light text-white/60 md:text-lg">
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
