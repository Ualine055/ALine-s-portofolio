"use client";
import { motion } from "framer-motion";
import GlowBackground from "@/components/GlowBackground";
import ProfilePicture from "@/components/ProfilePicture";

export default function About() {
  return (
    <section className="py-24 bg-[#1e1e1e] relative overflow-hidden" id="about">
      <GlowBackground variant="right" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 font-poppins relative inline-block">
            About Me
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFD700]/80 to-white/40 rounded-full"></div>
          </h2>
          <p className="text-xl text-white/80 max-w-2xl mx-auto font-light">Get to know the person behind the code</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="relative flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <ProfilePicture />
          </motion.div>

          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                I&apos;m <span className="text-[#FFD700]">Aline Uwineza</span>
              </h3>
              <p className="text-white/70 text-lg font-medium mb-6">Software Developer & UI/UX Enthusiast</p>
            </div>

            <div className="space-y-4">
              <p className="text-lg text-white/80 leading-relaxed font-poppins">
                As a Software developer, I am passionate about improving the lives of others through design and development.
                I love learning new things and using my skills to create meaningful digital experiences.
              </p>
              <p className="text-lg text-white/80 leading-relaxed font-poppins">
                I build fast, responsive and accessible web applications with React and Next.js,
                turning ideas into clean, user-friendly interfaces. From pixel-perfect UI to
                well-structured, maintainable code, I care about every detail of the experience.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-[#1e1e1e]/70 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-[#FFD700] mb-1">2+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div className="text-center p-4 bg-[#1e1e1e]/70 rounded-lg border border-white/10">
                <div className="text-2xl font-bold text-[#FFD700] mb-1">10+</div>
                <div className="text-sm text-white/80">Projects Completed</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="/assets/img/resume.pdf"
                download
                className="group inline-flex items-center justify-center bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>Download Resume</span>
                <i className="bx bx-download text-xl ml-2 group-hover:translate-y-1 transition-transform"></i>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-black font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                <span>Let&apos;s Talk</span>
                <i className="bx bx-message-dots text-xl ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
