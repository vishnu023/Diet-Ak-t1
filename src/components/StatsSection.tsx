import React, { useState, useEffect, useRef } from "react";
import { motion } from "motion/react";
import { ShieldCheck } from "lucide-react";
import { StatItem } from "../types";

export default function StatsSection() {
  const stats: StatItem[] = [
    {
      percentage: 46,
      label: "Agni Mandya (Dull Fire)",
      sub: "Nearly 1 in 2 adults in urban India suffer from sluggish metabolic fire, leading to early glucose spikes and insulin blockages.",
      source: "ICMR Diabetes Study & IKS Registry",
      risk: "Critical"
    },
    {
      percentage: 55,
      label: "Vata Vyadhi (Stress Load)",
      sub: "Aggravated Prana and Vata energies manifest as high daytime cortisol, nervous exhaustion, and metabolic instability.",
      source: "India Holistic Health Index",
      risk: "Severe"
    },
    {
      percentage: 40,
      label: "Nidra Dosha (Sleep Block)",
      sub: "Fragmented circadian rest cycles disrupt the natural nighttime tissue repair (Ojas recovery), triggering morning fatigue.",
      source: "National Sleep & Circadian Registry",
      risk: "Severe"
    },
    {
      percentage: 35,
      label: "Artava Dushti (PCOS Block)",
      sub: "Hormonal & endocrine imbalances in women arising from blocked energy channels and faulty daily food habits.",
      source: "Endocrine Society India",
      risk: "High"
    }
  ];

  return (
    <section className="py-24 px-6 md:px-12 bg-white relative z-10 overflow-hidden" id="why-dietcraft">
      <div className="absolute top-0 right-0 w-96 h-96 bg-brand-soft/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="max-w-7xl mx-auto">
        {/* Header Text */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">The Modern Disruption</span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl text-dark mt-3 tracking-tight">
            Modern Indian Health is Out of Balance. <br />
            <span className="text-brand">We Restore Your Harmony Naturally.</span>
          </h2>
          <p className="mt-4 text-muted text-base font-light leading-relaxed font-sans">
            Modern lifestyle disorders arise when we decouple ourselves from our biological clocks (Dinacharya) and seasonal rhythms (Ritucharya), causing our internal fire (Agni) to choke. We blend timeless Indian Knowledge Systems (IKS) with wearable AI to detect these subtle vibrational shifts and restore perfect biological harmony before diseases set in.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, idx) => (
            <StatCard key={idx} stat={stat} index={idx} />
          ))}
        </div>

        {/* Preventative Callout Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mt-12 p-6 rounded-2xl bg-brand-soft/30 border border-brand/5 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand/10 flex items-center justify-center text-brand-highlight shrink-0">
              <ShieldCheck size={20} />
            </div>
            <div>
              <p className="text-sm font-semibold text-dark font-display">Time-Tested Wellness, Quantified by Sensors</p>
              <p className="text-xs text-muted">Translating continuous biometrics into a modern, personalized Dinacharya alignment shield.</p>
            </div>
          </div>
          <a
            href="#waitlist-anchor"
            className="text-xs font-mono font-bold text-brand hover:text-brand-highlight border-b border-brand pb-0.5 hover:border-brand-highlight transition-colors shrink-0"
          >
            BECOME A FOUNDING MEMBER
          </a>
        </motion.div>
      </div>
    </section>
  );
}

interface StatCardProps {
  stat: StatItem;
  index: number;
  key?: React.Key;
}

function StatCard({ stat, index }: StatCardProps) {
  const [count, setCount] = useState<number>(0);
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState<boolean>(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = stat.percentage;
    const duration = 1500; // ms
    const increment = Math.ceil(end / (duration / 16)); // ~60fps
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, stat.percentage]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
      className="glass-card rounded-3xl p-8 border border-brand/10 flex flex-col justify-between hover:shadow-2xl hover:shadow-brand/10 hover:-translate-y-1 transition-all duration-300 relative group overflow-hidden bg-white/80"
    >
      {/* Decorative top accent line */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-brand via-brand-highlight to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Risk Badge */}
      <div className="absolute top-6 right-6">
        <span
          className={`text-[10px] font-mono px-2.5 py-1 rounded-full font-semibold flex items-center gap-1.5 shadow-2xs ${
            stat.risk === "Critical"
              ? "bg-rose-50 text-rose-700 border border-rose-200"
              : stat.risk === "Severe"
              ? "bg-amber-50 text-amber-700 border border-amber-200"
              : "bg-emerald-50 text-brand border border-brand/20"
          }`}
        >
          <span className={`w-1.5 h-1.5 rounded-full ${stat.risk === "Critical" ? "bg-rose-500 animate-ping" : stat.risk === "Severe" ? "bg-amber-500 animate-pulse" : "bg-brand"}`} />
          <span>{stat.risk} Risk</span>
        </span>
      </div>

      {/* Numerical Stats */}
      <div className="pt-2">
        <div className="flex items-baseline text-dark mb-4">
          <span className="font-display font-bold text-5xl sm:text-6xl text-gradient-emerald group-hover:scale-105 transition-transform duration-300 inline-block tracking-tight">
            {count}
          </span>
          <span className="font-display font-bold text-3xl text-brand-highlight">%</span>
        </div>
        
        <h3 className="font-display font-semibold text-lg text-dark mb-2 group-hover:text-brand transition-colors">{stat.label}</h3>
        <p className="text-xs font-light text-muted leading-relaxed font-sans">{stat.sub}</p>
      </div>

      {/* Source Footer */}
      <div className="mt-8 pt-4 border-t border-brand/10 flex items-center justify-between text-[10px] font-mono text-muted">
        <span className="font-semibold uppercase tracking-wider text-brand/70">Source</span>
        <span className="truncate max-w-[170px] text-right font-medium">{stat.source}</span>
      </div>
    </motion.div>
  );
}
