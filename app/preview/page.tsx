import type { Metadata } from "next";
import { PreviewClient } from "./client";

export const metadata: Metadata = {
  title: "Ejemplos y Preview",
  description:
    "Explorá ejemplos de diseños generados con Built. Landing pages, portfolios, e-commerces y más.",
};

export default function PreviewPage() {
  return <PreviewClient />;
}
