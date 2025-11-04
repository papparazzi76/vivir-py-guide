import { useState, useEffect } from 'react';
import { Page } from '../types';
import { NAV_LINKS } from '../constants';
import { Icon } from './Icon';
import logo from '@/assets/logo.png';

interface HeaderProps {
  activePage: Page;
  onNavigate: (page: Page) => void;
}

export const Header = ({ activePage, onNavigate }: HeaderProps) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (page: Page) => {
    onNavigate(page);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-glass shadow-md' : 'bg-white/90'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('home')}
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Living Paraguay" className="h-13 sm:h-13 w-auto" />
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative font-medium transition-colors ${
                    activePage === link.id
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  {activePage === link.id && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                  )}
                </button>
              ))}
            </nav>

            {/* CTA Button - Desktop */}
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden lg:block px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors shadow-md"
            >
              Iniciar Trámite
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            >
              <Icon name={isMobileMenuOpen ? 'close' : 'menu'} size={28} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
          <nav className="fixed top-20 right-0 bottom-0 w-64 bg-white shadow-xl p-6 overflow-y-auto">
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    activePage === link.id
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => handleNavClick('contact')}
                className="mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors text-center"
              >
                Iniciar Trámite
              </button>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
