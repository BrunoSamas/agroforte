import React from "react";
import { cn } from "@/lib/utils";

interface AgroCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "elevated" | "dark" | "glass";
  hoverEffect?: boolean;
}

export function AgroCard({
  children,
  variant = "default",
  hoverEffect = true,
  className,
  ...props
}: AgroCardProps) {
  const baseStyles =
    "relative rounded-[16px] transition-all duration-400 ease-out overflow-hidden";

  const variantStyles = {
    default:
      "bg-white border border-[#E5E5DC] shadow-[0_8px_24px_rgba(29,48,14,0.06)]",
    elevated:
      "bg-white border border-[#E5E5DC] shadow-[0_12px_32px_rgba(29,48,14,0.1)]",
    dark:
      "bg-[#1d2908] border border-[#3c5310] text-white shadow-[0_12px_32px_rgba(0,0,0,0.3)]",
    glass:
      "bg-white/80 backdrop-blur-md border border-[#E5E5DC]/80 shadow-[0_8px_24px_rgba(29,48,14,0.06)]",
  };

  const hoverStyles = hoverEffect
    ? "hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,48,14,0.14)] hover:border-[#527316]/40"
    : "";

  return (
    <div
      className={cn(baseStyles, variantStyles[variant], hoverStyles, className)}
      {...props}
    >
      {children}
    </div>
  );
}
