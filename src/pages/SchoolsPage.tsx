import { Layout } from '../components/Layout';
import { SchoolSection } from '../components/sections/SchoolSection';

const SchoolsPage = () => {
  return (
    <Layout
      title="Colegios Internacionales en Paraguay - Educación para Expatriados"
      description="Los mejores colegios internacionales en Asunción y Paraguay. Información sobre educación bilingüe, programas internacionales, costos y admisiones para familias expatriadas."
      canonical="https://livingparaguay.com/schools"
    >
      <SchoolSection />
    </Layout>
  );
};

export default SchoolsPage;
