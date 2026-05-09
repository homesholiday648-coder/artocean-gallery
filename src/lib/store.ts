import { create } from "zustand";
import { persist } from "zustand/middleware";

export type Product = {
  id: string;
  slug: string;
  title: string;
  category: string;
  price: number;
  image: string;
  rating: number;
  description: string;
  badge?: string;
};

type CartItem = { id: string; qty: number };

type Store = {
  cart: CartItem[];
  wishlist: string[];
  theme: "light" | "dark";
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  toggleWish: (id: string) => void;
  toggleTheme: () => void;
};

export const useStore = create<Store>()(
  persist(
    (set) => ({
      cart: [],
      wishlist: [],
      theme: "light",
      addToCart: (id, qty = 1) =>
        set((s) => {
          const existing = s.cart.find((c) => c.id === id);
          if (existing) return { cart: s.cart.map((c) => (c.id === id ? { ...c, qty: c.qty + qty } : c)) };
          return { cart: [...s.cart, { id, qty }] };
        }),
      removeFromCart: (id) => set((s) => ({ cart: s.cart.filter((c) => c.id !== id) })),
      setQty: (id, qty) =>
        set((s) => ({ cart: s.cart.map((c) => (c.id === id ? { ...c, qty: Math.max(1, qty) } : c)) })),
      clearCart: () => set({ cart: [] }),
      toggleWish: (id) =>
        set((s) => ({
          wishlist: s.wishlist.includes(id) ? s.wishlist.filter((x) => x !== id) : [...s.wishlist, id],
        })),
      toggleTheme: () =>
        set((s) => {
          const next = s.theme === "light" ? "dark" : "light";
          if (typeof document !== "undefined") {
            document.documentElement.classList.toggle("dark", next === "dark");
          }
          return { theme: next };
        }),
    }),
    { name: "artocean-store" }
  )
);
