import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CategoryFilter from "@/components/CategoryFilter";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import { products, categories } from "@/data/products";

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = activeCategory === "Todos"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />

      {/* Products Section */}
      <section id="produtos" className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Section Header */}
          <div className="mb-12 text-center">
            <span className="font-body text-sm font-medium uppercase tracking-widest text-accent">
              Curadoria Especial
            </span>
            <h2 className="mt-2 font-display text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              Produtos Selecionados
            </h2>
            <p className="mx-auto mt-4 max-w-xl font-body text-muted-foreground">
              Escolhidos a dedo para proporcionar os melhores resultados para sua rotina de autocuidado.
            </p>
          </div>

          {/* Category Filter */}
          <div id="categorias" className="mb-12">
            <CategoryFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
          </div>

          {/* Products Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                />
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center">
              <p className="font-body text-lg text-muted-foreground">
                Nenhum produto encontrado nesta categoria.
              </p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
