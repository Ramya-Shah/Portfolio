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
} from "../components/ui/icons";
import { ProjectType } from "../types";
import { NextSVG } from "../components/ui/icons/index";

export const ProjectList: ProjectType[] = [
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

];
