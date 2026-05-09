import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { ProductCard } from "@/components/site/ProductCard";
import { QuickView } from "@/components/site/QuickView";
import { CATEGORIES, products } from "@/lib/products";
import { Reveal } from "@/components/site/Reveal";
import type { Product } from "@/lib/store";

export const Route = createFileRoute("/shop")({
  head: () => ({
    meta: [
      { title: "Shop — ArtOcean Handmade Art" },
      { name: "description", content: "Explore handmade sculptures, paintings, calligraphy and sketch portraits by ArtOcean." },
      { property: "og:title", content: "Shop — ArtOcean Handmade Art" },
      { property: "og:description", content: "Handmade sculptures, paintings, calligraphy and sketches." },
    ],
  }),
  component: ShopPage,
});

function ShopPage() {
  const [cat, setCat] = useState<string>("All");
  const [q, setQ] = useState("");
  const [sort, setSort] = useState<"featured" | "low" | "high">("featured");
  const [quick, setQuick] = useState<Product | null>(null);

  const filtered = useMemo(() => {
    let list = products.filter((p) => (cat === "All" ? true : p.category === cat));
    if (q.trim()) {
      const t = q.trim().toLowerCase();
      list = list.filter((p) => p.title.toLowerCase().includes(t) || p.description.toLowerCase().includes(t));
    }
    if (sort === "low") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "high") list = [...list].sort((a, b) => b.price - a.price);
    return list;
  }, [cat, q, sort]);

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Shop</span>
          <Reveal as="h1" className="mt-3 font-display text-5xl font-light leading-tight tracking-tight sm:text-6xl">
            The ArtOcean gallery.
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-muted-foreground">
              Every piece is handmade in our studio and shipped worldwide.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 flex flex-col gap-4 rounded-2xl border border-border bg-card p-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-1 items-center gap-2 rounded-full border border-border bg-background px-4">
            <Search size={16} className="text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search artworks..."
              className="w-full bg-transparent py-2.5 text-sm outline-none placeholder:text-muted-foreground"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setCat(c)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition ${
                  cat === c
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-background text-foreground/70 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <SlidersHorizontal size={14} className="text-muted-foreground" />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as never)}
              className="rounded-full border border-border bg-background px-3 py-1.5 text-xs outline-none"
            >
              <option value="featured">Featured</option>
              <option value="low">Price ↑</option>
              <option value="high">Price ↓</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((p, i) => (
            <Reveal key={p.id} delay={Math.min(i, 8) * 0.04}>
              <ProductCard product={p} onQuickView={setQuick} />
            </Reveal>
          ))}
          {filtered.length === 0 && (
            <div className="col-span-full rounded-2xl border border-dashed border-border p-16 text-center text-muted-foreground">
              No artworks match your search.
            </div>
          )}
        </div>
      </section>

      <QuickView product={quick} onClose={() => setQuick(null)} />
    </div>
  );
}
