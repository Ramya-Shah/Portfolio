"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";
import { GithubSVG, LinkedInSVG, MailSVG } from "./ui/icons";
import { whoAmIData, contactData } from "../utils";

export const Hero = () => {
  const { fullName } = whoAmIData;
  const { github, linkedIn, email } = contactData;

  const stats = [
    {
      value: "986 tasks/s",
      label: "Sustained Throughput",
      sublabel: "TaskForge EC2 Benchmark",
    },
    {
      value: "2,250+ Cells",
      label: "Restatements Uncovered",
      sublabel: "Meesho Daily Flash",
    },
    {
      value: "528K+ Users",
      label: "Edge Traffic Served",
      sublabel: "Next.js Web Applications",
    },
    {
      value: "8.56 CPI",
      label: "Academic Standing",
      sublabel: "DA-IICT B.Tech. (Hons.)",
    },
  ];

  return (
    <section className="flex flex-col gap-10 pt-4 pb-10">
      {/* Top Banner & Status Badge */}
      <div className="flex flex-col items-start gap-4">
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 backdrop-blur-md">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span className="text-xs sm:text-sm font-medium text-emerald-300">
            Software Engineer · Bangalore, India
          </span>
        </div>

        {/* Main Headline & Intro */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 w-full">
          <div className="flex flex-col gap-4 max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Hi, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-teal-300 to-indigo-400">{fullName}</span>.
              <br />
              Building scalable systems &amp; AI-enabled infrastructure.
            </h1>

            <p className="text-lg sm:text-xl text-gray-300 font-normal leading-relaxed">
              Focused on <span className="text-white font-medium">backend engineering</span>, <span className="text-white font-medium">distributed systems</span>, <span className="text-white font-medium">high-throughput queues</span>, and <span className="text-white font-medium">AI workflows</span>. Experienced in building production data architecture and automation systems at Meesho; graduated from DA-IICT with Honours.
            </p>

            {/* CTAs and Social Links */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Button
                as={Link}
                href="/projects"
                className="bg-white text-black font-semibold px-6 py-2 rounded-xl shadow-lg hover:bg-gray-200 transition-all"
              >
                View Systems &amp; Projects →
              </Button>

              <Button
                as={Link}
                href="/contact"
                variant="bordered"
                startContent={<MailSVG />}
                className="border-white/20 hover:border-white/40 text-white font-medium px-5 py-2 rounded-xl bg-white/[0.04] backdrop-blur-md transition-all"
              >
                Get In Touch
              </Button>

              <div className="flex items-center gap-2 pl-1">
                <Button
                  isIconOnly
                  as="a"
                  href={github}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  className="border-white/10 hover:border-white/30 text-white w-10 h-10 min-w-10 rounded-xl bg-white/[0.03] transition-all"
                  aria-label="GitHub Profile"
                >
                  <GithubSVG />
                </Button>
                <Button
                  isIconOnly
                  as="a"
                  href={linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="bordered"
                  className="border-white/10 hover:border-white/30 text-white w-10 h-10 min-w-10 rounded-xl bg-white/[0.03] transition-all"
                  aria-label="LinkedIn Profile"
                >
                  <LinkedInSVG />
                </Button>
              </div>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative flex-shrink-0 mx-auto lg:mx-0">
            <div className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-2xl overflow-hidden border-2 border-white/20 shadow-2xl p-1 bg-gradient-to-tr from-blue-500/20 via-white/5 to-teal-500/20">
              <div className="relative w-full h-full rounded-xl overflow-hidden">
                <Image
                  src="/profile.jpg"
                  alt={fullName}
                  fill
                  sizes="(max-width: 640px) 144px, 176px"
                  priority
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Metrics / Proof Points Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
        {stats.map((stat, idx) => (
          <Card
            key={`stat-${idx}`}
            className="border border-white/10 bg-white/[0.03] backdrop-blur-md rounded-2xl transition-all duration-300 hover:border-blue-500/40 hover:bg-white/[0.05]"
          >
            <CardBody className="p-4 sm:p-5 flex flex-col justify-center">
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="text-sm font-semibold text-gray-200 mt-1">
                {stat.label}
              </div>
              <div className="text-xs text-gray-400 mt-0.5">
                {stat.sublabel}
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  );
};
