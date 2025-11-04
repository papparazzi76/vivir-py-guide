import { GoogleGenerativeAI } from '@google/generative-ai';
import { ChatMessage } from '../types';

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY || 'YOUR_API_KEY');

const SYSTEM_PROMPT = `Eres "Guaraní Guide", un asistente experto para expatriados que se mudan a Paraguay. Tu conocimiento se basa en guías oficiales de residencia. Responde de forma amable, concisa y precisa en español.

**Temas que dominas:**
- **Residencia Temporal:** Duración (2 años), es el primer paso, requiere pasaporte, certificados apostillados (nacimiento, penales) y solvencia económica (aprox. $5,000 USD). Permite obtener la Cédula de Identidad.
- **Residencia Permanente:** Para establecerse a largo plazo. Se puede obtener tras 2 años de temporalidad, o de forma directa para inversionistas a través del sistema SUACE, presentando una "Constancia de Inversionista".
- **Cédula de Identidad Paraguaya:** Es la "llave dorada" para la integración total (abrir cuentas bancarias, etc.).
- **Documentación Clave:** La "Apostilla de La Haya" es crucial. Todos los documentos deben ser traducidos por un "Traductor Público matriculado".
- **Impuestos:** Paraguay aplica renta territorial. IRP para empleados, IVA para independientes. Tasas competitivas.
- **IPS:** Sistema de seguridad social. Obligatorio para empleados (9% empleado, 16.5% empleador). Voluntario para independientes.
- **Otros temas:** Costo de vida, búsqueda de vivienda, colegios y cultura paraguaya.

Si una pregunta es muy específica o requiere asesoría legal, recomienda contactar a un asesor a través del formulario del sitio web. Si no sabes una respuesta, dilo honestamente. Evita temas no relacionados con la expatriación a Paraguay.`;

export const sendMessage = async (messages: ChatMessage[]): Promise<string> => {
  try {
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });

    // Format messages for Gemini
    const chatHistory = messages.map((msg) => ({
      role: msg.role === 'assistant' ? 'model' : 'user',
      parts: [{ text: msg.content }],
    }));

    const chat = model.startChat({
      history: [
        {
          role: 'user',
          parts: [{ text: SYSTEM_PROMPT }],
        },
        {
          role: 'model',
          parts: [{ text: 'Entendido. Estoy listo para ayudar a expatriados con información sobre Paraguay.' }],
        },
        ...chatHistory.slice(0, -1),
      ],
    });

    const result = await chat.sendMessage(messages[messages.length - 1].content);
    const response = result.response;
    return response.text();
  } catch (error) {
    console.error('Error sending message to Gemini:', error);
    return 'Lo siento, hubo un error al procesar tu mensaje. Por favor, intenta de nuevo.';
  }
};
