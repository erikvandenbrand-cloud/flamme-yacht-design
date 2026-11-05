# Flamme Yacht Design

Website van Flamme Yacht Design, het jachtontwerpbureau van Herbert van den
Brand. Next.js 16 (App Router), Tailwind, shadcn/ui, framer-motion, tweetalig
nl/en. Draait op Vercel, deploy op elke push naar `main`.

Erik van den Brand beheert de site; Herbert levert de inhoudelijke gegevens.

## Werkwijze

**Er staat lokaal geen Node.** Bouwen of typechecken kan hier niet — de
Vercel-build na een push is de enige controle. Houd commits daarom klein en per
onderwerp, zodat een mislukte build meteen aanwijst waar het misging.

Controleer voor het committen met grep of er geen verwijzingen achterblijven naar
velden, imports of vertaalsleutels die je hebt verwijderd. Dat is hier de fout
die het vaakst een build sloopt.

Commitberichten in het Nederlands, en leg uit *waarom* iets veranderde, niet
alleen wat.

## Feiten controleren

Twee bronnen in dit project zijn onbetrouwbaar gebleken, en dat is bij elke
inhoudelijke wijziging relevant.

De site komt uit **same.new**. Die export bevatte vier verzonnen projecten,
verzonnen jaartallen bij echte projecten en een niet-bestaande oprichter.

De **aangeleverde copyset** presenteerde onjuiste feiten als geverifieerd: een
modelnaam, twee scheepslengtes en drie gebouwde schepen die als concept stonden.

Controleer een claim over een schip daarom bij de site van de werf die het
bouwde. Die is telkens betrouwbaarder gebleken dan prijswinnaarspagina's, dan
same.new en dan de copyset. Vul liever geen veld in dan een geraden veld: het
datamodel laat lege velden bewust wegvallen.

Let op: een typenummer is niet altijd de lengte. Bij Baaiman en Eagle wel, bij
Cooper en Davy & Ørsted niet.

## Waar wat staat

| bestand | inhoud |
| --- | --- |
| `src/lib/translations.ts` | alle zichtbare tekst, nl en en; pas hier aan, niet in componenten |
| `src/lib/portfolio.ts` | projectgegevens, labels en `displayOrder` |
| `src/components/ProjectCard.tsx` | projectkaart plus de popup met carousel |
| `src/components/ContactForm.tsx` | formulier, gebruikt op homepage en contactpagina |
| `src/app/api/contact/route.ts` | verstuurt via SMTP met nodemailer |
| `src/middleware.ts` | taalkeuze op de root, standaard Nederlands |

`README.md` beschrijft het datamodel, de afbeeldingen en de omgevingsvariabelen.

## Openstaande punten

- Bouwpakket-specs en doorlooptijden per fase: bij Herbert. De bouwpakkettensectie
  is bewust niet gepubliceerd zolang de specs onbevestigd zijn.
- Vier projecten staan op `published: false` omdat ze vermoedelijk door same.new
  zijn verzonnen. Wacht op bevestiging van Herbert.
- Alumax RJ34 en DVV850 zijn nergens te vinden, ook niet door Erik.
- Privacyverklaring bestaat nog niet, de footer linkt er wel naar.
- Fotorechten: veel beeld komt van de werven. Erik heeft toestemming gegeven,
  formele bevestiging staat nog open.
