export interface PortfolioItem {
  id: string;
  title: string;
  titleNl?: string;
  category: 'motor' | 'sailing' | 'tender' | 'work';
  status: 'realized' | 'concept';
  lengthRange: string;
  year?: string;
  role: 'design' | 'naval' | 'structural' | 'complete';
  image: string;
  featured?: boolean;
  published: boolean;
  // Only filled in where it is confirmed. Anything left out simply does not
  // show up on the card, so an empty field never becomes a claim.
  yard?: string;
  material?: 'aluminium' | 'steel' | 'composite' | 'wood';
  propulsion?: 'electric' | 'diesel' | 'hybrid' | 'sail' | 'outboard';
}

// Portfolio data - This would typically come from a CMS or database
// For now, using JSON that can be easily updated
export const portfolioItems: PortfolioItem[] = [
  // REALIZED PROJECTS
  {
    id: 'eagle-25-st',
    title: 'Eagle 25 ST',
    titleNl: 'Eagle 25 ST',
    category: 'tender',
    status: 'realized',
    lengthRange: '7.60m',
    year: '2025',
    role: 'complete',
    image: '/images/projects/eagle-25-deck.jpg',
    featured: true,
    published: true,
    yard: 'Eagle Yachts',
    material: 'aluminium',
    propulsion: 'electric',
  },
  {
    id: 'cooper-680',
    title: 'Cooper 680',
    titleNl: 'Cooper 680',
    category: 'tender',
    status: 'realized',
    lengthRange: '6.8m',
    year: '2020',
    role: 'complete',
    image: '/images/projects/cooper-680.jpg',
    featured: true,
    published: true,
    yard: 'Cooperyacht',
  },
  {
    id: 'flamboyant',
    title: 'Flamboyant',
    titleNl: 'Flamboyant',
    category: 'sailing',
    status: 'realized',
    lengthRange: '12m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/flamboyant.jpg',
    featured: true,
    published: true,
  },
  {
    id: 'versafish-1400',
    title: 'Versafish 1400',
    titleNl: 'Versafish 1400',
    category: 'work',
    status: 'realized',
    lengthRange: '14m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/versafish-1400.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'e680',
    title: 'E680 Classic',
    titleNl: 'E680 Klassieke Schoonheid',
    category: 'tender',
    status: 'realized',
    lengthRange: '6.8m',
    year: '2018',
    role: 'complete',
    image: '/images/projects/e680.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'frisia-iv',
    title: 'Frisia IV',
    titleNl: 'Frisia IV',
    category: 'motor',
    status: 'realized',
    lengthRange: '18m',
    year: '2017',
    role: 'naval',
    image: '/images/projects/frisia-iv.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'slim-550',
    title: 'SLIM 550',
    titleNl: 'SLIM 550',
    category: 'tender',
    status: 'realized',
    lengthRange: '5.5m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/slim-550.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'lxry-700',
    title: 'LXRY 700',
    titleNl: 'LXRY 700',
    category: 'tender',
    status: 'realized',
    lengthRange: '7m',
    year: '2019',
    role: 'complete',
    image: '/images/projects/lxry-700.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'xplore-580',
    title: 'XPLORE Boats 580',
    titleNl: 'XPLORE Boats 580',
    category: 'tender',
    status: 'realized',
    lengthRange: '5.8m',
    year: '2018',
    role: 'complete',
    image: '/images/projects/xplore-580.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'venandi-900',
    title: 'Venandi 900',
    titleNl: 'Venandi 900',
    category: 'tender',
    status: 'realized',
    lengthRange: '9m',
    year: '2017',
    role: 'complete',
    image: '/images/projects/venandi-900.jpg',
    featured: false,
    published: true,
  },
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

  // CONCEPTS
  {
    id: 'orizzonte-ii-30m',
    title: 'Orizzonte II',
    titleNl: 'Orizzonte II',
    category: 'motor',
    status: 'concept',
    lengthRange: '30m',
    year: '2020',
    role: 'design',
    image: '/images/projects/orizzonte-ii.jpg',
    featured: true,
    published: true,
  },
  {
    id: 'timeless-25',
    title: 'Timeless 25',
    titleNl: 'Timeless 25',
    category: 'tender',
    status: 'concept',
    lengthRange: '7.5m',
    year: '2020',
    role: 'design',
    image: '/images/projects/timeless-25.jpg',
    featured: true,
    published: true,
  },
  {
    id: 'hanse-495',
    title: 'Hanse 495 Oceanproof',
    titleNl: 'Hanse 495 Oceanproof',
    category: 'sailing',
    status: 'concept',
    lengthRange: '15m',
    year: '2018',
    role: 'design',
    image: '/images/projects/hanse-495.jpg',
    featured: false,
    published: true,
  },
  {
    id: 'mtb40-breedendam',
    title: 'MTB40 Breedendam',
    titleNl: 'MTB40 Breedendam',
    category: 'motor',
    status: 'concept',
    lengthRange: '12m',
    year: '2018',
    role: 'design',
    image: '/images/projects/mtb40-breedendam.jpg',
    featured: false,
    published: true,
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
    formatLength(item.lengthRange, locale),
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
