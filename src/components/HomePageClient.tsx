'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, Send, Check } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import {
  type PortfolioItem,
  statusShortLabels,
  projectMeta,
  projectTitle,
} from '@/lib/portfolio';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';

interface HomePageClientProps {
  locale: 'en' | 'nl';
  t: {
    home: {
      heroEyebrow: string;
      heroTitle: string;
      heroTagline: string;
      heroCta: string;
      heroCtaSecondary: string;
      proof: { label: string; lines: string[]; credit: string }[];
      introTitle: string;
      introText: string;
      introText2: string;
      introLink: string;
      statements: { title: string; text: string }[];
      servicesTitle: string;
      servicesSubtitle: string;
      portfolioTitle: string;
      portfolioSubtitle: string;
      portfolioLink: string;
      ctaTitle: string;
      ctaText: string;
      ctaCta: string;
    };
    services: {
      deliverablesLabel: string;
      disciplines: {
        number: string;
        title: string;
        subtitle: string;
        text: string;
        points: string[];
      }[];
      additional: string[];
    };
    studio: {
      title: string;
      subtitle: string;
      founderTitle: string;
      founderRole: string;
      founderBio: string;
      founderBio2: string;
    };
    contact: {
      title: string;
      subtitle: string;
      intro: string;
      formName: string;
      formEmail: string;
      formSubject: string;
      formMessage: string;
      formSubmit: string;
      formSuccess: string;
      subjectOptions: string[];
      emailTitle: string;
      email: string;
      phoneTitle: string;
      phone: string;
      addressTitle: string;
      address: string;
    };
  };
  featuredProjects: PortfolioItem[];
  allProjects: PortfolioItem[];
  categoryLabels: Record<string, string>;
  roleLabels: Record<string, string>;
}

export function HomePageClient({
  locale,
  t,
  featuredProjects,
  allProjects,
  categoryLabels,
  roleLabels,
}: HomePageClientProps) {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.1], [1, 1.1]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  // Get projects for display
  const displayProjects = allProjects.slice(0, 8);

  return (
    <>
      {/* HERO SECTION */}
      <section id="home" className="relative flex min-h-screen items-center justify-center overflow-hidden">
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
            poster="https://images.pexels.com/videos/1918465/free-video-1918465.jpg?auto=compress&cs=tinysrgb&w=1920"
          >
            <source
              src="https://videos.pexels.com/video-files/1918465/1918465-hd_1920_1080_24fps.mp4"
              type="video/mp4"
            />
          </video>
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/40 to-slate-900/80" />
        </motion.div>

        <motion.div
          className="container-wide relative z-10 pt-24"
          style={{ opacity: heroOpacity }}
        >
          <div className="max-w-3xl">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8 text-[0.7rem] font-semibold uppercase tracking-[0.28em] text-white/70 md:text-xs md:tracking-[0.35em]"
            >
              {t.home.heroEyebrow}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb-8 text-4xl font-light leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl"
            >
              {t.home.heroTitle}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="mb-12 max-w-xl text-base leading-relaxed text-white/70 md:text-lg"
            >
              {t.home.heroTagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="flex flex-wrap gap-5"
            >
              <a href="#portfolio" className="btn-primary">
                {t.home.heroCta}
                <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#services" className="btn-outline">
                {t.home.heroCtaSecondary}
              </a>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, ease: 'easeInOut' }}
            className="h-12 w-px bg-gradient-to-b from-transparent via-white/40 to-transparent"
          />
        </motion.div>
      </section>

      {/* PROOF BAR — awards belong to the yards, so every credit line stays visible */}
      <section className="border-b border-border/40 bg-white">
        <div className="container-wide">
          <div className="grid divide-y divide-border/60 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
            {t.home.proof.map((item) => (
              <div key={item.label} className="py-8 sm:px-8 sm:py-10 sm:first:pl-0 sm:last:pr-0">
                <p className="text-sm font-medium tracking-tight text-foreground">
                  {item.label}
                </p>
                {item.lines.map((line) => (
                  <p key={line} className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                    {line}
                  </p>
                ))}
                {item.credit && (
                  <p className="mt-3 text-xs font-light uppercase tracking-[0.12em] text-muted-foreground/70">
                    {item.credit}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INTRO SECTION */}
      <section className="bg-white py-24 md:py-32">
        <div className="container-wide">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <FadeIn className="lg:col-span-5">
              <h2 className="text-3xl font-light leading-tight tracking-tight text-foreground md:text-4xl">
                {t.home.introTitle}
              </h2>
            </FadeIn>
            <FadeIn delay={0.15} className="lg:col-span-7">
              <p className="text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.home.introText}
              </p>
              <p className="mt-6 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.home.introText2}
              </p>
              <Link
                href={`/${locale}/studio`}
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
              >
                {t.home.introLink}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </FadeIn>
          </div>

          <div className="mt-20 grid gap-10 border-t border-border/50 pt-14 md:grid-cols-3 md:gap-12">
            {t.home.statements.map((statement, index) => (
              <FadeIn key={statement.title} delay={index * 0.1}>
                <h3 className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground">
                  {statement.title}
                </h3>
                <p className="text-sm font-light leading-relaxed text-muted-foreground">
                  {statement.text}
                </p>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* STUDIO SECTION */}
      <section id="studio" className="py-24 md:py-32 lg:py-40 bg-white scroll-mt-20">
        <div className="container-wide">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            <FadeIn direction="left">
              <div className="relative aspect-[4/5] overflow-hidden rounded-3xl bg-muted shadow-2xl shadow-black/10 lg:aspect-auto lg:min-h-[500px]">
                <img
                  src="https://ext.same-assets.com/1702387495/2228340057.jpeg"
                  alt=""
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="flex flex-col justify-center">
              <p className="mb-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary">
                {t.studio.subtitle}
              </p>
              <h2 className="mb-6 text-3xl font-light tracking-tight md:text-4xl lg:text-5xl">
                {t.studio.title}
              </h2>
              <p className="mb-4 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio}
              </p>
              <p className="mb-8 text-base font-light leading-relaxed text-muted-foreground md:text-lg">
                {t.studio.founderBio2}
              </p>
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg font-semibold text-primary">HB</span>
                </div>
                <div>
                  <p className="font-medium text-foreground">{t.studio.founderTitle}</p>
                  <p className="text-sm text-muted-foreground">{t.studio.founderRole}</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24 md:py-32 lg:py-40 bg-slate-50 scroll-mt-20">
        <div className="container-wide">
          <FadeIn className="mb-16 max-w-2xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t.home.servicesSubtitle}
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t.home.servicesTitle}
            </h2>
          </FadeIn>

          <div className="grid gap-12 md:grid-cols-3 md:gap-10">
            {t.services.disciplines.map((discipline, index) => (
              <FadeIn key={discipline.number} delay={index * 0.12}>
                <div className="flex items-center gap-4">
                  <span className="text-sm font-medium tracking-[0.2em] text-primary">
                    {discipline.number}
                  </span>
                  <span className="h-px flex-1 bg-border/60" />
                </div>
                <h3 className="mt-5 text-2xl font-light tracking-tight text-foreground">
                  {discipline.title}
                </h3>
                <p className="mt-2 text-sm font-light text-muted-foreground">
                  {discipline.subtitle}
                </p>
                <p className="mt-5 text-sm font-light leading-relaxed text-muted-foreground">
                  {discipline.text}
                </p>
                <ul className="mt-6 divide-y divide-border/50 border-t border-border/50">
                  {discipline.points.map((point) => (
                    <li key={point} className="py-2.5 text-sm font-light text-muted-foreground">
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.3}>
            <p className="mt-16 border-t border-border/50 pt-8 text-sm font-light tracking-wide text-muted-foreground">
              {t.services.additional.join('  ·  ')}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* PORTFOLIO SECTION */}
      <section id="portfolio" className="py-24 md:py-32 lg:py-40 bg-white scroll-mt-20">
        <div className="container-wide">
          <FadeIn className="mb-12 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t.home.portfolioSubtitle}
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t.home.portfolioTitle}
            </h2>
          </FadeIn>

          {/* Project details stay visible — they are the point, not a hover reward */}
          <div className="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 md:gap-x-6">
            {displayProjects.map((project, index) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group"
              >
                <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-muted">
                  <img
                    src={project.image}
                    alt={projectTitle(project, locale)}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
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
                  <p className="mt-1 text-sm font-light leading-relaxed text-muted-foreground">
                    {projectMeta(project, locale)}
                  </p>
                  <p className="mt-0.5 text-sm font-light text-muted-foreground">
                    {roleLabels[project.role]}
                  </p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-24 md:py-32 lg:py-40 bg-slate-50 scroll-mt-20">
        <div className="container-wide">
          <FadeIn className="mb-16 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-primary">
              {t.contact.subtitle}
            </p>
            <h2 className="text-3xl font-light tracking-tight text-foreground md:text-4xl lg:text-5xl">
              {t.contact.title}
            </h2>
            <p className="mt-4 text-base text-muted-foreground max-w-xl mx-auto">
              {t.contact.intro}
            </p>
          </FadeIn>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="rounded-2xl bg-white p-8 shadow-lg border border-slate-200">
                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Check className="h-8 w-8 text-primary" />
                    </div>
                    <p className="text-lg text-foreground">
                      {t.contact.formSuccess}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">{t.contact.formName}</Label>
                      <Input
                        id="name"
                        name="name"
                        required
                        className="h-12 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">{t.contact.formEmail}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        className="h-12 rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject" className="text-sm font-medium">{t.contact.formSubject}</Label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        className="flex h-12 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-2 text-sm focus:border-primary focus:ring-primary"
                      >
                        <option value="">
                          {locale === 'en' ? 'Select a subject' : 'Selecteer een onderwerp'}
                        </option>
                        {t.contact.subjectOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium">{t.contact.formMessage}</Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="resize-none rounded-lg border-slate-200 bg-slate-50 focus:border-primary focus:ring-primary"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-12 w-full rounded-lg bg-primary text-white hover:bg-primary/90"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                          {locale === 'en' ? 'Sending...' : 'Verzenden...'}
                        </span>
                      ) : (
                        <>
                          {t.contact.formSubmit}
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </FadeIn>

            {/* Contact Info */}
            <FadeIn direction="right" delay={0.2}>
              <div className="space-y-6">
                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium">{t.contact.emailTitle}</h3>
                      <a
                        href={`mailto:${t.contact.email}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t.contact.email}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium">{t.contact.phoneTitle}</h3>
                      <a
                        href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t.contact.phone}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-white p-6 shadow-sm border border-slate-200 group hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-5">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-base font-medium">{t.contact.addressTitle}</h3>
                      <p className="whitespace-pre-line text-muted-foreground">
                        {t.contact.address}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map */}
                <div className="aspect-video overflow-hidden rounded-2xl bg-muted shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6775693954145!2d5.836194376908!3d52.44294994069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7e2a3c3c3c3c3%3A0x0!2sIndustriestraat%2025%2C%208081%20HH%20Elburg!5e0!3m2!1sen!2snl!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Location"
                  />
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 md:py-32 bg-slate-900">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="mb-6 text-3xl font-light tracking-tight text-white md:text-4xl lg:text-5xl">
              {t.home.ctaTitle}
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="mx-auto mb-10 max-w-xl text-base leading-relaxed text-white/60 md:text-lg">
              {t.home.ctaText}
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 rounded-lg bg-primary px-8 py-4 text-sm font-medium uppercase tracking-[0.15em] text-white shadow-lg shadow-primary/25 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl"
            >
              {t.home.ctaCta}
              <ArrowRight className="h-4 w-4" />
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
