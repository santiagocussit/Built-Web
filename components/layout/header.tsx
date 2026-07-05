"use client";

import Link from "next/link";
import { Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Built</span>
        </Link>

        <nav className="flex items-center space-x-6">
          <Link
            href="/designer"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Diseñador
          </Link>
          <Link
            href="/preview"
            className="text-sm font-medium transition-colors hover:text-primary"
          >
            Preview
          </Link>
          <Link href="/designer">
            <Button size="sm">Empezar</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
