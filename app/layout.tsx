import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Built - Diseño Web con IA",
    template: "%s | Built",
  },
  description:
    "Herramienta de diseño web con IA. Describí tu idea y obtené código HTML/CSS listo para usar.",
  keywords: [
    "diseño web",
    "ia",
    "herramienta de diseño",
    "html",
    "css",
    "tailwind",
    "groq",
  ],
  authors: [{ name: "Built" }],
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://built.design",
    siteName: "Built",
    title: "Built - Diseño Web con IA",
    description: "Diseño web con inteligencia artificial",
  },
  twitter: {
    card: "summary_large_image",
    title: "Built - Diseño Web con IA",
    description: "Diseño web con inteligencia artificial",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      </head>
      <body className={inter.className}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <Toaster />
      </body>
    </html>
  );
}
