'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Settings } from 'lucide-react';
import { usePathname } from 'next/navigation';

const CONSENT_KEY = 'fyd-cookie-consent';
const CONSENT_VERSION = '1.0'; // Increment this to re-ask for consent after policy changes

interface ConsentState {
  accepted: boolean;
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  version: string;
  timestamp: number;
}

const translations = {
  en: {
    title: 'We value your privacy',
    description: 'We use cookies to enhance your browsing experience, analyze site traffic, and personalize content. You can choose which cookies you allow.',
    acceptAll: 'Accept All',
    acceptNecessary: 'Necessary Only',
    customize: 'Customize',
    savePreferences: 'Save Preferences',
    necessary: 'Necessary',
    necessaryDesc: 'Required for the website to function properly.',
    analytics: 'Analytics',
    analyticsDesc: 'Help us understand how visitors interact with our website.',
    marketing: 'Marketing',
    marketingDesc: 'Used to deliver personalized advertisements.',
    learnMore: 'Learn more about our',
    privacyPolicy: 'Privacy Policy',
  },
  nl: {
    title: 'Wij waarderen uw privacy',
    description: 'Wij gebruiken cookies om uw surfervaring te verbeteren, siteverkeer te analyseren en inhoud te personaliseren. U kunt kiezen welke cookies u toestaat.',
    acceptAll: 'Alles Accepteren',
    acceptNecessary: 'Alleen Noodzakelijk',
    customize: 'Aanpassen',
    savePreferences: 'Voorkeuren Opslaan',
    necessary: 'Noodzakelijk',
    necessaryDesc: 'Vereist voor het correct functioneren van de website.',
    analytics: 'Analyse',
    analyticsDesc: 'Helpt ons te begrijpen hoe bezoekers onze website gebruiken.',
    marketing: 'Marketing',
    marketingDesc: 'Gebruikt om gepersonaliseerde advertenties te tonen.',
    learnMore: 'Meer informatie over ons',
    privacyPolicy: 'Privacybeleid',
  },
};

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    analytics: false,
    marketing: false,
  });
  const pathname = usePathname();

  // Determine locale from pathname
  const locale = pathname?.startsWith('/nl') ? 'nl' : 'en';
  const t = translations[locale];

  useEffect(() => {
    // Check if consent has been given
    const storedConsent = localStorage.getItem(CONSENT_KEY);

    if (storedConsent) {
      try {
        const consent: ConsentState = JSON.parse(storedConsent);
        // Check if consent version matches and is not expired (1 year)
        const oneYear = 365 * 24 * 60 * 60 * 1000;
        const isExpired = Date.now() - consent.timestamp > oneYear;
        const isOutdated = consent.version !== CONSENT_VERSION;

        if (isExpired || isOutdated) {
          setShowBanner(true);
        } else {
          // Apply stored preferences
          setPreferences({
            necessary: consent.necessary,
            analytics: consent.analytics,
            marketing: consent.marketing,
          });
        }
      } catch {
        setShowBanner(true);
      }
    } else {
      // Small delay before showing banner for better UX
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const saveConsent = (accepted: boolean, prefs: typeof preferences) => {
    const consent: ConsentState = {
      accepted,
      necessary: prefs.necessary,
      analytics: prefs.analytics,
      marketing: prefs.marketing,
      version: CONSENT_VERSION,
      timestamp: Date.now(),
    };

    localStorage.setItem(CONSENT_KEY, JSON.stringify(consent));
    setShowBanner(false);
    setShowCustomize(false);

    // Here you would typically initialize analytics/marketing scripts based on consent
    if (prefs.analytics) {
      // Initialize analytics (e.g., Google Analytics)
      console.log('Analytics cookies enabled');
    }
    if (prefs.marketing) {
      // Initialize marketing (e.g., Facebook Pixel)
      console.log('Marketing cookies enabled');
    }
  };

  const handleAcceptAll = () => {
    const allAccepted = { necessary: true, analytics: true, marketing: true };
    setPreferences(allAccepted);
    saveConsent(true, allAccepted);
  };

  const handleAcceptNecessary = () => {
    const necessaryOnly = { necessary: true, analytics: false, marketing: false };
    setPreferences(necessaryOnly);
    saveConsent(true, necessaryOnly);
  };

  const handleSavePreferences = () => {
    saveConsent(true, preferences);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 md:p-6"
        >
          <div className="mx-auto max-w-4xl">
            <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-2xl shadow-black/10 overflow-hidden">
              {/* Main Banner */}
              <div className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <div className="hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-primary/10">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>

                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-medium text-foreground mb-2">
                      {t.title}
                    </h3>
                    <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                      {t.description}
                    </p>

                    {/* Customize Panel */}
                    <AnimatePresence>
                      {showCustomize && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="space-y-3 pb-4 border-b border-slate-200 mb-4">
                            {/* Necessary Cookies */}
                            <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 cursor-not-allowed">
                              <input
                                type="checkbox"
                                checked={true}
                                disabled
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-not-allowed"
                              />
                              <div className="flex-1">
                                <span className="text-sm font-medium text-foreground">{t.necessary}</span>
                                <p className="text-xs text-foreground/50 mt-0.5">{t.necessaryDesc}</p>
                              </div>
                              <span className="text-xs text-foreground/40 uppercase tracking-wider">Required</span>
                            </label>

                            {/* Analytics Cookies */}
                            <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences.analytics}
                                onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                              />
                              <div className="flex-1">
                                <span className="text-sm font-medium text-foreground">{t.analytics}</span>
                                <p className="text-xs text-foreground/50 mt-0.5">{t.analyticsDesc}</p>
                              </div>
                            </label>

                            {/* Marketing Cookies */}
                            <label className="flex items-start gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer">
                              <input
                                type="checkbox"
                                checked={preferences.marketing}
                                onChange={(e) => setPreferences({ ...preferences, marketing: e.target.checked })}
                                className="mt-0.5 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary cursor-pointer"
                              />
                              <div className="flex-1">
                                <span className="text-sm font-medium text-foreground">{t.marketing}</span>
                                <p className="text-xs text-foreground/50 mt-0.5">{t.marketingDesc}</p>
                              </div>
                            </label>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Buttons */}
                    <div className="flex flex-wrap items-center gap-3">
                      {showCustomize ? (
                        <button
                          onClick={handleSavePreferences}
                          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                        >
                          <Check className="h-4 w-4" />
                          {t.savePreferences}
                        </button>
                      ) : (
                        <>
                          <button
                            onClick={handleAcceptAll}
                            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white shadow-md transition-all hover:bg-primary/90 hover:shadow-lg"
                          >
                            <Check className="h-4 w-4" />
                            {t.acceptAll}
                          </button>
                          <button
                            onClick={handleAcceptNecessary}
                            className="inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-medium text-foreground transition-all hover:bg-slate-50"
                          >
                            {t.acceptNecessary}
                          </button>
                        </>
                      )}
                      <button
                        onClick={() => setShowCustomize(!showCustomize)}
                        className="inline-flex items-center gap-2 text-sm font-medium text-foreground/60 transition-colors hover:text-foreground"
                      >
                        <Settings className="h-4 w-4" />
                        {t.customize}
                      </button>
                    </div>
                  </div>

                  {/* Close button */}
                  <button
                    onClick={handleAcceptNecessary}
                    className="flex-shrink-0 p-2 rounded-lg text-foreground/40 hover:text-foreground hover:bg-slate-100 transition-colors"
                    aria-label="Close"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
