import "./globals.css";
import type { Metadata } from "next";
import { Syne, Inter, Instrument_Serif } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-instrument",
  weight: ["400"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: {
    default: "rayso.studio — Premium Web Design for Local Service Businesses",
    template: "%s | rayso.studio",
  },
  description:
    "rayso builds high-converting websites for real estate agents, mortgage brokers, plumbers, and home service businesses. Framer, Webflow, custom Next.js dev, and Sanity CMS.",
  keywords: [
    "web design agency",
    "real estate website design",
    "mortgage broker website",
    "plumbing website design",
    "Framer development",
    "Webflow development",
    "Sanity CMS",
    "local service business website",
  ],
  openGraph: {
    type: "website",
    siteName: "rayso.studio",
  },
  icons: {
    icon: "/favicon.ico",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${inter.variable} ${inter.className} font-body antialiased overflow-x-hidden`}
      >
        {/* Noise overlay */}
        <div className="fixed inset-0 pointer-events-none z-[9999] opacity-[0.025] bg-noise" />
        <ThemeProvider>
          <Navbar />
          {children}
          <Footer />
          </ThemeProvider>
      </body>
    </html>
  );
}
