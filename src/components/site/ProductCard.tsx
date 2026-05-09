import { Link } from "@tanstack/react-router";
import { Heart, Eye, Plus, Star } from "lucide-react";
import { motion } from "framer-motion";
import { useStore, type Product } from "@/lib/store";
import { toast } from "sonner";
import { useRef, useState } from "react";

export function ProductCard({ product, onQuickView }: { product: Product; onQuickView?: (p: Product) => void }) {
  const addToCart = useStore((s) => s.addToCart);
  const toggleWish = useStore((s) => s.toggleWish);
  const wished = useStore((s) => s.wishlist.includes(product.id));
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });

  function onMove(e: React.MouseEvent) {
    const el = ref.current; if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    setTilt({ rx: -py * 8, ry: px * 10 });
  }
  function reset() { setTilt({ rx: 0, ry: 0 }); }

  return (
    <motion.div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      style={{ transform: `perspective(1000px) rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg)` }}
      className="group relative flex flex-col overflow-hidden rounded-2xl bg-card transition-shadow duration-500 hover:shadow-elegant"
    >
      <Link to="/shop/$slug" params={{ slug: product.slug }} className="relative block aspect-[4/5] overflow-hidden bg-muted">
        <motion.img
          src={product.image}
          alt={product.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
        />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-vandyke/90 px-3 py-1 text-[10px] font-semibold tracking-widest text-isabelline backdrop-blur">
            {product.badge.toUpperCase()}
          </span>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-vandyke/40 via-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <div className="absolute right-3 top-3 flex translate-y-[-6px] flex-col gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <button
            onClick={(e) => { e.preventDefault(); toggleWish(product.id); }}
            aria-label="Wishlist"
            className={`grid h-9 w-9 place-items-center rounded-full backdrop-blur transition ${
              wished ? "bg-accent text-accent-foreground" : "bg-isabelline/80 text-vandyke hover:bg-isabelline"
            }`}
          >
            <Heart size={15} fill={wished ? "currentColor" : "none"} />
          </button>
          {onQuickView && (
            <button
              onClick={(e) => { e.preventDefault(); onQuickView(product); }}
              aria-label="Quick view"
              className="grid h-9 w-9 place-items-center rounded-full bg-isabelline/80 text-vandyke backdrop-blur hover:bg-isabelline"
            >
              <Eye size={15} />
            </button>
          )}
        </div>
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
            {product.category}
          </span>
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <Star size={12} fill="currentColor" className="text-reseda" />
            {product.rating.toFixed(1)}
          </span>
        </div>
        <h3 className="font-display text-lg font-medium text-foreground">{product.title}</h3>
        <div className="mt-auto flex items-center justify-between pt-3">
          <span className="font-display text-xl font-semibold text-foreground">${product.price}</span>
          <button
            onClick={() => { addToCart(product.id); toast.success(`${product.title} added to cart`); }}
            className="btn-shine flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground transition hover:opacity-90"
          >
            <Plus size={14} /> Add
          </button>
        </div>
      </div>
    </motion.div>
  );
}
