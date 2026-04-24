import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import {
  Calendar,
  Clock,
  ArrowLeft,
  Share2,
  Briefcase,
  TrendingUp,
  Building2,
  Globe2,
  ShieldCheck,
  Percent,
  AlertTriangle,
  Quote,
  CheckCircle2,
} from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogImage from '@/assets/blog-investor-pass.webp';

const InvestorPassPage = () => {
  const post = blogPosts.find(p => p.id === 'paraguay-investor-pass-2026-movilidad-global')!;

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`https://livingparaguay.com/blog/${post.id}`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: post.title,
            description: post.excerpt,
            author: { '@type': 'Organization', name: 'Living Paraguay' },
            publisher: {
              '@type': 'Organization',
              name: 'Living Paraguay',
              logo: { '@type': 'ImageObject', url: 'https://livingparaguay.com/og-image.jpg' },
            },
            datePublished: post.date,
            dateModified: post.date,
            mainEntityOfPage: { '@type': 'WebPage', '@id': `https://livingparaguay.com/blog/${post.id}` },
            image: 'https://livingparaguay.com/og-image.jpg',
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: [
              {
                '@type': 'Question',
                name: '¿Qué es el Paraguay Investor Pass?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'Es un nuevo programa migratorio lanzado en 2026 que otorga residencia permanente directa (sin fase temporal) a inversores que cumplan con uno de tres umbrales: USD 150.000 en turismo, USD 200.000 en bolsa de valores o USD 200.000 en bienes raíces. Incluye además una reducción del impuesto a los dividendos del 15% al 8%.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuáles son los montos mínimos de inversión?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'USD 150.000 para turismo (infraestructura hotelera), USD 200.000 para bolsa de valores y USD 200.000 para bienes raíces, una de las opciones más demandadas gracias a la Ley 117/91 que iguala los derechos de propiedad del extranjero con los del ciudadano paraguayo.',
                },
              },
              {
                '@type': 'Question',
                name: '¿Cuánto tarda la residencia con el Investor Pass?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'A diferencia del esquema tradicional que requería 2 años de residencia temporal previa, el Investor Pass otorga la residencia permanente de forma inmediata mediante una Ventanilla Única que integra digitalmente SUACE, Migraciones e Identificaciones.',
                },
              },
              {
                '@type': 'Question',
                name: '¿La residencia permanente equivale a la ciudadanía paraguaya?',
                acceptedAnswer: {
                  '@type': 'Answer',
                  text: 'No. La naturalización requiere 3 años de residencia, presencia física mínima de 183 días al año, demostrar actividad económica regular en territorio nacional y aprobar exámenes de idioma y conocimientos sobre Constitución y cultura paraguaya.',
                },
              },
            ],
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
              <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold text-sm">
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
                  day: 'numeric',
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

          <AnimatedDiv delay={100} className="mb-12">
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={blogImage}
                alt="Paraguay Investor Pass 2026 - Residencia permanente para inversores"
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              La era dorada de las "Golden Visas" europeas ha muerto. Con el cierre definitivo del programa en España en 2025 y la eliminación del componente inmobiliario en Portugal, el capital internacional ha dejado de mirar al Atlántico para enfocarse en el Cono Sur. Lo que antes era un destino "bajo el radar" es hoy, en 2026, el epicentro de una nueva arquitectura de soberanía personal.
            </p>

            <p className="text-muted-foreground mb-6">
              Las cifras de la Dirección Nacional de Migraciones son contundentes: de 28.000 solicitudes en 2024 pasamos a 47.000 en 2025, y las proyecciones para este cierre de 2026 apuntan a los 80.000 expedientes. Este fenómeno no es casual; es la respuesta del mercado al lanzamiento del <strong>Paraguay Investor Pass</strong>, un instrumento diseñado para capturar el flujo de HNWIs (High-Net-Worth Individuals) que buscan agilidad, previsibilidad y eficiencia fiscal en un solo paquete.
            </p>

            {/* Stats hero */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-10 not-prose">
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-primary mb-1">28K</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Solicitudes 2024</div>
              </div>
              <div className="bg-card border border-border rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-primary mb-1">47K</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Solicitudes 2025</div>
              </div>
              <div className="bg-primary/10 border border-primary/30 rounded-xl p-5 text-center">
                <div className="text-3xl font-bold text-primary mb-1">80K</div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">Proyección 2026</div>
              </div>
            </div>

            {/* Sección 1 */}
            <div className="flex items-center gap-3 mb-4 mt-12">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold m-0">1. El fin de la espera: Residencia Permanente Directa</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              La disrupción más profunda del Investor Pass es la eliminación de la fricción burocrática. Mientras que el esquema tradicional exigía dos años de residencia temporal, este nuevo programa otorga el estatus permanente de forma inmediata. A través de una <strong>Ventanilla Única</strong> que integra de forma digital los trámites de SUACE, Migraciones e Identificaciones, Paraguay ha logrado lo que Europa ya no puede ofrecer: un camino sin obstáculos.
            </p>
            <div className="bg-accent/30 border-l-4 border-primary rounded-r-xl p-5 my-6 not-prose">
              <Quote className="w-6 h-6 text-primary mb-2" />
              <p className="italic text-foreground mb-2">
                "Muchos inversores querían establecer su residencia antes de desarrollar sus proyectos. Hoy estamos habilitando esa posibilidad, vinculando la radicación a inversiones que impulsan sectores estratégicos".
              </p>
              <p className="text-sm text-muted-foreground font-semibold m-0">
                — Marco Riquelme, Ministro de Industria y Comercio
              </p>
            </div>

            {/* Sección 2 */}
            <div className="flex items-center gap-3 mb-4 mt-12">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">2. El Menú de Inversión: Activos tangibles y liquidez digital</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              El programa se aleja del modelo de "creación de empleo forzado" que lastraba al antiguo SUACE, permitiendo tres vías de inversión pasiva:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 not-prose">
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <Globe2 className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold mb-1">USD 150K</div>
                <h4 className="font-semibold mb-2">Turismo</h4>
                <p className="text-sm text-muted-foreground m-0">
                  Umbral más accesible, enfocado en infraestructura hotelera del país.
                </p>
              </div>
              <div className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow">
                <TrendingUp className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold mb-1">USD 200K</div>
                <h4 className="font-semibold mb-2">Bolsa de Valores</h4>
                <p className="text-sm text-muted-foreground m-0">
                  Opción líquida tras la migración de la bolsa local a la infraestructura tecnológica de Nasdaq (enero 2026).
                </p>
              </div>
              <div className="bg-card border border-primary/40 rounded-2xl p-6 hover:shadow-lg transition-shadow ring-1 ring-primary/20">
                <Building2 className="w-8 h-8 text-primary mb-3" />
                <div className="text-2xl font-bold mb-1">USD 200K</div>
                <h4 className="font-semibold mb-2">Bienes Raíces</h4>
                <p className="text-sm text-muted-foreground m-0">
                  Opción predilecta. Ley 117/91: extranjeros con los mismos derechos de propiedad que los ciudadanos.
                </p>
              </div>
            </div>

            <p className="text-muted-foreground mb-4">
              Desde una perspectiva de estrategia de inversión, el mercado de Asunción sigue estando <strong>subvalorado</strong>. Bajo la "Teoría de los Anclajes de Centros Comerciales", los retornos más sólidos se concentran en un radio de 10-15 minutos a pie de Shopping Mariscal, Shopping del Sol y Paseo La Galería.
            </p>
            <p className="text-muted-foreground mb-8">
              En estas zonas, el metro cuadrado (USD 900 - USD 1.500) representa apenas una fracción del costo en Buenos Aires o San Pablo, con rendimientos netos por alquiler que <strong>superan el 8% anual</strong>.
            </p>

            {/* Sección 3 */}
            <div className="flex items-center gap-3 mb-4 mt-12">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Percent className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold m-0">3. El incentivo fiscal: Un beneficio empaquetado</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Paraguay ya era el destino líder por su sistema de <strong>tributación territorial (0% sobre ingresos de fuente extranjera)</strong>. Sin embargo, el Investor Pass añade un "endulzante" exclusivo:
            </p>

            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/30 rounded-2xl p-6 sm:p-8 my-8 not-prose text-center">
              <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Impuesto a dividendos</p>
              <div className="flex items-center justify-center gap-4 mb-3">
                <span className="text-3xl text-muted-foreground line-through">15%</span>
                <ArrowLeft className="w-6 h-6 rotate-180 text-primary" />
                <span className="text-5xl font-bold text-primary">8%</span>
              </div>
              <p className="text-sm text-muted-foreground m-0">Reducción exclusiva para titulares del Investor Pass</p>
            </div>

            <div className="bg-accent/30 border-l-4 border-primary rounded-r-xl p-5 my-6 not-prose">
              <Quote className="w-6 h-6 text-primary mb-2" />
              <p className="italic text-foreground mb-2">
                "Paraguay ofrece la optimización fiscal más agresiva de todas las Américas. Para una optimización pura a un costo mínimo, no existe una opción comparable en el hemisferio occidental".
              </p>
              <p className="text-sm text-muted-foreground font-semibold m-0">
                — David Lincoln, CEO de Lincoln Global Partners
              </p>
            </div>

            {/* Sección 4 */}
            <div className="flex items-center gap-3 mb-4 mt-12">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <Globe2 className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">4. El Cono Sur como Teatro de Operaciones (Plan B)</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              El Investor Pass no debe verse de forma aislada, sino como el componente de baja fricción de un <strong>Sistema de Soberanía Regional</strong>. En el panorama de 2026, Paraguay se posiciona como la puerta de entrada estratégica frente a una Argentina que lanza su propia ciudadanía por inversión de USD 500.000 y un Brasil enfocado en el real estate costero.
            </p>
            <p className="text-muted-foreground mb-6">
              La apuesta paraguaya se sostiene sobre fundamentos macroeconómicos ya validados por el mercado:
            </p>

            <div className="space-y-3 mb-8 not-prose">
              <div className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Grado de Inversión</h4>
                  <p className="text-sm text-muted-foreground m-0">Respaldado por Moody's (Baa3) y S&P tras las actualizaciones de 2024 y 2025.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Soberanía de Recursos</h4>
                  <p className="text-sm text-muted-foreground m-0">Independencia energética total (100% renovable vía Itaipú/Yacyretá), acceso al Acuífero Guaraní y seguridad alimentaria estructural.</p>
                </div>
              </div>
              <div className="flex gap-4 bg-card border border-border rounded-xl p-5">
                <ShieldCheck className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-semibold mb-1">Conectividad</h4>
                  <p className="text-sm text-muted-foreground m-0">El Corredor Bioceánico está transformando al país en el hub logístico que conecta el Atlántico con el Pacífico, blindando la economía contra cuellos de botella regionales.</p>
                </div>
              </div>
            </div>

            {/* Sección 5 */}
            <div className="flex items-center gap-3 mb-4 mt-12">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold m-0">5. Ciudadanía y Naturalización: El rigor del estratega</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              Es vital que el inversor sofisticado comprenda que la residencia permanente <strong>no es un atajo automático</strong> al pasaporte. Si bien Paraguay ofrece un camino de naturalización en solo 3 años, la Corte Suprema de Justicia exige el cumplimiento estricto de requisitos legales:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 not-prose">
              <div className="bg-card border border-border rounded-xl p-5">
                <div className="text-3xl font-bold text-primary mb-1">183</div>
                <div className="text-sm font-semibold mb-1">Días por año</div>
                <p className="text-xs text-muted-foreground m-0">Presencia física mínima en territorio nacional.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <Briefcase className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-semibold mb-1">Actividad económica</div>
                <p className="text-xs text-muted-foreground m-0">Ejercicio regular de profesión, oficio, ciencia o industria. Documentar contribución activa.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <CheckCircle2 className="w-6 h-6 text-primary mb-2" />
                <div className="text-sm font-semibold mb-1">Entrevistas</div>
                <p className="text-xs text-muted-foreground m-0">Exámenes de idioma y conocimientos sobre la Constitución y cultura del país.</p>
              </div>
            </div>

            <div className="bg-amber-500/10 border-l-4 border-amber-500 rounded-r-xl p-5 my-8 not-prose">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold mb-1">Advertencia de permanencia</p>
                  <p className="text-sm text-muted-foreground m-0">
                    La nacionalidad o residencia permanente puede perderse ante una <strong>ausencia injustificada por más de tres años</strong>. La movilidad global exige mantenimiento, no solo adquisición.
                  </p>
                </div>
              </div>
            </div>

            {/* Conclusión */}
            <div className="mt-12 mb-8 bg-gradient-to-br from-primary/10 to-accent/30 rounded-2xl p-6 sm:p-8 not-prose">
              <h2 className="text-2xl font-bold mb-4">Conclusión: La decisión soberana</h2>
              <p className="text-muted-foreground mb-4">
                El Investor Pass de Paraguay es más que un programa migratorio; es una <strong>actualización necesaria para el mercado de 2026</strong>. Al eliminar la fase temporal y ofrecer incentivos fiscales específicos en una economía con grado de inversión, Paraguay ha dejado de ser un "hack" para convertirse en el pilar de cualquier estrategia seria de diversificación internacional.
              </p>
              <p className="text-foreground font-semibold mb-0">
                En un panorama global de creciente presión fiscal y restricciones de movilidad, ¿es Paraguay el componente que le falta a su arquitectura de soberanía personal?
              </p>
            </div>

            {/* CTAs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-10 not-prose">
              <Link
                to="/permits"
                className="group bg-primary text-primary-foreground rounded-xl p-6 hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-lg mb-2">Ver requisitos de residencia →</h3>
                <p className="text-sm opacity-90 m-0">Guía completa del proceso migratorio en Paraguay.</p>
              </Link>
              <Link
                to="/taxation"
                className="group bg-card border border-border rounded-xl p-6 hover:border-primary hover:shadow-xl transition-all"
              >
                <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                  Calculadora fiscal →
                </h3>
                <p className="text-sm text-muted-foreground m-0">
                  Compara tu carga fiscal en Paraguay vs tu país de origen.
                </p>
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default InvestorPassPage;
