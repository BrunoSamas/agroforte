"use client";

import React, { useState, useEffect } from "react";
import { Product } from "@/types";
import { AgroButton } from "@/components/ui/AgroButton";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import { X, Send, CheckCircle2, MessageCircle, Phone } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: Product | null;
}

export function ContactModal({
  isOpen,
  onClose,
  initialProduct,
}: ContactModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    productInterest: initialProduct ? initialProduct.name : "",
    message: initialProduct
      ? `Gostaria de solicitar uma cotação e ficha técnica detalhada para o produto ${initialProduct.name}.`
      : "",
  });

  useEffect(() => {
    if (initialProduct) {
      setFormData((prev) => ({
        ...prev,
        productInterest: initialProduct.name,
        message: `Gostaria de solicitar uma cotação e suporte técnico para o produto ${initialProduct.name}.`,
      }));
    }
  }, [initialProduct]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg bg-white rounded-[24px] border border-[#E5E5DC] shadow-2xl p-6 sm:p-8 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Leaf Accent */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#8DBB18] via-[#5E8F0B] to-[#294A0D]" />

        {/* Close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-[#F9F8F4] hover:bg-[#E5E5DC] text-[#1D300E] transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center gap-4 animate-fadeIn">
            <div className="p-3.5 rounded-full bg-[#5E8F0B]/10 text-[#5E8F0B]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-xl font-montserrat font-extrabold text-[#1D300E]">
              Solicitação Registrada!
            </h3>
            <p className="text-xs sm:text-sm text-[#555A50] leading-relaxed">
              Recebemos sua mensagem. Um agrônomo especialista da Agroforte entrará em contato pelo seu telefone/e-mail para dar andamento ao seu atendimento.
            </p>
            <AgroButton
              variant="primary"
              size="sm"
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="mt-2"
            >
              Concluir
            </AgroButton>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex items-center gap-3 pb-2">
              <AgroLeaf size={32} animated={false} glow={false} />
              <div>
                <h3 className="text-lg sm:text-xl font-montserrat font-extrabold text-[#1D300E]">
                  Fale com a Agroforte
                </h3>
                <p className="text-xs text-[#555A50]">
                  Atendimento direto com nossos consultores técnicos.
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-montserrat font-bold text-[#1D300E] uppercase">
                Nome Completo *
              </label>
              <input
                type="text"
                required
                placeholder="Seu nome"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8DBB18]"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-montserrat font-bold text-[#1D300E] uppercase">
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="(00) 00000-0000"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="px-4 py-2.5 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8DBB18]"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs font-montserrat font-bold text-[#1D300E] uppercase">
                  E-mail *
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu.email@agro.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="px-4 py-2.5 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8DBB18]"
                />
              </div>
            </div>

            {formData.productInterest && (
              <div className="p-2.5 rounded-xl bg-[#5E8F0B]/10 border border-[#5E8F0B]/20 text-xs text-[#294A0D]">
                <strong>Produto Selecionado:</strong> {formData.productInterest}
              </div>
            )}

            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-montserrat font-bold text-[#1D300E] uppercase">
                Mensagem ou Dúvida Técnica
              </label>
              <textarea
                rows={3}
                placeholder="Como podemos te ajudar hoje?"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="px-4 py-2.5 rounded-xl border border-[#E5E5DC] text-xs bg-[#F9F8F4] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#8DBB18] resize-none"
              />
            </div>

            <div className="pt-2 flex flex-col gap-2.5">
              <AgroButton
                variant="primary"
                size="md"
                type="submit"
                className="w-full"
                rightIcon={<Send className="w-4 h-4" />}
              >
                Enviar Mensagem
              </AgroButton>

              <a
                href="https://wa.me/5500000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-2.5 rounded-full border border-[#5E8F0B] text-[#5E8F0B] hover:bg-[#5E8F0B]/08 text-xs font-montserrat font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Conversar Direto no WhatsApp</span>
              </a>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
