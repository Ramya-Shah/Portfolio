"use client";

import { contactData } from "@/app/utils";
import { Form } from "../components/Form";
import { MailSVG, GithubSVG, LinkedInSVG } from "../components/ui/icons/";

export default function Contact() {
  const { email, github, linkedIn } = contactData;

  return (
    <section className="p-4 sm:p-6 pb-20 max-w-4xl m-auto flex flex-col gap-10">
      {/* Header */}
      <div className="flex flex-col gap-2">
        <div className="inline-flex items-center gap-2 text-[#A2AB73] font-bold text-xs uppercase tracking-widest">
          <span>Get In Touch</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-black text-[#141416] tracking-tight">
          Let&apos;s Build Something Together
        </h1>
        <p className="text-[#141416]/75 text-sm sm:text-base max-w-2xl font-medium">
          Open to discuss distributed systems, backend infrastructure, and AI engineering opportunities.
        </p>
      </div>

      {/* Social / Direct Connect Cards in Bento Palette */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {/* Email */}
        <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-6 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#CC3A63] border border-[#141416]/15 shadow-xs flex items-center justify-center flex-shrink-0">
              <MailSVG size={24} color="#CC3A63" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#141416] leading-snug">Email</span>
              <span className="text-[11px] font-medium text-[#141416]/60">Direct Inquiry</span>
            </div>
          </div>
          <a
            href={`mailto:${email}?subject=Opportunity Inquiry`}
            className="py-2.5 px-3 rounded-xl bg-[#141416] text-[#FFF7EB] font-bold text-xs text-center bento-btn-poppy hover:bg-[#CC3A63] transition-colors truncate"
          >
            {email}
          </a>
        </div>

        {/* GitHub */}
        <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-6 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#141416] border border-[#141416]/15 shadow-xs flex items-center justify-center flex-shrink-0">
              <GithubSVG size={24} color="#141416" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#141416] leading-snug">GitHub</span>
              <span className="text-[11px] font-medium text-[#141416]/60">Open Source Code</span>
            </div>
          </div>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-[#141416] text-[#FFF7EB] font-bold text-xs text-center bento-btn-poppy hover:bg-[#CC3A63] transition-colors"
          >
            View Code Repositories →
          </a>
        </div>

        {/* LinkedIn */}
        <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-6 shadow-xl border border-[#FFF7EB]/60 bento-poppy flex flex-col justify-between gap-5">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-2xl bg-white text-[#0A66C2] border border-[#141416]/15 shadow-xs flex items-center justify-center flex-shrink-0">
              <LinkedInSVG size={24} color="#0A66C2" />
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-black text-[#141416] leading-snug">LinkedIn</span>
              <span className="text-[11px] font-medium text-[#141416]/60">Professional Profile</span>
            </div>
          </div>
          <a
            href={linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="py-2.5 px-3 rounded-xl bg-[#141416] text-[#FFF7EB] font-bold text-xs text-center bento-btn-poppy hover:bg-[#CC3A63] transition-colors"
          >
            Connect Profile →
          </a>
        </div>
      </div>

      {/* Message Form in Cream Bento Palette */}
      <div className="rounded-3xl bg-[#F9F0E0] text-[#141416] p-7 sm:p-9 shadow-xl border border-[#FFF7EB]/60 bento-poppy">
        <Form />
      </div>
    </section>
  );
}
