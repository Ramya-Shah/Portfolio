"use client";

import { useEffect, useState } from "react";
import { ProjectList } from "@/app/utils";
import { ProjectType, ProjectCategory } from "@/app/types";
import { Project, projectSlug } from "../components/Project";
import dw from "../components/drawing/drawing.module.css";
import s from "./projects.module.css";

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");
  const [highlighted, setHighlighted] = useState<string>("");

  // Arriving from a home-page sheet (/projects#slug): scroll to that project and mark it.
  useEffect(() => {
    const id = decodeURIComponent(window.location.hash.slice(1));
    if (!id) return;
    setHighlighted(id);
    const timer = setTimeout(() => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" }), 350);
    return () => clearTimeout(timer);
  }, []);

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
    <main className={s.page}>
      <div className={dw.strip}>
        <h1 className={`${dw.display} ${dw.h1}`}>Featured Systems &amp; Projects</h1>
        <span className={dw.sheetRef}>Engineering Catalog</span>
      </div>
      <p className={dw.lede}>
        High-throughput engines, telemetry SDKs, live AI products with payments, and AI agent architectures.
      </p>

      <div className={s.filters} role="group" aria-label="Filter projects">
        {categories.map((cat) => {
          const isActive = selectedCategory === cat.key;
          return (
            <button
              key={`cat-${cat.key}`}
              type="button"
              aria-pressed={isActive}
              onClick={() => setSelectedCategory(cat.key)}
              className={s.filter}
            >
              <span>{cat.label}</span>
              <span className={s.count}>{cat.count}</span>
            </button>
          );
        })}
      </div>

      <div className={s.grid}>
        {filteredProjects.map((project: ProjectType) => (
          <Project
            key={`project-item-${project.title}`}
            sheet={ProjectList.indexOf(project) + 1}
            highlighted={highlighted === projectSlug(project.title)}
            {...project}
          />
        ))}
      </div>
    </main>
  );
}
