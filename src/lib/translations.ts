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
      title: 'Flamme Yacht Design | Bespoke Yacht Design 5-25 Meter',
      description: 'Bespoke yacht design studio specializing in custom yacht design, naval architecture, and engineering for yachts between 5 and 25 meters. Based in the Netherlands.',
      studioTitle: 'Studio | Flamme Yacht Design',
      studioDescription: 'Meet Herbert van den Brand, founder of Flamme Yacht Design. With experience at Royal Huisman and decades of yacht design expertise, we bring your vision to reality.',
      servicesTitle: 'Services | Flamme Yacht Design',
      servicesDescription: 'Comprehensive yacht design services including exterior styling, naval architecture, structural engineering, and support for shipyards and builders.',
      portfolioTitle: 'Portfolio | Flamme Yacht Design',
      portfolioDescription: 'Explore our portfolio of yacht designs ranging from 5 to 25 meters. Motor yachts, sailing yachts, tenders, and workboats designed with precision and craftsmanship.',
      contactTitle: 'Contact | Flamme Yacht Design',
      contactDescription: 'Get in touch with Flamme Yacht Design for your next yacht project. Based in Elburg, Netherlands, we work with shipyards and private clients worldwide.',
    },

    // Home page
    home: {
      heroEyebrow: 'YACHT DESIGN · NAVAL ARCHITECTURE · ENGINEERING',
      heroTitle: 'From first line to build-ready yacht',
      heroTagline: 'One designer combining yacht design, naval architecture and engineering — from concept sketch through to the drawings the yard builds from.',
      heroCta: 'View our work',
      heroCtaSecondary: 'How we work',

      // The credit line under each award is not optional: both prizes were
      // awarded to the yard, not to Flamme.
      proof: [
        {
          label: 'Eagle 25 ST',
          lines: ['Hiswa Boat of the Year 2025', 'Electric Boat category'],
          credit: 'designed for Eagle Yachts',
        },
        {
          label: 'Cooper 680',
          lines: ['Hiswa People\'s Choice 2020'],
          credit: 'designed for Cooperyacht',
        },
        {
          label: 'Since 2006',
          lines: ['Independent design studio'],
          credit: '',
        },
      ],

      introTitle: 'From an idea to a yacht that can actually be built.',
      introText: 'A successful yacht is more than styling alone. Proportion, performance, structure, systems and production have to work together from the first line.',
      introText2: 'Flamme Yacht Design combines yacht design, naval architecture and engineering in a single process. The same person who sets the sheer line knows how the structure underneath is built up. From tenders to 30 metres, for shipyards and private owners.',
      introLink: 'About the studio',

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

      servicesTitle: 'What We Do',
      servicesSubtitle: 'From concept to construction-ready design',

      portfolioTitle: 'Selected Projects',
      portfolioSubtitle: 'A selection of our work',
      portfolioLink: 'View all projects',

      ctaTitle: 'Begin Your Journey',
      ctaText: 'Whether you\'re a shipyard, builder, or private client, we\'d be pleased to discuss your next yacht project.',
      ctaCta: 'Get in touch',
    },

    // Studio page
    studio: {
      title: 'Studio',
      subtitle: 'About Flamme Yacht Design',

      founderTitle: 'Herbert van den Brand',
      founderRole: 'Founder & Lead Designer',
      founderBio: 'Herbert van den Brand founded Flamme Yacht Design in 2006 after gaining extensive experience at Royal Huisman, one of the world\'s most prestigious yacht builders. His background combines a deep appreciation for classic maritime craftsmanship with modern engineering practices.',
      founderBio2: 'With decades of experience in yacht design, naval architecture, and structural engineering, Herbert brings a practical, buildability-focused approach to every project. This means designs that not only look exceptional but are engineered for efficient construction.',

      philosophyTitle: 'Our Philosophy',
      philosophyText: 'We believe that great yacht design emerges from the balance between aesthetics and engineering. Every line we draw considers both visual harmony and practical construction. Our role is to translate your vision into a vessel that performs as beautifully as it looks.',
      philosophyText2: 'We work closely with shipyards and builders throughout the design process, ensuring that our drawings translate seamlessly into reality. This collaborative approach has built lasting partnerships across the European yachting industry.',

      valuesTitle: 'Our Values',
      values: [
        {
          title: 'Craftsmanship',
          text: 'Every design reflects meticulous attention to proportion, detail, and maritime tradition.',
        },
        {
          title: 'Buildability',
          text: 'We design with construction in mind, creating practical solutions that shipyards can execute efficiently.',
        },
        {
          title: 'Collaboration',
          text: 'We work as partners with yards and clients, maintaining open communication throughout the process.',
        },
        {
          title: 'Integrity',
          text: 'Honest advice, realistic timelines, and transparent communication guide every project.',
        },
      ],

      experienceTitle: 'Experience',
      experienceText: 'Since 2006, Flamme Yacht Design has delivered designs for shipyards, yacht builders, and private clients across Europe. Our portfolio includes motor yachts, sailing yachts, tenders, workboats, and specialized vessels from 5 to 25 meters.',
    },

    // Services page
    services: {
      title: 'Services',
      subtitle: 'From initial concept to production-ready design',
      intro: 'We offer a complete range of yacht design services, guiding projects from the first sketch through to detailed construction documentation. Our integrated approach ensures consistency and efficiency throughout the design process.',

      designTitle: 'Yacht Design',
      designSubtitle: 'Step 1: From concept to visual design',
      designText: 'The design process focuses on the visual character of your yacht. We develop exterior styling that captures your vision while respecting maritime traditions and practical requirements. From initial sketches to detailed renderings, we create designs that are both distinctive and timeless.',
      designPoints: [
        'Concept development and sketching',
        'Exterior styling and proportions',
        '3D visualization and renderings',
        'General arrangement plans',
      ],

      navalTitle: 'Naval Architecture',
      navalSubtitle: 'Step 2: From design to engineering',
      navalText: 'Naval architecture transforms visual design into a vessel that performs. We integrate hydrodynamics, stability calculations, weight distribution, and propulsion design to create a balanced, efficient yacht that meets your performance requirements.',
      navalPoints: [
        'Hull form development',
        'Stability and hydrostatics',
        'Propulsion and resistance calculations',
        'Weight estimation and distribution',
      ],

      structuralTitle: 'Structural Engineering',
      structuralSubtitle: 'Step 3: From engineering to production',
      structuralText: 'Structural engineering delivers the construction documentation that shipyards need. We create detailed drawings, construction specifications, and material schedules that enable efficient production while ensuring structural integrity and classification compliance.',
      structuralPoints: [
        'Structural design and calculations',
        'Construction drawings and details',
        'Material specifications',
        'Classification documentation',
      ],

      supportTitle: 'Shipyard Support',
      supportSubtitle: 'Partnership throughout construction',
      supportText: 'We support shipyards and builders throughout the construction process. From production consultation to design modifications, we remain available to ensure the build proceeds smoothly and the final yacht matches the design intent.',
      supportPoints: [
        'Production consultation',
        'Design modifications and updates',
        'Technical support during build',
        'Sea trials and delivery support',
      ],

      refitTitle: 'Refit & Redesign',
      refitSubtitle: 'New life for existing vessels',
      refitText: 'We provide design services for yacht refits and modifications, from minor updates to comprehensive redesigns. Our approach respects the original character while introducing improvements that enhance performance, functionality, or aesthetics.',

      ctaTitle: 'Discuss your project',
      ctaText: 'Every yacht project is unique. Contact us to discuss your requirements and how we can support your vision.',
      ctaCta: 'Contact us',
    },

    // Portfolio page
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Selected projects',
      intro: 'A representative selection of our work across motor yachts, sailing yachts, tenders, and workboats. Each project reflects our commitment to design quality and buildability.',

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
      title: 'Contact',
      subtitle: 'Let\'s discuss your project',
      intro: 'Whether you\'re a shipyard seeking design support, a builder with a new project, or a private client with a vision, we\'d be pleased to hear from you.',

      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formSuccess: 'Thank you for your message. We\'ll respond within 2 business days.',

      subjectOptions: [
        'New yacht project',
        'Naval architecture',
        'Structural engineering',
        'Refit or modification',
        'General inquiry',
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
      tagline: 'Bespoke yacht design for vessels between 5 and 25 meters',
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
      title: 'Flamme Yacht Design | Exclusief Jachtontwerp 5-25 Meter',
      description: 'Exclusief jachtontwerpbureau gespecialiseerd in maatwerk ontwerp, scheepsarchitectuur en engineering voor jachten van 5 tot 25 meter. Gevestigd in Elburg, Nederland.',
      studioTitle: 'Studio | Flamme Yacht Design',
      studioDescription: 'Maak kennis met Herbert van den Brand, oprichter van Flamme Yacht Design. Met jarenlange ervaring bij Royal Huisman en diepgaande expertise in jachtontwerp.',
      servicesTitle: 'Expertise | Flamme Yacht Design',
      servicesDescription: 'Volledig geïntegreerde ontwerpservices: van exterieurontwerp en scheepsarchitectuur tot constructie-engineering en werfbegeleiding.',
      portfolioTitle: 'Portfolio | Flamme Yacht Design',
      portfolioDescription: 'Ontdek ons portfolio van 5 tot 25 meter. Motorjachten, zeiljachten, tenders en werkschepen — ontworpen met precisie en vakmanschap.',
      contactTitle: 'Contact | Flamme Yacht Design',
      contactDescription: 'Neem contact op voor uw volgende jachtproject. Vanuit Elburg werken wij samen met werven en particuliere opdrachtgevers wereldwijd.',
    },

    // Home page
    home: {
      heroEyebrow: 'JACHTONTWERP · SCHEEPSARCHITECTUUR · ENGINEERING',
      heroTitle: 'Van eerste lijn tot bouwtekening',
      heroTagline: 'Eén ontwerper voor jachtontwerp, scheepsarchitectuur en engineering — van eerste schets tot de tekeningen waarmee de werf bouwt.',
      heroCta: 'Bekijk onze projecten',
      heroCtaSecondary: 'Hoe we werken',

      // De attributieregel onder elke prijs is niet optioneel: beide prijzen zijn
      // aan de werf toegekend, niet aan Flamme.
      proof: [
        {
          label: 'Eagle 25 ST',
          lines: ['Hiswa Boot van het Jaar 2025', 'categorie Elektroboot'],
          credit: 'ontwerp voor Eagle Yachts',
        },
        {
          label: 'Cooper 680',
          lines: ['Hiswa Publiekslieveling 2020'],
          credit: 'ontwerp voor Cooperyacht',
        },
        {
          label: 'Sinds 2006',
          lines: ['Zelfstandig ontwerpbureau'],
          credit: '',
        },
      ],

      introTitle: 'Van idee naar een jacht dat écht gebouwd kan worden.',
      introText: 'Een goed jacht begint niet bij styling alleen. Vorm, vaareigenschappen, constructie, techniek en productie moeten vanaf de eerste lijn met elkaar kloppen.',
      introText2: 'Flamme Yacht Design combineert jachtontwerp, scheepsarchitectuur en engineering in één traject. Dezelfde ontwerper die de lijnvoering bepaalt, weet ook hoe de constructie eronder wordt opgebouwd. Van tender tot 30 meter, voor werven en particuliere opdrachtgevers.',
      introLink: 'Over de studio',

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

      servicesTitle: 'Onze Expertise',
      servicesSubtitle: 'Van eerste schets tot productierijp ontwerp',

      portfolioTitle: 'Uitgelichte Projecten',
      portfolioSubtitle: 'Een selectie uit ons werk',
      portfolioLink: 'Bekijk alle projecten',

      ctaTitle: 'Begin Uw Project',
      ctaText: 'Of u nu een werf, scheepsbouwer of particuliere opdrachtgever bent — wij denken graag met u mee over uw volgende jacht.',
      ctaCta: 'Neem contact op',
    },

    // Studio page
    studio: {
      title: 'Studio',
      subtitle: 'Over Flamme Yacht Design',

      founderTitle: 'Herbert van den Brand',
      founderRole: 'Oprichter & Hoofdontwerper',
      founderBio: 'Herbert van den Brand richtte Flamme Yacht Design op in 2006, na jarenlange ervaring bij Royal Huisman — een van de meest prestigieuze jachtbouwers ter wereld. Zijn achtergrond verenigt diep respect voor klassiek maritiem vakmanschap met hedendaagse engineering.',
      founderBio2: 'Met decennia aan ervaring in jachtontwerp, scheepsarchitectuur en constructie-engineering brengt Herbert een pragmatische, bouwgerichte visie naar elk project. Het resultaat: ontwerpen die niet alleen esthetisch uitmunten, maar ook efficiënt te realiseren zijn.',

      philosophyTitle: 'Onze Filosofie',
      philosophyText: 'Wij geloven dat excellent jachtontwerp ontstaat uit de balans tussen esthetiek en techniek. Elke lijn die wij tekenen houdt rekening met zowel visuele harmonie als praktische uitvoerbaarheid. Onze rol is uw visie te vertalen naar een vaartuig dat even mooi presteert als het oogt.',
      philosophyText2: 'Wij werken nauw samen met werven en bouwers gedurende het gehele ontwerptraject, zodat onze tekeningen naadloos vertalen naar werkelijkheid. Deze samenwerkingsgerichte aanpak heeft geleid tot langdurige partnerschappen in de Europese jachtbouwindustrie.',

      valuesTitle: 'Onze Waarden',
      values: [
        {
          title: 'Vakmanschap',
          text: 'Elk ontwerp getuigt van zorgvuldige aandacht voor proportie, detail en maritieme traditie.',
        },
        {
          title: 'Bouwbaarheid',
          text: 'Wij ontwerpen met de productie in gedachten — praktische oplossingen die werven efficiënt kunnen uitvoeren.',
        },
        {
          title: 'Samenwerking',
          text: 'Wij opereren als partner van werven en opdrachtgevers, met open communicatie gedurende het gehele traject.',
        },
        {
          title: 'Integriteit',
          text: 'Eerlijk advies, realistische planning en transparante communicatie vormen de basis van elk project.',
        },
      ],

      experienceTitle: 'Ervaring',
      experienceText: 'Sinds 2006 levert Flamme Yacht Design ontwerpen voor werven, jachtbouwers en particuliere opdrachtgevers in heel Europa. Ons portfolio omvat motorjachten, zeiljachten, tenders, werkschepen en specialistische vaartuigen van 5 tot 25 meter.',
    },

    // Services page
    services: {
      title: 'Expertise',
      subtitle: 'Van eerste concept tot productierijp ontwerp',
      intro: 'Wij bieden een volledig geïntegreerd pakket van ontwerpdiensten — van de eerste schets tot gedetailleerde bouwdocumentatie. Onze aanpak waarborgt consistentie en efficiëntie gedurende het gehele ontwerpproces.',

      designTitle: 'Jachtontwerp',
      designSubtitle: 'Fase 1: Van concept naar visueel ontwerp',
      designText: 'Het ontwerpproces richt zich op het visuele karakter van uw jacht. Wij ontwikkelen een exterieur dat uw visie vastlegt met respect voor maritieme traditie en praktische eisen. Van eerste schetsen tot gedetailleerde visualisaties — wij creëren ontwerpen die onderscheidend én tijdloos zijn.',
      designPoints: [
        'Conceptontwikkeling en schetsen',
        'Exterieurontwerp en proporties',
        '3D-visualisatie en renders',
        'Algemene indelingstekeningen',
      ],

      navalTitle: 'Scheepsarchitectuur',
      navalSubtitle: 'Fase 2: Van ontwerp naar engineering',
      navalText: 'Scheepsarchitectuur transformeert visueel ontwerp naar een vaartuig dat optimaal presteert. Wij integreren hydrodynamica, stabiliteitsberekeningen, gewichtsverdeling en voortstuwingsontwerp tot een gebalanceerd, efficiënt jacht dat aan uw prestatie-eisen voldoet.',
      navalPoints: [
        'Rompvorm-ontwikkeling',
        'Stabiliteit en hydrostatica',
        'Voortstuwing en weerstandsberekeningen',
        'Gewichtsschatting en verdeling',
      ],

      structuralTitle: 'Constructie-Engineering',
      structuralSubtitle: 'Fase 3: Van engineering naar productie',
      structuralText: 'Constructie-engineering levert de bouwdocumentatie die werven nodig hebben. Wij maken gedetailleerde tekeningen, constructiespecificaties en materiaallijsten die efficiënte productie mogelijk maken met behoud van structurele integriteit en classificatie-eisen.',
      structuralPoints: [
        'Constructief ontwerp en berekeningen',
        'Bouwtekeningen en details',
        'Materiaalspecificaties',
        'Classificatiedocumentatie',
      ],

      supportTitle: 'Werfbegeleiding',
      supportSubtitle: 'Partnerschap tijdens de bouw',
      supportText: 'Wij begeleiden werven en bouwers gedurende het gehele bouwtraject. Van productieconsultatie tot ontwerpwijzigingen — wij blijven beschikbaar om te waarborgen dat de bouw soepel verloopt en het eindresultaat overeenkomt met de ontwerpintentie.',
      supportPoints: [
        'Productieconsultatie',
        'Ontwerpwijzigingen en updates',
        'Technische ondersteuning tijdens bouw',
        'Proefvaart en opleveringsbegeleiding',
      ],

      refitTitle: 'Refit & Herontwerp',
      refitSubtitle: 'Nieuw leven voor bestaande vaartuigen',
      refitText: 'Wij verzorgen ontwerpdiensten voor jachtrefits en modificaties — van subtiele updates tot ingrijpende herontwerpen. Onze aanpak respecteert het oorspronkelijke karakter terwijl wij verbeteringen introduceren die prestaties, functionaliteit of esthetiek naar een hoger niveau tillen.',

      ctaTitle: 'Bespreek Uw Project',
      ctaText: 'Elk jachtproject is uniek. Neem contact met ons op om uw wensen te bespreken en te ontdekken hoe wij uw visie kunnen ondersteunen.',
      ctaCta: 'Neem contact op',
    },

    // Portfolio page
    portfolio: {
      title: 'Portfolio',
      subtitle: 'Uitgelichte projecten',
      intro: 'Een representatieve selectie uit ons werk: motorjachten, zeiljachten, tenders en werkschepen. Elk project weerspiegelt onze toewijding aan ontwerpkwaliteit en bouwbaarheid.',

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
      title: 'Contact',
      subtitle: 'Laten we uw project bespreken',
      intro: 'Of u nu een werf bent op zoek naar ontwerpexpertise, een bouwer met een nieuw project, of een particuliere opdrachtgever met een visie — wij horen graag van u.',

      formName: 'Naam',
      formEmail: 'E-mailadres',
      formSubject: 'Onderwerp',
      formMessage: 'Uw bericht',
      formSubmit: 'Verstuur Bericht',
      formSuccess: 'Hartelijk dank voor uw bericht. Wij reageren binnen twee werkdagen.',

      subjectOptions: [
        'Nieuw jachtproject',
        'Scheepsarchitectuur',
        'Constructie-engineering',
        'Refit of modificatie',
        'Algemene vraag',
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
      tagline: 'Exclusief jachtontwerp voor vaartuigen van 5 tot 25 meter',
      copyright: '© 2026 Flamme Yacht Design. Alle rechten voorbehouden.',
      privacy: 'Privacyverklaring',
    },
  },
};

export function getTranslations(locale: Locale) {
  return translations[locale] || translations.en;
}
