"use client";

import { BentoDashboard } from "../BentoDashboard";
import { Experience } from "../Experience";
import { Tooltip } from "@nextui-org/tooltip";
import { techonologyIconList, whoAmIData } from "@/app/utils";
import IconComponent from "../ui/IconComponent";
import { iconType } from "@/app/types";

export default function About() {
  const { whoAmI, quote } = whoAmIData;

  const skillGroups = [
    {
      category: "Languages",
      skills: ["Python", "TypeScript", "C++", "JavaScript", "SQL"],
    },
    {
      category: "Backend & Distributed",
      skills: ["Node.js", "Fastify", "Express", "Docker", "Kubernetes", "Kafka", "WebRTC"],
    },
    {
      category: "Databases & Storage",
      skills: ["PostgreSQL", "ClickHouse", "Redis", "MongoDB", "Prisma"],
    },
    {
      category: "Frontend & UI",
      skills: ["React", "Next.js", "Tailwind CSS", "Shadcn UI"],
    },
    {
      category: "Testing & Architecture",
      skills: ["Jest", "Vitest", "Swagger", "Idempotent ETL"],
    },
  ];

  return (
    <div className="flex flex-col gap-12 w-full">
      {/* 1. Bento Dashboard Matching Reference Design */}
      <BentoDashboard />

      {/* 2. Professional Experience & Systems Timeline */}
      <Experience />

      {/* 3. Categorized Technical Stack in Cream Bento Palette */}
      <section className="flex flex-col gap-6 py-4">
        <div className="flex flex-col gap-2">
          <div className="inline-flex items-center gap-2 text-[#A2AB73] font-bold text-xs uppercase tracking-widest">
            <span>Stack &amp; Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#141416] tracking-normal">
            Skills &amp; Technologies
          </h2>
          <p className="text-[#141416]/75 text-sm sm:text-base max-w-2xl font-medium leading-relaxed">
            Core technologies and distributed engines utilized across production workflows.
          </p>
        </div>

        <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col gap-8">
          {/* Interactive Icon Grid */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-7 py-3 border-b border-[#141416]/10">
            {techonologyIconList.map(({ name, icon }: iconType) => (
              <Tooltip
                key={`technology-item-${name}`}
                content={name}
                placement="top"
                className="bg-[#141416] text-[#FFF7EB] text-xs font-bold px-3 py-1 rounded-lg shadow-xl"
              >
                <div className="p-3.5 rounded-2xl bg-white border border-[#141416]/15 hover:border-[#CC3A63] hover:shadow-lg bento-btn-poppy cursor-pointer flex items-center justify-center shadow-xs">
                  <IconComponent icon={icon} />
                </div>
              </Tooltip>
            ))}
          </div>

          {/* Categorized Matrix */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {skillGroups.map((group, gIdx) => (
              <div
                key={`group-${gIdx}`}
                className="flex flex-col gap-2.5 p-5 rounded-2xl bg-[#141416]/5 border border-[#141416]/10 bento-poppy"
              >
                <span className="text-xs font-extrabold uppercase tracking-wider text-[#CC3A63]">
                  {group.category}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {group.skills.map((skill, sIdx) => (
                    <span
                      key={`skill-${sIdx}`}
                      className="text-xs font-bold px-2.5 py-1 rounded-lg bg-[#FFF7EB] text-[#141416] border border-[#141416]/15 shadow-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Engineering Philosophy & Bio */}
      <section className="flex flex-col gap-6 py-4 mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#A2AB73]">
              Engineering Mindset
            </span>
            <h3 className="text-2xl font-black text-[#141416] tracking-tight">
              High Ownership, Rigorous Validation &amp; End-to-End Systems
            </h3>
            <p className="text-sm font-medium text-[#141416]/80 leading-relaxed mt-2">
              {whoAmI}
            </p>
          </div>

          <div className="rounded-3xl bg-[#A2AB73]/20 text-[#141416] p-7 sm:p-9 shadow-xl border border-[#A2AB73]/40 bento-poppy flex flex-col justify-center gap-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#CC3A63]">
              Core Principle
            </span>
            <blockquote className="text-xl sm:text-2xl font-black text-[#141416] italic leading-snug">
              &ldquo;{quote}&rdquo;
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
}
