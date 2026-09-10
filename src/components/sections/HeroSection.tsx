"use client";

import React from "react";
import Image from "next/image";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroButton } from "@/components/ui/AgroButton";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { AgroBackgroundDecor } from "@/components/agro/AgroBackgroundDecor";
import { ArrowRight, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";

interface HeroSectionProps {
  onOpenContact?: () => void;
}

export function HeroSection({ onOpenContact }: HeroSectionProps) {
  const scrollToProducts = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.getElementById("produtos");
    if (target) {
      const yOffset = -80;
      const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92svh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 lg:pt-28 lg:pb-20 overflow-hidden bg-[#1d2908] text-white"
    >
      {/* Ambient background decoration with tech matrix and green glows */}
      <AgroBackgroundDecor variant="dark" withGrid={true} />

      {/* Hero Ambient Background Radial Gradients */}
      <div className="absolute inset-0 bg-agro-dark-radial pointer-events-none" />

      <AgroContainer className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[calc(85svh-6rem)]">
          {/* LEFT COLUMN: Narrative & CTAs (55% on desktop / 7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start gap-6 lg:gap-8 z-20">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#3c5310]/90 border border-[#84dc00]/40 shadow-sm backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#84dc00] animate-ping" />
              <span className="text-xs font-montserrat font-extrabold tracking-[0.25em] text-[#84dc00] uppercase">
                AGROFORTE
              </span>
              <span className="text-white/40">|</span>
              <span className="text-[11px] text-white/80 font-sans tracking-wide">
                Agronegócio de Alta Tecnologia
              </span>
            </div>

            {/* Main Headline */}
            <div className="flex flex-col gap-2">
              <h1 className="text-4xl sm:text-5xl lg:text-[58px] xl:text-[64px] font-montserrat font-black leading-[1.05] tracking-tight text-white uppercase drop-shadow-md">
                TECNOLOGIA QUE{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#84dc00] via-[#a3d820] to-[#527316]">
                  FORTALECE
                </span>{" "}
                O CAMPO.
              </h1>
            </div>

            {/* Subtitle / Paragraph */}
            <p className="text-base sm:text-lg lg:text-xl text-white/80 font-sans font-normal leading-relaxed max-w-2xl">
              Soluções desenvolvidas para unir tecnologia, produtividade e
              confiança em cada etapa do agronegócio brasileiro.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto pt-2">
              <AgroButton
                variant="primary"
                size="lg"
                href="#produtos"
                onClick={scrollToProducts}
                rightIcon={<ArrowRight className="w-4 h-4" />}
              >
                Conheça Nossos Produtos
              </AgroButton>

              <AgroButton
                variant="outline-light"
                size="lg"
                onClick={onOpenContact ? onOpenContact : () => {
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }}
                leftIcon={<MessageSquare className="w-4 h-4 text-[#84dc00]" />}
              >
                Fale com a Agroforte
              </AgroButton>
            </div>

            {/* Key Micro-indicators */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-3 gap-6 border-t border-white/10 w-full max-w-xl text-xs sm:text-sm">
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-[#84dc00] text-base sm:text-lg">
                  100% Agro
                </span>
                <span className="text-white/60 text-xs">Foco no Produtor</span>
              </div>
              <div className="flex flex-col">
                <span className="font-montserrat font-bold text-white text-base sm:text-lg">
                  Biotecnologia
                </span>
                <span className="text-white/60 text-xs">Inovação Científica</span>
              </div>
              <div className="flex flex-col col-span-2 sm:col-span-1">
                <span className="font-montserrat font-bold text-[#84dc00] text-base sm:text-lg">
                  Alta Precisão
                </span>
                <span className="text-white/60 text-xs">Eficiência em Campo</span>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN: Premium Integrated Visual Composition with Organic Mask (45% / 5 cols) */}
          <div className="lg:col-span-5 relative flex items-center justify-center w-full">
            <div className="relative w-full aspect-square max-w-[480px] lg:max-w-none flex items-center justify-center">
              {/* Outer Energy Pulse Ring */}
              <div className="absolute inset-0 rounded-full border border-[#84dc00]/20 animate-spin" style={{ animationDuration: "25s" }} />

              {/* Organic Visual Frame with Agricultural Photo and Floating Energy Elements */}
              <div className="relative w-[90%] aspect-square rounded-[32px] overflow-hidden border border-[#84dc00]/30 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <Image
                  src="/images/hero-agro.jpg"
                  alt="Agricultura de precisão e lavoura verde exuberante Agroforte"
                  fill
                  priority
                  sizes="(max-width: 768px) 90vw, 45vw"
                  className="object-cover scale-105 transition-transform duration-1000 hover:scale-110"
                />

                {/* Organic Tech Overlay Gradients */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1d2908]/90 via-[#1d2908]/30 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1d2908]/50 via-transparent to-[#84dc00]/15" />

                {/* Subtle Discrete Grid Lines Overlay */}
                <div
                  className="absolute inset-0 opacity-20 pointer-events-none"
                  style={{
                    backgroundImage: "linear-gradient(to right, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.1) 1px, transparent 1px)",
                    backgroundSize: "32px 32px",
                  }}
                />

                {/* Floating Glass Floating Pill inside Visual */}
                <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-[#1d2908]/85 backdrop-blur-md border border-white/15 flex items-center gap-3.5 shadow-lg">
                  <div className="p-2.5 rounded-xl bg-[#3c5310] border border-[#84dc00]/40 shrink-0">
                    <Sparkles className="w-5 h-5 text-[#84dc00]" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs font-montserrat font-bold text-white">
                      Produtividade e Alta Tecnologia
                    </span>
                    <span className="text-[11px] text-white/70">
                      Nutrição, proteção e inteligência para cada hectare.
                    </span>
                  </div>
                </div>
              </div>

              {/* Central Signature AgroLeaf with Living Energy Flow Orbiting over composition */}
              <div className="absolute -top-6 -right-6 lg:-top-8 lg:-right-8 z-30 drop-shadow-2xl">
                <div className="p-3.5 rounded-full bg-[#1d2908]/90 backdrop-blur-md border border-[#84dc00]/50 shadow-[0_12px_32px_rgba(0,0,0,0.4)]">
                  <AgroLeaf size={84} animated={true} glow={true} />
                </div>
              </div>

              {/* Bottom Left Floating Tech Badge */}
              <div className="absolute -bottom-4 -left-4 lg:-bottom-6 lg:-left-6 z-30">
                <div className="px-4 py-2.5 rounded-2xl bg-[#1d2908]/90 backdrop-blur-md border border-[#84dc00]/40 shadow-xl flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#84dc00]" />
                  <span className="text-xs font-montserrat font-bold uppercase tracking-wider text-white">
                    Safra de Alta Performance
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AgroContainer>
    </section>
  );
}
