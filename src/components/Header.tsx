import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Icon } from './Icon';
import { LanguageSelector } from './LanguageSelector';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Header = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  
  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/permits', label: t.nav.permits },
    { path: '/housing', label: t.nav.housing },
    { path: '/schools', label: t.nav.schools },
    { path: '/neighborhoods', label: t.nav.neighborhoods },
    { path: '/taxation', label: t.nav.taxation },
    { path: '/social-security', label: t.nav.socialSecurity },
    { path: '/blog', label: 'Blog' },
    { path: '/faq', label: t.nav.faq },
    { path: '/contact', label: t.nav.contact },
  ];

  const isActivePath = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'backdrop-blur-glass shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              to="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
            >
              <img src={logo} alt="Living Paraguay" className="h-10 sm:h-12 w-auto" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative font-medium transition-colors ${
                    isActivePath(link.path)
                      ? 'text-primary'
                      : 'text-foreground hover:text-primary'
                  }`}
                >
                  {link.label}
                  {isActivePath(link.path) && (
                    <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"></span>
                  )}
                </Link>
              ))}
            </nav>

            {/* Language Selector & CTA - Desktop */}
            <div className="hidden lg:flex items-center gap-4">
              <LanguageSelector />
              <Link
                to="/contact"
                className="px-6 py-2.5 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors shadow-md"
              >
                {t.nav.startProcess}
              </Link>
            </div>

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
              <div className="pb-4 border-b border-border">
                <LanguageSelector />
              </div>
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleMobileMenuClose}
                  className={`text-left px-4 py-3 rounded-lg font-medium transition-colors ${
                    isActivePath(link.path)
                      ? 'bg-primary text-primary-foreground'
                      : 'text-foreground hover:bg-muted'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={handleMobileMenuClose}
                className="mt-4 px-4 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary-hover transition-colors text-center block"
              >
                {t.nav.startProcess}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </>
  );
};
