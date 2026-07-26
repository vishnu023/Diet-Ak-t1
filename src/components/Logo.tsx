import React from "react";

interface LogoProps {
  variant?: "full" | "horizontal" | "icon";
  className?: string;
  iconClassName?: string;
}

export function LogoIcon({ className = "w-12 h-12" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* 1. The Serif Capital 'D' in Forest Green */}
      {/* Left thick vertical stem with elegant top and bottom serifs */}
      <path
        d="M 170,110 h 55 v 10 h -15 V 240 h 15 v 10 h -55 v -10 h 15 V 120 h -15 Z"
        fill="currentColor"
        className="text-brand"
      />
      {/* Curved loop of the 'D', beautifully weighted (thick in the middle) */}
      <path
        d="M 210,110 c 65,0 95,35 95,75 c 0,40 -30,75 -95,75 v -20 c 40,0 65,-25 65,-55 c 0,-30 -25,-55 -65,-55 Z"
        fill="currentColor"
        className="text-brand"
      />

      {/* 2. The Outer Crescent Bowl in Forest Green */}
      <path
        d="M 175,235 C 175,305 325,305 325,235 C 315,290 185,290 175,235 Z"
        fill="currentColor"
        className="text-brand"
      />

      {/* 3. The Inner Mortar/Bowl Fill in Fresh Leaf Green */}
      <path
        d="M 190,240 C 190,285 310,285 310,240 Z"
        fill="#7ba142"
      />

      {/* 4. Left Leaf - angled up-left, organic almond shape */}
      <path
        d="M 250,235 C 230,230 215,210 215,195 C 230,195 245,215 250,235 Z"
        fill="#7ba142"
      />

      {/* 5. Right Leaf - larger, angled up-right, with white vein */}
      <path
        d="M 250,235 C 255,210 270,190 295,175 C 290,195 275,220 250,235 Z"
        fill="#5a7a2e"
      />
      {/* Vein of the right leaf */}
      <path
        d="M 250,235 Q 272,205 295,175"
        stroke="#fbf8f3"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function Logo({ variant = "horizontal", className = "", iconClassName = "" }: LogoProps) {
  if (variant === "icon") {
    return <LogoIcon className={className || "w-12 h-12"} />;
  }

  if (variant === "horizontal") {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <LogoIcon className={iconClassName || "w-10 h-10"} />
        <div className="flex flex-col text-left">
          <span className="font-display font-bold text-xl sm:text-2xl text-brand leading-none tracking-tight flex items-baseline">
            Dietcraft
            <span className="font-script text-base sm:text-lg text-[#7ba142] ml-0.5 font-medium italic">.life</span>
          </span>
          <span className="text-[7px] sm:text-[8px] font-mono tracking-[0.2em] text-brand/60 uppercase font-semibold leading-none mt-1">
            CRAFT YOUR DIET. ELEVATE YOUR LIFE.
          </span>
        </div>
      </div>
    );
  }

  // Full Stacked Logo (Centered, elegant logo lockup)
  return (
    <div className={`flex flex-col items-center text-center ${className}`}>
      <LogoIcon className={iconClassName || "w-32 h-32 md:w-40 md:h-40"} />
      
      {/* Brand Name */}
      <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand mt-4 tracking-tight flex items-baseline justify-center">
        Dietcraft
        <span className="font-script text-2xl sm:text-3xl text-[#7ba142] ml-0.5 font-medium italic">.life</span>
      </h1>
      
      {/* Elegant tagline divider */}
      <div className="flex items-center gap-3 mt-3 w-full max-w-xs">
        <div className="h-[1px] bg-brand/10 flex-1" />
        <span className="text-[8px] sm:text-[9px] font-mono tracking-[0.25em] text-brand/70 uppercase font-bold whitespace-nowrap">
          CRAFT YOUR DIET. ELEVATE YOUR LIFE.
        </span>
        <div className="h-[1px] bg-brand/10 flex-1" />
      </div>
    </div>
  );
}
