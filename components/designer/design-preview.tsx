"use client";

import { useEffect, useRef } from "react";
import { ExternalLink, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DesignPreviewProps {
  html: string;
  css?: string;
  onRefresh?: () => void;
}

export function DesignPreview({ html, css, onRefresh }: DesignPreviewProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (iframeRef.current) {
      const fullDocument = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Built Design Preview</title>
  <script src="https://cdn.tailwindcss.com"></script>
  ${css ? `<style>${css}</style>` : ""}
  <style>
    body {
      margin: 0;
      padding: 0;
    }
  </style>
</head>
<body>
  ${html}
</body>
</html>`;

      const blob = new Blob([fullDocument], { type: "text/html" });
      const url = URL.createObjectURL(blob);
      iframeRef.current.src = url;

      return () => {
        URL.revokeObjectURL(url);
      };
    }
  }, [html, css]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Vista Previa</h3>
        {onRefresh && (
          <Button variant="outline" size="sm" onClick={onRefresh}>
            <RefreshCw className="mr-2 h-4 w-4" />
            Regenerar
          </Button>
        )}
      </div>

      <div className="relative overflow-hidden rounded-lg border bg-white">
        <div className="absolute right-2 top-2 z-10">
          <a
            href="about:blank"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur"
          >
            <ExternalLink className="mr-1 h-3 w-3" />
            Fullscreen
          </a>
        </div>

        <iframe
          ref={iframeRef}
          className="h-[500px] w-full"
          title="Design Preview"
          sandbox="allow-scripts"
        />
      </div>
    </div>
  );
}
