'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { type Locale, getTranslations } from '@/lib/translations';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const t = getTranslations(locale);
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);

      // Determine active section based on scroll position
      const sections = ['home', 'studio', 'services', 'portfolio', 'contact'];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: t.nav.home, id: 'home' },
    { href: '#studio', label: t.nav.studio, id: 'studio' },
    { href: '#services', label: t.nav.services, id: 'services' },
    { href: '#portfolio', label: t.nav.portfolio, id: 'portfolio' },
    { href: '#contact', label: t.nav.contact, id: 'contact' },
  ];

  const otherLocale = locale === 'en' ? 'nl' : 'en';

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  // Check if we're on the home page (one-pager)
  const isHomePage = pathname === `/${locale}` || pathname === `/${locale}/`;

  const linkClasses = (id: string) => `relative text-sm font-medium uppercase tracking-[0.12em] transition-all duration-300 ${
    activeSection === id
      ? isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
      : isScrolled || !isHomePage
        ? 'text-muted-foreground hover:text-foreground'
        : 'text-white/70 hover:text-white'
  }`;

  return (
    <header className="fixed left-0 right-0 top-0 z-50 px-4 py-4 md:px-6 md:py-5">
      <nav
        className={`mx-auto flex h-16 max-w-6xl items-center justify-between rounded-2xl px-5 md:px-8 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/95 shadow-lg shadow-black/[0.08] backdrop-blur-xl border border-slate-200/60'
            : isHomePage
              ? 'bg-white/[0.1] backdrop-blur-md border border-white/[0.12]'
              : 'bg-white/80 backdrop-blur-md border border-slate-200/40'
        }`}
      >
        {/* Logo */}
        {/* Alleen het beeldmerk. Het woordmerk uit het volledige logo is zwart en
            zou boven de donkere hero wegvallen; de tekst ernaast wisselt wel mee
            van kleur. De naam staat op de link zelf, zodat een schermlezer hem
            eenmaal krijgt en niet dubbel. */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3"
          aria-label="Flamme Yacht Design"
        >
          <Image
            src="/images/flamme-logo-mark.png"
            alt=""
            width={649}
            height={384}
            priority
            className="h-9 w-auto"
          />
          <div className="hidden flex-col md:flex">
            <span className={`text-[11px] font-semibold uppercase tracking-[0.12em] transition-colors duration-500 ${
              isScrolled || !isHomePage ? 'text-foreground' : 'text-white'
            }`}>
              Flamme Yacht Design
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className={linkClasses(link.id)}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute -bottom-1 left-0 h-0.5 w-full rounded-full bg-primary" />
              )}
            </a>
          ))}
        </div>

        {/* Language Switcher */}
        <div className="hidden lg:block">
          <Link
            href={`/${otherLocale}`}
            className={`rounded-lg px-3 py-1.5 text-sm font-semibold uppercase tracking-[0.1em] transition-all duration-300 ${
              isScrolled || !isHomePage
                ? 'text-muted-foreground hover:bg-slate-100 hover:text-foreground'
                : 'text-white/80 hover:bg-white/15 hover:text-white'
            }`}
          >
            {otherLocale.toUpperCase()}
          </Link>
        </div>

        {/* Mobile Menu */}
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            href={`/${otherLocale}`}
            className={`rounded-lg px-2 py-1 text-sm font-semibold uppercase tracking-[0.1em] ${
              isScrolled || !isHomePage
                ? 'text-muted-foreground'
                : 'text-white/80'
            }`}
          >
            {otherLocale.toUpperCase()}
          </Link>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <button
                className={`rounded-lg p-2.5 transition-colors ${
                  isScrolled || !isHomePage
                    ? 'text-foreground hover:bg-slate-100'
                    : 'text-white hover:bg-white/15'
                }`}
                aria-label="Open menu"
              >
                <Menu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-sm border-l-0 bg-white">
              {/* Mobile Logo — hier is de achtergrond wit, dus het volledige
                  logo met woordmerk kan gewoon. */}
              <div className="mb-10">
                <Image
                  src="/images/flamme-logo.png"
                  alt="Flamme Yacht Design"
                  width={665}
                  height={494}
                  className="h-14 w-auto"
                />
              </div>
              <div className="flex flex-col gap-6">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`text-xl font-medium tracking-wide transition-colors ${
                      activeSection === link.id
                        ? 'text-foreground'
                        : 'text-foreground/60 hover:text-foreground'
                    }`}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
