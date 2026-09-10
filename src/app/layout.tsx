import type { Metadata } from "next";
import { Montserrat, Inter } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Agroforte | Tecnologia que Fortalece o Campo",
  description: "Soluções desenvolvidas para unir tecnologia, produtividade e confiança em cada etapa do agronegócio. Fertilizantes, defensivos, bioestimulantes e agricultura de precisão.",
  keywords: [
    "Agroforte",
    "Agronegócio",
    "Agricultura de Precisão",
    "Fertilizantes",
    "Bioestimulantes",
    "Defensivos Agrícolas",
    "Sementes Tratadas",
    "Tecnologia no Campo",
    "Produtividade Agrícola",
  ],
  authors: [{ name: "Agroforte Tecnologia Agrícola" }],
  openGraph: {
    title: "Agroforte | Tecnologia que Fortalece o Campo",
    description: "Soluções desenvolvidas para unir tecnologia, produtividade e confiança em cada etapa do agronegócio.",
    url: "https://agroforte.com.br",
    siteName: "Agroforte",
    locale: "pt_BR",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="pt-BR"
      className={`${montserrat.variable} ${inter.variable} scroll-smooth antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-[#F9F8F4] text-[#1D300E] font-sans selection:bg-[#8DBB18]/30 selection:text-[#1D300E]">
        {children}
      </body>
    </html>
  );
}
