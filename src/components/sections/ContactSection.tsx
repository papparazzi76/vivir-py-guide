import { useState } from 'react';
import { AnimatedDiv } from '../AnimatedDiv';
import { Icon } from '../Icon';
import { useLanguage } from '../../contexts/LanguageContext';
import { CONTACT_INFO } from '../../constants';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const ContactSection = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simular llamada a API
    console.log('Enviando formulario:', formData);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
      toast({
        title: t.contact.formSuccess,
        description: t.contact.subtitle,
      });
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6">
        <AnimatedDiv className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4">
            {t.contact.title}
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground">
            {t.contact.subtitle}
          </p>
        </AnimatedDiv>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Información de Contacto */}
          <AnimatedDiv delay={100}>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 h-full">
              <h3 className="text-2xl font-bold mb-6">{t.contact.formTitle}</h3>
              <div className="space-y-5">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary">
                    <Icon name="mail" size={24} className="text-primary transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.email}</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.email}</p>
                  </div>
                </a>
                
                <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary">
                    <Icon name="phone" size={24} className="text-primary transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.phone}</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.phone}</p>
                  </div>
                </a>

                <a href={`https://wa.me/${CONTACT_INFO.whatsapp.replace('+', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center transition-colors group-hover:bg-primary">
                    <Icon name="chat" size={24} className="text-primary transition-colors group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg">{t.contact.whatsapp}</h4>
                    <p className="text-muted-foreground group-hover:text-primary transition-colors">{CONTACT_INFO.whatsapp}</p>
                  </div>
                </a>
              </div>
            </div>
          </AnimatedDiv>

          {/* Formulario de Contacto */}
          <AnimatedDiv delay={200}>
            <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
              <h3 className="text-2xl font-bold mb-6">{t.contact.formTitle}</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <Input
                    name="name"
                    type="text"
                    placeholder={t.contact.formName}
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                  <Input
                    name="email"
                    type="email"
                    placeholder={t.contact.formEmail}
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <Input
                  name="subject"
                  type="text"
                  placeholder={t.contact.formSubject}
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
                <Textarea
                  name="message"
                  placeholder={t.contact.formMessage}
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
                <Button type="submit" disabled={isSubmitting} className="w-full py-3">
                  {isSubmitting ? t.contact.formSubmitting : t.contact.formSubmit}
                </Button>
              </form>
            </div>
          </AnimatedDiv>
        </div>
      </div>
    </section>
  );
};
