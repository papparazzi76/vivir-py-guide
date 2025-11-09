import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const SocialSecuritySection = () => {
  const { t } = useLanguage();
  
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.socialSecurity.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            {t.socialSecurity.subtitle}
          </p>
        </AnimatedDiv>

        <div className="max-w-4xl mx-auto">
          <AnimatedDiv delay={100}>
            <Card className="shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">{t.socialSecurity.ipsTitle}</CardTitle>
                <CardDescription>
                  {t.socialSecurity.ipsDescription}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.socialSecurity.coverageTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="shield" size={20} className="text-primary" />
                      <span>{t.socialSecurity.coverageMedical}</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="user" size={20} className="text-primary" />
                      <span>{t.socialSecurity.coveragePension}</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="home" size={20} className="text-primary" />
                      <span>{t.socialSecurity.coverageSubsidies}</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">{t.socialSecurity.contributionsTitle}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold text-base mb-2">{t.socialSecurity.dependentTitle}</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>{t.socialSecurity.dependentMandatory}</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>{t.socialSecurity.dependentEmployee}</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>{t.socialSecurity.dependentEmployer}</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold text-base mb-2">{t.socialSecurity.independentTitle}</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>{t.socialSecurity.independentVoluntary}</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>{t.socialSecurity.independentText}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                 <div className="bg-primary/10 rounded-lg p-4 text-primary-dark">
                  <h4 className="font-semibold mb-1">{t.socialSecurity.taxBenefitTitle}</h4>
                  <p className="text-sm">{t.socialSecurity.taxBenefitText}</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
