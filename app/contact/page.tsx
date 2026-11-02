"use client";

import { contactData } from "@/app/utils";
import { Form } from "../components/Form";
import { MailSVG, GithubSVG, LinkedInSVG } from "../components/ui/icons/";
import dw from "../components/drawing/drawing.module.css";
import s from "./contact.module.css";

export default function Contact() {
  const { email, github, linkedIn } = contactData;

  const channels = [
    {
      name: "Email",
      note: "Direct Inquiry",
      href: `mailto:${email}?subject=Opportunity Inquiry`,
      action: email,
      icon: <MailSVG size={22} color="#1B2430" />,
      external: false,
    },
    {
      name: "GitHub",
      note: "Open Source Code",
      href: github,
      action: "View Code Repositories",
      icon: <GithubSVG size={22} color="#1B2430" />,
      external: true,
    },
    {
      name: "LinkedIn",
      note: "Professional Profile",
      href: linkedIn,
      action: "Connect Profile",
      icon: <LinkedInSVG size={22} color="#1B2430" />,
      external: true,
    },
  ];

  return (
    <main className={s.page}>
      <div className={s.intro}>
        <h1 className={`${dw.display} ${dw.h1}`}>Let&apos;s Build Something Together</h1>
        <p className={`${dw.sheetRef} ${s.ref}`}>Get In Touch</p>
        <p className={dw.lede}>
          Open to discuss distributed systems, backend infrastructure, and AI engineering opportunities.
        </p>

        <table className={s.channels}>
          <tbody>
            {channels.map((c) => (
              <tr key={c.name}>
                <td className={s.iconCell}>{c.icon}</td>
                <td>
                  <span className={`${dw.display} ${s.channelName}`}>{c.name}</span>
                  <span className={s.note}>{c.note}</span>
                </td>
                <td className={s.actionCell}>
                  <a
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={dw.textLink}
                  >
                    {c.action}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={s.formSheet}>
        <Form />
      </div>
    </main>
  );
}
