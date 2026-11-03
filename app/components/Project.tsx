"use client";

import Image from "next/image";
import { TechnologyType, ProjectType } from "../types";
import { GithubSVG, LinkSVG } from "./ui/icons";
import dw from "./drawing/drawing.module.css";
import s from "./project.module.css";

export const projectSlug = (title: string) =>
  title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");

export const Project = ({ sheet, highlighted, ...project }: ProjectType & { sheet: number; highlighted?: boolean }) => {
  const { description, title, subtitle, imgUrl, imgFit, videoUrl, technologies, githubUrl, websiteUrl, metricBadge } = project;

  const hasLiveUrl = websiteUrl && websiteUrl !== "" && websiteUrl !== "NONE";

  return (
    <article id={projectSlug(title)} className={`${dw.projectSheet} ${s.card} ${highlighted ? s.highlighted : ""}`}>
      <div className={dw.shot}>
        {videoUrl ? (
          <video className={s.video} autoPlay loop muted playsInline src={videoUrl} />
        ) : (
          <Image src={imgUrl} alt={`${title} screenshot`} fill quality={90} sizes="(max-width: 900px) 92vw, (max-width: 1500px) 48vw, 33vw" className={`${dw.shotImg} ${imgFit === "contain" ? dw.shotContain : ""}`} />
        )}
      </div>

      <div className={dw.caption}>
        <span className={`${dw.display} ${dw.sheetNo}`}>Sheet {String(sheet).padStart(2, "0")}</span>
        <h2 className={`${dw.display} ${dw.sheetTitle}`}>{title}</h2>
        <span className={dw.sheetSub}>{subtitle}</span>
      </div>

      {metricBadge && (
        <p className={s.metric}>
          <span className={s.metricLabel}>Spec</span>
          <span className={`${dw.display} ${s.metricValue}`}>{metricBadge}</span>
        </p>
      )}

      <p className={s.description}>{description}</p>

      <ul className={`${dw.chips} ${s.chips}`}>
        {technologies.map(({ name }: TechnologyType, idx: number) => (
          <li key={`tech-${idx}`}>{name}</li>
        ))}
      </ul>

      <div className={`${dw.actions} ${s.actions}`}>
        {hasLiveUrl ? (
          <a href={websiteUrl} target="_blank" rel="noopener noreferrer" className={`${dw.primary} ${dw.small}`}>
            <LinkSVG size={15} color="currentColor" />
            <span>Live Demo</span>
          </a>
        ) : (
          <span className={dw.static}>Production System</span>
        )}
        <a href={githubUrl} target="_blank" rel="noopener noreferrer" className={`${dw.secondary} ${dw.small}`}>
          <GithubSVG size={16} color="currentColor" />
          <span>Source</span>
        </a>
      </div>
    </article>
  );
};
