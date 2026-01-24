import Footer from "@/components/Footer";
import Header from "@/components/Header";

const ProductsFallback = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 py-16 md:py-24">
        <div className="mx-auto max-w-2xl rounded-3xl bg-card p-10 text-center shadow-card">
          <p className="font-body text-sm font-medium uppercase tracking-widest text-accent">
            Em construção
          </p>
          <h1 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-4xl">
            Estamos preparando os detalhes deste produto
          </h1>
          <p className="mt-4 font-body text-base text-muted-foreground">
            Em breve você encontrará informações completas, benefícios e disponibilidade.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="/#produtos"
              className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 font-body text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Voltar para produtos
            </a>
            <a
              href="/"
              className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 font-body text-sm font-medium text-foreground transition-colors hover:bg-muted"
            >
              Ir para início
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsFallback;
