import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const TaxationSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Fiscalidad en Paraguay
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Un régimen favorable basado en el Principio de Territorialidad.
          </p>
        </AnimatedDiv>

        <div className="max-w-4xl mx-auto">
          <AnimatedDiv delay={100}>
            <Card className="mb-8 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-2xl">
                  <Icon name="shield" size={24} className="text-primary" />
                  Pilar Central: Principio de Territorialidad
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-foreground">
                  [cite_start]Paraguay se rige por el <strong>Principio de la Fuente</strong>[cite: 7]. [cite_start]Esto significa que, en general, solo se gravan las rentas generadas <strong>dentro</strong> de las fronteras del país[cite: 7, 40].
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-start space-x-3">
                    <Icon name="check" className="text-green-600 mt-1 flex-shrink-0" />
                    [cite_start]<p><strong>Impuesto 0% sobre rentas extranjeras:</strong> Salarios por trabajo remoto para empleadores extranjeros, dividendos de empresas foráneas o intereses bancarios en el exterior no están sujetos a impuestos en Paraguay[cite: 8, 48, 50, 59, 65].</p>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </AnimatedDiv>

          <AnimatedDiv delay={200}>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1" className="bg-white rounded-xl shadow-lg px-6">
                <AccordionTrigger className="text-xl font-bold hover:no-underline">
                  Impuesto a la Renta Personal (IRP)
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  [cite_start]<p>Es el impuesto principal para individuos residentes[cite: 108]. [cite_start]Se divide en dos categorías que se liquidan por separado[cite: 110]:</p>
                  <div>
                    <h4 className="font-semibold text-base text-primary">1. Rentas de Servicios Personales (IRP-RSP)</h4>
                    [cite_start]<p className="text-sm text-muted-foreground mb-2">Grava ingresos por trabajo local (salarios, honorarios)[cite: 111, 114].</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      [cite_start]<li><strong>Tasas Progresivas:</strong> 8%, 9% y 10% sobre la renta neta [cite: 117-118].</li>
                      [cite_start]<li><strong>Deducciones:</strong> Se pueden deducir gastos personales y familiares realizados en el país[cite: 121].</li>
                      [cite_start]<li><strong>Deducciones Clave para Expat:</strong> Se permite deducir gastos en <strong>salud</strong> y <strong>educación</strong> realizados en el <strong>exterior</strong>[cite: 126, 127].</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-base text-primary">2. Rentas y Ganancias del Capital (IRP-RGC)</h4>
                    [cite_start]<p className="text-sm text-muted-foreground mb-2">Grava rentas pasivas de <strong>fuente paraguaya</strong> (alquileres, intereses locales)[cite: 131].</p>
                    <ul className="list-disc pl-5 text-sm space-y-1">
                      [cite_start]<li><strong>Tasa Única:</strong> 8% sobre la Renta Neta[cite: 133].</li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-white rounded-xl shadow-lg px-6 mt-4">
                <AccordionTrigger className="text-xl font-bold hover:no-underline">
                  Impuesto al Valor Agregado (IVA)
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  [cite_start]<p>Es el principal impuesto al consumo[cite: 28].</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    [cite_start]<li><strong>Tasa General:</strong> 10%[cite: 146].</li>
                    [cite_start]<li><strong>Tasa Reducida:</strong> 5% para alquileres de vivienda y ciertos bienes[cite: 146].</li>
                    [cite_start]<li><strong>¡Clave para Nómadas Digitales!:</strong> La <strong>exportación de servicios</strong> (como consultoría, desarrollo de software, etc.) a clientes del exterior está <strong>exenta de IVA</strong>[cite: 154, 157].</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-white rounded-xl shadow-lg px-6 mt-4">
                <AccordionTrigger className="text-xl font-bold hover:no-underline">
                  Impuesto a los Dividendos (IDU)
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2">
                  [cite_start]<p>Grava la <strong>distribución</strong> de ganancias de <strong>empresas paraguayas</strong> a sus accionistas[cite: 166, 167].</p>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    [cite_start]<li><strong>Tasa para Residentes:</strong> 8%[cite: 169].</li>
                    [cite_start]<li><strong>Tasa para No Residentes:</strong> 15%[cite: 170].</li>
                    [cite_start]<li><strong>Importante:</strong> Este impuesto no aplica a dividendos recibidos de empresas extranjeras[cite: 176].</li>
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
