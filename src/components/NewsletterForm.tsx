import { useState } from 'react';
import { Mail } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useLanguage } from '@/contexts/LanguageContext';
import { z } from 'zod';

const emailSchema = z.object({
  email: z.string().trim().email('Email inválido').max(255, 'El email debe tener menos de 255 caracteres').toLowerCase(),
});

export const NewsletterForm = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const { toast } = useToast();
  const { t } = useLanguage();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    try {
      const validatedData = emailSchema.parse({ email });
      setIsLoading(true);

      const { error: dbError } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email: validatedData.email, source: 'website' }]);

      if (dbError) {
        if (dbError.code === '23505') {
          toast({
            title: t.newsletter.errorTitle || "Error",
            description: t.newsletter.errorExists || "Este email ya está suscrito",
            variant: "destructive",
          });
        } else {
          throw dbError;
        }
      } else {
        toast({
          title: t.newsletter.successTitle || "¡Suscripción exitosa!",
          description: t.newsletter.successMessage || "Gracias por suscribirte a nuestro newsletter",
        });
        setEmail('');
      }
    } catch (err) {
      if (err instanceof z.ZodError) {
        const errorMessage = err.errors[0]?.message || 'Email inválido';
        setError(errorMessage);
        toast({
          title: t.newsletter.errorTitle || "Error",
          description: errorMessage,
          variant: "destructive",
        });
      } else {
        console.error('Newsletter subscription error:', err);
        toast({
          title: t.newsletter.errorTitle || "Error",
          description: t.newsletter.errorGeneric || "Hubo un error al procesar tu suscripción",
          variant: "destructive",
        });
      }
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
            className={`pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 ${error ? 'border-destructive' : ''}`}
            disabled={isLoading}
          />
          {error && <p className="text-sm text-destructive mt-1">{error}</p>}
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
