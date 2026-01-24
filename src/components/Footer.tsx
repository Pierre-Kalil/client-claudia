import { Heart, Sparkles } from "lucide-react";

const Footer = () => {
  return (
    <footer id="sobre" className="border-t border-border bg-secondary/50 py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-primary" />
            <span className="font-display text-xl font-semibold text-foreground">
              Bloom
            </span>
          </div>
          
          <p className="mt-4 max-w-md font-body text-sm text-muted-foreground">
            Curadoria de produtos de autocuidado selecionados especialmente para você. 
            Todos os links direcionam para lojas parceiras de confiança.
          </p>

          <div className="mt-6 flex items-center gap-1 font-body text-sm text-muted-foreground">
            Feito com <Heart className="h-4 w-4 text-primary" /> para mulheres incríveis
          </div>

          <p className="mt-4 font-body text-xs text-muted-foreground/70">
            © 2026 Bloom. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
