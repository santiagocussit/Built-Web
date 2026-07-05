"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";
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
    "Landing page para startup de fintech",
    "Portfolio personal minimalista",
    "E-commerce de ropa",
    "Blog de viajes",
  ];

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="space-y-4">
        <Textarea
          placeholder="Describí tu diseño... Ej: Landing page para una app de fitness"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[100px] resize-none"
          disabled={isLoading}
        />

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            {prompt.length}/500
          </p>
          <Button type="submit" disabled={!prompt.trim() || isLoading}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Generando
              </>
            ) : (
              "Generar"
            )}
          </Button>
        </div>
      </form>

      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Ejemplos:</p>
        <div className="flex flex-wrap gap-2">
          {examplePrompts.map((example, index) => (
            <button
              key={index}
              onClick={() => setPrompt(example)}
              className="rounded-full border border-border/50 px-3 py-1 text-xs text-muted-foreground transition-colors hover:border-border hover:bg-muted/50"
            >
              {example}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
