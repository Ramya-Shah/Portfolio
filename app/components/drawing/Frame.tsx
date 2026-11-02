"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import dw from "./drawing.module.css";

const routes = [
  { label: "About", url: "/" },
  { label: "Projects", url: "/projects" },
  { label: "Contact", url: "/contact" },
];

const zonesX = ["A", "B", "C", "D", "E", "F"];
const zonesY = ["1", "2", "3", "4", "5", "6", "7", "8"];

export const Frame = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div className={dw.paper}>
      <div className={dw.frame}>
        <div className={dw.zonesTop} aria-hidden="true">
          {zonesX.map((z) => <span key={z}>{z}</span>)}
        </div>
        <div className={dw.zonesSide} aria-hidden="true">
          {zonesY.map((z) => <span key={z}>{z}</span>)}
        </div>
        <div className={dw.zonesBottom} aria-hidden="true">
          {zonesX.map((z) => <span key={z}>{z}</span>)}
        </div>

        <div className={dw.sheet}>
          <header className={dw.nav}>
            <Link href="/" className={`${dw.display} ${dw.brand}`}>
              Ramya Shah
            </Link>
            <nav className={dw.links} aria-label="Primary">
              {routes.map((r) => (
                <Link key={r.url} href={r.url} aria-current={pathname === r.url ? "page" : undefined}>
                  {r.label}
                </Link>
              ))}
            </nav>
          </header>
          {children}
        </div>
      </div>
    </div>
  );
};
