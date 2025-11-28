import { Layout } from '../components/Layout';
import { FaqSection } from '../components/sections/FaqSection';

const FaqPage = () => {
  return (
    <Layout
      title="Preguntas Frecuentes - Vivir en Paraguay como Expatriado"
      description="Respuestas a las preguntas más frecuentes sobre vivir en Paraguay: residencia, costos, seguridad, clima, cultura y más. Resuelve todas tus dudas."
      canonical="https://livingparaguay.com/faq"
    >
      <FaqSection />
    </Layout>
  );
};

export default FaqPage;
