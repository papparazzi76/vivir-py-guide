import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { NEIGHBORHOODS } from '../../constants';
import { Badge } from '@/components/ui/badge';

export const NeighborhoodSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Explora los Mejores Barrios
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Descubre dónde construir tu nueva vida en Paraguay.
          </p>
        </AnimatedDiv>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {NEIGHBORHOODS.map((neighborhood, idx) => (
            <AnimatedDiv key={neighborhood.id} delay={idx * 50}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift h-full flex flex-col">
                <img
                  src={neighborhood.image}
                  alt={neighborhood.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 sm:p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-bold mb-2">{neighborhood.name}</h3>
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Icon name="location" size={16} className="mr-2" />
                    {neighborhood.city}
                  </div>
                  <p className="text-sm text-foreground mb-4 flex-1">
                    {neighborhood.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="bg-primary/10 text-primary">{tag}</Badge>
                    ))}
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
