"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AgroLogo } from "@/components/agro/AgroLogo";
import { AgroButton } from "@/components/ui/AgroButton";
import { Menu, X, ArrowUpRight, PhoneCall } from "lucide-react";
import { cn } from "@/lib/utils";

interface AgroHeaderProps {
  onOpenContact?: () => void;
}

export function AgroHeader({ onOpenContact }: AgroHeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ["hero", "produtos", "diferenciais", "sobre", "contato"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Produtos", href: "#produtos", id: "produtos" },
    { label: "Soluções", href: "#diferenciais", id: "diferenciais" },
    { label: "Sobre", href: "#sobre", id: "sobre" },
    { label: "Contato", href: "#contato", id: "contato" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        setMobileMenuOpen(false);
        const yOffset = -90;
        const y = target.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          isScrolled
            ? "bg-[#1D300E]/92 backdrop-blur-md border-b border-[#294A0D]/60 shadow-[0_4px_20px_rgba(0,0,0,0.15)] py-3.5"
            : "bg-transparent py-5 sm:py-6"
        )}
      >
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo Agroforte */}
          <AgroLogo variant="light" size="md" withTagline={!isScrolled} />

          {/* Desktop Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-1 lg:gap-2 px-4 py-1.5 rounded-full bg-[#1D300E]/40 backdrop-blur-sm border border-white/10"
            aria-label="Navegação Principal"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={cn(
                    "px-4 py-1.5 text-xs lg:text-sm font-montserrat font-semibold tracking-wider rounded-full transition-all duration-200",
                    isActive
                      ? "text-white bg-[#5E8F0B]/50 shadow-sm"
                      : "text-white/80 hover:text-white hover:bg-white/10"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* CTA Desktop */}
          <div className="hidden md:flex items-center gap-3">
            <AgroButton
              variant="primary"
              size="sm"
              onClick={onOpenContact ? onOpenContact : () => {
                const el = document.getElementById("contato");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              rightIcon={<ArrowUpRight className="w-3.5 h-3.5" />}
            >
              Fale Conosco
            </AgroButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-white bg-white/10 hover:bg-white/20 border border-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-[#8DBB18]"
            aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6 text-[#8DBB18]" /> : <Menu className="w-6 h-6 text-white" />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={cn(
          "fixed inset-0 z-30 bg-black/60 backdrop-blur-md transition-opacity duration-300 md:hidden",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden={!mobileMenuOpen}
      >
        <div
          className={cn(
            "fixed top-0 right-0 w-[82%] max-w-sm h-full bg-[#1D300E] border-l border-[#294A0D] p-6 flex flex-col justify-between shadow-2xl transition-transform duration-300 ease-out",
            mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col gap-6">
            <div className="flex items-center justify-between pb-4 border-b border-white/10">
              <AgroLogo variant="light" size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-1.5 rounded-full text-white/80 hover:text-white bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="px-4 py-3 rounded-xl text-base font-montserrat font-semibold text-white/90 hover:text-[#8DBB18] hover:bg-white/05 transition-colors flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ArrowUpRight className="w-4 h-4 opacity-50" />
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4 pt-6 border-t border-white/10">
            <AgroButton
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileMenuOpen(false);
                if (onOpenContact) {
                  onOpenContact();
                } else {
                  document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" });
                }
              }}
              leftIcon={<PhoneCall className="w-4 h-4" />}
            >
              Fale Conosco
            </AgroButton>

            <p className="text-center text-[11px] text-white/50 tracking-wider">
              AGROFORTE TECNOLOGIA AGRÍCOLA
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
