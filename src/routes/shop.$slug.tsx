import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Heart, Plus, Star, Truck, Sparkles } from "lucide-react";
import { productBySlug, products } from "@/lib/products";
import { useStore } from "@/lib/store";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";

export const Route = createFileRoute("/shop/$slug")({
  loader: ({ params }) => {
    const product = productBySlug(params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.title} — ArtOcean` },
          { name: "description", content: loaderData.product.description },
          { property: "og:title", content: `${loaderData.product.title} — ArtOcean` },
          { property: "og:description", content: loaderData.product.description },
          { property: "og:image", content: loaderData.product.image },
        ]
      : [],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-[70vh] place-items-center pt-32 text-center">
      <div>
        <h1 className="font-display text-3xl">Artwork not found</h1>
        <Link to="/shop" className="mt-4 inline-flex text-sm underline">Back to shop</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-[70vh] place-items-center pt-32 text-center">
      <p>{error.message}</p>
    </div>
  ),
  component: ProductDetail,
});

function ProductDetail() {
  const { product } = Route.useLoaderData();
  const addToCart = useStore((s) => s.addToCart);
  const toggleWish = useStore((s) => s.toggleWish);
  const wished = useStore((s) => s.wishlist.includes(product.id));
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 3);

  return (
    <div className="pt-32">
      <div className="mx-auto max-w-7xl px-6">
        <Link to="/shop" className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
          <ArrowLeft size={14} /> Back to shop
        </Link>

        <div className="mt-10 grid gap-12 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-3xl bg-card"
          >
            <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
            <div className="absolute -inset-10 -z-10 rounded-full bg-accent/40 blur-3xl" />
          </motion.div>

          <div className="flex flex-col justify-center">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">{product.category}</span>
            <Reveal as="h1" className="mt-2 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              {product.title}
            </Reveal>
            <div className="mt-4 flex items-center gap-3">
              <div className="flex gap-0.5 text-reseda">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} size={14} fill={i < Math.round(product.rating) ? "currentColor" : "none"} />
                ))}
              </div>
              <span className="text-xs text-muted-foreground">{product.rating} · 120 reviews</span>
            </div>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{product.description}</p>
            <div className="mt-8 font-display text-4xl font-semibold">${product.price}</div>

            <div className="mt-8 flex flex-wrap gap-3">
              <button
                onClick={() => { addToCart(product.id); toast.success("Added to cart"); }}
                className="btn-shine inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                <Plus size={15} /> Add to cart
              </button>
              <button
                onClick={() => toggleWish(product.id)}
                aria-label="Wishlist"
                className={`grid h-12 w-12 place-items-center rounded-full border border-border ${
                  wished ? "bg-accent text-accent-foreground" : "hover:bg-foreground/5"
                }`}
              >
                <Heart size={16} fill={wished ? "currentColor" : "none"} />
              </button>
            </div>

            <div className="mt-10 grid gap-3 sm:grid-cols-2">
              {[
                { i: <Truck size={15} />, t: "Worldwide shipping", d: "Carefully packed & insured" },
                { i: <Sparkles size={15} />, t: "Handmade", d: "One artist, every detail" },
              ].map((b) => (
                <div key={b.t} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-accent/50 text-vandyke">{b.i}</div>
                  <div>
                    <div className="text-sm font-medium">{b.t}</div>
                    <div className="text-xs text-muted-foreground">{b.d}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-32">
            <h2 className="mb-10 font-display text-3xl font-light">You may also love</h2>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.id} delay={i * 0.06}><ProductCard product={p} /></Reveal>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
