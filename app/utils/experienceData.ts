export type SystemProject = {
  name: string;
  summary: string;
  metrics?: string[];
  technologies: string[];
};

export type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  department?: string;
  description: string;
  systems: SystemProject[];
  technologies: string[];
};

export const experienceData: ExperienceItem[] = [
  {
    role: "Business Analyst",
    company: "Meesho",
    department: "Finance & Product Analytics",
    location: "Bangalore, India",
    period: "Jan 2026 – Present",
    description:
      "Product experimentation, natural-language analytics and AI internal tools across finance, FP&A, investor relations and product analytics at a 100M+ user company, with SQL root-cause analysis and Python automation for executive reporting.",
    technologies: ["Python", "SQL", "Databricks Genie", "Claude API", "Automation", "Product Analytics", "RCA"],
    systems: [
      {
        name: "Product Experiments on the Meesho App",
        summary:
          "Brainstormed and ran experiments on the Meesho app to lift shopper engagement and conversion.",
        metrics: [
          "Added a \"Trendy\" tag that boosted click-per-view",
          "Added real user review videos on the product page, boosting order-per-view",
        ],
        technologies: ["Experimentation", "Product Analytics", "SQL"],
      },
      {
        name: "Databricks Genie for Natural-Language Analytics",
        summary:
          "Configured and deployed Genie for the team: gathered stakeholder requirements, connected data sources and designed the prompting method that turns plain-English questions into actionable data.",
        metrics: [
          "150+ business metrics onboarded",
          "Used by 15 stakeholders",
          "Removed almost all of the team's data-pull requests",
        ],
        technologies: ["Databricks Genie", "SQL", "Prompt Design"],
      },
      {
        name: "Daily Flash Automation",
        summary:
          "Built a parse, validate and publish pipeline with the CFO's office for the daily metrics flash read every morning by the CEO, CXOs, VPs and directors.",
        metrics: [
          "~1.5 hours of manual review per day fully automated",
          "79 metrics covered",
          "Found 37% of published cells (2,254 of 6,095) were later restated",
        ],
        technologies: ["Python", "SQL", "Data Validation", "SLA Alerts"],
      },
      {
        name: "Claude API Company-Profile Agent",
        summary:
          "Built an agent on the Claude API with Google search that writes a fixed-template profile of every investor company Meesho tracks, including each investor's actual shareholding in Meesho where applicable.",
        metrics: [
          "Profiles for all tracked investor companies",
          "Output feeds the investor CRM",
        ],
        technologies: ["Claude API", "Google Search", "Python"],
      },
      {
        name: "Investor CRM",
        summary:
          "Live, internally hosted CRM for investor meetings used by CXOs and directors, combining past emails, calendar meetings, meeting notes, AI-generated company profiles and every contact at each investor (analysts, CFOs, CIOs).",
        metrics: [
          "5,000+ investor emails and 300 meeting notes onboarded",
          "Used by CXOs and directors before investor meetings",
        ],
        technologies: ["Python", "Data Pipelines", "Internal Tools"],
      },
    ],
  },
  {
    role: "Software Engineering Intern",
    company: "Markit Solutions LLP",
    location: "Gandhinagar, Gujarat",
    period: "May 2025 – July 2025",
    description:
      "Built automated data export pipelines on AWS and deployed production Next.js web applications across global edge infrastructure.",
    technologies: ["Next.js", "TypeScript", "AWS", "Vercel", "Google Sheets API", "Tailwind CSS"],
    systems: [
      {
        name: "AWS Data Export Automation",
        summary:
          "Built cloud automation workflows and Google Sheets API integration to streamline recurring operational reporting.",
        metrics: [
          "80% reduction in manual reporting effort across 3 client accounts",
          "Automated scheduled batch exports and alerting",
        ],
        technologies: ["AWS", "Google APIs", "Python", "Cloud Automation"],
      },
      {
        name: "Edge-Deployed Next.js Applications",
        summary:
          "Engineered high-performance web applications deployed through Vercel's global edge network.",
        metrics: [
          "Served 528K+ monthly active visitors",
          "Sub-second global edge response latencies",
        ],
        technologies: ["Next.js", "Vercel Edge", "Performance Optimization", "TypeScript"],
      },
    ],
  },
];
