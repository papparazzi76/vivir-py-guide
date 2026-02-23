export type Page = 
  | 'home' 
  | 'permits' 
  | 'housing' 
  | 'schools' 
  | 'neighborhoods' 
  | 'taxation' 
  | 'social-security' 
  | 'faq' 
  | 'contact';

export interface NavLink {
  id: Page;
  label: string;
}

export interface Property {
  id: string;
  image: string;
  price: number;
  type: 'Alquiler' | 'Venta';
  propertyType: 'Apartamento' | 'Casa' | 'Terreno' | 'Local Comercial';
  title: string;
  location: string;
  city: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
}

export interface School {
  id: string;
  name: string;
  image: string;
  location: string;
  city: string;
  languages: string[];
  levels: string[];
  ranking: number;
  description: string;
}

export interface Neighborhood {
  id: string;
  name: string;
  city: string;
  image: string;
  description: string;
  tags: string[];
  profile: string;
  highlights: string[];
}

export interface CostOfLiving {
  city: string;
  rent1br: number;
  rent3br: number;
  utilities: number;
  food: number;
  transport: number;
  entertainment: number;
  total: number;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface Currency {
  code: 'PYG' | 'USD' | 'EUR';
  symbol: string;
  rate: number; // Conversion rate to PYG
}
