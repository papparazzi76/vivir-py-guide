import { Layout } from '../components/Layout';
import { ContactSection } from '../components/sections/ContactSection';

const ContactPage = () => {
  return (
    <Layout
      title="Contacto - Asesoría Personalizada para Mudarte a Paraguay"
      description="Contáctanos para recibir asesoría personalizada sobre tu mudanza a Paraguay. Te ayudamos con residencia, vivienda, impuestos y todo el proceso de relocalización."
      canonical="https://livingparaguay.com/contact"
    >
      <ContactSection />
    </Layout>
  );
};

export default ContactPage;
