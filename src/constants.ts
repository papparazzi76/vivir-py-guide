import { NavLink, Property, School, Neighborhood, CostOfLiving, FAQ, Currency } from './types';

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Inicio' },
  { id: 'permits', label: 'Permisos' },
  { id: 'housing', label: 'Vivienda' },
  { id: 'schools', label: 'Colegios' },
  { id: 'neighborhoods', label: 'Barrios' },
  { id: 'taxation', label: 'Impuestos' },
  { id: 'social-security', label: 'Seguridad Social' },
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contacto' },
];

export const PROPERTIES: Property[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800',
    price: 1200000,
    type: 'Alquiler',
    propertyType: 'Apartamento',
    title: 'Moderno Apartamento en Villa Morra',
    location: 'Villa Morra',
    city: 'Asunción',
    area: 120,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    price: 450000000,
    type: 'Venta',
    propertyType: 'Casa',
    title: 'Casa de Lujo en Barrio Carmelitas',
    location: 'Carmelitas',
    city: 'Asunción',
    area: 350,
    bedrooms: 4,
    bathrooms: 3,
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    price: 950000,
    type: 'Alquiler',
    propertyType: 'Apartamento',
    title: 'Apartamento Frente al Rio',
    location: 'Centro',
    city: 'Asunción',
    area: 95,
    bedrooms: 2,
    bathrooms: 2,
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800',
    price: 380000000,
    type: 'Venta',
    propertyType: 'Casa',
    title: 'Residencia en Luque',
    location: 'Centro',
    city: 'Luque',
    area: 280,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1600607687644-aac4c3eac7f4?w=800',
    price: 280000000,
    type: 'Venta',
    propertyType: 'Casa',
    title: 'Casa Moderna en Ciudad del Este',
    location: 'Zona Urbana',
    city: 'Ciudad del Este',
    area: 200,
    bedrooms: 3,
    bathrooms: 2,
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800',
    price: 1500000,
    type: 'Alquiler',
    propertyType: 'Apartamento',
    title: 'Penthouse de Lujo',
    location: 'Mburucuyá',
    city: 'Asunción',
    area: 180,
    bedrooms: 3,
    bathrooms: 3,
  },
];

export const SCHOOLS: School[] = [
  {
    id: '1',
    name: 'Colegio Internacional',
    image: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800',
    location: 'Villa Morra',
    city: 'Asunción',
    languages: ['Español', 'Inglés', 'Guaraní'],
    levels: ['Preescolar', 'Primaria', 'Secundaria'],
    ranking: 5,
    description: 'Educación trilingüe de excelencia con enfoque en desarrollo integral.',
  },
  {
    id: '2',
    name: 'American School of Asunción',
    image: 'https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800',
    location: 'Lambaré',
    city: 'Asunción',
    languages: ['Inglés', 'Español'],
    levels: ['Preescolar', 'Primaria', 'Secundaria'],
    ranking: 5,
    description: 'Currículo americano con acreditación internacional.',
  },
  {
    id: '3',
    name: 'Colegio San José',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800',
    location: 'Centro',
    city: 'Asunción',
    languages: ['Español', 'Guaraní'],
    levels: ['Primaria', 'Secundaria'],
    ranking: 4,
    description: 'Institución tradicional con valores católicos.',
  },
  {
    id: '4',
    name: 'Colegio Goethe',
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800',
    location: 'San Lorenzo',
    city: 'San Lorenzo',
    languages: ['Alemán', 'Español', 'Inglés'],
    levels: ['Preescolar', 'Primaria', 'Secundaria'],
    ranking: 5,
    description: 'Educación alemana con triple titulación.',
  },
  {
    id: '5',
    name: 'Colegio Internacional de Luque',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    location: 'Centro',
    city: 'Luque',
    languages: ['Español', 'Inglés'],
    levels: ['Preescolar', 'Primaria', 'Secundaria'],
    ranking: 4,
    description: 'Educación bilingüe con énfasis en tecnología.',
  },
];

export const NEIGHBORHOODS: Neighborhood[] = [
  {
    id: '1',
    name: 'Villa Morra',
    city: 'Asunción',
    image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=800',
    description: 'El barrio más exclusivo de Asunción, con centros comerciales, restaurantes y vida nocturna.',
    tags: ['Upscale', 'Comercial', 'Vida Nocturna', 'Seguro'],
  },
  {
    id: '2',
    name: 'Carmelitas',
    city: 'Asunción',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800',
    description: 'Zona residencial tranquila y elegante, ideal para familias.',
    tags: ['Residencial', 'Tranquilo', 'Familias', 'Verde'],
  },
  {
    id: '3',
    name: 'Mburucuyá',
    city: 'Asunción',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800',
    description: 'Barrio moderno con arquitectura contemporánea y servicios premium.',
    tags: ['Moderno', 'Premium', 'Seguro', 'Servicios'],
  },
  {
    id: '4',
    name: 'San Lorenzo Centro',
    city: 'San Lorenzo',
    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800',
    description: 'Zona universitaria vibrante con excelentes conexiones de transporte.',
    tags: ['Universitario', 'Accesible', 'Comercial', 'Joven'],
  },
];

export const COST_OF_LIVING: CostOfLiving[] = [
  {
    city: 'Asunción',
    rent1br: 2500000,
    rent3br: 4500000,
    utilities: 450000,
    food: 2000000,
    transport: 300000,
    entertainment: 800000,
    total: 10550000,
  },
  {
    city: 'Ciudad del Este',
    rent1br: 1800000,
    rent3br: 3200000,
    utilities: 350000,
    food: 1600000,
    transport: 250000,
    entertainment: 600000,
    total: 7800000,
  },
  {
    city: 'Encarnación',
    rent1br: 1500000,
    rent3br: 2800000,
    utilities: 300000,
    food: 1400000,
    transport: 200000,
    entertainment: 500000,
    total: 6700000,
  },
];

export const FAQS: FAQ[] = [
  {
    question: '¿Cuánto tiempo toma obtener la residencia temporal?',
    answer: 'El proceso de residencia temporal generalmente toma entre 2 a 4 meses, dependiendo de la correcta preparación de documentos y la carga de trabajo de las instituciones. Una vez aprobada, la residencia se otorga por 2 años.',
  },
  {
    question: '¿Necesito apostillar todos mis documentos?',
    answer: 'Sí, todos los documentos emitidos en el extranjero deben llevar la Apostilla de La Haya. Esto incluye certificados de nacimiento, antecedentes penales, certificados de matrimonio, títulos profesionales, entre otros.',
  },
  {
    question: '¿Cuánto dinero debo depositar para la residencia?',
    answer: 'Para la residencia temporal vía general, se requiere demostrar solvencia económica, típicamente mediante un depósito bancario de aproximadamente $5,000 USD. Para la vía inversionista SUACE, los requisitos de inversión son mayores y específicos al tipo de empresa.',
  },
  {
    question: '¿Puedo trabajar con residencia temporal?',
    answer: 'Sí, la residencia temporal te permite trabajar en Paraguay. Sin embargo, necesitarás obtener la Cédula de Identidad Paraguaya para poder firmar contratos laborales formales y abrir cuentas bancarias.',
  },
  {
    question: '¿Qué impuestos debo pagar como residente?',
    answer: 'Paraguay aplica el sistema de renta territorial, lo que significa que solo pagas impuestos por ingresos generados dentro del país. Los principales impuestos son el IRP (Impuesto a la Renta Personal) para empleados y el IVA para independientes. Las tasas son muy competitivas en comparación con otros países de la región.',
  },
  {
    question: '¿Es obligatorio el seguro de salud IPS?',
    answer: 'El IPS es obligatorio para trabajadores en relación de dependencia. Los aportes son compartidos: el empleado aporta el 9% y el empleador el 16.5% del salario. Los trabajadores independientes pueden optar voluntariamente por afiliarse.',
  },
  {
    question: '¿Puedo obtener la ciudadanía paraguaya?',
    answer: 'Sí, después de 3 años de residencia permanente ininterrumpida, puedes solicitar la ciudadanía paraguaya por naturalización. Esto requiere demostrar conocimientos básicos de español o guaraní y aprobación de un examen.',
  },
  {
    question: '¿Necesito un traductor público para mis documentos?',
    answer: 'Sí, todos los documentos en idioma extranjero deben ser traducidos por un Traductor Público matriculado en Paraguay. La traducción debe ser legalizada ante escribano público.',
  },
];

export const CURRENCIES: Currency[] = [
  { code: 'PYG', symbol: '₲', rate: 1 },
  { code: 'USD', symbol: '$', rate: 7300 },
  { code: 'EUR', symbol: '€', rate: 8000 },
];

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com',
  instagram: 'https://instagram.com',
  youtube: 'https://youtube.com',
};

export const CONTACT_INFO = {
  email: 'info@livingparaguay.com',
  phone: '+595 21 123 4567',
  whatsapp: '+595981123456',
};
