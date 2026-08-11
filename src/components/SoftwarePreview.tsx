import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Apple as AppleIcon, Send, Sparkles, User, Award, Smartphone, Watch, Trophy, Heart, Activity } from "lucide-react";

interface TabItem {
  id: string;
  name: string;
  title: string;
  sub: string;
  badge: string;
  ui: React.ReactNode;
}

export default function SoftwarePreview() {
  const [activeTab, setActiveTab] = useState<string>("dashboard");

  const tabs: TabItem[] = [
    {
      id: "dashboard",
      name: "Prana & Tejas Hub",
      title: "Dynamic Biometric Command",
      sub: "A continuous, bird-eye evaluation of your complete metabolic state, metabolic age, and cellular vitality (Ojas) levels.",
      badge: "PRANA DASHBOARD",
      ui: (
        <div className="space-y-4 text-white">
          <div className="flex items-center justify-between border-b border-white/10 pb-3">
            <div>
              <span className="text-[10px] font-mono text-neutral-400">METABOLIC AGE</span>
              <p className="text-2xl font-bold text-white font-display flex items-baseline gap-1.5 mt-0.5">
                24.2 <span className="text-brand-highlight text-xs font-semibold font-sans">-6.8 yrs</span>
              </p>
            </div>
            <div className="text-right">
              <span className="text-[10px] font-mono text-neutral-400">SATTVA BALANCE</span>
              <p className="text-lg font-semibold text-brand-highlight">98.4%</p>
            </div>
          </div>
          <div className="p-3 bg-white/5 rounded-2xl border border-white/5">
            <div className="flex justify-between items-center text-[9px] font-mono text-neutral-400 mb-2">
              <span>AGNI COEFF (SAMA STATUS)</span>
              <span>102 mg/dL</span>
            </div>
            <svg viewBox="0 0 100 30" className="w-full h-12 stroke-[1.5] text-brand-highlight" fill="none">
              <path d="M0 15 Q25 5 50 15 T100 15" stroke="rgba(255, 255, 255, 0.2)" strokeDasharray="2 2" />
              <path d="M0 18 Q20 10 40 22 T80 12 T100 18" className="animate-pulse" stroke="currentColor" />
            </svg>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
              <span className="text-[8px] font-mono text-neutral-400">PRANA CAP (VO2)</span>
              <p className="text-sm font-bold text-white mt-0.5">54 ml/kg</p>
            </div>
            <div className="p-3 bg-white/5 rounded-xl text-center border border-white/5">
              <span className="text-[8px] font-mono text-neutral-400">OJAS VIGOR</span>
              <p className="text-sm font-bold text-brand-highlight mt-0.5">OPTIMAL</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "meals",
      name: "Ahara Science",
      title: "IKS Spice & Food Alchemy",
      sub: "Heritage whole-food recipes based on classical food pairing shastras, scientifically formulated by AI to stabilize blood glucose and fuel Agni.",
      badge: "AHARA PRESCRIPTIONS",
      ui: (
        <div className="space-y-4 text-white">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-brand-soft/10 border border-brand/20 flex items-center justify-center text-brand-highlight">
              <AppleIcon size={20} />
            </div>
            <div>
              <span className="text-[8px] font-mono text-neutral-400">SUTRA RECOMMENDATION</span>
              <h5 className="text-sm font-semibold text-white">Mung Khichdi &amp; Moringa</h5>
            </div>
          </div>
          <div className="p-3 bg-white/5 rounded-xl space-y-2 border border-white/5">
            <div className="flex justify-between text-xs">
              <span className="text-neutral-400 font-light">Agni Balancing State</span>
              <span className="font-mono text-brand-highlight font-semibold">Sama (Optimal)</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
              <div className="bg-brand-highlight h-full w-[15%]" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-1.5">
            <div className="p-2 bg-white/5 rounded-lg text-center text-[10px]">
              <span className="text-neutral-400 block font-mono text-[8px]">PRO</span>
              <span className="font-bold text-white">32g</span>
            </div>
            <div className="p-2 bg-white/5 rounded-lg text-center text-[10px]">
              <span className="text-neutral-400 block font-mono text-[8px]">FAT</span>
              <span className="font-bold text-white">22g</span>
            </div>
            <div className="p-2 bg-white/5 rounded-lg text-center text-[10px]">
              <span className="text-neutral-400 block font-mono text-[8px]">CARB</span>
              <span className="font-bold text-brand-highlight">12g</span>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "coach",
      name: "AI Shastra",
      title: "Your 24/7 Shastra AI",
      sub: "Our continuous conversational intelligence converting wearable telemetry into traditional daily habits (Dinacharya) and pulse indicators.",
      badge: "AI SHASTRA COMPANION",
      ui: (
        <div className="space-y-3.5 text-white">
          <div className="flex items-center gap-2 border-b border-white/10 pb-2">
            <div className="w-2.5 h-2.5 rounded-full bg-brand-highlight animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-neutral-300 uppercase">Shastra Core Online</span>
          </div>
          <div className="space-y-2 max-h-[140px] overflow-y-auto pr-1">
            <div className="bg-white/10 rounded-2xl rounded-tl-xs p-3 text-xs leading-relaxed max-w-[90%] border border-white/5">
              <p className="text-brand-highlight font-semibold font-mono text-[9px] mb-0.5">AI_SHASTRA</p>
              I detected elevated Vata (stress) from your heart-rate variability. Let&apos;s add a pinch of cardamom to your tea and practice 3 minutes of Nadi Shodhana breathing.
            </div>
            <div className="bg-brand/40 rounded-2xl rounded-tr-xs p-3 text-xs leading-relaxed max-w-[90%] self-end ml-auto border border-white/10">
              <p className="text-neutral-300 font-mono text-[9px] mb-0.5">USER_BIOMETRIC</p>
              Understood. Practiced now. Stress index down.
            </div>
          </div>
          <div className="flex gap-2 items-center bg-white/5 p-2 rounded-xl border border-white/5">
            <div className="flex-1 text-[10px] text-neutral-400 font-light pl-1">Ask anything about your biology...</div>
            <button className="w-6 h-6 rounded-lg bg-brand-highlight text-dark flex items-center justify-center cursor-pointer hover:bg-brand-highlight/90 transition-colors">
              <Send size={10} className="stroke-[2.5]" />
            </button>
          </div>
        </div>
      )
    },
    {
      id: "timeline",
      name: "Dinacharya Clock",
      title: "Circadian Health Lifeline",
      sub: "Track your cellular rejuvenation and biological rhythm progression, structured around Ayurvedic circadian and solar transition periods.",
      badge: "CIRCADIAN LIFELINE",
      ui: (
        <div className="space-y-3 text-white">
          <div className="text-[10px] font-mono text-neutral-400">CIRCADIAN PATTERN HISTORY</div>
          <div className="space-y-2.5 border-l border-white/15 pl-4 ml-2">
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-brand-highlight border-2 border-dark" />
              <p className="text-[9px] font-mono text-brand-highlight font-semibold">GRISHMA SEASON — CURRENT</p>
              <h6 className="text-xs font-semibold text-white">Sama Agni Balance Restored</h6>
              <p className="text-[10px] text-neutral-400 font-light leading-relaxed">Fasting insulin and metabolic fire stabilized. Evening spikes eliminated.</p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white/30 border-2 border-dark" />
              <p className="text-[9px] font-mono text-neutral-400">SPRING TRANSITION</p>
              <h6 className="text-xs font-semibold text-neutral-300">Prana &amp; Vata Calmed</h6>
              <p className="text-[10px] text-neutral-400 font-light leading-relaxed">Daytime cortisol peaks eliminated. Sleep depth and nighttime HRV improved by 14%.</p>
            </div>
          </div>
        </div>
      )
    },
    {
      id: "doctor",
      name: "IKS Acharyas",
      title: "Traditional & Clinical Expert Sync",
      sub: "Secure, expert integration with traditional Ayurvedic Vaidyas and modern endocrinologists to supervise your custom metabolic path.",
      badge: "INTEGRATIVE EXPERT PANEL",
      ui: (
        <div className="space-y-4 text-white">
          <div className="p-3 bg-white/5 rounded-2xl border border-white/5 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-neutral-700 overflow-hidden relative border border-white/10 flex items-center justify-center">
              <User size={22} className="text-brand-highlight" />
              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-dark" />
            </div>
            <div>
              <h5 className="text-xs font-semibold text-white">Vaidya Priya Sharma</h5>
              <p className="text-[9px] font-mono text-neutral-400">IKS HOLISTIC VAIDYA</p>
              <span className="text-[10px] text-brand-highlight font-medium mt-0.5 inline-block">Active Expert Supervisor</span>
            </div>
          </div>
          <div className="p-3 bg-brand/30 border border-brand/20 rounded-xl">
            <p className="text-[10px] font-mono text-brand-highlight font-semibold">VAIDYA LATEST SIGNOFF</p>
            <p className="text-xs text-neutral-200 font-light mt-1 leading-relaxed">
              &quot;Your metabolic fire (Agni) is steady. Recommending cooling Pitta-pacifying foods like moringa and organic ghee to sustain digestive energy.&quot;
            </p>
          </div>
        </div>
      )
    },
    {
      id: "progress",
      name: "Vitality Index",
      title: "Actionable Ojas Tracking",
      sub: "Monitor systemic biomarkers, active progress logs, and metric visualizers showing metabolic disease reversal stats in high resolution.",
      badge: "METRICS VISUALIZER",
      ui: (
        <div className="space-y-4 text-white">
          <div className="text-[10px] font-mono text-neutral-400">METABOLIC OJAS INTEGRATION</div>
          <div className="grid grid-cols-2 gap-3">
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="text-[9px] font-mono text-neutral-400 block">SAMA AGNI SYNC</span>
              <span className="text-xl font-bold text-brand-highlight mt-1 inline-block">-21.4%</span>
            </div>
            <div className="p-3 bg-white/5 rounded-xl border border-white/5 text-center">
              <span className="text-[9px] font-mono text-neutral-400 block">VITALITY SCORE</span>
              <span className="text-xl font-bold text-white mt-1 inline-block">92/100</span>
            </div>
          </div>
          <div className="p-3 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Award size={16} className="text-brand-highlight" />
              <span className="text-xs font-semibold">Sattvic Streak</span>
            </div>
            <span className="text-xs font-mono font-bold text-brand-highlight">28 DAYS GOLD</span>
          </div>
        </div>
      )
    },
    {
      id: "wearables",
      name: "Wearables",
      title: "Active Hardware Ecosystem",
      sub: "Pair all major wearables including Garmin, Fitbit, Google Fit, and Apple Health. Continuous hardware syncing keeps metrics accurate.",
      badge: "HARDWARE PAIRING",
      ui: (
        <div className="space-y-3.5 text-white">
          <div className="text-[10px] font-mono text-neutral-400">CONNECTED VITAL CHANNELS</div>
          <div className="space-y-2">
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight animate-pulse" />
                <span className="text-xs">Apple Watch Ultra 2</span>
              </div>
              <span className="text-[9px] font-mono text-brand-highlight">CONNECTED</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-highlight animate-pulse" />
                <span className="text-xs">Garmin Forerunner 965</span>
              </div>
              <span className="text-[9px] font-mono text-brand-highlight">CONNECTED</span>
            </div>
            <div className="p-2.5 bg-white/5 rounded-xl border border-white/5 flex items-center justify-between opacity-50">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-neutral-500" />
                <span className="text-xs">Fitbit Charge 6</span>
              </div>
              <span className="text-[9px] font-mono text-neutral-400">DISCONNECTED</span>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentTab = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-base relative z-10 overflow-hidden" id="app-preview">
      {/* Background radial soft light */}
      <div className="absolute top-[30%] right-[-10%] w-[450px] h-[450px] bg-brand-soft/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">AI Ahara Companion</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-dark mt-3 tracking-tight">
            The Dietcraft Mobile Interface
          </h2>
          <p className="mt-4 text-muted text-base font-light leading-relaxed font-sans">
            Take a look inside your wellness portal, where classical biological wisdom meets continuous sensor telemetry.
          </p>
        </div>

        {/* Outer Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Tab lists (Left column on desktop, horizontal scroll on mobile) */}
          <div className="lg:col-span-5 flex flex-row lg:flex-col gap-2.5 overflow-x-auto lg:overflow-visible pb-3 lg:pb-0 scrollbar-none -mx-6 px-6 lg:mx-0 lg:px-0 w-full lg:w-auto">
            {tabs.map((tab) => {
              const isActive = tab.id === activeTab;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`p-3.5 lg:p-4.5 rounded-2xl border text-left cursor-pointer transition-all duration-300 flex items-center justify-between shrink-0 lg:shrink whitespace-nowrap lg:whitespace-normal ${
                    isActive
                      ? "bg-white border-brand/20 shadow-xl shadow-brand/10 scale-[1.01] lg:scale-[1.02] border-l-4 border-l-brand"
                      : "bg-transparent border-transparent text-muted hover:text-dark hover:bg-white/60"
                  }`}
                >
                  <div>
                    <h4 className="font-display font-semibold text-xs sm:text-sm lg:text-base text-dark flex items-center gap-2">
                      <span>{tab.name}</span>
                    </h4>
                    <p className="hidden lg:block text-xs text-muted font-light mt-0.5 line-clamp-1">{tab.title}</p>
                  </div>
                  {isActive && (
                    <span className="hidden lg:block w-2 h-2 rounded-full bg-brand-highlight animate-pulse shadow-xs" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Software Preview Panel (Right column with responsive device frame mockup) */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-center gap-8 lg:gap-10 bg-white/90 backdrop-blur-md rounded-3xl p-6 sm:p-8 md:p-12 border border-brand/10 shadow-xl shadow-brand/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-soft/50 rounded-bl-full pointer-events-none" />

            {/* Left side description */}
            <div className="flex-1 space-y-4 text-left z-10">
              <span className="text-[10px] font-mono font-bold text-brand uppercase tracking-widest bg-brand-soft px-3 py-1.5 rounded-full border border-brand/10 inline-flex items-center gap-1.5 shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-highlight animate-ping" />
                <span>{currentTab.badge}</span>
              </span>
              <h3 className="text-xl sm:text-2xl font-display font-bold text-dark mt-2">
                {currentTab.title}
              </h3>
              <p className="text-xs sm:text-sm font-light text-muted leading-relaxed font-sans">
                {currentTab.sub}
              </p>
              <div className="pt-2">
                <a
                  href="#waitlist-anchor"
                  className="inline-flex items-center gap-1.5 text-xs font-mono font-bold text-brand hover:text-brand-highlight border-b-2 border-brand/30 hover:border-brand-highlight pb-0.5 transition-colors"
                >
                  <span>PRE-REGISTER NOW</span>
                  <Sparkles size={11} className="text-brand-highlight" />
                </a>
              </div>
            </div>

            {/* Smart Phone Simulator Wrapper */}
            <div className="w-64 h-[360px] sm:w-72 sm:h-[400px] bg-stone-900 rounded-[44px] p-2.5 relative border-2 border-stone-700 shadow-2xl shadow-stone-900/50 shrink-0 animate-float-medium z-10">
              {/* Outer Subtle Phone Glow */}
              <div className="absolute -inset-1 rounded-[46px] bg-gradient-to-b from-brand/20 via-brand-highlight/10 to-transparent blur-md pointer-events-none" />

              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-5 bg-stone-900 rounded-b-2xl z-20 flex items-center justify-center border-b border-stone-800">
                {/* Camera punch hole and speaker mockup */}
                <div className="w-2.5 h-2.5 rounded-full bg-neutral-800 border border-neutral-700" />
                <div className="w-10 h-1 bg-neutral-800 rounded-full ml-3" />
              </div>
              
              {/* Inner Smartphone Screen */}
              <div className="w-full h-full rounded-[36px] bg-dark p-4 overflow-hidden flex flex-col justify-between relative shadow-inner border border-stone-800">
                {/* Simulated Glow Overlay */}
                <div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
                
                {/* App Internal Header */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 text-[9px] font-mono text-neutral-400 z-10">
                  <div className="flex items-center gap-1">
                    <Smartphone size={10} className="text-brand-highlight" />
                    <span className="font-bold text-neutral-300">DIETCRAFT v1.0</span>
                  </div>
                  <span className="text-neutral-500">9:41 AM</span>
                </div>

                {/* Main Dynamic Simulated content of the active Tab */}
                <div className="flex-1 flex flex-col justify-center py-2 z-10">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentTab.id}
                      initial={{ opacity: 0, scale: 0.98 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.98 }}
                      transition={{ duration: 0.3 }}
                      className="w-full"
                    >
                      {currentTab.ui}
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Mock Phone Navigation Indicator */}
                <div className="w-24 h-1 bg-white/25 rounded-full mx-auto z-10" />
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
