# AGENTS.md — Personal Landing Page / Portfolio

## Project type

Build a fast, modern personal landing page / portfolio for **Nemanja Filipović**.

This is not only a CV page. It is a small commercial landing page for personal technical services, freelance/side projects, portfolio credibility, and direct contact.

The page should show two things clearly:

1. Nemanja has real production experience in automation, data integrity, support tooling, SQL/.NET/Windows systems, cloud workflows, and incident troubleshooting.
2. Nemanja also offers practical project-based services: business websites, Python data processing, academic data analysis support, web scraping, desktop automation tools, reconciliation tools, log analysis tools, and odds/surebet data collection systems.

The site should be simple, fast, modern, and direct. It should feel like a technical operator’s landing page, not a generic developer résumé template.

## Recommended stack

Use **Astro** as the main framework.

Preferred stack:

- Astro
- TypeScript
- Tailwind CSS
- Minimal JavaScript
- Static output by default
- Deploy on Vercel

Optional additions only if needed:

- MDX for future case studies or blog posts
- React/Svelte islands only for genuinely interactive components
- Simple contact form later through Formspree, Resend, Vercel Functions, or another lightweight solution

Avoid Next.js unless the project later becomes a real application with authentication, dashboards, APIs, or complex dynamic data. For this landing page, Astro is the better default because it is content-driven, fast, and simple.

## Setup commands

Use the simplest setup possible:

```bash
npm create astro@latest nemanja-portfolio
cd nemanja-portfolio
npm install tailwindcss @tailwindcss/vite
npm run dev
```

Configure Tailwind through the current Vite-based Tailwind setup for Astro. Avoid outdated setup patterns unless the project template requires them.

Deploy to Vercel from GitHub after the first stable version is complete.

## Site goal

The visitor should understand within 5 seconds:

- Nemanja builds practical technical tools, not decorative websites.
- He can create landing pages and business websites, including projects like `medicarelo.rs`.
- He works in Python for data processing, reconciliation, scraping, automation, and analysis.
- He can support academic data workflows for seminars, bachelor theses, master theses, and doctoral research, especially where Python, pandas, Excel, reports, scraping, cleaning, or analysis are needed.
- He has real professional experience in cloud automation, data integrity, support tooling, logs, SQL Server, Windows Server, IIS, ASP.NET/.NET, MSMQ, PowerShell, Fluent Bit, Lua, and production support.

## Positioning

Use concrete positioning, not vague developer clichés.

Primary positioning:

> Technical consultant building websites, automation tools, data workflows, and Python systems that solve real operational problems.

Alternative hero lines:

> I build fast business websites, Python data tools, scrapers, reconciliation apps, and automation workflows for people who need practical software without unnecessary complexity.

> Websites, Python automation, data processing, scraping, logs, and reconciliation tools — built cleanly and made to work.

Avoid generic phrases:

- “Passionate developer”
- “I craft digital experiences”
- “Turning ideas into reality”
- “Innovative solutions for the modern world”

Use direct service language instead.

## Content source

Base the professional credibility section on the LinkedIn profile PDF and the additional service information provided by the client.

Verified profile facts:

- Name: Nemanja Filipović
- Current title: Technical Consultant — DCS Automations
- Location: Banja Luka / Bijeljina, Bosnia and Herzegovina
- Email: n.filkic@gmail.com
- LinkedIn: www.linkedin.com/in/nemanja-filipović
- GitHub: github.com/NemanjaNecke
- CodePen: codepen.io/nemanjanecke
- Current company: NCR Voyix
- Current role: Technical Consultant, March 2025 — present
- Previous role: SW Support Engineer I, July 2023 — March 2025
- Previous company: NCR Corporation, Customer Care Representative, March 2022 — July 2023
- Previous company: DDC MLS, Data Entry Clerk, March 2021 — February 2022
- Education: eMPIRICA Visoka Škola Računarstva i Poslovne Ekonomije, Full Stack Developer, June 2020 — December 2020
- Certifications include CompTIA Data+ prep, Career Essentials in Data Analysis by Microsoft and LinkedIn, JavaScript, New Relic Verified Foundation, and Introduction to Data Science

Additional service facts to include:

- Builds small business websites and landing pages, including projects like `medicarelo.rs`
- Python data processing for seminars, bachelor theses, master theses, and doctoral work
- Python scripts and programs for cleaning, comparing, transforming, and analyzing datasets
- Web scrapers for collecting structured data from websites
- Surebet/odds data collection system in Python for gathering odds from bookmakers and identifying arbitrage opportunities
- Desktop Python tools for reconciliation and operational workflows
- Log analysis tools and support utilities
- GitHub contains relevant Python code and project examples

## Suggested page structure

Build a single-page landing page with these sections:

1. Hero
2. Services
3. Selected projects
4. Technical strengths
5. Professional experience
6. Tools / stack
7. Contact CTA

Do not create multiple pages in version 1. A one-page site is enough.

## Hero section

The hero should be visually strong, simple, and commercial.

Include:

- Name
- Clear service-based role statement
- One short credibility sentence
- Primary CTA: “Contact me”
- Secondary CTA: “View GitHub”
- Small metadata row: Bosnia and Herzegovina, Remote-friendly, Python / Automation / Web

Suggested hero copy:

```text
Nemanja Filipović
Technical consultant for websites, Python automation, data processing, and operational tools.

I build fast business websites, Python data workflows, web scrapers, reconciliation tools, and log analysis utilities — practical software for real problems, not bloated systems.
```

CTA buttons:

- Contact me → mailto:n.filkic@gmail.com
- View GitHub → https://github.com/NemanjaNecke
- LinkedIn → LinkedIn profile

Small proof strip under hero:

```text
Python • Web scraping • Data processing • Business websites • SQL • PowerShell • Logs • Automation
```

## Services section

This should be the most important commercial section.

Use 4–6 cards.

### Business websites & landing pages

Fast, responsive websites for small businesses, clinics, personal brands, and service providers. Focus on clean design, clear contact actions, Google visibility, and deployment on Vercel.

Mention example:

```text
Example: medicarelo.rs — business landing page setup with custom domain and Vercel deployment.
```

### Python data processing

Python workflows for cleaning, matching, transforming, comparing, and analyzing data from Excel, CSV, PDFs, reports, and mixed sources.

Use cases:

- seminars
- bachelor theses
- master theses
- doctoral research
- business reports
- financial/report reconciliation

Important wording: provide technical/data-processing support, not academic ghostwriting. The site should not imply writing theses for students.

Suggested copy:

```text
Python support for research and academic data workflows: cleaning datasets, preparing Excel outputs, extracting tables, processing CSV/PDF data, and building reproducible analysis scripts.
```

### Web scraping & data collection

Custom scrapers for collecting structured public data from websites and exporting it to CSV, Excel, JSON, or databases.

Include practical outputs:

- product lists
- price monitoring
- directories
- public tables
- market data
- odds data
- research datasets

Add a compliance note:

```text
Scraping projects should respect website terms, robots.txt where applicable, rate limits, and legal/privacy boundaries.
```

### Surebet / odds aggregation tools

Python systems for collecting odds from bookmaker websites and identifying potential surebet/arbitrage opportunities.

Keep it technical and neutral. Do not present this as gambling advice or guaranteed profit.

Suggested copy:

```text
Python-based odds aggregation and surebet detection tools for collecting bookmaker odds, normalizing market data, comparing prices, and flagging potential arbitrage situations.
```

Disclaimer:

```text
For technical/data analysis purposes only. No betting advice, no guaranteed returns, and no bypassing protected systems.
```

### Desktop automation tools

Python desktop utilities for repetitive operational work, reconciliation, report checking, log collection, and support tasks.

Examples:

- reconciliation tools
- report comparison
- internal utilities
- log-level management
- file processing
- Excel exports

### Log analysis & support tooling

Tools for searching, filtering, viewing, and analyzing logs to speed up troubleshooting and support operations.

Mention:

- custom log viewers
- log collection scripts
- PowerShell automation
- operational dashboards
- incident support

## Selected projects section

Use project cards with plain, evidence-based descriptions. Do not invent fake clients or metrics.

### MediCare Lo website

Category: Business website / landing page

Suggested copy:

```text
A clean business website and domain setup for MediCare Lo, deployed through Vercel with custom DNS configuration.
```

Do not overstate the project. If the site is still being finalized, use:

```text
Business landing page setup and deployment workflow for MediCare Lo.
```

### LogDashboard

Category: Support tooling / log analysis

Link:
https://github.com/NemanjaNecke/LogDashboard

Suggested copy:

```text
A custom log viewing application built to speed up troubleshooting and make production support workflows less manual.
```

### Report reconciliation tool

Category: Python / data processing

Suggested copy:

```text
Python workflow for matching discrepancies across financial reports, including PDF table extraction into pandas dataframes and Excel output.
```

Only include non-confidential details.

### Surebet odds collector

Category: Python / scraping / data comparison

Suggested copy:

```text
Python program for collecting bookmaker odds, normalizing data across sources, and detecting potential surebet/arbitrage opportunities.
```

Add small label:

```text
Technical data project, not betting advice.
```

### Web scraper toolkit

Category: Python / automation

Suggested copy:

```text
Custom scraping scripts for collecting structured public data from websites and exporting it into usable formats such as Excel, CSV, JSON, or databases.
```

If there is no public repository yet, mark as:

```text
Private / client-style work
```

## Professional experience section

Keep this compact. The page is service-first, not CV-first.

### NCR Voyix — Technical Consultant

March 2025 — Present

Focus:

- Azure Logic Apps automation for auto-remediation
- Fluent Bit and Lua scripting for real-time event data
- Data pipeline integrity
- Technical review, testing, mentorship, and solution quality

### NCR Voyix — SW Support Engineer I

July 2023 — March 2025

Focus:

- L3 support for Loyalty Pro Application in retail
- SQL, ASP.NET, .NET, Windows Server, IIS, MSMQ
- Integration troubleshooting across POS, pump systems, market operations, and ecommerce
- JIRA ticketing and documentation
- Internal support tooling and PowerShell GUI automation

### NCR Corporation — Customer Care Representative

March 2022 — July 2023

Focus:

- Python application for reconciling discrepancies across financial reports
- PDF table extraction to pandas dataframes
- Excel report output

### DDC MLS — Data Entry Clerk

March 2021 — February 2022

Keep short. Do not over-emphasize this role.

## Technical strengths section

Group skills by outcome, not by random technology list.

### Python & data

Python, pandas, Excel automation, CSV, PDF table extraction, report reconciliation, data cleaning, data comparison

### Scraping & automation

Web scraping, data collection, scheduled scripts, structured exports, odds aggregation, source normalization

### Business websites

Astro, TypeScript, Tailwind CSS, HTML, CSS, JavaScript, responsive design, Vercel deployment, custom domains, DNS setup

### Systems & support

SQL Server, Windows Server, IIS, ASP.NET/.NET, MSMQ, JIRA, L3 support, incident documentation, troubleshooting

### Observability & logs

Log analysis, custom log viewers, Fluent Bit, Lua, PowerShell, operational support tooling

### Cloud & workflows

Azure Logic Apps, auto-remediation workflows, data pipeline integrity, production reliability

## Design direction

Modern developer/service landing page.

Use:

- Dark or near-dark background
- Large clean hero typography
- Soft gradient or subtle grid pattern
- Card-based service section
- Strong contrast
- One accent color: electric blue, cyan, green, or violet
- Minimal motion
- Rounded cards
- Terminal-like badges/chips
- Short code-style labels such as `python`, `scraping`, `automation`, `vercel`, `logs`

Avoid:

- Stock photos
- Generic laptop illustrations
- Heavy 3D graphics
- Too many animations
- Progress bars for skills
- Fake percentages such as “Python 95%”
- Corporate stock template look

The page should feel like a modern independent developer/technical consultant page: practical, sharp, fast, and easy to contact.

## Visual rhythm

Recommended layout:

- Hero: large left-aligned text, compact CTA buttons, technical chips
- Services: 2-column or 3-column card grid
- Projects: larger cards with category labels and links
- Experience: compact vertical timeline
- Skills: grouped chips or small cards
- Contact: clear final CTA with email/GitHub/LinkedIn

Mobile-first. The page must look good on a phone.

## SEO requirements

Add proper metadata.

Title:

```text
Nemanja Filipović — Python, Automation & Web Development
```

Description:

```text
Technical consultant building business websites, Python data workflows, web scrapers, reconciliation tools, log analysis utilities, and automation systems.
```

Open Graph:

- og:title: Nemanja Filipović — Python, Automation & Web Development
- og:description: Websites, Python automation, data processing, scraping, reconciliation tools, and log analysis utilities.
- og:type: website

Use semantic HTML:

- one `<h1>`
- logical `<section>` elements
- accessible links
- descriptive button labels

## Performance requirements

The site should be extremely fast.

Targets:

- Static rendering
- Minimal client-side JavaScript
- Lighthouse performance target: 95+
- No unnecessary animation libraries
- No heavy images in version 1
- Use system fonts or a very limited font setup

## Accessibility requirements

Use:

- visible focus states
- sufficient contrast
- semantic landmarks
- real text, not image text
- accessible link labels
- reduced-motion friendly animations

## Implementation notes

Suggested file structure:

```text
src/
  components/
    Hero.astro
    ServiceCard.astro
    ProjectCard.astro
    ExperienceTimeline.astro
    SkillGroup.astro
    ContactCTA.astro
  data/
    profile.ts
    services.ts
    projects.ts
    experience.ts
  layouts/
    BaseLayout.astro
  pages/
    index.astro
  styles/
    global.css
```

Keep editable content in `src/data/` files so the site can be updated without touching layout logic.

## Example data shape

```ts
export const profile = {
  name: "Nemanja Filipović",
  title: "Technical Consultant",
  location: "Bosnia and Herzegovina",
  email: "n.filkic@gmail.com",
  tagline:
    "Websites, Python automation, data processing, scraping, reconciliation tools, and log analysis utilities.",
  links: {
    linkedin: "https://www.linkedin.com/in/nemanja-filipović",
    github: "https://github.com/NemanjaNecke",
    codepen: "https://codepen.io/nemanjanecke",
  },
};

export const services = [
  {
    title: "Business websites & landing pages",
    description:
      "Fast, responsive websites for small businesses, clinics, personal brands, and service providers.",
    tags: ["Astro", "Vercel", "Tailwind", "SEO"],
  },
  {
    title: "Python data processing",
    description:
      "Cleaning, transforming, comparing, and analyzing datasets for academic research, reports, and business workflows.",
    tags: ["Python", "pandas", "Excel", "PDF"],
  },
  {
    title: "Web scraping",
    description:
      "Structured data collection from public websites with exports to CSV, Excel, JSON, or databases.",
    tags: ["Scraping", "Automation", "Data"],
  },
  {
    title: "Reconciliation & log tools",
    description:
      "Desktop utilities and support tools for report matching, log analysis, and operational workflows.",
    tags: ["Logs", "PowerShell", "SQL", "Desktop"],
  },
];
```

## Copywriting rules

Write like a practical technical consultant.

Good:

```text
I build Python tools that clean, compare, and export data so repetitive analysis does not have to be done manually.
```

Bad:

```text
I create innovative digital solutions for tomorrow.
```

Good:

```text
Need a scraper, reconciliation tool, or simple business website? Send the problem, the data format, and the desired output.
```

Bad:

```text
Let’s transform your ideas into reality.
```

## Compliance and trust rules

Do not make claims that cannot be proven.

Avoid:

- fake metrics
- fake testimonials
- fake client logos
- exaggerated guarantees
- “guaranteed surebet profit” claims
- promising academic writing/ghostwriting
- implying illegal scraping, bypassing paywalls, or scraping private/protected systems

For academic support, use language like:

```text
I provide technical support for data processing, cleaning, scraping, analysis, and reproducible Python workflows.
```

Do not use language like:

```text
I write theses or academic papers for students.
```

For surebet tools, use language like:

```text
Technical odds aggregation and comparison tooling.
```

Do not use language like:

```text
Guaranteed betting profit.
```

## Version 1 acceptance criteria

The first version is complete when:

- The site runs locally with `npm run dev`
- It deploys successfully to Vercel
- Homepage has hero, services, selected projects, technical strengths, experience, and contact sections
- Email, GitHub, LinkedIn, and CodePen links work
- Services clearly include business websites, Python data processing, web scraping, reconciliation tools, log analysis tools, desktop utilities, and odds aggregation/surebet tooling
- The page looks good on mobile and desktop
- No fake claims, fake metrics, fake clients, or invented testimonials are included
- The site is easy to edit through data files

## Future improvements

Possible later additions:

- Case study page for MediCare Lo website
- Case study page for LogDashboard
- Case study page for Python reconciliation/report processing tool
- Public demo video or GIF for selected tools
- Contact form
- Downloadable CV button
- Short technical blog
- GitHub project auto-fetching
- Light/dark theme toggle
- Personal domain email

Do not add these in version 1 unless explicitly requeste

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
