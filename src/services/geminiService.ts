import { supabase } from '@/integrations/supabase/client';
import { ChatMessage } from '../types';

export const sendMessage = async (messages: ChatMessage[]): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('chat', {
      body: { messages },
    });

    if (error) {
      console.error('Error calling chat function:', error);
      return 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.';
    }

    return data?.response || 'Lo siento, no pude generar una respuesta.';
  } catch (error) {
    console.error('Error sending message:', error);
    return 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.';
  }
};
