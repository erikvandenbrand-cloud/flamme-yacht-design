import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CookieConsent } from "@/components/CookieConsent";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Flamme Yacht Design | Yacht Design, Naval Architecture & Engineering",
  description: "Independent Dutch yacht design studio combining yacht design, naval architecture and engineering, from first concept to construction-ready design.",
  keywords: [
    "yacht design",
    "yacht designer",
    "custom yacht design",
    "motor yacht design",
    "naval architecture",
    "yacht design studio",
    "jachtontwerp",
    "jachtontwerper",
    "jachtontwerpbureau",
  ],
  authors: [{ name: "Flamme Yacht Design" }],
  creator: "Flamme Yacht Design",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "nl_NL",
    siteName: "Flamme Yacht Design",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
