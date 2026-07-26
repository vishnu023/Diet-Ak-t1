import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface FloatingElement {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  type: "plus" | "signal" | "circle";
}

export default function BackgroundElements() {
  const [elements, setElements] = useState<FloatingElement[]>([]);

  useEffect(() => {
    const list = Array.from({ length: 18 }).map((_, index) => ({
      id: index,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 8 + 4,
      duration: Math.random() * 20 + 20,
      delay: Math.random() * -20,
      type: index % 3 === 0 ? "plus" : index % 3 === 1 ? "signal" : "circle" as const,
    }));
    setElements(list);
  }, []);

  return (
    <div id="bg-elements-root" className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Soft aesthetic background gradient blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-brand-soft/25 blur-[120px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-brand-highlight/15 blur-[150px]" />
      <div className="absolute top-[40%] right-[10%] w-[35vw] h-[35vw] rounded-full bg-accent/5 blur-[100px]" />
      
      {/* Floating biometric indicators */}
      {elements.map((el) => (
        <motion.div
          key={el.id}
          className="absolute text-brand/10 select-none pointer-events-none"
          style={{
            left: `${el.x}%`,
            top: `${el.y}%`,
            width: el.size,
            height: el.size,
          }}
          animate={{
            y: ["0px", "-40px", "0px"],
            x: ["0px", "20px", "0px"],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: "easeInOut",
          }}
        >
          {el.type === "plus" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
              <path d="M12 5v14M5 12h14" />
            </svg>
          ) : el.type === "signal" ? (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full animate-pulse">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
            </svg>
          ) : (
            <div className="w-2 h-2 rounded-full bg-brand/10" />
          )}
        </motion.div>
      ))}
      
      {/* Subtle blueprint grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.012] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(var(--color-brand) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />
    </div>
  );
}
