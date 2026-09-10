"use client";

import React from "react";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { BENEFITS } from "@/data/benefits";
import { Cpu, ShieldCheck, Lightbulb, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function DifferentialsSection() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Cpu":
        return <Cpu className="w-6 h-6" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6" />;
      case "Lightbulb":
        return <Lightbulb className="w-6 h-6" />;
      case "TrendingUp":
        return <TrendingUp className="w-6 h-6" />;
      default:
        return <Sparkles className="w-6 h-6" />;
    }
  };

  return (
    <section
      id="diferenciais"
      className="relative py-20 lg:py-28 bg-[#1d2908] text-white overflow-hidden scroll-mt-20 border-t border-[#3c5310]"
    >
      {/* Subtle Background Glows */}
      <div className="absolute -top-40 right-10 w-[600px] h-[600px] rounded-full bg-[#84dc00]/10 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 left-10 w-[500px] h-[500px] rounded-full bg-[#527316]/12 blur-[120px] pointer-events-none" />

      {/* Discrete Connecting Lines Grid */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#84dc00 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <AgroContainer className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto gap-3 pb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#3c5310] border border-[#84dc00]/30 text-xs font-montserrat font-bold tracking-[0.2em] text-[#84dc00] uppercase">
            <AgroLeaf size={16} animated={false} glow={false} />
            <span>EXCELÊNCIA AGRONÔMICA</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black uppercase tracking-tight text-white">
            POR QUE ESCOLHER A{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84dc00] to-[#527316]">
              AGROFORTE
            </span>
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-sans leading-relaxed">
            Unimos o conhecimento do campo às inovações biológicas e tecnológicas para proporcionar safras com rentabilidade e estabilidade incomparáveis.
          </p>
        </div>

        {/* Dynamic Connected Process Layout */}
        <div className="relative">
          {/* Subtle Horizontal Connecting Tech Rail (Desktop Only) */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-gradient-to-r from-[#84dc00]/20 via-[#527316]/60 to-[#84dc00]/20 -translate-y-8 z-0 pointer-events-none" />

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {BENEFITS.map((benefit, index) => (
              <div
                key={benefit.id}
                className="group relative flex flex-col justify-between p-6 sm:p-7 rounded-[20px] bg-[#3c5310]/50 backdrop-blur-md border border-[#3c5310] hover:border-[#84dc00]/60 transition-all duration-400 hover:-translate-y-2 shadow-[0_12px_32px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_40px_rgba(141,187,24,0.15)] overflow-hidden"
              >
                {/* Background Subtle Gradient Reveal on Hover */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#84dc00]/08 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                {/* Top Number & Outline Icon */}
                <div className="flex items-center justify-between gap-4 pb-6">
                  <span className="font-montserrat font-black text-2xl sm:text-3xl text-white/20 group-hover:text-[#84dc00] transition-colors">
                    {benefit.number}
                  </span>

                  <div className="p-3 rounded-2xl bg-[#1d2908] border border-[#84dc00]/30 text-[#84dc00] group-hover:bg-[#84dc00] group-hover:text-[#1d2908] transition-all duration-300 shadow-sm">
                    {getIcon(benefit.iconName)}
                  </div>
                </div>

                {/* Title and Tagline */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xl font-montserrat font-extrabold text-white tracking-wide">
                    {benefit.title}
                  </h3>
                  <span className="text-xs font-montserrat font-semibold text-[#84dc00] uppercase tracking-wider">
                    {benefit.tagline}
                  </span>
                  <p className="mt-2 text-xs sm:text-sm text-white/75 leading-relaxed font-sans">
                    {benefit.description}
                  </p>
                </div>

                {/* Bottom Active Energy Indicator Line */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-white/50 group-hover:text-white/80 transition-colors">
                  <span className="font-mono uppercase tracking-wider">Agroforte Tech</span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#84dc00]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </AgroContainer>
    </section>
  );
}
