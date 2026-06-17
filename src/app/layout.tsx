import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import SmoothScrollProvider from "@/components/layout/smooth-scroll-provider";
import { siteConfig } from "@/data/site-config";
import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${siteConfig.name} — ${siteConfig.role}`,
  description: siteConfig.tagline,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans bg-noise`}
      >
        <SmoothScrollProvider>
          <Navbar></Navbar>
          {children}
          <Footer></Footer>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
