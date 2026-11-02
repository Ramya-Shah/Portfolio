"use client";

import { experienceData, educationList } from "../utils";
import dw from "./drawing/drawing.module.css";
import s from "./experience.module.css";

export const Experience = () => {
  return (
    <section className={dw.section}>
      <div className={dw.strip}>
        <h2 className={`${dw.display} ${dw.h2}`}>Work Experience &amp; Education</h2>
        <span className={dw.sheetRef}>Career &amp; Engineering Systems</span>
      </div>
      <p className={dw.lede}>
        Production systems, internal data platforms, and high-throughput engineering delivered in industry.
      </p>

      {experienceData.map((exp, expIdx) => (
        <article key={`exp-${expIdx}`} className={s.job}>
          <dl className={s.jobHead}>
            <div className={s.company}>
              <dt>Company</dt>
              <dd className={dw.display}>{exp.company}</dd>
            </div>
            <div>
              <dt>Role</dt>
              <dd>{exp.role}</dd>
            </div>
            {exp.department && (
              <div>
                <dt>Department</dt>
                <dd>{exp.department}</dd>
              </div>
            )}
            <div>
              <dt>Period</dt>
              <dd className={s.period}>{exp.period}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{exp.location}</dd>
            </div>
          </dl>

          <p className={`${dw.body} ${s.description}`}>{exp.description}</p>

          <div className={s.systems}>
            {exp.systems.map((sys, sysIdx) => (
              <div key={`sys-${sysIdx}`} className={s.system}>
                <h3 className={`${dw.display} ${s.systemName}`}>{sys.name}</h3>
                <p className={s.summary}>{sys.summary}</p>
                {sys.metrics && sys.metrics.length > 0 && (
                  <ul className={s.metrics}>
                    {sys.metrics.map((metric, mIdx) => (
                      <li key={`m-${mIdx}`}>{metric}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>

          <div className={s.tech}>
            <span className={s.techLabel}>Technologies:</span>
            <ul className={dw.chips}>
              {exp.technologies.map((tech, tIdx) => (
                <li key={`t-${tIdx}`}>{tech}</li>
              ))}
            </ul>
          </div>
        </article>
      ))}

      <article className={s.job}>
        <div className={s.eduHead}>
          <h3 className={`${dw.display} ${dw.h3}`}>Education &amp; Academic Honors</h3>
          <p className={s.summary}>Foundations in computer systems, algorithms, and computational science.</p>
        </div>
        <div className={s.eduGrid}>
          {educationList.map((edu, eIdx) => (
            <div key={`edu-${eIdx}`} className={s.eduCard}>
              <span className={`${dw.display} ${s.years}`}>{edu.years}</span>
              <h4 className={`${dw.display} ${s.eduName}`}>{edu.career}</h4>
              <p className={s.eduDesc}>{edu.description}</p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};
