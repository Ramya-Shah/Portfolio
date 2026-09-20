import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { NavbarSection } from "./components/ui/Navbar";
const inter = Inter({ subsets: ["latin"] });
import "./globals.css";
import FlareCursor from "./components/cursor";
import { GoogleAnalytics } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Ramya Shah | Software Engineer",
  description: "Ramya Shah — Software Engineer focused on backend, full-stack, distributed systems, and AI-enabled infrastructure.",
};

import { Toaster } from 'sonner';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light" style={{ backgroundColor: "#FCFAF6", colorScheme: "light" }}>
      <body
        className={`${inter.className} bg-[#FCFAF6] text-[#141416] min-h-screen selection:bg-[#CC3A63] selection:text-white`}
        style={{ backgroundColor: "#FCFAF6", color: "#141416", colorScheme: "light" }}
      >
        <FlareCursor></FlareCursor>
        <div className="text-[#141416] bg-[#FCFAF6] min-h-screen selection:bg-[#CC3A63] selection:text-white">
          <NavbarSection />
          <Providers>
            {children}
            <Toaster theme="light" />
          </Providers>
          <Analytics />
        </div>
      </body>
    </html>
  );
}
