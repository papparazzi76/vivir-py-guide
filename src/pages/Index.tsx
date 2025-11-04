import { useState } from 'react';
import { Page } from '../types';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';
import { Chatbot } from '../components/Chatbot';
import { HeroSection } from '../components/sections/HeroSection';
import { PermitSection } from '../components/sections/PermitSection';
import { HousingSearch } from '../components/sections/HousingSearch';

const Index = () => {
  const [activePage, setActivePage] = useState<Page>('home');

  const renderPage = () => {
    switch (activePage) {
      case 'home':
        return <HeroSection onNavigate={setActivePage} />;
      case 'permits':
        return <PermitSection />;
      case 'housing':
        return <HousingSearch />;
      default:
        return (
          <section className="min-h-screen flex items-center justify-center py-20">
            <div className="text-center">
              <h2 className="text-4xl font-bold mb-4">Sección en Construcción</h2>
              <p className="text-xl text-muted-foreground">Esta sección estará disponible pronto.</p>
              <button
                onClick={() => setActivePage('home')}
                className="mt-8 px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover"
              >
                Volver al Inicio
              </button>
            </div>
          </section>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header activePage={activePage} onNavigate={setActivePage} />
      <main className="pt-16 sm:pt-20">{renderPage()}</main>
      <Footer onNavigate={setActivePage} />
      <Chatbot />
    </div>
  );
};

export default Index;
