# Flamme Yacht Design

Website van Flamme Yacht Design. Next.js 16 (App Router) + Tailwind + shadcn/ui + framer-motion.
Oorspronkelijk gebouwd in same.new, daarna geëxporteerd naar deze repo.

## Werkwijze

Er staat lokaal geen Node/npm. Wijzigingen gaan zo:

1. code aanpassen
2. committen en pushen naar GitHub
3. Vercel bouwt automatisch en zet de nieuwe versie live

De Vercel-build is dus ook meteen de typecheck: `next build` faalt bij TypeScript-fouten.
Houd commits daarom klein, zodat een mislukte build makkelijk te herleiden is.

## Structuur

```
src/app/[locale]/       pagina's per taal (en/nl): home, studio, services, portfolio, contact
src/app/admin/portfolio pagina om portfolio-items te bekijken
src/components/         Header, Footer, CookieConsent, *PageClient componenten
src/components/ui/      shadcn/ui componenten
src/components/animations/  FadeIn, StaggerChildren, PageTransition
src/lib/translations.ts alle teksten in en/nl
src/lib/portfolio.ts    portfolio-items (statische lijst)
```

## Teksten wijzigen

Alle zichtbare tekst staat in `src/lib/translations.ts`, per taal. Pas daar aan,
niet in de componenten zelf.

## Portfolio wijzigen

`src/lib/portfolio.ts` is een gewone TypeScript-array. Items toevoegen of aanpassen
doe je daar. De admin-pagina toont ze alleen; die schrijft niets terug.

## Afbeeldingen

De afbeeldingen komen nog van `ext.same-assets.com` — de CDN van same.new. Zolang die
blijft bestaan werkt het, maar de site is er wel afhankelijk van. Op termijn beter:
de bestanden naar `public/` halen en de paden in `portfolio.ts` omzetten.

## Scripts

| script | doet |
| --- | --- |
| `npm run dev` | lokale dev-server (vereist Node) |
| `npm run build` | productiebuild, inclusief typecheck |
| `npm run typecheck` | alleen TypeScript controleren |
