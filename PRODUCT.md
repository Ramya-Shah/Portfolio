# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Recruiters and hiring engineers for software engineering roles: backend, distributed systems and AI infrastructure. They arrive from a resume, LinkedIn or an application link, usually skim on a laptop between other candidates, and decide whether Ramya is worth an interview. Engineers who look closer open the live demos and GitHub repos.

## Product Purpose

Ramya Shah's personal portfolio. It shows that he builds and ships working systems: what he built, how it performs, and where to see it running. Success is a recruiter reaching a confident "interview him" in under a minute, and an engineer finding a live demo or repo to verify it.

## Positioning

Software Engineer (backend, distributed systems, AI-enabled infrastructure). The difference is evidence: most projects are live and linked, with measured numbers from load tests and real data, plus production work at Meesho and Markit.

## Operating Context

Visited from resumes, LinkedIn and job applications. Next.js 14 app router site (Tailwind, NextUI, framer-motion) deployed on Vercel from GitHub `Ramya-Shah/Portfolio`, branch `main`. Pages: About (home), Projects (filterable catalog), Contact (form posting to `/api/contact`). Current redesign scope: the home page.

## Capabilities and Constraints

- Content lives in `app/utils` (projectList, experienceData, educationList, whoAmIData, contactData) and in page components.
- All current wording is binding: headings, bio, project and experience text stay as written. Ask before changing any copy.
- Facts must match the master profile: CPI is 8.6; no invented users, metrics or claims.
- The home page shows the intro first, then both projects and experience.

## Brand Commitments

- Name: Ramya Shah. Introduced as Software Engineer.
- Must read as professional and easy to skim; plain or template-looking is a failure.
- Rejected by the user (do not repeat): a dark green-black editorial look; playful laptop-sticker styling; a cluttered drum-machine look; an engineering-drawing look (drafting grid, zone letters, title blocks), which was scrapped as ugly. The robot illustration (`public/profile.jpg`) was removed as unprofessional; there is no real photo.
- Liked by the user: the component-datasheet direction (precise, measured, professional) and the earlier blue-on-white redesign on branch `redesign-cobalt`.

## Evidence on Hand

- Project screenshots in `public/` and live links and repos in `app/utils/projectList.tsx`.
- No testimonials, client logos, press or photo of Ramya exist; do not add any.

## Product Principles

- Proof over adjectives: lead with what runs and what it measured.
- Let a recruiter skim: role, strongest projects, experience and contact reachable fast.
- Every claim traceable to a live demo, repo or the master profile.
