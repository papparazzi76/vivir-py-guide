import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, Scale, FileCheck, DollarSign, Building2, Home, ShieldCheck, Percent } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogImage from '@/assets/blog-marco-fiscal-paraguay.webp';

const MarcoFiscalInversionPage = () => {
  const post = blogPosts.find(p => p.id === 'marco-legal-fiscal-inversion-inmobiliaria-paraguay')!;

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
                "name": "¿Cuánto pago de impuestos sobre alquileres en Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El Impuesto a la Renta Personal (IRP) sobre alquileres es del 10% sobre el ingreso neto, después de deducir gastos como mantenimiento, seguro y administración."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué es la Ley 60/90 y cómo beneficia al inversor?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "La Ley 60/90 ofrece exoneraciones fiscales masivas para proyectos de inversión. En 2025, las inversiones bajo este régimen alcanzaron un récord de USD 650 millones, un incremento del 52% respecto al año anterior."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es el impuesto a la ganancia de capital para residentes?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Un residente con cédula paraguaya paga efectivamente solo el 2,4% sobre el valor total de la venta, frente al 10% que paga un no residente. Obtener la residencia demora entre 2 y 4 meses."
                }
              },
              {
                "@type": "Question",
                "name": "¿Qué es el programa Che Róga Porã?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Es un programa gubernamental que permite acceder a viviendas de hasta USD 100.000 con tasas del 6,5% a 30 años. Para el inversor, abre oportunidades en desarrollos de escala masiva en ciudades del Gran Asunción."
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
              <img src={blogImage} alt="Marco legal y fiscal para invertir en Paraguay" className="w-full h-full object-cover" loading="eager" />
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Paraguay combina un marco legal abierto al capital extranjero, un sistema tributario ultra competitivo (10-10-10) y programas de financiación gubernamental que crean oportunidades únicas para inversores inmobiliarios. Esta guía desglosa cada ventaja fiscal y legal.
            </p>

            {/* Sistema 10-10-10 */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                  <Percent className="w-5 h-5 text-primary" />
                </div>
                <h2 className="text-2xl font-bold m-0">El Sistema 10-10-10: Ventaja Competitiva Regional</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Paraguay ofrece uno de los sistemas tributarios más simples y atractivos de América Latina, con tasas uniformes del 10% que contrastan con la complejidad de sus vecinos:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                <div className="bg-accent/30 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10%</div>
                  <div className="text-sm font-semibold">IVA</div>
                  <div className="text-xs text-muted-foreground mt-1">vs 21% Argentina, 17-25% Brasil</div>
                </div>
                <div className="bg-accent/30 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10%</div>
                  <div className="text-sm font-semibold">Renta Empresarial</div>
                  <div className="text-xs text-muted-foreground mt-1">vs 35% Argentina, 34% Brasil</div>
                </div>
                <div className="bg-accent/30 rounded-xl p-5 text-center">
                  <div className="text-3xl font-bold text-primary mb-1">10%</div>
                  <div className="text-sm font-semibold">Renta Personal</div>
                  <div className="text-xs text-muted-foreground mt-1">vs 35% Argentina, 27,5% Brasil</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-0">
                Para el inversor inmobiliario, esto significa que una mayor proporción de la renta bruta se traduce en utilidad neta, acelerando los tiempos de retorno de la inversión (ROI).
              </p>
            </div>

            {/* Apertura al capital extranjero */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-green-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">Apertura Total al Capital Extranjero</h2>
            </div>
            <p className="text-muted-foreground mb-4">
              Una de las mayores fortalezas de Paraguay es que <strong>no existen restricciones</strong> para que ciudadanos extranjeros compren propiedades urbanas. El título de propiedad se inscribe directamente a nombre del comprador sin necesidad de fideicomisos o intermediarios nacionales.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <div className="bg-card border border-border rounded-xl p-5">
                <FileCheck className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-semibold mb-2">Requisitos Mínimos</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Pasaporte vigente apostillado</li>
                  <li>✓ Acreditación de licitud de fondos</li>
                  <li>✓ Sin necesidad de residencia previa</li>
                </ul>
              </div>
              <div className="bg-card border border-border rounded-xl p-5">
                <DollarSign className="w-6 h-6 text-green-500 mb-3" />
                <h4 className="font-semibold mb-2">Libertad Cambiaria Total</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>✓ Transferencia de fondos internacionales</li>
                  <li>✓ Repatriación de utilidades sin restricciones</li>
                  <li>✓ Sin autorizaciones del banco central</li>
                </ul>
              </div>
            </div>

            {/* Impuestos inmobiliarios */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center">
                <Scale className="w-5 h-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold m-0">Impuestos Inmobiliarios: Optimización Fiscal</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              El tratamiento fiscal de las rentas inmobiliarias en Paraguay es excepcionalmente favorable:
            </p>

            <div className="bg-card border border-border rounded-2xl p-6 mb-6">
              <h3 className="text-lg font-bold mb-4">Impuesto sobre Alquileres (IRP)</h3>
              <div className="flex items-center gap-4 mb-3">
                <div className="text-3xl font-bold text-primary">10%</div>
                <div className="text-muted-foreground">sobre el ingreso <strong>neto</strong> (después de deducir mantenimiento, seguro y administración)</div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary/5 to-green-500/5 border border-border rounded-2xl p-6 mb-8">
              <h3 className="text-lg font-bold mb-4">Impuesto sobre Ganancia de Capital al Vender</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-card rounded-xl p-4 text-center">
                  <div className="text-sm text-muted-foreground mb-1">No Residente</div>
                  <div className="text-3xl font-bold text-muted-foreground">10%</div>
                  <div className="text-xs text-muted-foreground">sobre la plusvalía</div>
                </div>
                <div className="bg-card rounded-xl p-4 text-center border-2 border-primary/30">
                  <div className="text-sm text-primary font-semibold mb-1">Residente ✨</div>
                  <div className="text-3xl font-bold text-primary">2,4%</div>
                  <div className="text-xs text-muted-foreground">sobre el valor total de venta</div>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-4 mb-0">
                Obtener la residencia permanente demora entre <strong>2 y 4 meses</strong>, lo que representa una optimización fiscal masiva para estrategias de fix-and-flip o inversiones patrimoniales de largo plazo.
              </p>
            </div>

            {/* Ley 60/90 */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Building2 className="w-5 h-5 text-blue-500" />
              </div>
              <h2 className="text-2xl font-bold m-0">Ley 60/90: Récord de Inversiones</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              La Ley 60/90 ofrece <strong>exoneraciones fiscales masivas</strong> para proyectos que impliquen importación de bienes de capital y tecnología. En 2025, las inversiones bajo este régimen alcanzaron un <strong>récord histórico de USD 650 millones</strong> (incremento del 52% respecto al año anterior).
            </p>
            <p className="text-muted-foreground mb-8">
              Este flujo de capital no solo impulsa el sector industrial, sino que genera una demanda inducida de infraestructura residencial y corporativa de alto nivel — directamente beneficiando al mercado inmobiliario.
            </p>

            {/* Che Róga Porã */}
            <div className="bg-card border border-border rounded-2xl p-6 sm:p-8 mb-10">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-green-500/10 rounded-xl flex items-center justify-center">
                  <Home className="w-5 h-5 text-green-500" />
                </div>
                <h2 className="text-2xl font-bold m-0">Programa Che Róga Porã: Oportunidad para Desarrolladores</h2>
              </div>
              <p className="text-muted-foreground mb-6">
                Este esquema público-privado permite a familias con ingresos de 1 a 6 salarios mínimos acceder a su primera vivienda. Para el desarrollador e inversor, abre la puerta a <strong>proyectos de escala masiva</strong> en ciudades dormitorio.
              </p>
              <div className="overflow-x-auto mb-4">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 px-4 font-semibold">Modalidad</th>
                      <th className="text-center py-3 px-4 font-semibold">Monto Máximo</th>
                      <th className="text-center py-3 px-4 font-semibold">Plazo</th>
                      <th className="text-center py-3 px-4 font-semibold">Tasa</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-border/50">
                      <td className="py-3 px-4">Asunción</td>
                      <td className="text-center py-3 px-4">USD 100.000</td>
                      <td className="text-center py-3 px-4">Hasta 30 años</td>
                      <td className="text-center py-3 px-4 text-primary font-semibold">6,5% Fija</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4">Resto del País</td>
                      <td className="text-center py-3 px-4">USD 84.000</td>
                      <td className="text-center py-3 px-4">Hasta 30 años</td>
                      <td className="text-center py-3 px-4 text-primary font-semibold">6,5% Fija</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-muted-foreground mb-0">
                Los créditos, garantizados por la AFD, aseguran el pago al constructor según avance de obra, reduciendo el riesgo financiero del proyecto.
              </p>
            </div>

            {/* CTA */}
            <div className="text-center bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mb-8">
              <h3 className="text-2xl font-bold mb-3">¿Quieres conocer más sobre el mercado inmobiliario?</h3>
              <p className="text-muted-foreground mb-6">
                Explora nuestro análisis por ciudad o consulta la guía fiscal completa de Paraguay.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/blog/inversion-inmobiliaria-paraguay-asuncion-ciudad-del-este-encarnacion" className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Análisis por Ciudad
                </Link>
                <Link to="/taxation" className="px-6 py-3 bg-card border border-border rounded-lg font-semibold hover:bg-accent transition-colors">
                  Guía Fiscal
                </Link>
              </div>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default MarcoFiscalInversionPage;
