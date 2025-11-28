import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

interface BreadcrumbItem {
  label: string;
  path: string;
}

const routeLabels: Record<string, string> = {
  'permits': 'Permisos de Residencia',
  'housing': 'Vivienda',
  'schools': 'Colegios',
  'neighborhoods': 'Barrios',
  'taxation': 'Impuestos',
  'social-security': 'Seguridad Social',
  'faq': 'Preguntas Frecuentes',
  'contact': 'Contacto',
  'blog': 'Blog',
  'impuestos-paraguay-sistema-territorial': 'Impuestos en Paraguay: Sistema Territorial',
  'apostillar-documentos-paraguay': 'Apostillar Documentos para Paraguay',
};

export const Breadcrumbs = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  if (pathnames.length === 0) {
    return null; // Don't show breadcrumbs on home page
  }

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Inicio', path: '/' },
  ];

  let currentPath = '';
  pathnames.forEach((segment) => {
    currentPath += `/${segment}`;
    breadcrumbs.push({
      label: routeLabels[segment] || segment,
      path: currentPath,
    });
  });

  // Generate BreadcrumbList schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      "item": `https://livingparaguay.com${item.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      
      <nav aria-label="Breadcrumb" className="container mx-auto px-4 sm:px-6 py-4">
        <ol className="flex flex-wrap items-center gap-2 text-sm">
          {breadcrumbs.map((item, index) => {
            const isLast = index === breadcrumbs.length - 1;
            
            return (
              <li key={item.path} className="flex items-center gap-2">
                {index > 0 && (
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                )}
                {isLast ? (
                  <span className="text-foreground font-medium" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    to={item.path}
                    className="text-muted-foreground hover:text-primary transition-colors flex items-center gap-1"
                  >
                    {index === 0 && <Home className="w-4 h-4" />}
                    {item.label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
