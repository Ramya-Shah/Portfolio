import {
    AntdSVG,
    CSSSVG,
    ExpressSVG,
    JavascriptSVG,
    MagentaKitchenSVG,
    MongoDBSVG,
    MongooseSVG,
    ReactHookFormSVG,
    ReactSVG,
    SassSVG,
    ShadcnLandingSVG,
    ShadcnSVG,
    ShopApiSVG,
    Sk8terSVG,
    SwaggerSVG,
    TailwindSVG,
    TypescriptSVG,
    PostgreSQLSVG,
    RedisSVG,
    NodeJSSVG,
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
    {
        icon: <ShadcnLandingSVG />,
        title: "TaskForge",
        subtitle: "Distributed Task Engine",
        technologies: [
            {
                name: "Node.js",
                icon: (
                    <NodeJSSVG
                        color="#68A063"
                        size={16}
                    />
                ),
            },
            {
                name: "React",
                icon: (
                    <ReactSVG
                        color="#61DAFB"
                        size={16}
                    />
                ),
            },
            {
                name: "PostgreSQL",
                icon: (
                    <PostgreSQLSVG
                        color="#336791"
                        size={20}
                    />
                ),
            },
            {
                name: "Redis",
                icon: (
                    <RedisSVG
                        color="#D82C20"
                        size={16}
                    />
                ),
            },
        ],
        description:
            "TaskForge is a robust, distributed task engine featuring a production-ready React dashboard. It includes scalable worker nodes, distributed queue management, real-time UI synchronization, and solid stale-job recovery mechanisms deployed on AWS EC2.",
        imgUrl: "/taskforge.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/TaskForge",
        websiteUrl: "http://34.66.168.60/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "CodePulse",
        subtitle: "Real-time Node.js APM",
        technologies: [
            {
                name: "Next.js",
                icon: (
                    <NextSVG
                        color="#000000"
                        size={16}
                    />
                ),
            },
            {
                name: "TypeScript",
                icon: (
                    <TypescriptSVG
                        color="#3178C6"
                        size={16}
                    />
                ),
            },
            {
                name: "Supabase",
                icon: (
                    <PostgreSQLSVG
                        color="#3ECF8E"
                        size={20}
                    />
                ),
            },
            {
                name: "Fastify",
                icon: (
                    <ExpressSVG
                        color="#000000"
                        size={16}
                    />
                ),
            },
        ],
        description:
            "CodePulse is a modern, full-stack APM platform. It features a zero-dependency SDK for dynamic execution tracing, a high-throughput ingest pipeline, Supabase Postgres data lake, and a dashboard for real-time heatmap visualization and telemetry metrics.",
        imgUrl: "/codepulse.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/codepulse",
        websiteUrl: "https://codepulse-codepulse-dashboard.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Voicer AI",
        subtitle: "AI podcast platform",
        technologies: [
            {
                name: "Nextjs",
                icon: (
                    <ShadcnSVG
                        color="#61DAFB"
                        size={16}
                    />
                ),
            },

            {
                name: "TypeScript",
                icon: (
                    <TypescriptSVG
                        color="#3178C6"
                        size={16}
                    />
                ),
            },
            {
                name: "Shadcn",
                icon: (
                    <ShadcnSVG
                        color="#000000"
                        size={16}
                    />
                ),
            },
            {
                name: "Tailwind",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Clerk",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Convex",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
        ],
        description:
            "VoicerAI is an AI-powered podcast platform built with Next.js, ShadCN, and Tailwind CSS, offering seamless content creation and management. It integrates Convex for data storage and Clerk for authentication, ensuring a seamless and secure user experience.",
        imgUrl:
            "/voicerai.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/VoicerAI",
        websiteUrl: "https://voicerai.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Parkit",
        subtitle: "Parking management system",
        technologies: [
            {
                name: "MongoDB",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Express",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "React",
                icon: (
                    <ReactSVG
                        color="#61DAFB"
                        size={16}
                    />
                ),
            },
            {
                name: "Nodejs",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Shadcn",
                icon: (
                    <ShadcnSVG
                        color="#000000"
                        size={16}
                    />
                ),
            },
            {
                name: "Tailwind",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
        ],
        description:
            "ParkIt is a comprehensive platform designed to streamline the management and utilization of parking spaces for businesses, residents, and visitors. Property managers can assign administrators to oversee parking allocations, monitor availability, and manage reservations.",
        imgUrl: "/parkit.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/PARKit",
        websiteUrl: "https://parkit-olive.vercel.app/",
    },
    {
        icon: <ShadcnLandingSVG />,
        title: "Decentralised Identity verification",
        subtitle: "Web3 identity management system",
        technologies: [
            {
                name: "React",
                icon: (
                    <ReactSVG
                        color="#61DAFB"
                        size={16}
                    />
                ),
            },
            {
                name: "Solidity",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Ethereum",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Web3.js",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Tailwind",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            {
                name: "Shadcn",
                icon: (
                    <TailwindSVG
                        color="#06B6D4"
                        size={16}
                    />
                ),
            },
            
        ],
        description:
            "A blockchain-based identity system on Ethereum (Sepolia testnet) that lets users create and manage digital identities securely. It ensures privacy, enables verification without revealing sensitive data, and tracks who accessed the information.",
        imgUrl: "/did.png",
        videoUrl: "",
        githubUrl: "https://github.com/Ramya-Shah/decentralised-identity",
        websiteUrl: "https://decentralised-identity-two.vercel.app/",
    },
];
