"use client";
import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { projects, projectFilters } from "@/data/projects";

export default function ProjectsGrid() {
  const [filter, setFilter] = useState("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <>
      <div className="flex flex-wrap justify-center gap-3 mb-12" role="group" aria-label="Filter projects by technology">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            aria-pressed={filter === f}
            className={`px-5 py-2 rounded-full text-sm font-semibold border transition-all duration-300 ${
              filter === f
                ? "bg-[#FFD700] text-[#1e1e1e] border-[#FFD700]"
                : "text-white/80 border-[#FFD700]/30 hover:border-[#FFD700] hover:text-[#FFD700]"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {shown.map((p) => (
            <motion.article
              key={p.title}
              layout
              className="group flex flex-col overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 bg-[#1e1e1e] transition-colors duration-500"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={p.img}
                  alt={p.title}
                  width={600}
                  height={400}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {!p.href && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-[#1e1e1e]/80 text-[#FFD700] text-xs font-semibold rounded-full border border-[#FFD700]/40">
                    Coming soon
                  </span>
                )}
              </div>

              <div className="flex flex-col flex-1 p-5">
                <p className="text-xs uppercase tracking-wider text-[#FFD700] mb-1">{p.category}</p>
                <h3 className="text-lg font-semibold text-white mb-2">{p.title}</h3>
                <p className="text-sm text-white/70 leading-relaxed mb-4">{p.description}</p>

                <div className="flex flex-wrap gap-2 mb-5">
                  {p.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-[#FFD700]/20 text-[#FFD700] text-xs rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex gap-3">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] text-sm font-semibold py-2 px-4 rounded-full transition-colors"
                    >
                      <i className="bx bx-link-external"></i> Live Demo
                    </a>
                  )}
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 inline-flex items-center justify-center gap-1 border border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1e1e1e] text-sm font-semibold py-2 px-4 rounded-full transition-colors"
                    >
                      <i className="bx bxl-github"></i> Code
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </>
  );
}
