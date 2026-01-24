import { ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  link: string;
  category: string;
}

const ProductCard = ({ image, name, description, price, link, category }: ProductCardProps) => {
  const isExternal = link.startsWith("http");
  const cardContent = (
    <div className="relative overflow-hidden rounded-lg bg-card shadow-card transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-secondary">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          
          {/* Category Badge */}
          <span className="absolute left-3 top-3 rounded-full bg-card/90 px-3 py-1 font-body text-xs font-medium text-foreground backdrop-blur-sm">
            {category}
          </span>
          
          {/* External Link Icon */}
          {isExternal && (
            <div className="absolute right-3 top-3 rounded-full bg-primary p-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
              <ExternalLink className="h-4 w-4 text-primary-foreground" />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display text-xl font-medium text-foreground transition-colors group-hover:text-primary">
            {name}
          </h3>
          <p className="mt-2 font-body text-sm text-muted-foreground line-clamp-2">
            {description}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-display text-lg font-semibold text-primary">
              {price}
            </span>
            <span className="font-body text-xs font-medium text-accent">
              Ver produto →
            </span>
          </div>
        </div>
    </div>
  );

  if (isExternal) {
    return (
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="group block"
      >
        {cardContent}
      </a>
    );
  }

  return (
    <Link to={link} className="group block">
      {cardContent}
    </Link>
  );
};

export default ProductCard;
