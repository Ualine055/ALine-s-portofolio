import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Aline's Portfolio",
  description: "Frontend Developer & UI/UX Designer",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/remixicon@3.6.0/fonts/remixicon.css" />
        <link href="https://cdn.jsdelivr.net/npm/boxicons@2.0.5/css/boxicons.min.css" rel="stylesheet" />
      </head>
      <body className="bg-[#1e1e1e] text-white font-poppins">{children}</body>
    </html>
  );
}
