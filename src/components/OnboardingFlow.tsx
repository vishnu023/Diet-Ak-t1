import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, Mail, Phone, Globe, MapPin, ChevronDown, Briefcase, 
  Sparkles, CheckSquare, Square, Shield, Check, X, ArrowRight, 
  Stethoscope, ArrowUpRight, Building2, Activity, Heart, Copy, 
  Twitter, Linkedin, Send 
} from "lucide-react";
import { MemberData } from "../types";
import Logo from "./Logo";

// 1. Success Waitlist Confirmation View (replaces l0)
interface SuccessViewProps {
  formData: MemberData;
  onReset: () => void;
}

export function SuccessView({ formData, onReset }: SuccessViewProps) {
  const [copied, setCopied] = useState(false);
  const [waitlistPos, setWaitlistPos] = useState(1428);
  const [dnaAssembled, setDnaAssembled] = useState(false);

  const refLink = `https://dietcraft.life/join?ref=${
    formData.fullName.trim().toLowerCase().replace(/\s+/g, "-") || "member"
  }-${Math.floor(1000 + Math.random() * 9000)}`;

  useEffect(() => {
    const randomizedAdd = Math.floor(Math.random() * 45);
    setWaitlistPos(1280 + randomizedAdd);
    
    const timer = setTimeout(() => {
      setDnaAssembled(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(refLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = (platform: "twitter" | "linkedin" | "whatsapp") => {
    const shareText = "I just became a founding member of @dietcraftlife - India's first AI Precision Nutrition platform. Secure your early spot here:";
    let url = "";
    if (platform === "twitter") {
      url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(refLink)}`;
    } else if (platform === "linkedin") {
      url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(refLink)}`;
    } else if (platform === "whatsapp") {
      url = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + " " + refLink)}`;
    }
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-card rounded-[40px] p-8 md:p-12 border border-brand/20 shadow-2xl relative overflow-hidden bg-white/95 max-w-2xl mx-auto text-center z-10 my-12"
      id="success-view-container"
    >
      <div className="absolute top-[-10%] right-[-10%] w-60 h-60 bg-brand-soft/25 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Helix Sequencing animation graphic */}
      <div className="flex flex-col items-center justify-center space-y-8 mb-8">
        <div className="relative w-36 h-24 flex items-center justify-center">
          <svg viewBox="0 0 100 40" className="w-full h-full text-brand">
            {Array.from({ length: 12 }).map((_, idx) => {
              const xValue = 5 + idx * 8;
              const radOffset = idx * 0.5;
              const y1 = 20 + Math.sin(radOffset) * 15;
              const y2 = 20 - Math.sin(radOffset) * 15;
              return (
                <g key={idx}>
                  <motion.line
                    x1={xValue}
                    y1={y1}
                    x2={xValue}
                    y2={y2}
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 2"
                    initial={{ scaleY: 0, opacity: 0 }}
                    animate={{ scaleY: 1, opacity: 0.5 }}
                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                  />
                  <motion.circle
                    cx={xValue}
                    cy={y1}
                    r="3"
                    className="fill-brand"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  />
                  <motion.circle
                    cx={xValue}
                    cy={y2}
                    r="3"
                    className="fill-accent"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: idx * 0.1, duration: 0.3 }}
                  />
                </g>
              );
            })}
          </svg>
          <div className="absolute top-1/2 -translate-y-1/2 bg-white px-2 py-0.5 rounded-full border border-brand/10 text-[8px] font-mono uppercase tracking-widest text-brand font-bold animate-pulse">
            {dnaAssembled ? "DNA_ASSEMBLED" : "SEQUENCING"}
          </div>
        </div>

        {/* Pulse beacon */}
        <div className="relative w-16 h-16 flex items-center justify-center">
          <div className="absolute inset-0 bg-brand/10 rounded-full animate-ping" />
          <motion.div
            animate={{ scale: [1, 1.12, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-12 h-12 rounded-full bg-linear-to-b from-brand to-brand/90 flex items-center justify-center text-white glow-brand z-10"
          >
            <Sparkles size={18} className="animate-pulse" />
          </motion.div>
        </div>

        {/* Sync badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="px-4 py-1.5 rounded-full bg-brand-soft/50 text-brand text-[10px] font-mono font-bold uppercase tracking-wider border border-brand/10 flex items-center gap-2 animate-pulse"
        >
          <span className="w-2 h-2 rounded-full bg-brand" />
          <span>VITAL WATCH FEED SYNCHRONIZED</span>
        </motion.div>
      </div>

      {/* Main greeting */}
      <div className="space-y-4 max-w-lg mx-auto">
        <h3 className="text-3xl font-display font-bold text-dark tracking-tight">
          Welcome, <span className="text-brand">{formData.fullName}</span>
        </h3>
        <p className="text-sm font-sans font-light text-muted leading-relaxed">
          You&apos;re now helping build India&apos;s future of preventive healthcare. We&apos;ve registered your clinical biometrics and active wearables.
        </p>
      </div>

      {/* Referral / Waitlist Info Box */}
      <div className="my-8 p-6 rounded-3xl bg-brand-soft/20 border border-brand/5 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-center md:text-left">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted">Waitlist Position</span>
          <p className="text-3xl font-display font-bold text-dark mt-1 flex items-center gap-2 justify-center md:justify-start">
            <span>#{waitlistPos}</span>
            <span className="text-[10px] font-mono font-semibold text-brand bg-brand-soft px-2 py-0.5 rounded border border-brand/10 uppercase animate-pulse">
              VIP early tier
            </span>
          </p>
        </div>
        
        {/* Referral Copier */}
        <div className="w-full md:w-auto">
          <span className="text-[10px] font-mono uppercase tracking-wider text-muted block mb-1 text-center md:text-right">
            Refer Friends to Move Up
          </span>
          <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-brand/10 shadow-inner">
            <span className="text-[10px] font-mono text-muted pl-3 truncate max-w-[150px]">
              {refLink}
            </span>
            <button
              onClick={handleCopy}
              className="p-2 rounded-full bg-brand hover:bg-brand/90 text-white cursor-pointer transition-colors"
            >
              <Copy size={12} />
            </button>
          </div>
          {copied && (
            <span className="text-[9px] font-mono text-brand font-semibold block text-center md:text-right mt-1 animate-pulse">
              Referral Link Copied!
            </span>
          )}
        </div>
      </div>

      {/* Social shares */}
      <div className="space-y-3">
        <span className="text-[10px] font-mono text-muted uppercase tracking-wider block">
          Share Your Launch Reservation
        </span>
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => handleShare("whatsapp")}
            className="px-4 py-2 border border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-600 rounded-full text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5"
          >
            <span>WhatsApp</span>
          </button>
          <button
            onClick={() => handleShare("linkedin")}
            className="px-4 py-2 border border-blue-200 bg-blue-50 hover:bg-blue-100 text-blue-600 rounded-full text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5"
          >
            <Linkedin size={12} />
            <span>LinkedIn</span>
          </button>
          <button
            onClick={() => handleShare("twitter")}
            className="px-4 py-2 border border-sky-200 bg-sky-50 hover:bg-sky-100 text-sky-600 rounded-full text-xs font-semibold cursor-pointer transition-colors flex items-center gap-1.5"
          >
            <Twitter size={12} />
            <span>Twitter / X</span>
          </button>
        </div>
      </div>

      {/* Reset/Back link */}
      <div className="mt-8 pt-4 border-t border-brand/5">
        <button
          onClick={onReset}
          className="text-[10px] font-mono text-muted hover:text-brand cursor-pointer transition-colors uppercase tracking-widest border-b border-dashed border-muted/30 hover:border-brand/40 pb-0.5"
        >
          Register Another Member
        </button>
      </div>
    </motion.div>
  );
}


// 2. Desktop Founding Member Form (replaces P5)
interface DesktopFormProps {
  onSubmitSuccess: (data: MemberData) => void;
}

export function DesktopForm({ onSubmitSuccess }: DesktopFormProps) {
  const [fields, setFields] = useState<MemberData>({
    fullName: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    ageGroup: "",
    occupation: "",
    healthGoal: "",
    wearablesOwned: [],
    betaTester: true,
    corporateWellness: false,
    professionalRole: false,
  });

  const [errors, setErrors] = useState<Partial<Record<keyof MemberData, string>>>({});
  const [consentChecked, setConsentChecked] = useState(true);

  const ageGroups = ["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"];
  
  const healthGoals = [
    { value: "diabetes", label: "Madhumeha (Diabetes Reversal & Agni Sync)" },
    { value: "pcos", label: "Artava Dushti (PCOS & Endocrine Harmony)" },
    { value: "weight-loss", label: "Medas (Weight Re-balancing & Sthula Care)" },
    { value: "heart-health", label: "Vata Vyadhi (Cardiovascular Protection)" },
    { value: "longevity", label: "Rasayana (Ojas Preservation & Longevity)" },
    { value: "fitness", label: "Bala Vigor (Athletic Recovery & Endurance)" },
    { value: "corporate-wellness", label: "Sattva Flow (Mind-Body & Workspace Harmony)" },
  ];

  const wearableOptions = [
    { id: "apple", label: "Apple Watch" },
    { id: "samsung", label: "Samsung Watch" },
    { id: "garmin", label: "Garmin Watch" },
    { id: "fitbit", label: "Fitbit" },
    { id: "cgm", label: "CGM (Glucose Monitor)" },
    { id: "none", label: "Other / None" },
  ];

  const handleWearableToggle = (id: string) => {
    setFields((prev) => {
      let active = [...prev.wearablesOwned];
      if (id === "none") {
        active = ["none"];
      } else {
        active = active.filter((w) => w !== "none");
        if (active.includes(id)) {
          active = active.filter((w) => w !== id);
        } else {
          active.push(id);
        }
      }
      return { ...prev, wearablesOwned: active };
    });
  };

  const validate = (): boolean => {
    const err: Partial<Record<keyof MemberData, string>> = {};
    if (!fields.fullName.trim()) err.fullName = "Full name is required";
    if (!fields.email.trim()) {
      err.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(fields.email)) {
      err.email = "Please enter a valid email";
    }
    if (!fields.phone.trim()) {
      err.phone = "Phone number is required";
    } else if (!/^[0-9+() -]{10,15}$/.test(fields.phone.trim())) {
      err.phone = "Please enter a valid phone number";
    }
    if (!fields.city.trim()) err.city = "City is required";
    if (!fields.ageGroup) err.ageGroup = "Please select your age group";
    if (!fields.healthGoal) err.healthGoal = "Please select a health goal";
    
    setErrors(err);
    return Object.keys(err).length === 0 && consentChecked;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      onSubmitSuccess(fields);
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto py-12" id="founding-member-section">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <span className="text-xs font-mono uppercase tracking-widest text-brand font-bold">Limited Enrollment</span>
        <h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mt-2 tracking-tight">
          Become a Founding Member
        </h2>
        <p className="mt-3 text-muted text-sm font-light leading-relaxed font-sans">
          Dietcraft is coming soon! Join the exclusive early-access waitlist for India&apos;s pioneering wellness solution provider fusing ancient Indian Knowledge Systems (IKS) with real-time wearable biometrics and predictive AI.
        </p>
      </div>

      <motion.form
        onSubmit={handleSubmit}
        className="glass-card rounded-[36px] p-6 sm:p-10 md:p-12 border-2 border-brand/15 shadow-2xl shadow-brand/10 bg-white/90 relative overflow-hidden text-left"
      >
        <div className="absolute top-0 right-0 w-40 h-40 bg-brand-soft/40 rounded-bl-full pointer-events-none" />

        {/* Form header */}
        <div className="flex items-center justify-between mb-8 pb-4 border-b border-brand/10 z-10 relative">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand-highlight animate-ping" />
            <span className="text-xs font-mono font-bold text-brand uppercase tracking-wider">BATCH 01 ENROLLMENT ACTIVE</span>
          </div>
          <span className="text-[10px] font-mono font-bold text-brand bg-brand-soft px-2.5 py-1 rounded-full border border-brand/10">VIP ACCESS</span>
        </div>

        {/* 2-column input fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {/* Name */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Full Name</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-brand/60">
                <User size={16} />
              </span>
              <input
                type="text"
                placeholder="Aarav Sharma"
                value={fields.fullName}
                onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/15 focus:border-brand focus:ring-2 focus:ring-brand/10 rounded-xl text-sm transition-all focus:outline-none shadow-2xs"
              />
              {errors.fullName && <p className="text-[10px] text-rose-500 font-mono mt-1 font-semibold">{errors.fullName}</p>}
            </div>
          </div>

          {/* Email */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Email Address</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <Mail size={16} />
              </span>
              <input
                type="email"
                placeholder="aarav@outlook.com"
                value={fields.email}
                onChange={(e) => setFields({ ...fields, email: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
              />
              {errors.email && <p className="text-[10px] text-rose-500 font-mono mt-1">{errors.email}</p>}
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Phone Number</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <Phone size={16} />
              </span>
              <input
                type="tel"
                placeholder="+91 98765 43210"
                value={fields.phone}
                onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
              />
              {errors.phone && <p className="text-[10px] text-rose-500 font-mono mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Country */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Country</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <Globe size={16} />
              </span>
              <input
                type="text"
                placeholder="India"
                value={fields.country}
                onChange={(e) => setFields({ ...fields, country: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
              />
            </div>
          </div>

          {/* City */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">City</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <MapPin size={16} />
              </span>
              <input
                type="text"
                placeholder="Mumbai"
                value={fields.city}
                onChange={(e) => setFields({ ...fields, city: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
              />
              {errors.city && <p className="text-[10px] text-rose-500 font-mono mt-1">{errors.city}</p>}
            </div>
          </div>

          {/* Age Group */}
          <div>
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Age Group</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <User size={16} />
              </span>
              <select
                value={fields.ageGroup}
                onChange={(e) => setFields({ ...fields, ageGroup: e.target.value })}
                className="w-full pl-11 pr-10 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm appearance-none transition-all focus:outline-none cursor-pointer"
              >
                <option value="">Select Age Group</option>
                {ageGroups.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-4.5 text-muted/60 pointer-events-none">
                <ChevronDown size={14} />
              </span>
              {errors.ageGroup && <p className="text-[10px] text-rose-500 font-mono mt-1">{errors.ageGroup}</p>}
            </div>
          </div>

          {/* Occupation */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Occupation / Professional Field</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <Briefcase size={16} />
              </span>
              <input
                type="text"
                placeholder="Software Engineer, Physician, Business Director, etc."
                value={fields.occupation}
                onChange={(e) => setFields({ ...fields, occupation: e.target.value })}
                className="w-full pl-11 pr-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
              />
            </div>
          </div>

          {/* Health Goal */}
          <div className="md:col-span-2">
            <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-1.5">Primary Preventive Health Goal</label>
            <div className="relative">
              <span className="absolute left-4 top-3.5 text-muted/60">
                <Sparkles size={16} />
              </span>
              <select
                value={fields.healthGoal}
                onChange={(e) => setFields({ ...fields, healthGoal: e.target.value })}
                className="w-full pl-11 pr-10 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm appearance-none transition-all focus:outline-none cursor-pointer"
              >
                <option value="">Select Preventive Health Goal</option>
                {healthGoals.map((g) => (
                  <option key={g.value} value={g.value}>
                    {g.label}
                  </option>
                ))}
              </select>
              <span className="absolute right-4 top-4.5 text-muted/60 pointer-events-none">
                <ChevronDown size={14} />
              </span>
              {errors.healthGoal && <p className="text-[10px] text-rose-500 font-mono mt-1">{errors.healthGoal}</p>}
            </div>
          </div>
        </div>

        {/* Wearables checklist */}
        <div className="mb-8 pt-4 border-t border-brand/5">
          <label className="text-[11px] font-mono font-bold text-dark uppercase block mb-3">Wearables &amp; Smart Devices Owned</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {wearableOptions.map((opt) => {
              const active = fields.wearablesOwned.includes(opt.id);
              return (
                <button
                  key={opt.id}
                  type="button"
                  onClick={() => handleWearableToggle(opt.id)}
                  className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    active
                      ? "border-brand bg-brand-soft/20 text-brand font-semibold"
                      : "border-brand/10 text-muted"
                  }`}
                >
                  <span>{opt.label}</span>
                  {active ? (
                    <CheckSquare size={14} className="text-brand" />
                  ) : (
                    <Square size={14} className="text-muted/60" />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Additional Checkbox options */}
        <div className="space-y-4 mb-8 pt-4 border-t border-brand/5">
          {/* Active Beta Tester */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={fields.betaTester}
              onChange={(e) => setFields({ ...fields, betaTester: e.target.checked })}
              className="mt-1 h-4 w-4 text-brand border-brand/10 rounded-xs cursor-pointer accent-brand"
            />
            <div className="text-left">
              <span className="text-xs font-semibold text-dark block">I&apos;d love to become an Active Beta Tester</span>
              <span className="text-[10px] text-muted block mt-0.5">Includes free clinical biomarker consulting during launch phase.</span>
            </div>
          </label>

          {/* Corporate Wellness */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={fields.corporateWellness}
              onChange={(e) => setFields({ ...fields, corporateWellness: e.target.checked })}
              className="mt-1 h-4 w-4 text-brand border-brand/10 rounded-xs cursor-pointer accent-brand"
            />
            <div className="text-left">
              <span className="text-xs font-semibold text-dark block">Interested in Corporate Wellness Program</span>
              <span className="text-[10px] text-muted block mt-0.5">Let&apos;s connect you with corporate enrollment teams for your company.</span>
            </div>
          </label>

          {/* Doctor advisory apply */}
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              checked={fields.professionalRole}
              onChange={(e) => setFields({ ...fields, professionalRole: e.target.checked })}
              className="mt-1 h-4 w-4 text-brand border-brand/10 rounded-xs cursor-pointer accent-brand"
            />
            <div className="text-left">
              <span className="text-xs font-semibold text-dark block">I am a Doctor / Clinical Nutritionist / Medical Researcher</span>
              <span className="text-[10px] text-muted block mt-0.5">Apply to join our elite Clinical Advisory Network &amp; help review protocols.</span>
            </div>
          </label>
        </div>

        {/* Terms Consent block */}
        <div className="mb-8 p-4 rounded-xl bg-brand-soft/20 border border-brand/5">
          <label className="flex items-start gap-3 cursor-pointer">
            <input
              type="checkbox"
              required
              checked={consentChecked}
              onChange={(e) => setConsentChecked(e.target.checked)}
              className="mt-1 h-4 w-4 text-brand border-brand/10 rounded-xs cursor-pointer accent-brand"
            />
            <div className="text-left">
              <span className="text-xs text-dark font-light leading-relaxed block">
                I consent to allow Dietcraft to evaluate my wellness inputs. I agree to the{" "}
                <a href="privacy.html" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Privacy Policy</a> &amp;{" "}
                <a href="terms.html" target="_blank" rel="noopener noreferrer" className="text-brand font-semibold hover:underline">Terms of Enrollment</a>.
              </span>
            </div>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-brand text-white text-xs sm:text-sm font-semibold rounded-full hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 active:scale-[0.98] cursor-pointer flex items-center justify-center gap-2 shadow-md shadow-brand/10"
        >
          <Shield size={14} className="stroke-[2.5]" />
          <span>Reserve My Spot</span>
        </button>

        <div className="mt-4 flex items-center justify-center gap-1 text-[10px] font-mono text-muted">
          <Shield size={10} className="text-brand" />
          <span>Your physiological privacy is protected under Indian HIPAA frameworks.</span>
        </div>
      </motion.form>
    </div>
  );
}


// 3. Mobile Onboarding Wizard Form (replaces W5)
interface MobileWizardProps {
  onCompleteSignup: (data: MemberData) => void;
  onWatchVision: () => void;
}

export function MobileWizard({ onCompleteSignup, onWatchVision }: MobileWizardProps) {
  const [step, setStep] = useState(0);
  const [fields, setFields] = useState<MemberData>({
    fullName: "",
    email: "",
    phone: "",
    country: "India",
    city: "",
    ageGroup: "",
    occupation: "",
    healthGoal: "",
    wearablesOwned: [],
    betaTester: true,
    corporateWellness: false,
    professionalRole: false,
  });

  const [errorText, setErrorText] = useState("");

  const handleNext = () => {
    if (step === 2) {
      if (!fields.fullName.trim() || !fields.email.trim() || !fields.phone.trim()) {
        setErrorText("Please fill in your name, email, and phone.");
        return;
      }
      if (!/\S+@\S+\.\S+/.test(fields.email)) {
        setErrorText("Please enter a valid email address.");
        return;
      }
    }
    if (step === 3 && (!fields.city.trim() || !fields.ageGroup || !fields.healthGoal)) {
      setErrorText("Please complete all dropdowns and city.");
      return;
    }
    setErrorText("");
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setErrorText("");
    setStep((prev) => Math.max(0, prev - 1));
  };

  const handleToggleWearable = (id: string) => {
    setFields((prev) => {
      let active = [...prev.wearablesOwned];
      if (id === "none") {
        active = ["none"];
      } else {
        active = active.filter((w) => w !== "none");
        if (active.includes(id)) {
          active = active.filter((w) => w !== id);
        } else {
          active.push(id);
        }
      }
      return { ...prev, wearablesOwned: active };
    });
  };

  const handleComplete = () => {
    onCompleteSignup(fields);
  };

  return (
    <div className="md:hidden min-h-[92vh] flex flex-col justify-between px-6 py-8 relative bg-bg-base overflow-hidden select-none" id="mobile-onboarding-root">
      <div className="absolute top-[-10%] left-[-15%] w-72 h-72 bg-brand-soft/20 blur-[80px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-15%] w-72 h-72 bg-brand-highlight/10 blur-[90px] pointer-events-none" />
      
      {/* Dynamic 5-dot Progress Bar */}
      <div className="flex gap-1 w-full mb-8 z-10">
        {Array.from({ length: 5 }).map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 flex-1 rounded-full transition-all duration-300 ${
              idx <= step ? "bg-brand" : "bg-brand/10"
            }`}
          />
        ))}
      </div>

      <div className="flex-1 flex flex-col justify-center z-10">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="step0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6 text-left"
            >
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft text-brand text-xs font-semibold">
                <Sparkles size={12} className="animate-pulse" />
                <span>India&apos;s Future of Preventive Care</span>
              </div>
              
              <h2 className="font-display font-bold text-4xl text-dark leading-[1.1] tracking-tight">
                Your Body <br /> Has Been <br /> <span className="text-brand">Talking.</span>
              </h2>
              
              <p className="text-sm font-sans font-light text-muted leading-relaxed">
                Now it finally has someone listening. Dietcraft converts wearable raw data into actionable clinical recommendations to intercept disease.
              </p>

              {/* Animated heart rate card */}
              <div className="py-6 flex justify-center">
                <div className="w-40 h-40 rounded-full border border-brand/15 bg-white/60 p-2 flex items-center justify-center animate-float-medium shadow-lg shadow-brand/5 relative">
                  <div className="w-24 h-24 rounded-full bg-dark flex flex-col items-center justify-center text-white relative">
                    <span className="text-[8px] font-mono text-neutral-400">RESTING</span>
                    <span className="text-xl font-bold font-display text-brand-highlight">72 BPM</span>
                    <Heart size={10} className="text-rose-500 fill-rose-500 mt-1 animate-pulse" />
                  </div>
                </div>
              </div>

              {/* Step 0 Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand text-white text-sm font-bold rounded-full hover:bg-brand/90 active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand/10"
                >
                  <span>Begin Onboarding</span>
                  <ArrowRight size={16} />
                </button>
                <button
                  onClick={onWatchVision}
                  className="w-full py-4 glass-card text-dark text-sm font-semibold rounded-full active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 border border-brand/10"
                >
                  <span>Watch Vision</span>
                </button>
              </div>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-6 text-left"
            >
              <span className="text-xs font-mono uppercase tracking-widest text-brand font-semibold">THE CLINICAL BASIS</span>
              <h3 className="font-display font-bold text-3xl text-dark tracking-tight">India&apos;s Silent Epidemic</h3>
              
              <div className="grid grid-cols-2 gap-3 py-2">
                <div className="p-4 bg-white rounded-2xl border border-brand/5 shadow-xs">
                  <span className="text-2xl font-bold font-display text-brand">46%</span>
                  <span className="text-[10px] text-dark font-medium block mt-1">Prediabetic</span>
                  <span className="text-[9px] text-muted font-light leading-relaxed block mt-0.5">Early insulin pathway resistance markers.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-brand/5 shadow-xs">
                  <span className="text-2xl font-bold font-display text-brand">55%</span>
                  <span className="text-[10px] text-dark font-medium block mt-1">Chronic Stress</span>
                  <span className="text-[9px] text-muted font-light leading-relaxed block mt-0.5">Elevated cortisol levels accelerating biological age.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-brand/5 shadow-xs">
                  <span className="text-2xl font-bold font-display text-brand">40%</span>
                  <span className="text-[10px] text-dark font-medium block mt-1">Poor Sleep</span>
                  <span className="text-[9px] text-muted font-light leading-relaxed block mt-0.5">Fragmented slow-wave biological recovery cycles.</span>
                </div>
                <div className="p-4 bg-white rounded-2xl border border-brand/5 shadow-xs">
                  <span className="text-2xl font-bold font-display text-brand">35%</span>
                  <span className="text-[10px] text-dark font-medium block mt-1">PCOS Risk</span>
                  <span className="text-[9px] text-muted font-light leading-relaxed block mt-0.5">Hormonal and lifestyle blockage risks in women.</span>
                </div>
              </div>

              {/* Step 1 Actions */}
              <div className="space-y-3">
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand text-white text-sm font-bold rounded-full active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg"
                >
                  <span>Build My Profile</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={handlePrev} className="w-full py-3.5 text-muted text-xs font-semibold cursor-pointer">
                  Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-5 text-left"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">PROFILE SYNC</span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Core Identity</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">Full Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Aarav Sharma"
                    value={fields.fullName}
                    onChange={(e) => setFields({ ...fields, fullName: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="aarav@outlook.com"
                    value={fields.email}
                    onChange={(e) => setFields({ ...fields, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">Phone Number</label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={fields.phone}
                    onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
                  />
                </div>
                {errorText && <p className="text-xs text-rose-500 font-mono text-center">{errorText}</p>}
              </div>

              {/* Step 2 Actions */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand text-white text-sm font-bold rounded-full active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={handlePrev} className="w-full py-3.5 text-muted text-xs font-semibold cursor-pointer">
                  Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-5 text-left"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">BIOLOGICAL TARGET</span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Biomarker Details</h3>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">City</label>
                  <input
                    type="text"
                    placeholder="Mumbai"
                    value={fields.city}
                    onChange={(e) => setFields({ ...fields, city: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none"
                  />
                </div>
                
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">Age Group</label>
                  <select
                    value={fields.ageGroup}
                    onChange={(e) => setFields({ ...fields, ageGroup: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Age Group</option>
                    {["Under 18", "18-24", "25-34", "35-44", "45-54", "55+"].map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="text-[10px] font-mono font-semibold text-dark uppercase block mb-1">Preventive Health Goal</label>
                  <select
                    value={fields.healthGoal}
                    onChange={(e) => setFields({ ...fields, healthGoal: e.target.value })}
                    className="w-full px-4 py-3 bg-white border border-brand/10 focus:border-brand/40 rounded-xl text-sm transition-all focus:outline-none cursor-pointer"
                  >
                    <option value="">Select Goal</option>
                    <option value="weight-loss">Weight Loss</option>
                    <option value="diabetes">Diabetes Prevention / Reversal</option>
                    <option value="heart-health">Heart Health</option>
                    <option value="pcos">PCOS / Endocrine Management</option>
                    <option value="fitness">Fitness &amp; Recovery Optimization</option>
                    <option value="longevity">Longevity &amp; Healthspan Expansion</option>
                  </select>
                </div>
                {errorText && <p className="text-xs text-rose-500 font-mono text-center">{errorText}</p>}
              </div>

              {/* Step 3 Actions */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={handleNext}
                  className="w-full py-4 bg-brand text-white text-sm font-bold rounded-full active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg"
                >
                  <span>Continue</span>
                  <ArrowRight size={16} />
                </button>
                <button onClick={handlePrev} className="w-full py-3.5 text-muted text-xs font-semibold cursor-pointer">
                  Back
                </button>
              </div>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              className="space-y-5 text-left"
            >
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">HARDWARE COUPLING</span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Wearables Pairing</h3>
              </div>
              
              <p className="text-xs text-muted leading-relaxed font-light">
                Toggle all smart sensors you own. On launch, our backend will establish continuous background synchronization with these channels.
              </p>

              <div className="grid grid-cols-2 gap-2.5 py-1">
                {[
                  { id: "apple", label: "Apple Watch" },
                  { id: "samsung", label: "Samsung" },
                  { id: "garmin", label: "Garmin" },
                  { id: "fitbit", label: "Fitbit" },
                  { id: "google", label: "Google Fit" },
                  { id: "none", label: "None" }
                ].map((item) => {
                  const active = fields.wearablesOwned.includes(item.id);
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleToggleWearable(item.id)}
                      className={`p-3 rounded-xl border text-xs text-left cursor-pointer transition-all duration-200 flex items-center justify-between ${
                        active
                          ? "border-brand bg-brand-soft/20 text-brand font-semibold"
                          : "border-brand/10 bg-white text-muted"
                      }`}
                    >
                      <span>{item.label}</span>
                      {active && <Check size={12} className="text-brand stroke-[2.5]" />}
                    </button>
                  );
                })}
              </div>

              <div className="p-3.5 rounded-xl bg-brand-soft/20 border border-brand/5 text-[10px] text-dark leading-relaxed font-light leading-relaxed">
                <span className="font-semibold text-brand">Physiological Privacy:</span> Your biometric datasets are secure and never leased to third-party insurance partners.
              </div>

              {/* Step 4 Actions */}
              <div className="space-y-3 pt-2">
                <button
                  onClick={handleComplete}
                  className="w-full py-4 bg-brand text-white text-sm font-bold rounded-full active:scale-98 transition-all cursor-pointer flex items-center justify-center gap-1.5 shadow-lg shadow-brand/20"
                >
                  <Shield size={14} className="stroke-[2.5]" />
                  <span>Reserve My Spot</span>
                </button>
                <button onClick={handlePrev} className="w-full py-3.5 text-muted text-xs font-semibold cursor-pointer">
                  Back
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}


// 4. Corporate outreach and clinical network panels (replaces F5)
interface CorporateClinicalProps {
  onRequestDemo: () => void;
  onJoinAdvisory: () => void;
}

export function CorporateClinical({ onRequestDemo, onJoinAdvisory }: CorporateClinicalProps) {
  return (
    <div className="space-y-12 pb-24 relative z-10">
      
      {/* Corporate section */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto" id="corporate-wellness-section">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="glass-card rounded-[36px] p-8 md:p-14 border border-brand/10 shadow-xl relative overflow-hidden bg-white/70 flex flex-col lg:flex-row items-center justify-between gap-8 text-left"
        >
          {/* Subtle logo bg icon */}
          <div className="absolute right-10 top-1/2 -translate-y-1/2 opacity-5 pointer-events-none text-brand">
            <Building2 size={320} />
          </div>
          
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-soft text-brand text-[10px] font-mono font-bold uppercase tracking-wider">
              <Building2 size={12} />
              <span>For Enterprise &amp; Human Resources</span>
            </div>
            
            <h3 className="font-display font-bold text-3xl sm:text-4xl text-dark tracking-tight leading-[1.15]">
              Reduce Healthcare Costs <br className="hidden sm:block" />
              Before Disease Begins.
            </h3>
            
            <p className="text-sm font-light text-muted leading-relaxed">
              Equip your senior directors and execution teams with continuous metabolic tracking, medical nutrition plans, and proactive disease warnings to eliminate burnouts and minimize annual health insurance claim costs by up to 28%.
            </p>
          </div>

          <div className="shrink-0 w-full lg:w-auto relative z-10">
            <button
              onClick={onRequestDemo}
              className="w-full lg:w-auto px-8 py-4 bg-brand text-white text-xs sm:text-sm font-bold uppercase tracking-wider rounded-full hover:bg-brand/90 hover:shadow-lg hover:shadow-brand/20 transition-all duration-300 active:scale-95 cursor-pointer shadow-md shadow-brand/10"
            >
              Request Enterprise Demo
            </button>
          </div>
        </motion.div>
      </section>

      {/* Clinical advisory section */}
      <section className="px-6 md:px-12 max-w-3xl mx-auto text-left">
        
        {/* Medical community block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="glass-card rounded-[32px] p-8 md:p-10 border border-brand/5 shadow-lg bg-white/70 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-center mb-6">
              <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">Medical Community</span>
              <div className="w-8 h-8 rounded-full bg-brand-soft text-brand flex items-center justify-center border border-brand/10">
                <Stethoscope size={16} />
              </div>
            </div>
            
            <h4 className="font-display font-bold text-2xl text-dark">Clinical Advisory Network</h4>
            
            <p className="mt-3 text-sm text-muted font-light leading-relaxed">
              Are you a senior endocrinologist, preventative physician, diabetologist, or biochemistry researcher? Help us audit and refine clinical guidelines for the platform.
            </p>
            
            <ul className="mt-6 space-y-3">
              <li className="flex items-center gap-2 text-xs text-dark font-light">
                <Check size={14} className="text-brand shrink-0" />
                <span>Validate AI metabolic logic pathways</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-dark font-light">
                <Check size={14} className="text-brand shrink-0" />
                <span>Direct research publications peer-review</span>
              </li>
            </ul>
          </div>

          <div className="mt-8 pt-6 border-t border-brand/5">
            <button
              onClick={onJoinAdvisory}
              className="w-full py-3.5 border border-brand/15 text-xs text-brand font-bold uppercase tracking-wider rounded-full hover:bg-brand-soft/20 hover:border-brand/40 transition-all cursor-pointer flex items-center justify-center gap-1.5"
            >
              <span>Join Clinical Advisory Network</span>
              <ArrowUpRight size={14} />
            </button>
          </div>
        </motion.div>

      </section>

      {/* Footer block */}
      <footer className="mt-16 border-t border-brand/5 pt-12 px-6 md:px-12 max-w-7xl mx-auto text-center">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <a href="#" className="flex items-center gap-2">
            <Logo variant="horizontal" iconClassName="w-8 h-8" className="scale-90 origin-left" />
          </a>
          
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-muted">
            <a href="#how-it-works" className="hover:text-dark transition-colors">How It Works</a>
            <a href="#ecosystem" className="hover:text-dark transition-colors">Ecosystem</a>
            <a href="#founding-member-section" className="hover:text-dark transition-colors">Early Access</a>
            <a href="mailto:partners@dietcraft.life" className="hover:text-dark transition-colors flex items-center gap-1">
              <Mail size={12} />
              <span>partners@dietcraft.life</span>
            </a>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-muted border-t border-brand/5 pt-6">
          <div className="flex flex-wrap gap-4">
            <a href="privacy.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Privacy Policy</a>
            <a href="terms.html" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">Terms &amp; Guidelines</a>
          </div>
          <div>
            <span>© {new Date().getFullYear()} Dietcraft.life. All Rights Reserved.</span>
          </div>
        </div>
      </footer>

    </div>
  );
}
