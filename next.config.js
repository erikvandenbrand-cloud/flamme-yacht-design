/** @type {import('next').NextConfig} */

// De oude WordPress-site stond op hetzelfde domein. Die URL's staan nog in de
// index van Google; zonder redirect gaven ze een 500 en bleef Google de oude
// titels tonen. Alles permanent (308) naar de dichtstbijzijnde nieuwe pagina.
const OUD_NAAR_NIEUW = {
  '/about': '/nl/studio',
  '/design': '/nl/services',
  '/naval-architecture': '/nl/services',
  '/structural-engineering': '/nl/services',
  '/diensten': '/nl/services',
  '/contact': '/nl/contact',
  '/portfolio': '/nl/portfolio',
  '/projecten': '/nl/portfolio',
};

// Losse projectpagina's van de oude site. De nieuwe site heeft geen pagina per
// project, dus ze gaan naar het portfolio-overzicht.
const OUDE_PROJECTEN = [
  'braveheart-marine-opbouw',
  'cooper-680',
  'e680-klassieke-schoonheid',
  'elektrische-watertaxi',
  'flamboyant',
  'frisia-iv',
  'hanse-495-oceanproof',
  'lxry-700',
  'lxry-900',
  'mtb40-breedendam',
  'proefvaart-orizzonte-30m',
  'revis',
  'slim-550',
  'src-1250-alu-sar-ribs',
  'test-nieuw-onderwaterschip-cooper-800',
  'timeless-25-succes-boot-2020',
  'venandi-900',
  'versafish-1400',
  'xplore-boats-580',
];

const nextConfig = {
  images: {
    // unoptimized stond hier aan vanuit de oorspronkelijke Netlify-opzet.
    // Op Vercel doet Next de optimalisatie zelf: hij schaalt naar de gevraagde
    // maat en levert AVIF of WebP waar de browser dat aankan.
    remotePatterns: [
      // Alleen nog nodig voor de vier niet-gepubliceerde projecten die naar de
      // CDN van same.new wijzen. Zijn die opgehelderd, dan kan dit weg en is
      // de images-sectie helemaal leeg.
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
    ],
  },

  async redirects() {
    return [
      ...Object.entries(OUD_NAAR_NIEUW).map(([source, destination]) => ({
        source,
        destination,
        permanent: true,
      })),
      ...OUDE_PROJECTEN.map((slug) => ({
        source: `/${slug}`,
        destination: '/nl/portfolio',
        permanent: true,
      })),
      // De oude categorie- en paginanummerindexen van WordPress.
      {
        source: '/category/projecten/:pad*',
        destination: '/nl/portfolio',
        permanent: true,
      },
      {
        source: '/page/:nummer',
        destination: '/nl',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
