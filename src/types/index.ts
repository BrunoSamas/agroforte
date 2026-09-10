export type ProductCategory =
  | "todos"
  | "fertilizantes"
  | "defensivos"
  | "nutricao"
  | "sementes"
  | "tecnologia"
  | "solo";

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  shortDescription: string;
  description: string;
  image: string;
  features: string[];
  application?: string;
  dosage?: string;
  composition?: string;
  accentColor?: string;
  featured: boolean;
  status: "disponivel" | "sob_consulta" | "novo";
  badge?: string;
}

export interface CategoryItem {
  id: ProductCategory;
  label: string;
  accentColor: string;
  description?: string;
}

export interface Benefit {
  id: string;
  title: string;
  tagline: string;
  description: string;
  iconName: "Cpu" | "ShieldCheck" | "Lightbulb" | "TrendingUp";
  number: string;
}

export interface StatItem {
  id: string;
  value: string;
  label: string;
  detail: string;
  isPlaceholder?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}
