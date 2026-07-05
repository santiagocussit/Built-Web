"use client";

import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PromptInput } from "@/components/designer/prompt-input";
import { CodePreview } from "@/components/designer/code-preview";
import { DesignPreview } from "@/components/designer/design-preview";
import { useToast } from "@/lib/use-toast";
import { Loader2 } from "lucide-react";

interface GeneratedDesign {
  html: string;
  css?: string;
  description?: string;
}

export function DesignerClient() {
  const [design, setDesign] = useState<GeneratedDesign | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async (prompt: string) => {
    setIsLoading(true);

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ prompt }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al generar el diseño");
      }

      const data = await response.json();
      setDesign(data);
      toast({
        title: "Diseño generado!",
        description: "Tu diseño está listo para previsualizar y copiar.",
      });
    } catch (error) {
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Ocurrió un error al generar el diseño",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <h1 className="mb-2 text-3xl font-bold tracking-tight">
          Diseñador con IA
        </h1>
        <p className="text-muted-foreground">
          Describí tu idea y generá código HTML/CSS automáticamente
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        {/* Left Column - Input */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Tu Idea</CardTitle>
            </CardHeader>
            <CardContent>
              <PromptInput onGenerate={handleGenerate} isLoading={isLoading} />
            </CardContent>
          </Card>

          {design && (
            <Card>
              <CardHeader>
                <CardTitle>Código</CardTitle>
              </CardHeader>
              <CardContent>
                <CodePreview
                  html={design.html}
                  css={design.css}
                  description={design.description}
                />
              </CardContent>
            </Card>
          )}
        </div>

        {/* Right Column - Preview */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Vista Previa</CardTitle>
            </CardHeader>
            <CardContent>
              {isLoading ? (
                <div className="flex h-[500px] items-center justify-center rounded-lg border bg-muted/50">
                  <div className="text-center">
                    <Loader2 className="mx-auto h-12 w-12 animate-spin text-primary" />
                    <p className="mt-4 text-muted-foreground">
                      Generando tu diseño...
                    </p>
                  </div>
                </div>
              ) : design ? (
                <DesignPreview
                  html={design.html}
                  css={design.css}
                  onRefresh={() => handleGenerate(design.html)}
                />
              ) : (
                <div className="flex h-[500px] items-center justify-center rounded-lg border bg-muted/50">
                  <div className="text-center">
                    <p className="text-lg font-medium">Sin diseño aún</p>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Ingresá una descripción para generar tu primer diseño
                    </p>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
