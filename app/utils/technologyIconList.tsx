import { iconType } from "../types";
import {
    JavascriptSVG,
    TypescriptSVG,
    VueSVG,
    ReactSVG,
    TailwindSVG,
    ExpressSVG,
    DockerSVG,
    DockerSwarmSVG,
    KubernetesSVG,
    NodeJSSVG,
    PrismaSVG,
    PostgreSQLSVG,
    HonoSVG,
    RedisSVG,
    KafkaSVG,
    WebRTCSVG,
    TrpcSVG,
    JestSVG,
    VitestSVG,
    SupertestSVG,
    SeleniumSVG,
    BeautifulSoupSVG,
    MongoDBSVG,
    ShadcnSVG,
    SwaggerSVG,
} from "../components/ui/icons";

let color: string = "#9ca3af";
export const techonologyIconList: iconType[] = [
    {
        name: "JavaScript",
        icon: (
            <JavascriptSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "TypeScript",
        icon: (
            <TypescriptSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Docker",
        icon: (
            <DockerSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "React",
        icon: (
            <ReactSVG
                color={color}
                size={35}
            />
        ),
    },
    
    {
        name: "Tailwind",
        icon: (
            <TailwindSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "NodeJS",
        icon: (
            <NodeJSSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Shadcn",
        icon: (
            <ShadcnSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Express",
        icon: (
            <ExpressSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "MongoDB",
        icon: (
            <MongoDBSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Prisma",
        icon: (
            <PrismaSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "PostgreSQL",
        icon: (
            <PostgreSQLSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Hono",
        icon: (
            <HonoSVG
            color={color}
                size={35}
            />
        ),
    },
    {
        name: "Redis",
        icon: (
            <RedisSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Kafka",
        icon: (
            <KafkaSVG
                color={color}
                size={35}
                />
            ),
    },
    {
        name: "WebRTC",
        icon: (
            <WebRTCSVG
                color={color}
                size={35}
                />
            ),
        },
        {
            name: "Trpc",
            icon: (
            <TrpcSVG
                color={color}
                size={35}
                />
        ),
    },
    {
        name: "Kubernetes",
        icon: (
            <KubernetesSVG
            color={color}
            size={35}
            />
        ),
    },
    {
        name: "Docker Swarm",
        icon: (
            <DockerSwarmSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Jest",
        icon: (
            <JestSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Vitest",
        icon: (
            <VitestSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Supertest",
        icon: (
            <SupertestSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Selenium",
        icon: (
            <SeleniumSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "BeautifulSoup",
        icon: (
            <BeautifulSoupSVG
                color={color}
                size={35}
            />
        ),
    },
    {
        name: "Swagger",
        icon: (
            <SwaggerSVG
                color={color}
                size={35}
            />
        ),
    },
];
