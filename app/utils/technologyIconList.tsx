import { iconType } from "../types";
import {
    PythonSVG,
    CPPSVG,
    JavascriptSVG,
    TypescriptSVG,
    ReactSVG,
    NextSVG,
    TailwindSVG,
    NodeJSSVG,
    FastifySVG,
    ExpressSVG,
    DockerSVG,
    KubernetesSVG,
    PostgreSQLSVG,
    ClickHouseSVG,
    RedisSVG,
    MongoDBSVG,
    KafkaSVG,
    PrismaSVG,
    ShadcnSVG,
    WebRTCSVG,
    JestSVG,
    VitestSVG,
    SwaggerSVG,
} from "../components/ui/icons";

const getIconColor = (name: string): string => {
    const brandColors: Record<string, string> = {
        Python: "#3776AB",
        TypeScript: "#3178C6",
        "C++": "#00599C",
        "Node.js": "#539E43",
        Fastify: "#202020",
        React: "#0284C7",
        "Next.js": "#141416",
        PostgreSQL: "#336791",
        ClickHouse: "#D97706",
        Redis: "#DC382D",
        Docker: "#2496ED",
        Kubernetes: "#326CE5",
        Kafka: "#231F20",
        MongoDB: "#13AA52",
        Prisma: "#2D3748",
        "Tailwind CSS": "#06B6D4",
        "Shadcn UI": "#141416",
        WebRTC: "#E34F26",
        Jest: "#C21325",
        Vitest: "#729B1B",
        Swagger: "#4E8715",
    };
    return brandColors[name] || "#141416";
};

export const techonologyIconList: iconType[] = [
    {
        name: "Python",
        icon: <PythonSVG color={getIconColor("Python")} size={35} />,
    },
    {
        name: "TypeScript",
        icon: <TypescriptSVG color={getIconColor("TypeScript")} size={35} />,
    },
    {
        name: "C++",
        icon: <CPPSVG color={getIconColor("C++")} size={35} />,
    },
    {
        name: "Node.js",
        icon: <NodeJSSVG color={getIconColor("Node.js")} size={35} />,
    },
    {
        name: "Fastify",
        icon: <FastifySVG color={getIconColor("Fastify")} size={35} />,
    },
    {
        name: "React",
        icon: <ReactSVG color={getIconColor("React")} size={35} />,
    },
    {
        name: "Next.js",
        icon: <NextSVG color={getIconColor("Next.js")} size={35} />,
    },
    {
        name: "PostgreSQL",
        icon: <PostgreSQLSVG color={getIconColor("PostgreSQL")} size={35} />,
    },
    {
        name: "ClickHouse",
        icon: <ClickHouseSVG color={getIconColor("ClickHouse")} size={35} />,
    },
    {
        name: "Redis",
        icon: <RedisSVG color={getIconColor("Redis")} size={35} />,
    },
    {
        name: "Docker",
        icon: <DockerSVG color={getIconColor("Docker")} size={35} />,
    },
    {
        name: "Kubernetes",
        icon: <KubernetesSVG color={getIconColor("Kubernetes")} size={35} />,
    },
    {
        name: "Kafka",
        icon: <KafkaSVG color={getIconColor("Kafka")} size={35} />,
    },
    {
        name: "MongoDB",
        icon: <MongoDBSVG color={getIconColor("MongoDB")} size={35} />,
    },
    {
        name: "Prisma",
        icon: <PrismaSVG color={getIconColor("Prisma")} size={35} />,
    },
    {
        name: "Tailwind CSS",
        icon: <TailwindSVG color={getIconColor("Tailwind CSS")} size={35} />,
    },
    {
        name: "Shadcn UI",
        icon: <ShadcnSVG color={getIconColor("Shadcn UI")} size={35} />,
    },
    {
        name: "WebRTC",
        icon: <WebRTCSVG color={getIconColor("WebRTC")} size={35} />,
    },
    {
        name: "Jest",
        icon: <JestSVG color={getIconColor("Jest")} size={35} />,
    },
    {
        name: "Vitest",
        icon: <VitestSVG color={getIconColor("Vitest")} size={35} />,
    },
    {
        name: "Swagger",
        icon: <SwaggerSVG color={getIconColor("Swagger")} size={35} />,
    },
];
