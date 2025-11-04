import { Page } from '../types';
import { NAV_LINKS, SOCIAL_LINKS } from '../constants';
import { Icon } from './Icon';
import logo from '@/assets/logo.png';

interface FooterProps {
  onNavigate: (page: Page) => void;
}

export const Footer = ({ onNavigate }: FooterProps) => {
  return (
    <footer className="bg-py-blue-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Logo y Descripción */}
          <div>
            <img src={logo} alt="Living Paraguay" className="h-12 w-auto mb-4 brightness-0 invert" />
            <p className="text-gray-300 text-sm">
              Tu guía completa para establecerte en Paraguay. Información actualizada sobre residencia, impuestos y estilo de vida.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV_LINKS.slice(0, 5).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Enlaces Legales */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Política de Privacidad
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Términos y Condiciones
                </button>
              </li>
              <li>
                <button className="text-gray-300 hover:text-white transition-colors">
                  Aviso Legal
                </button>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              <a
                href={SOCIAL_LINKS.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="facebook" size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Icon name="instagram" size={20} />
              </a>
              <a
                href={SOCIAL_LINKS.youtube}
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
            © {new Date().getFullYear()} Living Paraguay. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
