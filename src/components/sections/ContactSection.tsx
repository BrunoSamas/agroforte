"use client";

import React, { useState } from "react";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroButton } from "@/components/ui/AgroButton";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Send,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    cultura: "Soja",
    areaHectares: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contato"
      className="relative py-20 lg:py-28 bg-[#F9F8F4] text-[#1d2908] scroll-mt-20 overflow-hidden border-t border-[#E5E5DC]"
    >
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-agro-natural-radial pointer-events-none" />

      <AgroContainer className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & WhatsApp (5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <div className="inline-flex items-center gap-2 text-xs font-montserrat font-extrabold tracking-[0.2em] text-[#527316] uppercase">
                <Sparkles className="w-4 h-4 text-[#84dc00]" />
                <span>CANAL DIRETO</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-montserrat font-black uppercase tracking-tight text-[#1d2908] leading-tight">
                FALE COM NOSSOS <span className="text-[#527316]">ESPECIALISTAS.</span>
              </h2>

              <p className="text-sm sm:text-base text-[#555A50] leading-relaxed">
                Nossa equipe de consultores agronômicos está pronta para analisar as particularidades do seu solo e recomendar a estratégia ideal de nutrição e manejo.
              </p>
            </div>

            {/* Quick Contact Cards */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://wa.me/5500000000000?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20as%20soluções%20Agroforte."
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-2xl bg-white border border-[#E5E5DC] hover:border-[#527316] shadow-sm hover:shadow-md transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-[#527316]/10 text-[#527316] group-hover:bg-[#527316] group-hover:text-white transition-colors">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs font-montserrat font-bold text-[#1d2908] block">
                      WhatsApp Comercial
                    </span>
                    <span className="text-xs text-[#555A50]">
                      Atendimento ágil para cotações
                    </span>
                  </div>
                </div>
                <span className="text-xs font-montserrat font-bold text-[#527316] group-hover:translate-x-1 transition-transform">
                  Iniciar &rarr;
                </span>
              </a>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E5DC] shadow-sm flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#1d2908]/08 text-[#1d2908]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-montserrat font-bold text-[#1d2908] block">
                    E-mail Institucional
                  </span>
                  <span className="text-xs text-[#555A50]">
                    contato@agroforte.com.br
                  </span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-white border border-[#E5E5DC] shadow-sm flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-[#1d2908]/08 text-[#1d2908]">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-montserrat font-bold text-[#1d2908] block">
                    Central de Atendimento
                  </span>
                  <span className="text-xs text-[#555A50]">
                    0800 000 0000 (Segunda a Sexta, 8h às 18h)
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-[24px] p-6 sm:p-8 lg:p-10 border border-[#E5E5DC] shadow-[0_12px_36px_rgba(29,48,14,0.06)] relative">
            {submitted ? (
              <div className="py-12 flex flex-col items-center justify-center text-center gap-4 animate-fadeIn">
                <div className="p-4 rounded-full bg-[#527316]/10 text-[#527316]">
                  <CheckCircle2 className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-montserrat font-extrabold text-[#1d2908]">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-sm text-[#555A50] max-w-md">
                  Agradecemos seu contato. Um de nossos consultores técnicos entrará em contato em breve com uma proposta personalizada para sua lavoura.
                </p>
                <AgroButton
                  variant="secondary"
                  size="sm"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({
                      name: "",
                      email: "",
                      phone: "",
                      cultura: "Soja",
                      areaHectares: "",
                      message: "",
                    });
                  }}
                  className="mt-4"
                >
                  Enviar Nova Mensagem
                </AgroButton>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1 pb-2">
                  <h3 className="text-xl font-montserrat font-extrabold text-[#1d2908]">
                    Solicitar Diagnóstico Agronômico
                  </h3>
                  <p className="text-xs text-[#555A50]">
                    Preencha os dados abaixo para receber uma recomendação personalizada.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wide">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: Carlos Eduardo"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#84dc00] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wide">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(00) 00000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#84dc00] transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wide">
                      E-mail Corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.email@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#84dc00] transition-all"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wide">
                      Principal Cultura
                    </label>
                    <select
                      value={formData.cultura}
                      onChange={(e) => setFormData({ ...formData, cultura: e.target.value })}
                      className="px-4 py-3 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#84dc00] transition-all"
                    >
                      <option value="Soja">Soja</option>
                      <option value="Milho">Milho</option>
                      <option value="Algodao">Algodão</option>
                      <option value="Cafe">Café</option>
                      <option value="Cana">Cana-de-Açúcar</option>
                      <option value="Hortifruti">Hortifruti</option>
                      <option value="Outros">Outras Culturas</option>
                    </select>
                  </div>
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wide">
                    Área Estimada (Hectares) ou Mensagem
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Descreva brevemente sua necessidade, produto de interesse ou estágio da cultura..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="px-4 py-3 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#84dc00] transition-all resize-none"
                  />
                </div>

                <AgroButton
                  variant="primary"
                  size="md"
                  type="submit"
                  className="mt-2 w-full"
                  rightIcon={<Send className="w-4 h-4" />}
                >
                  Enviar Solicitação
                </AgroButton>
              </form>
            )}
          </div>
        </div>
      </AgroContainer>
    </section>
  );
}
