import { Layout } from '../components/Layout';
import { PermitSection } from '../components/sections/PermitSection';

const PermitsPage = () => {
  return (
    <Layout
      title="Residencia en Paraguay - Requisitos y Proceso Completo"
      description="Guía detallada sobre residencia temporal, permanente y cédula paraguaya. Conoce los requisitos, tiempos y costos para obtener tu residencia en Paraguay como extranjero."
      canonical="https://livingparaguay.com/permits"
    >
      <PermitSection />
    </Layout>
  );
};

export default PermitsPage;
