import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
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
      <Helmet>
        {/* Organization Schema for Knowledge Graph */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "Living Paraguay",
            "url": "https://livingparaguay.com",
            "logo": "https://livingparaguay.com/og-image.jpg",
            "description": "Guía completa para vivir, trabajar e invertir en Paraguay. Información sobre residencia, vivienda, impuestos, colegios y más.",
            "contactPoint": {
              "@type": "ContactPoint",
              "contactType": "Customer Service",
              "email": "info@livingparaguay.com",
              "availableLanguage": ["Spanish", "Portuguese"]
            },
            "sameAs": [
              "https://www.facebook.com/livingparaguay",
              "https://www.instagram.com/livingparaguay",
              "https://www.linkedin.com/company/livingparaguay"
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "PY",
              "addressLocality": "Asunción"
            }
          })}
        </script>
      </Helmet>
      <HeroSection onNavigate={handleNavigate} />
    </Layout>
  );
};

export default HomePage;
