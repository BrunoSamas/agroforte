"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AgroLeafProps {
  className?: string;
  size?: number | string;
  animated?: boolean;
  glow?: boolean;
  variant?: "solid" | "outline" | "gradient" | "glass";
}

export function AgroLeaf({
  className,
  size = 48,
  animated = true,
  glow = true,
  variant = "gradient",
}: AgroLeafProps) {
  const uniqueId = React.useId();
  const gradientId = `leaf-grad-${uniqueId.replace(/:/g, "")}`;
  const pulseGradId = `pulse-grad-${uniqueId.replace(/:/g, "")}`;

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center shrink-0 select-none",
        animated && "transition-transform duration-500 hover:scale-105",
        className
      )}
      style={{ width: size, height: size }}
      aria-hidden="true"
    >
      {/* Background Subtle Ambient Glow */}
      {glow && (
        <div
          className={cn(
            "absolute inset-0 rounded-full blur-xl pointer-events-none opacity-40 transition-opacity",
            animated && "animate-agro-energy"
          )}
          style={{
            background: "radial-gradient(circle, rgba(141,187,24,0.45) 0%, rgba(94,143,11,0.2) 60%, transparent 80%)",
          }}
        />
      )}

      <svg
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full relative z-10 overflow-visible"
      >
        <defs>
          {/* Main Leaf Gradient Flow */}
          <linearGradient
            id={gradientId}
            x1="15%"
            y1="10%"
            x2="85%"
            y2="90%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#84dc00">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#84dc00; #527316; #3c5310; #84dc00"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="50%" stopColor="#527316">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#527316; #3c5310; #84dc00; #527316"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
            <stop offset="100%" stopColor="#3c5310">
              {animated && (
                <animate
                  attributeName="stop-color"
                  values="#3c5310; #84dc00; #527316; #3c5310"
                  dur="5s"
                  repeatCount="indefinite"
                />
              )}
            </stop>
          </linearGradient>

          {/* Living Energy Vein Flow */}
          <linearGradient
            id={pulseGradId}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#84dc00" stopOpacity="0.9" />
            <stop offset="50%" stopColor="#FFFFFF" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#527316" stopOpacity="0.4" />
          </linearGradient>
        </defs>

        {/* Outer Shadow Depth Layer */}
        <path
          d="M50 8C28 24 16 52 28 78C36 94 62 98 78 84C94 68 96 38 78 20C68 10 58 6 50 8Z"
          fill="rgba(29, 48, 14, 0.25)"
          transform="translate(1, 2)"
        />

        {/* Primary Leaf Organic Body */}
        {variant === "outline" ? (
          <path
            d="M50 8C28 24 16 52 28 78C36 94 62 98 78 84C94 68 96 38 78 20C68 10 58 6 50 8Z"
            stroke={`url(#${gradientId})`}
            strokeWidth="3.5"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ) : (
          <path
            d="M50 8C28 24 16 52 28 78C36 94 62 98 78 84C94 68 96 38 78 20C68 10 58 6 50 8Z"
            fill={`url(#${gradientId})`}
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.2"
          />
        )}

        {/* Secondary Inner Organic Blade / Dimension */}
        <path
          d="M50 8C40 25 36 48 44 68C48 78 58 84 66 78C78 68 84 48 74 28C68 18 58 10 50 8Z"
          fill="rgba(255, 255, 255, 0.12)"
        />

        {/* Central Organic Nerve / Energy Vein */}
        <path
          d="M50 14C46 36 48 58 64 82"
          stroke={`url(#${pulseGradId})`}
          strokeWidth="2.4"
          strokeLinecap="round"
          className={animated ? "animate-pulse" : ""}
        />

        {/* Secondary Lateral Veins */}
        <path
          d="M48 34C38 32 32 38 30 42"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M49 46C41 47 36 54 34 60"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M52 38C62 36 68 40 72 44"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M55 52C65 52 70 58 74 64"
          stroke="rgba(255, 255, 255, 0.35)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />

        {/* Bio-Tech Energy Node Dots */}
        <circle cx="50" cy="14" r="2.2" fill="#84dc00" />
        <circle cx="64" cy="82" r="2" fill="#527316" />
      </svg>
    </div>
  );
}
