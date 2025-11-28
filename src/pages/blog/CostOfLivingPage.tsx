import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, Home, ShoppingCart, Car, Zap, GraduationCap, Heart, Utensils, Coffee } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogCostOfLivingImage from '@/assets/blog-cost-of-living.webp';

const CostOfLivingPage = () => {
  const post = blogPosts.find(p => p.id === 'costo-vida-paraguay-2025-presupuesto-mensual')!;

  const cityData = [
    {
      city: 'Asunción',
      description: 'Capital y ciudad más cosmopolita',
      costs: {
        alquiler1bed: '2.500.000 - 4.000.000',
        alquiler3bed: '4.500.000 - 8.000.000',
        comida: '1.800.000 - 2.500.000',
        transporte: '400.000 - 600.000',
        servicios: '350.000 - 500.000',
        entretenimiento: '600.000 - 1.000.000',
        total: '6.150.000 - 9.600.000'
      }
    },
    {
      city: 'Ciudad del Este',
      description: 'Hub comercial fronterizo',
      costs: {
        alquiler1bed: '1.800.000 - 3.000.000',
        alquiler3bed: '3.500.000 - 6.000.000',
        comida: '1.500.000 - 2.000.000',
        transporte: '300.000 - 450.000',
        servicios: '300.000 - 450.000',
        entretenimiento: '400.000 - 700.000',
        total: '4.800.000 - 7.600.000'
      }
    },
    {
      city: 'Encarnación',
      description: 'Ciudad costera más económica',
      costs: {
        alquiler1bed: '1.500.000 - 2.500.000',
        alquiler3bed: '2.800.000 - 4.500.000',
        comida: '1.300.000 - 1.800.000',
        transporte: '250.000 - 400.000',
        servicios: '280.000 - 400.000',
        entretenimiento: '350.000 - 600.000',
        total: '4.180.000 - 6.700.000'
      }
    }
  ];

  const detailedExpenses = [
    {
      icon: <Home className="w-6 h-6" />,
      category: 'Vivienda',
      items: [
        { item: 'Alquiler departamento 1 habitación (centro)', range: '₲2.5M - ₲4M' },
        { item: 'Alquiler departamento 3 habitaciones (centro)', range: '₲4.5M - ₲8M' },
        { item: 'Alquiler casa suburbana', range: '₲3M - ₲6M' },
        { item: 'Servicios (agua, luz, gas, internet)', range: '₲350K - ₲500K' }
      ]
    },
    {
      icon: <ShoppingCart className="w-6 h-6" />,
      category: 'Alimentación',
      items: [
        { item: 'Supermercado mensual (familia 4 personas)', range: '₲1.8M - ₲2.5M' },
        { item: 'Carne (1kg)', range: '₲35K - ₲60K' },
        { item: 'Frutas y verduras (semanal)', range: '₲80K - ₲150K' },
        { item: 'Pan (unidad)', range: '₲3K - ₲5K' }
      ]
    },
    {
      icon: <Utensils className="w-6 h-6" />,
      category: 'Restaurantes',
      items: [
        { item: 'Comida en restaurante económico', range: '₲30K - ₲50K' },
        { item: 'Restaurante medio para 2 personas', range: '₲150K - ₲300K' },
        { item: 'Café en cafetería', range: '₲8K - ₲15K' },
        { item: 'Cerveza local (500ml)', range: '₲8K - ₲12K' }
      ]
    },
    {
      icon: <Car className="w-6 h-6" />,
      category: 'Transporte',
      items: [
        { item: 'Gasolina (litro)', range: '₲6K - ₲7K' },
        { item: 'Taxi inicio (tarifa base)', range: '₲5K - ₲8K' },
        { item: 'Uber promedio (5km)', range: '₲15K - ₲25K' },
        { item: 'Bus urbano', range: '₲2.5K - ₲3K' }
      ]
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      category: 'Educación',
      items: [
        { item: 'Colegio internacional (mensual)', range: '₲2M - ₲5M' },
        { item: 'Colegio privado tradicional', range: '₲800K - ₲2M' },
        { item: 'Universidad privada (semestre)', range: '₲3M - ₲8M' },
        { item: 'Clases particulares inglés (hora)', range: '₲40K - ₲80K' }
      ]
    },
    {
      icon: <Heart className="w-6 h-6" />,
      category: 'Salud',
      items: [
        { item: 'Seguro médico privado (mensual)', range: '₲300K - ₲800K' },
        { item: 'Consulta médico general', range: '₲150K - ₲300K' },
        { item: 'Consulta especialista', range: '₲250K - ₲500K' },
        { item: 'Medicamentos básicos (gripe)', range: '₲30K - ₲80K' }
      ]
    }
  ];

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

        {/* FAQ Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta vivir en Asunción, Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "El costo mensual promedio para vivir en Asunción varía entre ₲6.150.000 y ₲9.600.000, incluyendo alquiler, alimentación, transporte y servicios básicos. Este presupuesto es para una familia de 4 personas con un estilo de vida medio."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuál es la ciudad más económica para vivir en Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Encarnación es la ciudad más económica de las tres principales, con un costo mensual promedio de ₲4.180.000 a ₲6.700.000. Le sigue Ciudad del Este (₲4.800.000 - ₲7.600.000) y luego Asunción (₲6.150.000 - ₲9.600.000)."
                }
              },
              {
                "@type": "Question",
                "name": "¿Cuánto cuesta alquilar un departamento en Paraguay?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "En Asunción, un departamento de 1 habitación en el centro cuesta entre ₲2.500.000 y ₲4.000.000 mensuales. En Ciudad del Este, el rango es ₲1.800.000 - ₲3.000.000, y en Encarnación, ₲1.500.000 - ₲2.500.000."
                }
              }
            ]
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
              <span className="px-3 py-1 bg-purple-500/10 text-purple-600 dark:text-purple-400 rounded-full font-semibold text-sm">
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
                src={blogCostOfLivingImage} 
                alt="Costo de vida en Paraguay 2025 - presupuesto mensual detallado" 
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
            <div className="mb-12">
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                Paraguay se ha consolidado como uno de los destinos más atractivos para expatriados y nómadas digitales de América Latina, gracias a su <strong>bajo costo de vida combinado con buena calidad de servicios</strong>. En esta guía completa, analizaremos el presupuesto mensual detallado para vivir en las tres principales ciudades del país.
              </p>
              <div className="bg-primary/5 border-l-4 border-primary p-6 rounded-r-lg my-8">
                <p className="text-sm font-semibold text-primary mb-2">💡 RESUMEN EJECUTIVO</p>
                <p className="text-sm">
                  Una familia de 4 personas puede vivir cómodamente en Asunción con <strong>₲6.150.000 - ₲9.600.000 mensuales</strong> (aproximadamente USD $850 - $1,350). En ciudades más pequeñas, el presupuesto puede reducirse hasta un 30%.
                </p>
              </div>
            </div>

            {/* City Comparison */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Comparativa por Ciudad</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {cityData.map((data, idx) => (
                  <AnimatedDiv key={data.city} delay={300 + idx * 100}>
                    <div className="bg-card border border-border rounded-xl p-6 hover-lift">
                      <h3 className="text-2xl font-bold mb-2">{data.city}</h3>
                      <p className="text-sm text-muted-foreground mb-6">{data.description}</p>
                      
                      <div className="space-y-3 text-sm">
                        <div>
                          <p className="text-muted-foreground">Alquiler 1 habitación</p>
                          <p className="font-semibold">{data.costs.alquiler1bed}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Alimentación</p>
                          <p className="font-semibold">{data.costs.comida}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Transporte</p>
                          <p className="font-semibold">{data.costs.transporte}</p>
                        </div>
                        <div>
                          <p className="text-muted-foreground">Servicios</p>
                          <p className="font-semibold">{data.costs.servicios}</p>
                        </div>
                        <div className="pt-3 border-t border-border">
                          <p className="text-muted-foreground">Total Mensual</p>
                          <p className="text-lg font-bold text-primary">{data.costs.total}</p>
                        </div>
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </div>

            {/* Detailed Expenses */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold mb-8">Desglose Detallado de Gastos</h2>
              <p className="text-lg text-muted-foreground mb-8">
                Estos son los costos promedio en Asunción para 2025. Los precios están en Guaraníes (₲) y pueden variar según el barrio y estilo de vida.
              </p>
              
              <div className="space-y-8">
                {detailedExpenses.map((category, idx) => (
                  <AnimatedDiv key={category.category} delay={400 + idx * 50}>
                    <div className="bg-card border border-border rounded-xl p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 bg-primary/10 text-primary rounded-lg">
                          {category.icon}
                        </div>
                        <h3 className="text-xl font-bold">{category.category}</h3>
                      </div>
                      <div className="space-y-3">
                        {category.items.map((item, itemIdx) => (
                          <div key={itemIdx} className="flex justify-between items-center py-2 border-b border-border/50 last:border-0">
                            <span className="text-sm text-muted-foreground">{item.item}</span>
                            <span className="font-semibold">{item.range}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AnimatedDiv>
                ))}
              </div>
            </div>

            {/* Tips Section */}
            <div className="mb-16">
              <AnimatedDiv delay={600}>
                <h2 className="text-3xl font-bold mb-6">Consejos para Ahorrar</h2>
                <div className="bg-green-500/5 border border-green-500/20 rounded-xl p-6 space-y-4">
                  <div className="flex gap-3">
                    <Coffee className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Compra en mercados locales</h4>
                      <p className="text-sm text-muted-foreground">
                        Los mercados de abasto tienen precios 30-50% más bajos que supermercados para frutas y verduras frescas.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Home className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Considera barrios alternativos</h4>
                      <p className="text-sm text-muted-foreground">
                        Zonas como San Lorenzo o Fernando de la Mora ofrecen alquileres 40% más económicos con buena conectividad.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Car className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold mb-1">Usa transporte público</h4>
                      <p className="text-sm text-muted-foreground">
                        El bus urbano cuesta solo ₲2.500 por viaje. Uber y taxis son muy económicos comparados con otros países.
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedDiv>
            </div>

            {/* Conclusion */}
            <div className="mb-12">
              <AnimatedDiv delay={700}>
                <h2 className="text-3xl font-bold mb-6">Conclusión</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Paraguay ofrece una excelente relación calidad-precio para vivir en América Latina. Con un presupuesto mensual de <strong>USD $850-1,350</strong>, una familia de 4 personas puede disfrutar de un estilo de vida cómodo con servicios de calidad.
                </p>
                <p className="text-lg text-muted-foreground">
                  El país combina costos bajos con buena infraestructura, seguridad razonable y un sistema fiscal territorial muy atractivo. Para expatriados y nómadas digitales, representa una opción cada vez más popular en la región.
                </p>
              </AnimatedDiv>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-8 text-center">
              <AnimatedDiv delay={800}>
                <h3 className="text-2xl font-bold mb-4">¿Listo para mudarte a Paraguay?</h3>
                <p className="text-muted-foreground mb-6">
                  Explora nuestras guías completas sobre residencia, impuestos y búsqueda de vivienda
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/permits" 
                    className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-hover transition-colors"
                  >
                    Ver Guía de Residencia
                  </Link>
                  <Link 
                    to="/housing" 
                    className="inline-flex items-center justify-center gap-2 bg-card border border-border px-6 py-3 rounded-lg font-semibold hover:bg-accent transition-colors"
                  >
                    Buscar Vivienda
                  </Link>
                </div>
              </AnimatedDiv>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default CostOfLivingPage;
