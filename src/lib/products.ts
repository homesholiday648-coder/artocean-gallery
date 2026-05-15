import single from "@/assets/product-single.jpg";
import couple from "@/assets/product-couple.jpg";
import family from "@/assets/product-family.jpg";
import action from "@/assets/product-action.jpg";
import group from "@/assets/product-group.jpg";
import painting from "@/assets/product-painting.jpg";
import calligraphy from "@/assets/product-calligraphy.jpg";
import sketch from "@/assets/product-sketch.jpg";
import realA from "@/assets/real-a.jpg";
import realB from "@/assets/real-b.jpg";
import realC from "@/assets/real-c.jpg";
import realCoupleRed from "@/assets/real-couple-red.jpg";
import realCoupleTrad from "@/assets/real-couple-traditional.jpg";
import realTrio from "@/assets/real-trio-figures.jpg";
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
  // --- Extended catalogue for category carousels ---
  // Single Mini Sculpture
  { id: "s1", slug: "single-classic", title: "Single — Classic Pose", category: "Single", price: 49, image: single, rating: 4.9, description: "A single figurine in our signature classic pose, hand-sculpted in our studio." },
  { id: "s2", slug: "single-bride", title: "Single — Bridal Edition", category: "Single", price: 69, image: realA, rating: 4.9, description: "A bridal figurine with delicate hand-painted embroidery and veil detail.", badge: "New" },
  { id: "s3", slug: "single-traditional", title: "Single — Traditional Attire", category: "Single", price: 65, image: realB, rating: 4.8, description: "Hand-sculpted figurine in heritage attire, painted with intricate motifs." },
  { id: "s4", slug: "single-portrait", title: "Single — Portrait Edition", category: "Single", price: 59, image: realC, rating: 4.9, description: "A personal figurine sculpted from your reference photo." },
  { id: "s5", slug: "single-modern", title: "Single — Modern Muse", category: "Single", price: 55, image: single, rating: 4.7, description: "A contemporary single figurine on a minimalist acrylic base." },
  { id: "s6", slug: "single-dancer", title: "Single — Dancer", category: "Single", price: 75, image: realA, rating: 4.9, description: "A dancer in motion, sculpted with flowing fabric detail." },
  { id: "s7", slug: "single-heritage", title: "Single — Heritage", category: "Single", price: 79, image: realB, rating: 4.8, description: "Heritage edition with traditional hand-stitched mini garment." },

  // Couple Sculpture
  { id: "c1", slug: "couple-classic", title: "Couple — Quiet Embrace", category: "Couple", price: 89, image: couple, rating: 5.0, description: "Two figures, one quiet embrace — sculpted from your photo.", badge: "Bestseller" },
  { id: "c2", slug: "couple-traditional", title: "Couple — Traditional Wedding", category: "Couple", price: 149, image: realCoupleTrad, rating: 4.9, description: "Bespoke wedding couple in traditional attire with hand-painted embroidery." },
  { id: "c3", slug: "couple-red", title: "Couple — Red Heritage", category: "Couple", price: 159, image: realCoupleRed, rating: 5.0, description: "A wedding couple in vivid red heritage garments, hand-finished." },
  { id: "c4", slug: "couple-modern", title: "Couple — Modern Romance", category: "Couple", price: 99, image: action, rating: 4.8, description: "A contemporary couple, sculpted in a tender pose on a custom base." },
  { id: "c5", slug: "couple-anniversary", title: "Couple — Anniversary Edition", category: "Couple", price: 129, image: couple, rating: 4.9, description: "A keepsake to mark a milestone — personalised with your details.", badge: "Limited" },
  { id: "c6", slug: "couple-engagement", title: "Couple — Engagement", category: "Couple", price: 109, image: realCoupleTrad, rating: 4.9, description: "An engagement piece sculpted from your favourite photo." },
  { id: "c7", slug: "couple-walk", title: "Couple — Walking Together", category: "Couple", price: 119, image: action, rating: 4.8, description: "A walking couple — a quiet narrative captured in clay." },

  // Family Sculpture
  { id: "f1", slug: "family-of-three", title: "Family — Three", category: "Family", price: 199, image: family, rating: 4.9, description: "Family of three, individually sculpted on one acrylic base.", badge: "Heirloom" },
  { id: "f2", slug: "family-of-four", title: "Family — Four", category: "Family", price: 229, image: family, rating: 4.9, description: "Family of four — every figure individually sculpted by hand." },
  { id: "f3", slug: "family-of-five", title: "Family — Five", category: "Family", price: 259, image: family, rating: 4.9, description: "A heirloom family of five, with custom themed base." },
  { id: "f4", slug: "family-trio-friends", title: "Family — Friends Trio", category: "Family", price: 169, image: realTrio, rating: 4.8, description: "A trio set on a green textured base — celebrate your circle." },
  { id: "f5", slug: "family-extended", title: "Family — Extended", category: "Family", price: 319, image: family, rating: 4.9, description: "Custom extended family group — sized to your story." },
  { id: "f6", slug: "family-grandparents", title: "Family — Grandparents", category: "Family", price: 219, image: family, rating: 4.9, description: "An heirloom honouring grandparents — hand-painted with care." },

  // Sketches
  { id: "k1", slug: "sketch-graphite", title: "Sketch — Graphite Portrait", category: "Sketch", price: 45, image: sketch, rating: 4.8, description: "A soulful graphite portrait drawn from your photograph." },
  { id: "k2", slug: "sketch-charcoal", title: "Sketch — Charcoal Study", category: "Sketch", price: 55, image: sketch, rating: 4.8, description: "A bold charcoal portrait on archival paper." },
  { id: "k3", slug: "sketch-couple", title: "Sketch — Couple", category: "Sketch", price: 75, image: sketch, rating: 4.9, description: "A couple sketch in graphite — soft and intimate." },
  { id: "k4", slug: "sketch-family", title: "Sketch — Family", category: "Sketch", price: 95, image: sketch, rating: 4.9, description: "A family sketch — every face drawn from your reference photos." },

  // Oil Paintings
  { id: "o1", slug: "oil-earthen-abstract", title: "Oil — Earthen Abstract", category: "Oil Painting", price: 220, image: painting, rating: 4.9, description: "Hand-mixed pigments on linen — a study of warm earth and soft blossom.", badge: "New" },
  { id: "o2", slug: "oil-soft-bloom", title: "Oil — Soft Bloom", category: "Oil Painting", price: 180, image: painting, rating: 4.7, description: "A small painterly study in pink and blue." },
  { id: "o3", slug: "oil-portrait", title: "Oil — Portrait Commission", category: "Oil Painting", price: 480, image: painting, rating: 5.0, description: "A bespoke oil portrait commission, painted from your photograph." },
  { id: "o4", slug: "oil-landscape", title: "Oil — Coastal Landscape", category: "Oil Painting", price: 320, image: painting, rating: 4.8, description: "A coastal landscape in deep blues and warm pinks." },
  { id: "o5", slug: "oil-still-life", title: "Oil — Still Life", category: "Oil Painting", price: 260, image: painting, rating: 4.8, description: "A quiet still life painted with warm light and soft shadow." },
];

export const productById = (id: string) => products.find((p) => p.id === id);
export const productBySlug = (s: string) => products.find((p) => p.slug === s);
