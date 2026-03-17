import { useState } from 'react';
import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { SCHOOLS } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const SchoolSection = () => {
  const { t } = useLanguage();
  const [filterCity, setFilterCity] = useState('all');
  const [filterType, setFilterType] = useState('all');

  const cities = [...new Set(SCHOOLS.map((s) => s.city))];
  const filteredSchools = SCHOOLS.filter((s) => {
    if (filterCity !== 'all' && s.city !== filterCity) return false;
    if (filterType !== 'all' && s.type !== filterType) return false;
    return true;
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.schools.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            {t.schools.subtitle}
          </p>
        </AnimatedDiv>

        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <Select value={filterCity} onValueChange={setFilterCity}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder={t.schools.filterCity} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">{t.schools.filterAllCities}</SelectItem>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>{city}</SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Select value={filterType} onValueChange={setFilterType}>
            <SelectTrigger className="w-[180px] bg-background">
              <SelectValue placeholder="Tipo" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Todos</SelectItem>
              <SelectItem value="Público">Público</SelectItem>
              <SelectItem value="Privado">Privado</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredSchools.map((school, idx) => (
            <AnimatedDiv key={school.id} delay={idx * 50}>
              <Card className="overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative">
                  <img
                    src={school.image}
                    alt={school.name}
                    className="w-full h-48 object-cover"
                  />
                  <Badge
                    className="absolute top-3 right-3"
                    variant={school.type === 'Público' ? 'default' : 'secondary'}
                  >
                    {school.type}
                  </Badge>
                </div>
                <CardContent className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-lg font-bold mb-1">{school.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="location" size={16} className="mr-2 flex-shrink-0" />
                    <span className="truncate">{school.location}, {school.city}</span>
                  </div>
                  <p className="text-sm text-foreground mb-4 flex-1">
                    {school.description}
                  </p>

                  {/* Specialties */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1.5">Especialidades</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {school.specialties.slice(0, 3).map((s) => (
                        <Badge key={s} variant="outline" className="text-xs">{s}</Badge>
                      ))}
                      {school.specialties.length > 3 && (
                        <Badge variant="outline" className="text-xs">+{school.specialties.length - 3}</Badge>
                      )}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="mb-3">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1.5">{t.schools.languages}</h4>
                    <div className="flex flex-wrap gap-1.5">
                      {school.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">{lang}</Badge>
                      ))}
                    </div>
                  </div>

                  {/* Costs */}
                  <div className="mt-auto pt-3 border-t border-border">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-1">Costos</h4>
                    <p className="text-sm font-medium text-primary">{school.costs}</p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {filteredSchools.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No se encontraron colegios con los filtros seleccionados.
          </p>
        )}
      </div>
    </section>
  );
};
