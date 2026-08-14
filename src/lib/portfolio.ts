export interface PortfolioItem {
  id: string;
  title: string;
  titleNl?: string;
  category: 'motor' | 'sailing' | 'tender' | 'work';
  status: 'realized' | 'concept';
  // Lengte, jaar en rol zijn optioneel: van een deel van de projecten is dat
  // niet vastgelegd. Liever een regel die wegvalt dan een verzonnen getal.
  lengthRange?: string;
  year?: string;
  role?: 'design' | 'naval' | 'structural' | 'complete';
  image: string;
  // Extra foto's voor de carousel. De cover uit `image` telt als eerste beeld,
  // dus hier staan alleen de aanvullende.
  images?: string[];
  featured?: boolean;
  published: boolean;
  // Alleen ingevuld waar het bevestigd is op flamme-yachtdesign.com of bij de
  // werf zelf. Een leeg veld valt weg en wordt dus nooit een claim.
  yard?: string;
  material?: 'aluminium' | 'steel' | 'composite' | 'wood';
  propulsion?: 'electric' | 'diesel' | 'hybrid' | 'sail' | 'outboard';
  // De externe ontwerper, waar Flamme alleen de techniek deed. Zonder deze
  // vermelding zou het portfolio andermans ontwerp als eigen werk tonen.
  designer?: string;
}

// Gegevens overgenomen van flamme-yachtdesign.com, per project geverifieerd op
// de detailpagina. Jaartallen staan er alleen bij waar de site een concrete
// gebeurtenis noemt, zoals een tewaterlating of oplevering.
export const portfolioItems: PortfolioItem[] = [
  {
    // TS, niet ST: de werf voert de hele reeks als 25TS, 28TS en 32TS, en
    // Flamme zelf schrijft het ook zo. Alleen de prijswinnaarspagina hanteert
    // ST, en spreekt zichzelf daar tegen met TS25E.
    id: 'eagle-25-ts',
    title: 'Eagle 25 TS',
    titleNl: 'Eagle 25 TS',
    category: 'tender',
    status: 'realized',
    // 7,5 m volgens Eagle Boats zelf. De copyset hield 7,60 m aan.
    lengthRange: '7.5m',
    year: '2025',
    role: 'complete',
    image: '/images/projects/eagle-25-deck.jpg',
    images: [
      '/images/projects/eagle-25-interieur.jpg',
      '/images/projects/eagle-25ts-3.webp',
      '/images/projects/eagle-25ts-4.webp',
      '/images/projects/eagle-25ts-5.jpg',
      '/images/projects/eagle-25ts-6.webp',
      '/images/projects/eagle-25ts-7.jpg',
      '/images/projects/eagle-25.jpg',
    ],
    featured: true,
    published: true,
    yard: 'Eagle Boats',
    material: 'aluminium',
    propulsion: 'electric',
  },
  {
    id: 'venandi-900',
    title: 'Venandi 900',
    titleNl: 'Venandi 900',
    category: 'tender',
    status: 'realized',
    lengthRange: '9m',
    role: 'naval',
    image: '/images/projects/venandi-900.jpg',
    featured: true,
    published: true,
    material: 'aluminium',
    designer: 'Guido de Groot',
  },
  {
    id: 'mtb40-breedendam',
    title: 'MTB40 Breedendam',
    titleNl: 'MTB40 Breedendam',
    category: 'motor',
    status: 'realized',
    lengthRange: '12m',
    role: 'structural',
    image: '/images/projects/mtb40-breedendam.jpg',
    featured: true,
    published: true,
    material: 'aluminium',
    designer: 'Guido de Groot',
  },
  {
    id: 'watertaxi-rotterdam',
    title: 'Electric water taxi',
    titleNl: 'Elektrische watertaxi',
    category: 'work',
    status: 'realized',
    role: 'complete',
    image: '/images/projects/watertaxi-rotterdam.jpg',
    featured: true,
    published: true,
    material: 'aluminium',
    propulsion: 'electric',
  },
  {
    id: 'cooper-680',
    title: 'Cooper 680',
    titleNl: 'Cooper 680',
    category: 'tender',
    status: 'realized',
    // 7,20 m volgens Cooperyacht zelf. Bij dit merk is het typenummer dus geen
    // lengte, anders dan bij Baaiman.
    lengthRange: '7.20m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/cooper-680.jpg',
    images: [
      '/images/projects/cooper-680-2.jpg',
      '/images/projects/cooper-680-3.jpg',
    ],
    featured: true,
    published: true,
    yard: 'Cooperyacht',
    material: 'composite',
    propulsion: 'diesel',
  },
  {
    id: 'orizzonte-ii-30m',
    title: 'Orizzonte II',
    titleNl: 'Orizzonte II',
    category: 'motor',
    status: 'realized',
    lengthRange: '30m',
    year: '2020',
    role: 'structural',
    image: '/images/projects/orizzonte-ii.jpg',
    featured: true,
    published: true,
    material: 'aluminium',
    designer: 'Theo Werner',
  },
  {
    id: 'frisia-iv',
    title: 'Frisia IV',
    titleNl: 'Frisia IV',
    category: 'motor',
    status: 'realized',
    lengthRange: '40m',
    image: '/images/projects/frisia-iv.jpg',
    featured: true,
    published: true,
  },
  {
    id: 'flamboyant',
    title: 'Flamboyant',
    titleNl: 'Flamboyant',
    category: 'sailing',
    status: 'realized',
    lengthRange: '12m',
    image: '/images/projects/flamboyant.jpg',
    featured: true,
    published: true,
    propulsion: 'sail',
  },
  {
    id: 'versafish-1400',
    title: 'Versafish 1400',
    titleNl: 'Versafish 1400',
    category: 'work',
    status: 'realized',
    lengthRange: '14m',
    role: 'complete',
    image: '/images/projects/versafish-1400.jpg',
    featured: false,
    published: true,
    yard: 'Stapert Watersport',
    material: 'aluminium',
  },
  {
    id: 'timeless-25',
    title: 'Timeless 25',
    titleNl: 'Timeless 25',
    category: 'tender',
    status: 'realized',
    lengthRange: '7.6m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/timeless-25.jpg',
    featured: true,
    published: true,
    yard: 'Stapert Watersport',
    material: 'aluminium',
  },
  {
    id: 'e680',
    title: 'E680 Classic',
    titleNl: 'E680 Klassieke Schoonheid',
    category: 'tender',
    status: 'realized',
    lengthRange: '6.8m',
    role: 'complete',
    image: '/images/projects/e680.jpg',
    featured: false,
    published: true,
    yard: 'Van Vossen',
    material: 'aluminium',
    propulsion: 'electric',
  },
  {
    id: 'slim-550',
    title: 'SLIM 550',
    titleNl: 'SLIM 550',
    category: 'tender',
    status: 'realized',
    lengthRange: '5.5m',
    role: 'complete',
    image: '/images/projects/slim-550.jpg',
    images: [
      '/images/projects/slim-550-2.jpg',
      '/images/projects/slim-550-3.jpg',
      '/images/projects/slim-550-4.jpg',
      '/images/projects/slim-550-5.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Baaiman Jachtbouw',
    material: 'aluminium',
  },
  {
    id: 'lxry-700',
    title: 'LXRY 700',
    titleNl: 'LXRY 700',
    category: 'tender',
    status: 'realized',
    lengthRange: '7m',
    role: 'complete',
    image: '/images/projects/lxry-700.jpg',
    images: [
      '/images/projects/lxry-700-2.jpg',
      '/images/projects/lxry-700-3.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Baaiman Jachtbouw',
    material: 'aluminium',
  },
  {
    id: 'lxry-900',
    title: 'LXRY 900',
    titleNl: 'LXRY 900',
    category: 'tender',
    status: 'realized',
    lengthRange: '9m',
    role: 'complete',
    image: '/images/projects/lxry-900.jpg',
    images: [
      '/images/projects/lxry-900-4.jpg',
      '/images/projects/lxry-900-5.jpg',
      '/images/projects/lxry-900-6.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Baaiman Jachtbouw',
    material: 'aluminium',
  },
  {
    id: 'xplore-580',
    title: 'XPLORE Boats 580',
    titleNl: 'XPLORE Boats 580',
    category: 'tender',
    status: 'realized',
    lengthRange: '5.8m',
    role: 'complete',
    image: '/images/projects/xplore-580.jpg',
    featured: false,
    published: true,
    material: 'aluminium',
  },
  {
    id: 'cooper-800',
    title: 'Cooper 800',
    titleNl: 'Cooper 800',
    category: 'tender',
    status: 'realized',
    // Geen lengte: de 680 blijkt 7,20 m, dus bij Cooper zegt het typenummer
    // niets over de lengte. De eerder aangenomen 8 m is daarmee onbruikbaar.
    role: 'naval',
    image: '/images/projects/cooper-800.jpg',
    featured: false,
    published: true,
    yard: 'Cooperyacht',
    material: 'composite',
  },
  {
    id: 'revis',
    title: 'Revis 710',
    titleNl: 'Revis 710',
    category: 'tender',
    status: 'realized',
    lengthRange: '7.1m',
    role: 'design',
    image: '/images/projects/revis.jpg',
    featured: false,
    published: true,
    yard: 'Triple Marine',
    material: 'aluminium',
  },
  {
    id: 'hanse-495',
    title: 'Hanse 495 Oceanproof',
    titleNl: 'Hanse 495 Oceanproof',
    category: 'sailing',
    status: 'realized',
    lengthRange: '15m',
    role: 'structural',
    image: '/images/projects/hanse-495.jpg',
    featured: false,
    published: true,
    material: 'composite',
    propulsion: 'sail',
  },
  {
    id: 'src-1250-alu',
    title: 'SRC 1250 ALU',
    titleNl: 'SRC 1250 ALU',
    category: 'work',
    status: 'realized',
    lengthRange: '12.5m',
    role: 'complete',
    image: '/images/projects/sar-ribs-src-1250.jpg',
    featured: false,
    published: true,
    material: 'aluminium',
  },
  {
    id: 'braveheart-opbouw',
    title: 'Braveheart Marine superstructure',
    titleNl: 'Braveheart Marine opbouw',
    category: 'work',
    status: 'realized',
    role: 'structural',
    image: '/images/projects/braveheart.jpg',
    featured: false,
    published: true,
    material: 'aluminium',
  },

  // ------------------------------------------------------------------
  // Van volledig ontwerp tot bouwpakket, bij werven die niet op
  // flamme-yachtdesign.com staan. Maten en materiaal komen van de werf zelf.
  // Jaartallen vermeldt geen van die sites, dus die staan er niet bij.
  // ------------------------------------------------------------------
  {
    id: 'eagle-28ts',
    title: 'Eagle 28TS',
    titleNl: 'Eagle 28TS',
    category: 'tender',
    status: 'realized',
    lengthRange: '8.5m',
    role: 'complete',
    image: '/images/projects/eagle-28ts-2.jpg',
    images: [
      '/images/projects/eagle-28ts-1.webp',
      '/images/projects/eagle-28ts-3.jpg',
      '/images/projects/eagle-28ts-4.jpg',
      '/images/projects/eagle-28ts-5.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Eagle Boats',
    material: 'aluminium',
  },
  {
    id: 'eagle-32ts',
    title: 'Eagle 32TS',
    titleNl: 'Eagle 32TS',
    category: 'tender',
    status: 'realized',
    lengthRange: '9.75m',
    role: 'complete',
    image: '/images/projects/eagle-32ts-1.jpg',
    images: [
      '/images/projects/eagle-32ts-2.jpg',
      '/images/projects/eagle-32ts-3.jpg',
      '/images/projects/eagle-32ts-4.jpg',
      '/images/projects/eagle-32ts-5.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Eagle Boats',
    material: 'aluminium',
  },
  {
    id: 'eagle-force-550',
    title: 'Eagle Force 550',
    titleNl: 'Eagle Force 550',
    category: 'work',
    status: 'realized',
    role: 'complete',
    image: '/images/projects/force-550-1.jpg',
    images: [
      '/images/projects/force-550-2.jpg',
      '/images/projects/force-550-3.jpg',
      '/images/projects/force-550-4.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Eagle Boats',
    material: 'aluminium',
  },
  {
    id: 'amalfi-760',
    title: 'Amalfi 760 Hybrid',
    titleNl: 'Amalfi 760 Hybrid',
    category: 'tender',
    status: 'realized',
    lengthRange: '7.6m',
    role: 'complete',
    image: '/images/projects/amalfi-760-1.jpg',
    images: ['/images/projects/amalfi-760-2.jpg'],
    featured: false,
    published: true,
    yard: 'Sognare Yachts',
    material: 'aluminium',
    propulsion: 'hybrid',
  },
  {
    id: 'stormer-porter-110',
    title: 'Stormer Porter 110',
    titleNl: 'Stormer Porter 110',
    category: 'work',
    status: 'realized',
    lengthRange: '11.1m',
    role: 'complete',
    image: '/images/projects/porter-110-1.jpg',
    images: [
      '/images/projects/porter-110-2.jpg',
      '/images/projects/porter-110-3.jpg',
      '/images/projects/porter-110-4.jpg',
    ],
    featured: false,
    published: true,
    yard: 'Stormer Workboats',
    material: 'aluminium',
  },

  // ------------------------------------------------------------------
  // NOG TOE TE VOEGEN - gegevens bekend, foto ontbreekt
  //
  // Deze twee staan hier als aantekening en niet als item, omdat een kaart
  // zonder foto stuk oogt.
  //
  // Amsterdam Yachts AY-835: 8,35 x 2,50 m, polyester, elektrische of
  //   conventionele buitenboordmotor. Opvolger van de AY-550. Het SSL-
  //   certificaat van ay-yachts.com is ongeldig, dus daar was niets op te halen.
  //
  // Alumax RJ28: 8 x 3 m, aluminium, diesel/elektrisch/hybride, werf Alumax
  //   Boats in Meppel. Hun site laadt de foto's via JavaScript, dus er zijn
  //   geen directe bestandsadressen.
  //
  // Nog helemaal niet gevonden: Eagle C999, Cooper 34, Lynx MV10,
  // Alumax RJ34, Alumax DVV850, Davy & Orsted 750, Ribbon 45mk2.
  // ------------------------------------------------------------------

  // ------------------------------------------------------------------
  // NIET GEPUBLICEERD - herkomst onbevestigd
  //
  // Deze vier komen niet voor op flamme-yachtdesign.com, terwijl elk ander
  // project hier wel een tegenhanger heeft op die site, met foto en al. De
  // namen zijn bovendien opvallend generiek. Het vermoeden is dat same.new
  // ze heeft verzonnen om het portfolio te vullen.
  //
  // Ze staan daarom op published: false in plaats van dat ze verwijderd zijn.
  // Bevestigt Herbert dat het echte opdrachten waren, dan gaat de vlag om en
  // is er alleen nog een foto nodig. Zo niet, dan kunnen ze weg.
  // ------------------------------------------------------------------
  {
    id: 'patrol-1500',
    title: 'Patrol 1500',
    titleNl: 'Patrol 1500',
    category: 'work',
    status: 'realized',
    lengthRange: '15m',
    year: '2016',
    role: 'complete',
    image: 'https://ext.same-assets.com/1702387495/1167109098.jpeg',
    featured: false,
    published: false,
  },
  {
    id: 'classic-launch-650',
    title: 'Classic Launch 650',
    titleNl: 'Klassieke Sloep 650',
    category: 'tender',
    status: 'realized',
    lengthRange: '6.5m',
    year: '2017',
    role: 'complete',
    image: 'https://ext.same-assets.com/1702387495/365169060.jpeg',
    featured: false,
    published: false,
  },
  {
    id: 'survey-vessel-12',
    title: 'Survey Vessel 12m',
    titleNl: 'Onderzoeksvaartuig 12m',
    category: 'work',
    status: 'realized',
    lengthRange: '12m',
    year: '2015',
    role: 'naval',
    image: 'https://ext.same-assets.com/1702387495/3300859654.jpeg',
    featured: false,
    published: false,
  },
  {
    id: 'dayboat-850',
    title: 'Dayboat 850',
    titleNl: 'Dagboot 850',
    category: 'tender',
    status: 'realized',
    lengthRange: '8.5m',
    year: '2016',
    role: 'complete',
    image: 'https://ext.same-assets.com/1702387495/445813618.jpeg',
    featured: false,
    published: false,
  },
];

export function getPublishedPortfolio() {
  return portfolioItems.filter(item => item.published);
}

export function getFeaturedPortfolio() {
  return portfolioItems.filter(item => item.published && item.featured);
}

export function getRealizedProjects() {
  return portfolioItems.filter(item => item.published && item.status === 'realized');
}

export function getConceptProjects() {
  return portfolioItems.filter(item => item.published && item.status === 'concept');
}

export function getPortfolioByCategory(category: PortfolioItem['category']) {
  return portfolioItems.filter(item => item.published && item.category === category);
}

export function getPortfolioItem(id: string) {
  return portfolioItems.find(item => item.id === id);
}

export const categoryLabels = {
  en: {
    motor: 'Motor Yacht',
    sailing: 'Sailing Yacht',
    tender: 'Tender',
    work: 'Workboat',
  },
  nl: {
    motor: 'Motorjacht',
    sailing: 'Zeiljacht',
    tender: 'Tender',
    work: 'Werkschip',
  },
};

export const roleLabels = {
  en: {
    design: 'Design',
    naval: 'Naval Architecture',
    structural: 'Structural Engineering',
    complete: 'Complete Design',
  },
  nl: {
    design: 'Ontwerp',
    naval: 'Scheepsarchitectuur',
    structural: 'Constructie-Engineering',
    complete: 'Volledig Ontwerp',
  },
};

export const statusLabels = {
  en: {
    realized: 'Realized Projects',
    concept: 'Concepts',
  },
  nl: {
    realized: 'Gerealiseerde Projecten',
    concept: 'Concepten',
  },
};

// Short form for on the cards themselves, set in small capitals.
export const statusShortLabels = {
  en: {
    realized: 'Built',
    concept: 'Concept',
  },
  nl: {
    realized: 'Gebouwd',
    concept: 'Concept',
  },
};

export const materialLabels = {
  en: {
    aluminium: 'aluminium',
    steel: 'steel',
    composite: 'composite',
    wood: 'wood',
  },
  nl: {
    aluminium: 'aluminium',
    steel: 'staal',
    composite: 'composiet',
    wood: 'hout',
  },
};

export const propulsionLabels = {
  en: {
    electric: 'electric',
    diesel: 'diesel',
    hybrid: 'hybrid',
    sail: 'sail',
    outboard: 'outboard',
  },
  nl: {
    electric: 'elektrisch',
    diesel: 'diesel',
    hybrid: 'hybride',
    sail: 'zeil',
    outboard: 'buitenboord',
  },
};

export const designerCredit = {
  en: 'Design by',
  nl: 'Ontwerp van',
};

type PortfolioLocale = 'en' | 'nl';

// '7.60m' becomes '7,60 m' in Dutch and '7.60 m' in English.
export function formatLength(lengthRange: string, locale: PortfolioLocale) {
  const spaced = lengthRange.replace(/\s*m$/i, ' m');
  return locale === 'nl' ? spaced.replace('.', ',') : spaced;
}

// Length, material, propulsion and yard on one line. Missing fields drop out
// rather than showing up empty.
export function projectMeta(item: PortfolioItem, locale: PortfolioLocale) {
  return [
    item.lengthRange ? formatLength(item.lengthRange, locale) : undefined,
    item.material ? materialLabels[locale][item.material] : undefined,
    item.propulsion ? propulsionLabels[locale][item.propulsion] : undefined,
    item.yard,
  ]
    .filter(Boolean)
    .join(' · ');
}

export function projectTitle(item: PortfolioItem, locale: PortfolioLocale) {
  return locale === 'nl' && item.titleNl ? item.titleNl : item.title;
}

// Cover plus eventuele extra foto's, in de volgorde waarin de carousel ze toont.
export function projectGallery(item: PortfolioItem) {
  return [item.image, ...(item.images ?? [])];
}
