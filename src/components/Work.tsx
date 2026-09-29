"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { featuredProjects } from "@/data/projects";
import GlowBackground from "@/components/GlowBackground";


export default function Work() {
  return (
    <section className="py-24 bg-[#1e1e1e] relative overflow-hidden" id="work">
      <GlowBackground variant="right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
            My Work
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full"></div>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-light">A showcase of my recent projects and creative work</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.href}
              target={p.href ? "_blank" : undefined}
              rel={p.href ? "noopener noreferrer" : undefined}
              className="group block overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 bg-[#1e1e1e] transition-all duration-500"
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
                <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-lg font-semibold mb-1">{p.title}</h3>
                  <p className="text-sm">{p.category}</p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        <div className="text-center mt-16">
          <Link
            href="/projects"
            className="group inline-flex items-center justify-center bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <span>View All Projects</span>
            <i className="bx bx-right-arrow-alt text-xl ml-2 group-hover:translate-x-1 transition-transform"></i>
          </Link>
        </div>
      </div>
    </section>
  );
}
