import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

export const SocialSecuritySection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Seguridad Social en Paraguay (IPS)
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprendiendo el Instituto de Previsión Social.
          </p>
        </AnimatedDiv>

        <div className="max-w-4xl mx-auto">
          <AnimatedDiv delay={100}>
            <Card className="shadow-lg hover-lift">
              <CardHeader>
                <CardTitle className="text-2xl">Instituto de Previsión Social (IPS) </CardTitle>
                <CardDescription>
                  El IPS es el sistema central de seguridad social de Paraguay, que brinda cobertura de salud, jubilación y otros beneficios.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Cobertura</h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="shield" size={20} className="text-primary" />
                      <span>Atención Médica y Hospitalaria</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="user" size={20} className="text-primary" />
                      <span>Jubilación y Pensiones</span>
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4 flex items-center gap-3">
                      <Icon name="home" size={20} className="text-primary" />
                      <span>Subsidios (Maternidad, Reposo)</span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Aportes y Afiliación</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold text-base mb-2">Trabajadores Dependientes (Asalariados)</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>La afiliación es <strong>obligatoria</strong>.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>Aporte Empleado: <strong>9%</strong> del salario.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>Aporte Empleador: <strong>16.5%</strong> del salario.</span>
                        </li>
                      </ul>
                    </div>
                    <div className="bg-white border rounded-lg p-4">
                      <h4 className="font-bold text-base mb-2">Trabajadores Independientes</h4>
                      <ul className="space-y-2 text-sm">
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>La afiliación es <strong>voluntaria</strong>.</span>
                        </li>
                        <li className="flex items-start space-x-2">
                          <Icon name="check" className="text-green-600 mt-0.5" size={16} />
                          <span>El independiente puede optar por cubrir la totalidad del aporte para acceder a los beneficios.</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                 <div className="bg-primary/10 rounded-lg p-4 text-primary-dark">
                  <h4 className="font-semibold mb-1">Beneficio Fiscal</h4>
                  <p className="text-sm">Los aportes realizados al IPS son <strong>100% deducibles</strong> del Impuesto a la Renta Personal (IRP-RSP).</p>
                </div>
              </CardContent>
            </Card>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
