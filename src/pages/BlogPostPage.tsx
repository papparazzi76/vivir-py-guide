import { useParams } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import TaxationBlogPost from './blog/TaxationBlogPost';
import ApostillarDocumentosPage from './blog/ApostillarDocumentosPage';
import VillaMorraVsCarmelitasPage from './blog/VillaMorraVsCarmelitasPage';
import CostOfLivingPage from './blog/CostOfLivingPage';
import InversionInmobiliariaPage from './blog/InversionInmobiliariaPage';
import MarcoFiscalInversionPage from './blog/MarcoFiscalInversionPage';

const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  
  const post = blogPosts.find(p => p.id === slug);

  if (!post) {
    return null;
  }

  switch (slug) {
    case 'inversion-inmobiliaria-paraguay-asuncion-ciudad-del-este-encarnacion':
      return <InversionInmobiliariaPage />;
    case 'marco-legal-fiscal-inversion-inmobiliaria-paraguay':
      return <MarcoFiscalInversionPage />;
    case 'costo-vida-paraguay-2025-presupuesto-mensual':
      return <CostOfLivingPage />;
    case 'impuestos-paraguay-sistema-territorial':
      return <TaxationBlogPost />;
    case 'apostillar-documentos-paraguay':
      return <ApostillarDocumentosPage />;
    case 'villa-morra-vs-carmelitas-barrios-asuncion':
      return <VillaMorraVsCarmelitasPage />;
    default:
      return null;
  }
};

export default BlogPostPage;
