"use client";

import Link from "next/link";
import Image from "next/image";
import { whoAmIData, contactData, ProjectList } from "../utils";
import { projectSlug } from "./Project";
import dw from "./drawing/drawing.module.css";
import s from "./home.module.css";

const proofPoints = [
  { value: "AIR 2181", label: "JEE Advanced" },
  { value: "AIR 1508", label: "JEE Mains" },
  { value: "Winner", label: "Hackathon" },
  { value: "8.6", label: "Honours CPI" },
];

const sheetNo = (i: number) => `Sheet ${String(i + 1).padStart(2, "0")}`;

export const BentoDashboard = () => {
  const { fullName } = whoAmIData;
  const { github, linkedIn } = contactData;
  const lead = ProjectList[0];

  return (
    <>
      {/* Hero */}
      <section className={s.hero} aria-label="Introduction">
        <div>
          <h1 className={`${dw.display} ${s.name}`}>
            Ramya
            <br />
            Shah
          </h1>
          <p className={s.role}>Software Engineer, Bangalore</p>

          <p className={`${dw.display} ${s.headline}`}>
            Engineering High-Throughput Systems with Distributed Queues &amp; AI Architecture.
          </p>
          <p className={dw.lede}>
            Building reliable backend platforms, runtime telemetry SDKs, and production data workflows with high
            ownership and mathematical rigor.
          </p>

          <div className={`${dw.actions} ${s.heroActions}`}>
            <Link href="/projects" className={dw.primary}>Explore Systems</Link>
            <Link href="/contact" className={dw.secondary}>Get In Touch</Link>
            <a href={github} target="_blank" rel="noopener noreferrer" className={dw.textLink}>GitHub</a>
            <a href={linkedIn} target="_blank" rel="noopener noreferrer" className={dw.textLink}>LinkedIn</a>
          </div>
        </div>

        <div className={s.heroSide}>
          <Link href={`/projects#${projectSlug(lead.title)}`} className={dw.projectSheet}>
            <span className={dw.shot}>
              <Image src={lead.imgUrl} alt={`${lead.title} screenshot`} fill priority quality={90} sizes="(max-width: 900px) 92vw, 48vw" className={`${dw.shotImg} ${lead.imgFit === "contain" ? dw.shotContain : ""}`} />
            </span>
            <span className={dw.caption}>
              <span className={`${dw.display} ${dw.sheetNo}`}>{sheetNo(0)}</span>
              <span className={`${dw.display} ${dw.sheetTitle}`}>{lead.title}</span>
              <span className={dw.sheetSub}>{lead.subtitle}</span>
            </span>
          </Link>

          <dl className={dw.titleBlock}>
            <div><dt>Drawn by</dt><dd>{fullName}</dd></div>
            <div><dt>Role</dt><dd>Software Engineer</dd></div>
            <div><dt>Location</dt><dd>Bangalore, India</dd></div>
            <div><dt>Education</dt><dd>DA-IICT, B.Tech. (Hons.)</dd></div>
            <div><dt>CPI</dt><dd>8.6</dd></div>
            <div><dt>Sheets</dt><dd>{ProjectList.length} projects</dd></div>
          </dl>
        </div>
      </section>

      {/* Background & credentials */}
      <section className={dw.section}>
        <div className={dw.strip}>
          <h2 className={`${dw.display} ${dw.h2}`}>DA-IICT · B.Tech. (Hons.) in ICT</h2>
          <span className={dw.sheetRef}>Background &amp; Academic Credentials</span>
        </div>
        <div className={s.credentials}>
          <p className={`${dw.body} ${s.credText}`}>
            Minor in Computational Science · <strong className={s.strong}>CPI: 8.6</strong> · JEE Advanced AIR 2181 ·
            JEE Mains AIR 1508 · Winner of IEEE Tic-Tech-Toe 2025 among 150+ teams. Focused on rigorous systems
            fundamentals, concurrency, and high-performance databases.
          </p>
          <dl className={s.spec}>
            {proofPoints.map((p) => (
              <div key={p.label}>
                <dt>{p.label}</dt>
                <dd className={dw.display}>{p.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

    </>
  );
};

// Project sheets 02-05; the lead project (Sheet 01) sits in the hero.
export const ProjectSheets = () => {
  const more = ProjectList.slice(1, 5);

  return (
    <section className={dw.section}>
      <div className={dw.strip}>
        <h2 className={`${dw.display} ${dw.h2}`}>Projects</h2>
        <Link href="/projects" className={dw.textLink}>
          View All {ProjectList.length} Projects
        </Link>
      </div>
      <div className={s.sheetGrid}>
        {more.map((p, i) => {
          return (
            <Link key={p.title} href={`/projects#${projectSlug(p.title)}`} className={dw.projectSheet}>
              <span className={dw.shot}>
                <Image src={p.imgUrl} alt={`${p.title} screenshot`} fill quality={90} sizes="(max-width: 900px) 92vw, 48vw" className={`${dw.shotImg} ${p.imgFit === "contain" ? dw.shotContain : ""}`} />
              </span>
              <span className={dw.caption}>
                <span className={`${dw.display} ${dw.sheetNo}`}>{sheetNo(i + 1)}</span>
                <span className={`${dw.display} ${dw.sheetTitle}`}>{p.title}</span>
                <span className={dw.sheetSub}>{p.subtitle}</span>
              </span>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
