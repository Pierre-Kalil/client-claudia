import { Sparkles } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <span className="font-display text-2xl font-semibold text-foreground">
            Bloom
          </span>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a href="#produtos" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Produtos
          </a>
          <a href="#categorias" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Categorias
          </a>
          <a href="#sobre" className="font-body text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
            Sobre
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
