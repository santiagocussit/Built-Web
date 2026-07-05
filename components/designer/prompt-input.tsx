"use client";

import { useState } from "react";
import { Sparkles, Loader2 } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

interface PromptInputProps {
  onGenerate: (prompt: string) => void;
  isLoading: boolean;
}

export function PromptInput({ onGenerate, isLoading }: PromptInputProps) {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onGenerate(prompt);
    }
  };

  const examplePrompts = [
    "Landing page para una startup de fintech",
    "Portfolio personal con tema oscuro",
    "E-commerce de ropa minimalista",
    "Blog de viajes con diseño editorial",
  ];

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <Textarea
            placeholder="Describí tu diseño ideal... Ej: 'Una landing page para una app de fitness con colores vibrantes y secciones para testimonios'"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            className="min-h-[120px] resize-none pr-12"
            disabled={isLoading}
          />
          <Sparkles className="absolute right-3 top-3 h-5 w-5 text-muted-foreground" />
        </div>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {prompt.length}/500 caracteres
          </p>
          <Button type="submit" disabled={!prompt.trim() || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generando...
              </>
            ) : (
              <>
                <Sparkles className="mr-2 h-4 w-4" />
                Generar Diseño
              </>
            )}
          </Button>
        </div>
      </form>

      <div className="space-y-2">
        <p className="text-sm font-medium">Ejemplos rápido:</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => setPrompt(example)}
              className="rounded-full border px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-primary hover:text-primary"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
