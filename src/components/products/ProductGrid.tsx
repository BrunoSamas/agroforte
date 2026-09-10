"use client";

import React from "react";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { Leaf } from "lucide-react";

interface ProductGridProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export function ProductGrid({ products, onSelectProduct }: ProductGridProps) {
  if (products.length === 0) {
    return (
      <div className="w-full py-16 px-4 text-center flex flex-col items-center justify-center gap-4 bg-white rounded-[20px] border border-[#E5E5DC]">
        <div className="p-4 rounded-full bg-[#F9F8F4] text-[#5E8F0B]">
          <Leaf className="w-8 h-8" />
        </div>
        <div className="flex flex-col gap-1 max-w-md">
          <h4 className="text-lg font-montserrat font-bold text-[#1D300E]">
            Nenhuma solução encontrada nesta categoria
          </h4>
          <p className="text-sm text-[#555A50]">
            Estamos constantemente expandindo nosso catálogo técnico. Entre em contato para formulações personalizadas.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onSelect={onSelectProduct}
        />
      ))}
    </div>
  );
}
