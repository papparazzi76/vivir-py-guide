import { Layout } from '../components/Layout';
import { Link } from 'react-router-dom';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { AnimatedDiv } from '../components/AnimatedDiv';

const BlogPage = () => {
  const posts = [
    {
      id: 'impuestos-paraguay-sistema-territorial',
      title: 'Impuestos en Paraguay: Guía completa del sistema territorial',
      excerpt: 'Descubre cómo funciona el sistema fiscal territorial de Paraguay y por qué es uno de los más atractivos para expatriados e inversores internacionales.',
      date: '2025-11-20',
      readTime: '15 min',
      category: 'Fiscalidad',
      image: '/placeholder.svg',
    },
  ];

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
            {posts.map((post, idx) => (
              <AnimatedDiv key={post.id} delay={idx * 100}>
                <Link to={`/blog/${post.id}`} className="group block">
                  <article className="bg-card rounded-xl overflow-hidden shadow-lg hover-lift h-full">
                    <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/10 relative overflow-hidden">
                      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyMTMsNDMsMzAsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-50"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-6xl font-bold text-primary/30">₲</span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-semibold">
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
