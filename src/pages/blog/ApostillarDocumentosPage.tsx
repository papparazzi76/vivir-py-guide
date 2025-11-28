import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, CheckCircle2, AlertCircle, FileText } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogApostilleImage from '@/assets/blog-apostille.webp';

const ApostillarDocumentosPage = () => {
  const post = blogPosts.find(p => p.id === 'apostillar-documentos-paraguay')!;

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`https://livingparaguay.com/blog/${post.id}`}
    >
      <Helmet>
        {/* Article Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": {
              "@type": "Organization",
              "name": "Living Paraguay"
            },
            "publisher": {
              "@type": "Organization",
              "name": "Living Paraguay",
              "logo": {
                "@type": "ImageObject",
                "url": "https://livingparaguay.com/og-image.jpg"
              }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": `https://livingparaguay.com/blog/${post.id}`
            },
            "image": "https://livingparaguay.com/og-image.jpg"
          })}
        </script>
      </Helmet>

      <article className="py-8 sm:py-12">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <Link 
            to="/blog" 
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Volver al blog
          </Link>

          <AnimatedDiv>
            <div className="mb-6">
              <span className="px-3 py-1 bg-blue-500/10 text-blue-600 dark:text-blue-400 rounded-full font-semibold text-sm">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('es-ES', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
              <button className="flex items-center gap-2 hover:text-primary transition-colors ml-auto">
                <Share2 className="w-4 h-4" />
                Compartir
              </button>
            </div>
          </AnimatedDiv>

          {/* Featured Image */}
          <AnimatedDiv delay={100} className="mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={blogApostilleImage} 
                alt="Apostilla de La Haya para documentos de Paraguay - guía completa" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="text-lg font-semibold mb-2">📌 En este artículo aprenderás:</p>
              <ul className="space-y-2 mb-0">
                <li>Qué es la Apostilla de La Haya y por qué la necesitas</li>
                <li>Lista completa de documentos a apostillar para Paraguay</li>
                <li>Proceso paso a paso por país (España, Argentina, Chile, Colombia, etc.)</li>
                <li>Costos, tiempos y errores comunes a evitar</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">¿Qué es la Apostilla de La Haya?</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              La <strong>Apostilla de La Haya</strong> es un sello o certificación que valida la autenticidad de un documento público emitido en un país para que tenga validez legal en otro país miembro del Convenio de La Haya de 1961.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              Paraguay es parte de este convenio, por lo que si vienes de países como <strong>España, Argentina, Chile, Colombia, Perú, México, Estados Unidos</strong>, entre otros, necesitarás apostillar tus documentos para iniciar tu proceso de residencia.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <p className="font-semibold mb-2">✅ La apostilla certifica:</p>
              <ul className="space-y-1 mb-0">
                <li>• La autenticidad de la firma del funcionario que emitió el documento</li>
                <li>• La capacidad en que actuó dicha persona</li>
                <li>• El sello o timbre del organismo emisor</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Documentos que Debes Apostillar para Paraguay</h2>

            <p className="text-lg leading-relaxed mb-6">
              Para tu proceso de residencia en Paraguay, estos son los documentos principales que necesitarás apostillar:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start bg-card border p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">1. Certificado de Nacimiento</p>
                  <p className="text-sm text-muted-foreground">Original y actualizado (con vigencia menor a 6 meses en algunos casos)</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-card border p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">2. Certificado de Antecedentes Penales</p>
                  <p className="text-sm text-muted-foreground">Del país de origen y de todos los países donde hayas residido más de 1 año</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-card border p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">3. Certificado de Matrimonio (si aplica)</p>
                  <p className="text-sm text-muted-foreground">Si viajas con tu cónyuge o vas a incluirlo en tu residencia</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-card border p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">4. Título Profesional (opcional pero recomendado)</p>
                  <p className="text-sm text-muted-foreground">Si planeas ejercer tu profesión o validar tu título en Paraguay</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-card border p-4 rounded-lg">
                <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold mb-1">5. Certificado de Divorcio (si aplica)</p>
                  <p className="text-sm text-muted-foreground">Si estás divorciado/a y vas a contraer matrimonio en Paraguay</p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg mb-8">
              <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2 flex items-center gap-2">
                <AlertCircle className="w-5 h-5" />
                ⚠️ Importante: Vigencia de Documentos
              </p>
              <p className="mb-0 text-yellow-900 dark:text-yellow-100">
                Paraguay NO exige que los documentos apostillados tengan una vigencia específica una vez apostillados. Sin embargo, el <strong>certificado de antecedentes penales</strong> debe ser reciente (generalmente menor a 6 meses desde su emisión).
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Proceso de Apostilla por País</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">🇪🇸 España</h3>

            <p className="text-lg leading-relaxed mb-6">
              España cuenta con un sistema de apostilla muy eficiente a través del <strong>Ministerio de Justicia</strong>.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Paso a Paso:</h4>
              <ol className="space-y-3 pl-5">
                <li className="text-lg">
                  <strong>1. Solicita tus documentos oficiales</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Certificado de Nacimiento: Registro Civil<br />
                    • Antecedentes Penales: Ministerio de Justicia (online en <a href="https://sede.mjusticia.gob.es/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">sede.mjusticia.gob.es</a>)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>2. Apostilla en el Ministerio de Justicia</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Presencial: En cualquier Gerencia Territorial del Ministerio<br />
                    • Online: A través de <a href="https://sede.mjusticia.gob.es/cs/Satellite/Sede/es/tramites/apostilla-haya" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">la sede electrónica</a> (si tu documento es electrónico)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>3. Costo y Tiempo</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Costo: €3 por documento<br />
                    • Tiempo: Presencial inmediato, online 3-5 días hábiles
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💡 Tip para españoles:</p>
              <p className="mb-0">
                El certificado de antecedentes penales emitido digitalmente por el Ministerio de Justicia español puede ser apostillado online si tiene código seguro de verificación (CSV). Esto te ahorra un viaje presencial.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">🇦🇷 Argentina</h3>

            <p className="text-lg leading-relaxed mb-6">
              En Argentina, la apostilla se gestiona en el <strong>Colegio de Escribanos</strong> de cada provincia.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Paso a Paso:</h4>
              <ol className="space-y-3 pl-5">
                <li className="text-lg">
                  <strong>1. Obtén tus documentos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Partida de Nacimiento: Registro Civil<br />
                    • Certificado de Antecedentes: Registro Nacional de Reincidencia (<a href="https://www.argentina.gob.ar/justicia/antecedentes" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">online</a>)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>2. Legaliza en el Colegio de Escribanos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Debes acudir al Colegio de Escribanos de tu provincia (ej: Buenos Aires, Córdoba, Santa Fe)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>3. Apostilla en Colegio de Escribanos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Algunos colegios permiten hacer todo en un solo paso
                  </p>
                </li>
                <li className="text-lg">
                  <strong>4. Costo y Tiempo</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Costo: Varía por provincia, aproximadamente $5,000-10,000 ARS por documento<br />
                    • Tiempo: Mismo día o 1-3 días hábiles
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-yellow-50 dark:bg-yellow-950/20 border border-yellow-200 dark:border-yellow-800 p-6 rounded-lg mb-8">
              <p className="font-semibold text-yellow-800 dark:text-yellow-200 mb-2">⚠️ Nota para argentinos:</p>
              <p className="mb-0 text-yellow-900 dark:text-yellow-100">
                El certificado de antecedentes penales argentino tiene vigencia de 3 meses. Solicítalo cuando ya tengas todo listo para viajar a Paraguay.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">🇨🇱 Chile</h3>

            <p className="text-lg leading-relaxed mb-6">
              Chile apostilla a través del <strong>Ministerio de Relaciones Exteriores</strong>.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Paso a Paso:</h4>
              <ol className="space-y-3 pl-5">
                <li className="text-lg">
                  <strong>1. Solicita tus documentos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Certificado de Nacimiento: Servicio de Registro Civil e Identificación<br />
                    • Certificado de Antecedentes: Registro Civil (<a href="https://www.registrocivil.cl/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">online</a>)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>2. Legaliza en el Ministerio de Relaciones Exteriores</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Presencial en oficinas de MINREL o a través de gestor autorizado
                  </p>
                </li>
                <li className="text-lg">
                  <strong>3. Costo y Tiempo</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Costo: Aprox. $5,000-8,000 CLP por documento<br />
                    • Tiempo: 3-5 días hábiles
                  </p>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">🇨🇴 Colombia</h3>

            <p className="text-lg leading-relaxed mb-6">
              Colombia apostilla en el <strong>Ministerio de Relaciones Exteriores</strong>.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Paso a Paso:</h4>
              <ol className="space-y-3 pl-5">
                <li className="text-lg">
                  <strong>1. Solicita tus documentos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Registro Civil de Nacimiento: Registraduría Nacional<br />
                    • Certificado Judicial: Policía Nacional (<a href="https://antecedentes.policia.gov.co/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">online</a>)
                  </p>
                </li>
                <li className="text-lg">
                  <strong>2. Apostilla en el Ministerio de Relaciones Exteriores</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Online a través de <a href="https://apostilla.cancilleria.gov.co/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">apostilla.cancilleria.gov.co</a> o presencial
                  </p>
                </li>
                <li className="text-lg">
                  <strong>3. Costo y Tiempo</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Costo: Aprox. $20,000-30,000 COP por documento<br />
                    • Tiempo: Online 2-3 días, presencial mismo día
                  </p>
                </li>
              </ol>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">🇺🇸 Estados Unidos</h3>

            <p className="text-lg leading-relaxed mb-6">
              En Estados Unidos, el proceso varía por estado. Generalmente se gestiona en la <strong>Secretaría de Estado (Secretary of State)</strong> de cada estado.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-6">
              <h4 className="text-xl font-bold mb-4">Paso a Paso:</h4>
              <ol className="space-y-3 pl-5">
                <li className="text-lg">
                  <strong>1. Solicita tus documentos</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Birth Certificate: Vital Records Office del estado de nacimiento<br />
                    • Background Check: FBI (federal) o estatal
                  </p>
                </li>
                <li className="text-lg">
                  <strong>2. Apostilla en Secretary of State</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    Contacta la oficina de tu estado, muchos estados permiten apostilla por correo
                  </p>
                </li>
                <li className="text-lg">
                  <strong>3. Costo y Tiempo</strong>
                  <p className="text-sm text-muted-foreground mt-1">
                    • Costo: $5-25 USD por documento (varía por estado)<br />
                    • Tiempo: 5-15 días hábiles (depende del estado)
                  </p>
                </li>
              </ol>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💡 Tip para estadounidenses:</p>
              <p className="mb-0">
                El FBI Background Check debe ser apostillado por el Departamento de Estado de EE.UU. en Washington D.C., no por tu estado. Es un proceso separado.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Errores Comunes a Evitar</h2>

            <div className="space-y-4 mb-8">
              <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 mb-1">1. Apostillar documentos vencidos</p>
                  <p className="text-sm text-red-900 dark:text-red-100">Verifica que tus documentos estén actualizados antes de apostillar, especialmente el certificado de antecedentes.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 mb-1">2. No verificar qué autoridad apostilla en tu país</p>
                  <p className="text-sm text-red-900 dark:text-red-100">Cada país tiene autoridades específicas. Investiga antes para no perder tiempo y dinero.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 mb-1">3. Olvidar documentos de familiares</p>
                  <p className="text-sm text-red-900 dark:text-red-100">Si viajas con familia, cada miembro necesita sus propios documentos apostillados.</p>
                </div>
              </div>

              <div className="flex gap-3 items-start bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-200 mb-1">4. No llevar copias</p>
                  <p className="text-sm text-red-900 dark:text-red-100">Lleva siempre 2-3 copias certificadas de cada documento apostillado. En Paraguay te pedirán copias en varios trámites.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">¿Necesitas Traducción?</h2>

            <p className="text-lg leading-relaxed mb-6">
              Si tus documentos están en un idioma distinto al español, necesitarás <strong>traducción oficial</strong> realizada por un traductor público matriculado en Paraguay.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <p className="font-semibold mb-3">Documentos que generalmente requieren traducción:</p>
              <ul className="space-y-2">
                <li>• Documentos en inglés, portugués (si son de Brasil), alemán, francés, italiano, etc.</li>
                <li>• El traductor oficial en Paraguay debe estar registrado en la Corte Suprema de Justicia</li>
                <li>• Costo aproximado: $20-50 USD por página traducida</li>
              </ul>
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💡 Recomendación:</p>
              <p className="mb-0">
                Si tus documentos están en portugués de Portugal, NO necesitas traducción (Paraguay considera el portugués como idioma oficial del MERCOSUR). Si son de Brasil, consulta con tu gestor.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Checklist Final: ¿Estás Listo?</h2>

            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 border border-green-200 dark:border-green-800 p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold text-green-800 dark:text-green-200 mb-4">✅ Antes de viajar a Paraguay, verifica:</h3>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Todos tus documentos están apostillados (nacimiento, antecedentes, matrimonio si aplica)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>El certificado de antecedentes tiene menos de 6 meses de emisión</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Tienes 2-3 copias de cada documento apostillado</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Si tus documentos no están en español, has contactado un traductor oficial en Paraguay</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <span>Has verificado los requisitos específicos de residencia de Paraguay (<Link to="/permits" className="text-green-700 dark:text-green-300 underline font-semibold">ver aquí</Link>)</span>
                </li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusión</h2>

            <p className="text-lg leading-relaxed mb-6">
              Apostillar documentos puede parecer complicado al principio, pero siguiendo esta guía paso a paso, tendrás todo listo para tu proceso de residencia en Paraguay sin contratiempos.
            </p>

            <p className="text-lg leading-relaxed mb-8">
              Recuerda que cada país tiene sus propias peculiaridades, pero el proceso general es similar: <strong>obtener documentos oficiales → apostillar en la autoridad competente → llevar a Paraguay (y traducir si es necesario)</strong>.
            </p>

            <div className="bg-primary text-primary-foreground p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">🚀 ¿Necesitas ayuda con tu proceso?</h3>
              <p className="text-lg mb-4">
                Si tienes dudas sobre apostillar tus documentos o sobre el proceso de residencia en Paraguay, podemos asesorarte.
              </p>
              <Link 
                to="/contact" 
                className="inline-flex items-center gap-2 bg-white text-primary px-6 py-3 rounded-lg font-bold hover:bg-white/90 transition-colors"
              >
                Solicitar Asesoría Gratuita
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Recursos Adicionales</h2>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">🔗 Enlaces Útiles:</h3>
              <ul className="space-y-2">
                <li>• <a href="https://www.hcch.net/en/states/hcch-members" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Lista oficial de países miembros del Convenio de La Haya</a></li>
                <li>• <Link to="/permits" className="text-primary hover:underline">Guía completa de residencia en Paraguay</Link></li>
                <li>• <Link to="/faq" className="text-primary hover:underline">Preguntas frecuentes sobre mudarse a Paraguay</Link></li>
              </ul>
            </div>

            {/* Author Box */}
            <div className="border-t pt-8 mt-12">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-2xl font-bold text-primary">
                  LP
                </div>
                <div>
                  <p className="font-bold text-lg mb-1">Living Paraguay</p>
                  <p className="text-muted-foreground text-sm mb-3">
                    Tu guía confiable para vivir e invertir en Paraguay. Información actualizada sobre residencia, impuestos, vivienda y más.
                  </p>
                  <div className="flex gap-4 text-sm">
                    <Link to="/contact" className="text-primary hover:underline">Contacto</Link>
                    <Link to="/blog" className="text-primary hover:underline">Más artículos</Link>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl mt-16">
          <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 sm:p-12 rounded-2xl text-white">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Listo para comenzar tu proceso de residencia?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Conoce todos los requisitos y pasos necesarios en nuestra guía completa de residencia en Paraguay.
            </p>
            <Link 
              to="/permits"
              className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              Ver Guía de Residencia
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default ApostillarDocumentosPage;
