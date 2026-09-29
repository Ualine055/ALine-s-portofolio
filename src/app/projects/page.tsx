"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GlowBackground from "@/components/GlowBackground";
import { projects } from "@/data/projects";


export default function Projects() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16 bg-[#1e1e1e] min-h-screen relative overflow-hidden">
        <GlowBackground />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
              All Projects
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full"></div>
            </h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto font-light mt-4">
              A complete showcase of my work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((p, i) => (
              <motion.a
                key={p.title}
                href={p.href}
                target={p.href ? "_blank" : undefined}
                rel={p.href ? "noopener noreferrer" : undefined}
                className="group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 bg-[#1e1e1e] block transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={p.img}
                    alt={p.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  {!p.href && (
                    <span className="absolute top-3 right-3 px-3 py-1 bg-[#1e1e1e]/80 text-[#FFD700] text-xs font-semibold rounded-full border border-[#FFD700]/40">
                      Coming soon
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                  <p className="text-sm text-white/70 mb-3">{p.category}</p>
                  <div className="flex flex-wrap gap-2">
                    {p.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.a>
            ))}
          </div>

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
