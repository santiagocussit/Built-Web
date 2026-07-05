"use client";

import { useState } from "react";
import { Copy, Check, Download, Code } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useToast } from "@/lib/use-toast";

interface CodePreviewProps {
  html: string;
  css?: string;
  description?: string;
}

export function CodePreview({ html, css, description }: CodePreviewProps) {
  const [copied, setCopied] = useState<string | null>(null);
  const { toast } = useToast();

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(type);
      toast({
        title: "Copiado!",
        description: `${type} copiado al portapapeles`,
      });
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      toast({
        title: "Error",
        description: "No se pudo copiar al portapapeles",
        variant: "destructive",
      });
    }
  };

  const downloadCode = () => {
    const fullCode = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Built Design</title>
  ${css ? `<style>${css}</style>` : ""}
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
  ${html}
</body>
</html>`;

    const blob = new Blob([fullCode], { type: "text/html" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "built-design.html";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    toast({
      title: "Descargado!",
      description: "Tu diseño se ha descargado como HTML",
    });
  };

  return (
    <div className="space-y-4">
      {description && (
        <div className="rounded-lg bg-muted p-4">
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      )}

      <Tabs defaultValue="html" className="w-full">
        <div className="flex items-center justify-between">
          <TabsList>
            <TabsTrigger value="html">
              <Code className="mr-2 h-4 w-4" />
              HTML
            </TabsTrigger>
            {css && <TabsTrigger value="css">CSS</TabsTrigger>}
          </TabsList>

          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(html, "HTML")}
            >
              {copied === "HTML" ? (
                <Check className="mr-2 h-4 w-4 text-green-500" />
              ) : (
                <Copy className="mr-2 h-4 w-4" />
              )}
              Copiar HTML
            </Button>
            {css && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => copyToClipboard(css, "CSS")}
              >
                {copied === "CSS" ? (
                  <Check className="mr-2 h-4 w-4 text-green-500" />
                ) : (
                  <Copy className="mr-2 h-4 w-4" />
                )}
                Copiar CSS
              </Button>
            )}
          </div>
        </div>

        <TabsContent value="html" className="mt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="default" size="sm" className="mb-4">
                <Download className="mr-2 h-4 w-4" />
                Descargar HTML
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Descargar Diseño</DialogTitle>
                <DialogDescription>
                  Se descargará un archivo HTML completo con Tailwind CSS
                  incluido.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={downloadCode}>Confirmar Descarga</Button>
            </DialogContent>
          </Dialog>

          <ScrollArea className="h-[400px] rounded-md border">
            <pre className="p-4 text-sm">
              <code>{html}</code>
            </pre>
          </ScrollArea>
        </TabsContent>

        {css && (
          <TabsContent value="css" className="mt-4">
            <ScrollArea className="h-[400px] rounded-md border">
              <pre className="p-4 text-sm">
                <code>{css}</code>
              </pre>
            </ScrollArea>
          </TabsContent>
        )}
      </Tabs>
    </div>
  );
}
