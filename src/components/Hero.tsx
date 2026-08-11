import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Brain, User, CalendarRange, Heart, ArrowDown, Play, Flame, Utensils, Watch, Activity, Sparkle } from "lucide-react";

interface HeroProps {
  onWatchVision: () => void;
}

export default function Hero({ onWatchVision }: HeroProps) {
  const [activeTab, setActiveTab] = useState<string>("prakriti");
  const [autoplay, setAutoplay] = useState<boolean>(true);

  const features = [
    {
      id: "prakriti",
      label: "Prakriti & Agni",
      description: "Understand your unique mind-body constitution (Vata, Pitta, Kapha) and current metabolic capacity (Agni) mapped using advanced machine learning combined with continuous biometric data.",
      icon: <Flame size={14} className="text-brand-highlight" />,
      color: "#1b4931",
      glow: "rgba(27, 73, 49, 0.4)",
      graphic: (
        <svg viewBox="0 0 100 100" className="w-48 h-48 stroke-[1.5] text-brand" fill="none">
          {/* Tri-dosha balanced circle */}
          <circle cx="50" cy="50" r="35" stroke="currentColor" strokeDasharray="4 4" className="opacity-30" />
          {/* Saffron Pitta node */}
          <circle cx="50" cy="15" r="4" className="fill-brand-highlight" />
          <text x="50" y="9" textAnchor="middle" className="fill-brand-highlight text-[6px] font-mono font-bold">PITTA (Agni)</text>
          
          {/* Blue Vata node */}
          <circle cx="20" cy="65" r="4" className="fill-accent" />
          <text x="14" y="74" textAnchor="middle" className="fill-accent text-[6px] font-mono font-bold">VATA (Prana)</text>

          {/* Green Kapha node */}
          <circle cx="80" cy="65" r="4" className="fill-brand" />
          <text x="86" y="74" textAnchor="middle" className="fill-brand text-[6px] font-mono font-bold">KAPHA (Ojas)</text>

          {/* Fused lines */}
          <line x1="50" y1="15" x2="20" y2="65" stroke="currentColor" className="opacity-40" />
          <line x1="20" y1="65" x2="80" y2="65" stroke="currentColor" className="opacity-40" />
          <line x1="80" y1="65" x2="50" y2="15" stroke="currentColor" className="opacity-40" />

          {/* Centered balance indicator */}
          <circle cx="50" cy="48" r="6" className="fill-brand-soft stroke-brand" />
          <circle cx="50" cy="48" r="2" className="fill-brand-highlight" />
        </svg>
      ),
    },
    {
      id: "ahara",
      label: "AI Ahara Science",
      description: "Customized medicinal, heritage Indian recipe suggestions rooted in classical food shastras. Meals are dynamically tailored to stabilize blood sugar and fuel your unique constitutional fire.",
      icon: <Utensils size={14} className="text-brand-highlight" />,
      color: "#d97706",
      glow: "rgba(217, 119, 6, 0.4)",
      graphic: (
        <div className="w-48 h-48 flex items-center justify-center relative">
          <div className="w-40 h-40 rounded-full border-2 border-brand-soft/80 flex items-center justify-center bg-white shadow-inner">
            <div className="w-28 h-28 rounded-full border border-dashed border-brand/20 flex flex-col items-center justify-center text-brand">
              <span className="text-[9px] uppercase tracking-widest font-mono text-muted">Rasayana Plan</span>
              <span className="text-xs font-semibold text-dark mt-1 text-center font-display">Spiced Mung &amp; Moringa</span>
              <span className="text-[10px] font-mono text-brand-highlight mt-1">+18% Agni (Digestive Fire)</span>
              <span className="text-[8px] text-muted mt-0.5">Pitta-Balancing</span>
            </div>
          </div>
          <div className="absolute top-4 right-4 bg-brand-soft px-2 py-1 rounded text-[10px] font-mono text-brand font-semibold shadow-sm border border-brand/10">
            IKS-ALIGNED
          </div>
        </div>
      ),
    },
    {
      id: "biosensors",
      label: "Prana Biosensors",
      description: "Fuses continuous raw streams from modern wearable health sensors (continuous glucose trackers, HRV, sleep metrics) with ancient Ayurvedic circadian (Dinacharya) principles to map vital energies.",
      icon: <Watch size={14} className="text-brand-highlight" />,
      color: "#1b4931",
      glow: "rgba(27, 73, 49, 0.4)",
      graphic: (
        <svg viewBox="0 0 100 100" className="w-48 h-48 stroke-[1.2] text-brand" fill="none">
          {/* Wave line (biometric) fused with solar-lunar arc */}
          <path d="M10 50 Q 25 20, 40 50 T 70 50 T 90 50" stroke="currentColor" className="stroke-[1.5]" />
          <path d="M10 50 Q 25 80, 40 50" stroke="currentColor" strokeDasharray="2 2" className="opacity-40" />
          
          <circle cx="40" cy="50" r="4" className="fill-brand-highlight" />
          <circle cx="70" cy="50" r="4" className="fill-accent" />
          
          {/* Sun icon */}
          <circle cx="25" cy="25" r="6" className="stroke-brand-highlight fill-brand-soft" />
          <line x1="25" y1="15" x2="25" y2="18" stroke="#d97706" />
          <line x1="25" y1="32" x2="25" y2="35" stroke="#d97706" />
          <line x1="15" y1="25" x2="18" y2="25" stroke="#d97706" />
          <line x1="32" y1="25" x2="35" y2="25" stroke="#d97706" />

          {/* Moon icon */}
          <path d="M70 70 A 8 8 0 0 1 82 78 A 8 8 0 1 0 70 70 Z" className="fill-brand stroke-brand" />

          <text x="25" y="42" textAnchor="middle" className="fill-brand text-[7px] font-mono">DINACHARYA SYNC</text>
        </svg>
      ),
    },
    {
      id: "nadi",
      label: "Nadi AI Pulse",
      description: "Our 24/7 proactive metabolic companion translating unstructured biometric signals into traditional pulse-science indicators, preventing metabolic blockages before they manifest.",
      icon: <Activity size={14} className="text-brand-highlight" />,
      color: "#c2410c",
      glow: "rgba(194, 65, 12, 0.4)",
      graphic: (
        <div className="w-48 h-48 flex items-center justify-center relative">
          <div className="absolute w-36 h-36 rounded-full border border-brand/10 animate-spin" style={{ animationDuration: "25s" }} />
          <div className="absolute w-28 h-28 rounded-full border border-dashed border-accent/20 animate-spin" style={{ animationDuration: "12s" }} />
          <motion.div
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="w-16 h-16 rounded-full bg-brand-soft border border-brand flex items-center justify-center text-brand shadow-lg shadow-brand/10"
          >
            <Sparkles size={28} className="text-brand animate-pulse" />
          </motion.div>
        </div>
      ),
    },
    {
      id: "vitality",
      label: "Ojas & Longevity",
      description: "Cultivate radiant vitality (Ojas), reverse chronic metabolic stress, lower biological age, and extend healthspan through personalized, time-tested preventative wisdom.",
      icon: <User size={14} className="text-brand-highlight" />,
      color: "#1b4931",
      glow: "rgba(27, 73, 49, 0.4)",
      graphic: (
        <svg viewBox="0 0 100 100" className="w-48 h-48 stroke-[1.5] text-brand" fill="none">
          {/* Lotus design (Sacred geometry representation of Ojas) */}
          <path d="M50 20 C 45 35, 45 45, 50 55 C 55 45, 55 35, 50 20 Z" className="fill-brand-soft stroke-brand" />
          <path d="M50 55 C 35 50, 25 50, 15 50 C 25 55, 35 55, 50 55 Z" className="fill-brand-soft stroke-brand opacity-60" />
          <path d="M50 55 C 65 50, 75 50, 85 50 C 75 55, 65 55, 50 55 Z" className="fill-brand-soft stroke-brand opacity-60" />
          <path d="M50 55 C 40 40, 30 30, 25 25 C 30 35, 40 45, 50 55 Z" className="fill-brand-soft stroke-brand opacity-80" />
          <path d="M50 55 C 60 40, 70 30, 75 25 C 70 35, 60 45, 50 55 Z" className="fill-brand-soft stroke-brand opacity-80" />
          
          <circle cx="50" cy="55" r="5" className="fill-brand-highlight stroke-white" />
          <text x="50" y="80" textAnchor="middle" className="fill-brand font-display font-bold text-[8px] tracking-wide">RADIANT OJAS</text>
        </svg>
      ),
    },
  ];

  useEffect(() => {
    if (!autoplay) return;
    const timer = setInterval(() => {
      setActiveTab((prev) => {
        const idx = (features.findIndex((f) => f.id === prev) + 1) % features.length;
        return features[idx].id;
      });
    }, 5000);
    return () => clearInterval(timer);
  }, [autoplay, features]);

  const activeFeature = features.find((f) => f.id === activeTab) || features[0];

  const handleSelect = (id: string) => {
    setActiveTab(id);
    setAutoplay(false);
  };

  const scrollToEnroll = () => {
    const section = document.getElementById("waitlist-anchor");
    section?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col items-center justify-center px-6 md:px-12 pt-16 md:pt-24 pb-12 overflow-hidden noise-bg z-10" id="hero-section">
      {/* Platform Badge */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.1 }}
        className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full bg-brand-soft/90 text-brand text-xs font-semibold mb-8 border border-brand/15 shadow-md shadow-brand/5 backdrop-blur-md animate-pulse-slow"
      >
        <div className="w-2 h-2 rounded-full bg-brand-highlight animate-ping" />
        <Sparkles size={13} className="animate-pulse text-brand-highlight" />
        <span className="font-medium tracking-wide">Dietcraft Coming Soon — Fusing IKS &amp; Wearable Intelligence</span>
      </motion.div>

      {/* Main Tagline */}
      <div className="max-w-4xl text-center z-10">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl tracking-tight text-dark leading-[1.06]"
        >
          Time-Tested Indic Wisdom. <br />
          <span className="text-gradient-emerald">Synchronized in Real-Time by AI.</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mt-6 text-base sm:text-lg md:text-xl text-muted font-sans font-light max-w-3xl mx-auto leading-relaxed"
        >
          Dietcraft.life is India&apos;s pioneering luxury wellness solution provider <span className="text-brand font-semibold">(Coming Soon)</span>. We decode your unique biological constitution (Prakriti) and optimize metabolic fire (Agni) by pairing timeless Indian health shastras with continuous wearable biosensors.
        </motion.p>
      </div>

      {/* Action Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="mt-10 flex flex-col sm:flex-row items-center gap-4 z-10 w-full sm:w-auto"
      >
        <button
          onClick={scrollToEnroll}
          className="w-full sm:w-auto px-9 py-4 text-sm font-semibold rounded-full bg-brand text-white hover:bg-brand/95 transition-all duration-300 shadow-xl shadow-brand/25 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 border border-white/20 relative group overflow-hidden"
        >
          <span className="absolute inset-0 bg-linear-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
          <span>Begin Your Alignment</span>
          <ArrowDown size={15} className="animate-bounce text-brand-highlight" />
        </button>
        
        <button
          onClick={onWatchVision}
          className="w-full sm:w-auto px-9 py-4 text-sm font-semibold rounded-full glass-card text-dark hover:bg-white/90 transition-all duration-300 active:scale-95 cursor-pointer flex items-center justify-center gap-2.5 border border-brand/15 shadow-md hover:shadow-lg"
        >
          <div className="w-6 h-6 rounded-full bg-brand-soft flex items-center justify-center text-brand-highlight shadow-2xs border border-brand/10">
            <Play size={11} className="fill-brand-highlight stroke-[3] translate-x-0.5" />
          </div>
          <span>Watch Our Vision Video</span>
        </button>
      </motion.div>

      {/* Interactive Tabs / Widget Section */}
      <div className="mt-16 md:mt-24 w-full max-w-5xl relative flex flex-col lg:flex-row items-center justify-between gap-12 z-10 px-4">
        {/* Tab Selectors */}
        <div className="flex flex-row lg:flex-col gap-3 justify-start lg:justify-center w-full lg:w-auto overflow-x-auto lg:overflow-visible pb-4 lg:pb-0 scrollbar-none">
          {features.map((item) => {
            const isActive = item.id === activeTab;
            return (
              <button
                key={item.id}
                onClick={() => handleSelect(item.id)}
                className={`flex items-center gap-3 px-4 py-2.5 rounded-full transition-all duration-300 text-left whitespace-nowrap cursor-pointer shrink-0 ${
                  isActive
                    ? "bg-brand text-white shadow-md shadow-brand/15 scale-105"
                    : "glass-card text-muted hover:text-dark hover:bg-white/90"
                }`}
              >
                <div className={`w-6 h-6 rounded-full flex items-center justify-center ${isActive ? "bg-white/20 text-white" : "bg-brand-soft text-brand"}`}>
                  {item.icon}
                </div>
                <span className="text-xs md:text-sm font-medium font-display">{item.label}</span>
              </button>
            );
          })}
        </div>

        {/* 3D-like Device Dial Mockup */}
        <div className="relative w-72 h-80 flex items-center justify-center animate-float-slow shrink-0">
          <div className="absolute inset-0 rounded-full border border-brand/5 scale-[1.3] animate-pulse-slow" />
          <div className="absolute inset-0 rounded-full border border-brand/10 scale-[1.1] animate-pulse" />
          
          {/* Smartphone structure */}
          <div className="w-48 h-64 bg-stone-300 rounded-[48px] p-2.5 shadow-2xl relative border border-stone-400 bg-linear-to-b from-stone-200 to-stone-400">
            {/* Screen */}
            <div className="w-full h-full rounded-[38px] bg-dark p-2 overflow-hidden flex flex-col justify-between relative shadow-inner">
              <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
              
              {/* Header inside phone */}
              <div className="flex items-center justify-between px-2 pt-1 text-[8px] font-mono text-neutral-400 z-10">
                <span>PRANA HARMONY</span>
                <motion.div
                  animate={{ opacity: [1, 0.4, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="flex items-center gap-0.5 text-brand-highlight"
                >
                  <span className="w-1 h-1 rounded-full bg-brand-highlight" />
                  <span>SYNC</span>
                </motion.div>
              </div>

              {/* Central Biometric Ring */}
              <div className="flex-1 flex flex-col items-center justify-center my-1 z-10">
                <div className="w-28 h-28 rounded-full border border-brand/20 p-1 relative flex items-center justify-center bg-dark/60 animate-glow">
                  {/* SVG progress indicator */}
                  <svg className="absolute inset-0 w-full h-full transform -rotate-90">
                    <circle cx="56" cy="56" r="50" fill="transparent" stroke="rgba(217, 119, 6, 0.1)" strokeWidth="3" />
                    <circle
                      cx="56"
                      cy="56"
                      r="50"
                      fill="transparent"
                      stroke="#d97706"
                      strokeWidth="3"
                      strokeDasharray="314"
                      strokeDashoffset="120"
                      strokeLinecap="round"
                      className="transition-all duration-1000"
                    />
                  </svg>
                  
                  {/* Core biometric telemetry stats */}
                  <div className="text-center flex flex-col items-center">
                    <motion.div
                      key={activeTab}
                      initial={{ scale: 0.8, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ duration: 0.4 }}
                      className="text-brand-highlight text-[8px] uppercase font-mono tracking-widest font-semibold"
                    >
                      {activeTab === "prakriti" ? "AGNI:BALANCED" : activeTab === "ahara" ? "AHARA_OK" : activeTab === "biosensors" ? "PRANA_SYNC" : activeTab === "nadi" ? "NADI_AI" : "OJAS_VIGOR"}
                    </motion.div>
                    
                    <motion.div
                      key={`${activeTab}-val`}
                      animate={{ scale: [1, 1.03, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-lg font-bold text-white tracking-tighter my-0.5 font-display"
                    >
                      {activeTab === "prakriti" ? "Sama Agni" : activeTab === "ahara" ? "Ojas-Meal" : activeTab === "biosensors" ? "Solar-Align" : activeTab === "nadi" ? "Vata-Vigor" : "Optimal"}
                    </motion.div>
                    
                    <div className="flex items-center gap-1 text-[8px] font-mono text-neutral-400">
                      <Heart size={8} className="text-brand-highlight fill-brand-highlight animate-pulse" />
                      <span>Sattva State</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom footer inside phone */}
              <div className="px-2 pb-1 flex justify-between items-center text-[7px] font-mono text-neutral-500 z-10 border-t border-white/5 pt-1.5">
                <span>ANCIENT SHASTRA</span>
                <span className="text-brand-highlight font-semibold">DIETCRAFT</span>
              </div>
            </div>
          </div>
        </div>

        {/* Feature Info Card with sliding animation */}
        <div className="w-full lg:w-96 min-h-[220px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="glass-card p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between h-full group border border-brand/5 shadow-xs"
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-brand-highlight" />
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono uppercase tracking-widest text-brand-highlight font-bold flex items-center gap-1">
                    <Sparkle size={10} className="animate-spin text-brand-highlight" style={{ animationDuration: "5s" }} />
                    Sacred Convergence
                  </span>
                  <div className="w-2 h-2 rounded-full bg-brand-highlight animate-ping" />
                </div>
                
                <h3 className="font-display font-semibold text-2xl text-dark mb-3">
                  {activeFeature.label}
                </h3>
                
                <p className="text-sm font-light text-muted leading-relaxed font-sans">
                  {activeFeature.description}
                </p>
              </div>

              <div className="mt-6 flex items-center justify-center p-4 bg-brand-soft/30 rounded-2xl border border-brand/5">
                {activeFeature.graphic}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Down indicator */}
      <div className="mt-12 hidden md:block z-10">
        <motion.a
          href="#how-it-works"
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-xs font-mono text-muted hover:text-brand transition-colors cursor-pointer"
        >
          <span>EXPLORE MOVEMENT</span>
          <ArrowDown size={14} className="stroke-[1.5] text-brand-highlight" />
        </motion.a>
      </div>
    </section>
  );
}
