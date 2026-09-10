import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface AgroButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "outline-light" | "ghost" | "tech";
  size?: "sm" | "md" | "lg";
  href?: string;
  isExternal?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
}

export function AgroButton({
  variant = "primary",
  size = "md",
  href,
  isExternal = false,
  leftIcon,
  rightIcon,
  children,
  className,
  ...props
}: AgroButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-montserrat font-bold tracking-wider uppercase transition-all duration-300 rounded-full select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#84dc00] focus-visible:ring-offset-2 active:scale-[0.98]";

  const sizeStyles = {
    sm: "text-xs px-5 py-2.5 gap-2",
    md: "text-xs sm:text-sm px-7 py-3.5 gap-2.5",
    lg: "text-sm sm:text-base px-9 py-4 gap-3",
  };

  const variantStyles = {
    primary:
      "bg-gradient-to-r from-[#84dc00] via-[#527316] to-[#3c5310] text-white shadow-md hover:shadow-[0_8px_24px_rgba(94,143,11,0.35)] hover:brightness-105 border border-white/20",
    secondary:
      "bg-[#1d2908] text-[#F9F8F4] hover:bg-[#3c5310] border border-[#3c5310] shadow-sm hover:shadow-md",
    outline:
      "bg-transparent text-[#1d2908] border-2 border-[#1d2908]/20 hover:border-[#527316] hover:text-[#527316] hover:bg-[#527316]/05",
    "outline-light":
      "bg-transparent text-white border-2 border-white/30 hover:border-[#84dc00] hover:text-[#84dc00] hover:bg-white/05",
    ghost:
      "bg-transparent text-[#1d2908] hover:bg-[#527316]/10 hover:text-[#527316]",
    tech:
      "bg-[#403568] text-white hover:bg-[#403568]/90 shadow-md hover:shadow-[0_8px_24px_rgba(64,53,104,0.35)] border border-white/15",
  };

  const content = (
    <>
      {leftIcon && <span className="shrink-0 transition-transform duration-300 group-hover:-translate-x-0.5">{leftIcon}</span>}
      <span>{children}</span>
      {rightIcon && <span className="shrink-0 transition-transform duration-300 group-hover:translate-x-1">{rightIcon}</span>}
    </>
  );

  if (href) {
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
        >
          {content}
        </a>
      );
    }
    return (
      <Link
        href={href}
        className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={cn("group", baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {content}
    </button>
  );
}
