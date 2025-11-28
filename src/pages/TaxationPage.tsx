import { Layout } from '../components/Layout';
import { TaxationSection } from '../components/sections/TaxationSection';
import { TaxComparison } from '../components/TaxComparison';
import { AnimatedDiv } from '../components/AnimatedDiv';

const TaxationPage = () => {
  return (
    <Layout
      title="Impuestos en Paraguay - Sistema Fiscal Territorial para Extranjeros"
      description="Guía completa sobre impuestos en Paraguay: sistema territorial, IRP, IVA y ventajas fiscales. Aprende cómo pagar menos impuestos legalmente como residente en Paraguay."
      canonical="https://livingparaguay.com/taxation"
    >
      <TaxationSection />
      
      {/* Tax Comparison Calculator */}
      <section className="py-12 sm:py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedDiv>
            <TaxComparison />
          </AnimatedDiv>
        </div>
      </section>
    </Layout>
  );
};

export default TaxationPage;
