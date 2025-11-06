export type Language = 'es' | 'pt';

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
    startProcess: string;
  };
  
  // Hero Section
  hero: {
    slide1Title: string;
    slide1Subtitle: string;
    slide2Title: string;
    slide2Subtitle: string;
    slide3Title: string;
    slide3Subtitle: string;
    exploreCTA: string;
    contactCTA: string;
  };
  
  // Permits Section
  permits: {
    title: string;
    subtitle: string;
    temporaryTitle: string;
    temporaryDuration: string;
    temporaryDescription: string;
    temporaryRequirement1: string;
    temporaryRequirement2: string;
    temporaryRequirement3: string;
    temporaryRequirement4: string;
    permanentTitle: string;
    permanentDuration: string;
    permanentDescription: string;
    permanentRequirement1: string;
    permanentRequirement2: string;
    permanentRequirement3: string;
    permanentRequirement4: string;
    comparisonTitle: string;
    comparisonFeature: string;
    comparisonTemporary: string;
    comparisonPermanent: string;
    comparisonValidity: string;
    comparisonTemporaryValidity: string;
    comparisonPermanentValidity: string;
    comparisonWork: string;
    comparisonWorkValue: string;
    comparisonInvestment: string;
    comparisonTemporaryInvestment: string;
    comparisonPermanentInvestment: string;
    comparisonProcessing: string;
    comparisonTemporaryProcessing: string;
    comparisonPermanentProcessing: string;
    comparisonRenewal: string;
    comparisonTemporaryRenewal: string;
    comparisonPermanentRenewal: string;
    contactFormTitle: string;
    contactFormSubtitle: string;
    contactFormName: string;
    contactFormEmail: string;
    contactFormMessage: string;
    contactFormSubmit: string;
    contactFormSubmitting: string;
    contactFormSuccess: string;
  };
  
  // Housing Section
  housing: {
    title: string;
    subtitle: string;
    filterCity: string;
    filterAllCities: string;
    filterType: string;
    filterAllTypes: string;
    filterRent: string;
    filterSale: string;
    filterPropertyType: string;
    filterAllProperties: string;
    filterApartment: string;
    filterHouse: string;
    filterMaxPrice: string;
    noResults: string;
    area: string;
    bedrooms: string;
    bathrooms: string;
  };
  
  // Schools Section
  schools: {
    title: string;
    subtitle: string;
    filterCity: string;
    filterAllCities: string;
    ranking: string;
    languages: string;
    levels: string;
  };
  
  // Neighborhoods Section
  neighborhoods: {
    title: string;
    subtitle: string;
  };
  
  // Taxation Section
  taxation: {
    title: string;
    subtitle: string;
    systemTitle: string;
    systemText: string;
    ratesTitle: string;
    ratesText: string;
    benefitsTitle: string;
    benefitsText: string;
    calculatorTitle: string;
    calculatorSubtitle: string;
    annualIncome: string;
    currency: string;
    deductions: string;
    deductionConcept: string;
    deductionAmount: string;
    addDeduction: string;
    calculate: string;
    resultsTitle: string;
    grossIncome: string;
    netIncome: string;
    taxInPYG: string;
    taxIn: string;
  };
  
  // Social Security Section
  socialSecurity: {
    title: string;
    subtitle: string;
    coverageTitle: string;
    coverageText: string;
    contributionsTitle: string;
    contributionsDependentTitle: string;
    contributionsDependentText: string;
    contributionsIndependentTitle: string;
    contributionsIndependentText: string;
    taxBenefitTitle: string;
    taxBenefitText: string;
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
    email: string;
    phone: string;
    whatsapp: string;
    formTitle: string;
    formName: string;
    formEmail: string;
    formSubject: string;
    formMessage: string;
    formSubmit: string;
    formSubmitting: string;
    formSuccess: string;
  };
  
  // Footer
  footer: {
    company: string;
    companyAbout: string;
    companyServices: string;
    companyTeam: string;
    resources: string;
    resourcesBlog: string;
    resourcesGuides: string;
    resourcesFAQ: string;
    legal: string;
    legalPrivacy: string;
    legalTerms: string;
    legalCookies: string;
    followUs: string;
    copyright: string;
  };
  
  // Chatbot
  chatbot: {
    title: string;
    placeholder: string;
    send: string;
    thinking: string;
    error: string;
  };
  
  // Common
  common: {
    loading: string;
    error: string;
    backHome: string;
    underConstruction: string;
    underConstructionText: string;
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
      startProcess: 'Iniciar Trámite',
    },
    hero: {
      slide1Title: 'Tu Nueva Vida en Paraguay Comienza Aquí',
      slide1Subtitle: 'Descubre todo lo que necesitas saber para mudarte y establecerte en Paraguay.',
      slide2Title: 'Libertad Fiscal y Calidad de Vida',
      slide2Subtitle: 'Paraguay ofrece uno de los sistemas fiscales más atractivos de América Latina.',
      slide3Title: 'Comunidad Internacional Creciente',
      slide3Subtitle: 'Únete a miles de expatriados que ya han elegido Paraguay como su nuevo hogar.',
      exploreCTA: 'Explorar',
      contactCTA: 'Contactar',
    },
    permits: {
      title: 'Obtén tu Residencia en Paraguay',
      subtitle: 'Guía completa sobre los tipos de residencia disponibles y sus requisitos.',
      temporaryTitle: 'Residencia Temporal',
      temporaryDuration: '2 años',
      temporaryDescription: 'Ideal para quienes desean establecerse en Paraguay o invertir en el país.',
      temporaryRequirement1: 'Pasaporte vigente',
      temporaryRequirement2: 'Certificado de antecedentes penales apostillado',
      temporaryRequirement3: 'Certificado de nacimiento apostillado',
      temporaryRequirement4: 'Depósito bancario mínimo',
      permanentTitle: 'Residencia Permanente',
      permanentDuration: 'Indefinida',
      permanentDescription: 'Obtén residencia permanente después de 3 años con residencia temporal.',
      permanentRequirement1: 'Residencia temporal vigente por 3 años',
      permanentRequirement2: 'Certificado de buena conducta',
      permanentRequirement3: 'Comprobante de domicilio',
      permanentRequirement4: 'Declaración jurada de ingresos',
      comparisonTitle: 'Comparación de Residencias',
      comparisonFeature: 'Característica',
      comparisonTemporary: 'Temporal',
      comparisonPermanent: 'Permanente',
      comparisonValidity: 'Vigencia',
      comparisonTemporaryValidity: '2 años',
      comparisonPermanentValidity: 'Indefinida',
      comparisonWork: 'Derecho a trabajar',
      comparisonWorkValue: 'Sí',
      comparisonInvestment: 'Inversión requerida',
      comparisonTemporaryInvestment: '~$5,000 USD',
      comparisonPermanentInvestment: 'No requerida',
      comparisonProcessing: 'Tiempo de trámite',
      comparisonTemporaryProcessing: '2-4 meses',
      comparisonPermanentProcessing: '1-2 meses',
      comparisonRenewal: 'Renovación',
      comparisonTemporaryRenewal: 'Cada 2 años',
      comparisonPermanentRenewal: 'No requerida',
      contactFormTitle: '¿Necesitas Ayuda?',
      contactFormSubtitle: 'Te asesoramos en todo el proceso',
      contactFormName: 'Nombre',
      contactFormEmail: 'Email',
      contactFormMessage: 'Mensaje',
      contactFormSubmit: 'Enviar Consulta',
      contactFormSubmitting: 'Enviando...',
      contactFormSuccess: 'Consulta enviada con éxito',
    },
    housing: {
      title: 'Encuentra tu Hogar Ideal',
      subtitle: 'Explora las mejores opciones de vivienda en Paraguay.',
      filterCity: 'Ciudad',
      filterAllCities: 'Todas las ciudades',
      filterType: 'Tipo',
      filterAllTypes: 'Todos',
      filterRent: 'Alquiler',
      filterSale: 'Venta',
      filterPropertyType: 'Propiedad',
      filterAllProperties: 'Todas',
      filterApartment: 'Apartamento',
      filterHouse: 'Casa',
      filterMaxPrice: 'Precio Máximo',
      noResults: 'No se encontraron propiedades con los filtros seleccionados.',
      area: 'm²',
      bedrooms: 'dorms',
      bathrooms: 'baños',
    },
    schools: {
      title: 'Mejores Colegios',
      subtitle: 'Encuentra la educación perfecta para tus hijos.',
      filterCity: 'Ciudad',
      filterAllCities: 'Todas las ciudades',
      ranking: 'Calificación',
      languages: 'Idiomas',
      levels: 'Niveles',
    },
    neighborhoods: {
      title: 'Explora los Mejores Barrios',
      subtitle: 'Descubre dónde construir tu nueva vida en Paraguay.',
    },
    taxation: {
      title: 'Sistema Tributario Paraguayo',
      subtitle: 'Información completa sobre impuestos en Paraguay.',
      systemTitle: 'Sistema Territorial',
      systemText: 'Paraguay aplica el principio de renta territorial, lo que significa que solo pagas impuestos sobre ingresos generados dentro del país. Los ingresos del exterior no tributan.',
      ratesTitle: 'Tasas Competitivas',
      ratesText: 'El Impuesto a la Renta Personal (IRP) tiene tasas progresivas del 8% al 10%, significativamente más bajas que en otros países de la región.',
      benefitsTitle: 'Beneficios Fiscales',
      benefitsText: 'Deducciones por aportes al IPS, gastos médicos, educación, y otros conceptos permitidos por ley pueden reducir significativamente tu carga tributaria.',
      calculatorTitle: 'Calculadora de Impuestos',
      calculatorSubtitle: 'Calcula tu impuesto aproximado según tu renta anual',
      annualIncome: 'Renta Bruta Anual',
      currency: 'Moneda',
      deductions: 'Deducciones',
      deductionConcept: 'Concepto',
      deductionAmount: 'Monto',
      addDeduction: 'Agregar',
      calculate: 'Calcular Impuesto',
      resultsTitle: 'Resultados',
      grossIncome: 'Renta Bruta',
      netIncome: 'Renta Neta (después de deducciones)',
      taxInPYG: 'Impuesto a pagar (PYG)',
      taxIn: 'Impuesto a pagar',
    },
    socialSecurity: {
      title: 'Instituto de Previsión Social (IPS)',
      subtitle: 'Información sobre el sistema de seguridad social en Paraguay.',
      coverageTitle: 'Cobertura',
      coverageText: 'El IPS brinda atención médica, jubilaciones, pensiones y subsidios por enfermedad, maternidad y riesgos profesionales.',
      contributionsTitle: 'Aportes y Afiliación',
      contributionsDependentTitle: 'Trabajadores en Relación de Dependencia',
      contributionsDependentText: 'Empleado: 9% del salario | Empleador: 16.5% del salario | Afiliación obligatoria',
      contributionsIndependentTitle: 'Trabajadores Independientes',
      contributionsIndependentText: 'Trabajador: 18% de ingresos declarados | Afiliación voluntaria',
      taxBenefitTitle: 'Beneficio Fiscal',
      taxBenefitText: 'Los aportes al IPS son 100% deducibles del Impuesto a la Renta Personal (IRP), reduciendo tu carga tributaria efectiva.',
    },
    faq: {
      title: 'Preguntas Frecuentes (FAQ)',
      subtitle: 'Respuestas a las dudas más comunes sobre la mudanza a Paraguay.',
    },
    contact: {
      title: 'Contáctanos',
      subtitle: 'Estamos aquí para ayudarte en tu proceso de mudanza a Paraguay.',
      email: 'Email',
      phone: 'Teléfono',
      whatsapp: 'WhatsApp',
      formTitle: 'Envíanos un Mensaje',
      formName: 'Nombre',
      formEmail: 'Email',
      formSubject: 'Asunto',
      formMessage: 'Mensaje',
      formSubmit: 'Enviar Mensaje',
      formSubmitting: 'Enviando...',
      formSuccess: 'Mensaje enviado con éxito',
    },
    footer: {
      company: 'Empresa',
      companyAbout: 'Sobre Nosotros',
      companyServices: 'Servicios',
      companyTeam: 'Equipo',
      resources: 'Recursos',
      resourcesBlog: 'Blog',
      resourcesGuides: 'Guías',
      resourcesFAQ: 'Preguntas Frecuentes',
      legal: 'Legal',
      legalPrivacy: 'Política de Privacidad',
      legalTerms: 'Términos de Uso',
      legalCookies: 'Política de Cookies',
      followUs: 'Síguenos',
      copyright: '© 2024 Living Paraguay. Todos los derechos reservados.',
    },
    chatbot: {
      title: 'Asistente Virtual',
      placeholder: 'Escribe tu pregunta...',
      send: 'Enviar',
      thinking: 'Pensando...',
      error: 'Lo siento, ocurrió un error. Por favor intenta de nuevo.',
    },
    common: {
      loading: 'Cargando...',
      error: 'Error',
      backHome: 'Volver al Inicio',
      underConstruction: 'Sección en Construcción',
      underConstructionText: 'Esta sección estará disponible pronto.',
    },
  },
  pt: {
    nav: {
      home: 'Início',
      permits: 'Permissões',
      housing: 'Moradia',
      schools: 'Escolas',
      neighborhoods: 'Bairros',
      taxation: 'Impostos',
      socialSecurity: 'Previdência Social',
      faq: 'FAQ',
      contact: 'Contato',
      startProcess: 'Iniciar Processo',
    },
    hero: {
      slide1Title: 'Sua Nova Vida no Paraguai Começa Aqui',
      slide1Subtitle: 'Descubra tudo o que você precisa saber para se mudar e se estabelecer no Paraguai.',
      slide2Title: 'Liberdade Fiscal e Qualidade de Vida',
      slide2Subtitle: 'O Paraguai oferece um dos sistemas fiscais mais atrativos da América Latina.',
      slide3Title: 'Comunidade Internacional Crescente',
      slide3Subtitle: 'Junte-se a milhares de expatriados que já escolheram o Paraguai como seu novo lar.',
      exploreCTA: 'Explorar',
      contactCTA: 'Contatar',
    },
    permits: {
      title: 'Obtenha sua Residência no Paraguai',
      subtitle: 'Guia completo sobre os tipos de residência disponíveis e seus requisitos.',
      temporaryTitle: 'Residência Temporária',
      temporaryDuration: '2 anos',
      temporaryDescription: 'Ideal para quem deseja se estabelecer no Paraguai ou investir no país.',
      temporaryRequirement1: 'Passaporte válido',
      temporaryRequirement2: 'Certidão de antecedentes criminais apostilada',
      temporaryRequirement3: 'Certidão de nascimento apostilada',
      temporaryRequirement4: 'Depósito bancário mínimo',
      permanentTitle: 'Residência Permanente',
      permanentDuration: 'Indefinida',
      permanentDescription: 'Obtenha residência permanente após 3 anos com residência temporária.',
      permanentRequirement1: 'Residência temporária válida por 3 anos',
      permanentRequirement2: 'Certidão de boa conduta',
      permanentRequirement3: 'Comprovante de endereço',
      permanentRequirement4: 'Declaração juramentada de renda',
      comparisonTitle: 'Comparação de Residências',
      comparisonFeature: 'Característica',
      comparisonTemporary: 'Temporária',
      comparisonPermanent: 'Permanente',
      comparisonValidity: 'Validade',
      comparisonTemporaryValidity: '2 anos',
      comparisonPermanentValidity: 'Indefinida',
      comparisonWork: 'Direito ao trabalho',
      comparisonWorkValue: 'Sim',
      comparisonInvestment: 'Investimento necessário',
      comparisonTemporaryInvestment: '~$5.000 USD',
      comparisonPermanentInvestment: 'Não necessário',
      comparisonProcessing: 'Tempo de processamento',
      comparisonTemporaryProcessing: '2-4 meses',
      comparisonPermanentProcessing: '1-2 meses',
      comparisonRenewal: 'Renovação',
      comparisonTemporaryRenewal: 'A cada 2 anos',
      comparisonPermanentRenewal: 'Não necessária',
      contactFormTitle: 'Precisa de Ajuda?',
      contactFormSubtitle: 'Assessoramos você em todo o processo',
      contactFormName: 'Nome',
      contactFormEmail: 'Email',
      contactFormMessage: 'Mensagem',
      contactFormSubmit: 'Enviar Consulta',
      contactFormSubmitting: 'Enviando...',
      contactFormSuccess: 'Consulta enviada com sucesso',
    },
    housing: {
      title: 'Encontre seu Lar Ideal',
      subtitle: 'Explore as melhores opções de moradia no Paraguai.',
      filterCity: 'Cidade',
      filterAllCities: 'Todas as cidades',
      filterType: 'Tipo',
      filterAllTypes: 'Todos',
      filterRent: 'Aluguel',
      filterSale: 'Venda',
      filterPropertyType: 'Propriedade',
      filterAllProperties: 'Todas',
      filterApartment: 'Apartamento',
      filterHouse: 'Casa',
      filterMaxPrice: 'Preço Máximo',
      noResults: 'Nenhuma propriedade encontrada com os filtros selecionados.',
      area: 'm²',
      bedrooms: 'quartos',
      bathrooms: 'banheiros',
    },
    schools: {
      title: 'Melhores Escolas',
      subtitle: 'Encontre a educação perfeita para seus filhos.',
      filterCity: 'Cidade',
      filterAllCities: 'Todas as cidades',
      ranking: 'Avaliação',
      languages: 'Idiomas',
      levels: 'Níveis',
    },
    neighborhoods: {
      title: 'Explore os Melhores Bairros',
      subtitle: 'Descubra onde construir sua nova vida no Paraguai.',
    },
    taxation: {
      title: 'Sistema Tributário Paraguaio',
      subtitle: 'Informação completa sobre impostos no Paraguai.',
      systemTitle: 'Sistema Territorial',
      systemText: 'O Paraguai aplica o princípio de renda territorial, o que significa que você só paga impostos sobre renda gerada dentro do país. A renda do exterior não é tributada.',
      ratesTitle: 'Taxas Competitivas',
      ratesText: 'O Imposto de Renda Pessoal (IRP) tem taxas progressivas de 8% a 10%, significativamente mais baixas do que em outros países da região.',
      benefitsTitle: 'Benefícios Fiscais',
      benefitsText: 'Deduções por contribuições ao IPS, despesas médicas, educação e outros conceitos permitidos por lei podem reduzir significativamente sua carga tributária.',
      calculatorTitle: 'Calculadora de Impostos',
      calculatorSubtitle: 'Calcule seu imposto aproximado de acordo com sua renda anual',
      annualIncome: 'Renda Bruta Anual',
      currency: 'Moeda',
      deductions: 'Deduções',
      deductionConcept: 'Conceito',
      deductionAmount: 'Valor',
      addDeduction: 'Adicionar',
      calculate: 'Calcular Imposto',
      resultsTitle: 'Resultados',
      grossIncome: 'Renda Bruta',
      netIncome: 'Renda Líquida (após deduções)',
      taxInPYG: 'Imposto a pagar (PYG)',
      taxIn: 'Imposto a pagar',
    },
    socialSecurity: {
      title: 'Instituto de Previdência Social (IPS)',
      subtitle: 'Informações sobre o sistema de previdência social no Paraguai.',
      coverageTitle: 'Cobertura',
      coverageText: 'O IPS oferece atendimento médico, aposentadorias, pensões e subsídios por doença, maternidade e riscos profissionais.',
      contributionsTitle: 'Contribuições e Afiliação',
      contributionsDependentTitle: 'Trabalhadores em Regime de Dependência',
      contributionsDependentText: 'Empregado: 9% do salário | Empregador: 16,5% do salário | Afiliação obrigatória',
      contributionsIndependentTitle: 'Trabalhadores Independentes',
      contributionsIndependentText: 'Trabalhador: 18% da renda declarada | Afiliação voluntária',
      taxBenefitTitle: 'Benefício Fiscal',
      taxBenefitText: 'As contribuições ao IPS são 100% dedutíveis do Imposto de Renda Pessoal (IRP), reduzindo sua carga tributária efetiva.',
    },
    faq: {
      title: 'Perguntas Frequentes (FAQ)',
      subtitle: 'Respostas às dúvidas mais comuns sobre a mudança para o Paraguai.',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Estamos aqui para ajudá-lo em seu processo de mudança para o Paraguai.',
      email: 'Email',
      phone: 'Telefone',
      whatsapp: 'WhatsApp',
      formTitle: 'Envie-nos uma Mensagem',
      formName: 'Nome',
      formEmail: 'Email',
      formSubject: 'Assunto',
      formMessage: 'Mensagem',
      formSubmit: 'Enviar Mensagem',
      formSubmitting: 'Enviando...',
      formSuccess: 'Mensagem enviada com sucesso',
    },
    footer: {
      company: 'Empresa',
      companyAbout: 'Sobre Nós',
      companyServices: 'Serviços',
      companyTeam: 'Equipe',
      resources: 'Recursos',
      resourcesBlog: 'Blog',
      resourcesGuides: 'Guias',
      resourcesFAQ: 'Perguntas Frequentes',
      legal: 'Legal',
      legalPrivacy: 'Política de Privacidade',
      legalTerms: 'Termos de Uso',
      legalCookies: 'Política de Cookies',
      followUs: 'Siga-nos',
      copyright: '© 2024 Living Paraguay. Todos os direitos reservados.',
    },
    chatbot: {
      title: 'Assistente Virtual',
      placeholder: 'Digite sua pergunta...',
      send: 'Enviar',
      thinking: 'Pensando...',
      error: 'Desculpe, ocorreu um erro. Por favor, tente novamente.',
    },
    common: {
      loading: 'Carregando...',
      error: 'Erro',
      backHome: 'Voltar ao Início',
      underConstruction: 'Seção em Construção',
      underConstructionText: 'Esta seção estará disponível em breve.',
    },
  },
};
