import { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import { Header } from './Header';
import { Footer } from './Footer';
import { Chatbot } from './Chatbot';

interface LayoutProps {
  children: ReactNode;
  title: string;
  description: string;
  canonical?: string;
  noHeaderPadding?: boolean;
}

export const Layout = ({ children, title, description, canonical, noHeaderPadding = false }: LayoutProps) => {
  const fullTitle = `${title} | Living Paraguay`;
  const baseUrl = 'https://livingparaguay.com'; // Actualizar con tu dominio real

  return (
    <>
      <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonical || `${baseUrl}${window.location.pathname}`} />
        
        {/* Open Graph */}
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={canonical || `${baseUrl}${window.location.pathname}`} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={fullTitle} />
        <meta name="twitter:description" content={description} />
        
        {/* Language */}
        <html lang="es" />
      </Helmet>
      
      <div className="min-h-screen">
        <Header />
        <main className={noHeaderPadding ? '' : 'pt-16 sm:pt-20'}>
          {children}
        </main>
        <Footer />
        <Chatbot />
      </div>
    </>
  );
};
