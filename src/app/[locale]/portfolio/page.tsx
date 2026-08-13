'use client';

import { use } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type Locale, getTranslations } from '@/lib/translations';
import {
  getRealizedProjects,
  getConceptProjects,
  roleLabels,
  statusLabels,
  statusShortLabels,
  projectMeta,
  projectTitle,
} from '@/lib/portfolio';
import { FadeIn } from '@/components/animations';

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

      {/* Realized Projects */}
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
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={project.image}
                    alt={projectTitle(project, locale)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {statusShortLabels[locale][project.status]}
                    {project.year ? ` · ${project.year}` : ''}
                  </p>
                  <h3 className="mt-1.5 text-base font-medium tracking-tight text-foreground">
                    {projectTitle(project, locale)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {projectMeta(project, locale)}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {roleLabels[locale][project.role]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Concepts */}
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
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={project.image}
                    alt={projectTitle(project, locale)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>
                <div className="pt-4">
                  <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                    {statusShortLabels[locale][project.status]}
                    {project.year ? ` · ${project.year}` : ''}
                  </p>
                  <h3 className="mt-1.5 text-base font-medium tracking-tight text-foreground">
                    {projectTitle(project, locale)}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {projectMeta(project, locale)}
                  </p>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {roleLabels[locale][project.role]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

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
