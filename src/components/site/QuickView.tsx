import { AnimatePresence, motion } from "framer-motion";
import { X, Plus, Heart } from "lucide-react";
import { useStore, type Product } from "@/lib/store";
import { toast } from "sonner";
import { Link } from "@tanstack/react-router";

export function QuickView({ product, onClose }: { product: Product | null; onClose: () => void }) {
  const addToCart = useStore((s) => s.addToCart);
  const toggleWish = useStore((s) => s.toggleWish);
  const wished = useStore((s) => product ? s.wishlist.includes(product.id) : false);

  return (
    <AnimatePresence>
      {product && (
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] grid place-items-center bg-vandyke/40 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.94, y: 24, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.94, y: 24, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            onClick={(e) => e.stopPropagation()}
            className="relative grid w-full max-w-4xl gap-0 overflow-hidden rounded-2xl bg-background shadow-elegant md:grid-cols-2"
          >
            <button
              onClick={onClose}
              aria-label="Close"
              className="absolute right-3 top-3 z-10 grid h-9 w-9 place-items-center rounded-full bg-isabelline/80 text-vandyke backdrop-blur hover:bg-isabelline"
            >
              <X size={16} />
            </button>
            <div className="aspect-square overflow-hidden bg-muted">
              <img src={product.image} alt={product.title} className="h-full w-full object-cover" />
            </div>
            <div className="flex flex-col gap-4 p-8">
              <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-muted-foreground">
                {product.category}
              </span>
              <h3 className="font-display text-3xl font-medium">{product.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{product.description}</p>
              <div className="mt-2 font-display text-3xl font-semibold">${product.price}</div>
              <div className="mt-4 flex gap-3">
                <button
                  onClick={() => { addToCart(product.id); toast.success("Added to cart"); }}
                  className="btn-shine flex flex-1 items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:opacity-90"
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
              <Link
                to="/shop/$slug"
                params={{ slug: product.slug }}
                onClick={onClose}
                className="mt-1 text-center text-xs uppercase tracking-widest text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              >
                View full details →
              </Link>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
