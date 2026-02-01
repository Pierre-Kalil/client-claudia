import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { useAppContent } from "@/hooks/use-app-content";
import { Skeleton } from "@/components/ui/skeleton";

const Index = () => {
  const { content, products, categories, loading, error } = useAppContent();
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter(product => product.category === activeCategory);

  if (loading) {
    return (
      <div className="min-h-screen bg-background">
        <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto flex h-16 items-center justify-between px-4">
            <div className="flex items-center gap-2">
              <Skeleton className="h-6 w-6 rounded-full" />
              <Skeleton className="h-6 w-32 md:w-40" />
            </div>
          </div>
        </header>

        <section className="relative overflow-hidden bg-hero-gradient py-20 md:py-32">
          <div className="container mx-auto px-4 text-center">
            <Skeleton className="mx-auto mt-6 h-10 w-5/6 max-w-2xl md:h-14" />
            <Skeleton className="mx-auto mt-3 h-10 w-4/6 max-w-xl md:h-14" />
            <Skeleton className="mx-auto mt-6 h-5 w-4/5 max-w-2xl md:h-6" />
            <Skeleton className="mx-auto mt-3 h-5 w-3/5 max-w-xl md:h-6" />
            <Skeleton className="mx-auto mt-8 h-12 w-44 rounded-full" />
          </div>
        </section>

        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4">
            <div className="mb-12 text-center">
              <Skeleton className="mx-auto mt-2 h-8 w-2/3 max-w-md md:h-10" />
            </div>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }).map((_, index) => (
                <div key={`product-skeleton-${index}`} className="rounded-lg bg-card shadow-card">
                  <Skeleton className="aspect-square w-full rounded-none" />
                  <div className="p-5">
                    <Skeleton className="h-6 w-2/3" />
                    <Skeleton className="mt-3 h-4 w-full" />
                    <Skeleton className="mt-2 h-4 w-5/6" />
                    <div className="mt-4 flex items-center justify-between">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-4 w-20" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <footer className="border-t border-border bg-secondary/50 py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center gap-2">
                <Skeleton className="h-5 w-5 rounded-full" />
                <Skeleton className="h-5 w-28" />
              </div>
              <Skeleton className="mt-4 h-4 w-4/5 max-w-md" />
              <Skeleton className="mt-2 h-4 w-3/5 max-w-md" />
              <Skeleton className="mt-6 h-4 w-48" />
              <Skeleton className="mt-4 h-3 w-40" />
            </div>
          </div>
        </footer>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header brandName={content["header.brand.name"] ?? "-"} />
      <Hero
        titleLine1={content["hero.title.line_1"] ?? "-"}
        titleLine2={content["hero.title.line_2"] ?? "-"}
        description={content["hero.description"] ?? "-"}
        ctaLabel={content["hero.cta.primary"] ?? "-"}
      />

      {/* Products Section */}
      <section id="produtos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              {content["products.section.title"] ?? "-"}
            </h2>
            {error && (
              <p className="mt-3 font-body text-sm text-destructive">
                {error}
              </p>
            )}
          </div>

          {/* Products Grid */}
          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, index) => (
              <div
                key={product.id}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <ProductCard
                  image={product.image}
                  name={product.name}
                  description={product.description}
                  price={product.price}
                  link={product.link}
                  category={product.category}
                  ctaLabel={content["product_card.cta.view"] ?? "-"}
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-body text-lg text-muted-foreground">
                {content["products.empty_state"] ?? "-"}
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer
        brandName={content["footer.brand.name"] ?? "-"}
        description={content["footer.description"] ?? "-"}
        loveLine={content["footer.love_line"] ?? "-"}
        year={2026}
      />
    </div>
  );
};

export default Index;
