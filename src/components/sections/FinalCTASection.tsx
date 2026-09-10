"use client";

import React from "react";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroButton } from "@/components/ui/AgroButton";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { ArrowRight, PhoneCall, Sparkles, Shield } from "lucide-react";

interface FinalCTASectionProps {
  onOpenContact?: () => void;
}

export function FinalCTASection({ onOpenContact }: FinalCTASectionProps) {
  return (
    <section className="relative py-20 lg:py-28 bg-[#1D300E] text-white overflow-hidden border-t border-[#294A0D]">
      {/* Background Gradients & Glows */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#294A0D] via-[#1D300E] to-[#1D300E] opacity-90 pointer-events-none" />
      <div className="absolute -top-32 right-1/4 w-[500px] h-[500px] rounded-full bg-[#8DBB18]/12 blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-32 left-10 w-[400px] h-[400px] rounded-full bg-[#5E8F0B]/15 blur-[120px] pointer-events-none" />

      {/* Subtle Discrete Grid Overlay */}
      <div
        className="absolute inset-0 opacity-[0.035] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#8DBB18 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      <AgroContainer className="relative z-10">
        <div className="relative rounded-[32px] bg-gradient-to-b from-[#294A0D]/70 to-[#1D300E]/90 border border-[#8DBB18]/30 p-8 sm:p-12 lg:p-16 shadow-[0_24px_60px_rgba(0,0,0,0.4)] overflow-hidden">
          {/* Large Scale Signature AgroLeaf Background Watermark / Accent */}
          <div className="absolute -bottom-16 -right-16 lg:bottom-0 lg:right-10 opacity-20 pointer-events-none select-none">
            <AgroLeaf size={380} animated={true} glow={true} />
          </div>

          <div className="relative z-10 max-w-2xl flex flex-col gap-6">
            {/* Top Tag */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1D300E] border border-[#8DBB18]/40 text-xs font-montserrat font-bold tracking-[0.2em] text-[#8DBB18] uppercase w-fit">
              <Sparkles className="w-3.5 h-3.5" />
              <span>TRANSFORME SUA SAFRA</span>
            </div>

            {/* Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black uppercase tracking-tight text-white leading-tight">
              TECNOLOGIA PARA UM{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#8DBB18] via-[#a3d820] to-[#5E8F0B]">
                CAMPO MAIS FORTE.
              </span>
            </h2>

            {/* Text */}
            <p className="text-sm sm:text-base lg:text-lg text-white/80 font-sans leading-relaxed">
              Conheça soluções desenvolvidas para levar mais eficiência, confiança e resultado para o seu negócio agrícola. Converse com nossos consultores técnicos.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
              <AgroButton
                variant="primary"
                size="lg"
                onClick={onOpenContact ? onOpenContact : () => {
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Conheça a Agroforte
              </AgroButton>

              <AgroButton
                variant="outline-light"
                size="lg"
                onClick={onOpenContact ? onOpenContact : () => {
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                leftIcon={<PhoneCall className="w-4 h-4 text-[#8DBB18]" />}
              >
                Fale com Nossos Especialistas
              </AgroButton>
            </div>
          </div>
        </div>
      </AgroContainer>
    </section>
  );
}
