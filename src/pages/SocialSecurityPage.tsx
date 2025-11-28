import { Layout } from '../components/Layout';
import { SocialSecuritySection } from '../components/sections/SocialSecuritySection';

const SocialSecurityPage = () => {
  return (
    <Layout
      title="Seguridad Social en Paraguay - Salud y Servicios para Expatriados"
      description="Todo sobre el sistema de seguridad social en Paraguay: IPS, seguros médicos privados, hospitales y servicios de salud para residentes extranjeros."
      canonical="https://livingparaguay.com/social-security"
    >
      <SocialSecuritySection />
    </Layout>
  );
};

export default SocialSecurityPage;
