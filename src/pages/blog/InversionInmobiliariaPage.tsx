import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, TrendingUp, Building2, MapPin, DollarSign, BarChart3, Shield, Landmark, Users } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogImage from '@/assets/blog-inversion-inmobiliaria.webp';

const InversionInmobiliariaPage = () => {
  const post = blogPosts.find(p => p.id === 'inversion-inmobiliaria-paraguay-asuncion-ciudad-del-este-encarnacion')!;

  return (
    <Layout
      title={post.title}
      description={post.excerpt}
      canonical={`https://livingparaguay.com/blog/${post.id}`}
    >
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": post.title,
            "description": post.excerpt,
            "author": { "@type": "Organization", "name": "Living Paraguay" },
            "publisher": {
              "@type": "Organization",
              "name": "Living Paraguay",
              "logo": { "@type": "ImageObject", "url": "https://livingparaguay.com/og-image.jpg" }
            },
            "datePublished": post.date,
            "dateModified": post.date,
            "mainEntityOfPage": { "@type": "WebPage", "@id": `https://livingparaguay.com/blog/${post.id}` },
            "image": "https://livingparaguay.com/og-image.jpg"
          })}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto rinde una propiedad en Asunción?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Los departamentos en zonas prime de Asunción (Villa Morra, Carmelitas) ofrecen rentabilidades brutas del 6% al 8,5% anual, que sumadas a la apreciación del capital (8-12% anual) generan retornos totales del 12-15% anual."
                }
              },
              {
                "@type": "Question",
                "name": "¿Pueden los extranjeros comprar propiedades en Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Sí. No existen restricciones para que extranjeros compren propiedades urbanas en Paraguay. El título se inscribe directamente a nombre del comprador. Solo se requiere pasaporte vigente apostillado y acreditación de licitud de fondos."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es el precio promedio del metro cuadrado en Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En Asunción varía entre 1.400 y 2.500 USD/m², en Ciudad del Este entre 1.100 y 1.800 USD/m², y en Encarnación entre 900 y 1.500 USD/m²."
                }
              }
            ]
          })}
        </script>
      </Helmet>

      <article className="py-8 sm:py-12">
        {/* Header */}
        <div className="container mx-auto px-4 sm:px-6 max-w-4xl">
          <Link to="/blog" className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors mb-8">
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
                {new Date(post.date).toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
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
              <img src={blogImage} alt="Inversión inmobiliaria en Paraguay - skyline de Asunción" className="w-full h-full object-cover" loading="eager" />
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Paraguay se consolida como el hub de inversión inmobiliaria más sólido del Mercosur en 2025-2026. Con un PIB creciendo entre el 4% y el 5,3%, inflación controlada al 3,5% y un sistema fiscal del 10-10-10, el país ofrece un entorno ideal para inversores que buscan plusvalía y flujo de caja estable.
            </p>

            {/* Macro fundamentals */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">Fundamentos Macroeconómicos</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Paraguay proyecta un crecimiento del PIB del <strong>4,0% al 5,3%</strong> para 2025, situándose a la vanguardia de América Latina. Los sectores no agrícolas como la construcción y los servicios han mostrado un dinamismo superior al <strong>5,4%</strong>. La deuda pública se mantiene en torno al <strong>40% del PIB</strong>, una de las más bajas de la región.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Indicador</th>
                      <th className="text-center py-3 px-4 font-semibold">2024</th>
                      <th className="text-center py-3 px-4 font-semibold">2025</th>
                      <th className="text-center py-3 px-4 font-semibold">2026</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Crecimiento PIB</td>
                      <td className="text-center py-3 px-4">4,0% - 4,5%</td>
                      <td className="text-center py-3 px-4 font-semibold text-primary">4,2% - 5,3%</td>
                      <td className="text-center py-3 px-4">4,5%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Meta Inflación</td>
                      <td className="text-center py-3 px-4">4,0%</td>
                      <td className="text-center py-3 px-4">3,5%</td>
                      <td className="text-center py-3 px-4">3,5%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Tasa Política Monetaria</td>
                      <td className="text-center py-3 px-4">6,0%</td>
                      <td className="text-center py-3 px-4">6,0%</td>
                      <td className="text-center py-3 px-4">—</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Deuda Pública / PIB</td>
                      <td className="text-center py-3 px-4">36,4%</td>
                      <td className="text-center py-3 px-4">40,0%</td>
                      <td className="text-center py-3 px-4">41,1%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Inversión Ley 60/90 (MM USD)</td>
                      <td className="text-center py-3 px-4">443</td>
                      <td className="text-center py-3 px-4 font-semibold text-primary">900 (Est.)</td>
                      <td className="text-center py-3 px-4">—</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Asunción */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold m-0">Asunción: Centralidad y Sofisticación</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Asunción ha experimentado una metamorfosis vertical sin precedentes, con más de <strong>150 torres</strong> de departamentos construidas en la última década. El epicentro se localiza en los barrios Villa Morra, Manorá, Carmelitas e Ycuá Satí, conformando el <strong>"Eje Corporativo"</strong>.
            </p>
            <p className="text-muted-foreground mb-6">
              En esta zona, la plusvalía de la tierra mantiene un ritmo de <strong>12% anual</strong>, mientras que los departamentos premium registran una apreciación del <strong>15% al 25%</strong> respecto a precios de preventa. Los alquileres han subido entre un <strong>15% y 20% anual</strong>.
            </p>

            <div className="overflow-x-auto mb-8">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Zona Prime</th>
                    <th className="text-center py-3 px-4 font-semibold">Precio m² (USD)</th>
                    <th className="text-center py-3 px-4 font-semibold">Rentabilidad Bruta</th>
                    <th className="text-left py-3 px-4 font-semibold">Perfil Inquilino</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Villa Morra</td>
                    <td className="text-center py-3 px-4">1.800 - 2.500</td>
                    <td className="text-center py-3 px-4 text-primary font-semibold">7% - 9%</td>
                    <td className="py-3 px-4">Corporativo / Expatriados</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Manorá</td>
                    <td className="text-center py-3 px-4">1.800 - 2.300</td>
                    <td className="text-center py-3 px-4 text-primary font-semibold">6% - 8%</td>
                    <td className="py-3 px-4">Residencial Premium</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4 font-medium">Carmelitas</td>
                    <td className="text-center py-3 px-4">1.700 - 2.200</td>
                    <td className="text-center py-3 px-4 text-primary font-semibold">6% - 7,5%</td>
                    <td className="py-3 px-4">Diplomático / Familiar</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 font-medium">Las Mercedes</td>
                    <td className="text-center py-3 px-4">1.100 - 1.600</td>
                    <td className="text-center py-3 px-4 text-primary font-semibold">8% - 11%</td>
                    <td className="py-3 px-4">Jóvenes Profesionales</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Chaco'i */}
            <div className="bg-accent/30 border border-accent rounded-2xl p-6 mb-10">
              <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-primary" />
                Zona Emergente: Chaco'i
              </h3>
              <p className="text-muted-foreground mb-0">
                La inauguración del Puente Héroes del Chaco (USD 131 millones) ha detonado una revalorización comparable a Puerto Madero en sus inicios. Terrenos que se valoraban en USD 20.000/hectárea hoy superan los <strong>USD 100/m²</strong> — un incremento de hasta <strong>50 veces</strong>. El proyecto "Nueva Asunción" apunta a un mercado que busca seguridad, amplitud y contacto con el río.
              </p>
            </div>

            {/* Ciudad del Este */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Landmark className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">Ciudad del Este: Motor Industrial y Nuevo Ciclo Urbano</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Ciudad del Este (CDE) se ha transformado en un polo industrial y logístico de primer orden. Alto Paraná concentra el <strong>60% de las industrias maquiladoras</strong> del país. Con más de <strong>40 edificios en construcción simultánea</strong>, la ciudad atraviesa un ciclo de modernización urbana impulsado por tres factores clave:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
              <div className="bg-card border border-border rounded-xl p-4">
                <Building2 className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-semibold mb-1">Diversificación</h4>
                <p className="text-sm text-muted-foreground">Transición hacia manufactura y agronegocios que crea una nueva clase de ejecutivos y técnicos.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <Users className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-semibold mb-1">23.800 Universitarios</h4>
                <p className="text-sm text-muted-foreground">Muchos brasileños que cruzan la frontera, generando demanda masiva de alquileres.</p>
              </div>
              <div className="bg-card border border-border rounded-xl p-4">
                <DollarSign className="w-6 h-6 text-blue-500 mb-2" />
                <h4 className="font-semibold mb-1">35-40% Capital Extranjero</h4>
                <p className="text-sm text-muted-foreground">Inversores de Brasil y Argentina que ven en CDE un refugio de valor en dólares.</p>
              </div>
            </div>

            <div className="overflow-x-auto mb-10">
              <table className="w-full text-sm border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-3 px-4 font-semibold">Segmento en CDE</th>
                    <th className="text-center py-3 px-4 font-semibold">Inversión (MM USD)</th>
                    <th className="text-left py-3 px-4 font-semibold">Impacto / Tendencia</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Desarrollos Inmobiliarios</td>
                    <td className="text-center py-3 px-4">180 - 200</td>
                    <td className="py-3 px-4">Crecimiento del 25-30% proyectado para 2025</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Sector Comercial</td>
                    <td className="text-center py-3 px-4">~50</td>
                    <td className="py-3 px-4">Shopping China y Cellshop (32.000 m²)</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="py-3 px-4">Maquila e Industria</td>
                    <td className="text-center py-3 px-4">Variable</td>
                    <td className="py-3 px-4">60% de producción nacional concentrada</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">Empleo Construcción</td>
                    <td className="text-center py-3 px-4">—</td>
                    <td className="py-3 px-4">25.000 puestos directos e indirectos</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Encarnación */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <MapPin className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">Encarnación: Turismo y Calidad de Vida</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Encarnación se ha consolidado como la <strong>capital turística de Paraguay</strong>, con una costanera de <strong>27 km</strong> y tres playas fluviales. Desde la perspectiva de inversión, se encuentra en una etapa de maduración más temprana que Asunción, lo que ofrece <strong>tickets de entrada más bajos y un margen de plusvalía considerable</strong>.
            </p>
            <p className="text-muted-foreground mb-6">
              Es posible encontrar terrenos estratégicos frente al río a precios de <strong>USD 100 a 700/m²</strong>, cifras inhallables en ciudades con similar infraestructura turística en la región. Es la segunda ciudad del país con un <strong>Plan Regulador aprobado</strong>, garantizando seguridad jurídica.
            </p>

            {/* Comparative table */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
              <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <BarChart3 className="w-6 h-6 text-primary" />
                Comparativa: Yields y Precios (2025-2026)
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Categoría</th>
                      <th className="text-center py-3 px-4 font-semibold">Asunción</th>
                      <th className="text-center py-3 px-4 font-semibold">Ciudad del Este</th>
                      <th className="text-center py-3 px-4 font-semibold">Encarnación</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Rentabilidad Bruta</td>
                      <td className="text-center py-3 px-4">6% - 8,5%</td>
                      <td className="text-center py-3 px-4 text-primary font-semibold">7% - 10%</td>
                      <td className="text-center py-3 px-4">5,5% - 8%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Apreciación Anual</td>
                      <td className="text-center py-3 px-4">8% - 12%</td>
                      <td className="text-center py-3 px-4 text-primary font-semibold">10% - 15%</td>
                      <td className="text-center py-3 px-4">8% - 12%</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Precio m² (USD)</td>
                      <td className="text-center py-3 px-4">1.400 - 2.500</td>
                      <td className="text-center py-3 px-4">1.100 - 1.800</td>
                      <td className="text-center py-3 px-4 text-green-500 font-semibold">900 - 1.500</td>
                    </tr>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4 font-medium">Vacancia Promedio</td>
                      <td className="text-center py-3 px-4 text-green-500 font-semibold">5% - 7%</td>
                      <td className="text-center py-3 px-4">6% - 8%</td>
                      <td className="text-center py-3 px-4">8% - 12%</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium">Liquidez Reventa</td>
                      <td className="text-center py-3 px-4 text-green-500 font-semibold">Muy Alta</td>
                      <td className="text-center py-3 px-4">Alta</td>
                      <td className="text-center py-3 px-4">Media</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Recommendations */}
            <h2 className="text-2xl font-bold mb-6">Recomendaciones por Perfil de Inversor</h2>
            <div className="grid grid-cols-1 gap-4 mb-10">
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-6 h-6 text-green-500" />
                  <h3 className="text-lg font-bold m-0">Inversor Conservador</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Departamentos de 1 y 2 dormitorios en el <strong>Eje Corporativo de Asunción</strong> (Villa Morra, Carmelitas). Menor vacancia y liquidez de reventa superior. Objetivo: capturar la demanda de expatriados y ejecutivos de multinacionales.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <TrendingUp className="w-6 h-6 text-blue-500" />
                  <h3 className="text-lg font-bold m-0">Inversor en Crecimiento</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Desarrollos mixtos en <strong>Ciudad del Este y Presidente Franco</strong>. El impacto del Puente de la Integración y la expansión de la maquila aseguran plusvalía acelerada en los próximos 5 años. El segmento de residencias universitarias ofrece yields brutos muy atractivos.
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl p-6">
                <div className="flex items-center gap-3 mb-3">
                  <MapPin className="w-6 h-6 text-purple-500" />
                  <h3 className="text-lg font-bold m-0">Inversor de Largo Plazo / Lifestyle</h3>
                </div>
                <p className="text-muted-foreground mb-0">
                  Tierra o proyectos en preventa en la <strong>Costanera de Encarnación</strong> o en <strong>Chaco'i (Nueva Asunción)</strong>. La escasez de frentes de río con infraestructura garantiza que estos activos serán los de mayor valor patrimonial en la próxima década.
                </p>
              </div>
            </div>

            {/* Trends */}
            <div className="bg-accent/30 border border-accent rounded-2xl p-6 mb-10">
              <h3 className="text-xl font-bold mb-3">🔮 Tendencias Futuras 2025-2030</h3>
              <ul className="space-y-2 text-muted-foreground mb-0">
                <li>• Para 2026, se estima que el <strong>70% de las nuevas torres</strong> incluirán estaciones de carga para vehículos eléctricos, domótica y coworking integrado.</li>
                <li>• Digitalización de la gestión inmobiliaria con firmas digitales y blockchain en el Registro Público.</li>
                <li>• <strong>Riesgo de sobreoferta</strong> en el segmento de lujo (+USD 300.000) en ciertas zonas de Asunción.</li>
                <li>• La infraestructura pública debe acompañar el desarrollo privado en zonas de rápido crecimiento como Manorá y Trinidad.</li>
              </ul>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-3">¿Listo para invertir en Paraguay?</h3>
              <p className="text-muted-foreground mb-6">
                Consulta nuestras guías sobre fiscalidad, barrios y trámites para tomar la mejor decisión.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/taxation" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Guía Fiscal Completa
                </Link>
                <Link to="/neighborhoods" className="px-6 py-3 bg-card border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                  Explorar Barrios
                </Link>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default InversionInmobiliariaPage;
