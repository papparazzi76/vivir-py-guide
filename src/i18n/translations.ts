export type Language = 'es' | 'en' | 'pt' | 'de';

export interface Translations {
  // Navigation
  nav: {
    home: string;
    permits: string;
    housing: string;
    schools: string;
    neighborhoods: string;
    taxation: string;
    socialSecurity: string;
    faq: string;
    contact: string;
  };
  // Header
  header: {
    startProcess: string;
  };
  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    getResidence: string;
    searchHousing: string;
  };
  // Permits Section
  permits: {
    title: string;
    subtitle: string;
    freeConsultation: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    temporaryResidence: {
      title: string;
      description: string;
    };
    permanentResidence: {
      title: string;
      description: string;
    };
    suaceResidence: {
      title: string;
      description: string;
    };
    paraguayanId: {
      title: string;
      description: string;
    };
    compareTitle: string;
    compareType: string;
    compareDuration: string;
    compareRequirements: string;
    compareAdvantages: string;
  };
  // Housing Section
  housing: {
    title: string;
    subtitle: string;
    filterCity: string;
    filterOperation: string;
    filterType: string;
    filterPrice: string;
    allCities: string;
    allOperations: string;
    allTypes: string;
    rental: string;
    sale: string;
    apartment: string;
    house: string;
    land: string;
    commercial: string;
    noResults: string;
    clearFilters: string;
  };
  // Schools Section
  schools: {
    title: string;
    subtitle: string;
    filterCity: string;
    allCities: string;
    languages: string;
    levels: string;
    tuition: string;
    preschool: string;
    primary: string;
    secondary: string;
    methodologyTitle: string;
    methodologyText: string;
    selectionTitle: string;
    selectionText: string;
    costLevels: {
      elite: string;
      traditional: string;
      accessible: string;
    };
  };
  // Neighborhoods Section
  neighborhoods: {
    title: string;
    subtitle: string;
    costOfLiving: string;
    costOfLivingSubtitle: string;
    featuredNeighborhoods: string;
    rent1br: string;
    rent3br: string;
    utilities: string;
    food: string;
    transport: string;
    entertainment: string;
    total: string;
  };
  // Taxation Section
  taxation: {
    title: string;
    subtitle: string;
    calculator: {
      title: string;
      subtitle: string;
      employee: string;
      independent: string;
      currency: string;
      grossIncome: string;
      deductions: string;
      addDeduction: string;
      concept: string;
      amount: string;
      calculate: string;
      results: string;
      netIncome: string;
      taxAmount: string;
    };
    tabs: {
      principles: string;
      fiscalResidence: string;
      mainTaxes: string;
      glossary: string;
    };
  };
  // Social Security Section
  socialSecurity: {
    title: string;
    subtitle: string;
    ipsTitle: string;
    ipsDescription: string;
    employeeTitle: string;
    employeeDescription: string;
    employerTitle: string;
    employerDescription: string;
    benefitsTitle: string;
    benefitsDescription: string;
    keyPointsTitle: string;
    keyPointsDescription: string;
  };
  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
  };
  // Contact Section
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    subject: string;
    message: string;
    send: string;
    sending: string;
    successMessage: string;
    contactInfo: string;
    phone: string;
    whatsapp: string;
  };
  // Footer
  footer: {
    description: string;
    navigation: string;
    legal: string;
    privacy: string;
    terms: string;
    cookies: string;
    followUs: string;
    rights: string;
  };
  // Chatbot
  chatbot: {
    title: string;
    placeholder: string;
    welcome: string;
    errorMessage: string;
  };
}

export const translations: Record<Language, Translations> = {
  es: {
    nav: {
      home: 'Inicio',
      permits: 'Permisos',
      housing: 'Vivienda',
      schools: 'Colegios',
      neighborhoods: 'Barrios',
      taxation: 'Impuestos',
      socialSecurity: 'Seguridad Social',
      faq: 'FAQ',
      contact: 'Contacto',
    },
    header: {
      startProcess: 'Iniciar Trámite',
    },
    hero: {
      title: 'Tu Nueva Vida en Paraguay Comienza Aquí',
      subtitle: 'Guía completa para expatriados: residencia, vivienda, educación y más',
      getResidence: 'Obtener Residencia',
      searchHousing: 'Buscar Vivienda',
    },
    permits: {
      title: 'Permisos y Residencia',
      subtitle: 'Todo lo que necesitas saber sobre los trámites de residencia en Paraguay',
      freeConsultation: 'Iniciar Consulta Gratuita',
      name: 'Nombre completo',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Consulta',
      sending: 'Enviando...',
      successMessage: '¡Gracias! Nos pondremos en contacto contigo pronto.',
      temporaryResidence: {
        title: 'Residencia Temporal',
        description: 'La residencia temporal tiene una duración de 2 años y es el primer paso para establecerse en Paraguay. Permite obtener la Cédula de Identidad Paraguaya.',
      },
      permanentResidence: {
        title: 'Residencia Permanente',
        description: 'Para establecerse a largo plazo. Se puede obtener tras 2 años de temporalidad, o de forma directa para inversionistas.',
      },
      suaceResidence: {
        title: 'Residencia SUACE',
        description: 'Programa especial para inversionistas que establezcan empresas en Paraguay. Requiere presentar Constancia de Inversionista.',
      },
      paraguayanId: {
        title: 'Cédula de Identidad',
        description: 'Es la "llave dorada" para la integración total: abrir cuentas bancarias, firmar contratos y acceder a todos los servicios.',
      },
      compareTitle: 'Comparativa de Tipos de Residencia',
      compareType: 'Tipo',
      compareDuration: 'Duración',
      compareRequirements: 'Requisitos Principales',
      compareAdvantages: 'Ventajas',
    },
    housing: {
      title: 'Búsqueda de Vivienda',
      subtitle: 'Encuentra tu hogar ideal en Paraguay',
      filterCity: 'Ciudad',
      filterOperation: 'Operación',
      filterType: 'Tipo de Propiedad',
      filterPrice: 'Precio Máximo',
      allCities: 'Todas las ciudades',
      allOperations: 'Todas las operaciones',
      allTypes: 'Todos los tipos',
      rental: 'Alquiler',
      sale: 'Venta',
      apartment: 'Apartamento',
      house: 'Casa',
      land: 'Terreno',
      commercial: 'Local Comercial',
      noResults: 'No se encontraron propiedades con los filtros seleccionados.',
      clearFilters: 'Limpiar filtros',
    },
    schools: {
      title: 'Colegios y Educación',
      subtitle: 'Encuentra la institución ideal para tu familia en Paraguay',
      filterCity: 'Ciudad',
      allCities: 'Todas las ciudades',
      languages: 'IDIOMAS',
      levels: 'NIVELES',
      tuition: 'MATRÍCULA ANUAL',
      preschool: 'Preescolar',
      primary: 'Primaria',
      secondary: 'Secundaria',
      methodologyTitle: 'Metodología de Selección',
      methodologyText: 'En Paraguay no existen rankings oficiales del Ministerio de Educación. La selección se basa en prestigio histórico, resultados en competencias externas, acreditaciones internacionales y percepción pública.',
      selectionTitle: 'Factores Clave de Decisión',
      selectionText: 'Perfil académico y pedagógico, proximidad y logística, afiliación y valores institucionales.',
      costLevels: {
        elite: 'Élite Internacional (IB, costos dolarizados)',
        traditional: 'Privados Tradicionales (alto prestigio nacional)',
        accessible: 'Subvencionados y Privados Accesibles',
      },
    },
    neighborhoods: {
      title: 'Barrios y Costo de Vida',
      subtitle: 'Conoce los mejores barrios y el costo de vida en Paraguay',
      costOfLiving: 'Costo de Vida Mensual',
      costOfLivingSubtitle: 'Estimaciones promedio por ciudad (en Guaraníes)',
      featuredNeighborhoods: 'Barrios Destacados',
      rent1br: 'Alquiler 1 habitación',
      rent3br: 'Alquiler 3 habitaciones',
      utilities: 'Servicios públicos',
      food: 'Alimentación',
      transport: 'Transporte',
      entertainment: 'Entretenimiento',
      total: 'Total estimado',
    },
    taxation: {
      title: 'Sistema Tributario',
      subtitle: 'Información completa sobre impuestos en Paraguay',
      calculator: {
        title: 'Calculadora de Impuestos',
        subtitle: 'Calcula tu carga tributaria estimada',
        employee: 'Empleado (IRP)',
        independent: 'Independiente (IVA)',
        currency: 'Moneda',
        grossIncome: 'Renta Bruta Anual',
        deductions: 'Deducciones',
        addDeduction: 'Agregar Deducción',
        concept: 'Concepto',
        amount: 'Monto',
        calculate: 'Calcular Impuesto',
        results: 'Resultados',
        netIncome: 'Renta Neta (después de deducciones)',
        taxAmount: 'Impuesto a Pagar',
      },
      tabs: {
        principles: 'Principios Clave',
        fiscalResidence: 'Residencia Fiscal',
        mainTaxes: 'Impuestos Principales',
        glossary: 'Glosario',
      },
    },
    socialSecurity: {
      title: 'Seguridad Social (IPS)',
      subtitle: 'Sistema de salud y jubilación en Paraguay',
      ipsTitle: 'Instituto de Previsión Social',
      ipsDescription: 'El IPS es el sistema de seguridad social de Paraguay que cubre salud y jubilación para trabajadores formales.',
      employeeTitle: 'Aporte del Empleado',
      employeeDescription: 'El trabajador aporta el 9% de su salario mensual al IPS.',
      employerTitle: 'Aporte del Empleador',
      employerDescription: 'El empleador contribuye con el 16.5% del salario del trabajador.',
      benefitsTitle: 'Beneficios Cubiertos',
      benefitsDescription: 'Atención médica, hospitalización, medicamentos, licencias por enfermedad y jubilación.',
      keyPointsTitle: 'Puntos Clave',
      keyPointsDescription: 'Obligatorio para empleados en relación de dependencia. Los independientes pueden afiliarse voluntariamente.',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las dudas más comunes sobre vivir en Paraguay',
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte con tu proceso de mudanza a Paraguay',
      name: 'Nombre completo',
      email: 'Email',
      subject: 'Asunto',
      message: 'Mensaje',
      send: 'Enviar Mensaje',
      sending: 'Enviando...',
      successMessage: '¡Gracias! Nos pondremos en contacto contigo pronto.',
      contactInfo: 'Información de Contacto',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
    },
    footer: {
      description: 'Tu guía completa para establecerte en Paraguay. Información confiable sobre residencia, vivienda, educación y más.',
      navigation: 'Navegación',
      legal: 'Legal',
      privacy: 'Política de Privacidad',
      terms: 'Términos y Condiciones',
      cookies: 'Política de Cookies',
      followUs: 'Síguenos',
      rights: 'Todos los derechos reservados.',
    },
    chatbot: {
      title: 'Guaraní Guide',
      placeholder: 'Escribe tu pregunta...',
      welcome: '¡Hola! Soy Guaraní Guide, tu asistente para mudarte a Paraguay. ¿En qué puedo ayudarte hoy?',
      errorMessage: 'Lo siento, ocurrió un error. Por favor, intenta de nuevo.',
    },
  },
  en: {
    nav: {
      home: 'Home',
      permits: 'Permits',
      housing: 'Housing',
      schools: 'Schools',
      neighborhoods: 'Neighborhoods',
      taxation: 'Taxation',
      socialSecurity: 'Social Security',
      faq: 'FAQ',
      contact: 'Contact',
    },
    header: {
      startProcess: 'Start Process',
    },
    hero: {
      title: 'Your New Life in Paraguay Starts Here',
      subtitle: 'Complete guide for expats: residence, housing, education and more',
      getResidence: 'Get Residence',
      searchHousing: 'Search Housing',
    },
    permits: {
      title: 'Permits and Residence',
      subtitle: 'Everything you need to know about residence procedures in Paraguay',
      freeConsultation: 'Start Free Consultation',
      name: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Inquiry',
      sending: 'Sending...',
      successMessage: 'Thank you! We will contact you soon.',
      temporaryResidence: {
        title: 'Temporary Residence',
        description: 'Temporary residence lasts 2 years and is the first step to settle in Paraguay. Allows obtaining the Paraguayan Identity Card.',
      },
      permanentResidence: {
        title: 'Permanent Residence',
        description: 'For long-term settlement. Can be obtained after 2 years of temporary residence, or directly for investors.',
      },
      suaceResidence: {
        title: 'SUACE Residence',
        description: 'Special program for investors establishing businesses in Paraguay. Requires Investor Certificate.',
      },
      paraguayanId: {
        title: 'Identity Card',
        description: 'The "golden key" to full integration: open bank accounts, sign contracts and access all services.',
      },
      compareTitle: 'Residence Types Comparison',
      compareType: 'Type',
      compareDuration: 'Duration',
      compareRequirements: 'Main Requirements',
      compareAdvantages: 'Advantages',
    },
    housing: {
      title: 'Housing Search',
      subtitle: 'Find your ideal home in Paraguay',
      filterCity: 'City',
      filterOperation: 'Operation',
      filterType: 'Property Type',
      filterPrice: 'Max Price',
      allCities: 'All cities',
      allOperations: 'All operations',
      allTypes: 'All types',
      rental: 'Rental',
      sale: 'Sale',
      apartment: 'Apartment',
      house: 'House',
      land: 'Land',
      commercial: 'Commercial',
      noResults: 'No properties found with selected filters.',
      clearFilters: 'Clear filters',
    },
    schools: {
      title: 'Schools and Education',
      subtitle: 'Find the ideal institution for your family in Paraguay',
      filterCity: 'City',
      allCities: 'All cities',
      languages: 'LANGUAGES',
      levels: 'LEVELS',
      tuition: 'ANNUAL TUITION',
      preschool: 'Preschool',
      primary: 'Primary',
      secondary: 'Secondary',
      methodologyTitle: 'Selection Methodology',
      methodologyText: 'There are no official rankings from the Ministry of Education in Paraguay. Selection is based on historical prestige, external competition results, international accreditations and public perception.',
      selectionTitle: 'Key Decision Factors',
      selectionText: 'Academic and pedagogical profile, proximity and logistics, institutional affiliation and values.',
      costLevels: {
        elite: 'International Elite (IB, dollarized costs)',
        traditional: 'Traditional Private (high national prestige)',
        accessible: 'Subsidized and Accessible Private',
      },
    },
    neighborhoods: {
      title: 'Neighborhoods and Cost of Living',
      subtitle: 'Discover the best neighborhoods and cost of living in Paraguay',
      costOfLiving: 'Monthly Cost of Living',
      costOfLivingSubtitle: 'Average estimates per city (in Guaraníes)',
      featuredNeighborhoods: 'Featured Neighborhoods',
      rent1br: '1-bedroom rent',
      rent3br: '3-bedroom rent',
      utilities: 'Utilities',
      food: 'Food',
      transport: 'Transport',
      entertainment: 'Entertainment',
      total: 'Estimated total',
    },
    taxation: {
      title: 'Tax System',
      subtitle: 'Complete information about taxes in Paraguay',
      calculator: {
        title: 'Tax Calculator',
        subtitle: 'Calculate your estimated tax burden',
        employee: 'Employee (IRP)',
        independent: 'Independent (IVA)',
        currency: 'Currency',
        grossIncome: 'Annual Gross Income',
        deductions: 'Deductions',
        addDeduction: 'Add Deduction',
        concept: 'Concept',
        amount: 'Amount',
        calculate: 'Calculate Tax',
        results: 'Results',
        netIncome: 'Net Income (after deductions)',
        taxAmount: 'Tax to Pay',
      },
      tabs: {
        principles: 'Key Principles',
        fiscalResidence: 'Fiscal Residence',
        mainTaxes: 'Main Taxes',
        glossary: 'Glossary',
      },
    },
    socialSecurity: {
      title: 'Social Security (IPS)',
      subtitle: 'Health and retirement system in Paraguay',
      ipsTitle: 'Social Security Institute',
      ipsDescription: 'IPS is Paraguay\'s social security system covering health and retirement for formal workers.',
      employeeTitle: 'Employee Contribution',
      employeeDescription: 'The worker contributes 9% of their monthly salary to IPS.',
      employerTitle: 'Employer Contribution',
      employerDescription: 'The employer contributes 16.5% of the worker\'s salary.',
      benefitsTitle: 'Covered Benefits',
      benefitsDescription: 'Medical care, hospitalization, medications, sick leave and retirement.',
      keyPointsTitle: 'Key Points',
      keyPointsDescription: 'Mandatory for employees. Independent workers can join voluntarily.',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about living in Paraguay',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you with your relocation process to Paraguay',
      name: 'Full name',
      email: 'Email',
      subject: 'Subject',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      successMessage: 'Thank you! We will contact you soon.',
      contactInfo: 'Contact Information',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
    },
    footer: {
      description: 'Your complete guide to settling in Paraguay. Reliable information about residence, housing, education and more.',
      navigation: 'Navigation',
      legal: 'Legal',
      privacy: 'Privacy Policy',
      terms: 'Terms and Conditions',
      cookies: 'Cookie Policy',
      followUs: 'Follow Us',
      rights: 'All rights reserved.',
    },
    chatbot: {
      title: 'Guaraní Guide',
      placeholder: 'Type your question...',
      welcome: 'Hello! I\'m Guaraní Guide, your assistant for moving to Paraguay. How can I help you today?',
      errorMessage: 'Sorry, an error occurred. Please try again.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      permits: 'Permissões',
      housing: 'Habitação',
      schools: 'Escolas',
      neighborhoods: 'Bairros',
      taxation: 'Impostos',
      socialSecurity: 'Segurança Social',
      faq: 'FAQ',
      contact: 'Contato',
    },
    header: {
      startProcess: 'Iniciar Processo',
    },
    hero: {
      title: 'Sua Nova Vida no Paraguai Começa Aqui',
      subtitle: 'Guia completo para expatriados: residência, habitação, educação e mais',
      getResidence: 'Obter Residência',
      searchHousing: 'Buscar Habitação',
    },
    permits: {
      title: 'Permissões e Residência',
      subtitle: 'Tudo o que você precisa saber sobre procedimentos de residência no Paraguai',
      freeConsultation: 'Iniciar Consulta Gratuita',
      name: 'Nome completo',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Consulta',
      sending: 'Enviando...',
      successMessage: 'Obrigado! Entraremos em contato em breve.',
      temporaryResidence: {
        title: 'Residência Temporária',
        description: 'A residência temporária tem duração de 2 anos e é o primeiro passo para se estabelecer no Paraguai. Permite obter a Cédula de Identidade Paraguaia.',
      },
      permanentResidence: {
        title: 'Residência Permanente',
        description: 'Para estabelecimento de longo prazo. Pode ser obtida após 2 anos de residência temporária, ou diretamente para investidores.',
      },
      suaceResidence: {
        title: 'Residência SUACE',
        description: 'Programa especial para investidores que estabelecem empresas no Paraguai. Requer Certificado de Investidor.',
      },
      paraguayanId: {
        title: 'Cédula de Identidade',
        description: 'A "chave dourada" para integração total: abrir contas bancárias, assinar contratos e acessar todos os serviços.',
      },
      compareTitle: 'Comparação de Tipos de Residência',
      compareType: 'Tipo',
      compareDuration: 'Duração',
      compareRequirements: 'Requisitos Principais',
      compareAdvantages: 'Vantagens',
    },
    housing: {
      title: 'Busca de Habitação',
      subtitle: 'Encontre seu lar ideal no Paraguai',
      filterCity: 'Cidade',
      filterOperation: 'Operação',
      filterType: 'Tipo de Imóvel',
      filterPrice: 'Preço Máximo',
      allCities: 'Todas as cidades',
      allOperations: 'Todas as operações',
      allTypes: 'Todos os tipos',
      rental: 'Aluguel',
      sale: 'Venda',
      apartment: 'Apartamento',
      house: 'Casa',
      land: 'Terreno',
      commercial: 'Comercial',
      noResults: 'Nenhum imóvel encontrado com os filtros selecionados.',
      clearFilters: 'Limpar filtros',
    },
    schools: {
      title: 'Escolas e Educação',
      subtitle: 'Encontre a instituição ideal para sua família no Paraguai',
      filterCity: 'Cidade',
      allCities: 'Todas as cidades',
      languages: 'IDIOMAS',
      levels: 'NÍVEIS',
      tuition: 'MATRÍCULA ANUAL',
      preschool: 'Pré-escolar',
      primary: 'Primária',
      secondary: 'Secundária',
      methodologyTitle: 'Metodologia de Seleção',
      methodologyText: 'Não existem classificações oficiais do Ministério da Educação no Paraguai. A seleção é baseada em prestígio histórico, resultados em competições externas, acreditações internacionais e percepção pública.',
      selectionTitle: 'Fatores Chave de Decisão',
      selectionText: 'Perfil acadêmico e pedagógico, proximidade e logística, afiliação e valores institucionais.',
      costLevels: {
        elite: 'Elite Internacional (IB, custos dolarizados)',
        traditional: 'Privadas Tradicionais (alto prestígio nacional)',
        accessible: 'Subsidiadas e Privadas Acessíveis',
      },
    },
    neighborhoods: {
      title: 'Bairros e Custo de Vida',
      subtitle: 'Conheça os melhores bairros e o custo de vida no Paraguai',
      costOfLiving: 'Custo de Vida Mensal',
      costOfLivingSubtitle: 'Estimativas médias por cidade (em Guaranis)',
      featuredNeighborhoods: 'Bairros Destacados',
      rent1br: 'Aluguel 1 quarto',
      rent3br: 'Aluguel 3 quartos',
      utilities: 'Serviços públicos',
      food: 'Alimentação',
      transport: 'Transporte',
      entertainment: 'Entretenimento',
      total: 'Total estimado',
    },
    taxation: {
      title: 'Sistema Tributário',
      subtitle: 'Informação completa sobre impostos no Paraguai',
      calculator: {
        title: 'Calculadora de Impostos',
        subtitle: 'Calcule sua carga tributária estimada',
        employee: 'Empregado (IRP)',
        independent: 'Independente (IVA)',
        currency: 'Moeda',
        grossIncome: 'Renda Bruta Anual',
        deductions: 'Deduções',
        addDeduction: 'Adicionar Dedução',
        concept: 'Conceito',
        amount: 'Valor',
        calculate: 'Calcular Imposto',
        results: 'Resultados',
        netIncome: 'Renda Líquida (após deduções)',
        taxAmount: 'Imposto a Pagar',
      },
      tabs: {
        principles: 'Princípios Chave',
        fiscalResidence: 'Residência Fiscal',
        mainTaxes: 'Impostos Principais',
        glossary: 'Glossário',
      },
    },
    socialSecurity: {
      title: 'Segurança Social (IPS)',
      subtitle: 'Sistema de saúde e aposentadoria no Paraguai',
      ipsTitle: 'Instituto de Previdência Social',
      ipsDescription: 'O IPS é o sistema de segurança social do Paraguai que cobre saúde e aposentadoria para trabalhadores formais.',
      employeeTitle: 'Contribuição do Empregado',
      employeeDescription: 'O trabalhador contribui com 9% do seu salário mensal para o IPS.',
      employerTitle: 'Contribuição do Empregador',
      employerDescription: 'O empregador contribui com 16,5% do salário do trabalhador.',
      benefitsTitle: 'Benefícios Cobertos',
      benefitsDescription: 'Atendimento médico, hospitalização, medicamentos, licença médica e aposentadoria.',
      keyPointsTitle: 'Pontos Chave',
      keyPointsDescription: 'Obrigatório para empregados. Trabalhadores independentes podem se afiliar voluntariamente.',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas às perguntas mais comuns sobre viver no Paraguai',
    },
    contact: {
      title: 'Contate-nos',
      subtitle: 'Estamos aqui para ajudá-lo com seu processo de mudança para o Paraguai',
      name: 'Nome completo',
      email: 'Email',
      subject: 'Assunto',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      successMessage: 'Obrigado! Entraremos em contato em breve.',
      contactInfo: 'Informação de Contato',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
    },
    footer: {
      description: 'Seu guia completo para se estabelecer no Paraguai. Informação confiável sobre residência, habitação, educação e mais.',
      navigation: 'Navegação',
      legal: 'Legal',
      privacy: 'Política de Privacidade',
      terms: 'Termos e Condições',
      cookies: 'Política de Cookies',
      followUs: 'Siga-nos',
      rights: 'Todos os direitos reservados.',
    },
    chatbot: {
      title: 'Guaraní Guide',
      placeholder: 'Digite sua pergunta...',
      welcome: 'Olá! Sou Guaraní Guide, seu assistente para mudar para o Paraguai. Como posso ajudá-lo hoje?',
      errorMessage: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      permits: 'Genehmigungen',
      housing: 'Wohnen',
      schools: 'Schulen',
      neighborhoods: 'Stadtteile',
      taxation: 'Besteuerung',
      socialSecurity: 'Sozialversicherung',
      faq: 'FAQ',
      contact: 'Kontakt',
    },
    header: {
      startProcess: 'Prozess Starten',
    },
    hero: {
      title: 'Ihr Neues Leben in Paraguay Beginnt Hier',
      subtitle: 'Vollständiger Leitfaden für Expats: Aufenthalt, Wohnen, Bildung und mehr',
      getResidence: 'Aufenthalt Erhalten',
      searchHousing: 'Wohnung Suchen',
    },
    permits: {
      title: 'Genehmigungen und Aufenthalt',
      subtitle: 'Alles, was Sie über Aufenthaltsverfahren in Paraguay wissen müssen',
      freeConsultation: 'Kostenlose Beratung Starten',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Anfrage Senden',
      sending: 'Wird gesendet...',
      successMessage: 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
      temporaryResidence: {
        title: 'Vorübergehende Aufenthaltsgenehmigung',
        description: 'Die vorübergehende Aufenthaltsgenehmigung gilt für 2 Jahre und ist der erste Schritt zur Niederlassung in Paraguay. Ermöglicht den Erhalt des paraguayischen Personalausweises.',
      },
      permanentResidence: {
        title: 'Dauerhafte Aufenthaltsgenehmigung',
        description: 'Für langfristige Niederlassung. Kann nach 2 Jahren vorübergehender Aufenthaltsgenehmigung oder direkt für Investoren erhalten werden.',
      },
      suaceResidence: {
        title: 'SUACE Aufenthaltsgenehmigung',
        description: 'Spezielles Programm für Investoren, die Unternehmen in Paraguay gründen. Erfordert Investorenbescheinigung.',
      },
      paraguayanId: {
        title: 'Personalausweis',
        description: 'Der "goldene Schlüssel" zur vollständigen Integration: Bankkonten eröffnen, Verträge unterschreiben und auf alle Dienste zugreifen.',
      },
      compareTitle: 'Vergleich der Aufenthaltsgenehmigungstypen',
      compareType: 'Typ',
      compareDuration: 'Dauer',
      compareRequirements: 'Hauptanforderungen',
      compareAdvantages: 'Vorteile',
    },
    housing: {
      title: 'Wohnungssuche',
      subtitle: 'Finden Sie Ihr ideales Zuhause in Paraguay',
      filterCity: 'Stadt',
      filterOperation: 'Operation',
      filterType: 'Immobilientyp',
      filterPrice: 'Höchstpreis',
      allCities: 'Alle Städte',
      allOperations: 'Alle Operationen',
      allTypes: 'Alle Typen',
      rental: 'Miete',
      sale: 'Verkauf',
      apartment: 'Wohnung',
      house: 'Haus',
      land: 'Grundstück',
      commercial: 'Gewerbe',
      noResults: 'Keine Immobilien mit den ausgewählten Filtern gefunden.',
      clearFilters: 'Filter löschen',
    },
    schools: {
      title: 'Schulen und Bildung',
      subtitle: 'Finden Sie die ideale Institution für Ihre Familie in Paraguay',
      filterCity: 'Stadt',
      allCities: 'Alle Städte',
      languages: 'SPRACHEN',
      levels: 'STUFEN',
      tuition: 'JÄHRLICHES SCHULGELD',
      preschool: 'Vorschule',
      primary: 'Grundschule',
      secondary: 'Sekundarstufe',
      methodologyTitle: 'Auswahlmethodik',
      methodologyText: 'Es gibt keine offiziellen Rankings des Bildungsministeriums in Paraguay. Die Auswahl basiert auf historischem Prestige, Ergebnissen bei externen Wettbewerben, internationalen Akkreditierungen und öffentlicher Wahrnehmung.',
      selectionTitle: 'Wichtige Entscheidungsfaktoren',
      selectionText: 'Akademisches und pädagogisches Profil, Nähe und Logistik, institutionelle Zugehörigkeit und Werte.',
      costLevels: {
        elite: 'Internationale Elite (IB, dollarisierte Kosten)',
        traditional: 'Traditionelle Private (hohes nationales Prestige)',
        accessible: 'Subventionierte und Zugängliche Private',
      },
    },
    neighborhoods: {
      title: 'Stadtteile und Lebenshaltungskosten',
      subtitle: 'Entdecken Sie die besten Stadtteile und Lebenshaltungskosten in Paraguay',
      costOfLiving: 'Monatliche Lebenshaltungskosten',
      costOfLivingSubtitle: 'Durchschnittliche Schätzungen pro Stadt (in Guaraníes)',
      featuredNeighborhoods: 'Ausgewählte Stadtteile',
      rent1br: 'Miete 1 Zimmer',
      rent3br: 'Miete 3 Zimmer',
      utilities: 'Nebenkosten',
      food: 'Lebensmittel',
      transport: 'Transport',
      entertainment: 'Unterhaltung',
      total: 'Geschätzte Gesamtkosten',
    },
    taxation: {
      title: 'Steuersystem',
      subtitle: 'Vollständige Informationen über Steuern in Paraguay',
      calculator: {
        title: 'Steuerrechner',
        subtitle: 'Berechnen Sie Ihre geschätzte Steuerlast',
        employee: 'Angestellter (IRP)',
        independent: 'Selbständig (IVA)',
        currency: 'Währung',
        grossIncome: 'Jährliches Bruttoeinkommen',
        deductions: 'Abzüge',
        addDeduction: 'Abzug Hinzufügen',
        concept: 'Konzept',
        amount: 'Betrag',
        calculate: 'Steuer Berechnen',
        results: 'Ergebnisse',
        netIncome: 'Nettoeinkommen (nach Abzügen)',
        taxAmount: 'Zu Zahlende Steuer',
      },
      tabs: {
        principles: 'Schlüsselprinzipien',
        fiscalResidence: 'Steuerlicher Wohnsitz',
        mainTaxes: 'Hauptsteuern',
        glossary: 'Glossar',
      },
    },
    socialSecurity: {
      title: 'Sozialversicherung (IPS)',
      subtitle: 'Gesundheits- und Rentensystem in Paraguay',
      ipsTitle: 'Sozialversicherungsinstitut',
      ipsDescription: 'IPS ist Paraguays Sozialversicherungssystem für Gesundheit und Rente für formelle Arbeitnehmer.',
      employeeTitle: 'Arbeitnehmerbeitrag',
      employeeDescription: 'Der Arbeitnehmer zahlt 9% seines monatlichen Gehalts an IPS.',
      employerTitle: 'Arbeitgeberbeitrag',
      employerDescription: 'Der Arbeitgeber zahlt 16,5% des Arbeitnehmergehalts.',
      benefitsTitle: 'Abgedeckte Leistungen',
      benefitsDescription: 'Ärztliche Versorgung, Krankenhausaufenthalt, Medikamente, Krankschreibung und Rente.',
      keyPointsTitle: 'Wichtige Punkte',
      keyPointsDescription: 'Obligatorisch für Angestellte. Selbständige können freiwillig beitreten.',
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      subtitle: 'Antworten auf die häufigsten Fragen zum Leben in Paraguay',
    },
    contact: {
      title: 'Kontaktieren Sie Uns',
      subtitle: 'Wir sind hier, um Ihnen bei Ihrem Umzugsprozess nach Paraguay zu helfen',
      name: 'Vollständiger Name',
      email: 'E-Mail',
      subject: 'Betreff',
      message: 'Nachricht',
      send: 'Nachricht Senden',
      sending: 'Wird gesendet...',
      successMessage: 'Vielen Dank! Wir werden uns bald bei Ihnen melden.',
      contactInfo: 'Kontaktinformationen',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
    },
    footer: {
      description: 'Ihr vollständiger Leitfaden zur Niederlassung in Paraguay. Zuverlässige Informationen über Aufenthalt, Wohnen, Bildung und mehr.',
      navigation: 'Navigation',
      legal: 'Rechtliches',
      privacy: 'Datenschutzerklärung',
      terms: 'Allgemeine Geschäftsbedingungen',
      cookies: 'Cookie-Richtlinie',
      followUs: 'Folgen Sie Uns',
      rights: 'Alle Rechte vorbehalten.',
    },
    chatbot: {
      title: 'Guaraní Guide',
      placeholder: 'Geben Sie Ihre Frage ein...',
      welcome: 'Hallo! Ich bin Guaraní Guide, Ihr Assistent für den Umzug nach Paraguay. Wie kann ich Ihnen heute helfen?',
      errorMessage: 'Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
  },
};
