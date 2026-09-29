"use client";
import { motion } from "framer-motion";
import GlowBackground from "@/components/GlowBackground";

const coreSkills = [
  { name: "HTML5", icon: "bxl-html5", level: 85 },
  { name: "CSS3", icon: "bxl-css3", level: 85 },
  { name: "Tailwind CSS", icon: "bxl-tailwind-css", level: 90 },
  { name: "JavaScript", icon: "bxl-javascript", level: 80 },
];

const frameworks = [
  { name: "TypeScript", icon: "bxl-typescript", level: 75 },
  { name: "React", icon: "bxl-react", level: 85 },
  { name: "Next.js", icon: "bx-code-block", level: 80 },
  { name: "UX/UI Design", icon: "bxs-paint", level: 95 },
];

const tools = [
  { name: "Firebase", icon: "bxl-firebase", level: 70 },
  { name: "Java", icon: "bxl-java", level: 65 },
  { name: "PostgreSQL", icon: "bx-data", level: 60 },
  { name: "Git & GitHub", icon: "bxl-git", level: 90 },
];

function SkillBar({ name, icon, level }: { name: string; icon: string; level: number }) {
  return (
    <div className="group bg-[#1e1e1e] p-4 rounded-2xl shadow-xl border border-[#FFD700]/20 hover:border-[#FFD700]/40 transition-all duration-300">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-[#FFD700]/20 rounded-lg flex items-center justify-center group-hover:bg-[#FFD700]/30 transition-colors">
            <i className={`bx ${icon} text-xl text-[#FFD700]`}></i>
          </div>
          <span className="text-lg font-semibold text-white font-poppins">{name}</span>
        </div>
        <span className="text-sm font-bold text-[#FFD700]">{level}%</span>
      </div>
      <div className="w-full bg-[#1e1e1e] rounded-full h-3 border border-[#FFD700]/30 overflow-hidden">
        <motion.div
          className="bg-gradient-to-r from-[#FFD700] to-yellow-300 h-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section className="py-16 bg-[#1e1e1e] relative overflow-hidden" id="skills">
      <GlowBackground variant="left" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
            My Skills
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700] to-yellow-300 rounded-full"></div>
          </h2>
          <p className="text-xl text-white max-w-2xl mx-auto font-light">Technologies and tools I work with</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-poppins">Core Technologies</h3>
            <div className="space-y-3">
              {coreSkills.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-poppins">Frameworks</h3>
            <div className="space-y-3">
              {frameworks.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-[#FFD700] mb-4 font-poppins">Backend & Tools</h3>
            <div className="space-y-3">
              {tools.map((s) => <SkillBar key={s.name} {...s} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
