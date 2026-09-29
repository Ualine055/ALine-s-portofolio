"use client";
import Image from "next/image";
import { motion } from "framer-motion";

// Tags floating around the profile picture
const floatingTags = [
  { label: "React Dev", icon: "bxl-react", position: "top-6 -right-2 sm:-right-6", delay: 0 },
  { label: "UI/UX", icon: "bxs-palette", position: "top-1/2 -right-4 sm:-right-12", delay: 1 },
  { label: "Next.js", icon: "bx-code-block", position: "bottom-8 -left-4 sm:-left-10", delay: 2 },
];

type Props = {
  /** Show the floating React Dev / UI/UX / Next.js tags */
  showTags?: boolean;
  /** Load the image right away (use for the picture at the top of the page) */
  priority?: boolean;
};

export default function ProfilePicture({ showTags = false, priority = false }: Props) {
  return (
    <motion.div
      className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96"
      animate={{ y: [0, -20, 0] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      {/* Glow behind the picture */}
      <div className="absolute -inset-8 rounded-full bg-[#FFD700]/25 blur-3xl"></div>

      {/* Rotating dashed ring */}
      <motion.div
        className="absolute -inset-3 rounded-full border-2 border-dashed border-[#FFD700]/60"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      ></motion.div>

      <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-[#FFD700]/30 shadow-2xl shadow-[#FFD700]/20">
        {/* Same gold-to-orange background the picture had originally */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#ffd700] to-[#ffa500] opacity-30"></div>
        <Image
          src="/assets/img/profile.png"
          alt="Aline Uwineza"
          fill
          priority={priority}
          sizes="(min-width: 1024px) 384px, 320px"
          className="object-cover"
        />
      </div>

      {showTags &&
        floatingTags.map(({ label, icon, position, delay }) => (
          <motion.div
            key={label}
            className={`absolute ${position} flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1e1e1e]/90 backdrop-blur-md border border-[#FFD700]/30 shadow-lg text-white text-sm font-semibold`}
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay }}
          >
            <i className={`bx ${icon} text-lg text-[#FFD700]`}></i>
            {label}
          </motion.div>
        ))}
    </motion.div>
  );
}
