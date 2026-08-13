'use client';

import { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type Locale, getTranslations } from '@/lib/translations';
import { getRealizedProjects, getConceptProjects, categoryLabels, roleLabels, statusLabels } from '@/lib/portfolio';
import { FadeIn } from '@/components/animations';
import { Anchor, Lightbulb } from 'lucide-react';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default function PortfolioPage({ params }: PageProps) {
  const { locale } = use(params);
  const t = getTranslations(locale);
  const realizedProjects = getRealizedProjects();
  const conceptProjects = getConceptProjects();

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  // Create playful grid pattern - some cards are larger
  const getCardClass = (index: number, total: number) => {
    // Make first card and every 5th card larger (span 2 columns on desktop)
    if (index === 0 || (index % 5 === 0 && index < total - 1)) {
      return 'md:col-span-2 md:row-span-2';
    }
    return '';
  };

  const getAspectClass = (index: number, total: number) => {
    if (index === 0 || (index % 5 === 0 && index < total - 1)) {
      return 'aspect-[4/3] md:aspect-[16/10]';
    }
    return 'aspect-[4/3]';
  };

  return (
    <>
      {/* Hero Section with Faded Background */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-24">
        {/* Background Image with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="https://ext.same-assets.com/1702387495/4192207021.jpeg"
            alt="Portfolio"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/85 via-slate-900/70 to-slate-900/95" />
        </motion.div>

        {/* Hero Content with fade */}
        <motion.div
          className="container-wide relative z-10"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl py-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
            >
              {t.portfolio.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-4 text-4xl font-light tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.portfolio.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base font-light text-white/70 md:text-lg max-w-xl"
            >
              {t.portfolio.intro}
            </motion.p>

            {/* Quick Navigation Pills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <a
                href="#realized"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500/20 border border-emerald-400/30 px-5 py-2.5 text-sm font-medium text-emerald-300 transition-all hover:bg-emerald-500/30 hover:border-emerald-400/50 hover:scale-105"
              >
                <Anchor className="h-4 w-4" />
                {statusLabels[locale].realized}
                <span className="rounded-lg bg-emerald-500/30 px-2 py-0.5 text-xs">
                  {realizedProjects.length}
                </span>
              </a>
              <a
                href="#concepts"
                className="inline-flex items-center gap-2 rounded-lg bg-amber-500/20 border border-amber-400/30 px-5 py-2.5 text-sm font-medium text-amber-300 transition-all hover:bg-amber-500/30 hover:border-amber-400/50 hover:scale-105"
              >
                <Lightbulb className="h-4 w-4" />
                {statusLabels[locale].concept}
                <span className="rounded-lg bg-amber-500/30 px-2 py-0.5 text-xs">
                  {conceptProjects.length}
                </span>
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Realized Projects Section */}
      <section id="realized" className="py-16 md:py-20 bg-white scroll-mt-20">
        <div className="container-wide">
          {/* Section Header - Compact */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600">
                <Anchor className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
                {statusLabels[locale].realized}
              </h2>
              <span className="rounded-full bg-emerald-100 text-emerald-700 px-3 py-1 text-sm font-semibold">
                {realizedProjects.length}
              </span>
            </div>
            <p className="text-sm text-foreground/60 max-w-lg">
              {locale === 'en'
                ? 'Yachts and vessels that have been built and are sailing the waters.'
                : 'Jachten en vaartuigen die zijn gebouwd en de wateren bevaren.'}
            </p>
          </FadeIn>

          {/* Tight Playful Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {realizedProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${getCardClass(index, realizedProjects.length)}`}
              >
                <div className={`relative ${getAspectClass(index, realizedProjects.length)} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={locale === 'nl' && project.titleNl ? project.titleNl : project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 rounded-full bg-emerald-500 px-2 py-1 text-[10px] font-semibold text-white shadow-lg">
                    <Anchor className="h-2.5 w-2.5" />
                    {locale === 'en' ? 'Built' : 'Gebouwd'}
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 md:p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-emerald-300 mb-0.5">
                      {categoryLabels[locale][project.category]} · {project.lengthRange}
                    </p>
                    <h3 className="text-sm md:text-base font-medium text-white leading-tight">
                      {locale === 'nl' && project.titleNl ? project.titleNl : project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Divider - Compact */}
      <div className="py-6 bg-slate-50">
        <div className="container-wide">
          <div className="flex items-center justify-center gap-4">
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-r from-transparent to-emerald-300" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <div className="w-2 h-2 rounded-full bg-amber-400 animate-pulse" style={{ animationDelay: '0.5s' }} />
            </div>
            <div className="h-px flex-1 max-w-[100px] bg-gradient-to-l from-transparent to-amber-300" />
          </div>
        </div>
      </div>

      {/* Concepts Section */}
      <section id="concepts" className="py-16 md:py-20 bg-slate-50 scroll-mt-20">
        <div className="container-wide">
          {/* Section Header - Compact */}
          <FadeIn className="mb-10">
            <div className="flex flex-wrap items-center gap-4 mb-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-amber-100 text-amber-600">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
                {statusLabels[locale].concept}
              </h2>
              <span className="rounded-full bg-amber-100 text-amber-700 px-3 py-1 text-sm font-semibold">
                {conceptProjects.length}
              </span>
            </div>
            <p className="text-sm text-foreground/60 max-w-lg">
              {locale === 'en'
                ? 'Design studies and concepts exploring new ideas in yacht design.'
                : 'Ontwerpstudies en concepten die nieuwe ideeën in jachtontwerp verkennen.'}
            </p>
          </FadeIn>

          {/* Tight Playful Grid for Concepts */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-3">
            {conceptProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className={`relative overflow-hidden rounded-xl cursor-pointer group ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
              >
                <div className={`relative ${index === 0 ? 'aspect-[4/3] md:aspect-[16/10]' : 'aspect-[4/3]'} overflow-hidden`}>
                  <img
                    src={project.image}
                    alt={locale === 'nl' && project.titleNl ? project.titleNl : project.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-60 group-hover:opacity-80 transition-opacity" />

                  {/* Badge */}
                  <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 rounded-full bg-amber-500 px-2 py-1 text-[10px] font-semibold text-white shadow-lg">
                    <Lightbulb className="h-2.5 w-2.5" />
                    Concept
                  </div>

                  {/* Info overlay */}
                  <div className="absolute inset-x-0 bottom-0 z-10 p-3 md:p-4 translate-y-2 group-hover:translate-y-0 transition-transform">
                    <p className="text-[10px] font-medium uppercase tracking-wider text-amber-300 mb-0.5">
                      {categoryLabels[locale][project.category]} · {project.lengthRange}
                    </p>
                    <h3 className="text-sm md:text-base font-medium text-white leading-tight">
                      {locale === 'nl' && project.titleNl ? project.titleNl : project.title}
                    </h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section - Compact */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl md:text-3xl font-light tracking-tight text-white">
              {locale === 'en' ? 'Have a project in mind?' : 'Een project in gedachten?'}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-8 max-w-md text-sm md:text-base text-white/60">
              {locale === 'en'
                ? 'Every great yacht starts with a conversation.'
                : 'Elk geweldig jacht begint met een gesprek.'}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href={`/${locale}/contact`}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium uppercase tracking-[0.12em] text-white shadow-lg shadow-primary/25 transition-all hover:-translate-y-1 hover:shadow-xl"
            >
              {locale === 'en' ? 'Start Your Project' : 'Start Uw Project'}
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
