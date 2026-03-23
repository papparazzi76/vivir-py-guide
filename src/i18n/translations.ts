export type Language = 'es' | 'pt' | 'en' | 'zh' | 'de';

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
      startProcess: 'Start Inquiry',
    },
    hero: {
      slide1Title: 'Your New Life in Paraguay Starts Here',
      slide1Subtitle: 'Discover everything you need to know to move and settle in Paraguay.',
      slide2Title: 'Tax Freedom and Quality of Life',
      slide2Subtitle: 'Paraguay offers one of the most attractive tax systems in Latin America.',
      slide3Title: 'Growing International Community',
      slide3Subtitle: 'Join thousands of expats who have already chosen Paraguay as their new home.',
      exploreCTA: 'Explore',
      contactCTA: 'Contact',
    },
    permits: {
      title: 'Residence Permits in Paraguay',
      subtitle: 'Your complete guide to obtaining residency and a Paraguayan ID',
      temporaryTitle: 'Temporary Residency',
      temporaryDescription: 'The first step to settling in Paraguay',
      temporaryDuration: 'Duration:',
      temporaryRequirement: 'Financial requirement:',
      temporaryReq1: '2 years, renewable',
      temporaryReq2: 'Approximately $5,000 USD in bank deposit or employment contract',
      temporaryReq3: 'Passport, birth certificate, criminal background check (all apostilled)',
      temporaryReq4: 'Allows obtaining the Paraguayan ID card',
      permanentTitle: 'Permanent Residency',
      permanentDescription: 'For long-term settlement',
      standardPathTitle: 'Standard Path',
      standardReq1: 'After 2 years of temporary residency',
      standardReq2: 'Apply 90 days before expiry',
      standardReq3: 'Permanent card, renewed every 10 years',
      investorPathTitle: 'Investor Path (SUACE)',
      investorReq1: 'Direct permanent residency',
      investorReq2: 'Requires "Investor Certificate"',
      investorReq3: 'For business owners and entrepreneurs',
      cedulaTitle: 'Paraguayan Identity Card',
      cedulaSubtitle: 'The "Golden Key" to Full Integration',
      cedulaAllowsTitle: 'Allows:',
      cedulaAllow1: 'Opening bank accounts',
      cedulaAllow2: 'Signing employment contracts',
      cedulaAllow3: 'Conducting legal procedures',
      cedulaAllow4: 'Starting businesses',
      cedulaRequirementsTitle: 'Requirements:',
      cedulaReq1: 'Approved temporary residency',
      cedulaReq2: 'Proof of address',
      cedulaReq3: 'Biometric photographs',
      cedulaReq4: 'Process takes 2-4 weeks',
      comparisonTitle: 'Options Comparison',
      comparisonFeature: 'Feature',
      comparisonTemporary: 'Temporary',
      comparisonPermanent: 'Permanent',
      comparisonSUACE: 'SUACE',
      comparisonDuration: 'Duration',
      comparisonDuration2Years: '2 years',
      comparisonDurationIndefinite: 'Indefinite',
      comparisonInvestment: 'Required investment',
      comparisonInvestment5k: '~$5,000 USD',
      comparisonInvestmentNA: 'N/A',
      comparisonInvestmentVariable: 'Variable',
      comparisonProcessing: 'Processing time',
      comparisonProcessing24: '2-4 months',
      comparisonProcessing36: '3-6 months',
      comparisonProcessing46: '4-6 months',
      comparisonGetsCedula: 'Gets ID Card',
      contactFormTitle: 'Free Consultation',
      contactFormSubtitle: 'Fill out the form and we will advise you on the best path for your residency.',
      contactFormName: 'Full name',
      contactFormEmail: 'Email',
      contactFormPhone: 'Phone (optional)',
      contactFormMessage: 'How can we help you?',
      contactFormSubmit: 'Send Inquiry',
      contactFormSubmitting: 'Sending...',
      contactFormSuccess: 'Message sent!',
      contactFormSuccessSubtitle: 'We will contact you soon.',
    },
    housing: {
      title: 'Find Your Ideal Home',
      subtitle: 'Explore the best housing options in Paraguay.',
      filterCity: 'City',
      filterAllCities: 'All cities',
      filterType: 'Type',
      filterAllTypes: 'All',
      filterRent: 'Rent',
      filterSale: 'Sale',
      filterPropertyType: 'Property',
      filterAllProperties: 'All',
      filterApartment: 'Apartment',
      filterHouse: 'House',
      filterMaxPrice: 'Max Price',
      noResults: 'No properties found with the selected filters.',
      area: 'sqm',
      bedrooms: 'beds',
      bathrooms: 'baths',
    },
    schools: {
      title: 'Best Schools',
      subtitle: 'Find the perfect education for your children.',
      filterCity: 'City',
      filterAllCities: 'All cities',
      ranking: 'Rating',
      languages: 'Languages',
      levels: 'Levels',
    },
    neighborhoods: {
      title: 'Explore the Best Neighborhoods',
      subtitle: 'Discover where to build your new life in Paraguay.',
    },
    taxation: {
      title: 'Taxation in Paraguay',
      subtitle: 'A favorable regime based on the Territoriality Principle.',
      principleTitle: 'Core Pillar: Territoriality Principle',
      principleText: 'Paraguay follows the Source Principle. This means that, generally, only income generated within the country\'s borders is taxed.',
      principle0Tax: '0% tax on foreign income:',
      principle0TaxText: 'Salaries from remote work for foreign employers, dividends from foreign companies, or bank interest abroad are not subject to taxes in Paraguay.',
      irpTitle: 'Personal Income Tax (IRP)',
      irpText: 'This is the main tax for resident individuals. It is divided into two categories settled separately:',
      irpRSPTitle: '1. Personal Services Income (IRP-RSP)',
      irpRSPText: 'Taxes local work income (salaries, fees).',
      irpRSPRate: 'Progressive Rates: 8%, 9%, and 10% on net income.',
      irpRSPDeductions: 'Deductions: Personal and family expenses incurred in the country can be deducted.',
      irpRSPDeductionsExpat: 'Key Expat Deductions: Health and education expenses incurred abroad can be deducted.',
      irpRGCTitle: '2. Capital Income and Gains (IRP-RGC)',
      irpRGCText: 'Taxes passive income from Paraguayan sources (rent, local interest).',
      irpRGCRate: 'Flat Rate: 8% on Net Income.',
      ivaTitle: 'Value Added Tax (VAT/IVA)',
      ivaText: 'This is the main consumption tax.',
      ivaGeneral: 'General Rate: 10%.',
      ivaReduced: 'Reduced Rate: 5% for residential rent and certain goods.',
      ivaDigitalNomads: 'Key for Digital Nomads!: Service exports (consulting, software development, etc.) to foreign clients are VAT-exempt.',
      iduTitle: 'Dividend Tax (IDU)',
      iduText: 'Taxes the distribution of profits from Paraguayan companies to their shareholders.',
      iduResident: 'Rate for Residents: 8%.',
      iduNonResident: 'Rate for Non-Residents: 15%.',
      iduImportant: 'Important: This tax does not apply to dividends received from foreign companies.',
      calculatorTitle: 'IRP Calculator',
      calculatorSubtitle: 'Estimate your IRP for Personal Services (RSP). For illustrative purposes only.',
      currency: 'Currency',
      annualIncome: 'Gross Annual Income',
      deductions: 'Deductions',
      deductionConcept: 'Concept (e.g., Health)',
      deductionAmount: 'Amount',
      addDeduction: 'Add',
      calculate: 'Calculate Tax',
      resultsTitle: 'Estimated Result:',
      netIncome: 'Net Income (after deductions):',
      taxInPYG: 'Tax in PYG:',
      taxIn: 'Tax in',
      calculatorDisclaimer: '*Calculation based on IRP-RSP progressive rates. Not tax advice.',
    },
    socialSecurity: {
      title: 'Social Security',
      subtitle: 'IPS is Paraguay\'s central social security system, providing health coverage, retirement, and other benefits.',
      ipsTitle: 'Social Insurance Institute (IPS)',
      ipsDescription: 'IPS is Paraguay\'s central social security system, providing health coverage, retirement, and other benefits.',
      coverageTitle: 'Coverage',
      coverageMedical: 'Medical and Hospital Care',
      coveragePension: 'Retirement and Pensions',
      coverageSubsidies: 'Subsidies (Maternity, Sick Leave)',
      contributionsTitle: 'Contributions and Affiliation',
      dependentTitle: 'Dependent Workers (Employees)',
      dependentMandatory: 'Affiliation is mandatory.',
      dependentEmployee: 'Employee Contribution: 9% of salary.',
      dependentEmployer: 'Employer Contribution: 16.5% of salary.',
      independentTitle: 'Independent Workers',
      independentVoluntary: 'Affiliation is voluntary.',
      independentText: 'Independent workers can opt to cover the full contribution to access benefits.',
      taxBenefitTitle: 'Tax Benefit',
      taxBenefitText: 'Contributions to IPS are 100% deductible from Personal Income Tax (IRP-RSP).',
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Answers to the most common questions about moving to Paraguay',
      q1: 'How long does it take to get temporary residency?',
      a1: 'The temporary residency process usually takes 2 to 4 months, depending on proper document preparation and institutional workload. Once approved, residency is granted for 2 years.',
      q2: 'Do I need to apostille all my documents?',
      a2: 'Yes, all documents issued abroad must carry the Hague Apostille. This includes birth certificates, criminal background checks, marriage certificates, professional degrees, and more.',
      q3: 'How much money do I need to deposit for residency?',
      a3: 'For general temporary residency, you need to demonstrate financial solvency, typically through a bank deposit of approximately $5,000 USD. For the SUACE investor path, investment requirements are higher and specific to the business type.',
      q4: 'Can I work with temporary residency?',
      a4: 'Yes, temporary residency allows you to work in Paraguay. However, you will need the Paraguayan ID card to sign formal employment contracts and open bank accounts.',
      q5: 'What taxes do I pay as a resident?',
      a5: 'Paraguay uses a territorial income system, meaning you only pay taxes on income generated within the country. The main taxes are IRP (Personal Income Tax) for employees and VAT for independents. Rates are very competitive compared to other countries in the region.',
      q6: 'Is IPS health insurance mandatory?',
      a6: 'IPS is mandatory for dependent workers. Contributions are shared: the employee contributes 9% and the employer 16.5% of the salary. Independent workers can voluntarily choose to affiliate.',
      q7: 'Can I obtain Paraguayan citizenship?',
      a7: 'Yes, after 3 years of uninterrupted permanent residency, you can apply for Paraguayan citizenship by naturalization. This requires demonstrating basic knowledge of Spanish or Guarani and passing an exam.',
      q8: 'Do I need a certified translator for my documents?',
      a8: 'Yes, all documents in a foreign language must be translated by a licensed Public Translator in Paraguay. The translation must be notarized.',
    },
    contact: {
      title: 'Contact Us',
      subtitle: 'We are here to help you with your relocation to Paraguay.',
      email: 'Email',
      phone: 'Phone',
      whatsapp: 'WhatsApp',
      formTitle: 'Send Us a Message',
      formName: 'Name',
      formEmail: 'Email',
      formSubject: 'Subject',
      formMessage: 'Message',
      formSubmit: 'Send Message',
      formSubmitting: 'Sending...',
      formSuccess: 'Message sent successfully',
    },
    newsletter: {
      title: 'Newsletter',
      description: 'Get updates about Paraguay in your inbox',
      placeholder: 'your@email.com',
      subscribe: 'Subscribe',
      subscribing: 'Subscribing...',
      successTitle: 'Successfully subscribed!',
      successMessage: 'Thank you for subscribing to our newsletter',
      errorTitle: 'Error',
      errorInvalid: 'Please enter a valid email',
      errorExists: 'This email is already subscribed',
      errorGeneric: 'There was an error processing your subscription',
    },
    footer: {
      company: 'Company',
      companyAbout: 'About Us',
      companyServices: 'Services',
      companyTeam: 'Team',
      resources: 'Resources',
      resourcesBlog: 'Blog',
      resourcesGuides: 'Guides',
      resourcesFAQ: 'FAQ',
      legal: 'Legal',
      legalPrivacy: 'Privacy Policy',
      legalTerms: 'Terms of Use',
      legalCookies: 'Cookie Policy',
      followUs: 'Follow Us',
      copyright: '© 2024 Living Paraguay. All rights reserved.',
    },
    chatbot: {
      title: 'Virtual Assistant',
      placeholder: 'Type your question...',
      send: 'Send',
      thinking: 'Thinking...',
      error: 'Sorry, an error occurred. Please try again.',
    },
    common: {
      loading: 'Loading...',
      error: 'Error',
      backHome: 'Back to Home',
      underConstruction: 'Section Under Construction',
      underConstructionText: 'This section will be available soon.',
    },
  },
  zh: {
    nav: {
      home: '首页',
      permits: '居留许可',
      housing: '住房',
      schools: '学校',
      neighborhoods: '社区',
      taxation: '税务',
      socialSecurity: '社会保障',
      faq: '常见问题',
      contact: '联系我们',
      startProcess: '开始咨询',
    },
    hero: {
      slide1Title: '您在巴拉圭的新生活从这里开始',
      slide1Subtitle: '了解搬迁和定居巴拉圭所需的一切信息。',
      slide2Title: '税收自由与高品质生活',
      slide2Subtitle: '巴拉圭拥有拉丁美洲最具吸引力的税收体系之一。',
      slide3Title: '不断壮大的国际社区',
      slide3Subtitle: '加入数千名已选择巴拉圭作为新家园的外籍人士。',
      exploreCTA: '探索',
      contactCTA: '联系',
    },
    permits: {
      title: '巴拉圭居留许可',
      subtitle: '获取居留权和巴拉圭身份证的完整指南',
      temporaryTitle: '临时居留',
      temporaryDescription: '在巴拉圭定居的第一步',
      temporaryDuration: '有效期：',
      temporaryRequirement: '经济要求：',
      temporaryReq1: '2年，可续期',
      temporaryReq2: '约5,000美元银行存款或劳动合同',
      temporaryReq3: '护照、出生证明、无犯罪记录证明（均需海牙认证）',
      temporaryReq4: '允许获得巴拉圭身份证',
      permanentTitle: '永久居留',
      permanentDescription: '长期定居选择',
      standardPathTitle: '标准途径',
      standardReq1: '临时居留满2年后',
      standardReq2: '到期前90天申请',
      standardReq3: '永久居留卡，每10年更新',
      investorPathTitle: '投资者途径 (SUACE)',
      investorReq1: '直接获得永久居留',
      investorReq2: '需要"投资者证明"',
      investorReq3: '面向企业主和创业者',
      cedulaTitle: '巴拉圭身份证',
      cedulaSubtitle: '全面融入的"金钥匙"',
      cedulaAllowsTitle: '可以：',
      cedulaAllow1: '开设银行账户',
      cedulaAllow2: '签订劳动合同',
      cedulaAllow3: '办理法律手续',
      cedulaAllow4: '创办企业',
      cedulaRequirementsTitle: '要求：',
      cedulaReq1: '已批准的临时居留',
      cedulaReq2: '住址证明',
      cedulaReq3: '生物识别照片',
      cedulaReq4: '流程需2-4周',
      comparisonTitle: '选项对比',
      comparisonFeature: '特征',
      comparisonTemporary: '临时',
      comparisonPermanent: '永久',
      comparisonSUACE: 'SUACE',
      comparisonDuration: '有效期',
      comparisonDuration2Years: '2年',
      comparisonDurationIndefinite: '无限期',
      comparisonInvestment: '投资要求',
      comparisonInvestment5k: '约5,000美元',
      comparisonInvestmentNA: '不适用',
      comparisonInvestmentVariable: '视情况而定',
      comparisonProcessing: '办理时间',
      comparisonProcessing24: '2-4个月',
      comparisonProcessing36: '3-6个月',
      comparisonProcessing46: '4-6个月',
      comparisonGetsCedula: '获得身份证',
      contactFormTitle: '免费咨询',
      contactFormSubtitle: '填写表格，我们将为您的居留申请提供最佳建议。',
      contactFormName: '全名',
      contactFormEmail: '电子邮件',
      contactFormPhone: '电话（选填）',
      contactFormMessage: '我们能为您做什么？',
      contactFormSubmit: '发送咨询',
      contactFormSubmitting: '发送中...',
      contactFormSuccess: '消息已发送！',
      contactFormSuccessSubtitle: '我们将尽快与您联系。',
    },
    housing: {
      title: '找到理想住所',
      subtitle: '探索巴拉圭最佳住房选择。',
      filterCity: '城市',
      filterAllCities: '所有城市',
      filterType: '类型',
      filterAllTypes: '全部',
      filterRent: '租赁',
      filterSale: '购买',
      filterPropertyType: '房产',
      filterAllProperties: '全部',
      filterApartment: '公寓',
      filterHouse: '独栋',
      filterMaxPrice: '最高价格',
      noResults: '未找到符合条件的房产。',
      area: '平方米',
      bedrooms: '卧室',
      bathrooms: '卫生间',
    },
    schools: {
      title: '最佳学校',
      subtitle: '为您的孩子找到最理想的教育。',
      filterCity: '城市',
      filterAllCities: '所有城市',
      ranking: '评分',
      languages: '教学语言',
      levels: '教学层级',
    },
    neighborhoods: {
      title: '探索最佳社区',
      subtitle: '发现您在巴拉圭新生活的理想之地。',
    },
    taxation: {
      title: '巴拉圭税务',
      subtitle: '基于属地原则的优惠税制。',
      principleTitle: '核心支柱：属地原则',
      principleText: '巴拉圭遵循来源地原则。这意味着通常只对在巴拉圭境内产生的收入征税。',
      principle0Tax: '境外收入0%税率：',
      principle0TaxText: '为外国雇主远程工作的薪资、外国公司的股息或境外银行利息，在巴拉圭不征税。',
      irpTitle: '个人所得税 (IRP)',
      irpText: '这是居民个人的主要税种，分为两个独立核算的类别：',
      irpRSPTitle: '1. 个人服务收入 (IRP-RSP)',
      irpRSPText: '对本地劳动收入（工资、酬金）征税。',
      irpRSPRate: '累进税率：净收入的8%、9%和10%。',
      irpRSPDeductions: '扣除：可扣除在巴拉圭境内发生的个人和家庭费用。',
      irpRSPDeductionsExpat: '外籍人士关键扣除：可扣除在境外发生的医疗和教育费用。',
      irpRGCTitle: '2. 资本收入和收益 (IRP-RGC)',
      irpRGCText: '对巴拉圭来源的被动收入（租金、本地利息）征税。',
      irpRGCRate: '固定税率：净收入的8%。',
      ivaTitle: '增值税 (IVA)',
      ivaText: '主要消费税。',
      ivaGeneral: '一般税率：10%。',
      ivaReduced: '优惠税率：住宅租金和某些商品为5%。',
      ivaDigitalNomads: '数字游民必知！：向境外客户出口服务（咨询、软件开发等）免征增值税。',
      iduTitle: '股息税 (IDU)',
      iduText: '对巴拉圭公司向股东分配利润征税。',
      iduResident: '居民税率：8%。',
      iduNonResident: '非居民税率：15%。',
      iduImportant: '重要提示：此税不适用于从外国公司收到的股息。',
      calculatorTitle: 'IRP计算器',
      calculatorSubtitle: '估算您的个人服务IRP（RSP）。仅供参考。',
      currency: '货币',
      annualIncome: '年总收入',
      deductions: '扣除项',
      deductionConcept: '项目（如：医疗）',
      deductionAmount: '金额',
      addDeduction: '添加',
      calculate: '计算税额',
      resultsTitle: '估算结果：',
      netIncome: '净收入（扣除后）：',
      taxInPYG: 'PYG税额：',
      taxIn: '税额（',
      calculatorDisclaimer: '*根据IRP-RSP累进税率计算。不构成税务建议。',
    },
    socialSecurity: {
      title: '社会保障',
      subtitle: 'IPS是巴拉圭的核心社会保障体系，提供医疗、退休和其他福利。',
      ipsTitle: '社会保障研究所 (IPS)',
      ipsDescription: 'IPS是巴拉圭的核心社会保障体系，提供医疗、退休和其他福利。',
      coverageTitle: '保障范围',
      coverageMedical: '医疗和住院服务',
      coveragePension: '退休金和养老金',
      coverageSubsidies: '补贴（产假、病假）',
      contributionsTitle: '缴费与参保',
      dependentTitle: '受雇劳动者（雇员）',
      dependentMandatory: '参保为强制性。',
      dependentEmployee: '雇员缴费：工资的9%。',
      dependentEmployer: '雇主缴费：工资的16.5%。',
      independentTitle: '自雇劳动者',
      independentVoluntary: '参保为自愿性。',
      independentText: '自雇人士可选择全额缴费以享受福利。',
      taxBenefitTitle: '税收优惠',
      taxBenefitText: 'IPS缴费可100%从个人所得税（IRP-RSP）中扣除。',
    },
    faq: {
      title: '常见问题',
      subtitle: '关于搬迁到巴拉圭最常见问题的解答',
      q1: '获得临时居留需要多长时间？',
      a1: '临时居留流程通常需要2至4个月，取决于文件准备是否充分和机构工作量。批准后，居留有效期为2年。',
      q2: '我需要对所有文件进行海牙认证吗？',
      a2: '是的，所有在国外签发的文件都必须经过海牙认证。包括出生证明、无犯罪记录证明、结婚证、专业学位证书等。',
      q3: '申请居留需要存入多少资金？',
      a3: '一般临时居留需要证明经济能力，通常需要约5,000美元的银行存款。SUACE投资者途径的投资要求更高，且因企业类型而异。',
      q4: '持临时居留可以工作吗？',
      a4: '可以，临时居留允许在巴拉圭工作。但您需要获得巴拉圭身份证才能签订正式劳动合同和开设银行账户。',
      q5: '作为居民需要缴纳哪些税？',
      a5: '巴拉圭实行属地征税制度，意味着您只需对在巴拉圭境内产生的收入纳税。主要税种包括IRP（个人所得税）和IVA（增值税）。税率与该地区其他国家相比非常有竞争力。',
      q6: 'IPS医疗保险是强制的吗？',
      a6: 'IPS对受雇劳动者是强制性的。缴费由雇员和雇主共同承担：雇员缴纳工资的9%，雇主缴纳16.5%。自雇人士可自愿选择参保。',
      q7: '我可以获得巴拉圭国籍吗？',
      a7: '可以，在不间断永久居留3年后，您可以申请巴拉圭归化入籍。这需要展示基本的西班牙语或瓜拉尼语知识并通过考试。',
      q8: '我需要公证翻译我的文件吗？',
      a8: '是的，所有外语文件都必须由在巴拉圭注册的公证翻译员翻译。翻译件必须经过公证认证。',
    },
    contact: {
      title: '联系我们',
      subtitle: '我们随时为您的巴拉圭搬迁提供帮助。',
      email: '电子邮件',
      phone: '电话',
      whatsapp: 'WhatsApp',
      formTitle: '给我们留言',
      formName: '姓名',
      formEmail: '电子邮件',
      formSubject: '主题',
      formMessage: '留言',
      formSubmit: '发送留言',
      formSubmitting: '发送中...',
      formSuccess: '留言发送成功',
    },
    newsletter: {
      title: '通讯订阅',
      description: '在您的收件箱中获取巴拉圭最新资讯',
      placeholder: 'your@email.com',
      subscribe: '订阅',
      subscribing: '订阅中...',
      successTitle: '订阅成功！',
      successMessage: '感谢订阅我们的通讯',
      errorTitle: '错误',
      errorInvalid: '请输入有效的电子邮件',
      errorExists: '此邮箱已订阅',
      errorGeneric: '处理订阅时出错',
    },
    footer: {
      company: '公司',
      companyAbout: '关于我们',
      companyServices: '服务',
      companyTeam: '团队',
      resources: '资源',
      resourcesBlog: '博客',
      resourcesGuides: '指南',
      resourcesFAQ: '常见问题',
      legal: '法律',
      legalPrivacy: '隐私政策',
      legalTerms: '使用条款',
      legalCookies: 'Cookie政策',
      followUs: '关注我们',
      copyright: '© 2024 Living Paraguay. 保留所有权利。',
    },
    chatbot: {
      title: '虚拟助手',
      placeholder: '输入您的问题...',
      send: '发送',
      thinking: '思考中...',
      error: '抱歉，发生了错误。请重试。',
    },
    common: {
      loading: '加载中...',
      error: '错误',
      backHome: '返回首页',
      underConstruction: '页面建设中',
      underConstructionText: '此页面即将推出。',
    },
  },
  de: {
    nav: {
      home: 'Startseite',
      permits: 'Aufenthaltserlaubnis',
      housing: 'Wohnen',
      schools: 'Schulen',
      neighborhoods: 'Stadtviertel',
      taxation: 'Steuern',
      socialSecurity: 'Sozialversicherung',
      faq: 'FAQ',
      contact: 'Kontakt',
      startProcess: 'Beratung starten',
    },
    hero: {
      slide1Title: 'Ihr neues Leben in Paraguay beginnt hier',
      slide1Subtitle: 'Erfahren Sie alles, was Sie für Ihren Umzug nach Paraguay wissen müssen.',
      slide2Title: 'Steuerfreiheit und Lebensqualität',
      slide2Subtitle: 'Paraguay bietet eines der attraktivsten Steuersysteme Lateinamerikas.',
      slide3Title: 'Wachsende internationale Gemeinschaft',
      slide3Subtitle: 'Schließen Sie sich Tausenden von Expats an, die Paraguay bereits als neue Heimat gewählt haben.',
      exploreCTA: 'Entdecken',
      contactCTA: 'Kontakt',
    },
    permits: {
      title: 'Aufenthaltserlaubnis in Paraguay',
      subtitle: 'Ihr umfassender Leitfaden für Aufenthaltsrecht und paraguayischen Ausweis',
      temporaryTitle: 'Befristeter Aufenthalt',
      temporaryDescription: 'Der erste Schritt zur Niederlassung in Paraguay',
      temporaryDuration: 'Dauer:',
      temporaryRequirement: 'Finanzielle Voraussetzung:',
      temporaryReq1: '2 Jahre, verlängerbar',
      temporaryReq2: 'Ca. 5.000 USD als Bankeinlage oder Arbeitsvertrag',
      temporaryReq3: 'Reisepass, Geburtsurkunde, polizeiliches Führungszeugnis (alles apostilliert)',
      temporaryReq4: 'Ermöglicht den Erhalt des paraguayischen Personalausweises',
      permanentTitle: 'Daueraufenthalt',
      permanentDescription: 'Für langfristige Niederlassung',
      standardPathTitle: 'Standardweg',
      standardReq1: 'Nach 2 Jahren befristetem Aufenthalt',
      standardReq2: '90 Tage vor Ablauf beantragen',
      standardReq3: 'Unbefristete Karte, Erneuerung alle 10 Jahre',
      investorPathTitle: 'Investorenweg (SUACE)',
      investorReq1: 'Direkter Daueraufenthalt',
      investorReq2: 'Erfordert "Investorenbescheinigung"',
      investorReq3: 'Für Unternehmer und Gründer',
      cedulaTitle: 'Paraguayischer Personalausweis',
      cedulaSubtitle: 'Der "Goldene Schlüssel" zur vollen Integration',
      cedulaAllowsTitle: 'Ermöglicht:',
      cedulaAllow1: 'Bankkonten eröffnen',
      cedulaAllow2: 'Arbeitsverträge unterzeichnen',
      cedulaAllow3: 'Rechtliche Verfahren durchführen',
      cedulaAllow4: 'Unternehmen gründen',
      cedulaRequirementsTitle: 'Voraussetzungen:',
      cedulaReq1: 'Genehmigter befristeter Aufenthalt',
      cedulaReq2: 'Wohnsitznachweis',
      cedulaReq3: 'Biometrische Fotos',
      cedulaReq4: 'Verfahren dauert 2-4 Wochen',
      comparisonTitle: 'Optionenvergleich',
      comparisonFeature: 'Merkmal',
      comparisonTemporary: 'Befristet',
      comparisonPermanent: 'Unbefristet',
      comparisonSUACE: 'SUACE',
      comparisonDuration: 'Dauer',
      comparisonDuration2Years: '2 Jahre',
      comparisonDurationIndefinite: 'Unbefristet',
      comparisonInvestment: 'Erforderliche Investition',
      comparisonInvestment5k: '~5.000 USD',
      comparisonInvestmentNA: 'Entfällt',
      comparisonInvestmentVariable: 'Variabel',
      comparisonProcessing: 'Bearbeitungszeit',
      comparisonProcessing24: '2-4 Monate',
      comparisonProcessing36: '3-6 Monate',
      comparisonProcessing46: '4-6 Monate',
      comparisonGetsCedula: 'Erhält Ausweis',
      contactFormTitle: 'Kostenlose Beratung',
      contactFormSubtitle: 'Füllen Sie das Formular aus und wir beraten Sie über den besten Weg für Ihren Aufenthalt.',
      contactFormName: 'Vollständiger Name',
      contactFormEmail: 'E-Mail',
      contactFormPhone: 'Telefon (optional)',
      contactFormMessage: 'Wie können wir Ihnen helfen?',
      contactFormSubmit: 'Anfrage senden',
      contactFormSubmitting: 'Wird gesendet...',
      contactFormSuccess: 'Nachricht gesendet!',
      contactFormSuccessSubtitle: 'Wir werden uns in Kürze bei Ihnen melden.',
    },
    housing: {
      title: 'Finden Sie Ihr ideales Zuhause',
      subtitle: 'Entdecken Sie die besten Wohnmöglichkeiten in Paraguay.',
      filterCity: 'Stadt',
      filterAllCities: 'Alle Städte',
      filterType: 'Typ',
      filterAllTypes: 'Alle',
      filterRent: 'Miete',
      filterSale: 'Kauf',
      filterPropertyType: 'Immobilie',
      filterAllProperties: 'Alle',
      filterApartment: 'Wohnung',
      filterHouse: 'Haus',
      filterMaxPrice: 'Maximalpreis',
      noResults: 'Keine Immobilien mit den ausgewählten Filtern gefunden.',
      area: 'qm',
      bedrooms: 'Schlafzimmer',
      bathrooms: 'Badezimmer',
    },
    schools: {
      title: 'Beste Schulen',
      subtitle: 'Finden Sie die perfekte Bildung für Ihre Kinder.',
      filterCity: 'Stadt',
      filterAllCities: 'Alle Städte',
      ranking: 'Bewertung',
      languages: 'Sprachen',
      levels: 'Stufen',
    },
    neighborhoods: {
      title: 'Die besten Stadtviertel entdecken',
      subtitle: 'Finden Sie heraus, wo Sie Ihr neues Leben in Paraguay aufbauen können.',
    },
    taxation: {
      title: 'Besteuerung in Paraguay',
      subtitle: 'Ein vorteilhaftes System basierend auf dem Territorialprinzip.',
      principleTitle: 'Kernprinzip: Territorialprinzip',
      principleText: 'Paraguay folgt dem Quellenprinzip. Das bedeutet, dass grundsätzlich nur Einkünfte besteuert werden, die innerhalb der Landesgrenzen erzielt werden.',
      principle0Tax: '0% Steuer auf ausländische Einkünfte:',
      principle0TaxText: 'Gehälter aus Remote-Arbeit für ausländische Arbeitgeber, Dividenden ausländischer Unternehmen oder Bankzinsen im Ausland sind in Paraguay nicht steuerpflichtig.',
      irpTitle: 'Einkommensteuer (IRP)',
      irpText: 'Dies ist die Hauptsteuer für ansässige Personen. Sie gliedert sich in zwei getrennt veranlagte Kategorien:',
      irpRSPTitle: '1. Einkünfte aus persönlichen Dienstleistungen (IRP-RSP)',
      irpRSPText: 'Besteuert lokale Arbeitseinkünfte (Gehälter, Honorare).',
      irpRSPRate: 'Progressive Sätze: 8%, 9% und 10% auf das Nettoeinkommen.',
      irpRSPDeductions: 'Abzüge: Persönliche und familiäre Ausgaben im Inland können abgezogen werden.',
      irpRSPDeductionsExpat: 'Wichtige Expat-Abzüge: Gesundheits- und Bildungsausgaben im Ausland sind abzugsfähig.',
      irpRGCTitle: '2. Kapitaleinkünfte und -gewinne (IRP-RGC)',
      irpRGCText: 'Besteuert passive Einkünfte aus paraguayischen Quellen (Miete, lokale Zinsen).',
      irpRGCRate: 'Einheitssatz: 8% auf das Nettoeinkommen.',
      ivaTitle: 'Mehrwertsteuer (IVA)',
      ivaText: 'Die wichtigste Verbrauchssteuer.',
      ivaGeneral: 'Allgemeiner Satz: 10%.',
      ivaReduced: 'Ermäßigter Satz: 5% für Wohnungsmieten und bestimmte Güter.',
      ivaDigitalNomads: 'Wichtig für Digitale Nomaden!: Der Export von Dienstleistungen (Beratung, Softwareentwicklung usw.) an ausländische Kunden ist von der MwSt. befreit.',
      iduTitle: 'Dividendensteuer (IDU)',
      iduText: 'Besteuert die Gewinnausschüttung paraguayischer Unternehmen an ihre Aktionäre.',
      iduResident: 'Satz für Ansässige: 8%.',
      iduNonResident: 'Satz für Nichtansässige: 15%.',
      iduImportant: 'Wichtig: Diese Steuer gilt nicht für Dividenden von ausländischen Unternehmen.',
      calculatorTitle: 'IRP-Rechner',
      calculatorSubtitle: 'Schätzen Sie Ihre IRP für persönliche Dienstleistungen (RSP). Nur zur Veranschaulichung.',
      currency: 'Währung',
      annualIncome: 'Bruttojahreseinkommen',
      deductions: 'Abzüge',
      deductionConcept: 'Konzept (z.B. Gesundheit)',
      deductionAmount: 'Betrag',
      addDeduction: 'Hinzufügen',
      calculate: 'Steuer berechnen',
      resultsTitle: 'Geschätztes Ergebnis:',
      netIncome: 'Nettoeinkommen (nach Abzügen):',
      taxInPYG: 'Steuer in PYG:',
      taxIn: 'Steuer in',
      calculatorDisclaimer: '*Berechnung basierend auf den progressiven IRP-RSP-Sätzen. Keine Steuerberatung.',
    },
    socialSecurity: {
      title: 'Sozialversicherung',
      subtitle: 'Das IPS ist Paraguays zentrales Sozialversicherungssystem mit Gesundheitsversorgung, Rente und weiteren Leistungen.',
      ipsTitle: 'Sozialversicherungsanstalt (IPS)',
      ipsDescription: 'Das IPS ist Paraguays zentrales Sozialversicherungssystem mit Gesundheitsversorgung, Rente und weiteren Leistungen.',
      coverageTitle: 'Leistungen',
      coverageMedical: 'Medizinische und stationäre Versorgung',
      coveragePension: 'Rente und Pensionen',
      coverageSubsidies: 'Zuschüsse (Mutterschutz, Krankengeld)',
      contributionsTitle: 'Beiträge und Mitgliedschaft',
      dependentTitle: 'Abhängig Beschäftigte (Angestellte)',
      dependentMandatory: 'Die Mitgliedschaft ist Pflicht.',
      dependentEmployee: 'Arbeitnehmerbeitrag: 9% des Gehalts.',
      dependentEmployer: 'Arbeitgeberbeitrag: 16,5% des Gehalts.',
      independentTitle: 'Selbständige',
      independentVoluntary: 'Die Mitgliedschaft ist freiwillig.',
      independentText: 'Selbständige können den vollen Beitrag übernehmen, um Leistungen zu erhalten.',
      taxBenefitTitle: 'Steuervorteil',
      taxBenefitText: 'IPS-Beiträge sind zu 100% von der Einkommensteuer (IRP-RSP) absetzbar.',
    },
    faq: {
      title: 'Häufig gestellte Fragen',
      subtitle: 'Antworten auf die häufigsten Fragen zum Umzug nach Paraguay',
      q1: 'Wie lange dauert es, eine befristete Aufenthaltserlaubnis zu erhalten?',
      a1: 'Das Verfahren dauert in der Regel 2 bis 4 Monate, abhängig von der korrekten Dokumentenvorbereitung und der Auslastung der Behörden. Nach Genehmigung wird der Aufenthalt für 2 Jahre gewährt.',
      q2: 'Muss ich alle meine Dokumente apostillieren lassen?',
      a2: 'Ja, alle im Ausland ausgestellten Dokumente müssen die Haager Apostille tragen. Dazu gehören Geburtsurkunden, Führungszeugnisse, Heiratsurkunden, Berufsabschlüsse und mehr.',
      q3: 'Wie viel Geld muss ich für die Aufenthaltserlaubnis einzahlen?',
      a3: 'Für den allgemeinen befristeten Aufenthalt muss finanzielle Leistungsfähigkeit nachgewiesen werden, typischerweise durch eine Bankeinlage von ca. 5.000 USD. Für den SUACE-Investorenweg sind die Investitionsanforderungen höher und unternehmensabhängig.',
      q4: 'Kann ich mit einer befristeten Aufenthaltserlaubnis arbeiten?',
      a4: 'Ja, die befristete Aufenthaltserlaubnis erlaubt es, in Paraguay zu arbeiten. Sie benötigen jedoch den paraguayischen Personalausweis, um formelle Arbeitsverträge zu unterzeichnen und Bankkonten zu eröffnen.',
      q5: 'Welche Steuern muss ich als Ansässiger zahlen?',
      a5: 'Paraguay wendet das Territorialprinzip an, d.h. Sie zahlen nur Steuern auf im Land erzielte Einkünfte. Die wichtigsten Steuern sind die IRP (Einkommensteuer) und die IVA (Mehrwertsteuer). Die Sätze sind im regionalen Vergleich sehr wettbewerbsfähig.',
      q6: 'Ist die IPS-Krankenversicherung Pflicht?',
      a6: 'Die IPS ist für abhängig Beschäftigte Pflicht. Die Beiträge werden geteilt: Der Arbeitnehmer zahlt 9% und der Arbeitgeber 16,5% des Gehalts. Selbständige können sich freiwillig anschließen.',
      q7: 'Kann ich die paraguayische Staatsbürgerschaft erhalten?',
      a7: 'Ja, nach 3 Jahren ununterbrochenem Daueraufenthalt können Sie die paraguayische Staatsbürgerschaft durch Einbürgerung beantragen. Dies erfordert grundlegende Spanisch- oder Guaraní-Kenntnisse und das Bestehen einer Prüfung.',
      q8: 'Benötige ich einen vereidigten Übersetzer für meine Dokumente?',
      a8: 'Ja, alle fremdsprachigen Dokumente müssen von einem in Paraguay zugelassenen vereidigten Übersetzer übersetzt werden. Die Übersetzung muss notariell beglaubigt werden.',
    },
    contact: {
      title: 'Kontaktieren Sie uns',
      subtitle: 'Wir sind hier, um Ihnen bei Ihrem Umzug nach Paraguay zu helfen.',
      email: 'E-Mail',
      phone: 'Telefon',
      whatsapp: 'WhatsApp',
      formTitle: 'Senden Sie uns eine Nachricht',
      formName: 'Name',
      formEmail: 'E-Mail',
      formSubject: 'Betreff',
      formMessage: 'Nachricht',
      formSubmit: 'Nachricht senden',
      formSubmitting: 'Wird gesendet...',
      formSuccess: 'Nachricht erfolgreich gesendet',
    },
    newsletter: {
      title: 'Newsletter',
      description: 'Erhalten Sie Updates über Paraguay in Ihrem Posteingang',
      placeholder: 'ihre@email.de',
      subscribe: 'Abonnieren',
      subscribing: 'Wird abonniert...',
      successTitle: 'Erfolgreich abonniert!',
      successMessage: 'Danke für Ihr Newsletter-Abonnement',
      errorTitle: 'Fehler',
      errorInvalid: 'Bitte geben Sie eine gültige E-Mail-Adresse ein',
      errorExists: 'Diese E-Mail ist bereits abonniert',
      errorGeneric: 'Beim Verarbeiten Ihres Abonnements ist ein Fehler aufgetreten',
    },
    footer: {
      company: 'Unternehmen',
      companyAbout: 'Über uns',
      companyServices: 'Dienstleistungen',
      companyTeam: 'Team',
      resources: 'Ressourcen',
      resourcesBlog: 'Blog',
      resourcesGuides: 'Ratgeber',
      resourcesFAQ: 'Häufige Fragen',
      legal: 'Rechtliches',
      legalPrivacy: 'Datenschutz',
      legalTerms: 'Nutzungsbedingungen',
      legalCookies: 'Cookie-Richtlinie',
      followUs: 'Folgen Sie uns',
      copyright: '© 2024 Living Paraguay. Alle Rechte vorbehalten.',
    },
    chatbot: {
      title: 'Virtueller Assistent',
      placeholder: 'Geben Sie Ihre Frage ein...',
      send: 'Senden',
      thinking: 'Denke nach...',
      error: 'Entschuldigung, ein Fehler ist aufgetreten. Bitte versuchen Sie es erneut.',
    },
    common: {
      loading: 'Wird geladen...',
      error: 'Fehler',
      backHome: 'Zurück zur Startseite',
      underConstruction: 'Bereich im Aufbau',
      underConstructionText: 'Dieser Bereich wird bald verfügbar sein.',
    },
  },
};
