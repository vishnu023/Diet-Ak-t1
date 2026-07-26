import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MemberData } from "./types";

// Import visual and informational components
import BackgroundElements from "./components/BackgroundElements";
import Header from "./components/Header";
import Hero from "./components/Hero";
import StatsSection from "./components/StatsSection";
import HowItWorks from "./components/HowItWorks";
import Ecosystem from "./components/Ecosystem";
import SoftwarePreview from "./components/SoftwarePreview";
import ComparisonSection from "./components/ComparisonSection";

// Import onboarding-flow components
import { 
  SuccessView, 
  DesktopForm, 
  CorporateClinical 
} from "./components/OnboardingFlow";

// Import modals
import { 
  EnterpriseModal, 
  AdvisoryModal, 
  InvestorModal, 
  VisionModal,
  PrivacyModal,
  TermsModal
} from "./components/Modals";

export default function App() {
  const [registeredUser, setRegisteredUser] = useState<MemberData | null>(null);
  
  // Modal states
  const [showEnterprise, setShowEnterprise] = useState(false);
  const [showAdvisory, setShowAdvisory] = useState(false);
  const [showInvestor, setShowInvestor] = useState(false);
  const [showVision, setShowVision] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  // Read cached registration on mount
  useEffect(() => {
    const saved = localStorage.getItem("dietcraft_member_v1");
    if (saved) {
      try {
        setRegisteredUser(JSON.parse(saved));
      } catch (e) {
        console.error("Error reading cached registration", e);
      }
    }
  }, []);

  // Intercept hash-change to support privacy & terms modals out-of-the-box
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === "#privacy-modal") {
        setShowPrivacy(true);
      } else if (hash === "#terms-modal") {
        setShowTerms(true);
      }
    };
    
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange(); // check on load

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  // Handle successful registration
  const handleRegisterSuccess = (data: MemberData) => {
    setRegisteredUser(data);
    localStorage.setItem("dietcraft_member_v1", JSON.stringify(data));
    
    // Smooth scroll to waitlist response container
    setTimeout(() => {
      const el = document.getElementById("waitlist-anchor");
      el?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  // Clear registration to enroll another member
  const handleResetRegistration = () => {
    setRegisteredUser(null);
    localStorage.removeItem("dietcraft_member_v1");
  };

  return (
    <div className="relative min-h-screen text-dark selection:bg-brand-soft selection:text-brand font-sans bg-bg-base overflow-x-hidden">
      {/* Background Floating Elements & Ambient Lights */}
      <BackgroundElements />

      {/* Modal overlays rendered at top level */}
      <AnimatePresence>
        {showEnterprise && (
          <EnterpriseModal isOpen={showEnterprise} onClose={() => setShowEnterprise(false)} />
        )}
        {showAdvisory && (
          <AdvisoryModal isOpen={showAdvisory} onClose={() => setShowAdvisory(false)} />
        )}
        {showInvestor && (
          <InvestorModal isOpen={showInvestor} onClose={() => setShowInvestor(false)} />
        )}
        {showVision && (
          <VisionModal isOpen={showVision} onClose={() => setShowVision(false)} />
        )}
        {showPrivacy && (
          <PrivacyModal isOpen={showPrivacy} onClose={() => {
            setShowPrivacy(false);
            window.location.hash = ""; // reset hash
          }} />
        )}
        {showTerms && (
          <TermsModal isOpen={showTerms} onClose={() => {
            setShowTerms(false);
            window.location.hash = ""; // reset hash
          }} />
        )}
      </AnimatePresence>

      <div className="flex flex-col min-h-screen">
        {/* Header Navigation */}
        <Header />

        {/* Main Landing Sections */}
        <Hero onWatchVision={() => setShowVision(true)} />
        <StatsSection />
        <HowItWorks />
        <Ecosystem />
        <SoftwarePreview />
        <ComparisonSection />

        {/* Unified Registration section (Founding Member Waitlist) */}
        <section className="py-16 sm:py-24 px-4 sm:px-6 md:px-12 bg-white relative z-10" id="waitlist-anchor">
          <div className="max-w-7xl mx-auto">
            <AnimatePresence mode="wait">
              {registeredUser ? (
                <motion.div
                  key="success-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <SuccessView formData={registeredUser} onReset={handleResetRegistration} />
                </motion.div>
              ) : (
                <motion.div
                  key="form-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.6 }}
                >
                  <DesktopForm onSubmitSuccess={handleRegisterSuccess} />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>

        {/* Corporate clinical outreach footer */}
        <CorporateClinical
          onRequestDemo={() => setShowEnterprise(true)}
          onJoinAdvisory={() => setShowAdvisory(true)}
        />
      </div>
    </div>
  );
}
