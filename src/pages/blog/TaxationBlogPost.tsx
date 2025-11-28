// This file contains the original taxation blog post content
// Extracted from BlogPostPage.tsx for better organization
import { Link } from 'react-router-dom';
import { Layout } from '../../components/Layout';
import { Calendar, Clock, ArrowLeft, Share2, ArrowRight } from 'lucide-react';
import { AnimatedDiv } from '../../components/AnimatedDiv';
import { Helmet } from 'react-helmet-async';
import { blogPosts } from '../../data/blogPosts';
import blogTaxationImage from '@/assets/blog-taxation.webp';

const TaxationBlogPost = () => {
  const post = blogPosts.find(p => p.id === 'impuestos-paraguay-sistema-territorial')!;

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
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src={blogTaxationImage} 
                alt="Sistema fiscal territorial de Paraguay - calculadora de impuestos" 
                className="w-full h-full object-cover"
                loading="eager"
              />
            </div>
          </AnimatedDiv>
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
          <AnimatedDiv delay={200}>
            <p className="text-xl text-center text-muted-foreground mb-8">
              El contenido completo sobre impuestos está disponible en la sección dedicada con la calculadora fiscal interactiva.
            </p>
            <div className="text-center space-y-4">
              <Link 
                to="/taxation" 
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold hover:bg-primary-hover transition-colors text-lg"
              >
                Ver Guía Completa de Impuestos
                <ArrowRight className="w-5 h-5" />
              </Link>
              <p className="text-sm text-muted-foreground">
                Incluye: Sistema territorial explicado, calculadora IRP, comparativa internacional y estrategias de optimización fiscal
              </p>
            </div>
          </AnimatedDiv>
        </div>
      </article>
    </Layout>
  );
};

export default TaxationBlogPost;
