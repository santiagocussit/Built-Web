import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-6">
            <Link href="/" className="text-lg font-bold tracking-tight">
              Built
            </Link>
            <span className="text-sm text-muted-foreground">
              Diseño web con IA
            </span>
          </div>
          
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
