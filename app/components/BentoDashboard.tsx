"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MandalaSVG } from "./ui/icons";
import { whoAmIData, contactData, ProjectList } from "../utils";

export const BentoDashboard = () => {
  const { fullName } = whoAmIData;
  const { email, github, linkedIn } = contactData;

  // Projects list for the interactive Right-Hand Widget (All 10 projects displayed)
  const featuredProjects = ProjectList;
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const activeProject = featuredProjects[activeIdx] || featuredProjects[0];

  return (
    <section className="w-full pb-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 w-full">
        
        {/* ========================================================================= */}
        {/* CARD 1: Large Headline + Geometric Mandala (Top-Left: 2 Cols, 1 Row)     */}
        {/* ========================================================================= */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 flex flex-col justify-between shadow-xl border border-[#FFF7EB]/60 bento-poppy relative overflow-hidden group">
          {/* Top Row: Status Badge & Geometric Wireframe Flower */}
          <div className="flex items-start justify-between z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#141416]/5 border border-[#141416]/10">
              <span className="w-2 h-2 rounded-full bg-[#CC3A63] animate-pulse"></span>
              <span className="text-xs font-bold uppercase tracking-widest text-[#141416]/80">
                Software Engineer · Bangalore
              </span>
            </div>

            {/* Geometric Mandala Wireframe Accent (Directly from reference) */}
            <div className="transition-transform duration-700 group-hover:rotate-45 group-hover:scale-110">
              <MandalaSVG className="w-14 h-14 sm:w-18 sm:h-18 text-[#A2AB73]" />
            </div>
          </div>

          {/* Main Editorial Headline */}
          <div className="my-6 z-10">
            <h1 className="text-3xl sm:text-4xl lg:text-[38px] font-black text-[#141416] tracking-normal leading-[1.2]">
              Engineering High-Throughput Systems with Distributed Queues &amp; AI Architecture.
            </h1>
            <p className="text-sm sm:text-base font-medium text-[#141416]/75 mt-4 leading-relaxed max-w-xl">
              Building reliable backend platforms, runtime telemetry SDKs, and production data workflows with high ownership and mathematical rigor.
            </p>
          </div>

          {/* Action Row */}
          <div className="flex flex-wrap items-center gap-3 pt-2 z-10">
            <Link
              href="/projects"
              className="px-6 py-2.5 rounded-xl bg-[#141416] text-[#FFF7EB] font-extrabold text-sm tracking-wide shadow-md bento-btn-poppy hover:bg-[#CC3A63]"
            >
              Explore Systems →
            </Link>
            <Link
              href="/contact"
              className="px-5 py-2.5 rounded-xl bg-transparent border border-[#141416]/20 text-[#141416] font-bold text-sm tracking-wide bento-btn-poppy hover:border-[#CC3A63] hover:text-[#CC3A63]"
            >
              Get In Touch
            </Link>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 2: Portrait Visual (Top-Center: 1 Col, 1 Row)                       */}
        {/* ========================================================================= */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-[#F9F0E0] overflow-hidden shadow-xl border border-[#FFF7EB]/60 bento-poppy relative min-h-[300px] lg:min-h-0 group">
          <div className="relative w-full h-full min-h-[300px]">
            <Image
              src="/profile.jpg"
              alt={fullName}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
              priority
              className="object-cover transition-transform duration-700 group-hover:scale-105 filter contrast-105"
            />
            {/* Elegant overlay badge */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-5">
              <span className="text-lg font-black text-[#FFF7EB] tracking-normal">
                {fullName}
              </span>
              <span className="text-xs font-semibold text-[#A2AB73]">
                DA-IICT B.Tech. (Hons.)
              </span>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 3: Interactive Project Widget (Right Column: 1 Col, 2 Rows)         */}
        {/* ========================================================================= */}
        <div className="col-span-1 md:col-span-2 lg:col-span-1 lg:row-span-2 rounded-3xl bg-[#F9F0E0] text-[#141416] p-5 sm:p-6 flex flex-col justify-between shadow-xl border border-[#FFF7EB]/60 bento-poppy">
          <div className="flex flex-col gap-3.5">
            
            {/* Top Active Project Heading & Metric */}
            <div className="flex items-center justify-between">
              <h2 className="text-lg sm:text-xl font-black text-[#141416] tracking-normal">
                {activeProject.title}
              </h2>
              {activeProject.metricBadge && (
                <span className="text-[10px] font-extrabold px-2 py-0.5 rounded-full bg-[#CC3A63] text-white tracking-wider">
                  {activeProject.metricBadge}
                </span>
              )}
            </div>

            {/* 16:9 Image Preview with Hover Zoom */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-md border border-[#141416]/10 group/img">
              <Image
                src={activeProject.imgUrl}
                alt={activeProject.title}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover/img:scale-105"
              />
              {activeProject.websiteUrl && activeProject.websiteUrl !== "NONE" && (
                <a
                  href={activeProject.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-lg bg-[#141416]/85 backdrop-blur-md text-[#FFF7EB] text-xs font-bold hover:bg-[#CC3A63] transition-colors"
                >
                  Live Demo ↗
                </a>
              )}
            </div>

            {/* Short architecture description */}
            <p className="text-xs font-medium text-[#141416]/75 line-clamp-2 leading-relaxed">
              {activeProject.description}
            </p>

            {/* Stacked Project List with Clean Font Spacing & Category/Metric Badges */}
            <div className="flex flex-col pt-2 border-t border-[#141416]/15 gap-1 max-h-[380px] lg:max-h-[440px] overflow-y-auto pr-1">
              {featuredProjects.map((proj, idx) => {
                const isSelected = activeIdx === idx;
                return (
                  <button
                    key={`proj-item-${idx}`}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-full py-2 px-3 text-left flex items-center justify-between border-b border-[#141416]/10 transition-all duration-200 bento-btn-poppy rounded-xl gap-2 ${
                      isSelected
                        ? "bg-[#141416] text-[#FFF7EB] shadow-md pl-3.5"
                        : "text-[#141416] hover:bg-[#141416]/5 hover:text-[#CC3A63] hover:pl-3.5"
                    }`}
                  >
                    <div className="flex flex-col min-w-0 flex-1 gap-0.5">
                      <span className="text-xs sm:text-[13px] font-black tracking-normal leading-snug truncate">
                        {proj.title}
                      </span>
                      <span
                        className={`text-[10.5px] font-medium leading-tight truncate ${
                          isSelected ? "text-[#A2AB73]" : "text-[#141416]/65"
                        }`}
                      >
                        {proj.subtitle}
                      </span>
                    </div>
                    {proj.metricBadge ? (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 ${
                          isSelected
                            ? "bg-[#CC3A63] text-white"
                            : "bg-[#141416]/5 text-[#CC3A63] border border-[#CC3A63]/25"
                        }`}
                      >
                        {proj.metricBadge}
                      </span>
                    ) : (
                      <span
                        className={`text-[9px] font-bold px-1.5 py-0.5 rounded-md flex-shrink-0 uppercase ${
                          isSelected ? "text-[#FFF7EB]/60" : "text-[#141416]/40"
                        }`}
                      >
                        {proj.category}
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct Link to Full Catalog */}
          <Link
            href="/projects"
            className="pt-3 text-xs font-black text-[#CC3A63] hover:text-[#141416] transition-colors flex items-center justify-between uppercase tracking-wider"
          >
            <span>View All {featuredProjects.length} Projects</span>
            <span>→</span>
          </Link>
        </div>

        {/* ========================================================================= */}
        {/* CARD 4: Bio, Credentials & Stats (Bottom-Left: 2 Cols, 1 Row)            */}
        {/* ========================================================================= */}
        <div className="col-span-1 md:col-span-2 lg:col-span-2 rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-8 flex flex-col justify-between shadow-xl border border-[#FFF7EB]/60 bento-poppy">
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-[#A2AB73]">
              Background &amp; Academic Credentials
            </span>
            <h3 className="text-2xl font-black text-[#141416] tracking-tight">
              DA-IICT · B.Tech. (Hons.) in ICT
            </h3>
            <p className="text-sm font-medium text-[#141416]/75 leading-relaxed">
              Minor in Computational Science · <strong className="text-[#141416] font-extrabold">CPI: 8.6</strong> · JEE Advanced AIR 2181 · JEE Mains AIR 1508 · Winner of IEEE Tic-Tech-Toe 2025 among 150+ teams. Focused on rigorous systems fundamentals, concurrency, and high-performance databases.
            </p>
          </div>

          {/* Proof Points Strip in Cream Palette */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-4 border-t border-[#141416]/10">
            <div className="p-3 rounded-2xl bg-[#141416]/5 text-center">
              <div className="text-xl font-black text-[#141416]">986/s</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#A2AB73]">Throughput</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#141416]/5 text-center">
              <div className="text-xl font-black text-[#141416]">2,250+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#A2AB73]">Restatements</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#141416]/5 text-center">
              <div className="text-xl font-black text-[#141416]">528K+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#A2AB73]">Edge Users</div>
            </div>
            <div className="p-3 rounded-2xl bg-[#141416]/5 text-center">
              <div className="text-xl font-black text-[#CC3A63]">8.6</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#A2AB73]">Honours CPI</div>
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* CARD 5: Contact Card in Warm Light Bento Palette (Bottom-Center: 1 Col, 1 Row) */}
        {/* ========================================================================= */}
        <div className="col-span-1 md:col-span-1 lg:col-span-1 rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 flex flex-col justify-between shadow-xl border border-[#FFF7EB]/60 bento-poppy relative overflow-hidden group">
          <div>
            <span className="text-xs font-bold text-[#A2AB73] uppercase tracking-wider">
              Have a question?
            </span>
          </div>

          <div className="my-6">
            <Link
              href="/contact"
              className="text-2xl sm:text-3xl font-black tracking-tight text-[#141416] hover:text-[#CC3A63] transition-colors bento-btn-poppy inline-block"
            >
              Contact Me →
            </Link>
          </div>

          {/* Social Links on Bottom */}
          <div className="flex flex-col gap-1 items-end pt-3 border-t border-[#141416]/10 text-xs font-extrabold uppercase tracking-widest text-[#141416]/70">
            <a
              href={`mailto:${email}?subject=Opportunity Inquiry`}
              className="hover:text-[#CC3A63] transition-colors bento-btn-poppy"
            >
              EMAIL
            </a>
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC3A63] transition-colors bento-btn-poppy"
            >
              GITHUB
            </a>
            <a
              href={linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#CC3A63] transition-colors bento-btn-poppy"
            >
              LINKEDIN
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};
