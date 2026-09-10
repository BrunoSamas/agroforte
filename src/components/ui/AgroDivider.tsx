import React from "react";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { cn } from "@/lib/utils";

interface AgroDividerProps {
  className?: string;
  withLeaf?: boolean;
  leafSize?: number;
  variant?: "light" | "dark";
}

export function AgroDivider({
  className,
  withLeaf = true,
  leafSize = 24,
  variant = "light",
}: AgroDividerProps) {
  const lineClass =
    variant === "dark"
      ? "from-transparent via-[#3c5310] to-transparent"
      : "from-transparent via-[#E5E5DC] to-transparent";

  return (
    <div
      className={cn(
        "relative w-full flex items-center justify-center my-8 md:my-12 select-none",
        className
      )}
      aria-hidden="true"
    >
      <div className={cn("w-full h-px bg-gradient-to-r", lineClass)} />

      {withLeaf && (
        <div className="absolute px-4 bg-inherit flex items-center justify-center">
          <AgroLeaf size={leafSize} animated={false} glow={false} />
        </div>
      )}
    </div>
  );
}
