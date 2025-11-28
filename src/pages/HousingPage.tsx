import { Layout } from '../components/Layout';
import { HousingSearch } from '../components/sections/HousingSearch';

const HousingPage = () => {
  return (
    <Layout
      title="Vivienda en Paraguay - Alquiler y Compra de Propiedades"
      description="Encuentra tu hogar ideal en Paraguay. Explora apartamentos, casas y propiedades en Asunción y otras ciudades. Precios, zonas y consejos para alquilar o comprar."
      canonical="https://livingparaguay.com/housing"
    >
      <HousingSearch />
    </Layout>
  );
};

export default HousingPage;
