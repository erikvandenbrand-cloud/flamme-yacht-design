/** @type {import('next').NextConfig} */
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
};

module.exports = nextConfig;
