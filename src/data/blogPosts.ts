export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  author: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'paraguay-investor-pass-2026-movilidad-global',
    title: 'Paraguay 2026: Por qué el nuevo "Investor Pass" está redibujando el mapa de la movilidad global',
    excerpt: 'Análisis estratégico del Paraguay Investor Pass: residencia permanente directa, umbrales de inversión desde USD 150.000, dividendos al 8% y por qué el Cono Sur sustituye a las Golden Visas europeas en 2026.',
    date: '2026-04-24',
    readTime: '16 min',
    category: 'Inversión',
    author: 'Living Paraguay',
    image: '/src/assets/blog-investor-pass.webp',
  },
  {
    id: 'inversion-inmobiliaria-paraguay-asuncion-ciudad-del-este-encarnacion',
    title: 'Inversión Inmobiliaria en Paraguay 2025: Asunción, Ciudad del Este y Encarnación',
    excerpt: 'Análisis estratégico del mercado inmobiliario en las tres ciudades principales de Paraguay. Comparativa de rentabilidades, precios por m², zonas prime y recomendaciones por perfil de inversor.',
    date: '2026-03-01',
    readTime: '18 min',
    category: 'Inversión',
    author: 'Living Paraguay',
    image: '/src/assets/blog-inversion-inmobiliaria.webp',
  },
  {
    id: 'marco-legal-fiscal-inversion-inmobiliaria-paraguay',
    title: 'Marco Legal y Fiscal para Invertir en Inmuebles en Paraguay: Guía del Inversor',
    excerpt: 'Todo sobre el sistema 10-10-10, la Ley 60/90, impuestos sobre alquileres y plusvalía, libertad cambiaria y el programa Che Róga Porã. La guía fiscal definitiva para inversores inmobiliarios.',
    date: '2026-03-02',
    readTime: '12 min',
    category: 'Fiscalidad',
    author: 'Living Paraguay',
    image: '/src/assets/blog-marco-fiscal-paraguay.webp',
  },
  {
    id: 'costo-vida-paraguay-2025-presupuesto-mensual',
    title: 'Costo de Vida en Paraguay 2025: Presupuesto Mensual Detallado',
    excerpt: 'Análisis completo del costo de vida en Paraguay con presupuestos mensuales detallados por ciudad. Compara Asunción, Ciudad del Este y Encarnación para planificar tu mudanza.',
    date: '2025-11-28',
    readTime: '14 min',
    category: 'Estilo de Vida',
    author: 'Living Paraguay',
    image: '/src/assets/blog-cost-of-living.webp',
  },
  {
    id: 'impuestos-paraguay-sistema-territorial',
    title: 'Impuestos en Paraguay: Guía completa del sistema territorial',
    excerpt: 'Descubre cómo funciona el sistema fiscal territorial de Paraguay y por qué es uno de los más atractivos para expatriados e inversores internacionales.',
    date: '2025-11-20',
    readTime: '15 min',
    category: 'Fiscalidad',
    author: 'Living Paraguay',
    image: '/src/assets/blog-taxation.webp',
  },
  {
    id: 'apostillar-documentos-paraguay',
    title: 'Cómo Apostillar Documentos para Paraguay: Guía Paso a Paso',
    excerpt: 'Guía completa con casos prácticos por país para apostillar tus documentos y preparar tu residencia en Paraguay. Incluye España, Argentina, Chile, Colombia y más.',
    date: '2025-11-22',
    readTime: '12 min',
    category: 'Trámites',
    author: 'Living Paraguay',
    image: '/src/assets/blog-apostille.webp',
  },
  {
    id: 'villa-morra-vs-carmelitas-barrios-asuncion',
    title: 'Villa Morra vs Carmelitas: Comparativa de los Mejores Barrios de Asunción',
    excerpt: 'Análisis detallado de los dos barrios más exclusivos de Asunción: ubicación, precios, seguridad, servicios y calidad de vida. Descubre cuál se adapta mejor a tu estilo.',
    date: '2025-11-25',
    readTime: '10 min',
    category: 'Vivienda',
    author: 'Living Paraguay',
    image: '/src/assets/blog-neighborhoods.webp',
  },
];
