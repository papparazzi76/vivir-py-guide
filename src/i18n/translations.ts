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
    temporaryDescription: string;
    temporaryDuration: string;
    temporaryRequirement: string;
    temporaryReq1: string;
    temporaryReq2: string;
    temporaryReq3: string;
    temporaryReq4: string;
    permanentTitle: string;
    permanentDescription: string;
    standardPathTitle: string;
    standardReq1: string;
    standardReq2: string;
    standardReq3: string;
    investorPathTitle: string;
    investorReq1: string;
    investorReq2: string;
    investorReq3: string;
    cedulaTitle: string;
    cedulaSubtitle: string;
    cedulaAllowsTitle: string;
    cedulaAllow1: string;
    cedulaAllow2: string;
    cedulaAllow3: string;
    cedulaAllow4: string;
    cedulaRequirementsTitle: string;
    cedulaReq1: string;
    cedulaReq2: string;
    cedulaReq3: string;
    cedulaReq4: string;
    comparisonTitle: string;
    comparisonFeature: string;
    comparisonTemporary: string;
    comparisonPermanent: string;
    comparisonSUACE: string;
    comparisonDuration: string;
    comparisonDuration2Years: string;
    comparisonDurationIndefinite: string;
    comparisonInvestment: string;
    comparisonInvestment5k: string;
    comparisonInvestmentNA: string;
    comparisonInvestmentVariable: string;
    comparisonProcessing: string;
    comparisonProcessing24: string;
    comparisonProcessing36: string;
    comparisonProcessing46: string;
    comparisonGetsCedula: string;
    contactFormTitle: string;
    contactFormSubtitle: string;
    contactFormName: string;
    contactFormEmail: string;
    contactFormPhone: string;
    contactFormMessage: string;
    contactFormSubmit: string;
    contactFormSubmitting: string;
    contactFormSuccess: string;
    contactFormSuccessSubtitle: string;
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
    principleTitle: string;
    principleText: string;
    principle0Tax: string;
    principle0TaxText: string;
    irpTitle: string;
    irpText: string;
    irpRSPTitle: string;
    irpRSPText: string;
    irpRSPRate: string;
    irpRSPDeductions: string;
    irpRSPDeductionsExpat: string;
    irpRGCTitle: string;
    irpRGCText: string;
    irpRGCRate: string;
    ivaTitle: string;
    ivaText: string;
    ivaGeneral: string;
    ivaReduced: string;
    ivaDigitalNomads: string;
    iduTitle: string;
    iduText: string;
    iduResident: string;
    iduNonResident: string;
    iduImportant: string;
    calculatorTitle: string;
    calculatorSubtitle: string;
    currency: string;
    annualIncome: string;
    deductions: string;
    deductionConcept: string;
    deductionAmount: string;
    addDeduction: string;
    calculate: string;
    resultsTitle: string;
    netIncome: string;
    taxInPYG: string;
    taxIn: string;
    calculatorDisclaimer: string;
  };
  
  // Social Security Section
  socialSecurity: {
    title: string;
    subtitle: string;
    ipsTitle: string;
    ipsDescription: string;
    coverageTitle: string;
    coverageMedical: string;
    coveragePension: string;
    coverageSubsidies: string;
    contributionsTitle: string;
    dependentTitle: string;
    dependentMandatory: string;
    dependentEmployee: string;
    dependentEmployer: string;
    independentTitle: string;
    independentVoluntary: string;
    independentText: string;
    taxBenefitTitle: string;
    taxBenefitText: string;
  };
  
  // FAQ Section
  faq: {
    title: string;
    subtitle: string;
    q1: string;
    a1: string;
    q2: string;
    a2: string;
    q3: string;
    a3: string;
    q4: string;
    a4: string;
    q5: string;
    a5: string;
    q6: string;
    a6: string;
    q7: string;
    a7: string;
    q8: string;
    a8: string;
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
  
  // Newsletter
  newsletter: {
    title: string;
    description: string;
    placeholder: string;
    subscribe: string;
    subscribing: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorInvalid: string;
    errorExists: string;
    errorGeneric: string;
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
      startProcess: 'Iniciar Consulta',
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
      title: 'Permisos de Residencia en Paraguay',
      subtitle: 'Tu guía completa para obtener la residencia y cédula paraguaya',
      temporaryTitle: 'Residencia Temporal',
      temporaryDescription: 'El primer paso para establecerse en Paraguay',
      temporaryDuration: 'Duración:',
      temporaryRequirement: 'Requisito económico:',
      temporaryReq1: '2 años renovables',
      temporaryReq2: 'Aproximadamente $5,000 USD en depósito bancario o contrato laboral',
      temporaryReq3: 'Pasaporte, certificado de nacimiento, antecedentes penales (todos apostillados)',
      temporaryReq4: 'Permite obtener la Cédula de Identidad Paraguaya',
      permanentTitle: 'Residencia Permanente',
      permanentDescription: 'Para establecerse a largo plazo',
      standardPathTitle: 'Vía Estándar',
      standardReq1: 'Tras 2 años de residencia temporal',
      standardReq2: 'Solicitar 90 días antes del vencimiento',
      standardReq3: 'Carnet definitivo, renovación cada 10 años',
      investorPathTitle: 'Vía Inversionista SUACE',
      investorReq1: 'Residencia permanente directa',
      investorReq2: 'Requiere "Constancia de Inversionista"',
      investorReq3: 'Para empresarios y emprendedores',
      cedulaTitle: 'Cédula de Identidad Paraguaya',
      cedulaSubtitle: 'La "Llave Dorada" para la Integración Total',
      cedulaAllowsTitle: 'Permite:',
      cedulaAllow1: 'Abrir cuentas bancarias',
      cedulaAllow2: 'Firmar contratos laborales',
      cedulaAllow3: 'Realizar trámites legales',
      cedulaAllow4: 'Iniciar empresas',
      cedulaRequirementsTitle: 'Requisitos:',
      cedulaReq1: 'Residencia temporal aprobada',
      cedulaReq2: 'Certificado de domicilio',
      cedulaReq3: 'Fotografías biométricas',
      cedulaReq4: 'Proceso toma 2-4 semanas',
      comparisonTitle: 'Comparación de Opciones',
      comparisonFeature: 'Característica',
      comparisonTemporary: 'Temporal',
      comparisonPermanent: 'Permanente',
      comparisonSUACE: 'SUACE',
      comparisonDuration: 'Duración',
      comparisonDuration2Years: '2 años',
      comparisonDurationIndefinite: 'Indefinida',
      comparisonInvestment: 'Inversión requerida',
      comparisonInvestment5k: '~$5,000 USD',
      comparisonInvestmentNA: 'N/A',
      comparisonInvestmentVariable: 'Variable',
      comparisonProcessing: 'Tiempo de proceso',
      comparisonProcessing24: '2-4 meses',
      comparisonProcessing36: '3-6 meses',
      comparisonProcessing46: '4-6 meses',
      comparisonGetsCedula: 'Obtiene Cédula',
      contactFormTitle: 'Consulta Gratuita',
      contactFormSubtitle: 'Completa el formulario y te asesoraremos sobre el mejor camino para tu residencia.',
      contactFormName: 'Nombre completo',
      contactFormEmail: 'Email',
      contactFormPhone: 'Teléfono (opcional)',
      contactFormMessage: '¿En qué podemos ayudarte?',
      contactFormSubmit: 'Enviar Consulta',
      contactFormSubmitting: 'Enviando...',
      contactFormSuccess: '¡Mensaje enviado!',
      contactFormSuccessSubtitle: 'Te contactaremos pronto.',
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
      title: 'Fiscalidad en Paraguay',
      subtitle: 'Un régimen favorable basado en el Principio de Territorialidad.',
      principleTitle: 'Pilar Central: Principio de Territorialidad',
      principleText: 'Paraguay se rige por el Principio de la Fuente. Esto significa que, en general, solo se gravan las rentas generadas dentro de las fronteras del país.',
      principle0Tax: 'Impuesto 0% sobre rentas extranjeras:',
      principle0TaxText: 'Salarios por trabajo remoto para empleadores extranjeros, dividendos de empresas foráneas o intereses bancarios en el exterior no están sujetos a impuestos en Paraguay.',
      irpTitle: 'Impuesto a la Renta Personal (IRP)',
      irpText: 'Es el impuesto principal para individuos residentes. Se divide en dos categorías que se liquidan por separado:',
      irpRSPTitle: '1. Rentas de Servicios Personales (IRP-RSP)',
      irpRSPText: 'Grava ingresos por trabajo local (salarios, honorarios).',
      irpRSPRate: 'Tasas Progresivas: 8%, 9% y 10% sobre la renta neta.',
      irpRSPDeductions: 'Deducciones: Se pueden deducir gastos personales y familiares realizados en el país.',
      irpRSPDeductionsExpat: 'Deducciones Clave para Expat: Se permite deducir gastos en salud y educación realizados en el exterior.',
      irpRGCTitle: '2. Rentas y Ganancias del Capital (IRP-RGC)',
      irpRGCText: 'Grava rentas pasivas de fuente paraguaya (alquileres, intereses locales).',
      irpRGCRate: 'Tasa Única: 8% sobre la Renta Neta.',
      ivaTitle: 'Impuesto al Valor Agregado (IVA)',
      ivaText: 'Es el principal impuesto al consumo.',
      ivaGeneral: 'Tasa General: 10%.',
      ivaReduced: 'Tasa Reducida: 5% para alquileres de vivienda y ciertos bienes.',
      ivaDigitalNomads: '¡Clave para Nómadas Digitales!: La exportación de servicios (como consultoría, desarrollo de software, etc.) a clientes del exterior está exenta de IVA.',
      iduTitle: 'Impuesto a los Dividendos (IDU)',
      iduText: 'Grava la distribución de ganancias de empresas paraguayas a sus accionistas.',
      iduResident: 'Tasa para Residentes: 8%.',
      iduNonResident: 'Tasa para No Residentes: 15%.',
      iduImportant: 'Importante: Este impuesto no aplica a dividendos recibidos de empresas extranjeras.',
      calculatorTitle: 'Calculadora IRP',
      calculatorSubtitle: 'Estima tu IRP por Servicios Personales (RSP). Solo para fines ilustrativos.',
      currency: 'Moneda',
      annualIncome: 'Renta Bruta Anual',
      deductions: 'Deducciones',
      deductionConcept: 'Concepto (ej: Salud)',
      deductionAmount: 'Monto',
      addDeduction: 'Agregar',
      calculate: 'Calcular Impuesto',
      resultsTitle: 'Resultado Estimado:',
      netIncome: 'Renta Neta (después de deducciones):',
      taxInPYG: 'Impuesto en PYG:',
      taxIn: 'Impuesto en',
      calculatorDisclaimer: '*Cálculo basado en las tasas progresivas del IRP-RSP. No constituye asesoría fiscal.',
    },
    socialSecurity: {
      title: 'Seguridad Social',
      subtitle: 'El IPS es el sistema central de seguridad social de Paraguay, que brinda cobertura de salud, jubilación y otros beneficios.',
      ipsTitle: 'Instituto de Previsión Social (IPS)',
      ipsDescription: 'El IPS es el sistema central de seguridad social de Paraguay, que brinda cobertura de salud, jubilación y otros beneficios.',
      coverageTitle: 'Cobertura',
      coverageMedical: 'Atención Médica y Hospitalaria',
      coveragePension: 'Jubilación y Pensiones',
      coverageSubsidies: 'Subsidios (Maternidad, Reposo)',
      contributionsTitle: 'Aportes y Afiliación',
      dependentTitle: 'Trabajadores Dependientes (Asalariados)',
      dependentMandatory: 'La afiliación es obligatoria.',
      dependentEmployee: 'Aporte Empleado: 9% del salario.',
      dependentEmployer: 'Aporte Empleador: 16.5% del salario.',
      independentTitle: 'Trabajadores Independientes',
      independentVoluntary: 'La afiliación es voluntaria.',
      independentText: 'El independiente puede optar por cubrir la totalidad del aporte para acceder a los beneficios.',
      taxBenefitTitle: 'Beneficio Fiscal',
      taxBenefitText: 'Los aportes realizados al IPS son 100% deducibles del Impuesto a la Renta Personal (IRP-RSP).',
    },
    faq: {
      title: 'Preguntas Frecuentes',
      subtitle: 'Respuestas a las dudas más comunes sobre mudarse a Paraguay',
      q1: '¿Cuánto tiempo toma obtener la residencia temporal?',
      a1: 'El proceso de residencia temporal generalmente toma entre 2 a 4 meses, dependiendo de la correcta preparación de documentos y la carga de trabajo de las instituciones. Una vez aprobada, la residencia se otorga por 2 años.',
      q2: '¿Necesito apostillar todos mis documentos?',
      a2: 'Sí, todos los documentos emitidos en el extranjero deben llevar la Apostilla de La Haya. Esto incluye certificados de nacimiento, antecedentes penales, certificados de matrimonio, títulos profesionales, entre otros.',
      q3: '¿Cuánto dinero debo depositar para la residencia?',
      a3: 'Para la residencia temporal vía general, se requiere demostrar solvencia económica, típicamente mediante un depósito bancario de aproximadamente $5,000 USD. Para la vía inversionista SUACE, los requisitos de inversión son mayores y específicos al tipo de empresa.',
      q4: '¿Puedo trabajar con residencia temporal?',
      a4: 'Sí, la residencia temporal te permite trabajar en Paraguay. Sin embargo, necesitarás obtener la Cédula de Identidad Paraguaya para poder firmar contratos laborales formales y abrir cuentas bancarias.',
      q5: '¿Qué impuestos debo pagar como residente?',
      a5: 'Paraguay aplica el sistema de renta territorial, lo que significa que solo pagas impuestos por ingresos generados dentro del país. Los principales impuestos son el IRP (Impuesto a la Renta Personal) para empleados y el IVA para independientes. Las tasas son muy competitivas en comparación con otros países de la región.',
      q6: '¿Es obligatorio el seguro de salud IPS?',
      a6: 'El IPS es obligatorio para trabajadores en relación de dependencia. Los aportes son compartidos: el empleado aporta el 9% y el empleador el 16.5% del salario. Los trabajadores independientes pueden optar voluntariamente por afiliarse.',
      q7: '¿Puedo obtener la ciudadanía paraguaya?',
      a7: 'Sí, después de 3 años de residencia permanente ininterrumpida, puedes solicitar la ciudadanía paraguaya por naturalización. Esto requiere demostrar conocimientos básicos de español o guaraní y aprobación de un examen.',
      q8: '¿Necesito un traductor público para mis documentos?',
      a8: 'Sí, todos los documentos en idioma extranjero deben ser traducidos por un Traductor Público matriculado en Paraguay. La traducción debe ser legalizada ante escribano público.',
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
    newsletter: {
      title: 'Newsletter',
      description: 'Recibe actualizaciones sobre Paraguay en tu correo',
      placeholder: 'tu@email.com',
      subscribe: 'Suscribirse',
      subscribing: 'Suscribiendo...',
      successTitle: '¡Suscripción exitosa!',
      successMessage: 'Gracias por suscribirte a nuestro newsletter',
      errorTitle: 'Error',
      errorInvalid: 'Por favor ingresa un email válido',
      errorExists: 'Este email ya está suscrito',
      errorGeneric: 'Hubo un error al procesar tu suscripción',
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
      startProcess: 'Iniciar Consulta',
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
      title: 'Permissões de Residência no Paraguai',
      subtitle: 'Seu guia completo para obter residência e cédula paraguaia',
      temporaryTitle: 'Residência Temporária',
      temporaryDescription: 'O primeiro passo para se estabelecer no Paraguai',
      temporaryDuration: 'Duração:',
      temporaryRequirement: 'Requisito econômico:',
      temporaryReq1: '2 anos renováveis',
      temporaryReq2: 'Aproximadamente $5.000 USD em depósito bancário ou contrato de trabalho',
      temporaryReq3: 'Passaporte, certidão de nascimento, antecedentes criminais (todos apostilados)',
      temporaryReq4: 'Permite obter a Cédula de Identidade Paraguaia',
      permanentTitle: 'Residência Permanente',
      permanentDescription: 'Para se estabelecer a longo prazo',
      standardPathTitle: 'Via Padrão',
      standardReq1: 'Após 2 anos de residência temporária',
      standardReq2: 'Solicitar 90 dias antes do vencimento',
      standardReq3: 'Cartão definitivo, renovação a cada 10 anos',
      investorPathTitle: 'Via Investidor SUACE',
      investorReq1: 'Residência permanente direta',
      investorReq2: 'Requer "Certificado de Investidor"',
      investorReq3: 'Para empresários e empreendedores',
      cedulaTitle: 'Cédula de Identidade Paraguaia',
      cedulaSubtitle: 'A "Chave de Ouro" para a Integração Total',
      cedulaAllowsTitle: 'Permite:',
      cedulaAllow1: 'Abrir contas bancárias',
      cedulaAllow2: 'Assinar contratos de trabalho',
      cedulaAllow3: 'Realizar procedimentos legais',
      cedulaAllow4: 'Iniciar empresas',
      cedulaRequirementsTitle: 'Requisitos:',
      cedulaReq1: 'Residência temporária aprovada',
      cedulaReq2: 'Certificado de endereço',
      cedulaReq3: 'Fotografias biométricas',
      cedulaReq4: 'Processo leva 2-4 semanas',
      comparisonTitle: 'Comparação de Opções',
      comparisonFeature: 'Característica',
      comparisonTemporary: 'Temporária',
      comparisonPermanent: 'Permanente',
      comparisonSUACE: 'SUACE',
      comparisonDuration: 'Duração',
      comparisonDuration2Years: '2 anos',
      comparisonDurationIndefinite: 'Indefinida',
      comparisonInvestment: 'Investimento necessário',
      comparisonInvestment5k: '~$5.000 USD',
      comparisonInvestmentNA: 'N/A',
      comparisonInvestmentVariable: 'Variável',
      comparisonProcessing: 'Tempo de processamento',
      comparisonProcessing24: '2-4 meses',
      comparisonProcessing36: '3-6 meses',
      comparisonProcessing46: '4-6 meses',
      comparisonGetsCedula: 'Obtém Cédula',
      contactFormTitle: 'Consulta Gratuita',
      contactFormSubtitle: 'Preencha o formulário e assessoraremos você sobre o melhor caminho para sua residência.',
      contactFormName: 'Nome completo',
      contactFormEmail: 'Email',
      contactFormPhone: 'Telefone (opcional)',
      contactFormMessage: 'Como podemos ajudá-lo?',
      contactFormSubmit: 'Enviar Consulta',
      contactFormSubmitting: 'Enviando...',
      contactFormSuccess: 'Mensagem enviada!',
      contactFormSuccessSubtitle: 'Entraremos em contato em breve.',
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
      title: 'Fiscalidade no Paraguai',
      subtitle: 'Um regime favorável baseado no Princípio de Territorialidade.',
      principleTitle: 'Pilar Central: Princípio de Territorialidade',
      principleText: 'O Paraguai é regido pelo Princípio da Fonte. Isso significa que, em geral, apenas as rendas geradas dentro das fronteiras do país são tributadas.',
      principle0Tax: 'Imposto 0% sobre renda estrangeira:',
      principle0TaxText: 'Salários por trabalho remoto para empregadores estrangeiros, dividendos de empresas estrangeiras ou juros bancários no exterior não estão sujeitos a impostos no Paraguai.',
      irpTitle: 'Imposto de Renda Pessoal (IRP)',
      irpText: 'É o imposto principal para indivíduos residentes. Divide-se em duas categorias que são liquidadas separadamente:',
      irpRSPTitle: '1. Renda de Serviços Pessoais (IRP-RSP)',
      irpRSPText: 'Tributa receitas de trabalho local (salários, honorários).',
      irpRSPRate: 'Taxas Progressivas: 8%, 9% e 10% sobre a renda líquida.',
      irpRSPDeductions: 'Deduções: Podem ser deduzidas despesas pessoais e familiares realizadas no país.',
      irpRSPDeductionsExpat: 'Deduções-Chave para Expat: É permitido deduzir despesas com saúde e educação realizadas no exterior.',
      irpRGCTitle: '2. Renda e Ganhos de Capital (IRP-RGC)',
      irpRGCText: 'Tributa rendas passivas de fonte paraguaia (aluguéis, juros locais).',
      irpRGCRate: 'Taxa Única: 8% sobre a Renda Líquida.',
      ivaTitle: 'Imposto sobre Valor Agregado (IVA)',
      ivaText: 'É o principal imposto sobre o consumo.',
      ivaGeneral: 'Taxa Geral: 10%.',
      ivaReduced: 'Taxa Reduzida: 5% para aluguéis residenciais e certos bens.',
      ivaDigitalNomads: 'Chave para Nômades Digitais!: A exportação de serviços (como consultoria, desenvolvimento de software, etc.) para clientes no exterior está isenta de IVA.',
      iduTitle: 'Imposto sobre Dividendos (IDU)',
      iduText: 'Tributa a distribuição de lucros de empresas paraguaias aos seus acionistas.',
      iduResident: 'Taxa para Residentes: 8%.',
      iduNonResident: 'Taxa para Não Residentes: 15%.',
      iduImportant: 'Importante: Este imposto não se aplica a dividendos recebidos de empresas estrangeiras.',
      calculatorTitle: 'Calculadora IRP',
      calculatorSubtitle: 'Estime seu IRP por Serviços Pessoais (RSP). Apenas para fins ilustrativos.',
      currency: 'Moeda',
      annualIncome: 'Renda Bruta Anual',
      deductions: 'Deduções',
      deductionConcept: 'Conceito (ex: Saúde)',
      deductionAmount: 'Valor',
      addDeduction: 'Adicionar',
      calculate: 'Calcular Imposto',
      resultsTitle: 'Resultado Estimado:',
      netIncome: 'Renda Líquida (após deduções):',
      taxInPYG: 'Imposto em PYG:',
      taxIn: 'Imposto em',
      calculatorDisclaimer: '*Cálculo baseado nas taxas progressivas do IRP-RSP. Não constitui consultoria fiscal.',
    },
    socialSecurity: {
      title: 'Previdência Social',
      subtitle: 'O IPS é o sistema central de previdência social do Paraguai, que oferece cobertura de saúde, aposentadoria e outros benefícios.',
      ipsTitle: 'Instituto de Previsão Social (IPS)',
      ipsDescription: 'O IPS é o sistema central de previdência social do Paraguai, que oferece cobertura de saúde, aposentadoria e outros benefícios.',
      coverageTitle: 'Cobertura',
      coverageMedical: 'Atendimento Médico e Hospitalar',
      coveragePension: 'Aposentadoria e Pensões',
      coverageSubsidies: 'Subsídios (Maternidade, Repouso)',
      contributionsTitle: 'Contribuições e Afiliação',
      dependentTitle: 'Trabalhadores Dependentes (Assalariados)',
      dependentMandatory: 'A afiliação é obrigatória.',
      dependentEmployee: 'Contribuição Empregado: 9% do salário.',
      dependentEmployer: 'Contribuição Empregador: 16,5% do salário.',
      independentTitle: 'Trabalhadores Independentes',
      independentVoluntary: 'A afiliação é voluntária.',
      independentText: 'O independente pode optar por cobrir a totalidade da contribuição para acessar os benefícios.',
      taxBenefitTitle: 'Benefício Fiscal',
      taxBenefitText: 'As contribuições realizadas ao IPS são 100% dedutíveis do Imposto de Renda Pessoal (IRP-RSP).',
    },
    faq: {
      title: 'Perguntas Frequentes',
      subtitle: 'Respostas às dúvidas mais comuns sobre mudar-se para o Paraguai',
      q1: 'Quanto tempo leva para obter a residência temporária?',
      a1: 'O processo de residência temporária geralmente leva entre 2 a 4 meses, dependendo da preparação correta dos documentos e da carga de trabalho das instituições. Uma vez aprovada, a residência é concedida por 2 anos.',
      q2: 'Preciso apostilar todos os meus documentos?',
      a2: 'Sim, todos os documentos emitidos no exterior devem ter o Apostilamento de Haia. Isso inclui certidões de nascimento, antecedentes criminais, certidões de casamento, diplomas profissionais, entre outros.',
      q3: 'Quanto dinheiro devo depositar para a residência?',
      a3: 'Para a residência temporária via geral, é necessário demonstrar solvência econômica, tipicamente através de um depósito bancário de aproximadamente $5.000 USD. Para a via investidor SUACE, os requisitos de investimento são maiores e específicos ao tipo de empresa.',
      q4: 'Posso trabalhar com residência temporária?',
      a4: 'Sim, a residência temporária permite trabalhar no Paraguai. No entanto, você precisará obter a Cédula de Identidade Paraguaia para poder assinar contratos de trabalho formais e abrir contas bancárias.',
      q5: 'Que impostos devo pagar como residente?',
      a5: 'O Paraguai aplica o sistema de renda territorial, o que significa que você só paga impostos sobre rendas geradas dentro do país. Os principais impostos são o IRP (Imposto de Renda Pessoal) para empregados e o IVA para independentes. As taxas são muito competitivas em comparação com outros países da região.',
      q6: 'O seguro de saúde IPS é obrigatório?',
      a6: 'O IPS é obrigatório para trabalhadores em relação de dependência. As contribuições são compartilhadas: o empregado contribui com 9% e o empregador com 16,5% do salário. Os trabalhadores independentes podem optar voluntariamente por se afiliar.',
      q7: 'Posso obter a cidadania paraguaia?',
      a7: 'Sim, após 3 anos de residência permanente ininterrupta, você pode solicitar a cidadania paraguaia por naturalização. Isso requer demonstrar conhecimentos básicos de espanhol ou guarani e aprovação em um exame.',
      q8: 'Preciso de um tradutor público para meus documentos?',
      a8: 'Sim, todos os documentos em idioma estrangeiro devem ser traduzidos por um Tradutor Público registrado no Paraguai. A tradução deve ser legalizada perante tabelião público.',
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
    newsletter: {
      title: 'Newsletter',
      description: 'Receba atualizações sobre o Paraguai no seu email',
      placeholder: 'seu@email.com',
      subscribe: 'Inscrever-se',
      subscribing: 'Inscrevendo...',
      successTitle: 'Inscrição bem-sucedida!',
      successMessage: 'Obrigado por se inscrever em nossa newsletter',
      errorTitle: 'Erro',
      errorInvalid: 'Por favor, insira um email válido',
      errorExists: 'Este email já está inscrito',
      errorGeneric: 'Houve um erro ao processar sua inscrição',
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
