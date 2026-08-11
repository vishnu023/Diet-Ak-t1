import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const [activeSection, setActiveSection] = useState<string>("hero-section");

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero-section", "how-it-works", "ecosystem", "app-preview"];
      const scrollPos = window.scrollY + 120;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAccess = () => {
    const s = document.getElementById("waitlist-anchor");
    s?.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { id: "hero-section", label: "The Indic Science" },
    { id: "how-it-works", label: "The Wellness Loop" },
    { id: "ecosystem", label: "Prana Ecosystem" },
    { id: "app-preview", label: "AI Ahara Companion" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 w-full z-40 bg-white/80 backdrop-blur-xl border-b border-brand/10 px-6 py-3.5 md:px-12 shadow-xs transition-all"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Lockup */}
        <a href="#" className="flex items-center gap-2.5 group">
          <Logo variant="horizontal" iconClassName="w-10 h-10 transition-transform group-hover:scale-105 duration-300" />
          <span className="hidden sm:inline-flex items-center gap-1.5 text-[9px] font-mono bg-brand-soft text-brand py-1 px-2.5 rounded-full font-bold uppercase tracking-wider select-none border border-brand/15 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight animate-pulse" />
            <span>Coming Soon</span>
          </span>
        </a>

        {/* Navigation Links with dynamic gold indicator */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-wider text-muted">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`relative py-1 transition-colors duration-200 ${
                  isActive ? "text-brand font-bold" : "hover:text-dark"
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavDot"
                    className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-brand-highlight shadow-xs"
                    transition={{ type: "spring", stiffness: 350, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button with Luxury Glow */}
        <button
          onClick={scrollToAccess}
          className="flex items-center gap-1.5 px-5 py-2.5 text-xs md:text-sm font-semibold rounded-full bg-brand text-white hover:bg-brand/95 transition-all duration-300 shadow-md shadow-brand/20 hover:shadow-lg hover:shadow-brand/30 cursor-pointer active:scale-95 border border-white/20 group relative overflow-hidden"
          id="header-cta"
        >
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <Sparkles size={13} className="text-brand-highlight animate-pulse" />
          <span>Join Early Access</span>
          <ArrowUpRight size={14} className="stroke-[2.5] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </motion.header>
  );
}
