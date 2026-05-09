import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, X } from "lucide-react";
import { Logo } from "./Logo";
import { useStore } from "@/lib/store";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/custom", label: "Customize" },
  { to: "/blog", label: "Stories" },
  { to: "/contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const cart = useStore((s) => s.cart);
  const wishlist = useStore((s) => s.wishlist);
  const theme = useStore((s) => s.theme);
  const toggleTheme = useStore((s) => s.toggleTheme);
  const { location } = useRouterState();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [location.pathname]);

  // sync theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const cartCount = cart.reduce((a, b) => a + b.qty, 0);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div
          className={`flex items-center justify-between rounded-full px-4 py-2 transition-all duration-500 ${
            scrolled ? "glass shadow-soft" : "bg-transparent"
          }`}
        >
          <Link to="/" className="shrink-0">
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative text-sm font-medium text-foreground/80 transition hover:text-foreground"
                activeProps={{ className: "text-foreground" }}
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-vandyke transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              aria-label="Toggle theme"
              onClick={toggleTheme}
              className="rounded-full p-2 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
            <Link
              to="/shop"
              aria-label="Search"
              className="hidden rounded-full p-2 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground sm:block"
            >
              <Search size={18} />
            </Link>
            <Link
              to="/cart"
              aria-label="Wishlist"
              className="relative rounded-full p-2 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
            >
              <Heart size={18} />
              {wishlist.length > 0 && (
                <span className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-accent px-1 text-[10px] font-semibold text-accent-foreground">
                  {wishlist.length}
                </span>
              )}
            </Link>
            <Link
              to="/cart"
              aria-label="Cart"
              className="relative rounded-full p-2 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground"
            >
              <ShoppingBag size={18} />
              {cartCount > 0 && (
                <motion.span
                  key={cartCount}
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="absolute -right-0.5 -top-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-secondary px-1 text-[10px] font-semibold text-secondary-foreground"
                >
                  {cartCount}
                </motion.span>
              )}
            </Link>
            <button
              aria-label="Menu"
              onClick={() => setOpen(true)}
              className="rounded-full p-2 text-foreground/80 transition hover:bg-foreground/5 hover:text-foreground md:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between p-6">
              <Logo />
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-full p-2 hover:bg-foreground/5"
              >
                <X size={22} />
              </button>
            </div>
            <nav className="flex flex-col items-center gap-6 px-8 pt-10">
              {links.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: i * 0.06 }}
                >
                  <Link
                    to={l.to}
                    className="font-display text-4xl font-light tracking-tight text-foreground"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
