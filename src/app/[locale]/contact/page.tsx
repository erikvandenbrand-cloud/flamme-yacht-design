'use client';

import { use } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { type Locale, getTranslations } from '@/lib/translations';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FadeIn } from '@/components/animations';
import { ContactForm } from '@/components/ContactForm';

interface PageProps {
  params: Promise<{ locale: Locale }>;
}

export default function ContactPage({ params }: PageProps) {
  const { locale } = use(params);
  const t = getTranslations(locale);

  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.1]);

  return (
    <>
      {/* Hero Section with Faded Background */}
      <section className="relative flex min-h-[60vh] items-center overflow-hidden pt-24">
        {/* Background Image with parallax */}
        <motion.div className="absolute inset-0" style={{ scale: heroScale }}>
          <Image
            src="/images/projects/flamboyant.jpg"
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
              {t.contact.subtitle}
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-6 text-4xl tracking-tight text-white md:text-5xl lg:text-6xl"
            >
              {t.contact.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/70 md:text-xl max-w-xl"
            >
              {t.contact.intro}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="mt-4 text-sm text-white/60"
            >
              {t.contact.responseTime}
            </motion.p>
          </div>
        </motion.div>

        {/* Scroll fade overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>

      {/* Contact Form & Info */}
      <section className="py-24 md:py-32 lg:py-40 bg-background">
        <div className="container-wide">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact Form */}
            <FadeIn direction="left">
              <div className="card-elevated !p-10">
                <ContactForm t={t.contact} />
              </div>
            </FadeIn>

            {/* Contact Information */}
            <FadeIn direction="right" delay={0.2} className="lg:pl-8">
              <div className="space-y-8">
                {/* Email */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="card-elevated group !p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Mail className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{t.contact.emailTitle}</h3>
                      <a
                        href={`mailto:${t.contact.email}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t.contact.email}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Phone */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="card-elevated group !p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <Phone className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{t.contact.phoneTitle}</h3>
                      <a
                        href={`tel:${t.contact.phone.replace(/\s/g, '')}`}
                        className="text-muted-foreground transition-colors hover:text-primary"
                      >
                        {t.contact.phone}
                      </a>
                    </div>
                  </div>
                </motion.div>

                {/* Address */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="card-elevated group !p-6"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary/20">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-1 text-lg font-medium">{t.contact.addressTitle}</h3>
                      <p className="whitespace-pre-line text-muted-foreground">
                        {t.contact.address}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Map placeholder */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="mt-8 aspect-video overflow-hidden rounded-3xl bg-muted shadow-xl"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2427.6775693954145!2d5.836194376908!3d52.44294994069!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c7e2a3c3c3c3c3%3A0x0!2sIndustriestraat%2025%2C%208081%20HH%20Elburg!5e0!3m2!1sen!2snl!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Flamme Yacht Design Location"
                />
              </motion.div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
