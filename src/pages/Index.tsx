import { useState } from 'react';
import { Page } from '../types';
import { useLanguage } from '../contexts/LanguageContext';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { HeroSection } from '../components/sections/HeroSection';
import { PermitSection } from '../components/sections/PermitSection';
import { HousingSearch } from '../components/sections/HousingSearch';
import { SchoolSection } from '../components/sections/SchoolSection';
import { NeighborhoodSection } from '../components/sections/NeighborhoodSection';
import { TaxationSection } from '../components/sections/TaxationSection';
import { SocialSecuritySection } from '../components/sections/SocialSecuritySection';
import { FaqSection } from '../components/sections/FaqSection';
import { ContactSection } from '../components/sections/ContactSection';

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('home');
  const { t } = useLanguage();

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HeroSection onNavigate={setActivePage} />;
      case 'permits':
        return <PermitSection />;
      case 'housing':
        return <HousingSearch />;
      // --- SECCIONES AÑADIDAS ---
      case 'schools':
        return <SchoolSection />;
      case 'neighborhoods':
        return <NeighborhoodSection />;
      case 'taxation':
        return <TaxationSection />;
      case 'social-security':
        return <SocialSecuritySection />;
      case 'faq':
        return <FaqSection />;
      case 'contact':
        return <ContactSection />;
      // --- FIN DE SECCIONES AÑADIDAS ---
      default:
        return (
          <section className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">{t.common.underConstruction}</h2>
              <p className="text-xl text-muted-foreground">{t.common.underConstructionText}</p>
              <button
                onClick={() => setActivePage('home')}
                className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover"
              >
                {t.common.backHome}
              </button>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header activePage={activePage} onNavigate={setActivePage} />
      {/* MODIFICADO: Se eliminó pt-16 sm:pt-20 de main para que el hero ocupe toda la pantalla */}
      <main>
        {/* Se aplica el padding solo si NO es la home */}
        <div className={activePage !== 'home' ? 'pt-16 sm:pt-20' : ''}>
          {renderPage()}
        </div>
      </main>
      <Footer onNavigate={setActivePage} />
      <Chatbot />
    </div>
  );
};

export default Index;
