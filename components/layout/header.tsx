"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="text-xl font-bold tracking-tight">
          Built
        </Link>

        <nav className="flex items-center gap-8">
          <Link
            href="/designer"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Diseñador
          </Link>
          <Link
            href="/preview"
            className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Preview
          </Link>
          <Link href="/designer">
            <Button size="sm" className="font-semibold">Empezar</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
