import { useNavigate } from 'react-router-dom';
import { Layout } from '../components/Layout';
import { HeroSection } from '../components/sections/HeroSection';

const HomePage = () => {
  const navigate = useNavigate();

  const handleNavigate = (page: string) => {
    const routes: Record<string, string> = {
      'home': '/',
      'permits': '/permits',
      'housing': '/housing',
      'schools': '/schools',
      'neighborhoods': '/neighborhoods',
      'taxation': '/taxation',
      'social-security': '/social-security',
      'faq': '/faq',
      'contact': '/contact'
    };
    
    navigate(routes[page] || '/');
  };

  return (
    <Layout
      title="Guía Completa para Vivir e Invertir en Paraguay"
      description="Tu guía completa para vivir en Paraguay: residencia permanente, vivienda, sistema fiscal territorial, colegios internacionales y más. Información actualizada para expatriados y nómadas digitales."
      canonical="https://livingparaguay.com/"
      noHeaderPadding
    >
      <HeroSection onNavigate={handleNavigate} />
    </Layout>
  );
};

export default HomePage;
