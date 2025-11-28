import { Layout } from '../components/Layout';
import { NeighborhoodSection } from '../components/sections/NeighborhoodSection';

const NeighborhoodsPage = () => {
  return (
    <Layout
      title="Mejores Barrios de Asunción para Vivir - Guía de Zonas"
      description="Descubre los mejores barrios de Asunción: Villa Morra, Carmelitas, Las Lomas, Manorá y más. Características, servicios y estilo de vida en cada zona."
      canonical="https://livingparaguay.com/neighborhoods"
    >
      <NeighborhoodSection />
    </Layout>
  );
};

export default NeighborhoodsPage;
