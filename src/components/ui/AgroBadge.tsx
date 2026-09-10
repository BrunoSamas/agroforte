import React from "react";
import { cn } from "@/lib/utils";

interface AgroBadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "green" | "lime" | "tech" | "soil" | "dark" | "outline";
  size?: "sm" | "md";
  dot?: boolean;
}

export function AgroBadge({
  children,
  variant = "default",
  size = "md",
  dot = false,
  className,
  ...props
}: AgroBadgeProps) {
  const sizeStyles = {
    sm: "text-[10px] px-2.5 py-0.5 tracking-wider",
    md: "text-xs px-3 py-1 tracking-wide",
  };

  const variantStyles = {
    default: "bg-[#F9F8F4] text-[#555A50] border border-[#E5E5DC]",
    green: "bg-[#5E8F0B]/10 text-[#294A0D] border border-[#5E8F0B]/20 font-semibold",
    lime: "bg-[#8DBB18]/15 text-[#1D300E] border border-[#8DBB18]/30 font-semibold",
    tech: "bg-[#403568]/10 text-[#403568] border border-[#403568]/20 font-semibold",
    soil: "bg-[#654316]/10 text-[#654316] border border-[#654316]/20 font-semibold",
    dark: "bg-[#1D300E] text-[#F9F8F4] border border-[#294A0D]",
    outline: "bg-transparent text-[#555A50] border border-[#E5E5DC]",
  };

  const dotColors = {
    default: "bg-[#555A50]",
    green: "bg-[#5E8F0B]",
    lime: "bg-[#8DBB18]",
    tech: "bg-[#403568]",
    soil: "bg-[#654316]",
    dark: "bg-[#8DBB18]",
    outline: "bg-[#5E8F0B]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full uppercase font-montserrat font-bold select-none",
        sizeStyles[size],
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full shrink-0", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </span>
  );
}
