"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface RouteProps {
  label: string;
  url: string;
}

const routes: RouteProps[] = [
  { label: "ABOUT", url: "/" },
  { label: "PROJECTS", url: "/projects" },
  { label: "CONTACT", url: "/contact" },
];

export const NavbarSection = () => {
  const pathname = usePathname();

  return (
    <header className="w-full max-w-6xl mx-auto px-4 pt-6 pb-2">
      <div className="w-full rounded-2xl bg-[#F9F0E0] text-[#141416] px-6 py-4 flex items-center justify-between shadow-xl border border-[#FFF7EB]/40 bento-poppy">
        {/* Brand Name on Left */}
        <Link href="/" className="flex items-center gap-2 group">
          <span className="font-extrabold text-base sm:text-lg tracking-wider uppercase text-[#141416] group-hover:text-[#CC3A63] transition-colors">
            RAMYA SHAH
          </span>
          <span className="hidden sm:inline-block text-xs font-bold text-[#A2AB73] uppercase tracking-widest pl-1 border-l border-[#141416]/20">
            ENGINEER
          </span>
        </Link>

        {/* Navigation Links on Right */}
        <nav className="flex items-center gap-4 sm:gap-6">
          {routes.map((route) => {
            const isActive = pathname === route.url;
            return (
              <Link
                key={route.url}
                href={route.url}
                className={`text-xs sm:text-sm font-extrabold tracking-wider transition-all duration-200 bento-btn-poppy px-2.5 py-1 rounded-lg ${
                  isActive
                    ? "bg-[#141416] text-[#FFF7EB] shadow-sm"
                    : "text-[#141416]/80 hover:text-[#CC3A63] hover:bg-[#141416]/5"
                }`}
              >
                {route.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
};
