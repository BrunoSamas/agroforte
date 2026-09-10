"use client";

import React from "react";
import Link from "next/link";
import { AgroLogo } from "@/components/agro/AgroLogo";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { AgroContainer } from "@/components/ui/AgroContainer";
import {
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Leaf,
  Layers,
  Send,
} from "lucide-react";

export function AgroFooter() {
  const currentYear = new Date().getFullYear();

  const productCategories = [
    { label: "Fertilizantes de Alta Performance", href: "#produtos" },
    { label: "Bioestimulantes & Nutrição Foliar", href: "#produtos" },
    { label: "Defensivos & Adjuvantes Especiais", href: "#produtos" },
    { label: "Sementes Híbridas Certificadas", href: "#produtos" },
    { label: "Telemetria & Tecnologia IoT de Solo", href: "#produtos" },
    { label: "Condicionadores Húmicos e Biologia", href: "#produtos" },
  ];

  const quickLinks = [
    { label: "Sobre a Agroforte", href: "#sobre" },
    { label: "Nossos Diferenciais", href: "#diferenciais" },
    { label: "Catálogo Técnico", href: "#produtos" },
    { label: "Fale com um Especialista", href: "#contato" },
    { label: "Política de Privacidade", href: "#" },
    { label: "Termos de Uso", href: "#" },
  ];

  return (
    <footer className="relative bg-[#1d2908] text-white pt-16 md:pt-24 pb-12 overflow-hidden border-t border-[#3c5310]">
      {/* Background Ambient Glows & Watermark Leaf */}
      <div
        className="absolute -bottom-24 -right-24 w-[400px] h-[400px] rounded-full bg-[#84dc00]/08 blur-[120px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-12 left-1/4 w-[350px] h-[350px] rounded-full bg-[#527316]/06 blur-[100px] pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute -top-16 -left-16 opacity-5 pointer-events-none select-none"
        aria-hidden="true"
      >
        <AgroLeaf size={320} animated={false} glow={false} />
      </div>

      <AgroContainer>
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 pb-16 border-b border-[#3c5310]/80 relative z-10">
          {/* Col 1: Brand & Statement (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <AgroLogo variant="light" size="lg" withTagline={true} />

            <p className="text-sm text-white/75 leading-relaxed font-sans max-w-sm">
              Soluções integradas desenvolvidas para unir biotecnologia,
              produtividade e confiança em cada etapa do ciclo agrícola.
            </p>

            {/* Badges of trust */}
            <div className="flex flex-wrap gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-montserrat font-medium bg-[#3c5310] text-[#84dc00] border border-[#84dc00]/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Qualidade Certificada
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-montserrat font-medium bg-[#3c5310] text-[#84dc00] border border-[#84dc00]/30">
                <Leaf className="w-3.5 h-3.5" />
                Sustentabilidade
              </span>
            </div>
          </div>

          {/* Col 2: Products Links (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-montserrat font-bold tracking-widest text-[#84dc00] uppercase">
              Soluções & Produtos
            </h4>
            <ul className="flex flex-col gap-2.5">
              {productCategories.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-white/75 hover:text-[#84dc00] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#527316] opacity-60 group-hover:scale-150 group-hover:bg-[#84dc00] transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Navigation (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="text-xs font-montserrat font-bold tracking-widest text-[#84dc00] uppercase">
              Institucional
            </h4>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <a
                    href={item.href}
                    className="text-xs sm:text-sm text-white/75 hover:text-[#84dc00] transition-colors flex items-center gap-1.5 group"
                  >
                    <span className="w-1 h-1 rounded-full bg-[#527316] opacity-60 group-hover:scale-150 group-hover:bg-[#84dc00] transition-all" />
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact and Support (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-4">
            <h4 className="text-xs font-montserrat font-bold tracking-widest text-[#84dc00] uppercase">
              Atendimento & Suporte
            </h4>
            <div className="flex flex-col gap-3 text-xs sm:text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#84dc00] shrink-0 mt-0.5" />
                <span>Atendimento Nacional com consultores nos principais polos agrícolas do Brasil.</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#84dc00] shrink-0" />
                <a
                  href="mailto:contato@agroforte.com.br"
                  className="hover:text-[#84dc00] transition-colors"
                >
                  contato@agroforte.com.br
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#84dc00] shrink-0" />
                <a
                  href="tel:+5508000000000"
                  className="hover:text-[#84dc00] transition-colors"
                >
                  0800 000 0000 / WhatsApp Comercial
                </a>
              </div>
            </div>

            {/* Newsletter Input */}
            <div className="mt-3 flex flex-col gap-2">
              <label htmlFor="footer-newsletter" className="text-[11px] text-white/60 uppercase tracking-wider font-semibold">
                Informativo Técnico
              </label>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert("Obrigado por se inscrever no informativo técnico Agroforte!");
                }}
                className="flex items-center rounded-full bg-black/30 border border-[#3c5310] p-1 focus-within:border-[#84dc00] transition-colors"
              >
                <input
                  id="footer-newsletter"
                  type="email"
                  placeholder="Seu e-mail corporativo"
                  required
                  className="w-full bg-transparent px-3 text-xs text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="p-2 rounded-full bg-[#527316] hover:bg-[#84dc00] text-white transition-colors cursor-pointer"
                  aria-label="Inscrever no informativo"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Bottom Credits & Legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/60 relative z-10">
          <div className="flex items-center gap-2">
            <AgroLeaf size={18} animated={false} glow={false} />
            <span>
              &copy; {currentYear} AGROFORTE Tecnologia Agrícola. Todos os direitos reservados.
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-[11px] uppercase tracking-widest text-[#84dc00]/80 font-mono">
              Agronegócio de Alta Tecnologia
            </span>
          </div>
        </div>
      </AgroContainer>
    </footer>
  );
}
