"use client";

import React from "react";
import Image from "next/image";
import { Product } from "@/types";
import { AgroBadge } from "@/components/ui/AgroBadge";
import { AgroButton } from "@/components/ui/AgroButton";
import { Check, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ProductCardProps {
  product: Product;
  onSelect: (product: Product) => void;
}

export function ProductCard({ product, onSelect }: ProductCardProps) {
  // Category-specific badge variant
  const getBadgeVariant = (category: string) => {
    switch (category) {
      case "tecnologia":
        return "tech";
      case "solo":
        return "soil";
      case "nutricao":
        return "lime";
      case "defensivos":
        return "green";
      default:
        return "green";
    }
  };

  return (
    <article
      className="group relative flex flex-col h-full bg-white rounded-[16px] border border-[#E5E5DC] transition-all duration-400 ease-out shadow-[0_8px_24px_rgba(29,48,14,0.06)] hover:-translate-y-1 hover:shadow-[0_14px_32px_rgba(29,48,14,0.14)] hover:border-[#5E8F0B]/40 overflow-hidden"
    >
      {/* Top Accent Line with Category Color */}
      <div
        className="h-1 w-full shrink-0 transition-opacity duration-300"
        style={{ backgroundColor: product.accentColor || "#5E8F0B" }}
      />

      {/* Large Visual Image Area (High percentage of card height) */}
      <div className="relative w-full aspect-[4/3] bg-[#1D300E]/05 overflow-hidden shrink-0">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
        />

        {/* Soft Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
          <AgroBadge
            variant={getBadgeVariant(product.category)}
            size="sm"
            dot={true}
            className="shadow-sm backdrop-blur-md bg-white/90"
          >
            {product.categoryLabel}
          </AgroBadge>

          {product.badge && (
            <span className="px-2.5 py-0.5 rounded-full text-[10px] font-montserrat font-bold uppercase tracking-wider bg-[#1D300E]/85 text-[#8DBB18] backdrop-blur-md border border-[#8DBB18]/30 shadow-sm">
              {product.badge}
            </span>
          )}
        </div>
      </div>

      {/* Card Editorial Content Area */}
      <div className="flex flex-col flex-1 p-5 sm:p-6 justify-between gap-4">
        {/* Title & Short Description */}
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-montserrat font-semibold tracking-widest text-[#555A50] uppercase">
            {product.categoryLabel}
          </span>
          <h3 className="text-lg sm:text-xl font-montserrat font-extrabold text-[#1D300E] leading-snug group-hover:text-[#5E8F0B] transition-colors">
            {product.name}
          </h3>
          <p className="text-xs sm:text-sm text-[#555A50] leading-relaxed line-clamp-2">
            {product.shortDescription}
          </p>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-[#E5E5DC]" />

        {/* Key Features List */}
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-montserrat font-bold tracking-wider uppercase text-[#1D300E]/70">
            Destaques Técnicos:
          </span>
          <ul className="flex flex-col gap-1.5">
            {product.features.slice(0, 2).map((feat, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2 text-xs text-[#555A50] leading-snug"
              >
                <Check
                  className="w-3.5 h-3.5 shrink-0 mt-0.5"
                  style={{ color: product.accentColor || "#5E8F0B" }}
                />
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Action Button */}
        <div className="pt-2">
          <button
            type="button"
            onClick={() => onSelect(product)}
            className="w-full py-3 px-4 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#E5E5DC] text-[#1D300E] bg-[#F9F8F4] group-hover:bg-[#5E8F0B] group-hover:text-white group-hover:border-[#5E8F0B] transition-all duration-300 shadow-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#8DBB18]"
          >
            <span>Ver Especificações</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </article>
  );
}
