import skincareSerum from "@/assets/skincare-serum.jpg";
import faceCream from "@/assets/face-cream.jpg";
import hairOil from "@/assets/hair-oil.jpg";
import bodyLotion from "@/assets/body-lotion.jpg";
import lipOil from "@/assets/lip-oil.jpg";
import faceRoller from "@/assets/face-roller.jpg";

export interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  category: string;
  image: string;
  link: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Sérum Vitamina C",
    description: "Sérum facial iluminador com vitamina C pura para uma pele radiante e uniforme.",
    price: "R$ 89,90",
    category: "Skincare",
    image: skincareSerum,
    link: "/produtos/1",
  },
  {
    id: 2,
    name: "Creme Hidratante Facial",
    description: "Hidratação profunda com ácido hialurônico para todos os tipos de pele.",
    price: "R$ 129,00",
    category: "Skincare",
    image: faceCream,
    link: "/produtos/2",
  },
  {
    id: 3,
    name: "Óleo Capilar Reparador",
    description: "Óleo nutritivo com argan e macadâmia para cabelos sedosos e brilhantes.",
    price: "R$ 75,00",
    category: "Cabelo",
    image: hairOil,
    link: "/produtos/3",
  },
  {
    id: 4,
    name: "Loção Corporal Nutritiva",
    description: "Loção corporal com manteiga de karité para pele macia e perfumada.",
    price: "R$ 59,90",
    category: "Corpo",
    image: bodyLotion,
    link: "/produtos/4",
  },
  {
    id: 5,
    name: "Lip Oil Hidratante",
    description: "Óleo labial com vitamina E para lábios macios e com brilho natural.",
    price: "R$ 45,00",
    category: "Maquiagem",
    image: lipOil,
    link: "/produtos/5",
  },
  {
    id: 6,
    name: "Kit Jade Roller & Gua Sha",
    description: "Kit de massagem facial com pedra jade para drenagem e relaxamento.",
    price: "R$ 99,00",
    category: "Acessórios",
    image: faceRoller,
    link: "/produtos/6",
  },
];

export const categories = ["Todos", "Skincare", "Cabelo", "Corpo", "Maquiagem", "Acessórios"];
