"use client";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import GlowBackground from "@/components/GlowBackground";
import ProfilePicture from "@/components/ProfilePicture";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#1e1e1e] relative overflow-hidden" id="home">
      <GlowBackground />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            className="text-center lg:text-left space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="space-y-4">
              <p className="text-[#FFD700] text-lg font-medium tracking-wider uppercase">Hello, I&apos;m</p>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white font-poppins leading-tight">
                <span className="block">Aline</span>
                <TypeAnimation
                  sequence={[
                    "<Frontend Developer />", 2000,
                    "<React Developer />", 2000,
                    "<Next.js Developer />", 2000,
                    "<UI/UX Designer />", 2000,
                  ]}
                  wrapper="span"
                  speed={50}
                  repeat={Infinity}
                  className="inline-block whitespace-nowrap text-2xl sm:text-3xl lg:text-4xl text-[#FFD700]"
                  cursor={true}
                />
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-white font-light leading-relaxed max-w-lg">
              Crafting beautiful digital experiences through{" "}
              <span className="text-[#FFD700] font-semibold">code</span> and{" "}
              <span className="text-[#FFD700] font-semibold">design</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#work"
                className="group inline-flex items-center justify-center bg-[#FFD700] hover:bg-yellow-500 text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
              >
                <span>View My Work</span>
                <i className="bx bx-right-arrow-alt text-xl ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center justify-center border-2 border-[#FFD700] text-[#FFD700] hover:bg-[#FFD700] hover:text-[#1e1e1e] font-semibold py-4 px-8 rounded-full transition-all duration-300"
              >
                <span>Get In Touch</span>
                <i className="bx bx-envelope text-xl ml-2 group-hover:translate-x-1 transition-transform"></i>
              </a>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center lg:justify-end mb-8 lg:mb-0"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <ProfilePicture showTags priority />
          </motion.div>
        </div>

        <div className="flex justify-center lg:justify-start space-x-6 mt-16">
          {[
            { href: "https://www.linkedin.com/in/uwineza-aline-3b194122a", icon: "bxl-linkedin" },
            { href: "https://www.instagram.com/___kalisimbi", icon: "bxl-instagram" },
            { href: "mailto:ualine055@gmail.com", icon: "bxl-gmail" },
            { href: "https://github.com/Ualine055", icon: "bxl-github" },
          ].map(({ href, icon }) => (
            <a
              key={icon}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group w-14 h-14 bg-[#1e1e1e] text-[#FFD700] rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 border border-[#FFD700]/30 hover:border-[#FFD700]"
            >
              <i className={`bx ${icon} text-xl group-hover:scale-110 transition-transform`}></i>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
