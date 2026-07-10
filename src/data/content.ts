const links = {
  linkedin: "https://www.linkedin.com/in/nemanja-filipović",
  github: "https://github.com/NemanjaNecke",
  codepen: "https://codepen.io/nemanjanecke",
  email: "mailto:n.filkic@gmail.com",
};

export const content = {
  en: {
    lang: "en",
    path: "/",
    switchPath: "/sr/",
    switchLabel: "🇷🇸",
    title: "Nemanja Filipović — Python, Automation & Web Development",
    description:
      "Technical consultant building business websites, Python data workflows, web scrapers, reconciliation tools, log analysis utilities, and automation systems.",
    nav: {
      services: "Services",
      projects: "Projects",
      contact: "Contact",
    },
    profile: {
      name: "Nemanja Filipović",
      title: "Technical Consultant",
      email: "n.filkic@gmail.com",
      intro:
        "I build fast business websites, web scrapers, data-processing scripts, reconciliation tools, and log-analysis utilities. The focus is simple: clear inputs, reliable outputs, and software that solves the actual problem.",
      credibility:
        "Production experience across cloud automation, data integrity, support tooling, SQL Server, Windows systems, logs, and incident troubleshooting.",
      links,
      proof: [
        "Python",
        "Web scraping",
        "Data processing",
        "Business websites",
        "JavaScript",
        "Angular",
        "Astro",
        "React",
        "Automation",
      ],
    },
    hero: {
      eyebrow: "Available for practical project work",
      role: "Python automation & web developer",
      short: "Websites, Python tools, and automation for real business problems.",
      primaryCta: "Start a project",
      githubCta: "GitHub",
      availability:
        "Available for freelance/project work across business websites, Python tools, and data workflows.",
      imageAlt: "Illustrated portrait of Nemanja Filipović",
    },
    sections: {
      projects: {
        eyebrow: "Selected projects",
        title: "Plain examples, no inflated claims.",
        copy: "A mix of public work, private/client-style tooling, and non-confidential project descriptions.",
      },
      services: {
        eyebrow: "Services",
        title: "Project-based technical work that solves operational problems.",
        copy: "Websites, Python data processing, scraping, desktop utilities, reconciliation workflows, and support tools built for clear outputs and maintainable handoff.",
      },
      needs: {
        eyebrow: "What I need from you",
        title: "Good inputs make the work faster.",
        copy: "You do not need a technical specification. A few examples and the desired output are usually enough to start.",
      },
      stack: {
        eyebrow: "Core stack",
        title: "What I work with.",
        copy: "The stack covers Python data tools, scraping, websites, production support, logs, and cloud workflows without fake skill percentages.",
      },
      experience: {
        eyebrow: "Production background",
        title: "Professional context behind the work.",
        copy: "Compact background only: cloud automation, SQL/.NET/Windows environments, support tooling, logs, and data integrity.",
      },
    },
    cardLabels: {
      problem: "Problem",
      build: "What I build",
      output: "Output",
      solution: "Solution",
      result: "Result",
      open: "Open",
      currentRole: "current role",
      linkedin: "View LinkedIn for full history",
    },
    needs: [
      {
        title: "For data projects",
        copy: "Sample Excel/CSV/PDF files, desired output, rules for matching or cleaning, and deadline.",
      },
      {
        title: "For websites",
        copy: "Business name, logo/colors if available, pages needed, contact details, domain/hosting access.",
      },
      {
        title: "For scraping",
        copy: "Source websites, fields needed, output format, frequency, and known limits.",
      },
    ],
    services: [
      {
        title: "Business websites & landing pages",
        problem: "Small businesses need a clear online presence without a slow, overbuilt website.",
        build:
          "Simple, fast websites for clinics, small businesses, personal brands, and service providers.",
        output:
          "Responsive website, contact buttons, Google-friendly structure, deployment, and domain setup.",
        tags: ["Astro", "Tailwind", "Vercel"],
      },
      {
        title: "Python data processing",
        problem: "Research and business data often arrives messy, duplicated, or split across files.",
        build:
          "Data cleanup and analysis scripts for academic research, reports, and business workflows.",
        output:
          "Excel files, cleaned datasets, charts, reproducible scripts, PDF/CSV extraction.",
        tags: ["Python", "pandas", "Excel"],
      },
      {
        title: "Web scraping & data collection",
        problem: "Manual data collection from public websites is slow and hard to repeat.",
        build: "Structured data collection from public websites with clear rules and practical exports.",
        output: "CSV, Excel, JSON, database export, scheduled collection where appropriate.",
        tags: ["Scraping", "Automation", "Exports"],
      },
      {
        title: "Desktop tools & reconciliation",
        problem: "Teams lose time comparing files, reports, exports, and operational data by hand.",
        build:
          "Small internal tools that remove repetitive manual work and make checks easier to repeat.",
        output: "File comparison, report reconciliation, log collection, Excel exports, support utilities.",
        tags: ["Python", "Desktop", "Reports"],
      },
    ],
    projects: [
      {
        title: "MediCare Lo website",
        category: "Business website / landing page",
        href: "https://medicarelo.rs",
        previewImage: "images/medicarelo-preview.png",
        previewAlt: "Preview of the MediCare Lo website homepage",
        problem: "A business needed a clean web presence with domain and deployment handled properly.",
        solution:
          "Business website setup with responsive layout, clear contact path, custom domain, and Vercel deployment workflow.",
        tech: ["Astro", "Vercel", "DNS"],
        result: "A practical landing page foundation for business visibility and direct contact.",
      },
      {
        title: "Chess Dashboard",
        category: "Data dashboard / chess analytics",
        previewImage: "images/chess-dashboard-preview.svg",
        previewAlt: "Preview of the Chess Dashboard local chess prep interface",
        problem:
          "Chess game history is hard to review manually when performance, openings, time controls, rating changes, and preparation targets are spread across raw game data.",
        solution:
          "Interactive chess analytics dashboard for imported games with overview metrics, opening distribution, rating trend, result distribution, games by month, time-control splits, color splits, opponent strength, and time-of-day performance.",
        tech: ["Python", "Dashboards", "Analytics", "Chess data"],
        result:
          "Demo view shows game profiling, AI-assisted scouting, individual game analysis, preparation targets, clock report generation, and AI plans for game prep, improvement, and tactics.",
      },
      {
        title: "LogDashboard",
        category: "Support tooling / log analysis",
        href: "https://github.com/NemanjaNecke/LogDashboard",
        problem:
          "Log analysis often requires switching between IIS logs, Windows EVTX files, and custom application logs.",
        solution:
          "Modular PyQt5 desktop application with a dark qdarkstyle UI for viewing, analyzing, and comparing IIS, EVTX, and generic customer logs in one interface.",
        tech: ["Support tooling", "Logs", "Troubleshooting"],
        result:
          "Includes selectable modules at startup, timeline navigation, database management, debug log dock, IIS analysis, Excel reports, report comparison, and detailed statistics.",
      },
      {
        title: "Report reconciliation tool",
        category: "Python / data processing",
        problem: "Manual comparison of financial reports from different formats.",
        solution:
          "Python workflow that extracts PDF tables, compares them with Excel reports, and outputs discrepancies.",
        tech: ["Python", "pandas", "PDF extraction", "Excel"],
        result: "Faster report checking and cleaner reconciliation.",
      },
      {
        title: "Odds aggregation tool",
        category: "Data collection / odds aggregation",
        problem: "Odds data from different sources needs normalization before it can be compared.",
        solution:
          "Python tool for collecting odds data, normalizing bookmaker markets, comparing prices, and detecting arbitrage patterns for data-analysis purposes.",
        tech: ["Python", "Scraping", "Normalization"],
        result: "Structured odds comparison dataset for technical analysis. Not betting advice.",
      },
      {
        title: "Web scraper toolkit",
        category: "Python / automation",
        problem: "Public website data is useful, but copying it manually is not repeatable.",
        solution:
          "Reusable scraping scripts for collecting structured public data and exporting it into usable formats.",
        tech: ["Python", "CSV", "Excel", "JSON"],
        result: "Clean exports for research, monitoring, reporting, or business workflows.",
      },
    ],
    skills: [
      {
        title: "Python data tools",
        description: "Cleaning, matching, extracting, comparing, and exporting data for real workflows.",
        skills: [
          "Python",
          "pandas",
          "Excel automation",
          "CSV",
          "PDF table extraction",
          "Report reconciliation",
          "Data cleaning",
          "Data comparison",
        ],
      },
      {
        title: "Scraping & automation",
        description: "Structured public data collection, repeatable exports, and scheduled scripts.",
        skills: [
          "Web scraping",
          "Data collection",
          "Scheduled scripts",
          "Structured exports",
          "Odds aggregation",
          "Source normalization",
        ],
      },
      {
        title: "Web stack",
        description: "Fast websites and frontend work with practical deployment and domain setup.",
        skills: [
          "Astro",
          "Angular",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "JavaScript",
          "Responsive design",
          "Vercel deployment",
          "Custom domains",
          "DNS setup",
        ],
      },
      {
        title: "Systems & support",
        description: "Production support context across Windows, SQL, .NET environments, and integrations.",
        skills: [
          "SQL Server",
          "Windows Server",
          "IIS",
          "ASP.NET/.NET",
          "MSMQ",
          "JIRA",
          "L3 support",
          "Incident documentation",
          "Troubleshooting",
        ],
      },
      {
        title: "Observability & logs",
        description: "Log analysis, support tooling, and troubleshooting utilities for operational work.",
        skills: [
          "Log analysis",
          "Custom log viewers",
          "Fluent Bit",
          "Lua",
          "PowerShell",
          "Operational support tooling",
        ],
      },
      {
        title: "Cloud & workflows",
        description: "Automation and reliability workflows around cloud and event data pipelines.",
        skills: [
          "Azure Logic Apps",
          "Auto-remediation workflows",
          "Data pipeline integrity",
          "Production reliability",
        ],
      },
    ],
    experience: [
      {
        company: "NCR Voyix",
        role: "Technical Consultant",
        period: "March 2025 - Present",
        points: [
          "Azure Logic Apps automation for auto-remediation workflows.",
          "Fluent Bit and Lua scripting for real-time event data.",
          "Data pipeline integrity, technical review, testing, mentorship, and solution quality.",
        ],
      },
      {
        company: "NCR Voyix",
        role: "SW Support Engineer I",
        period: "July 2023 - March 2025",
        points: [
          "L3 support for Loyalty Pro Application in retail environments.",
          "Troubleshooting across SQL, ASP.NET, .NET, Windows Server, IIS, MSMQ, POS, pump systems, market operations, and ecommerce integrations.",
          "JIRA ticketing, documentation, internal support tooling, and PowerShell GUI automation.",
        ],
      },
      {
        company: "NCR Corporation",
        role: "Customer Care Representative",
        period: "March 2022 - July 2023",
        points: [
          "Python application for reconciling discrepancies across financial reports.",
          "PDF table extraction to pandas dataframes and Excel report output.",
        ],
      },
      {
        company: "DDC MLS",
        role: "Data Entry Clerk",
        period: "March 2021 - February 2022",
        points: ["Operational data entry work with attention to accuracy and repeatable process."],
      },
    ],
    contact: {
      eyebrow: "Contact",
      title: "Have a practical software problem?",
      copy: "Send the task, example files or links, and the output you want. I will tell you what can be built, how long it should take, and what the cleanest approach is.",
      email: "Email me",
      github: "GitHub",
      linkedin: "LinkedIn",
      codepen: "CodePen",
    },
  },
  sr: {
    lang: "sr",
    path: "/sr/",
    switchPath: "/",
    switchLabel: "🇬🇧",
    title: "Nemanja Filipović — Python, automatizacija i web razvoj",
    description:
      "Tehnički konsultant koji pravi poslovne sajtove, Python data workflow-e, web scrapere, alate za usklađivanje izveštaja, log analizu i automatizaciju.",
    nav: {
      services: "Usluge",
      projects: "Projekti",
      contact: "Kontakt",
    },
    profile: {
      name: "Nemanja Filipović",
      title: "Tehnički konsultant",
      email: "n.filkic@gmail.com",
      intro:
        "Pravim brze poslovne sajtove, web scrapere, skripte za obradu podataka, alate za usklađivanje izveštaja i log-analysis alate. Fokus je jednostavan: jasni ulazi, pouzdani izlazi i softver koji rešava stvarni problem.",
      credibility:
        "Produkcijsko iskustvo u cloud automatizaciji, integritetu podataka, support alatima, SQL Serveru, Windows sistemima, logovima i incident troubleshooting-u.",
      links,
      proof: [
        "Python",
        "Web scraping",
        "Obrada podataka",
        "Poslovni sajtovi",
        "JavaScript",
        "Angular",
        "Astro",
        "React",
        "Automatizacija",
      ],
    },
    hero: {
      eyebrow: "Dostupan za praktične projekte",
      role: "Python automatizacija & web developer",
      short: "Sajtovi, Python alati i automatizacija za stvarne poslovne probleme.",
      primaryCta: "Pokreni projekat",
      githubCta: "GitHub",
      availability:
        "Dostupan za freelance/projektni rad: poslovni sajtovi, Python alati i data workflow-i.",
      imageAlt: "Ilustrovani portret Nemanje Filipovića",
    },
    sections: {
      projects: {
        eyebrow: "Odabrani projekti",
        title: "Konkretni primeri, bez napuhanih tvrdnji.",
        copy: "Kombinacija javnih projekata, privatnih/client-style alata i opisa bez poverljivih detalja.",
      },
      services: {
        eyebrow: "Usluge",
        title: "Projektni tehnički rad koji rešava operativne probleme.",
        copy: "Sajtovi, Python obrada podataka, scraping, desktop alati, usklađivanje izveštaja i support alati sa jasnim izlazima i održivom isporukom.",
      },
      needs: {
        eyebrow: "Šta mi treba od tebe",
        title: "Dobri inputi ubrzavaju posao.",
        copy: "Ne treba ti tehnička specifikacija. Dovoljno je nekoliko primera, šta trenutno imaš i kakav rezultat želiš.",
      },
      stack: {
        eyebrow: "Core stack",
        title: "Sa čim radim.",
        copy: "Stack pokriva Python data alate, scraping, sajtove, produkcijski support, logove i cloud workflow-e bez lažnih procenata znanja.",
      },
      experience: {
        eyebrow: "Produkcijsko iskustvo",
        title: "Profesionalna pozadina iza rada.",
        copy: "Kratak pregled: cloud automatizacija, SQL/.NET/Windows okruženja, support alati, logovi i integritet podataka.",
      },
    },
    cardLabels: {
      problem: "Problem",
      build: "Šta pravim",
      output: "Isporuka",
      solution: "Rešenje",
      result: "Rezultat",
      open: "Otvori",
      currentRole: "trenutna uloga",
      linkedin: "Pogledaj LinkedIn za kompletnu istoriju",
    },
    needs: [
      {
        title: "Za data projekte",
        copy: "Primeri Excel/CSV/PDF fajlova, pravila za matching ili čišćenje, željeni format rezultata i rok.",
      },
      {
        title: "Za sajtove",
        copy: "Naziv biznisa, logo i boje ako postoje, potrebne sekcije, kontakt podaci i pristup domenu ili hostingu.",
      },
      {
        title: "Za web scraping",
        copy: "Linkovi ka izvorima, podaci koje treba prikupiti, format rezultata, učestalost i poznata ograničenja.",
      },
    ],
    services: [
      {
        title: "Poslovni sajtovi & landing stranice",
        problem: "Malim biznisima treba jasna online prisutnost bez sporog i prekomplikovanog sajta.",
        build:
          "Jednostavni i brzi sajtovi za ordinacije, male biznise, lične brendove i pružaoce usluga.",
        output:
          "Responsive sajt, kontakt dugmad, Google-friendly struktura, deployment i podešavanje domena.",
        tags: ["Astro", "Tailwind", "Vercel"],
      },
      {
        title: "Python obrada podataka",
        problem: "Istraživački i poslovni podaci često dolaze neuredni, duplirani ili razdvojeni u više fajlova.",
        build:
          "Skripte za čišćenje i analizu podataka za akademska istraživanja, izveštaje i poslovne workflow-e.",
        output:
          "Excel fajlovi, očišćeni datasetovi, grafikoni, reproducibilne skripte, PDF/CSV ekstrakcija.",
        tags: ["Python", "pandas", "Excel"],
      },
      {
        title: "Web scraping & prikupljanje podataka",
        problem: "Ručno prikupljanje podataka sa javnih sajtova je sporo i teško ponovljivo.",
        build: "Strukturisano prikupljanje javnih podataka sa jasnim pravilima i praktičnim exportima.",
        output: "CSV, Excel, JSON, database export i zakazano prikupljanje gde je primenjivo.",
        tags: ["Scraping", "Automatizacija", "Export"],
      },
      {
        title: "Desktop alati & usklađivanje",
        problem: "Timovi gube vreme ručno poredeći fajlove, izveštaje, exporte i operativne podatke.",
        build:
          "Mali interni alati koji uklanjaju repetitivan ručni rad i olakšavaju ponovljive provere.",
        output: "Poređenje fajlova, usklađivanje izveštaja, prikupljanje logova, Excel exporti, support alati.",
        tags: ["Python", "Desktop", "Izveštaji"],
      },
    ],
    projects: [
      {
        title: "MediCare Lo website",
        category: "Poslovni sajt / landing stranica",
        href: "https://medicarelo.rs",
        previewImage: "images/medicarelo-preview.png",
        previewAlt: "Preview naslovne stranice MediCare Lo sajta",
        problem: "Biznisu je bila potrebna čista web prisutnost sa ispravno podešenim domenom i deploymentom.",
        solution:
          "Postavka poslovnog sajta sa responsive layoutom, jasnim kontakt putem, custom domenom i Vercel deployment workflow-om.",
        tech: ["Astro", "Vercel", "DNS"],
        result: "Praktična landing page osnova za vidljivost biznisa i direktan kontakt.",
      },
      {
        title: "Chess Dashboard",
        category: "Data dashboard / chess analytics",
        previewImage: "images/chess-dashboard-preview.svg",
        previewAlt: "Preview Chess Dashboard lokalnog chess prep interfejsa",
        problem:
          "Istoriju šahovskih partija je teško ručno analizirati kada su performanse, otvaranja, time controls, rating promene i pripremni ciljevi razdvojeni u raw game podacima.",
        solution:
          "Interaktivni chess analytics dashboard za importovane partije sa overview metrikama, opening distribution, rating trendom, result distribution grafikom, games-by-month prikazom, time-control splitom, color splitom, jačinom protivnika i time-of-day performansama.",
        tech: ["Python", "Dashboards", "Analytics", "Chess data"],
        result:
          "Demo prikaz pokriva profilisanje partija, AI-assisted scouting, analizu pojedinačnih partija, preparation targets, clock report generation i AI planove za game prep, improvement i tactics.",
      },
      {
        title: "LogDashboard",
        category: "Support tooling / log analiza",
        href: "https://github.com/NemanjaNecke/LogDashboard",
        problem:
          "Analiza logova često zahteva rad sa IIS logovima, Windows EVTX fajlovima i custom application logovima u odvojenim alatima.",
        solution:
          "Modularna PyQt5 desktop aplikacija sa tamnim qdarkstyle UI-jem za pregled, analizu i poređenje IIS, EVTX i generic customer logova u jednom interfejsu.",
        tech: ["Support tooling", "Logovi", "Troubleshooting"],
        result:
          "Uključuje izbor modula pri pokretanju, timeline navigaciju, database manager, debug log dock, IIS analizu, Excel izveštaje, poređenje reportova i detaljnu statistiku.",
      },
      {
        title: "Report reconciliation tool",
        category: "Python / obrada podataka",
        problem: "Ručno poređenje finansijskih izveštaja iz različitih formata.",
        solution:
          "Python workflow koji izvlači tabele iz PDF-a, poredi ih sa Excel izveštajima i izbacuje razlike.",
        tech: ["Python", "pandas", "PDF ekstrakcija", "Excel"],
        result: "Brža provera izveštaja i čistije usklađivanje.",
      },
      {
        title: "Odds aggregation tool",
        category: "Prikupljanje podataka / odds aggregation",
        problem: "Odds podaci iz različitih izvora moraju se normalizovati pre poređenja.",
        solution:
          "Python alat za prikupljanje odds podataka, normalizaciju bookmaker marketa, poređenje cena i detekciju arbitrage patterna u svrhu data analize.",
        tech: ["Python", "Scraping", "Normalizacija"],
        result: "Strukturisan dataset za tehničku analizu odds poređenja. Nije betting savet.",
      },
      {
        title: "Web scraper toolkit",
        category: "Python / automatizacija",
        problem: "Javni web podaci mogu biti korisni, ali ručno kopiranje nije ponovljivo.",
        solution:
          "Reusable scraping skripte za prikupljanje strukturisanih javnih podataka i export u upotrebljive formate.",
        tech: ["Python", "CSV", "Excel", "JSON"],
        result: "Čisti exporti za istraživanje, monitoring, izveštavanje ili poslovne workflow-e.",
      },
    ],
    skills: [
      {
        title: "Python data alati",
        description: "Čišćenje, matching, ekstrakcija, poređenje i export podataka za stvarne workflow-e.",
        skills: [
          "Python",
          "pandas",
          "Excel automation",
          "CSV",
          "PDF table extraction",
          "Report reconciliation",
          "Data cleaning",
          "Data comparison",
        ],
      },
      {
        title: "Scraping & automatizacija",
        description: "Strukturisano prikupljanje javnih podataka, ponovljivi exporti i zakazane skripte.",
        skills: [
          "Web scraping",
          "Data collection",
          "Scheduled scripts",
          "Structured exports",
          "Odds aggregation",
          "Source normalization",
        ],
      },
      {
        title: "Web stack",
        description: "Brzi sajtovi i frontend rad sa praktičnim deploymentom i podešavanjem domena.",
        skills: [
          "Astro",
          "Angular",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "HTML",
          "CSS",
          "JavaScript",
          "Responsive design",
          "Vercel deployment",
          "Custom domains",
          "DNS setup",
        ],
      },
      {
        title: "Sistemi & support",
        description: "Produkcijski support kroz Windows, SQL, .NET okruženja i integracije.",
        skills: [
          "SQL Server",
          "Windows Server",
          "IIS",
          "ASP.NET/.NET",
          "MSMQ",
          "JIRA",
          "L3 support",
          "Incident documentation",
          "Troubleshooting",
        ],
      },
      {
        title: "Observability & logovi",
        description: "Log analiza, support alati i troubleshooting utilities za operativni rad.",
        skills: [
          "Log analysis",
          "Custom log viewers",
          "Fluent Bit",
          "Lua",
          "PowerShell",
          "Operational support tooling",
        ],
      },
      {
        title: "Cloud & workflow-i",
        description: "Automatizacija i reliability workflow-i oko cloud i event data pipeline-a.",
        skills: [
          "Azure Logic Apps",
          "Auto-remediation workflows",
          "Data pipeline integrity",
          "Production reliability",
        ],
      },
    ],
    experience: [
      {
        company: "NCR Voyix",
        role: "Technical Consultant",
        period: "Mart 2025 - danas",
        points: [
          "Azure Logic Apps automatizacija za auto-remediation workflow-e.",
          "Fluent Bit i Lua scripting za real-time event data.",
          "Integritet data pipeline-a, tehnički review, testiranje, mentorstvo i kvalitet rešenja.",
        ],
      },
      {
        company: "NCR Voyix",
        role: "SW Support Engineer I",
        period: "Jul 2023 - mart 2025",
        points: [
          "L3 support za Loyalty Pro Application u retail okruženjima.",
          "Troubleshooting kroz SQL, ASP.NET, .NET, Windows Server, IIS, MSMQ, POS, pump systems, market operations i ecommerce integracije.",
          "JIRA ticketing, dokumentacija, interni support alati i PowerShell GUI automatizacija.",
        ],
      },
      {
        company: "NCR Corporation",
        role: "Customer Care Representative",
        period: "Mart 2022 - jul 2023",
        points: [
          "Python aplikacija za usklađivanje razlika kroz finansijske izveštaje.",
          "PDF table extraction u pandas dataframe-ove i Excel report output.",
        ],
      },
      {
        company: "DDC MLS",
        role: "Data Entry Clerk",
        period: "Mart 2021 - februar 2022",
        points: ["Operativni data entry rad sa fokusom na tačnost i ponovljiv proces."],
      },
    ],
    contact: {
      eyebrow: "Kontakt",
      title: "Imaš praktičan softverski problem?",
      copy: "Pošalji zadatak, primer fajlove ili linkove i izlaz koji želiš. Reći ću ti šta se može napraviti, koliko bi trebalo da traje i koji je najčistiji pristup.",
      email: "Pošalji email",
      github: "GitHub",
      linkedin: "LinkedIn",
      codepen: "CodePen",
    },
  },
};

export type Locale = keyof typeof content;
