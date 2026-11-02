import type { Metadata } from "next";
import { Sofia_Sans, Sofia_Sans_Condensed } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import Providers from "./providers";
import { Frame } from "./components/drawing/Frame";
import "./globals.css";
import FlareCursor from "./components/cursor";
import { Toaster } from 'sonner';

const text = Sofia_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-text" });
const display = Sofia_Sans_Condensed({ subsets: ["latin"], weight: ["600", "800", "900"], variable: "--font-display" });

export const metadata: Metadata = {
  title: "Ramya Shah | Software Engineer",
  description: "Ramya Shah — Software Engineer focused on backend, full-stack, distributed systems, and AI-enabled infrastructure.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`light ${text.variable} ${display.variable}`}>
      <body className={`${text.className} min-h-screen`}>
        <FlareCursor></FlareCursor>
        <Providers>
          <Frame>{children}</Frame>
          <Toaster theme="light" />
        </Providers>
        <Analytics />
      </body>
    </html>
  );
}
