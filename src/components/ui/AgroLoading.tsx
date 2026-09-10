import React from "react";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { cn } from "@/lib/utils";

interface AgroLoadingProps {
  className?: string;
  message?: string;
  fullScreen?: boolean;
}

export function AgroLoading({
  className,
  message = "Carregando soluções...",
  fullScreen = false,
}: AgroLoadingProps) {
  const content = (
    <div className="flex flex-col items-center justify-center gap-6 text-center">
      <div className="relative">
        <AgroLeaf size={72} animated={true} glow={true} />
        {/* Subtle circular pulse wave */}
        <div className="absolute -inset-4 rounded-full border border-[#84dc00]/30 animate-ping opacity-30 pointer-events-none" />
      </div>

      <div className="flex flex-col items-center gap-1.5">
        <p className="font-montserrat font-semibold tracking-wider text-sm text-[#F9F8F4]">
          {message}
        </p>
        <span className="text-[11px] text-[#84dc00] uppercase tracking-widest font-mono">
          AGROFORTE TECNOLOGIA
        </span>
      </div>
    </div>
  );

  if (fullScreen) {
    return (
      <div
        className={cn(
          "fixed inset-0 z-50 flex items-center justify-center bg-[#1d2908]/95 backdrop-blur-md",
          className
        )}
      >
        {content}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "w-full py-16 flex items-center justify-center bg-[#1d2908] rounded-[20px] border border-[#3c5310]",
        className
      )}
    >
      {content}
    </div>
  );
}
