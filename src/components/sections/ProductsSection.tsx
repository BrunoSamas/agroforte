"use client";

import React, { useState, useMemo } from "react";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { CategoryFilter } from "@/components/products/CategoryFilter";
import { ProductGrid } from "@/components/products/ProductGrid";
import { ProductDetailModal } from "@/components/products/ProductDetailModal";
import { PRODUCTS } from "@/data/products";
import { CATEGORIES } from "@/data/categories";
import { ProductCategory, Product } from "@/types";
import { Search, Sparkles, Filter } from "lucide-react";

interface ProductsSectionProps {
  onConsultProduct?: (product: Product) => void;
}

export function ProductsSection({ onConsultProduct }: ProductsSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProductCategory>("todos");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Compute product counts per category
  const productCounts = useMemo(() => {
    const counts: Record<ProductCategory, number> = {
      todos: PRODUCTS.length,
      fertilizantes: 0,
      defensivos: 0,
      nutricao: 0,
      sementes: 0,
      tecnologia: 0,
      solo: 0,
    };

    PRODUCTS.forEach((prod) => {
      if (counts[prod.category] !== undefined) {
        counts[prod.category] += 1;
      }
    });

    return counts;
  }, []);

  // Filter products by category and search
  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((prod) => {
      const matchCategory =
        activeCategory === "todos" || prod.category === activeCategory;
      const matchSearch =
        searchQuery.trim() === "" ||
        prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        prod.features.some((f) => f.toLowerCase().includes(searchQuery.toLowerCase()));

      return matchCategory && matchSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <section
      id="produtos"
      className="relative py-20 lg:py-28 bg-[#F9F8F4] text-[#1D300E] scroll-mt-20 overflow-hidden"
    >
      {/* Background Natural Radial Glow */}
      <div className="absolute inset-0 bg-agro-natural-radial pointer-events-none" />

      <AgroContainer className="relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-10 border-b border-[#E5E5DC]">
          <div className="flex flex-col gap-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-montserrat font-extrabold tracking-[0.2em] text-[#5E8F0B] uppercase">
              <Sparkles className="w-4 h-4 text-[#8DBB18]" />
              <span>NOSSAS SOLUÇÕES</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-montserrat font-black text-[#1D300E] uppercase tracking-tight">
              PRODUTOS <span className="text-[#5E8F0B]">AGROFORTE</span>
            </h2>

            <p className="text-sm sm:text-base text-[#555A50] leading-relaxed">
              Formulados com rigor científico e biotecnologia para responder aos desafios reais do produtor, maximizando a produtividade por hectare.
            </p>
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72 shrink-0">
            <div className="relative flex items-center">
              <Search className="absolute left-3.5 w-4 h-4 text-[#555A50]" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produtos ou ativos..."
                className="w-full pl-10 pr-4 py-2.5 rounded-full text-xs bg-white border border-[#E5E5DC] focus:outline-none focus:ring-2 focus:ring-[#8DBB18] focus:border-[#8DBB18] transition-all shadow-sm"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 text-xs text-[#555A50] hover:text-[#1D300E]"
                >
                  &times;
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Categories Bar */}
        <div className="pt-6 pb-8">
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            productCounts={productCounts}
          />
        </div>

        {/* Product Cards Grid */}
        <ProductGrid
          products={filteredProducts}
          onSelectProduct={(product) => setSelectedProduct(product)}
        />
      </AgroContainer>

      {/* Product Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onConsultProduct={(prod) => {
          setSelectedProduct(null);
          if (onConsultProduct) {
            onConsultProduct(prod);
          }
        }}
      />
    </section>
  );
}
