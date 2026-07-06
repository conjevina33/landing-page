export const projects = [
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
    title: "LogDashboard",
    category: "Support tooling / log analysis",
    href: "https://github.com/NemanjaNecke/LogDashboard",
    problem: "Production troubleshooting gets slower when logs are hard to search and inspect.",
    solution:
      "Custom log viewer for filtering, searching, and reviewing operational log data more efficiently.",
    tech: ["Support tooling", "Logs", "Troubleshooting"],
    result: "Less manual log inspection during support and incident work.",
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
];
