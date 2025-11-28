import { useParams, Link } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { AnimatedDiv } from '../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();

  // In a real app, this would fetch the post data from an API
  const post = {
    id: 'impuestos-paraguay-sistema-territorial',
    title: 'Impuestos en Paraguay: Guía completa del sistema territorial',
    excerpt: 'Descubre cómo funciona el sistema fiscal territorial de Paraguay y por qué es uno de los más atractivos para expatriados e inversores internacionales.',
    date: '2025-11-20',
    readTime: '15 min',
    category: 'Fiscalidad',
    author: 'Living Paraguay',
  };

  if (slug !== post.id) {
    return (
      <Layout
        title="Artículo no encontrado"
        description="El artículo que buscas no existe"
        canonical={`https://livingparaguay.com/blog/${slug}`}
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl font-bold mb-4">Artículo no encontrado</h1>
          <Link to="/blog" className="text-primary hover:underline">
            Volver al blog
          </Link>
        </div>
      </Layout>
    );
  }

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
            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTMsNDMsMzAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold text-primary/30">₲</span>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            {/* Introduction */}
            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="text-lg font-semibold mb-2">📌 En este artículo aprenderás:</p>
              <ul className="space-y-2 mb-0">
                <li>Cómo funciona el sistema territorial de Paraguay</li>
                <li>Qué impuestos pagarás (y cuáles NO pagarás)</li>
                <li>Estrategias legales para optimizar tu carga fiscal</li>
                <li>Comparativas con otros países de la región</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">¿Por qué Paraguay es un paraíso fiscal legal?</h2>
            
            <p className="text-lg leading-relaxed mb-6">
              Paraguay se ha convertido en uno de los destinos más atractivos para expatriados, nómadas digitales e inversores internacionales. La razón principal es su <strong>sistema fiscal territorial</strong>, que ofrece ventajas únicas en América Latina y el mundo.
            </p>

            <p className="text-lg leading-relaxed mb-6">
              A diferencia de países como Estados Unidos o España, que gravan la renta mundial de sus residentes, Paraguay solo cobra impuestos sobre ingresos generados <em>dentro</em> de sus fronteras. Esto significa que si trabajas remotamente para una empresa extranjera, recibes dividendos de inversiones internacionales o ganas intereses en cuentas bancarias fuera de Paraguay, <strong>no pagarás impuestos en Paraguay por esos ingresos</strong>.
            </p>

            <h2 className="text-3xl font-bold mt-12 mb-6">El Principio de Territorialidad Explicado</h2>

            <p className="text-lg leading-relaxed mb-6">
              El <strong>Principio de la Fuente</strong> o <strong>Territorialidad</strong> es el pilar del sistema fiscal paraguayo. Está establecido en la Ley N° 125/91 "Ley Tributaria" y significa que:
            </p>

            <div className="bg-muted/50 p-6 rounded-lg mb-8">
              <p className="text-xl font-semibold mb-4 text-center">
                "Solo se gravan las rentas de fuente paraguaya"
              </p>
              <p className="text-center text-muted-foreground">
                Esto incluye salarios por trabajo realizado en Paraguay, alquileres de propiedades locales, intereses de bancos paraguayos, etc.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">Ejemplos Prácticos</h3>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-4 rounded-lg">
                <p className="font-semibold text-green-800 dark:text-green-200 mb-2">✅ No pagas impuestos en Paraguay por:</p>
                <ul className="space-y-1 mb-0">
                  <li>Trabajo remoto para empresas de EE.UU., Europa o cualquier país extranjero</li>
                  <li>Dividendos de acciones de empresas internacionales (Apple, Google, etc.)</li>
                  <li>Intereses bancarios de cuentas en el exterior</li>
                  <li>Rentas de alquiler de propiedades fuera de Paraguay</li>
                  <li>Ganancias de criptomonedas generadas fuera del país</li>
                </ul>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-4 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Sí pagas impuestos en Paraguay por:</p>
                <ul className="space-y-1 mb-0">
                  <li>Salario de un trabajo en una empresa paraguaya</li>
                  <li>Alquileres de propiedades ubicadas en Paraguay</li>
                  <li>Intereses de cuentas bancarias en bancos paraguayos</li>
                  <li>Ventas de productos o servicios a clientes paraguayos</li>
                  <li>Dividendos de empresas constituidas en Paraguay</li>
                </ul>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Impuesto a la Renta Personal (IRP)</h2>

            <p className="text-lg leading-relaxed mb-6">
              El <strong>IRP</strong> es el principal impuesto para personas físicas residentes en Paraguay. Se divide en dos categorías que se liquidan de forma separada:
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. IRP sobre Rentas de Servicios Personales (IRP-RSP)</h3>

            <p className="text-lg leading-relaxed mb-6">
              Grava los ingresos obtenidos por trabajo en relación de dependencia (salarios) o independiente (honorarios profesionales) de fuente paraguaya.
            </p>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <h4 className="text-xl font-bold mb-4">Tasas Progresivas del IRP-RSP:</h4>
              <table className="w-full text-left mb-4">
                <thead>
                  <tr className="border-b">
                    <th className="pb-2">Renta Neta Anual (PYG)</th>
                    <th className="pb-2">Tasa</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="py-2">Hasta 36.000.000</td>
                    <td className="py-2 font-semibold">8%</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">De 36.000.001 a 120.000.000</td>
                    <td className="py-2 font-semibold">9%</td>
                  </tr>
                  <tr>
                    <td className="py-2">Más de 120.000.000</td>
                    <td className="py-2 font-semibold">10%</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-sm text-muted-foreground mb-0">
                *Aproximadamente: ₲36M = USD 5,000 | ₲120M = USD 16,500 (tipo de cambio estimado)
              </p>
            </div>

            <h4 className="text-xl font-bold mb-4">Deducciones Clave para Expatriados</h4>

            <p className="text-lg leading-relaxed mb-6">
              Una ventaja importante del IRP-RSP es que puedes <strong>deducir gastos personales y familiares</strong>, lo que reduce significativamente tu base imponible:
            </p>

            <ul className="space-y-3 mb-8">
              <li className="flex gap-3">
                <span className="text-primary text-xl">•</span>
                <span><strong>Gastos de salud:</strong> Consultas médicas, medicamentos, seguros de salud, cirugías</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl">•</span>
                <span><strong>Gastos de educación:</strong> Colegios, universidades, cursos, libros</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl">•</span>
                <span><strong>Alquiler de vivienda:</strong> Hasta cierto límite</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl">•</span>
                <span><strong>Aportes al IPS:</strong> 100% deducible</span>
              </li>
              <li className="flex gap-3">
                <span className="text-primary text-xl">•</span>
                <span><strong>Donaciones:</strong> A instituciones reconocidas</span>
              </li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💡 Ventaja única para expatriados:</p>
              <p className="mb-0">
                Si realizas gastos de salud o educación <strong>en el exterior</strong> (por ejemplo, consultas en tu país de origen), estos también son deducibles del IRP-RSP paraguayo. Solo necesitas conservar las facturas correspondientes.
              </p>
            </div>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. IRP sobre Rentas y Ganancias de Capital (IRP-RGC)</h3>

            <p className="text-lg leading-relaxed mb-6">
              Esta categoría grava las rentas pasivas de fuente paraguaya, como:
            </p>

            <ul className="space-y-2 mb-6">
              <li>• Intereses de cuentas bancarias en Paraguay</li>
              <li>• Alquileres de propiedades en Paraguay</li>
              <li>• Ganancias de capital por venta de inmuebles paraguayos</li>
            </ul>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <p className="text-xl font-bold mb-2">Tasa del IRP-RGC: <span className="text-primary">8%</span></p>
              <p className="text-muted-foreground mb-0">Tasa única sobre la renta neta</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Impuesto al Valor Agregado (IVA)</h2>

            <p className="text-lg leading-relaxed mb-6">
              El <strong>IVA</strong> es el principal impuesto al consumo en Paraguay. Las tasas son:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border p-6 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">10%</p>
                <p className="font-semibold mb-2">Tasa General</p>
                <p className="text-sm text-muted-foreground mb-0">Aplicable a la mayoría de bienes y servicios</p>
              </div>
              <div className="bg-card border p-6 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">5%</p>
                <p className="font-semibold mb-2">Tasa Reducida</p>
                <p className="text-sm text-muted-foreground mb-0">Alquileres de vivienda, productos básicos</p>
              </div>
            </div>

            <div className="bg-green-50 dark:bg-green-950/20 border border-green-200 dark:border-green-800 p-6 rounded-lg mb-8">
              <p className="text-xl font-bold text-green-800 dark:text-green-200 mb-3">
                🚀 Clave para Nómadas Digitales y Freelancers
              </p>
              <p className="mb-2">
                La <strong>exportación de servicios</strong> está <strong>exenta de IVA</strong> en Paraguay. Esto significa que si ofreces:
              </p>
              <ul className="space-y-1 mb-2">
                <li>• Consultoría internacional</li>
                <li>• Desarrollo de software para clientes extranjeros</li>
                <li>• Diseño gráfico o marketing digital</li>
                <li>• Cualquier servicio prestado a clientes fuera de Paraguay</li>
              </ul>
              <p className="font-semibold mb-0">No cobrarás IVA a tus clientes extranjeros y no pagarás IVA al fisco paraguayo por esas operaciones.</p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Impuesto a los Dividendos (IDU)</h2>

            <p className="text-lg leading-relaxed mb-6">
              Este impuesto grava la distribución de utilidades de empresas <strong>paraguayas</strong> a sus accionistas:
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border p-6 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">8%</p>
                <p className="font-semibold mb-2">Residentes Paraguayos</p>
              </div>
              <div className="bg-card border p-6 rounded-lg">
                <p className="text-2xl font-bold text-primary mb-2">15%</p>
                <p className="font-semibold mb-2">No Residentes</p>
              </div>
            </div>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💰 Importante:</p>
              <p className="mb-0">
                Este impuesto <strong>no aplica a dividendos</strong> recibidos de empresas <strong>extranjeras</strong>. Si eres accionista de una empresa de EE.UU., España o cualquier otro país, y recibes dividendos como residente paraguayo, no pagas IDU en Paraguay.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Comparativa Internacional: Paraguay vs Otros Países</h2>

            <p className="text-lg leading-relaxed mb-6">
              Para entender mejor las ventajas fiscales de Paraguay, comparemos con otros destinos populares:
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border">
                <thead>
                  <tr className="bg-muted">
                    <th className="border p-3 text-left">País</th>
                    <th className="border p-3 text-left">Sistema</th>
                    <th className="border p-3 text-left">Tasa Máxima Renta</th>
                    <th className="border p-3 text-left">Gravan Renta Mundial?</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-3 font-semibold">🇵🇾 Paraguay</td>
                    <td className="border p-3">Territorial</td>
                    <td className="border p-3 text-green-600 dark:text-green-400 font-bold">10%</td>
                    <td className="border p-3 text-green-600 dark:text-green-400 font-bold">NO</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">🇪🇸 España</td>
                    <td className="border p-3">Mundial</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">47%</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">SÍ</td>
                  </tr>
                  <tr>
                    <td className="border p-3">🇦🇷 Argentina</td>
                    <td className="border p-3">Mundial</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">35%</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">SÍ</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">🇨🇱 Chile</td>
                    <td className="border p-3">Mundial</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">40%</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">SÍ</td>
                  </tr>
                  <tr>
                    <td className="border p-3">🇺🇸 Estados Unidos</td>
                    <td className="border p-3">Mundial</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">37% + estatal</td>
                    <td className="border p-3 text-red-600 dark:text-red-400">SÍ</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border p-3">🇵🇹 Portugal (NHR)</td>
                    <td className="border p-3">Especial 10 años</td>
                    <td className="border p-3 text-yellow-600 dark:text-yellow-400">0-20%</td>
                    <td className="border p-3 text-yellow-600 dark:text-yellow-400">Limitado</td>
                  </tr>
                  <tr>
                    <td className="border p-3">🇵🇦 Panamá</td>
                    <td className="border p-3">Territorial</td>
                    <td className="border p-3 text-green-600 dark:text-green-400">25%</td>
                    <td className="border p-3 text-green-600 dark:text-green-400">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Casos de Uso: ¿Quién se beneficia más?</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-card border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🖥️ Nómadas Digitales y Freelancers</h3>
                <p className="mb-2">Si trabajas remotamente para clientes extranjeros:</p>
                <ul className="space-y-1 mb-3">
                  <li>• <strong>0% de impuestos</strong> sobre ingresos extranjeros</li>
                  <li>• No necesitas facturar IVA a clientes internacionales</li>
                  <li>• Deducciones por gastos de salud y educación</li>
                </ul>
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Ahorro estimado vs España:</strong> 35-40% de tus ingresos brutos anuales
                </p>
              </div>

              <div className="bg-card border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">💼 Inversores y Rentistas</h3>
                <p className="mb-2">Si vives de inversiones internacionales:</p>
                <ul className="space-y-1 mb-3">
                  <li>• Dividendos extranjeros: <strong>0% impuestos</strong></li>
                  <li>• Intereses bancarios del exterior: <strong>0% impuestos</strong></li>
                  <li>• Ganancias de capital en mercados internacionales: <strong>0% impuestos</strong></li>
                </ul>
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Ejemplo:</strong> Un inversor con USD 50,000 anuales en dividendos de empresas extranjeras paga 0% en Paraguay vs. 19-23% en España
                </p>
              </div>

              <div className="bg-card border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">🏢 Emprendedores con Negocios Online</h3>
                <p className="mb-2">Si vendes productos/servicios digitales a nivel global:</p>
                <ul className="space-y-1 mb-3">
                  <li>• Exportación de servicios: <strong>Exenta de IVA</strong></li>
                  <li>• Puedes constituir una empresa paraguaya con bajos costos</li>
                  <li>• Retiro de dividendos: 8% (vs 47% en algunos países)</li>
                </ul>
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Ventaja:</strong> Estructura fiscal simple sin impuestos sobre ventas internacionales
                </p>
              </div>

              <div className="bg-card border p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-3">👨‍💼 Empleados de Empresas Extranjeras</h3>
                <p className="mb-2">Si trabajas en relación de dependencia para una empresa fuera de Paraguay:</p>
                <ul className="space-y-1 mb-3">
                  <li>• Tu salario: <strong>0% impuestos en Paraguay</strong></li>
                  <li>• Sin retenciones en fuente</li>
                  <li>• Mayor poder adquisitivo vs tu país de origen</li>
                </ul>
                <p className="text-sm text-muted-foreground mb-0">
                  <strong>Caso real:</strong> Un desarrollador de software que gana USD 80,000 anuales trabajando para Google desde Asunción no paga impuestos en Paraguay
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Estrategias de Optimización Fiscal (100% Legales)</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">1. Estructura de Doble Residencia</h3>
            <p className="text-lg leading-relaxed mb-6">
              Algunos expatriados mantienen residencia fiscal en Paraguay mientras pasan parte del año en su país de origen (sin superar los 183 días para no ser considerado residente fiscal allí). De esta forma, optimizan:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Impuestos sobre ingresos extranjeros: 0% en Paraguay</li>
              <li>• Flexibilidad geográfica</li>
              <li>• Acceso a servicios en ambos países</li>
            </ul>
            <p className="text-sm text-muted-foreground italic mb-8">
              ⚠️ Consulta con un asesor fiscal internacional para evitar doble imposición o conflictos de residencia fiscal.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">2. Estructura Empresarial Inteligente</h3>
            <p className="text-lg leading-relaxed mb-6">
              Si eres emprendedor, puedes:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Constituir una empresa paraguaya (SA o SRL) para facturar servicios internacionales</li>
              <li>• Beneficiarte de la exención de IVA en exportación de servicios</li>
              <li>• Deducir gastos operativos de la empresa</li>
              <li>• Retirar dividendos con solo 8% de IDU</li>
            </ul>

            <h3 className="text-2xl font-bold mt-8 mb-4">3. Maximizar Deducciones del IRP-RSP</h3>
            <p className="text-lg leading-relaxed mb-6">
              Si generas ingresos de fuente paraguaya, asegúrate de:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Conservar todas las facturas de gastos deducibles</li>
              <li>• Declarar gastos de salud y educación en el exterior</li>
              <li>• Contribuir al IPS (100% deducible)</li>
              <li>• Realizar donaciones a instituciones reconocidas</li>
            </ul>

            <h2 className="text-3xl font-bold mt-12 mb-6">Obligaciones Fiscales: ¿Qué debes hacer?</h2>

            <h3 className="text-2xl font-bold mt-8 mb-4">Registro Único del Contribuyente (RUC)</h3>
            <p className="text-lg leading-relaxed mb-6">
              El <strong>RUC</strong> es el número de identificación fiscal en Paraguay. Debes obtenerlo si:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• Generas ingresos de fuente paraguaya</li>
              <li>• Abres una empresa en Paraguay</li>
              <li>• Necesitas emitir facturas</li>
            </ul>
            <p className="text-lg leading-relaxed mb-8">
              El trámite es gratuito y se realiza en la <strong>Subsecretaría de Estado de Tributación (SET)</strong>.
            </p>

            <h3 className="text-2xl font-bold mt-8 mb-4">Declaraciones Fiscales</h3>
            <p className="text-lg leading-relaxed mb-6">
              Si generas ingresos gravables en Paraguay, debes presentar:
            </p>
            <ul className="space-y-2 mb-6">
              <li>• <strong>Declaración Jurada del IRP:</strong> Anualmente, en marzo-abril del año siguiente</li>
              <li>• <strong>Declaración del IVA:</strong> Mensualmente (si corresponde)</li>
              <li>• <strong>Libros contables:</strong> Si tienes empresa</li>
            </ul>

            <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg mb-8">
              <p className="font-semibold mb-2">💡 Recomendación:</p>
              <p className="mb-0">
                Contrata un contador local para que maneje tus declaraciones. Los costos son bajos (USD 100-300/año) y te evitarás dolores de cabeza con la SET.
              </p>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Mitos y Realidades sobre los Impuestos en Paraguay</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Mito: "Paraguay es un paraíso fiscal ilegal"</p>
                <p className="mb-0">
                  <strong>Realidad:</strong> Paraguay no está en ninguna lista negra internacional. Su sistema territorial es completamente legal y transparente. El país firma convenios para evitar la doble imposición y cumple con estándares internacionales de transparencia fiscal (OCDE, GAFI).
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Mito: "No pagas ningún impuesto en Paraguay"</p>
                <p className="mb-0">
                  <strong>Realidad:</strong> Si generas ingresos de fuente paraguaya, sí pagarás impuestos (IRP, IVA, etc.). La ventaja es que las tasas son bajas (máx. 10%) y no se gravan ingresos extranjeros.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Mito: "Es difícil obtener la residencia fiscal en Paraguay"</p>
                <p className="mb-0">
                  <strong>Realidad:</strong> Paraguay tiene uno de los procesos de residencia más simples de América Latina. En 2-4 meses puedes tener tu residencia permanente y ser considerado residente fiscal.
                </p>
              </div>

              <div className="bg-red-50 dark:bg-red-950/20 border border-red-200 dark:border-red-800 p-6 rounded-lg">
                <p className="font-semibold text-red-800 dark:text-red-200 mb-2">❌ Mito: "Tu país de origen te seguirá cobrando impuestos"</p>
                <p className="mb-0">
                  <strong>Realidad:</strong> Si estableces correctamente tu residencia fiscal en Paraguay y dejas de ser residente fiscal en tu país de origen (generalmente pasando menos de 183 días allí), solo pagarás impuestos según las reglas paraguayas. Existen convenios para evitar la doble imposición.
                </p>
              </div>
            </div>

            <h2 className="text-3xl font-bold mt-12 mb-6">Conclusión: ¿Vale la pena Paraguay desde el punto de vista fiscal?</h2>

            <p className="text-lg leading-relaxed mb-6">
              Para la mayoría de expatriados, nómadas digitales e inversores internacionales, Paraguay ofrece uno de los sistemas fiscales más atractivos del mundo. La combinación de:
            </p>

            <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 rounded-xl mb-8">
              <ul className="space-y-3 text-lg">
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-2xl">✓</span>
                  <span><strong>Sistema territorial</strong> (0% impuestos sobre rentas extranjeras)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-2xl">✓</span>
                  <span><strong>Tasas bajas</strong> (máx. 10% sobre rentas locales)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-2xl">✓</span>
                  <span><strong>Deducciones generosas</strong> (salud, educación, IPS)</span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-2xl">✓</span>
                  <span><strong>Proceso de residencia simple</strong></span>
                </li>
                <li className="flex gap-3 items-start">
                  <span className="text-primary text-2xl">✓</span>
                  <span><strong>Bajo costo de vida</strong></span>
                </li>
              </ul>
            </div>

            <p className="text-lg leading-relaxed mb-6">
              ...hacen de Paraguay una opción ideal para quienes buscan <strong>optimizar legalmente su carga fiscal</strong> sin renunciar a una buena calidad de vida.
            </p>

            <div className="bg-primary text-primary-foreground p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4">🚀 ¿Listo para dar el siguiente paso?</h3>
              <p className="text-lg mb-4">
                Si estás considerando mudarte a Paraguay para aprovechar estas ventajas fiscales, te recomendamos:
              </p>
              <ol className="space-y-2 mb-6 pl-5">
                <li>Consultar con un asesor fiscal internacional</li>
                <li>Revisar los requisitos de residencia en nuestra sección de <Link to="/permits" className="underline font-bold">Permisos</Link></li>
                <li>Planificar tu mudanza con al menos 6 meses de anticipación</li>
                <li>Contactar a un contador local en Paraguay antes de llegar</li>
              </ol>
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
              <h3 className="text-xl font-bold mb-4">📚 Legislación Oficial:</h3>
              <ul className="space-y-2">
                <li>• <a href="https://www.set.gov.py/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">Subsecretaría de Estado de Tributación (SET)</a></li>
                <li>• Ley N° 125/91 - Ley Tributaria (disponible en SET)</li>
                <li>• Ley N° 6380/2019 - Modificaciones al Régimen Tributario</li>
              </ul>
            </div>

            <div className="bg-card border p-6 rounded-lg mb-8">
              <h3 className="text-xl font-bold mb-4">🔗 Artículos Relacionados:</h3>
              <ul className="space-y-2">
                <li>• <Link to="/permits" className="text-primary hover:underline">Guía completa de residencia en Paraguay</Link></li>
                <li>• <Link to="/housing" className="text-primary hover:underline">Costo de vida y vivienda en Asunción</Link></li>
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
          <div className="bg-gradient-to-r from-primary to-primary-hover p-8 sm:p-12 rounded-2xl text-primary-foreground">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              ¿Necesitas asesoría personalizada?
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Nuestro equipo puede ayudarte a planificar tu mudanza a Paraguay y optimizar tu situación fiscal.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 rounded-lg font-bold hover:bg-white/90 transition-colors"
            >
              Agendar Consulta Gratuita
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPostPage;
