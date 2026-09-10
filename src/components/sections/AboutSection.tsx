"use client";

import React from "react";
import Image from "next/image";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { STATS } from "@/data/stats";
import { Shield, Sparkles, Check, Users2, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section
      id="sobre"
      className="relative py-20 lg:py-28 bg-[#F9F8F4] text-[#1D300E] scroll-mt-20 overflow-hidden"
    >
      {/* Background Organic Gradients */}
      <div
        className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full bg-[#8DBB18]/08 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />

      <AgroContainer className="relative z-10">
        {/* Asymmetric Editorial 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Editorial Photo with Tech Pill Overlay (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-[#E5E5DC] shadow-[0_20px_48px_rgba(29,48,14,0.12)]">
              <Image
                src="/images/about-agro.jpg"
                alt="Agrônoma e produtor no campo analisando dados técnicos e lavoura saudável"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
              />

              {/* Gradient Bottom Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#1D300E]/80 via-transparent to-transparent pointer-events-none" />

              {/* Floating Badge on Photo */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 shadow-lg flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#5E8F0B] text-white shrink-0">
                  <Award className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xs font-montserrat font-bold text-[#1D300E]">
                    Compromisso Técnico
                  </span>
                  <span className="text-[11px] text-[#555A50]">
                    Assistência agronômica especializada em todas as etapas.
                  </span>
                </div>
              </div>
            </div>

            {/* Decorative Floating AgroLeaf Badge */}
            <div className="absolute -top-6 -left-6 z-20 hidden sm:block">
              <div className="p-3 rounded-2xl bg-white border border-[#E5E5DC] shadow-xl">
                <AgroLeaf size={48} animated={true} glow={true} />
              </div>
            </div>
          </div>

          {/* Right Column: Institutional Content & Key Indicators (7 cols) */}
          <div className="lg:col-span-7 flex flex-col gap-6 lg:gap-8">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-montserrat font-extrabold tracking-[0.2em] text-[#5E8F0B] uppercase">
                <Sparkles className="w-4 h-4 text-[#8DBB18]" />
                <span>SOBRE A AGROFORTE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-montserrat font-black uppercase tracking-tight text-[#1D300E] leading-[1.1]">
                FORÇA PARA QUEM FAZ O{" "}
                <span className="text-[#5E8F0B]">CAMPO CRESCER.</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 text-sm sm:text-base text-[#555A50] leading-relaxed font-sans">
              <p>
                A <strong>AGROFORTE</strong> nasceu com o propósito claro de conectar a ciência agrícola mais avançada à realidade prática do produtor rural brasileiro. Entendemos que cada hectare tem seu próprio potencial e exige decisões precisas.
              </p>
              <p>
                Trabalhamos com um portfólio completo que integra nutrição vegetal de alta absorção, bioproteção inteligente, sementes de alto vigor e tecnologias de telemetria no solo. Nosso compromisso é entregar mais segurança, produtividade e sustentabilidade econômica para o seu negócio.
              </p>
            </div>

            {/* Institutional Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat font-semibold text-[#1D300E]">
                <div className="p-1 rounded-full bg-[#5E8F0B]/10 text-[#5E8F0B]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Pesquisa e Desenvolvimento Próprios</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat font-semibold text-[#1D300E]">
                <div className="p-1 rounded-full bg-[#5E8F0B]/10 text-[#5E8F0B]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Fórmulas Adaptadas aos Biomas Brasileiros</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat font-semibold text-[#1D300E]">
                <div className="p-1 rounded-full bg-[#5E8F0B]/10 text-[#5E8F0B]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Assistência Técnica Consultiva</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-montserrat font-semibold text-[#1D300E]">
                <div className="p-1 rounded-full bg-[#5E8F0B]/10 text-[#5E8F0B]">
                  <Check className="w-4 h-4" />
                </div>
                <span>Rastreabilidade e Segurança de Calda</span>
              </div>
            </div>

            {/* Editable Indicators Matrix (Placeholders clearly tagged as per guidelines) */}
            <div className="pt-6 border-t border-[#E5E5DC]">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.id}
                    className="p-4 sm:p-5 rounded-2xl bg-white border border-[#E5E5DC] shadow-[0_4px_16px_rgba(29,48,14,0.04)] flex flex-col gap-1"
                  >
                    <span className="text-2xl sm:text-3xl font-montserrat font-black text-[#5E8F0B] tracking-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs font-montserrat font-bold text-[#1D300E]">
                      {stat.label}
                    </span>
                    <span className="text-[11px] text-[#555A50] leading-tight">
                      {stat.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AgroContainer>
    </section>
  );
}
