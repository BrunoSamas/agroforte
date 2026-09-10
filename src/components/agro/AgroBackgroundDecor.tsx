import React from "react";
import { cn } from "@/lib/utils";

interface AgroBackgroundDecorProps {
  className?: string;
  variant?: "light" | "dark" | "mixed";
  withGrid?: boolean;
}

export function AgroBackgroundDecor({
  className,
  variant = "light",
  withGrid = true,
}: AgroBackgroundDecorProps) {
  return (
    <div
      className={cn("absolute inset-0 pointer-events-none overflow-hidden select-none -z-10", className)}
      aria-hidden="true"
    >
      {/* Subtle Ambient Radial Light Points */}
      {variant === "dark" ? (
        <>
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#8DBB18]/10 blur-[120px]" />
          <div className="absolute top-1/2 -left-48 w-[500px] h-[500px] rounded-full bg-[#5E8F0B]/12 blur-[140px]" />
          <div className="absolute -bottom-32 right-1/4 w-[450px] h-[450px] rounded-full bg-[#294A0D]/30 blur-[100px]" />
        </>
      ) : (
        <>
          <div className="absolute -top-24 right-10 w-[550px] h-[550px] rounded-full bg-[#8DBB18]/08 blur-[100px]" />
          <div className="absolute top-1/3 -left-32 w-[480px] h-[480px] rounded-full bg-[#5E8F0B]/06 blur-[120px]" />
          <div className="absolute bottom-10 right-1/3 w-[600px] h-[600px] rounded-full bg-[#8DBB18]/05 blur-[140px]" />
        </>
      )}

      {/* Discrete Tech Matrix Pattern */}
      {withGrid && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.035]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="agro-subtle-grid"
              width="48"
              height="48"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="24" cy="24" r="1" fill={variant === "dark" ? "#8DBB18" : "#1D300E"} />
              <path
                d="M 48 0 L 0 0 0 48"
                fill="none"
                stroke={variant === "dark" ? "#8DBB18" : "#1D300E"}
                strokeWidth="0.5"
                strokeDasharray="2 4"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#agro-subtle-grid)" />
        </svg>
      )}
    </div>
  );
}
