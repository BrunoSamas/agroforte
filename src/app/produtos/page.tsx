import React from "react";
import { Metadata } from "next";
import { AgroHeader } from "@/components/layout/AgroHeader";
import { AgroFooter } from "@/components/layout/AgroFooter";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Catálogo Técnico de Soluções | Agroforte",
  description: "Explore o portfólio completo de fertilizantes, bioestimulantes, defensivos, sementes e tecnologias de solo da Agroforte.",
};

export default function ProdutosPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F4]">
      <AgroHeader />

      <div className="pt-28 pb-6 bg-[#1d2908] text-white">
        <AgroContainer>
          <div className="flex flex-col gap-3 py-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-xs font-montserrat font-semibold text-[#84dc00] hover:underline"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Voltar para a Página Inicial</span>
            </Link>

            <div className="flex items-center gap-3">
              <AgroLeaf size={32} animated={false} glow={false} />
              <h1 className="text-3xl sm:text-4xl font-montserrat font-black uppercase text-white">
                Catálogo Completo de Soluções
              </h1>
            </div>

            <p className="text-sm text-white/75 max-w-2xl font-sans">
              Tecnologia aplicada em formulações de alta eficiência para produtores que buscam maximizar o teto produtivo de suas lavouras.
            </p>
          </div>
        </AgroContainer>
      </div>

      <main className="flex-1">
        <ProductsSection />
      </main>

      <AgroFooter />
    </div>
  );
}
