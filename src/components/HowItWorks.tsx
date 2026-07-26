import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Watch, Heart, FileText, Cpu, UserCheck, Eye, Compass, Trophy, ArrowLeft, ArrowRight, Flame, Utensils } from "lucide-react";

interface Stage {
  id: number;
  label: string;
  title: string;
  description: string;
  details: string;
  icon: React.ReactNode;
  color: string;
  metric: string;
  graphic: React.ReactNode;
}

export default function HowItWorks() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const stages: Stage[] = [
    {
      id: 0,
      label: "Prakriti Typing",
      title: "Ayurvedic Bio-Constitutional Analysis",
      description: "Complete a deep classical assessment of your biological tendencies (Vata, Pitta, Kapha) to establish your baseline Prakriti (nature) and active Vikriti (imbalances).",
      details: "Feeds our neural models with traditional somatic profiles to form the root of all food and lifestyle rules.",
      icon: <Cpu size={20} className="text-brand-highlight" />,
      color: "bg-brand",
      metric: "Tri-Dosha Map",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand animate-pulse mb-3">
            <Cpu size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            VATA - PITTA - KAPHA BASES
          </span>
        </div>
      )
    },
    {
      id: 1,
      label: "Nadi Wearable Sync",
      title: "Continuous Biosensor Integration",
      description: "Link your modern wearable health devices (smartwatch, glucose monitor). We read heart rate variability and blood glucose fluctuations as modern manifestations of your vital energy (Prana).",
      details: "Pairs raw digital signal streams with timeless biological clocks for real-time monitoring.",
      icon: <Watch size={20} className="text-brand-highlight" />,
      color: "bg-accent",
      metric: "Live Pulse Sync",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent animate-bounce mb-3">
            <Watch size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            CONTINUOUS BIOMETRIC INTAKE
          </span>
        </div>
      )
    },
    {
      id: 2,
      label: "Agni Calibration",
      title: "Measuring Your Metabolic Fire",
      description: "By matching blood markers (HbA1c, fasting lipids) with real-time glycation waves, our engine determines your exact metabolic digestive power (Agni).",
      details: "Identifies whether your digestive state is sluggish (Manda), sharp (Tikshna), or irregular (Vishama).",
      icon: <Flame size={20} className="text-brand-highlight" />,
      color: "bg-brand",
      metric: "4 Metabolic States",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand-highlight mb-3">
            <Flame size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            DIGESTIVE FIRE STRENGTH SCORE
          </span>
        </div>
      )
    },
    {
      id: 3,
      label: "Circadian Alignment",
      title: "Dinacharya & Solar Cycles",
      description: "Time your workouts, rest cycles, and meals with solar patterns and chronotype profiles, triggering natural parasympathetic rest and recovery.",
      details: "Aligns cellular rejuvenation with ancient Indian Ayurvedic daily rhythms (Dinacharya).",
      icon: <Heart size={20} className="text-brand-highlight" />,
      color: "bg-brand",
      metric: "Solar-Circadian Aligned",
      graphic: (
        <div className="relative w-24 h-24 flex items-center justify-center mb-2">
          <div className="absolute inset-0 rounded-full border border-brand border-dashed animate-spin" style={{ animationDuration: "10s" }} />
          <Heart size={32} className="text-brand animate-pulse" />
        </div>
      )
    },
    {
      id: 4,
      label: "Ahara Science",
      title: "Ayurvedic Food Alchemy",
      description: "Receive recipe blueprints incorporating traditional Indian whole-foods, customized spices, and herbal formulations (Rasayanas) matched to your active glucose curves.",
      details: "Optimizes digestion using specific food-pairing rules (Samyoga) to avoid incompatible meals (Viruddha Ahara).",
      icon: <Utensils size={20} className="text-brand-highlight" />,
      color: "bg-accent",
      metric: "Medicinal Recipes",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
            <Utensils size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            DIGESTIVE SPARK & FORMULATION
          </span>
        </div>
      )
    },
    {
      id: 5,
      label: "AI Shastra Synthesis",
      title: "Indic Wisdom & Neural Models",
      description: "Our proprietary AI Shastra engine runs multi-parametric checks, blending thousands of Sanskrit wellness text records with deep-learning glucose response predictions.",
      details: "The world's first software module translating ancient health sutras into contemporary digital bio-insights.",
      icon: <Eye size={20} className="text-brand-highlight" />,
      color: "bg-brand",
      metric: "99.4% Wisdom Sync",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-3 animate-ping" style={{ animationDuration: "3s" }}>
            <Eye size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            SUTRA TO SENSOR TRANSLATOR
          </span>
        </div>
      )
    },
    {
      id: 6,
      label: "Ritucharya (Seasons)",
      title: "Dynamic Seasonal Adjustments",
      description: "As seasons change across South Asia, your nutrition framework alters. We adjust spices and whole food combinations to buffer external atmospheric stresses.",
      details: "Ensures your body balances heat (Pitta) in summer and dryness (Vata) in autumn automatically.",
      icon: <Compass size={20} className="text-brand-highlight" />,
      color: "bg-accent",
      metric: "Seasonal Shifts",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-3">
            <Compass size={28} />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            RITUCHARYA ROTATION ALGORITHM
          </span>
        </div>
      )
    },
    {
      id: 7,
      label: "Radiant Ojas",
      title: "Holistic Wellness & Longevity",
      description: "Experience the state of supreme vigor, strong immunity, clear digestion, and deep emotional balance (Sattva).",
      details: "Fades chronic fatigue, reverses metabolic blockages, and cultivates lasting holistic vitality.",
      icon: <Trophy size={20} className="text-brand-highlight" />,
      color: "bg-brand",
      metric: "Radiant Vitality",
      graphic: (
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand mb-3">
            <Trophy size={28} className="animate-pulse text-brand-highlight" />
          </div>
          <span className="text-[10px] font-mono text-muted uppercase tracking-wider text-center font-semibold">
            HOLISTIC OJAS REACHED
          </span>
        </div>
      )
    }
  ];

  const handleNext = () => {
    setActiveStage((prev) => (prev + 1) % stages.length);
  };

  const handlePrev = () => {
    setActiveStage((prev) => (prev - 1 + stages.length) % stages.length);
  };

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-base relative z-10 overflow-hidden" id="how-it-works">
      {/* Glow ambient circle */}
      <div className="absolute top-[40%] left-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">The Wellness Synthesis</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-dark mt-3 tracking-tight">
            How Dietcraft Works
          </h2>
          <p className="mt-4 text-muted text-base font-light leading-relaxed font-sans">
            We provide a comprehensive wellness solution. Dietcraft translates continuous physiological feeds into ancient, time-tested health frameworks.
          </p>
        </div>

        {/* Scrollable Horizontal Stage Menu */}
        <div className="flex flex-row items-center justify-start lg:justify-between mb-8 overflow-x-auto pb-3 scrollbar-none gap-4 lg:gap-2 px-6 lg:px-1 -mx-6 lg:mx-0">
          {stages.map((stage) => {
            const isActive = stage.id === activeStage;
            return (
              <button
                key={stage.id}
                onClick={() => setActiveStage(stage.id)}
                className={`flex-1 min-w-[130px] lg:min-w-0 text-center pb-3 border-b-2 transition-all duration-300 cursor-pointer shrink-0 ${
                  isActive
                    ? "border-brand text-brand font-medium"
                    : "border-brand/10 text-muted hover:text-dark hover:border-brand/30"
                }`}
              >
                <div className="text-xs font-mono mb-1">STAGE 0{stage.id + 1}</div>
                <div className="text-sm truncate">{stage.label}</div>
              </button>
            );
          })}
        </div>

        {/* Progress Timeline Indicator Bar (Hidden on Mobile) */}
        <div className="relative w-full h-1 bg-brand/10 rounded-full mb-12 hidden md:block">
          <motion.div
            className="absolute top-0 bottom-0 left-0 bg-brand rounded-full"
            animate={{ width: `${((activeStage + 1) / stages.length) * 100}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute top-1/2 -mt-1.5 w-3 h-3 rounded-full bg-accent shadow-sm"
            animate={{ left: `${(activeStage / (stages.length - 1)) * 98}%` }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
        </div>

        {/* Dynamic Stage Viewer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Description Block */}
          <div className="lg:col-span-7 space-y-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 15 }}
                transition={{ duration: 0.4 }}
                className="space-y-4"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold">
                  <span>STAGE 0{stages[activeStage].id + 1} OF 08</span>
                </div>
                
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-dark">
                  {stages[activeStage].title}
                </h3>
                
                <p className="text-base text-muted font-light leading-relaxed">
                  {stages[activeStage].description}
                </p>
                
                <div className="text-sm text-dark font-mono bg-white p-4 rounded-xl border border-brand/5 shadow-sm leading-relaxed">
                  <span className="font-semibold text-brand">Deep Tech Note:</span>{" "}
                  {stages[activeStage].details}
                </div>

                {/* Sub-metrics inside Stage description */}
                <div className="flex items-center gap-6 pt-2">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">Engine Status</span>
                    <span className="text-sm font-semibold text-brand flex items-center gap-1.5 mt-0.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
                      <span>LIVE TELEMETRY</span>
                    </span>
                  </div>
                  
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-muted uppercase">Stage Indicator</span>
                    <span className="text-sm font-semibold text-dark mt-0.5">
                      {stages[activeStage].metric}
                    </span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Timeline Arrow Controls */}
            <div className="flex items-center gap-3 pt-6 border-t border-brand/5">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-full border border-brand/10 hover:border-brand/30 flex items-center justify-center text-muted hover:text-brand bg-white hover:shadow-sm cursor-pointer transition-all active:scale-95"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-full border border-brand/10 hover:border-brand/30 flex items-center justify-center text-muted hover:text-brand bg-white hover:shadow-sm cursor-pointer transition-all active:scale-95"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>

          {/* Interactive Vector Graphic Block */}
          <div className="lg:col-span-5 flex items-center justify-center bg-white rounded-3xl p-10 border border-brand/5 shadow-sm h-64 lg:h-80 relative overflow-hidden">
            <div className="absolute top-3 right-3 text-[9px] font-mono text-neutral-300">
              SYS_VIS_CORE
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStage}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="flex items-center justify-center"
              >
                {stages[activeStage].graphic}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
