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

Staan in `public/images/projects/`, opgehaald bij flamme-yachtdesign.com en bij de
werven zelf. De site hangt niet meer aan de CDN van same.new.

Alles gaat via `next/image` met `fill`, dus de container bepaalt de maat en Next
schaalt en converteert naar AVIF of WebP. Geef bij een nieuwe afbeelding altijd
een `sizes` mee die klopt met de layout, anders haalt de browser een groter
bestand dan nodig.

Alleen de vier niet-gepubliceerde projecten in `portfolio.ts` wijzen nog naar
`ext.same-assets.com`. Zodra die zijn opgehelderd kan `remotePatterns` in
`next.config.js` weg.

Een nieuw project toevoegen: bestand in `public/images/projects/` zetten, in
`portfolio.ts` verwijzen als `/images/projects/naam.jpg`, en het id opnemen in
`displayOrder` als het vooraan moet staan.

Houd bestanden op maximaal 1600 pixels breed. Groter levert niets op en de map
loopt er snel vol mee.

## Projectgegevens

`portfolio.ts` is de bron. Een paar dingen die niet vanzelf spreken:

- **Lege velden vallen weg.** Lengte, jaar, rol, materiaal en voortstuwing zijn
  optioneel. Een ontbrekend gegeven hoort weg te blijven, niet geraden te worden.
- **`designer`** vermeldt de externe ontwerper bij projecten waar Flamme alleen
  de techniek deed. Zonder dat veld claimt de site andermans ontwerp.
- **Het typenummer is niet altijd de lengte.** Bij Baaiman en Eagle wel, bij
  Cooper en Davy & Ørsted niet. Vul lengte alleen in als de werf hem noemt.
- **`status`** kent `realized`, `building` en `concept`. Elk krijgt een eigen
  sectie op de portfoliopagina, die verdwijnt als er niets in staat.
- **`displayOrder`** bepaalt de volgorde op de site, los van de array. Wat er
  niet in staat volgt daarna.

## Scripts

| script | doet |
| --- | --- |
| `npm run dev` | lokale dev-server (vereist Node) |
| `npm run build` | productiebuild, inclusief typecheck |
| `npm run typecheck` | alleen TypeScript controleren |
