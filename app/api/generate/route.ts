import { NextRequest, NextResponse } from "next/server";
import { generateDesign } from "@/lib/groq";

export async function POST(request: NextRequest) {
  try {
    const { prompt } = await request.json();

    if (!prompt || typeof prompt !== "string") {
      return NextResponse.json(
        { error: "Se requiere un prompt válido" },
        { status: 400 }
      );
    }

    if (prompt.length > 500) {
      return NextResponse.json(
        { error: "El prompt es demasiado largo (máximo 500 caracteres)" },
        { status: 400 }
      );
    }

    // Check if API key is configured
    if (!process.env.GROQ_API_KEY) {
      return NextResponse.json(
        { error: "API key de Groq no configurada" },
        { status: 500 }
      );
    }

    const design = await generateDesign({ prompt });

    return NextResponse.json(design);
  } catch (error) {
    console.error("Error generating design:", error);

    if (error instanceof Error) {
      if (error.message.includes("API")) {
        return NextResponse.json(
          { error: "Error de API. Verificá tu API key." },
          { status: 401 }
        );
      }
      return NextResponse.json(
        { error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { error: "Error interno del servidor" },
      { status: 500 }
    );
  }
}
