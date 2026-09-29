import type { Metadata } from "next";
import BackToTop from "@/components/BackToTop";
import "./globals.css";

// Vercel provides the live address automatically; locally we fall back to localhost
const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "http://localhost:3000";

const description =
  "Aline Uwineza is a Frontend Developer and UI/UX Designer in Kigali, Rwanda, building fast, responsive web applications with React, Next.js and TypeScript.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Aline Uwineza | Frontend Developer",
    template: "%s | Aline Uwineza",
  },
  description,
  keywords: ["Aline Uwineza", "Frontend Developer", "React", "Next.js", "TypeScript", "UI/UX", "Kigali", "Rwanda", "Portfolio"],
  authors: [{ name: "Aline Uwineza", url: "https://github.com/Ualine055" }],
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Aline Uwineza",
    title: "Aline Uwineza | Frontend Developer",
    description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Aline Uwineza | Frontend Developer",
    description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.6.0/fonts/remixicon.css" />
        <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className="bg-[#1e1e1e] text-white font-poppins">
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
