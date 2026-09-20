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
    role: "Business Analyst (Finance & Automation)",
    company: "Meesho",
    department: "CFO's Office",
    location: "Bangalore, India",
    period: "Jan 2026 – Present",
    description:
      "Full-time engineering ownership under the CFO's office building internal data products, bitemporal metrics stores, and automated AI workflows.",
    technologies: ["Python", "SQL", "Databricks Genie", "MCP", "REST APIs", "Bitemporal Stores", "ETL Pipelines"],
    systems: [
      {
        name: "Investor Relations CRM & Ingestion Engine",
        summary:
          "Engineered an automated Python email ingestion pipeline converting unstructured investor conversations into an auditable 13-column schema. Implemented idempotent upserts with Gmail thread_id keys and atomic writes.",
        metrics: [
          "906 relationship references resolved with 0 dangling entities",
          "~46% ingestion cost reduction across 3,000-thread backlog",
          "Idempotent load store with atomic superseded logging",
        ],
        technologies: ["Python", "Structured Extraction", "Idempotency", "Data Validation"],
      },
      {
        name: "Daily Flash Bitemporal Reporting Store",
        summary:
          "Designed a bitemporal data store across 48 daily snapshots with key (metric, business_date, as_of_date) to validate publication consistency across 79 executive metrics.",
        metrics: [
          "Discovered 2,254 of 6,095 cells (~37%) silently restated after publication",
          "Audited 28 report run-logs to detect upstream silent pipeline failures",
          "Prevented erroneous metric publishing during upstream scheduler outages",
        ],
        technologies: ["Temporal Modeling", "SQL", "Pipeline SLA Monitoring", "Root Cause Analysis"],
      },
      {
        name: "Databricks Genie + Claude MCP Integration",
        summary:
          "Deployed Databricks Genie spaces mapping North Star financial metrics for natural-language business queries, and built a custom Model Context Protocol (MCP) connection linking Genie directly to Claude.",
        metrics: [
          "Self-serve data querying reducing repetitive analyst intervention",
          "Custom Model Context Protocol (MCP) bridge for LLM reasoning",
        ],
        technologies: ["Databricks Genie", "MCP", "Claude API", "Workflow Automation"],
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
          "80% reduction in manual reporting effort",
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
