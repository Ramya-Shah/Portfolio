"use client";

import Link from "next/link";
import { BentoDashboard, ProjectSheets } from "../BentoDashboard";
import { Experience } from "../Experience";
import { Tooltip } from "@nextui-org/tooltip";
import { techonologyIconList, whoAmIData, contactData } from "@/app/utils";
import IconComponent from "../ui/IconComponent";
import { iconType } from "@/app/types";
import dw from "../drawing/drawing.module.css";
import s from "./about.module.css";

export default function About() {
  const { whoAmI, quote } = whoAmIData;
  const { email, github, linkedIn } = contactData;

  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "C++", "Java", "Golang", "JavaScript", "SQL"],
    },
    {
      category: "Backend & Distributed",
      skills: ["Node.js", "Fastify", "FastAPI", "Express", "Celery", "WebSockets", "Socket.IO", "Zod", "Docker", "Kubernetes", "Kafka", "WebRTC"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "Redis", "ClickHouse", "DuckDB", "MongoDB", "Prisma"],
    },
    {
      category: "AI & GenAI",
      skills: ["LangGraph", "LangChain", "Claude API", "OpenAI API", "Gemini API", "MCP / FastMCP", "Databricks Genie", "PyTorch", "scikit-learn", "Prompt Engineering"],
    },
    {
      category: "Frontend & UI",
      skills: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      category: "Cloud & Payments",
      skills: ["GCP", "AWS EC2", "Vercel", "Caddy", "Nginx", "GitHub Actions", "Razorpay"],
    },
    {
      category: "Testing & Architecture",
      skills: ["Jest", "Vitest", "Swagger", "Idempotent ETL"],
    },
  ];

  return (
    <>
      <BentoDashboard />

      <Experience />

      <ProjectSheets />

      {/* Skills */}
      <section className={dw.section}>
        <div className={dw.strip}>
          <h2 className={`${dw.display} ${dw.h2}`}>Skills &amp; Technologies</h2>
          <span className={dw.sheetRef}>Stack &amp; Capabilities</span>
        </div>
        <p className={dw.lede}>Core technologies and distributed engines utilized across production workflows.</p>

        <ul className={s.icons}>
          {techonologyIconList.map(({ name, icon }: iconType) => (
            <li key={`technology-item-${name}`}>
              <Tooltip
                content={name}
                placement="top"
                radius="none"
                className="bg-[#1B2430] text-white text-xs font-semibold px-3 py-1"
              >
                <span tabIndex={0} aria-label={name} className={s.icon}>
                  <IconComponent icon={icon} />
                </span>
              </Tooltip>
            </li>
          ))}
        </ul>

        <div className={s.groups}>
          {skillGroups.map((group, gIdx) => (
            <div key={`group-${gIdx}`} className={s.group}>
              <h3 className={`${dw.display} ${s.groupName}`}>{group.category}</h3>
              <ul className={dw.chips}>
                {group.skills.map((skill, sIdx) => (
                  <li key={`skill-${sIdx}`}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Engineering mindset */}
      <section className={dw.section}>
        <div className={dw.strip}>
          <h2 className={`${dw.display} ${dw.h2}`}>High Ownership, Rigorous Validation &amp; End-to-End Systems</h2>
          <span className={dw.sheetRef}>Engineering Mindset</span>
        </div>
        <div className={s.mindset}>
          <p className={`${dw.body} ${s.bio}`}>{whoAmI}</p>
          <figure className={s.principle}>
            <figcaption className={s.principleTitle}>Core Principle</figcaption>
            <blockquote className={`${dw.display} ${s.quote}`}>&ldquo;{quote}&rdquo;</blockquote>
          </figure>
        </div>
      </section>

      {/* Contact */}
      <section className={`${dw.section} ${s.contact}`}>
        <div>
          <p className={s.ask}>Have a question?</p>
          <Link href="/contact" className={`${dw.display} ${s.contactLink}`}>
            Contact Me
          </Link>
        </div>
        <div className={dw.actions}>
          <a href={`mailto:${email}?subject=Opportunity Inquiry`} className={dw.textLink}>Email</a>
          <a href={github} target="_blank" rel="noopener noreferrer" className={dw.textLink}>GitHub</a>
          <a href={linkedIn} target="_blank" rel="noopener noreferrer" className={dw.textLink}>LinkedIn</a>
        </div>
      </section>
    </>
  );
}
