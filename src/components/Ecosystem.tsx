import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Watch, Smartphone, Flame, Droplet, Utensils, Moon, ShieldAlert, Heart, Dumbbell, Stethoscope, Apple, Cpu, Sparkles } from "lucide-react";

interface EcosystemNode {
  id: string;
  label: string;
  category: string;
  description: string;
  detail: string;
  angle: number;
  icon: React.ReactNode;
}

export default function Ecosystem() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== "undefined" ? window.innerWidth : 1024);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Compute scale and distance dynamically to prevent horizontal overflow on mobile viewports
  let dist = 190;
  let W = 460; // diameter
  let ringSizeClass = "w-[460px] h-[460px]";
  let nodeSizeClass = "w-14 h-14";
  let centerHubSizeClass = "w-28 h-28";

  if (windowWidth < 400) {
    dist = 100;
    W = 240;
    ringSizeClass = "w-[240px] h-[240px]";
    nodeSizeClass = "w-9 h-9";
    centerHubSizeClass = "w-20 h-20";
  } else if (windowWidth < 480) {
    dist = 115;
    W = 280;
    ringSizeClass = "w-[280px] h-[280px]";
    nodeSizeClass = "w-10 h-10";
    centerHubSizeClass = "w-22 h-22";
  } else if (windowWidth < 768) {
    dist = 145;
    W = 340;
    ringSizeClass = "w-[340px] h-[340px]";
    nodeSizeClass = "w-11 h-11";
    centerHubSizeClass = "w-24 h-24";
  }

  const nodes: EcosystemNode[] = [
    {
      id: "wearables",
      label: "Prana Wearables",
      category: "Sensor Technology",
      description: "Continuously tracks physical telemetry (HRV, resting heart rate, sleep metrics) as modern indicators of your life force (Prana).",
      detail: "Syncs with Apple Watch, Garmin, and Fitbit to map cellular recovery rates and biological pacing.",
      angle: 0,
      icon: <Watch size={16} />
    },
    {
      id: "cgm",
      label: "Tejas CGM Sync",
      category: "Sensor Technology",
      description: "A continuous glucose sensor capturing active metabolic fire, thermal energy, and glucose conversion efficiency (Tejas).",
      detail: "Measures continuous glycation wave coherence to evaluate how food affect your digestive Agni.",
      angle: 30,
      icon: <Flame size={16} />
    },
    {
      id: "prakriti",
      label: "Prakriti Profile",
      category: "Indic Knowledge System",
      description: "Your constitutional template (Vata, Pitta, Kapha) mapped using traditional physical, mental, and real-time biometric metrics.",
      detail: "Establishes the base blueprint for all custom circadian timing and nutrition laws.",
      angle: 60,
      icon: <Sparkles size={16} />
    },
    {
      id: "ahara",
      label: "Ahara Nutrition",
      category: "Indic Knowledge System",
      description: "Custom recipe prescriptions combining heritage whole-grains, therapeutic spices, and herbal elixirs (Rasayanas).",
      detail: "Leverages classical food shastras to build meals that nurture tissue rejuvenation without glucose spikes.",
      angle: 90,
      icon: <Utensils size={16} />
    },
    {
      id: "agni",
      label: "Agni Calibration",
      category: "Indic Knowledge System",
      description: "Measures active digestive capacity (Agni) by combining blood biomarkers with real-time sensor glycation responses.",
      detail: "Classifies digestive power as sluggish (Manda), sharp (Tikshna), or irregular (Vishama) to time spices perfectly.",
      angle: 120,
      icon: <Droplet size={16} />
    },
    {
      id: "dinacharya",
      label: "Dinacharya Clock",
      category: "Indic Knowledge System",
      description: "Circadian lifestyle optimizer aligning daily routines (rest, exercise, fasting windows) with natural solar cycles.",
      detail: "Triggers natural cellular repair and deep sleep by matching habits with classic Ayurvedic biological clocks.",
      angle: 150,
      icon: <Moon size={16} />
    },
    {
      id: "pranayama",
      label: "Pranayama Breath",
      category: "Somatic Intervention",
      description: "Custom parasympathetic breathing exercises triggered during high adrenaline spikes or HRV drops.",
      detail: "Utilizes ancient nostril pacing patterns to instantly lower elevated cortisol and steady the heart rate.",
      angle: 180,
      icon: <ShieldAlert size={16} />
    },
    {
      id: "dhatus",
      label: "Ojas & Longevity",
      category: "Wellness Outcome",
      description: "The ultimate state of robust immunity, deep physical vitality, mental clarity, and cellular radiance (Ojas).",
      detail: "Reflects low baseline inflammation and reversed metabolic biological age across 48 clinical markers.",
      angle: 210,
      icon: <Heart size={16} />
    },
    {
      id: "ritucharya",
      label: "Ritucharya Sync",
      category: "Indic Knowledge System",
      description: "Seasonal adjustments shifting dietetics and somatic practices as the atmospheric climate transitions.",
      detail: "Mitigates external heat (Pitta), humidity (Kapha), or cold dryness (Vata) on your physiology.",
      angle: 240,
      icon: <Dumbbell size={16} />
    },
    {
      id: "shastra_ai",
      label: "AI Shastra Engine",
      category: "Core Intelligence",
      description: "Our proprietary AI system running deep-learning synthesis on classical wellness texts combined with wearable telemetry.",
      detail: "Translates ancient Sanskrit preventative shastras into immediate digital biological guidance.",
      angle: 270,
      icon: <Cpu size={16} />
    },
    {
      id: "acharyas",
      label: "IKS Acharyas",
      category: "Clinical Network",
      description: "Traditional health coaches, Ayurvedic physicians, and lifestyle experts providing personalized somatic guidance.",
      detail: "One-on-one virtual coaching to keep your body perfectly aligned and reverse metabolic symptoms.",
      angle: 300,
      icon: <Apple size={16} />
    },
    {
      id: "integrative",
      label: "Integrative Doctors",
      category: "Clinical Network",
      description: "Fuses traditional Ayurvedic wisdom with modern endocrinologists for comprehensive wellness oversight.",
      detail: "Direct consultation integration for clinical intervention cases, combining lab tests with traditional diagnostics.",
      angle: 330,
      icon: <Cpu size={16} />
    }
  ];

  const activeNode = nodes.find((d) => d.id === hoveredId);

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative z-10 overflow-hidden" id="ecosystem">
      {/* Background Soft Glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-brand-soft/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">Unmatched Convergence</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-dark mt-3 tracking-tight">
            The Interactive Prana Ecosystem
          </h2>
          <p className="mt-4 text-muted text-base font-light leading-relaxed font-sans">
            Dietcraft syncs ancient biological models with real-time digital feeds, converging biometric, somatic, and classical shastra data in a single wellness stream.
          </p>
        </div>

        {/* Core Map & Description Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Circular Interactive Map (Polar Layout) */}
          <div className="lg:col-span-7 flex items-center justify-center min-h-[360px] sm:min-h-[480px] md:min-h-[560px]">
            <div className={`relative ${ringSizeClass} rounded-full border border-brand/5 flex items-center justify-center transition-all duration-300`}>
              
              {/* Outer decorative spinning ring */}
              <div
                className="absolute w-[80%] h-[80%] rounded-full border border-dashed border-brand/10 animate-spin"
                style={{ animationDuration: "60s" }}
              />
              
              {/* Inner accent ring */}
              <div className="absolute w-[50%] h-[50%] rounded-full border border-brand/5" />

              {/* Data streams (laser lines from center to nodes) */}
              {hoveredId && (
                <svg className="absolute inset-0 w-full h-full pointer-events-none">
                  {nodes.map((node) => {
                    if (node.id !== hoveredId) return null;
                    const rad = (node.angle * Math.PI) / 180;
                    // Scale coordinates according to exact current ring size to align perfectly
                    const x = 50 + Math.cos(rad) * (dist / W) * 100;
                    const y = 50 + Math.sin(rad) * (dist / W) * 100;
                    
                    return (
                      <motion.line
                        key={node.id}
                        x1="50%"
                        y1="50%"
                        x2={`${x}%`}
                        y2={`${y}%`}
                        stroke="#0E7A67"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                        initial={{ strokeDashoffset: 100 }}
                        animate={{ strokeDashoffset: 0 }}
                        transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
                      />
                    );
                  })}
                </svg>
              )}

              {/* Central COMMAND HUB */}
              <div className={`z-20 ${centerHubSizeClass} rounded-full bg-linear-to-b from-brand to-brand/80 text-white flex flex-col items-center justify-center shadow-lg shadow-brand/20 relative cursor-pointer select-none transition-all duration-300`} onClick={() => setHoveredId(null)}>
                <div className="absolute inset-0 rounded-full bg-brand/20 animate-ping" />
                <span className="text-[8px] md:text-[10px] font-mono tracking-widest text-brand-soft uppercase scale-90 sm:scale-100">Command</span>
                <span className="font-display font-bold text-sm sm:text-lg tracking-tight">YOU</span>
                <span className="text-[7px] md:text-[9px] font-mono text-brand-highlight/80 uppercase mt-0.5 sm:mt-1 animate-pulse scale-90 sm:scale-100">OPTIMIZED</span>
              </div>

              {/* Nodes Placed Polar Angle Coordinates */}
              {nodes.map((node) => {
                const isActive = hoveredId === node.id;
                const rad = (node.angle * Math.PI) / 180;
                const tx = Math.cos(rad) * dist;
                const ty = Math.sin(rad) * dist;

                return (
                  <button
                    key={node.id}
                    onMouseEnter={() => setHoveredId(node.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onClick={() => setHoveredId(isActive ? null : node.id)}
                    style={{ transform: `translate(${tx}px, ${ty}px)` }}
                    className={`absolute ${nodeSizeClass} rounded-full flex items-center justify-center transition-all duration-300 z-30 cursor-pointer ${
                      isActive
                        ? "bg-brand text-white scale-125 shadow-lg shadow-brand/25 z-40 border-2 border-brand-highlight"
                        : "glass-card text-brand hover:bg-brand-soft/20 shadow-md border border-brand/10"
                    }`}
                  >
                    {node.icon}
                    <span className="absolute -bottom-5 left-1/2 -translate-x-1/2 text-[9px] font-mono font-semibold opacity-0 group-hover:opacity-100 bg-dark text-white px-1.5 py-0.5 rounded pointer-events-none transition-opacity whitespace-nowrap">
                      {node.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Description Detail Panel */}
          <div className="lg:col-span-5 h-full flex flex-col justify-center">
            <div className="glass-card p-8 rounded-3xl min-h-[280px] flex flex-col justify-between border border-brand/5 relative overflow-hidden bg-white/70">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-brand" />
              <AnimatePresence mode="wait">
                {activeNode ? (
                  <motion.div
                    key={activeNode.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-brand font-semibold">
                      <span>Stream Active</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-ping" />
                    </div>
                    <div>
                      <h4 className="text-2xl font-display font-semibold text-dark">{activeNode.label}</h4>
                      <p className="text-xs font-mono text-muted uppercase tracking-wider mt-1">{activeNode.category}</p>
                    </div>
                    <p className="text-sm text-muted font-light leading-relaxed">{activeNode.description}</p>
                    <div className="text-xs text-dark font-mono bg-brand-soft/20 p-3 rounded-xl border border-brand/5 leading-relaxed">
                      <span className="font-semibold text-brand">Real-time metric payload:</span> {activeNode.detail}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="idle"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4 flex flex-col justify-center items-center text-center h-full py-12"
                  >
                    <div className="w-12 h-12 rounded-full bg-brand-soft flex items-center justify-center text-brand animate-bounce">
                      <Sparkles size={20} />
                    </div>
                    <div>
                      <h4 className="text-lg font-display font-semibold text-dark">Interactive Core Map</h4>
                      <p className="text-xs text-muted mt-1 max-w-xs font-light leading-relaxed">
                        Hover over any biometric or clinical node to visualize the data pipeline flowing into your personalized profile.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
