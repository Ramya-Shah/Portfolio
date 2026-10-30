import {
    JavascriptSVG,
    TypescriptSVG,
    ReactSVG,
    NextSVG,
    TailwindSVG,
    NodeJSSVG,
    FastifySVG,
    ExpressSVG,
    DockerSVG,
    PostgreSQLSVG,
    ClickHouseSVG,
    RedisSVG,
    MongoDBSVG,
    ShadcnLandingSVG,
    ShadcnSVG,
    PythonSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";

export const ProjectList: ProjectType[] = [
    {
        icon: <ShadcnLandingSVG />,
        title: "Snap-to-Pay",
        subtitle: "AI Bill Reader with Razorpay Payments",
        category: "ai",
        metricBadge: "Gemini × Razorpay",
        technologies: [
            {
                name: "Next.js",
                icon: <NextSVG color="#000000" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "Gemini AI",
                icon: <ShadcnSVG color="#6366F1" size={16} />,
            },
            {
                name: "Razorpay",
                icon: <ShadcnSVG color="#3395FF" size={16} />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Live AI app for small Indian shops: snap a handwritten bill, paste a WhatsApp order or speak it, and Gemini (image, text and audio in one prompt) returns schema-validated JSON as an editable itemized bill with unsure lines flagged. The server, not the model, computes the total. One tap creates a Razorpay order with a QR code and WhatsApp pay link; HMAC-verified Checkout redirects the customer to a receipt and PDF invoice. Database-free (each bill lives in its order notes), test-key-only, and ₹0 to run.",
        imgUrl: "/snaptopay.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/snap-to-pay",
        websiteUrl: "https://snap-to-pay.vercel.app",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "TaskForge",
        subtitle: "Distributed Task Queue & Observability Engine",
        category: "systems",
        metricBadge: "986 tasks/sec",
        technologies: [
            {
                name: "Node.js",
                icon: <NodeJSSVG color="#68A063" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "PostgreSQL",
                icon: <PostgreSQLSVG color="#336791" size={20} />,
            },
            {
                name: "Redis",
                icon: <RedisSVG color="#D82C20" size={16} />,
            },
            {
                name: "React",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "Docker",
                icon: <DockerSVG color="#2496ED" size={16} />,
            },
        ],
        description:
            "Distributed task-processing system and real-time observability engine. Sustains 986 tasks/sec throughput under k6 load testing on AWS EC2 (300 concurrent VUs, 100% success rate, 138ms median latency) featuring Redis BLPOP worker pools, exponential-backoff retries, Dead Letter Queue (DLQ), and Socket.IO real-time telemetry.",
        imgUrl: "/taskforge.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/TaskForge",
        websiteUrl: "http://34.27.155.77/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "CodePulse",
        subtitle: "Zero-Config Node.js Monitoring with AI Root Cause",
        category: "systems",
        metricBadge: "~1,500 payloads/s",
        technologies: [
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "Fastify",
                icon: <FastifySVG color="#000000" size={16} />,
            },
            {
                name: "PostgreSQL",
                icon: <PostgreSQLSVG color="#336791" size={20} />,
            },
            {
                name: "Gemini AI",
                icon: <ShadcnSVG color="#6366F1" size={16} />,
            },
            {
                name: "React",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "Docker",
                icon: <DockerSVG color="#2496ED" size={16} />,
            },
        ],
        description:
            "One line of setup and a published zero-dependency npm SDK (codepulse-sdk) times every exported function via module-load interception and ES6 Proxies, with latency histograms and dead-code detection. A Fastify + Postgres ingest with per-minute histogram rollups sustained ~1,500 batched payloads/s (~26K rows/s) with zero loss in load tests and serves p95 queries in under 10 ms over 100M+ recorded calls. A Gemini root-cause panel and code chat explain the hotspot from live telemetry and source; its fix for the demo's N+1 bottleneck cut latency from ~110 ms to ~12 ms when run. Deployed on GCP + Vercel with a replay fallback.",
        imgUrl: "/codepulse-live.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/codepulse",
        websiteUrl: "https://codepulse-live.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Roamly",
        subtitle: "AI-Powered Travel Experience Planner",
        category: "mobile",
        metricBadge: "AI Hybrid Scoring",
        technologies: [
            {
                name: "React Native",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "Fastify",
                icon: <FastifySVG color="#000000" size={16} />,
            },
            {
                name: "Gemini AI",
                icon: <ShadcnSVG color="#6366F1" size={16} />,
            },
            {
                name: "SQLite",
                icon: <PostgreSQLSVG color="#003B57" size={18} />,
            },
        ],
        description:
            "Mobile travel planner built on a hybrid AI recommendation architecture. Combines a deterministic multi-factor candidate scoring model (interest, distance, rating, budget) with Gemini itinerary generation guarded by Zod validation schemas, paired with an offline-first SQLite architecture with pre-cached city catalogs.",
        imgUrl: "/roamly.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/Roamly",
        websiteUrl: "",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "AlphaForge",
        subtitle: "Quantitative Strategy Research & Backtesting Platform",
        category: "ai",
        metricBadge: "247K+ LOB Events",
        technologies: [
            {
                name: "Python",
                icon: <PythonSVG color="#3776AB" size={16} />,
            },
            {
                name: "FastAPI",
                icon: <FastifySVG color="#009688" size={16} />,
            },
            {
                name: "DuckDB",
                icon: <PostgreSQLSVG color="#FFF000" size={18} />,
            },
            {
                name: "Docker",
                icon: <DockerSVG color="#2496ED" size={16} />,
            },
        ],
        description:
            "AI quant research platform where a 4-agent LangGraph workflow (strategy synthesis, risk audit, execution, self-correction) generates and refines market-making strategies. Untrusted AI-generated Python runs through a secure FastMCP pipeline with static AST analysis, Docker sandboxing and interface-contract checks before backtesting. Replays 247K+ real limit-order-book events per run via hftbacktest, with DuckDB retrieval memory feeding successful strategies into future prompts and out-of-sample validation against overfitting.",
        imgUrl: "/alphaforge.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/AlphaForge",
        websiteUrl: "",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Shrinkly",
        subtitle: "Production URL Shortener & Analytics Platform",
        category: "systems",
        metricBadge: "Sub-10ms Redirects",
        technologies: [
            {
                name: "FastAPI",
                icon: <FastifySVG color="#009688" size={16} />,
            },
            {
                name: "Python",
                icon: <PythonSVG color="#3776AB" size={16} />,
            },
            {
                name: "PostgreSQL",
                icon: <PostgreSQLSVG color="#336791" size={20} />,
            },
            {
                name: "Redis",
                icon: <RedisSVG color="#D82C20" size={16} />,
            },
            {
                name: "Docker",
                icon: <DockerSVG color="#2496ED" size={16} />,
            },
        ],
        description:
            "Production-grade URL shortener with collision-free Base62 encoding derived mathematically from sequential IDs. Features sub-10ms redirects via Redis cache-aside, asynchronous Celery workers for geo/device analytics with 1-second deduplication windows, JWT auth for the UI plus hashed API keys for programmatic access, and a 5-container Docker Compose deployment on GCP behind Caddy with automatic Let's Encrypt HTTPS.",
        imgUrl: "/shrinkly.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah",
        websiteUrl: "https://shortener-ramya.duckdns.org/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Expense Tracker",
        subtitle: "Offline Personal Finance Mobile App",
        category: "mobile",
        metricBadge: "100% Offline SQLite",
        technologies: [
            {
                name: "React Native",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "Expo",
                icon: <ShadcnSVG color="#000000" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "SQLite",
                icon: <PostgreSQLSVG color="#003B57" size={18} />,
            },
        ],
        description:
            "100% local, offline-first personal finance application with SQLite persistence. Features monthly budget balancing, category-level spending insights, custom transaction filters, donut chart visualizations, and native Android quick-add home-screen widget integration via deep linking.",
        imgUrl: "/expensetracker.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah",
        websiteUrl: "",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "MusicBridge",
        subtitle: "Spotify to YouTube Music Playlist Transfer",
        category: "fullstack",
        metricBadge: "Automated Migration",
        technologies: [
            {
                name: "Python",
                icon: <PythonSVG color="#3776AB" size={16} />,
            },
            {
                name: "Flask",
                icon: <FastifySVG color="#000000" size={16} />,
            },
            {
                name: "React",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Full-stack playlist migration tool connecting Spotify and YouTube Music. Features automated track retrieval via Spotify APIs, browser-header authentication parsing for YouTube Music, chunked batch track insertions with individual fallback, and resilient error logging with replay capabilities.",
        imgUrl: "/musicbridge.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah",
        websiteUrl: "",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "ParkIt",
        subtitle: "Parking Space Management System",
        category: "fullstack",
        metricBadge: "MERN Stack",
        technologies: [
            {
                name: "MongoDB",
                icon: <MongoDBSVG color="#47A248" size={16} />,
            },
            {
                name: "Express",
                icon: <ExpressSVG color="#000000" size={16} />,
            },
            {
                name: "React",
                icon: <ReactSVG color="#61DAFB" size={16} />,
            },
            {
                name: "Node.js",
                icon: <NodeJSSVG color="#68A063" size={16} />,
            },
            {
                name: "Shadcn UI",
                icon: <ShadcnSVG color="#000000" size={16} />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Full-stack parking reservation and management platform streamlining parking allocation for businesses, residents, and visitors. Administrators can monitor real-time availability, assign slots, oversee utilization metrics, and manage customer reservations.",
        imgUrl: "/parkit.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/PARKit",
        websiteUrl: "https://parkit-olive.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Decentralized Identity (DID) Registry",
        subtitle: "Web3 Identity & Verification Platform",
        category: "fullstack",
        metricBadge: "IEEE 1st Place",
        technologies: [
            {
                name: "Solidity",
                icon: <ShadcnSVG color="#627EEA" size={16} />,
            },
            {
                name: "Ethereum",
                icon: <ShadcnSVG color="#627EEA" size={16} />,
            },
            {
                name: "Next.js",
                icon: <NextSVG color="#000000" size={16} />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "Smart contract-powered decentralized identity registry on Ethereum Sepolia testnet. Enables cryptographic verification of identity attributes without disclosing sensitive personal credentials, with tamper-proof access logs. Awarded 1st place among 150+ teams at IEEE Tic-Tech-Toe Hackathon 2025.",
        imgUrl: "/did.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/decentralised-identity",
        websiteUrl: "https://decentralised-identity-two.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Voicer AI",
        subtitle: "AI Podcast Creation Platform",
        category: "ai",
        metricBadge: "AI Audio Engine",
        technologies: [
            {
                name: "Next.js",
                icon: <NextSVG color="#000000" size={16} />,
            },
            {
                name: "TypeScript",
                icon: <TypescriptSVG color="#3178C6" size={16} />,
            },
            {
                name: "Shadcn UI",
                icon: <ShadcnSVG color="#000000" size={16} />,
            },
            {
                name: "Tailwind CSS",
                icon: <TailwindSVG color="#06B6D4" size={16} />,
            },
        ],
        description:
            "AI-powered podcast creation and discovery platform built with Next.js, Shadcn UI, and Tailwind CSS. Integrates Convex for real-time data persistence and Clerk for secure multi-tenant authentication, offering seamless text-to-podcast synthesis and audio management.",
        imgUrl: "/voicerai.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/VoicerAI",
        websiteUrl: "https://voicerai.vercel.app/",
    },
];
