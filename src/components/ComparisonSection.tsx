import { motion } from "motion/react";
import { X, Check } from "lucide-react";

interface ComparisonFeature {
  id: string;
  name: string;
  ordinaryDesc: string;
  dietCraftDesc: string;
}

export default function ComparisonSection() {
  const features: ComparisonFeature[] = [
    {
      id: "step-prediction",
      name: "Core Philosophy",
      ordinaryDesc: "Treats health as dry calorie tracking or reactive disease management after symptoms manifest.",
      dietCraftDesc: "A complete wellness solution provider, restoring cellular balance by harmonizing Prakriti and Agni."
    },
    {
      id: "counting-intelligence",
      name: "Nutrition Shastras",
      ordinaryDesc: "Implements generic calorie deficits and processed low-fat templates that chokes metabolic fire.",
      dietCraftDesc: "Customized Ayurvedic Ahara Science leveraging medicinal recipes, compatible spices, and heritage grains."
    },
    {
      id: "sleep-nutrition",
      name: "Circadian Rhythm",
      ordinaryDesc: "Disregards internal biological clocks, advising workouts and meals at arbitrary mechanical hours.",
      dietCraftDesc: "Aligns habits with traditional Dinacharya patterns, timing inputs with natural solar & somatic periods."
    },
    {
      id: "weight-coach",
      name: "Daily Companion",
      ordinaryDesc: "Static alerts, dry step logs, or basic notification banners that ignore subjective exhaustion.",
      dietCraftDesc: "A 24/7 metabolic AI companion with expert IKS Acharyas translating sensor feeds into restorative routines."
    },
    {
      id: "markers",
      name: "Biomarker Science",
      ordinaryDesc: "Relies on generic guidelines, treating deep biochemical markers as separate from fitness tracking.",
      dietCraftDesc: "Fuses clinical laboratory biomarker tests (fasting insulin, liver, lipids) with continuous daily wearables."
    },
    {
      id: "hardware-intelligence",
      name: "Somatic Feedback",
      ordinaryDesc: "Basic calorie counts with no understanding of nervous strain, adrenal load, or physical depletion.",
      dietCraftDesc: "Converts continuous glucose streams and heart-rate variability (Prana) into metabolic age models."
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-bg-base relative z-10 overflow-hidden" id="why-dietcraft">
      {/* Ambient background glow */}
      <div className="absolute top-[30%] right-0 w-80 h-80 bg-brand-soft/10 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">The Upgrade</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-dark mt-3 tracking-tight">
            Symptom Control vs. True Harmony
          </h2>
          <p className="mt-4 text-muted text-base font-light leading-relaxed font-sans">
            Experience the profound difference of a wellness platform rooted in Indian Knowledge Systems and supercharged by real-time biosensor intelligence.
          </p>
        </div>

        {/* Comparison Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Ordinary Fitness Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-dark border-b border-brand/5 pb-3">
              Ordinary Calorie Tracking &amp; Apps
            </h3>
            
            <div className="space-y-4">
              {features.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 bg-white border border-rose-100 rounded-2xl flex gap-4 items-start shadow-xs hover:shadow-md transition-all"
                >
                  <div className="w-8 h-8 rounded-full bg-rose-50 border border-rose-100 flex items-center justify-center text-rose-500 shrink-0">
                    <X size={16} />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark">{item.name}</h4>
                    <p className="text-xs text-muted font-light leading-relaxed mt-1">{item.ordinaryDesc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Dietcraft Column */}
          <div className="space-y-6">
            <h3 className="text-lg font-display font-bold text-brand border-b border-brand/10 pb-3 flex items-center gap-2">
              <span>Dietcraft Precision Loop</span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-soft text-brand font-bold tracking-wider">RECOMMENDED</span>
            </h3>

            <div className="space-y-4">
              {features.map((item, idx) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-5 bg-white border-2 border-brand/20 rounded-2xl flex gap-4 items-start shadow-md hover:shadow-xl transition-all relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 bg-brand/[0.02] rounded-bl-full pointer-events-none" />
                  <div className="w-8 h-8 rounded-full bg-brand-soft border border-brand/10 flex items-center justify-center text-brand shrink-0">
                    <Check size={16} className="stroke-[2.5]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-dark flex items-center gap-2">
                      <span>{item.name}</span>
                    </h4>
                    <p className="text-xs text-brand font-light leading-relaxed mt-1">{item.dietCraftDesc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
