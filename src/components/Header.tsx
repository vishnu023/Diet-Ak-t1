import { motion } from "motion/react";
import { Sparkles, ArrowUpRight } from "lucide-react";
import Logo from "./Logo";

export default function Header() {
  const scrollToAccess = () => {
    const s = document.getElementById("waitlist-anchor");
    s?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="sticky top-0 w-full z-40 bg-bg-base/70 backdrop-blur-md border-b border-brand/5 px-6 py-3 md:px-12"
      id="app-header"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 group">
          <Logo variant="horizontal" iconClassName="w-10 h-10" className="group-hover:opacity-90 transition-opacity" />
          <span className="hidden sm:inline-block ml-1 text-[9px] font-mono bg-brand-soft text-brand py-0.5 px-2 rounded-full font-bold uppercase tracking-wider select-none border border-brand/10">
            Coming Soon
          </span>
        </a>

        {/* Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-muted">
          <a href="#hero-section" className="hover:text-dark transition-colors duration-200">
            The Indic Science
          </a>
          <a href="#how-it-works" className="hover:text-dark transition-colors duration-200">
            The Wellness Loop
          </a>
          <a href="#ecosystem" className="hover:text-dark transition-colors duration-200">
            Prana Ecosystem
          </a>
          <a href="#app-preview" className="hover:text-dark transition-colors duration-200">
            AI Ahara Companion
          </a>
        </nav>

        {/* CTA Button */}
        <button
          onClick={scrollToAccess}
          className="flex items-center gap-1 px-4 py-2 text-xs md:text-sm font-semibold rounded-full bg-brand text-white hover:bg-brand/90 transition-all duration-300 shadow-md shadow-brand/10 hover:shadow-brand/20 cursor-pointer active:scale-95"
          id="header-cta"
        >
          <span>Join Early Access</span>
          <ArrowUpRight size={14} className="stroke-[2.5]" />
        </button>
      </div>
    </motion.header>
  );
}
