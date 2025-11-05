import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { SCHOOLS } from '../../constants';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '../../contexts/LanguageContext';
import { useState } from 'react';

export const SchoolSection = () => {
  const { t } = useLanguage();
  const [selectedCity, setSelectedCity] = useState<string>('all');

  const cities = ['all', ...new Set(SCHOOLS.map(s => s.city))];
  const filteredSchools = selectedCity === 'all' 
    ? SCHOOLS 
    : SCHOOLS.filter(s => s.city === selectedCity);

  const getCategoryBadge = (category?: 'elite' | 'traditional' | 'accessible') => {
    if (!category) return null;
    const colors = {
      elite: 'bg-py-red/10 text-py-red border-py-red/20',
      traditional: 'bg-py-blue/10 text-py-blue border-py-blue/20',
      accessible: 'bg-green-500/10 text-green-700 border-green-500/20',
    };
    return (
      <Badge variant="outline" className={colors[category]}>
        {t.schools.costLevels[category]}
      </Badge>
    );
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.schools.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground mb-6">
            {t.schools.subtitle}
          </p>

          {/* Educational Context */}
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="document" size={20} className="text-py-red" />
                {t.schools.methodologyTitle}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.schools.methodologyText}
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm text-left">
              <h3 className="font-semibold text-lg mb-2 flex items-center gap-2">
                <Icon name="document" size={20} className="text-py-blue" />
                {t.schools.selectionTitle}
              </h3>
              <p className="text-sm text-muted-foreground">
                {t.schools.selectionText}
              </p>
            </div>
          </div>
        </AnimatedDiv>

        {/* City Filter */}
        <div className="mb-8 flex justify-center">
          <select
            value={selectedCity}
            onChange={(e) => setSelectedCity(e.target.value)}
            className="px-4 py-2 border rounded-lg bg-white"
          >
            <option value="all">{t.schools.allCities}</option>
            {cities.filter(c => c !== 'all').map(city => (
              <option key={city} value={city}>{city}</option>
            ))}
          </select>
        </div>

        {/* Schools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSchools.map((school, idx) => (
            <AnimatedDiv key={school.id} delay={idx * 50}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift h-full flex flex-col">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <div className="mb-2">
                    {getCategoryBadge(school.category)}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="location" size={16} className="mr-2" />
                    {school.location}, {school.city}
                  </div>
                  
                  <p className="text-sm text-foreground mb-4 flex-1">
                    {school.description}
                  </p>
                  
                  {school.tuition && (
                    <div className="mb-4 p-3 bg-muted/50 rounded-lg">
                      <h4 className="text-xs font-semibold text-muted-foreground mb-1">
                        {t.schools.tuition}
                      </h4>
                      <p className="text-sm font-bold text-py-blue">{school.tuition}</p>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                      {t.schools.languages}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {school.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">
                      {t.schools.levels}
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {school.levels.map((level) => (
                        <Badge key={level} variant="outline">{level}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </section>
  );
};
