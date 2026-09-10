"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Product } from "@/types";
import { AgroBadge } from "@/components/ui/AgroBadge";
import { AgroButton } from "@/components/ui/AgroButton";
import {
  X,
  CheckCircle2,
  Layers,
  FlaskConical,
  Compass,
  FileSpreadsheet,
  MessageSquareShare,
} from "lucide-react";

interface ProductDetailModalProps {
  product: Product | null;
  onClose: () => void;
  onConsultProduct?: (product: Product) => void;
}

export function ProductDetailModal({
  product,
  onClose,
  onConsultProduct,
}: ProductDetailModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    if (product) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, onClose]);

  if (!product) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/70 backdrop-blur-md overflow-y-auto animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div
        className="relative w-full max-w-3xl bg-white rounded-[24px] border border-[#E5E5DC] shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Strip */}
        <div
          className="h-1.5 w-full"
          style={{ backgroundColor: product.accentColor || "#527316" }}
        />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#1d2908] shadow-md border border-[#E5E5DC] transition-transform hover:scale-105 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#84dc00]"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 max-h-[85vh] overflow-y-auto">
          {/* Image & Header Side */}
          <div className="relative min-h-[260px] md:min-h-[420px] bg-[#1d2908]/05">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

            <div className="absolute bottom-4 left-4 right-4 text-white">
              <AgroBadge
                variant="dark"
                size="sm"
                className="mb-2 backdrop-blur-md bg-[#1d2908]/80 border-[#84dc00]/40"
              >
                {product.categoryLabel}
              </AgroBadge>
              <h2
                id="modal-product-title"
                className="text-xl sm:text-2xl font-montserrat font-extrabold leading-tight text-white drop-shadow-sm"
              >
                {product.name}
              </h2>
            </div>
          </div>

          {/* Technical Details Side */}
          <div className="p-6 sm:p-8 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-5">
              <div>
                <span className="text-[11px] font-montserrat font-bold tracking-widest text-[#527316] uppercase">
                  Visão Técnica Geral
                </span>
                <p className="mt-1 text-xs sm:text-sm text-[#555A50] leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Technical Specifications Matrix */}
              <div className="flex flex-col gap-3 p-4 rounded-xl bg-[#F9F8F4] border border-[#E5E5DC] text-xs">
                {product.composition && (
                  <div className="flex items-start gap-2.5">
                    <FlaskConical className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-montserrat font-bold text-[#1d2908] block">
                        Composição:
                      </span>
                      <span className="text-[#555A50]">{product.composition}</span>
                    </div>
                  </div>
                )}

                {product.dosage && (
                  <div className="flex items-start gap-2.5">
                    <Compass className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-montserrat font-bold text-[#1d2908] block">
                        Recomendação de Dose:
                      </span>
                      <span className="text-[#555A50]">{product.dosage}</span>
                    </div>
                  </div>
                )}

                {product.application && (
                  <div className="flex items-start gap-2.5">
                    <Layers className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-montserrat font-bold text-[#1d2908] block">
                        Modo de Aplicação:
                      </span>
                      <span className="text-[#555A50]">{product.application}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Features List */}
              <div className="flex flex-col gap-2">
                <span className="text-xs font-montserrat font-bold text-[#1d2908] uppercase tracking-wider">
                  Benefícios Agronômicos Comprovados:
                </span>
                <ul className="flex flex-col gap-2">
                  {product.features.map((feat, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2 text-xs text-[#555A50]"
                    >
                      <CheckCircle2 className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <AgroButton
                variant="primary"
                size="sm"
                className="flex-1"
                onClick={() => {
                  onClose();
                  if (onConsultProduct) {
                    onConsultProduct(product);
                  } else {
                    document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                leftIcon={<MessageSquareShare className="w-4 h-4" />}
              >
                Solicitar Cotação
              </AgroButton>

              <button
                type="button"
                onClick={onClose}
                className="px-5 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider border border-[#E5E5DC] text-[#555A50] hover:bg-[#F9F8F4] transition-colors"
              >
                Voltar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
