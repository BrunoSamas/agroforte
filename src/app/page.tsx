"use client";

import React, { useState } from "react";
import { AgroHeader } from "@/components/layout/AgroHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";
import { ContactSection } from "@/components/sections/ContactSection";
import { AgroFooter } from "@/components/layout/AgroFooter";
import { ContactModal } from "@/components/sections/ContactModal";
import { Product } from "@/types";

export default function HomePage() {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [selectedProductForContact, setSelectedProductForContact] =
    useState<Product | null>(null);

  const handleOpenContact = (product?: Product | null) => {
    setSelectedProductForContact(product || null);
    setContactModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F9F8F4] selection:bg-[#84dc00]/30 selection:text-[#1d2908]">
      {/* Dynamic Header */}
      <AgroHeader onOpenContact={() => handleOpenContact(null)} />

      {/* 1. Hero Section */}
      <HeroSection onOpenContact={() => handleOpenContact(null)} />

      {/* 2. Products Section & Category Filter */}
      <ProductsSection
        onConsultProduct={(product) => handleOpenContact(product)}
      />

      {/* 3. Differentials Section (Por que Agroforte) */}
      <DifferentialsSection />

      {/* 4. About Agroforte Section */}
      <AboutSection />

      {/* 5. Final CTA Section */}
      <FinalCTASection onOpenContact={() => handleOpenContact(null)} />

      {/* 6. Direct Contact & Diagnosis Section */}
      <ContactSection />

      {/* 7. Complete Institutional Footer */}
      <AgroFooter />

      {/* Global Contact Modal */}
      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
        initialProduct={selectedProductForContact}
      />
    </main>
  );
}
