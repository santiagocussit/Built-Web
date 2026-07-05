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
    "Built es una herramienta de diseño web potenciada por IA que te permite crear sitios hermosos en segundos. Solo describí tu idea y obtén código HTML/CSS listo para usar.",
  keywords: [
    "diseño web",
    "IA",
    "herramienta de diseño",
    "HTML",
    "CSS",
    "Tailwind",
    "groq",
    "AI design",
    "web design tool",
  ],
  authors: [{ name: "Built Team" }],
  creator: "Built",
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://built.design",
    siteName: "Built",
    title: "Built - Diseño Web con IA",
    description:
      "Creá sitios hermosos en segundos con la ayuda de la IA",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Built - AI Web Design",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Built - Diseño Web con IA",
    description: "Creá sitios hermosos en segundos con la ayuda de la IA",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "tu-google-verification-code",
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
        <link rel="apple-touch-icon" href="/icon.png" />
        <meta name="theme-color" content="#3b82f6" />
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
