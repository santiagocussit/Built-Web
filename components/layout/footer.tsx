import Link from "next/link";
import { Logo } from "@/components/ui/logo";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Link href="/" className="flex items-center gap-2">
            <Logo className="h-6 w-auto" />
          </Link>
          
          <nav className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/designer" className="hover:text-foreground transition-colors">
              Diseñador
            </Link>
            <Link href="/preview" className="hover:text-foreground transition-colors">
              Preview
            </Link>
          </nav>
          
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Built
          </p>
        </div>
      </div>
    </footer>
  );
}
