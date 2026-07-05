import Link from "next/link";
import { ArrowRight, Sparkles, Zap, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 py-24">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/10" />
        <div className="absolute top-1/4 left-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center rounded-full border bg-background/50 px-4 py-2 text-sm backdrop-blur">
            <Sparkles className="mr-2 h-4 w-4 text-primary" />
            Potenciado por Groq AI
          </div>

          <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Diseño web con{" "}
            <span className="gradient-text">inteligencia artificial</span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Creá sitios hermosos en segundos. Solo describí lo que imaginás y
            obtén código HTML/CSS listo para usar, sin necesidad de ser un
            experto.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/designer">
              <Button size="lg" className="text-lg">
                Empezar a Diseñar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/preview">
              <Button size="lg" variant="outline" className="text-lg">
                Ver Ejemplos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Todo lo que necesitás para diseñar
            </h2>
            <p className="mx-auto max-w-2xl text-muted-foreground">
              Herramientas poderosas diseñadas para hacer tu flujo de trabajo
              más rápido y eficiente.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="IA Potente"
              description="Groq AI genera diseños profesionales basándose en tu descripción en segundos."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="Código Limpio"
              description="Obtené HTML semántico y CSS optimizado, listo para producción."
            />
            <FeatureCard
              icon={<Palette className="h-8 w-8" />}
              title="Tailwind CSS"
              description="Diseños modernos usando las mejores prácticas de Tailwind CSS."
            />
            <FeatureCard
              icon={<Zap className="h-8 w-8" />}
              title="Rápido"
              description="Respuestas instantáneas gracias a la tecnología de Groq."
            />
            <FeatureCard
              icon={<Sparkles className="h-8 w-8" />}
              title="Preview en Vivo"
              description="Ve tu diseño en tiempo real antes de copiar el código."
            />
            <FeatureCard
              icon={<Code className="h-8 w-8" />}
              title="Fácil de Usar"
              description="Interfaz intuitiva diseñada para cualquier nivel de experiencia."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <Card className="border-none bg-gradient-to-r from-primary/10 to-secondary/10">
            <CardContent className="px-8 py-16 text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight">
                Empezá a crear hoy
              </h2>
              <p className="mx-auto mb-8 max-w-xl text-muted-foreground">
                No necesitás experiencia en diseño. Solo describí tu idea y
                deja que la IA haga el trabajo pesado.
              </p>
              <Link href="/designer">
                <Button size="lg" className="text-lg">
                  Ir al Diseñador
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <Card className="transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-4 text-primary">{icon}</div>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
