import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { NEIGHBORHOODS } from '../../constants';
import { useLanguage } from '../../contexts/LanguageContext';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Users, MapPin, Briefcase, Home, GraduationCap, ShoppingBag, Check, Info, Car, DollarSign, Shield } from 'lucide-react';

const PROFILE_TABLE = [
  { profile: 'Nómadas Digitales', barrio1: 'Villa Morra', barrio2: 'Las Mercedes', factor: 'Conectividad y Cafés' },
  { profile: 'Emprendedores', barrio1: 'Las Mercedes', barrio2: 'Barrio Jara', factor: 'Networking y Creatividad' },
  { profile: 'Comerciales', barrio1: 'San Cristóbal', barrio2: 'Villa Morra', factor: 'Ubicación Estratégica' },
  { profile: 'Empleados Multinacionales', barrio1: 'Ykua Saty', barrio2: 'Manorá', factor: 'Proximidad Corporativa' },
  { profile: 'Parejas Trabajadoras', barrio1: 'Recoleta', barrio2: 'Villa Morra', factor: 'Servicios y Movilidad' },
  { profile: 'Familias con Hijos', barrio1: 'Las Lomas', barrio2: 'Los Laureles', factor: 'Colegios y Parques' },
];

export const NeighborhoodSection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Header */}
        <AnimatedDiv className="text-center mb-6 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Los 10 Mejores Barrios de Asunción para Vivir
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Guía 2025-2026: Asunción se ha transformado en un archipiélago de polos especializados que ofrecen soluciones habitacionales para diversos perfiles de vida.
          </p>
        </AnimatedDiv>

        {/* Neighborhood Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 mb-16">
          {NEIGHBORHOODS.map((neighborhood, idx) => (
            <AnimatedDiv key={neighborhood.id} delay={idx * 50}>
              <Card className="overflow-hidden hover-lift h-full flex flex-col">
                <div className="relative">
                  <img
                    src={neighborhood.image}
                    alt={`Barrio ${neighborhood.name} en ${neighborhood.city}`}
                    className="w-full h-52 object-cover"
                    loading={idx < 4 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-primary text-primary-foreground font-bold text-sm px-3 py-1">
                      #{neighborhood.id}
                    </Badge>
                  </div>
                </div>
                <CardHeader className="pb-2">
                  <CardTitle className="text-xl sm:text-2xl">{neighborhood.name}</CardTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {neighborhood.city}
                    </span>
                    <span className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      {neighborhood.profile}
                    </span>
                  </div>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 pt-0">
                  <p className="text-sm text-foreground mb-4">
                    {neighborhood.description}
                  </p>
                  
                  {/* Highlights */}
                  <ul className="space-y-1.5 mb-4 flex-1">
                    {neighborhood.highlights.map((hl) => (
                      <li key={hl} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <Check className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        {hl}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {neighborhood.tags.map((tag) => (
                      <Badge key={tag} variant="default" className="bg-primary/10 text-primary text-xs">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </AnimatedDiv>
          ))}
        </div>

        {/* Profile Comparison Table */}
        <AnimatedDiv delay={100}>
          <Card className="mb-12">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-center">
                ¿Qué Barrio es Ideal para Ti?
              </CardTitle>
              <p className="text-muted-foreground text-center">
                Tabla comparativa según tu perfil de vida
              </p>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="font-bold">Perfil</TableHead>
                      <TableHead className="font-bold">Barrio #1</TableHead>
                      <TableHead className="font-bold">Barrio #2</TableHead>
                      <TableHead className="font-bold">Factor Clave</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {PROFILE_TABLE.map((row) => (
                      <TableRow key={row.profile}>
                        <TableCell className="font-semibold">{row.profile}</TableCell>
                        <TableCell>
                          <Badge variant="outline" className="text-primary border-primary">{row.barrio1}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant="outline">{row.barrio2}</Badge>
                        </TableCell>
                        <TableCell className="text-muted-foreground">{row.factor}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </AnimatedDiv>

        {/* Practical Info */}
        <AnimatedDiv delay={150}>
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl text-center">
                Información Práctica para el Residente
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex gap-3">
                  <Shield className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Seguridad</h4>
                    <p className="text-sm text-muted-foreground">
                      Estos 10 barrios son de los más seguros de la capital. Se recomienda evitar zonas periféricas y mantener precauciones básicas durante la noche.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Car className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Transporte</h4>
                    <p className="text-sm text-muted-foreground">
                      Uber y Bolt son extremadamente económicos y eficientes para moverse entre estos barrios. El transporte por app es la opción preferida.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <DollarSign className="w-8 h-8 text-primary shrink-0" />
                  <div>
                    <h4 className="font-bold mb-1">Costo de Vida</h4>
                    <p className="text-sm text-muted-foreground">
                      Asunción es una de las capitales más asequibles de la región. Alquiler 1 dormitorio: $400-500 USD. 2 dormitorios: $550-750 USD.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </AnimatedDiv>
      </div>
    </section>
  );
};
