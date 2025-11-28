import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight, FileText, Stamp, MapPin, Wallet } from 'lucide-react';
import { AnimatedDiv } from '../components/AnimatedDiv';
import { blogPosts } from '../data/blogPosts';
import blogTaxationImage from '@/assets/blog-taxation.webp';
import blogApostilleImage from '@/assets/blog-apostille.webp';
import blogNeighborhoodsImage from '@/assets/blog-neighborhoods.webp';
import blogCostOfLivingImage from '@/assets/blog-cost-of-living.webp';

const BlogPage = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Fiscalidad':
        return <FileText className="w-5 h-5" />;
      case 'Trámites':
        return <Stamp className="w-5 h-5" />;
      case 'Vivienda':
        return <MapPin className="w-5 h-5" />;
      case 'Estilo de Vida':
        return <Wallet className="w-5 h-5" />;
      default:
        return <FileText className="w-5 h-5" />;
    }
  };

  const getCategoryGradient = (category: string) => {
    switch (category) {
      case 'Fiscalidad':
        return 'from-primary/20 to-primary/10';
      case 'Trámites':
        return 'from-blue-500/20 to-blue-500/10';
      case 'Vivienda':
        return 'from-green-500/20 to-green-500/10';
      case 'Estilo de Vida':
        return 'from-purple-500/20 to-purple-500/10';
      default:
        return 'from-primary/20 to-primary/10';
    }
  };

  const getBlogImage = (postId: string) => {
    switch (postId) {
      case 'costo-vida-paraguay-2025-presupuesto-mensual':
        return blogCostOfLivingImage;
      case 'impuestos-paraguay-sistema-territorial':
        return blogTaxationImage;
      case 'apostillar-documentos-paraguay':
        return blogApostilleImage;
      case 'villa-morra-vs-carmelitas-barrios-asuncion':
        return blogNeighborhoodsImage;
      default:
        return blogTaxationImage;
    }
  };

  return (
    <Layout
      title="Blog - Guías y Recursos"
      description="Artículos actualizados sobre vivir, trabajar e invertir en Paraguay. Guías completas sobre residencia, impuestos, vivienda y más."
      canonical="https://livingparaguay.com/blog"
    >
      <section className="py-16 sm:py-20 bg-gradient-to-b from-py-blue-dark/5 to-transparent">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedDiv className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">
              Blog de Living Paraguay
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto">
              Guías detalladas, consejos prácticos y toda la información que necesitas para vivir e invertir en Paraguay
            </p>
          </AnimatedDiv>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {blogPosts.map((post, idx) => (
              <AnimatedDiv key={post.id} delay={idx * 100}>
                <Link to={`/blog/${post.id}`} className="group block">
                  <article className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift h-full">
                    <div className="aspect-video relative overflow-hidden">
                      <img 
                        src={getBlogImage(post.id)} 
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold flex items-center gap-1">
                          {getCategoryIcon(post.category)}
                          {post.category}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(post.date).toLocaleDateString('es-ES', { 
                            year: 'numeric', 
                            month: 'long', 
                            day: 'numeric' 
                          })}
                        </span>
                      </div>
                      <h2 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                        {post.title}
                      </h2>
                      <p className="text-muted-foreground mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-sm text-muted-foreground">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                        <span className="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                          Leer más
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </article>
                </Link>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default BlogPage;
