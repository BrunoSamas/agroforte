import React from "react";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PRODUCTS } from "@/data/products";
import { AgroHeader } from "@/components/layout/AgroHeader";
import { AgroFooter } from "@/components/layout/AgroFooter";
import { AgroContainer } from "@/components/ui/AgroContainer";
import { AgroBadge } from "@/components/ui/AgroBadge";
import { AgroButton } from "@/components/ui/AgroButton";
import { AgroLeaf } from "@/components/agro/AgroLeaf";
import {
  ArrowLeft,
  CheckCircle2,
  FlaskConical,
  Compass,
  Layers,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

interface ProductPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    return {
      title: "Produto Não Encontrado | Agroforte",
    };
  }

  return {
    title: `${product.name} | Agroforte Tecnologia Agrícola`,
    description: product.shortDescription,
  };
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#F9F8F4] text-[#1d2908]">
      <AgroHeader />

      <main className="flex-1 pt-28 pb-20">
        <AgroContainer>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-montserrat font-semibold text-[#555A50] pb-8">
            <Link href="/" className="hover:text-[#527316]">
              Início
            </Link>
            <span>/</span>
            <Link href="/produtos" className="hover:text-[#527316]">
              Produtos
            </Link>
            <span>/</span>
            <span className="text-[#1d2908] font-bold">{product.name}</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Product Image (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-[24px] overflow-hidden border border-[#E5E5DC] shadow-[0_12px_36px_rgba(29,48,14,0.08)] bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>

              <div className="mt-4 p-4 rounded-2xl bg-white border border-[#E5E5DC] flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#527316] shrink-0" />
                <span className="text-xs text-[#555A50]">
                  Garantia de pureza e controle de lote auditado pela Agroforte.
                </span>
              </div>
            </div>

            {/* Technical Specifications (7 cols) */}
            <div className="lg:col-span-7 flex flex-col gap-6 bg-white p-6 sm:p-10 rounded-[28px] border border-[#E5E5DC] shadow-[0_8px_24px_rgba(29,48,14,0.04)]">
              <div className="flex items-center justify-between gap-4">
                <AgroBadge variant="green" size="md" dot={true}>
                  {product.categoryLabel}
                </AgroBadge>
                {product.badge && (
                  <span className="text-xs font-montserrat font-bold text-[#527316]">
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-montserrat font-black text-[#1d2908] uppercase">
                {product.name}
              </h1>

              <p className="text-sm sm:text-base text-[#555A50] leading-relaxed">
                {product.description}
              </p>

              {/* Technical Specifications Sheet */}
              <div className="flex flex-col gap-3 p-5 rounded-2xl bg-[#F9F8F4] border border-[#E5E5DC] text-xs sm:text-sm">
                <h3 className="font-montserrat font-bold text-[#1d2908] uppercase tracking-wider text-xs pb-1 border-b border-[#E5E5DC]">
                  Ficha Técnica Agronômica
                </h3>

                {product.composition && (
                  <div className="flex items-start gap-3 pt-2">
                    <FlaskConical className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1d2908] block">Composição Química:</strong>
                      <span className="text-[#555A50]">{product.composition}</span>
                    </div>
                  </div>
                )}

                {product.dosage && (
                  <div className="flex items-start gap-3">
                    <Compass className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1d2908] block">Dosagem Recomendada:</strong>
                      <span className="text-[#555A50]">{product.dosage}</span>
                    </div>
                  </div>
                )}

                {product.application && (
                  <div className="flex items-start gap-3">
                    <Layers className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-[#1d2908] block">Método de Aplicação:</strong>
                      <span className="text-[#555A50]">{product.application}</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Key Features */}
              <div className="flex flex-col gap-2">
                <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-[#1d2908]">
                  Benefícios Comprovados:
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {product.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-[#555A50]">
                      <CheckCircle2 className="w-4 h-4 text-[#527316] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4">
                <AgroButton
                  variant="primary"
                  size="md"
                  href="/#contato"
                  leftIcon={<PhoneCall className="w-4 h-4" />}
                >
                  Solicitar Cotação para Minha Região
                </AgroButton>

                <Link
                  href="/produtos"
                  className="px-6 py-3 rounded-full border border-[#E5E5DC] text-xs font-montserrat font-bold uppercase text-center text-[#555A50] hover:bg-[#F9F8F4] transition-colors"
                >
                  Ver Outras Soluções
                </Link>
              </div>
            </div>
          </div>
        </AgroContainer>
      </main>

      <AgroFooter />
    </div>
  );
}
