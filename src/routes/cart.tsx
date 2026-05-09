import { createFileRoute, Link } from "@tanstack/react-router";
import { useStore } from "@/lib/store";
import { productById } from "@/lib/products";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your Cart — ArtOcean" }, { name: "description", content: "Review your selected artworks and check out securely." }] }),
  component: CartPage,
});

function CartPage() {
  const cart = useStore((s) => s.cart);
  const setQty = useStore((s) => s.setQty);
  const removeFromCart = useStore((s) => s.removeFromCart);
  const clearCart = useStore((s) => s.clearCart);
  const [checkout, setCheckout] = useState(false);

  const items = cart.map((c) => ({ ...c, product: productById(c.id)! })).filter((i) => i.product);
  const subtotal = items.reduce((a, b) => a + b.product.price * b.qty, 0);
  const shipping = subtotal > 0 ? 25 : 0;
  const total = subtotal + shipping;

  return (
    <div className="pt-32">
      <div className="mx-auto max-w-6xl px-6">
        <h1 className="font-display text-5xl font-light tracking-tight">Your Cart</h1>
        <p className="mt-2 text-sm text-muted-foreground">Carefully chosen by you.</p>

        {items.length === 0 ? (
          <div className="mt-16 grid place-items-center rounded-2xl border border-dashed border-border p-20 text-center">
            <ShoppingBag size={36} className="text-muted-foreground" />
            <h2 className="mt-4 font-display text-2xl">Your cart is empty</h2>
            <p className="mt-2 text-sm text-muted-foreground">Discover handmade pieces from the studio.</p>
            <Link to="/shop" className="mt-6 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground">
              Visit shop
            </Link>
          </div>
        ) : (
          <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_360px]">
            <div className="space-y-4">
              <AnimatePresence>
                {items.map((i) => (
                  <motion.div
                    key={i.id}
                    layout
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="flex gap-5 rounded-2xl border border-border bg-card p-4"
                  >
                    <Link to="/shop/$slug" params={{ slug: i.product.slug }} className="block h-28 w-28 overflow-hidden rounded-xl bg-muted">
                      <img src={i.product.image} alt={i.product.title} className="h-full w-full object-cover" />
                    </Link>
                    <div className="flex flex-1 flex-col">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <div className="text-[10px] uppercase tracking-widest text-muted-foreground">{i.product.category}</div>
                          <h3 className="font-display text-lg">{i.product.title}</h3>
                        </div>
                        <button onClick={() => removeFromCart(i.id)} aria-label="Remove" className="text-muted-foreground hover:text-destructive">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="mt-auto flex items-center justify-between pt-3">
                        <div className="flex items-center gap-1 rounded-full border border-border">
                          <button onClick={() => setQty(i.id, i.qty - 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-foreground/5"><Minus size={13} /></button>
                          <span className="w-6 text-center text-sm">{i.qty}</span>
                          <button onClick={() => setQty(i.id, i.qty + 1)} className="grid h-8 w-8 place-items-center rounded-full hover:bg-foreground/5"><Plus size={13} /></button>
                        </div>
                        <span className="font-display text-lg font-semibold">${i.product.price * i.qty}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>

            <aside className="h-fit rounded-2xl border border-border bg-card p-6">
              <h3 className="font-display text-xl font-medium">Summary</h3>
              <div className="mt-4 space-y-2 text-sm">
                <div className="flex justify-between text-muted-foreground"><span>Subtotal</span><span>${subtotal}</span></div>
                <div className="flex justify-between text-muted-foreground"><span>Worldwide shipping</span><span>${shipping}</span></div>
                <div className="my-3 h-px bg-border" />
                <div className="flex justify-between font-display text-lg font-semibold"><span>Total</span><span>${total}</span></div>
              </div>
              <button
                onClick={() => { setCheckout(true); toast.success("Order placed (demo)"); clearCart(); }}
                className="btn-shine mt-6 w-full rounded-full bg-primary py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90"
              >
                Checkout
              </button>
              <Link to="/shop" className="mt-3 block text-center text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">
                Continue shopping
              </Link>
            </aside>
          </div>
        )}

        <AnimatePresence>
          {checkout && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 grid place-items-center bg-vandyke/40 p-4 backdrop-blur"
              onClick={() => setCheckout(false)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-md rounded-2xl bg-background p-8 text-center shadow-elegant"
              >
                <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">✓</div>
                <h3 className="mt-5 font-display text-2xl">Thank you</h3>
                <p className="mt-2 text-sm text-muted-foreground">Your order has been received. We’ll be in touch shortly.</p>
                <button onClick={() => setCheckout(false)} className="mt-6 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground">Close</button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
