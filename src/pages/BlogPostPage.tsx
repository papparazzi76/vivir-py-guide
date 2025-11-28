import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import TaxationBlogPost from './blog/TaxationBlogPost';
import ApostillarDocumentosPage from './blog/ApostillarDocumentosPage';
import VillaMorraVsCarmelitasPage from './blog/VillaMorraVsCarmelitasPage';
import CostOfLivingPage from './blog/CostOfLivingPage';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return null; // Or redirect to 404
  }

  // Route to specific blog post component based on slug
  if (slug === 'costo-vida-paraguay-2025-presupuesto-mensual') {
    return <CostOfLivingPage />;
  }

  if (slug === 'impuestos-paraguay-sistema-territorial') {
    return <TaxationBlogPost />;
  }

  if (slug === 'apostillar-documentos-paraguay') {
    return <ApostillarDocumentosPage />;
  }

  if (slug === 'villa-morra-vs-carmelitas-barrios-asuncion') {
    return <VillaMorraVsCarmelitasPage />;
  }

  return null;
};

export default BlogPostPage;
