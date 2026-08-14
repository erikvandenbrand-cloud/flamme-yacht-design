export type Locale = 'en' | 'nl';

export const translations = {
  en: {
    // Navigation
    nav: {
      home: 'Home',
      studio: 'Studio',
      services: 'Services',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },

    // Meta
    meta: {
      title: 'Flamme Yacht Design | Yacht Design, Naval Architecture & Engineering',
      description: 'Independent Dutch yacht design studio combining yacht design, naval architecture and engineering, from first concept to construction-ready design.',
      studioTitle: 'Studio | Flamme Yacht Design',
      studioDescription: 'Meet Herbert van den Brand, founder of Flamme Yacht Design. With experience at Royal Huisman and decades of yacht design expertise, we bring your vision to reality.',
      servicesTitle: 'Services | Flamme Yacht Design',
      servicesDescription: 'Comprehensive yacht design services including exterior styling, naval architecture, structural engineering, and support for shipyards and builders.',
      portfolioTitle: 'Portfolio | Flamme Yacht Design',
      portfolioDescription: 'Motor yachts, sailing yachts, tenders and workboats, from tenders up to 40 metres, each with the yard that built it and the role Flamme had.',
      contactTitle: 'Contact | Flamme Yacht Design',
      contactDescription: 'Get in touch with Flamme Yacht Design for your next yacht project. Based in Elburg, Netherlands, we work with shipyards and private clients worldwide.',
    },

    // Home page
    home: {
      heroEyebrow: 'YACHT DESIGN · NAVAL ARCHITECTURE · ENGINEERING',
      heroTitle: 'First the feeling. Then the lines.',
      heroTagline: 'Yacht design, naval architecture and engineering in one pair of hands, so the yacht you picture is the yacht that gets launched.',
      heroCta: 'View our work',
      heroCtaSecondary: 'How we work',

      introTitle: 'From an idea to a yacht that can actually be built.',
      introText: 'A successful yacht is more than styling alone. Proportion, performance, structure, systems and production have to work together from the first line.',
      introText2: 'Flamme Yacht Design combines yacht design, naval architecture and engineering in a single process. The same person who sets the sheer line knows how the structure underneath is built up. From tenders to 40 metres, for shipyards and private owners.',

      statements: [
        {
          title: 'DESIGN WITH PURPOSE',
          text: 'Strong proportions and a character of its own, without separating form from function.',
        },
        {
          title: 'ENGINEERING FROM THE FIRST LINE',
          text: 'Hull form, stability, structure and systems are considered from the start.',
        },
        {
          title: 'BUILT AROUND REALITY',
          text: 'Drawings a shipyard can actually build from.',
        },
      ],

      // Two audiences, two different promises. Owners are bought with feeling,
      // yards with predictability — so the tone differs per column on purpose.
      audiences: {
        eyebrow: 'For owners and for shipyards',
        items: [
          {
            label: 'For owners',
            title: 'Translating your vision',
            text: 'You already know how it should feel. How the boat moves through the water, where you will want to stand, how quiet it gets when the engine goes off. That picture usually arrives long before the words for it.',
            text2: 'We translate it into lines, dimensions and drawings without losing anything on the way. You do not have to speak the technical language. That is what we are for.',
          },
          {
            label: 'For shipyards',
            title: 'A tool for a smarter build',
            text: 'A design that is right saves weeks on the floor. We draw with production in mind: how the structure is built up, in what order, and where your people need to be able to reach.',
            text2: 'That means fewer questions during the build, fewer changes afterwards and fewer surprises in the schedule. The same designer who sets the sheer line knows what happens on the shop floor.',
          },
        ],
      },

      servicesTitle: 'What We Do',
      servicesSubtitle: 'From concept to construction-ready design',

      portfolioTitle: 'Built and afloat',
      portfolioSubtitle: 'Portfolio',
      portfolioMore: 'Show more projects',

      ctaTitle: 'Begin Your Journey',
      ctaText: 'Whether you\'re a shipyard, builder, or private client, we\'d be pleased to discuss your next yacht project.',
      ctaCta: 'Get in touch',
    },

    // Studio page
    studio: {
      title: 'Independent thinking. Personal involvement.',
      subtitle: 'Studio',
      intro: 'Founded in 2006 by naval architect Herbert van den Brand.',

      founderTitle: 'Herbert van den Brand',
      founderRole: 'Naval architect and founder',
      founderBio: 'Flamme Yacht Design was founded and is led by naval architect Herbert van den Brand. After years in the Dutch yacht-building industry, including Royal Huisman, he started the studio in 2006.',
      founderBio2: 'Since then Flamme has worked on motor yachts, sailing yachts, tenders, workboats and a range of custom projects. What defines the studio is the direct link between design and engineering: from the first conversation to the technical work, Herbert stays involved himself. No handover between a design team and an engineering team, but one continuous line.',
    },

    // Services page
    services: {
      title: 'Services',
      subtitle: 'From initial concept to production-ready design',
      intro: 'We offer a complete range of yacht design services, guiding projects from the first sketch through to detailed construction documentation. Our integrated approach ensures consistency and efficiency throughout the design process.',

      deliverablesLabel: 'What you get',

      // Lead times per discipline are still missing — Herbert has to supply them
      // before a leadTime field can be added here.
      disciplines: [
        {
          number: '01',
          title: 'Yacht Design',
          subtitle: 'Form, proportion & function',
          text: 'From first sketches and concept development to exterior styling, layout and 3D form development. We develop yachts with a character of their own, in which appearance, use and technology are considered together from the outset.',
          points: [
            'Sketches and concept directions',
            'Exterior styling and sheer line',
            'General arrangement',
            '3D model and renders',
          ],
        },
        {
          number: '02',
          title: 'Naval Architecture',
          subtitle: 'Performance behind the design',
          text: 'A yacht has to perform as well as it looks. Hull form, hydrostatics, stability, weight distribution and propulsion are developed into a balanced, efficient vessel.',
          points: [
            'Lines plan and hull form',
            'Stability and hydrostatics',
            'Resistance and propulsion',
            'Weight estimate and distribution',
          ],
        },
        {
          number: '03',
          title: 'Engineering',
          subtitle: 'From design to production',
          text: 'The design is translated into structural and production information that lets a shipyard build efficiently and accurately, matched to material, production method and applicable rules.',
          points: [
            'Structural calculations',
            'Production and detail drawings',
            'Material and plate lists',
            'Class and CE documentation',
          ],
        },
      ],

      additional: [
        'Shipyard support',
        'Refit & redesign',
        'Design optimisation',
        'Technical consultancy',
      ],

      ctaTitle: 'Discuss your project',
      ctaText: 'Every yacht project is unique. Contact us to discuss your requirements and how we can support your vision.',
      ctaCta: 'Contact us',
    },

    // Portfolio page
    portfolio: {
      title: 'Built and afloat',
      subtitle: 'Portfolio',
      intro: 'Projects that are actually sailing, with the yard that built them and the role Flamme had in each.',

      filterAll: 'All',
      filterMotor: 'Motor Yachts',
      filterSailing: 'Sailing Yachts',
      filterTender: 'Tenders & Sloops',
      filterWork: 'Workboats',

      roleDesign: 'Design',
      roleNaval: 'Naval Architecture',
      roleStructural: 'Structural Engineering',
      roleComplete: 'Complete Design',
    },

    // Contact page
    contact: {
      title: 'Have a project in mind?',
      subtitle: 'Contact',
      intro: 'Whether you are developing a new yacht, refining an existing concept or looking for design and engineering support, we would be glad to discuss it.',
      responseTime: 'We reply within two working days.',

      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you for your message. We reply within two working days.',
      formSelect: 'Select a subject',
      formSending: 'Sending...',
      formError: 'Sending failed. Please email us directly:',

      // A second opinion is a low threshold to cross, and often the first
      // conversation starts there.
      subjectOptions: [
        'New design',
        'Naval architecture only',
        'Engineering or build package',
        'Refit or modification',
        'Second opinion / advice',
        'Other',
      ],

      addressTitle: 'Visit us',
      address: 'Industriestraat 25\n8081 HH Elburg\nThe Netherlands',

      phoneTitle: 'Call us',
      phone: '+31 6 265 282 89',

      emailTitle: 'Email us',
      email: 'info@flamme-yachtdesign.com',
    },

    // Footer
    footer: {
      tagline: 'Yacht design, naval architecture and engineering.',
      copyright: '© 2026 Flamme Yacht Design. All rights reserved.',
      privacy: 'Privacy Policy',
    },
  },

  nl: {
    // Navigation
    nav: {
      home: 'Home',
      studio: 'Studio',
      services: 'Expertise',
      portfolio: 'Portfolio',
      contact: 'Contact',
    },

    // Meta
    meta: {
      title: 'Flamme Yacht Design | Jachtontwerp, Scheepsarchitectuur & Engineering',
      description: 'Nederlands jachtontwerpbureau voor jachtontwerp, scheepsarchitectuur en engineering. Van eerste concept tot productierijp ontwerp.',
      studioTitle: 'Studio | Flamme Yacht Design',
      studioDescription: 'Maak kennis met Herbert van den Brand, oprichter van Flamme Yacht Design. Met jarenlange ervaring bij Royal Huisman en diepgaande expertise in jachtontwerp.',
      servicesTitle: 'Expertise | Flamme Yacht Design',
      servicesDescription: 'Volledig geïntegreerde ontwerpservices: van exterieurontwerp en scheepsarchitectuur tot constructie-engineering en werfbegeleiding.',
      portfolioTitle: 'Portfolio | Flamme Yacht Design',
      portfolioDescription: 'Motorjachten, zeiljachten, tenders en werkschepen, van tender tot 40 meter, elk met de werf erbij en de rol die Flamme had.',
      contactTitle: 'Contact | Flamme Yacht Design',
      contactDescription: 'Neem contact op voor uw volgende jachtproject. Vanuit Elburg werken wij samen met werven en particuliere opdrachtgevers wereldwijd.',
    },

    // Home page
    home: {
      heroEyebrow: 'JACHTONTWERP · SCHEEPSARCHITECTUUR · ENGINEERING',
      heroTitle: 'Eerst het gevoel. Dan de lijnen.',
      heroTagline: 'Jachtontwerp, scheepsarchitectuur en engineering in één hand, zodat het schip dat u voor zich ziet ook het schip is dat te water gaat.',
      heroCta: 'Bekijk onze projecten',
      heroCtaSecondary: 'Hoe we werken',

      introTitle: 'Van idee naar een jacht dat écht gebouwd kan worden.',
      introText: 'Een goed jacht begint niet bij styling alleen. Vorm, vaareigenschappen, constructie, techniek en productie moeten vanaf de eerste lijn met elkaar kloppen.',
      introText2: 'Flamme Yacht Design combineert jachtontwerp, scheepsarchitectuur en engineering in één traject. Dezelfde ontwerper die de lijnvoering bepaalt, weet ook hoe de constructie eronder wordt opgebouwd. Van tender tot 40 meter, voor werven en particuliere opdrachtgevers.',

      statements: [
        {
          title: 'ONTWERP MET REDEN',
          text: 'Sterke verhoudingen en een eigen karakter, zonder vormgeving los te zien van functie.',
        },
        {
          title: 'TECHNIEK VANAF DE EERSTE LIJN',
          text: 'Rompvorm, stabiliteit, constructie en systemen worden vanaf het begin meegenomen.',
        },
        {
          title: 'GEBOUWD OP DE PRAKTIJK',
          text: 'Tekeningen waarmee een werf daadwerkelijk verder kan.',
        },
      ],

      // Twee publieken, twee beloften. De opdrachtgever wordt geraakt door
      // gevoel, de werf door voorspelbaarheid — de toon verschilt dus bewust
      // per kolom.
      audiences: {
        eyebrow: 'Voor opdrachtgevers en voor werven',
        items: [
          {
            label: 'Voor opdrachtgevers',
            title: 'De vertaler van uw visie',
            text: 'U weet hoe het moet voelen. Hoe de boot door het water gaat, waar u straks het liefst staat, hoe stil het wordt als de motor uitgaat. Dat beeld is er meestal eerder dan de woorden ervoor.',
            text2: 'Wij vertalen het naar lijnen, maten en tekeningen, zonder dat er onderweg iets van verloren gaat. U hoeft de technische taal niet te spreken. Daar zijn wij voor.',
          },
          {
            label: 'Voor werven',
            title: 'Het gereedschap voor een slim bouwproces',
            text: 'Een ontwerp dat klopt scheelt weken in de hal. Wij tekenen met de productie in het hoofd: hoe de constructie wordt opgebouwd, in welke volgorde, en waar uw mensen bij moeten kunnen.',
            text2: 'Dat scheelt vragen tijdens de bouw, aanpassingen achteraf en verrassingen in de planning. Dezelfde ontwerper die de lijnvoering bepaalt, weet wat er op de werkvloer gebeurt.',
          },
        ],
      },

      servicesTitle: 'Onze Expertise',
      servicesSubtitle: 'Van eerste schets tot productierijp ontwerp',

      portfolioTitle: 'Gebouwd en te water',
      portfolioSubtitle: 'Portfolio',
      portfolioMore: 'Meer projecten laten zien',

      ctaTitle: 'Begin Uw Project',
      ctaText: 'Of u nu een werf, scheepsbouwer of particuliere opdrachtgever bent — wij denken graag met u mee over uw volgende jacht.',
      ctaCta: 'Neem contact op',
    },

    // Studio page
    studio: {
      title: 'Onafhankelijk ontwerp. Persoonlijk betrokken.',
      subtitle: 'Studio',
      intro: 'Opgericht in 2006 door scheepsarchitect Herbert van den Brand.',

      founderTitle: 'Herbert van den Brand',
      founderRole: 'Scheepsarchitect en oprichter',
      founderBio: 'Flamme Yacht Design is opgericht en wordt geleid door scheepsarchitect Herbert van den Brand. Na jaren in de Nederlandse jachtbouw, onder andere bij Royal Huisman, startte hij het bureau in 2006.',
      founderBio2: 'Sindsdien werkte Flamme aan motorjachten, zeiljachten, tenders, werkschepen en uiteenlopende custom projecten. Kenmerkend is de directe verbinding tussen ontwerp en techniek: van eerste gesprek tot technische uitwerking blijft Herbert zelf betrokken. Geen overdracht tussen een ontwerpteam en een engineeringteam, maar één doorlopende lijn.',
    },

    // Services page
    services: {
      title: 'Expertise',
      subtitle: 'Van eerste concept tot productierijp ontwerp',
      intro: 'Wij bieden een volledig geïntegreerd pakket van ontwerpdiensten — van de eerste schets tot gedetailleerde bouwdocumentatie. Onze aanpak waarborgt consistentie en efficiëntie gedurende het gehele ontwerpproces.',

      deliverablesLabel: 'Wat je krijgt',

      // Doorlooptijden per fase ontbreken nog — die moet Herbert aanleveren
      // voordat hier een leadTime-veld bij kan.
      disciplines: [
        {
          number: '01',
          title: 'Jachtontwerp',
          subtitle: 'Vorm, verhouding en functie',
          text: 'Van eerste schets en conceptontwikkeling tot exterieur, indeling en 3D-vormgeving. We ontwikkelen jachten met een eigen karakter, waarbij uitstraling, gebruik en techniek vanaf het begin in samenhang worden ontworpen.',
          points: [
            'Schetsen en conceptrichtingen',
            'Exterieurontwerp en lijnvoering',
            'Algemeen plan (GA)',
            '3D-model en renders',
          ],
        },
        {
          number: '02',
          title: 'Scheepsarchitectuur',
          subtitle: 'Prestatie achter het ontwerp',
          text: 'Een mooi ontwerp moet ook goed varen. Rompvorm, hydrostatica, stabiliteit, gewichtsverdeling en voortstuwing worden geïntegreerd tot een gebalanceerd en efficiënt schip.',
          points: [
            'Lijnenplan en rompvorm',
            'Stabiliteit en hydrostatica',
            'Weerstand en voortstuwing',
            'Gewichtsraming en -verdeling',
          ],
        },
        {
          number: '03',
          title: 'Engineering',
          subtitle: 'Van ontwerp naar productie',
          text: 'Het ontwerp wordt vertaald naar constructie- en productie-informatie waarmee een werf efficiënt en nauwkeurig kan bouwen, afgestemd op materiaal, productiemethode en geldende regelgeving.',
          points: [
            'Constructieberekening',
            'Productie- en detailtekeningen',
            'Materiaal- en platenlijst',
            'Klasse- en CE-documentatie',
          ],
        },
      ],

      additional: [
        'Werfbegeleiding',
        'Refit & herontwerp',
        'Ontwerpoptimalisatie',
        'Technisch advies',
      ],

      ctaTitle: 'Bespreek Uw Project',
      ctaText: 'Elk jachtproject is uniek. Neem contact met ons op om uw wensen te bespreken en te ontdekken hoe wij uw visie kunnen ondersteunen.',
      ctaCta: 'Neem contact op',
    },

    // Portfolio page
    portfolio: {
      title: 'Gebouwd en te water',
      subtitle: 'Portfolio',
      intro: 'Hieronder projecten die daadwerkelijk varen, met de werf erbij die ze heeft gebouwd en de rol die Flamme erin had.',

      filterAll: 'Alle',
      filterMotor: 'Motorjachten',
      filterSailing: 'Zeiljachten',
      filterTender: 'Tenders & Sloepen',
      filterWork: 'Werkschepen',

      roleDesign: 'Ontwerp',
      roleNaval: 'Scheepsarchitectuur',
      roleStructural: 'Constructie-Engineering',
      roleComplete: 'Volledig Ontwerp',
    },

    // Contact page
    contact: {
      title: 'Een project in gedachten?',
      subtitle: 'Contact',
      intro: 'Werkt u aan een nieuw schip, wilt u een bestaand concept verder ontwikkelen of zoekt u ondersteuning bij ontwerp en engineering? We bespreken graag wat Flamme kan bijdragen.',
      responseTime: 'Reactie binnen twee werkdagen.',

      formName: 'Naam',
      formEmail: 'E-mailadres',
      formSubject: 'Onderwerp',
      formMessage: 'Uw bericht',
      formSubmit: 'Verstuur Bericht',
      formSuccess: 'Hartelijk dank voor uw bericht. Wij reageren binnen twee werkdagen.',
      formSelect: 'Selecteer een onderwerp',
      formSending: 'Verzenden...',
      formError: 'Het versturen is niet gelukt. Mail ons gerust rechtstreeks:',

      // Een second opinion is een lage drempel en levert vaak het eerste
      // gesprek op.
      subjectOptions: [
        'Nieuw ontwerp',
        'Alleen scheepsarchitectuur',
        'Engineering of bouwpakket',
        'Refit of aanpassing',
        'Second opinion / advies',
        'Anders',
      ],

      addressTitle: 'Bezoekadres',
      address: 'Industriestraat 25\n8081 HH Elburg\nNederland',

      phoneTitle: 'Telefoon',
      phone: '+31 6 265 282 89',

      emailTitle: 'E-mail',
      email: 'info@flamme-yachtdesign.com',
    },

    // Footer
    footer: {
      tagline: 'Jachtontwerp, scheepsarchitectuur en engineering.',
      copyright: '© 2026 Flamme Yacht Design. Alle rechten voorbehouden.',
      privacy: 'Privacyverklaring',
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
