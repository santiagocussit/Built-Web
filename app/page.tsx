import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex min-h-[85vh] items-center justify-center px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Diseño web con <span className="text-foreground/80">IA</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted-foreground sm:text-xl">
            Describí lo que querés. Obtené código HTML/CSS listo para usar.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/designer">
              <Button size="lg" className="h-12 px-8 text-base font-semibold">
                Empezar
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link href="/preview">
              <Button size="lg" variant="ghost" className="h-12 px-8 text-base">
                Ver ejemplos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <h2 className="mb-3 text-2xl font-semibold tracking-tight sm:text-3xl">
              Simple y rápido
            </h2>
            <p className="text-muted-foreground">
              Diseños profesionales sin experiencia previa
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              title="IA Potente"
              description="Groq genera diseños profesionales en segundos."
            />
            <FeatureCard
              title="Código Limpio"
              description="HTML semántico y CSS optimizado."
            />
            <FeatureCard
              title="Preview en Vivo"
              description="Ve tu diseño antes de copiar el código."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-semibold tracking-tight sm:text-3xl">
            Empezá a crear
          </h2>
          <p className="mb-8 text-muted-foreground">
            No necesitás experiencia. Solo describí tu idea.
          </p>
          <Link href="/designer">
            <Button size="lg" className="h-12 px-8 text-base font-semibold">
              Ir al Diseñador
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </>
  );
}

function FeatureCard({
  title,
  description,
}: {
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/50 p-6">
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
}
