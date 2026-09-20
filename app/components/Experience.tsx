"use client";

import { experienceData, educationList } from "../utils";

export const Experience = () => {
  return (
    <section className="flex flex-col gap-8 py-6 w-full">
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-[#A2AB73] font-bold text-xs uppercase tracking-widest">
          <span>Career &amp; Engineering Systems</span>
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-[#141416] tracking-tight">
          Work Experience &amp; Education
        </h2>
        <p className="text-[#141416]/75 text-sm sm:text-base max-w-2xl font-medium">
          Production systems, internal data platforms, and high-throughput engineering delivered in industry.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {/* Industry Experience Cards */}
        {experienceData.map((exp, expIdx) => (
          <div
            key={`exp-${expIdx}`}
            className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col gap-6"
          >
            {/* Header: Company & Role */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-[#141416]/10 pb-5">
              <div>
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-black text-[#141416] tracking-tight">
                    {exp.company}
                  </h3>
                  {exp.department && (
                    <span className="text-xs px-3 py-1 rounded-full bg-[#141416]/10 text-[#141416] font-bold uppercase tracking-wider">
                      {exp.department}
                    </span>
                  )}
                </div>
                <div className="text-base text-[#141416]/80 font-bold mt-1">
                  {exp.role}
                </div>
              </div>

              <div className="flex sm:flex-col sm:items-end gap-0.5 text-xs font-semibold text-[#141416]/70">
                <span className="font-extrabold text-[#CC3A63]">{exp.period}</span>
                <span>{exp.location}</span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm font-medium text-[#141416]/80 leading-relaxed">
              {exp.description}
            </p>

            {/* Sub-systems / Key Technical Deliverables */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {exp.systems.map((sys, sysIdx) => (
                <div
                  key={`sys-${sysIdx}`}
                  className="flex flex-col justify-between p-5 rounded-2xl bg-[#141416]/5 border border-[#141416]/10 bento-poppy gap-3"
                >
                  <div>
                    <h4 className="text-base font-extrabold text-[#141416]">
                      {sys.name}
                    </h4>
                    <p className="text-xs text-[#141416]/75 mt-2 leading-relaxed font-medium">
                      {sys.summary}
                    </p>
                  </div>

                  {sys.metrics && sys.metrics.length > 0 && (
                    <ul className="flex flex-col gap-1.5 pt-3 border-t border-[#141416]/10">
                      {sys.metrics.map((metric, mIdx) => (
                        <li
                          key={`m-${mIdx}`}
                          className="text-xs text-[#141416] font-bold flex items-start gap-1.5"
                        >
                          <span className="text-[#CC3A63] font-black">•</span>
                          <span>{metric}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Technologies used */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#141416]/10">
              <span className="text-xs font-black text-[#A2AB73] mr-2 uppercase tracking-wider">
                Technologies:
              </span>
              {exp.technologies.map((tech, tIdx) => (
                <span
                  key={`t-${tIdx}`}
                  className="px-2.5 py-1 rounded-lg bg-[#141416]/10 text-xs font-bold text-[#141416]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}

        {/* Education Timeline */}
        <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col gap-5">
          <div className="flex items-center justify-between border-b border-[#141416]/10 pb-4">
            <div>
              <h3 className="text-2xl font-black text-[#141416] tracking-tight">
                Education &amp; Academic Honors
              </h3>
              <p className="text-xs text-[#141416]/70 mt-0.5 font-medium">
                Foundations in computer systems, algorithms, and computational science.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {educationList.map((edu, eIdx) => (
              <div
                key={`edu-${eIdx}`}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-2xl bg-[#141416]/5 border border-[#141416]/10 gap-2"
              >
                <div className="flex flex-col gap-0.5">
                  <div className="text-sm font-extrabold text-[#141416]">
                    {edu.career}
                  </div>
                  <div className="text-xs text-[#141416]/80 font-medium">
                    {edu.description}
                  </div>
                </div>
                <div className="text-xs font-black text-[#CC3A63] flex-shrink-0">
                  {edu.years}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
