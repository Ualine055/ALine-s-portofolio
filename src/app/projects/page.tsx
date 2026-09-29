import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import ProjectsGrid from "@/components/ProjectsGrid";

export const metadata: Metadata = {
  title: "All Projects",
  description: "A complete showcase of web applications built by Aline Uwineza with React, Next.js and TypeScript.",
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-[#1e1e1e] min-h-screen relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
              All Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full"></div>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mt-4">
              A complete showcase of my work
            </p>
          </div>

          <ProjectsGrid />

          <div className="text-center mt-16">
            <Link
              href="/"
              className="group inline-flex items-center justify-center border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300"
            >
              <i className="bx bx-left-arrow-alt text-xl mr-2 group-hover:-translate-x-1 transition-transform"></i>
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
