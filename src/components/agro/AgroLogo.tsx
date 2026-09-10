import React from "react";
import Link from "next/link";
import { AgroLeaf } from "./AgroLeaf";
import { cn } from "@/lib/utils";

interface AgroLogoProps {
  className?: string;
  variant?: "light" | "dark" | "monochrome";
  size?: "sm" | "md" | "lg";
  withTagline?: boolean;
}

export function AgroLogo({
  className,
  variant = "light",
  size = "md",
  withTagline = false,
}: AgroLogoProps) {
  const leafSize = size === "sm" ? 32 : size === "lg" ? 48 : 40;

  return (
    <Link
      href="/"
      className={cn(
        "group inline-flex items-center gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBB18] rounded-lg transition-transform duration-300 hover:scale-[1.02]",
        className
      )}
      aria-label="Agroforte - Página Inicial"
    >
      <AgroLeaf size={leafSize} animated={true} glow={true} />

      <div className="flex flex-col">
        <div className="flex items-baseline tracking-tight font-extrabold font-montserrat">
          <span
            className={cn(
              "text-xl sm:text-2xl tracking-wider transition-colors duration-300",
              variant === "dark" || variant === "monochrome"
                ? "text-[#1D300E]"
                : "text-white group-hover:text-[#F9F8F4]"
            )}
          >
            AGRO
          </span>
          <span
            className={cn(
              "text-xl sm:text-2xl font-black tracking-wider transition-colors duration-300",
              variant === "dark" || variant === "monochrome"
                ? "text-[#5E8F0B]"
                : "text-[#8DBB18] group-hover:text-[#a0ce24]"
            )}
          >
            FORTE
          </span>
        </div>

        {withTagline && (
          <span
            className={cn(
              "text-[10px] uppercase font-semibold tracking-[0.25em] font-sans -mt-1",
              variant === "dark" ? "text-[#555A50]" : "text-[#8DBB18]/90"
            )}
          >
            Tecnologia Agrícola
          </span>
        )}
      </div>
    </Link>
  );
}
