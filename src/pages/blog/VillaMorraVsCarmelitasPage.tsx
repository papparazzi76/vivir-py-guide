import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight, MapPin, DollarSign, Shield, ShoppingBag, School, Utensils } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';

const VillaMorraVsCarmelitasPage = () => {
  const post = blogPosts.find(p => p.id === 'villa-morra-vs-carmelitas-barrios-asuncion')!;

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
              <span className="px-3 py-1 bg-green-500/10 text-green-600 dark:text-green-400 rounded-full font-semibold text-sm">
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
            <div className="aspect-video bg-gradient-to-br from-green-500/20 to-green-500/10 rounded-2xl overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTMsNDMsMzAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-9xl font-bold opacity-20">🏘️</span>
              </div>
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200} className="prose prose-lg max-w-none">
            <p className="text-xl text-center text-muted-foreground mb-8">
              Comparativa completa entre los dos barrios más exclusivos de Asunción.
            </p>
            <div className="text-center">
              <Link to="/neighborhoods" className="text-primary hover:underline text-lg font-semibold">
                → Explorar todos los barrios de Asunción
              </Link>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default VillaMorraVsCarmelitasPage;
