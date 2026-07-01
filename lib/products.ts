import type { Product } from "@/components/ui/ProductCard";

/**
 * The catalog shown in the landing-page dashboard preview.
 *
 * These are the real products from the reference screenshot. Each `image`
 * points at a file under `public/images/` — drop the exact product photo there
 * with the matching filename and it appears automatically. Until the file
 * exists, the card gracefully falls back to the emoji/gradient placeholder
 * (see components/ui/SmartImage.tsx), so nothing looks broken.
 */
const BASE_PRODUCTS: Product[] = [
  {
    title: "URO Probiotico Vaginal",
    emoji: "🌸",
    image: "/images/products-uro.jpg",
    stock: 4532,
    supplier: "Dropi",
    country: "Mexico",
    flag: "🇲🇽",
    price: "$5.450",
    sales: 554,
    trend: [3, 5, 4, 7, 6, 9, 8, 12, 11, 15, 17, 21],
    tone: "pink",
  },
  {
    title: "Pack 2 Cajas Mascarilla Naturaful",
    emoji: "✨",
    image: "/images/products-naturaful.jpg",
    stock: 4532,
    supplier: "Dropi",
    country: "Mexico",
    flag: "🇲🇽",
    price: "$5.450",
    sales: 554,
    trend: [3, 5, 4, 7, 6, 9, 8, 12, 11, 15, 17, 21],
    tone: "pink",
  },
  {
    title: "Alfombra Peluda 1.50 x 2mt",
    emoji: "🧶",
    image: "/images/products-alfombra.jpg",
    stock: 4532,
    supplier: "Dropi",
    country: "Mexico",
    flag: "🇲🇽",
    price: "$5.450",
    sales: 554,
    trend: [3, 5, 4, 7, 6, 9, 8, 12, 11, 15, 17, 21],
  },
  {
    title: "Espiral Panel de Boxeo",
    emoji: "🥊",
    image: "/images/products-boxeo.jpg",
    stock: 4532,
    supplier: "Dropi",
    country: "Mexico",
    flag: "🇲🇽",
    price: "$5.450",
    sales: 554,
    trend: [3, 5, 4, 7, 6, 9, 8, 12, 11, 15, 17, 21],
  },
  {
    title: "Python Gel",
    emoji: "🐍",
    image: "/images/products-python.jpg",
    stock: 4532,
    supplier: "Dropi",
    country: "Mexico",
    flag: "🇲🇽",
    price: "$5.450",
    sales: 554,
    trend: [3, 5, 4, 7, 6, 9, 8, 12, 11, 15, 17, 21],
  },
];

/**
 * The dashboard grid renders up to 10 cards (two rows of five). The reference
 * screenshot shows the same five products repeated across both rows, so we
 * duplicate the base set to fill the grid. Consumers key cards by index, so the
 * repeated titles are fine.
 */
export const PRODUCTS: Product[] = [...BASE_PRODUCTS, ...BASE_PRODUCTS];
