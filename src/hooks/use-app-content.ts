import { useEffect, useMemo, useState } from "react";
import { products as baseProducts, Product } from "@/data/products";
import { ContentMap, fetchSheetValues, normalizeSheetValues } from "@/lib/sheets";

type UseAppContentState = {
  content: ContentMap;
  products: Product[];
  categories: string[];
  loading: boolean;
  error: string | null;
};

const applyContentToProducts = (content: ContentMap, products: Product[]): Product[] => {
  return products.map((product) => {
    const prefix = `products.data.${product.id}.`;
    const name = content[`${prefix}name`] ?? product.name;
    const description = content[`${prefix}description`] ?? product.description;
    const price = content[`${prefix}price`] ?? product.price;
    const category = content[`${prefix}category`] ?? product.category;

    return {
      ...product,
      name,
      description,
      price,
      category,
    };
  });
};

const buildCategories = (products: Product[]): string[] => {
  const seen = new Set<string>();
  const list: string[] = ["Todos"];

  products.forEach((product) => {
    if (!seen.has(product.category)) {
      seen.add(product.category);
      list.push(product.category);
    }
  });

  return list;
};

export const useAppContent = (): UseAppContentState => {
  const [content, setContent] = useState<ContentMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    const load = async () => {
      try {
        const values = await fetchSheetValues();
        const map = normalizeSheetValues(values);

        if (isMounted) {
          setContent(map);
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : "Unknown error");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    load();

    return () => {
      isMounted = false;
    };
  }, []);

  const products = useMemo(() => applyContentToProducts(content, baseProducts), [content]);
  const categories = useMemo(() => buildCategories(products), [products]);

  return {
    content,
    products,
    categories,
    loading,
    error,
  };
};
