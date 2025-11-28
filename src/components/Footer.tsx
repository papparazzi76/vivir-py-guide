import { Link } from 'react-router-dom';
import { Icon } from './Icon';
import { useLanguage } from '../contexts/LanguageContext';
import logo from '@/assets/logo.png';

export const Footer = () => {
  const { t } = useLanguage();
  
  const navLinks = [
    { path: '/', label: t.nav.home },
    { path: '/permits', label: t.nav.permits },
    { path: '/housing', label: t.nav.housing },
    { path: '/schools', label: t.nav.schools },
    { path: '/neighborhoods', label: t.nav.neighborhoods },
  ];

  const socialLinks = {
    facebook: 'https://facebook.com',
    instagram: 'https://instagram.com',
    youtube: 'https://youtube.com',
  };

  return (
    <footer className="bg-py-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo y Descripción */}
          <div>
            <img src={logo} alt="Living Paraguay" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm">
              {t.footer.company}
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.nav.home}</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Legales */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.legal}</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.legalPrivacy}
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.legalTerms}
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  {t.footer.legalCookies}
                </button>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold text-lg mb-4">{t.footer.followUs}</h4>
            <div className="flex space-x-4">
              <a
                href={socialLinks.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="facebook" size={20} />
              </a>
              <a
                href={socialLinks.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="instagram" size={20} />
              </a>
              <a
                href={socialLinks.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="youtube" size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
};
