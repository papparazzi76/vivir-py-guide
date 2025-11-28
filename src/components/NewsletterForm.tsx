import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: t.newsletter.errorTitle || "Error",
        description: t.newsletter.errorInvalid || "Por favor ingresa un email válido",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email, source: 'website' }]);

      if (error) {
        if (error.code === '23505') {
          toast({
            title: t.newsletter.errorTitle || "Error",
            description: t.newsletter.errorExists || "Este email ya está suscrito",
            variant: "destructive",
          });
        } else {
          throw error;
        }
      } else {
        toast({
          title: t.newsletter.successTitle || "¡Suscripción exitosa!",
          description: t.newsletter.successMessage || "Gracias por suscribirte a nuestro newsletter",
        });
        setEmail('');
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast({
        title: t.newsletter.errorTitle || "Error",
        description: t.newsletter.errorGeneric || "Hubo un error al procesar tu suscripción",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h4 className="font-bold text-lg mb-4">
        {t.newsletter.title || "Newsletter"}
      </h4>
      <p className="text-gray-300 text-sm mb-4">
        {t.newsletter.description || "Recibe actualizaciones sobre Paraguay en tu correo"}
      </p>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <Input
            type="email"
            placeholder={t.newsletter.placeholder || "tu@email.com"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            disabled={isLoading}
          />
        </div>
        <Button
          type="submit"
          className="w-full bg-py-red hover:bg-py-red/90"
          disabled={isLoading}
        >
          {isLoading 
            ? (t.newsletter.subscribing || "Suscribiendo...") 
            : (t.newsletter.subscribe || "Suscribirse")
          }
        </Button>
      </form>
    </div>
  );
};
