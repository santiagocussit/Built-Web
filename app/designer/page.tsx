import type { Metadata } from "next";
import { DesignerClient } from "./client";

export const metadata: Metadata = {
  title: "Diseñador IA",
  description:
    "Creá diseños web increíbles con la ayuda de la inteligencia artificial. Solo describí tu idea y obtené código listo para usar.",
};

export default function DesignerPage() {
  return <DesignerClient />;
}
