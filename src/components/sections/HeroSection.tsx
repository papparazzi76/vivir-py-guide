import { useState, useEffect } from 'react';
import { Page } from '../../types';
import heroAsuncion from '@/assets/hero-asuncion.jpg';
import heroFamily from '@/assets/hero-family.jpg';
import heroHomes from '@/assets/hero-homes.jpg';

interface HeroSectionProps {
  onNavigate: (page: Page) => void;
}

const HERO_SLIDES = [
  {
    image: heroAsuncion,
    title: 'Tu Nueva Vida en Paraguay Comienza Aquí',
    subtitle: 'Guía completa para expatriados: residencia, vivienda, impuestos y más',
  },
  {
    image: heroFamily,
    title: 'Bienvenido a tu Hogar en Sudamérica',
    subtitle: 'Descubre por qué miles de expatriados eligen Paraguay',
  },
  {
    image: heroHomes,
    title: 'Encuentra tu Lugar Ideal',
    subtitle: 'Explora propiedades, colegios y barrios en todo Paraguay',
  },
];

export const HeroSection = ({ onNavigate }: HeroSectionProps) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Images with Transitions */}
      {HERO_SLIDES.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={`Hero ${index + 1}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-py-blue-dark/70 via-py-blue-dark/50 to-py-blue-dark/70"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h1 className="text-white text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
              {HERO_SLIDES[currentSlide].title}
            </h1>
            <p className="text-white/90 text-xl md:text-2xl mb-12 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              {HERO_SLIDES[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <button
                onClick={() => onNavigate('permits')}
                className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-bold text-lg hover:bg-primary-hover transition-all hover:shadow-glow-red hover:-translate-y-1"
              >
                Obtener Residencia
              </button>
              <button
                onClick={() => onNavigate('housing')}
                className="px-8 py-4 bg-white/10 text-white border-2 border-white rounded-lg font-bold text-lg hover:bg-white hover:text-py-blue-dark transition-all hover:-translate-y-1 backdrop-blur-sm"
              >
                Buscar Vivienda
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide
                ? 'bg-white w-8'
                : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>
    </section>
  );
};
