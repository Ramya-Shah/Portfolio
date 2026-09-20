"use client";

import Image from "next/image";
import { TechnologyType, ProjectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";

export const Project = (project: ProjectType) => {
  const {
    description,
    title,
    subtitle,
    icon,
    imgUrl,
    videoUrl,
    technologies,
    githubUrl,
    websiteUrl,
    metricBadge,
  } = project;

  const hasLiveUrl = websiteUrl && websiteUrl !== "" && websiteUrl !== "NONE";

  return (
    <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] overflow-hidden shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col justify-between group">
      <div>
        {/* Visual Media Header (16:9 Aspect Ratio) */}
        <div className="relative w-full aspect-video bg-black/10 overflow-hidden border-b border-[#141416]/10">
          {videoUrl ? (
            <video
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              autoPlay
              loop
              muted
              playsInline
              src={videoUrl}
            />
          ) : (
            <Image
              src={imgUrl}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority={false}
            />
          )}

          {/* Metric Pill Overlay */}
          {metricBadge && (
            <div className="absolute top-3 right-3 z-10">
              <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-black bg-[#CC3A63] text-white shadow-lg tracking-wider">
                {metricBadge}
              </span>
            </div>
          )}
        </div>

        {/* Card Body */}
        <div className="p-6 sm:p-7 flex flex-col gap-4">
          {/* Title & Subtitle */}
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-[#141416]/5 border border-[#141416]/10 flex items-center justify-center text-[#141416] flex-shrink-0">
              {icon}
            </div>
            <div className="flex flex-col">
              <h3 className="text-xl font-black text-[#141416] tracking-tight group-hover:text-[#CC3A63] transition-colors">
                {title}
              </h3>
              <span className="text-xs font-bold text-[#A2AB73] uppercase tracking-wider">
                {subtitle}
              </span>
            </div>
          </div>

          {/* Architecture & Engineering Description */}
          <p className="text-xs sm:text-sm font-medium text-[#141416]/75 leading-relaxed line-clamp-4">
            {description}
          </p>

          {/* Technology Badges */}
          <div className="flex flex-wrap gap-1.5 pt-1">
            {technologies.map(({ name }: TechnologyType, idx: number) => (
              <span
                key={`tech-${idx}`}
                className="px-2.5 py-1 rounded-lg bg-[#141416]/10 text-[#141416] text-xs font-bold"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-6 sm:p-7 pt-0 flex items-center gap-3">
        {hasLiveUrl ? (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-4 rounded-xl bg-[#141416] text-[#FFF7EB] font-black text-xs sm:text-sm text-center bento-btn-poppy hover:bg-[#CC3A63] transition-colors flex items-center justify-center gap-2 shadow-md"
          >
            <LinkSVG size={15} color="#FFF7EB" />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className="flex-1 py-2.5 px-4 rounded-xl bg-[#141416]/5 text-[#141416]/40 text-center text-xs font-bold cursor-not-allowed border border-[#141416]/10 flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#141416]/25"></span>
            <span>Production System</span>
          </span>
        )}

        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="py-2.5 px-4 rounded-xl border border-[#141416]/20 text-[#141416] font-bold text-xs sm:text-sm bento-btn-poppy hover:border-[#CC3A63] hover:text-[#CC3A63] flex items-center gap-2 bg-[#141416]/5"
        >
          <GithubSVG size={16} color="currentColor" />
          <span>Source</span>
        </a>
      </div>
    </div>
  );
};
