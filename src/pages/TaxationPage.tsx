import { Layout } from '../components/Layout';
import { TaxationSection } from '../components/sections/TaxationSection';

const TaxationPage = () => {
  return (
    <Layout
      title="Impuestos en Paraguay - Sistema Fiscal Territorial para Extranjeros"
      description="Guía completa sobre impuestos en Paraguay: sistema territorial, IRP, IVA y ventajas fiscales. Aprende cómo pagar menos impuestos legalmente como residente en Paraguay."
      canonical="https://livingparaguay.com/taxation"
    >
      <TaxationSection />
    </Layout>
  );
};

export default TaxationPage;
