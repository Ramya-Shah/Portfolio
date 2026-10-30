"use client";

import { useState } from "react";
import { ProjectList } from "@/app/utils";
import { ProjectType, ProjectCategory } from "@/app/types";
import { Project } from "../components/Project";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const categories: { key: ProjectCategory; label: string; count: number }[] = [
    {
      key: "all",
      label: "All Systems",
      count: ProjectList.length,
    },
    {
      key: "systems",
      label: "Distributed & Backend",
      count: ProjectList.filter((p) => p.category === "systems").length,
    },
    {
      key: "ai",
      label: "AI & GenAI",
      count: ProjectList.filter((p) => p.category === "ai").length,
    },
    {
      key: "mobile",
      label: "Mobile Apps",
      count: ProjectList.filter((p) => p.category === "mobile").length,
    },
    {
      key: "fullstack",
      label: "Full-Stack & Web",
      count: ProjectList.filter((p) => p.category === "fullstack").length,
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? ProjectList
      : ProjectList.filter((project) => project.category === selectedCategory);

  return (
    <section className="p-4 sm:p-6 pb-20 max-w-6xl m-auto flex flex-col gap-10">
      {/* Page Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-[#A2AB73] font-bold text-xs uppercase tracking-widest">
          <span>Engineering Catalog</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#141416] tracking-tight">
          Featured Systems &amp; Projects
        </h1>
        <p className="text-[#141416]/75 text-sm sm:text-base max-w-2xl font-medium">
          High-throughput engines, telemetry SDKs, live AI products with payments, and AI agent architectures.
        </p>
      </div>

      {/* Filter Category Tabs in Poppy Bento Style */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-[#F9F0E0] border border-[#141416]/10 w-fit shadow-md">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={`cat-${cat.key}`}
              onClick={() => setSelectedCategory(cat.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 bento-btn-poppy flex items-center gap-2 ${
                isActive
                  ? "bg-[#141416] text-[#FFF7EB] shadow-md"
                  : "text-[#141416]/70 hover:text-[#141416] hover:bg-[#141416]/5"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-2 py-0.5 rounded-full font-black ${
                  isActive ? "bg-[#CC3A63] text-white" : "bg-[#141416]/10 text-[#141416]/70"
                }`}
              >
                {cat.count}
              </span>
            </button>
          );
        })}
      </div>

      {/* 2-Column Responsive Bento Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {filteredProjects.map((project: ProjectType) => (
          <Project
            key={`project-item-${project.title}`}
            {...project}
          />
        ))}
      </div>
    </section>
  );
}
