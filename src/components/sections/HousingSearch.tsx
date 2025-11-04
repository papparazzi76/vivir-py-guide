import { useState } from 'react';
import { PROPERTIES } from '../../constants';
import { AnimatedDiv } from '../AnimatedDiv';

export const HousingSearch = () => {
  const [filters, setFilters] = useState({
    city: 'Todos',
    type: 'Todos',
    propertyType: 'Todos',
    maxPrice: 50000000,
  });

  const filteredProperties = PROPERTIES.filter(prop => {
    if (filters.city !== 'Todos' && prop.city !== filters.city) return false;
    if (filters.type !== 'Todos' && prop.type !== filters.type) return false;
    if (filters.propertyType !== 'Todos' && prop.propertyType !== filters.propertyType) return false;
    if (prop.price > filters.maxPrice) return false;
    return true;
  });

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">Buscar Vivienda</h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">Encuentra tu hogar ideal en Paraguay</p>
        </AnimatedDiv>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 mb-6 sm:mb-8 sticky top-20 sm:top-24 z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
            <select
              value={filters.city}
              onChange={(e) => setFilters({ ...filters, city: e.target.value })}
              className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option>Todos</option>
              <option>Asunción</option>
              <option>Luque</option>
              <option>Ciudad del Este</option>
            </select>
            <select
              value={filters.type}
              onChange={(e) => setFilters({ ...filters, type: e.target.value })}
              className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white"
            >
              <option>Todos</option>
              <option>Alquiler</option>
              <option>Venta</option>
            </select>
            <select
              value={filters.propertyType}
              onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}
              className="px-3 sm:px-4 py-2 text-sm sm:text-base border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary bg-white col-span-2 md:col-span-1"
            >
              <option>Todos</option>
              <option>Apartamento</option>
              <option>Casa</option>
            </select>
            <div className="col-span-2 md:col-span-1 flex items-center gap-2">
              <span className="text-xs sm:text-sm text-muted-foreground whitespace-nowrap">Hasta:</span>
              <input
                type="range"
                min="0"
                max="500000000"
                step="1000000"
                value={filters.maxPrice}
                onChange={(e) => setFilters({ ...filters, maxPrice: Number(e.target.value) })}
                className="flex-1"
              />
              <span className="text-xs sm:text-sm font-semibold whitespace-nowrap">
                ₲{(filters.maxPrice / 1000000).toFixed(0)}M
              </span>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {filteredProperties.map((property, idx) => (
            <AnimatedDiv key={property.id} delay={idx * 50}>
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover-lift">
                <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                      property.type === 'Alquiler' ? 'bg-secondary/10 text-secondary' : 'bg-primary/10 text-primary'
                    }`}>
                      {property.type}
                    </span>
                    <span className="text-lg sm:text-2xl font-bold text-primary">
                      ₲{(property.price / 1000000).toFixed(1)}M
                    </span>
                  </div>
                  <h3 className="text-base sm:text-xl font-bold mb-2 line-clamp-2">{property.title}</h3>
                  <p className="text-sm sm:text-base text-muted-foreground mb-3 sm:mb-4">{property.location}, {property.city}</p>
                  <div className="flex items-center gap-3 sm:gap-4 text-xs sm:text-sm">
                    <span>{property.area}m²</span>
                    {property.bedrooms && <span>{property.bedrooms} hab</span>}
                    {property.bathrooms && <span>{property.bathrooms} baños</span>}
                  </div>
                </div>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-xl text-muted-foreground">No se encontraron propiedades con estos filtros.</p>
          </div>
        )}
      </div>
    </section>
  );
};
