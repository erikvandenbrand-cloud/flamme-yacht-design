'use client';

import { use, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type Locale, getTranslations } from '@/lib/translations';
import {
  type PortfolioItem,
  getRealizedProjects,
  getConceptProjects,
  statusLabels,
} from '@/lib/portfolio';
import { FadeIn } from '@/components/animations';
import { ProjectCard } from '@/components/ProjectCard';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

type CategoryFilter = PortfolioItem['category'] | 'all';

export default function PortfolioPage({ params }: PageProps) {
  const { locale } = use(params);
  const t = getTranslations(locale);

  const [filter, setFilter] = useState<CategoryFilter>('all');

  const filterOptions: { value: CategoryFilter; label: string }[] = [
    { value: 'all', label: t.portfolio.filterAll },
    { value: 'motor', label: t.portfolio.filterMotor },
    { value: 'sailing', label: t.portfolio.filterSailing },
    { value: 'tender', label: t.portfolio.filterTender },
    { value: 'work', label: t.portfolio.filterWork },
  ];

  const applyFilter = (items: PortfolioItem[]) =>
    filter === 'all' ? items : items.filter((item) => item.category === filter);

  const realizedProjects = applyFilter(getRealizedProjects());
  const conceptProjects = applyFilter(getConceptProjects());

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  return (
    <>
      {/* Hero Section with Faded Background */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-24">
        {/* Background Image with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <img
            src="/images/projects/eagle-25-deck.jpg"
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
              className="mb-4 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.portfolio.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-base text-white/70 md:text-lg max-w-xl"
            >
              {t.portfolio.intro}
            </motion.p>

          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent" />
      </section>

      {/* Category filter — plain text, so it reads as navigation and not as decoration */}
      <section className="border-b border-border/40 bg-white">
        <div className="container-wide">
          <div className="flex flex-wrap gap-x-8 gap-y-3 py-5">
            {filterOptions.map((option) => (
              <button
                key={option.value}
                type="button"
                onClick={() => setFilter(option.value)}
                aria-pressed={filter === option.value}
                className={
                  filter === option.value
                    ? 'text-sm font-medium tracking-wide text-foreground underline underline-offset-8'
                    : 'text-sm tracking-wide text-muted-foreground transition-colors hover:text-foreground'
                }
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Realized Projects */}
      {realizedProjects.length > 0 && (
      <section id="realized" className="scroll-mt-20 bg-white py-16 md:py-24">
        <div className="container-wide">
          <FadeIn className="mb-12">
            <div className="flex items-baseline gap-4 border-b border-border/50 pb-4">
              <h2 className="text-2xl tracking-tight text-foreground md:text-3xl">
                {statusLabels[locale].realized}
              </h2>
              <span className="text-sm text-muted-foreground">
                {realizedProjects.length}
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {realizedProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Concepts */}
      {conceptProjects.length > 0 && (
      <section id="concepts" className="scroll-mt-20 bg-slate-50 py-16 md:py-24">
        <div className="container-wide">
          <FadeIn className="mb-12">
            <div className="flex items-baseline gap-4 border-b border-border/50 pb-4">
              <h2 className="text-2xl tracking-tight text-foreground md:text-3xl">
                {statusLabels[locale].concept}
              </h2>
              <span className="text-sm text-muted-foreground">
                {conceptProjects.length}
              </span>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 md:gap-x-6 lg:grid-cols-4">
            {conceptProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                locale={locale}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>
      )}

      {/* CTA Section - Compact */}
      <section className="py-16 md:py-20 bg-slate-900">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl md:text-3xl tracking-tight text-white">
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
