"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = ["home", "about", "skills", "experience", "work", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const pathname = usePathname();
  const onHome = pathname === "/";

  // Highlight the nav link of the section currently in view
  useEffect(() => {
    if (!onHome) return;
    const onScroll = () => {
      const y = window.scrollY + 100;
      for (const id of links) {
        const section = document.getElementById(id);
        if (section && y >= section.offsetTop && y < section.offsetTop + section.offsetHeight) {
          setActive(id);
          break;
        }
      }
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [onHome]);

  // On other pages, section links must go back to the home page first
  const hrefFor = (id: string) => (onHome ? `#${id}` : `/#${id}`);
  const colorFor = (id: string) =>
    onHome && active === id ? "text-[#FFD700]" : "text-white hover:text-[#FFD700]";

  return (
    <header
      className="fixed top-0 left-0 w-full backdrop-blur-md z-50 shadow-lg"
      style={{ boxShadow: "0px 0px 5px 0px #ffd700", backgroundColor: "rgba(30,30,30,0.9)" }}
    >
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href={hrefFor("home")} className="flex items-center">
            <Image src="/assets/img/logo.png" alt="Logo" width={60} height={48} className="h-12 w-auto" />
          </Link>

          <div className="hidden md:block">
            <ul className="flex space-x-8 lg:space-x-12">
              {links.map((link) => (
                <li key={link}>
                  <Link
                    href={hrefFor(link)}
                    className={`${colorFor(link)} transition-colors duration-200 font-semibold capitalize`}
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setOpen(!open)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="text-white hover:text-[#FFD700] focus:outline-none"
            >
              <i className={`bx ${open ? "bx-x" : "bx-menu"} text-2xl`}></i>
            </button>
          </div>
        </div>

        {open && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-[#FFD700]">
              {links.map((link) => (
                <Link
                  key={link}
                  href={hrefFor(link)}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-2 ${colorFor(link)} hover:bg-[#1e1e1e] rounded-md capitalize`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
