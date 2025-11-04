import { AnimatedDiv } from '../AnimatedDiv';
import { FAQS } from '../../constants';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export const FaqSection = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            Preguntas Frecuentes (FAQ)
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            Respuestas a las dudas más comunes sobre la mudanza a Paraguay.
          </p>
        </AnimatedDiv>

        <AnimatedDiv delay={100}>
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-4 sm:p-6">
            <Accordion type="single" collapsible className="w-full">
              {FAQS.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index}>
                  <AccordionTrigger className="text-left text-base sm:text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-sm sm:text-base text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </AnimatedDiv>
      </div>
    </section>
  );
};
