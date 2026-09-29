"use client";
import { motion } from "framer-motion";
import GlowBackground from "@/components/GlowBackground";
import { experience, education, type TimelineItem } from "@/data/experience";

function Timeline({ heading, icon, items }: { heading: string; icon: string; items: TimelineItem[] }) {
  return (
    <div>
      <h3 className="flex items-center gap-3 text-2xl font-bold text-[#FFD700] mb-8 font-poppins">
        <i className={`bx ${icon} text-3xl`}></i>
        {heading}
      </h3>
      <ol className="relative border-l-2 border-[#FFD700]/30 space-y-8 ml-3">
        {items.map((item, i) => (
          <motion.li
            key={item.title}
            className="relative pl-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            viewport={{ once: true }}
          >
            <span className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-[#FFD700] ring-4 ring-[#FFD700]/20"></span>
            <div className="p-5 rounded-2xl bg-[#1e1e1e]/70 border border-[#FFD700]/20 hover:border-[#FFD700]/40 shadow-xl transition-colors duration-300">
              <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold text-[#FFD700] bg-[#FFD700]/10 rounded-full">
                {item.date}
              </span>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-white/60 mb-3">{item.place}</p>
              <p className="text-white/80 leading-relaxed">{item.description}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export default function Experience() {
  return (
    <section className="py-24 bg-[#1e1e1e] relative overflow-hidden" id="experience">
      <GlowBackground variant="center" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
            Experience
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full"></div>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-light">My journey in tech so far</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <Timeline heading="Work Experience" icon="bx-briefcase" items={experience} />
          <Timeline heading="Education & Courses" icon="bx-book-reader" items={education} />
        </div>
      </div>
    </section>
  );
}
