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
}

// Portfolio data - This would typically come from a CMS or database
// For now, using JSON that can be easily updated
export const portfolioItems: PortfolioItem[] = [
  // REALIZED PROJECTS
  {
    id: 'eagle-25-ts',
    title: 'Eagle 25 TS',
    titleNl: 'Eagle 25 TS',
    category: 'tender',
    status: 'realized',
    lengthRange: '7.6m',
    year: '2025',
    role: 'complete',
    image: 'https://ext.same-assets.com/1702387495/4192207021.jpeg',
    featured: true,
    published: true,
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
    image: 'https://ext.same-assets.com/1702387495/107137140.jpeg',
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
    year: '2019',
    role: 'complete',
    image: 'https://ext.same-assets.com/1702387495/1823381250.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/33237816.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/4156790115.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/3464338125.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/2686849500.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/3558028514.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/1539500599.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/1393168891.jpeg',
    featured: false,
    published: true,
  },
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
    published: true,
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
    published: true,
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
    published: true,
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
    published: true,
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
    image: 'https://ext.same-assets.com/1702387495/2381854316.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/3289741533.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/3938878689.jpeg',
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
    image: 'https://ext.same-assets.com/1702387495/606108781.jpeg',
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
