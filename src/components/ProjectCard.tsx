'use client';

import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from '@/components/ui/dialog';
import {
  type PortfolioItem,
  designerCredit,
  projectGallery,
  projectMeta,
  projectTitle,
  roleLabels,
  statusShortLabels,
} from '@/lib/portfolio';
import type { Locale } from '@/lib/translations';

interface ProjectCardProps {
  project: PortfolioItem;
  locale: Locale;
  index: number;
}

export function ProjectCard({ project, locale, index }: ProjectCardProps) {
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const gallery = projectGallery(project);
  const hasCarousel = gallery.length > 1;

  const title = projectTitle(project, locale);
  const meta = projectMeta(project, locale);

  const next = useCallback(
    () => setCurrent((i) => (i + 1) % gallery.length),
    [gallery.length],
  );
  const previous = useCallback(
    () => setCurrent((i) => (i - 1 + gallery.length) % gallery.length),
    [gallery.length],
  );

  // Opnieuw openen begint weer bij de eerste foto.
  useEffect(() => {
    if (open) setCurrent(0);
  }, [open]);

  // Pijltjestoetsen alleen luisteren zolang de popup open is en er iets te
  // bladeren valt, anders vangen we toetsaanslagen af die niet van ons zijn.
  useEffect(() => {
    if (!open || !hasCarousel) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowRight') next();
      if (event.key === 'ArrowLeft') previous();
    };

    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open, hasCarousel, next, previous]);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, delay: index * 0.03 }}
      >
        <button
          type="button"
          onClick={() => setOpen(true)}
          className="group block w-full text-left"
        >
          {/* 3:2 in plaats van 4:3. De bronfoto's zijn overwegend breed, tot 2:1
              toe, en een boot is nu eenmaal een lang en laag ding: in een smaller
              kader snijdt de crop juist de boeg en de spiegel weg. */}
          <div className="relative aspect-[3/2] overflow-hidden rounded-xl bg-muted">
            <Image
              src={project.image}
              alt={title}
              fill
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {hasCarousel && (
              <span className="absolute bottom-2 right-2 rounded-full bg-black/60 px-2 py-0.5 text-[0.65rem] font-medium text-white">
                {gallery.length}
              </span>
            )}
          </div>
          <div className="pt-4">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {statusShortLabels[locale][project.status]}
              {project.year ? ` · ${project.year}` : ''}
            </p>
            <h3 className="mt-1.5 text-lg font-medium tracking-tight text-foreground group-hover:text-primary">
              {title}
            </h3>
            {meta && (
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                {meta}
              </p>
            )}
            {project.role && (
              <p className="mt-0.5 text-sm text-muted-foreground">
                {roleLabels[locale][project.role]}
              </p>
            )}
          </div>
        </button>
      </motion.article>

      <Dialog open={open} onOpenChange={setOpen}>
        {/* De ingebouwde sluitknop is donkere tekst; boven een foto zou die
            wegvallen, vandaar wit en boven de afbeelding getild. */}
        <DialogContent className="max-w-4xl gap-0 overflow-hidden p-0 [&>button]:z-20 [&>button]:text-white">
          <div className="relative aspect-[16/10] bg-slate-950">
            <Image
              src={gallery[current]}
              alt={title}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-contain"
              priority
            />
            <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-black/50 to-transparent" />

            {hasCarousel && (
              <>
                <button
                  type="button"
                  onClick={previous}
                  aria-label={locale === 'nl' ? 'Vorige foto' : 'Previous photo'}
                  className="absolute left-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={next}
                  aria-label={locale === 'nl' ? 'Volgende foto' : 'Next photo'}
                  className="absolute right-3 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-colors hover:bg-black/70"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                <div className="absolute inset-x-0 bottom-4 z-10 flex justify-center gap-2">
                  {gallery.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setCurrent(i)}
                      aria-label={`${locale === 'nl' ? 'Foto' : 'Photo'} ${i + 1}`}
                      aria-current={i === current}
                      className={
                        i === current
                          ? 'h-1.5 w-6 rounded-full bg-white'
                          : 'h-1.5 w-1.5 rounded-full bg-white/50 transition-colors hover:bg-white/80'
                      }
                    />
                  ))}
                </div>
              </>
            )}
          </div>

          <div className="px-6 py-6 md:px-8">
            <p className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
              {statusShortLabels[locale][project.status]}
              {project.year ? ` · ${project.year}` : ''}
            </p>
            <DialogTitle className="mt-2 text-2xl font-light tracking-tight">
              {title}
            </DialogTitle>
            {meta && (
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">
                {meta}
              </p>
            )}
            {project.role && (
              <p className="mt-1 text-base text-muted-foreground">
                {roleLabels[locale][project.role]}
              </p>
            )}
            {project.designer && (
              <p className="mt-4 border-t border-border/50 pt-4 text-sm text-muted-foreground">
                {designerCredit[locale]} {project.designer}
              </p>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
