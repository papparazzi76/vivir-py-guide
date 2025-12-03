import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

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

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GEMINI_API_KEY = Deno.env.get('GEMINI_API_KEY');
    if (!GEMINI_API_KEY) {
      console.error('GEMINI_API_KEY is not configured');
      return new Response(
        JSON.stringify({ error: 'API key not configured' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const { messages } = await req.json();
    
    if (!messages || !Array.isArray(messages) || messages.length === 0) {
      return new Response(
        JSON.stringify({ error: 'Messages array is required' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Format messages for Gemini API
    const contents = [
      { role: 'user', parts: [{ text: SYSTEM_PROMPT }] },
      { role: 'model', parts: [{ text: 'Entendido. Estoy listo para ayudar a expatriados con información sobre Paraguay.' }] },
      ...messages.map((msg: { role: string; content: string }) => ({
        role: msg.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: msg.content }],
      })),
    ];

    console.log('Calling Gemini API with', messages.length, 'messages');

    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contents }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Gemini API error:', response.status, errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to get response from AI' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const data = await response.json();
    const text = data.candidates?.[0]?.content?.parts?.[0]?.text || 'Lo siento, no pude generar una respuesta.';

    console.log('Gemini response received successfully');

    return new Response(
      JSON.stringify({ response: text }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Error in chat function:', error);
    return new Response(
      JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
