import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Check, ArrowRight, Play, Shield, Mail } from "lucide-react";

interface BaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  widthClass?: string;
}

export function BaseModal({ isOpen, onClose, children, widthClass = "max-w-md" }: BaseModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur backdrop overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/40 backdrop-blur-md"
          />
          
          {/* Spring-based modal card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className={`w-full ${widthClass} glass-card bg-white/95 border border-brand/20 shadow-2xl p-6 md:p-8 rounded-[32px] z-10 relative`}
          >
            {children}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

// Enterprise Demo Request Modal ($5)
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function EnterpriseModal({ isOpen, onClose }: ModalProps) {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [scale, setScale] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && company) {
      setSuccess(true);
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-6 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center mx-auto border border-brand/10">
              <Check size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-dark">Demo Request Registered</h3>
              <p className="text-xs text-muted font-light mt-1">
                Thank you! Our Director of Clinical Partnerships will reach out within 24 hours to schedule your exclusive workspace preview.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="px-5 py-2 border border-brand/10 hover:border-brand/30 rounded-full text-xs font-semibold text-brand transition-colors cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6 text-left"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">
                  Enterprise Partnership
                </span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Request Enterprise Demo</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-xs font-light text-muted leading-relaxed">
              Unlock biometric clinical tracking, custom preventative wellness blueprints, and reduced insurance premiums for your senior teams.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Work Email</label>
                <input
                  type="email"
                  required
                  placeholder="hr-director@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Company Name</label>
                <input
                  type="text"
                  required
                  placeholder="Tech Solutions India"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Employee Count</label>
                <select
                  value={scale}
                  onChange={(e) => setScale(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none cursor-pointer"
                >
                  <option value="">Select Scale</option>
                  <option value="10-50">10 - 50 Employees</option>
                  <option value="50-250">50 - 250 Employees</option>
                  <option value="250-1000">250 - 1000 Employees</option>
                  <option value="1000+">1000+ Employees</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand/90 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Enterprise Demo</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </BaseModal>
  );
}

// Join Clinical Advisory Modal (ew)
export function AdvisoryModal({ isOpen, onClose }: ModalProps) {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && specialty) {
      setSuccess(true);
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-6 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center mx-auto border border-brand/10">
              <Check size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-dark">Credentials Received</h3>
              <p className="text-xs text-muted font-light mt-1">
                Thank you, Doctor. Our Clinical Director of Endocrinology will contact you to establish review credentials and send sample research papers.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="px-5 py-2 border border-brand/10 hover:border-brand/30 rounded-full text-xs font-semibold text-brand transition-colors cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6 text-left"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">
                  Clinical Advisory
                </span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Join Clinical Advisory</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-xs font-light text-muted leading-relaxed">
              Help us review diagnostic biomarkers, evaluate IKS Shastra AI recommendations, and expand Indian preventative medicine frameworks based on classical health traditions.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="dr.nair@apollo-hospitals.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Credentials & Specialty</label>
                <input
                  type="text"
                  required
                  placeholder="MD, DM (Endocrinology) — 12 Yrs Experience"
                  value={specialty}
                  onChange={(e) => setSpecialty(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand/90 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Submit Clinical Credentials</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </BaseModal>
  );
}

// Request Investor Deck Modal (tw)
export function InvestorModal({ isOpen, onClose }: ModalProps) {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState("");
  const [institution, setInstitution] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && institution) {
      setSuccess(true);
    }
  };

  return (
    <BaseModal isOpen={isOpen} onClose={onClose}>
      <AnimatePresence mode="wait">
        {success ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="py-6 text-center space-y-4"
          >
            <div className="w-12 h-12 rounded-full bg-brand-soft text-brand flex items-center justify-center mx-auto border border-brand/10">
              <Check size={24} className="stroke-[2.5]" />
            </div>
            <div>
              <h3 className="font-display font-semibold text-lg text-dark">Materials Sent</h3>
              <p className="text-xs text-muted font-light mt-1">
                Pitch deck has been dispatched. Check your inbox at{" "}
                <span className="font-mono text-brand font-semibold">{email}</span>. Our founder will sync directly.
              </p>
            </div>
            <button
              onClick={() => {
                setSuccess(false);
                onClose();
              }}
              className="px-5 py-2 border border-brand/10 hover:border-brand/30 rounded-full text-xs font-semibold text-brand transition-colors cursor-pointer"
            >
              Done
            </button>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="space-y-6 text-left"
          >
            <div className="flex justify-between items-start">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-brand uppercase font-bold">
                  Investor Relations
                </span>
                <h3 className="font-display font-bold text-2xl text-dark mt-1">Request Pitch Deck</h3>
              </div>
              <button
                onClick={onClose}
                className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
              >
                <X size={18} />
              </button>
            </div>
            <p className="text-xs font-light text-muted leading-relaxed">
              Preview our metabolic disease reversal data metrics, Indian premium target metrics, and Series-A funding schedules.
            </p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Institutional Email</label>
                <input
                  type="email"
                  required
                  placeholder="partner@sequoia-india.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <div>
                <label className="text-[10px] font-mono font-bold text-dark uppercase block mb-1">Fund / Institution</label>
                <input
                  type="text"
                  required
                  placeholder="Matrix Partners, Peak XV, etc."
                  value={institution}
                  onChange={(e) => setInstitution(e.target.value)}
                  className="w-full px-4 py-2.5 bg-white border border-brand/10 focus:border-brand/40 rounded-lg text-sm transition-all focus:outline-none"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-brand text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-brand/90 transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Request Investor Materials</span>
                <ArrowRight size={14} />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </BaseModal>
  );
}

// Watch Our Vision Cinematic Modal (nw)
export function VisionModal({ isOpen, onClose }: ModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} widthClass="max-w-3xl">
      <div className="space-y-4 text-left relative overflow-hidden">
        <div className="flex justify-between items-center pb-2 border-b border-brand/5">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-brand animate-pulse" />
            <h4 className="font-display font-bold text-lg text-dark">Watch Our Vision</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="aspect-video w-full rounded-2xl bg-dark relative flex flex-col justify-between p-6 overflow-hidden border border-brand/15 shadow-inner">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brand/30 blur-[60px] pointer-events-none animate-pulse-slow" />
          
          <div className="text-[10px] font-mono text-neutral-400 flex justify-between items-center z-10">
            <span>DIETCRAFT CINEMATICS</span>
            <span>0:00 / 2:14</span>
          </div>
          
          <div className="flex-1 flex flex-col items-center justify-center my-4 z-10">
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="w-16 h-16 rounded-full bg-brand text-white flex items-center justify-center cursor-pointer shadow-lg shadow-brand/35 glow-brand border-2 border-brand-highlight"
            >
              <Play size={22} className="fill-white translate-x-0.5" />
            </motion.div>
            <span className="text-xs text-white/95 font-semibold mt-3 tracking-wide">
              PLAY DIETCRAFT INTRODUCTION
            </span>
            <span className="text-[10px] text-neutral-300 font-light mt-1">
              Cinematic render by Apple Product Lab
            </span>
          </div>
          
          <div className="text-center z-10 px-4">
            <p className="text-xs text-white/90 bg-black/40 py-1.5 px-3 rounded-md max-w-md mx-auto leading-relaxed border border-white/5 font-sans">
              &quot;India&apos;s pioneering wellness solution provider fusing ancient Indian Knowledge Systems (IKS) with real-time wearable biometrics and predictive AI.&quot;
            </p>
          </div>
        </div>
        
        <div className="flex justify-between items-center pt-2 text-[10px] font-mono text-muted">
          <span>SECURE STREAM — STEREO 5.1</span>
          <span>DIETCRAFT.LIFE 2026</span>
        </div>
      </div>
    </BaseModal>
  );
}

// Privacy Policy Modal
export function PrivacyModal({ isOpen, onClose }: ModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} widthClass="max-w-lg">
      <div className="space-y-4 text-left">
        <div className="flex justify-between items-center pb-2 border-b border-brand/5">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-brand animate-pulse" />
            <h4 className="font-display font-bold text-lg text-dark">Physiological Privacy Policy</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 text-xs text-muted leading-relaxed font-light">
          <p className="font-semibold text-dark">1. Core Biometric Protection Mandate</p>
          <p>
            At Dietcraft, we believe your physiological data belongs entirely to you. All continuous wearable data streams (glucose coherence, heart rate variability, blood oxygen level profiles, metabolic age metrics) are stored using bank-grade end-to-end encryption.
          </p>
          <p className="font-semibold text-dark">2. Absolute Data Non-Disclosure</p>
          <p>
            Under no circumstances is your physical identity, blood markers, clinical logs, or metabolic history rented, leased, or sold to insurance brokers, pharmaceutical conglomerates, or third-party marketing companies. 
          </p>
          <p className="font-semibold text-dark">3. Indian HIPAA Compliance</p>
          <p>
            Our operations strictly adhere to local Indian healthcare privacy architectures and the Digital Personal Data Protection (DPDP) frameworks. You maintain a perpetual right to request complete data deletion at any point.
          </p>
        </div>
        
        <div className="flex justify-end pt-2 border-t border-brand/5">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand text-white rounded-full text-xs font-semibold cursor-pointer"
          >
            I Understand
          </button>
        </div>
      </div>
    </BaseModal>
  );
}

// Terms of Enrollment Modal
export function TermsModal({ isOpen, onClose }: ModalProps) {
  return (
    <BaseModal isOpen={isOpen} onClose={onClose} widthClass="max-w-lg">
      <div className="space-y-4 text-left">
        <div className="flex justify-between items-center pb-2 border-b border-brand/5">
          <div className="flex items-center gap-2">
            <Shield size={18} className="text-brand animate-pulse" />
            <h4 className="font-display font-bold text-lg text-dark">Terms of VIP Enrollment</h4>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-full hover:bg-neutral-100 transition-colors cursor-pointer text-muted hover:text-dark"
          >
            <X size={18} />
          </button>
        </div>
        
        <div className="space-y-3 max-h-[300px] overflow-y-auto pr-2 text-xs text-muted leading-relaxed font-light">
          <p className="font-semibold text-dark">1. VIP Waitlist Priority</p>
          <p>
            Your registered spot locks in lifelong early-tier pricing and discount schedules on subsequent premium subscription modules and hardware bundles when we officially boot across South Asia.
          </p>
          <p className="font-semibold text-dark">2. Scope of Service</p>
          <p>
            Dietcraft.life provides precision metabolic tracking and preventative nutrition blueprints. VIP enrollment constitutes waitlist reservation and beta tester registration; it does not substitute active critical clinical prescriptions or emergency medical diagnoses.
          </p>
          <p className="font-semibold text-dark">3. Wearables Coupling Consent</p>
          <p>
            By enrolling, you consent to background wearables synchronization through approved API frameworks (Apple Health, Google Fit, Garmin, Fitbit, Samsung) when our mobile platform is delivered.
          </p>
        </div>
        
        <div className="flex justify-end pt-2 border-t border-brand/5">
          <button
            onClick={onClose}
            className="px-5 py-2 bg-brand text-white rounded-full text-xs font-semibold cursor-pointer"
          >
            Accept Terms
          </button>
        </div>
      </div>
    </BaseModal>
  );
}
