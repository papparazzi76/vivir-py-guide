import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import TaxationBlogPost from './blog/TaxationBlogPost';
import ApostillarDocumentosPage from './blog/ApostillarDocumentosPage';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return null; // Or redirect to 404
  }

  // Route to specific blog post component based on slug
  if (slug === 'impuestos-paraguay-sistema-territorial') {
    return <TaxationBlogPost />;
  }

  if (slug === 'apostillar-documentos-paraguay') {
    return <ApostillarDocumentosPage />;
  }

  return null;
};

export default BlogPostPage;
