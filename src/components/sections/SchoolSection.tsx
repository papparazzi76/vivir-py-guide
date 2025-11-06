import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { SCHOOLS } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';

export const SchoolSection = () => {
  const { t } = useLanguage();
  
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {SCHOOLS.map((school, idx) => (
            <AnimatedDiv key={school.id} delay={idx * 50}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift h-full flex flex-col">
                <img
                  src={school.image}
                  alt={school.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{school.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="location" size={16} className="mr-2" />
                    {school.location}, {school.city}
                  </div>
                  <p className="text-sm text-foreground mb-4 flex-1">
                    {school.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">{t.schools.languages}</h4>
                    <div className="flex flex-wrap gap-2">
                      {school.languages.map((lang) => (
                        <Badge key={lang} variant="secondary">{lang}</Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-muted-foreground mb-2">{t.schools.levels}</h4>
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
