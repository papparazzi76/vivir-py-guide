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
