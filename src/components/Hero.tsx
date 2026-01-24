import { Heart, Sparkles, Star } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
      {/* Decorative Elements */}
      <div className="absolute left-10 top-20 animate-float opacity-30">
        <Sparkles className="h-8 w-8 text-primary" />
      </div>
      <div className="absolute right-20 top-32 animate-float opacity-20" style={{ animationDelay: "1s" }}>
        <Heart className="h-6 w-6 text-rose" />
      </div>
      <div className="absolute bottom-20 left-1/4 animate-float opacity-25" style={{ animationDelay: "2s" }}>
        <Star className="h-5 w-5 text-gold" />
      </div>

      <div className="container mx-auto px-4 text-center">
        <span className="inline-block rounded-full bg-primary/10 px-4 py-1.5 font-body text-sm font-medium text-primary">
          ✨ Curadoria especial para você
        </span>
        
        <h1 className="mt-6 font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl lg:text-7xl">
          Descubra o melhor do
          <span className="block text-primary">autocuidado feminino</span>
        </h1>
        
        <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-muted-foreground md:text-xl">
          Uma seleção especial de produtos para skincare, cabelos e corpo. 
          Curadoria feita com carinho para realçar sua beleza natural.
        </p>

        <a
          href="#produtos"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-button-gradient px-8 py-4 font-body text-sm font-semibold text-primary-foreground shadow-soft transition-all duration-300 hover:shadow-hover hover:-translate-y-0.5"
        >
          <Sparkles className="h-4 w-4" />
          Explorar Produtos
        </a>
      </div>
    </section>
  );
};

export default Hero;
