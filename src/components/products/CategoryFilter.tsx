"use client";

import React from "react";
import { CategoryItem, ProductCategory } from "@/types";
import { CATEGORIES } from "@/data/categories";
import { cn } from "@/lib/utils";

interface CategoryFilterProps {
  activeCategory: ProductCategory;
  onSelectCategory: (category: ProductCategory) => void;
  productCounts?: Record<ProductCategory, number>;
}

export function CategoryFilter({
  activeCategory,
  onSelectCategory,
  productCounts,
}: CategoryFilterProps) {
  return (
    <div className="w-full overflow-x-auto no-scrollbar py-2">
      <div
        className="flex items-center gap-2 sm:gap-2.5 min-w-max pb-2"
        role="tablist"
        aria-label="Filtro de Categorias de Produtos"
      >
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id;
          const count = productCounts ? productCounts[cat.id] : undefined;

          return (
            <button
              key={cat.id}
              role="tab"
              aria-selected={isActive}
              onClick={() => onSelectCategory(cat.id)}
              className={cn(
                "relative px-4 sm:px-5 py-2.5 rounded-full font-montserrat font-bold text-xs uppercase tracking-wider transition-all duration-300 select-none cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#8DBB18]",
                isActive
                  ? "bg-[#5E8F0B] text-white shadow-[0_4px_16px_rgba(94,143,11,0.3)] border border-[#8DBB18]"
                  : "bg-white text-[#555A50] hover:text-[#1D300E] hover:bg-[#F9F8F4] border border-[#E5E5DC] shadow-sm"
              )}
            >
              <div className="flex items-center gap-2">
                <span>{cat.label}</span>
                {count !== undefined && count > 0 && (
                  <span
                    className={cn(
                      "text-[10px] px-1.5 py-0.2 rounded-full font-mono font-semibold transition-colors",
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-[#1D300E]/08 text-[#555A50]"
                    )}
                  >
                    {count}
                  </span>
                )}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
