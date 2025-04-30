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
  title: "Ramya Shah",
  description: "Ramya Shah | Fullstack developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <FlareCursor></FlareCursor>
        <main className="dark text-foreground bg-background min-h-screen">
          <NavbarSection />
          <Providers>{children}</Providers>
          <Analytics />
        </main>
      </body>
    </html>
  );
}
