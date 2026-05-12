import single from "@/assets/product-single.jpg";
import couple from "@/assets/product-couple.jpg";
import family from "@/assets/product-family.jpg";
import action from "@/assets/product-action.jpg";
import group from "@/assets/product-group.jpg";
import painting from "@/assets/product-painting.jpg";
import calligraphy from "@/assets/product-calligraphy.jpg";
import sketch from "@/assets/product-sketch.jpg";
import type { Product } from "./store";

export const CATEGORIES = [
  "All",
  "Sculpture",
  "Painting",
  "Calligraphy",
  "Sketch",
] as const;

export const products: Product[] = [
  {
    id: "p1",
    slug: "single-mini-sculpture",
    title: "Single Mini Sculpture",
    category: "Sculpture",
    price: 49,
    image: single,
    rating: 4.9,
    description:
      "A delicate handcrafted figurine — sculpted to capture a single soul in stillness. Each piece is shaped, painted and hand-finished in our studio from your reference photo.",
    badge: "Bestseller",
  },
  {
    id: "p2",
    slug: "couple-mini-sculpture",
    title: "Couple Mini Sculpture",
    category: "Sculpture",
    price: 89,
    image: couple,
    rating: 5.0,
    description: "Two figures, one quiet embrace. A handmade keepsake of love sculpted in clay from your photo.",
    badge: "Limited",
  },
  {
    id: "p3",
    slug: "family-sculpture",
    title: "Family Sculpture",
    category: "Sculpture",
    price: 199,
    image: family,
    rating: 4.9,
    description: "A heirloom for your whole family — every figure individually sculpted and unified on a single acrylic base.",
    badge: "Heirloom",
  },
  {
    id: "p4",
    slug: "wedding-couple-sculpture",
    title: "Wedding Couple — Heritage",
    category: "Sculpture",
    price: 149,
    image: action,
    rating: 4.9,
    description: "A bespoke wedding couple in traditional attire, hand-painted with intricate embroidery detail.",
  },
  {
    id: "p9",
    slug: "group-friends-sculpture",
    title: "Group / Friends Sculpture",
    category: "Sculpture",
    price: 169,
    image: group,
    rating: 4.8,
    description: "Celebrate your circle — a group set of figurines on a custom themed base, made entirely by hand.",
  },
  {
    id: "p5",
    slug: "abstract-handmade-painting",
    title: "Earthen Abstract — Handmade Painting",
    category: "Painting",
    price: 220,
    image: painting,
    rating: 4.9,
    description: "Hand-mixed pigments on linen. A study of warm earth and soft blossom.",
    badge: "New",
  },
  {
    id: "p6",
    slug: "calligraphy-art",
    title: "Calligraphy Art",
    category: "Calligraphy",
    price: 35,
    image: calligraphy,
    rating: 4.9,
    description: "Hand-inked calligraphy on archival paper, framed in matte black wood.",
  },
  {
    id: "p7",
    slug: "sketch-portrait",
    title: "Sketch Portrait",
    category: "Sketch",
    price: 45,
    image: sketch,
    rating: 4.8,
    description: "A graphite portrait drawn from your photograph — soft, soulful, and one of a kind.",
  },
  {
    id: "p8",
    slug: "soft-bloom-painting",
    title: "Soft Bloom — Handmade Painting",
    category: "Painting",
    price: 70,
    image: painting,
    rating: 4.6,
    description: "A small, painterly study in pink lavender and reseda green.",
  },
];

export const productById = (id: string) => products.find((p) => p.id === id);
export const productBySlug = (s: string) => products.find((p) => p.slug === s);
