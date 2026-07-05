import Groq from "groq-sdk";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

interface GenerateDesignOptions {
  prompt: string;
}

interface GeneratedDesign {
  html: string;
  css: string;
  description: string;
}

export async function generateDesign({ prompt }: GenerateDesignOptions): Promise<GeneratedDesign> {
  const systemPrompt = `Eres un experto disenador web. El usuario te pide crear un diseno HTML/CSS basado en su descripcion.

Reglas estrictas:
1. Devuelve SOLO codigo valido HTML y CSS
2. El HTML debe ser semanticamente correcto
3. El CSS debe usar Tailwind CSS classes cuando sea posible, o CSS inline styles
4. El diseno debe ser moderno, limpio y responsive
5. NO incluyas comentarios innecesarios
6. La respuesta debe ser en formato JSON con esta estructura exacta:
{
  "html": "<código HTML completo>",
  "css": "<estilos CSS si es necesario, o string vacio>",
  "description": "<breve descripcion del diseno en español>"
}

Ejemplo de respuesta:
{
  "html": "<div class="container mx-auto p-8"><h1 class="text-4xl font-bold">Bienvenido</h1></div>",
  "css": "",
  "description": "Landing page moderna con fondo degradado"
}

Ahora, el usuario pide:`;

  try {
    const completion = await groq.chat.completions.create({
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      model: "llama-3.3-70b-versatile",
      temperature: 0.7,
      max_tokens: 4096,
    });

    const response = completion.choices[0]?.message?.content;

    if (!response) {
      throw new Error("No se recibio respuesta de la IA");
    }

    // Parsear el JSON de la respuesta
    const jsonMatch = response.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      throw new Error("No se pudo parsear la respuesta de la IA");
    }

    const result = JSON.parse(jsonMatch[0]) as GeneratedDesign;
    return result;
  } catch (error) {
    console.error("Error generating design:", error);
    throw error;
  }
}

export { groq };
