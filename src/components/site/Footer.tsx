import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-border/60 bg-card noise">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-20 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
            Turning memories into timeless art. Handmade sculptures, paintings &amp;
            personalised artworks crafted with passion in our studio and shipped worldwide.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-8 flex max-w-sm overflow-hidden rounded-full border border-border bg-background"
          >
            <input
              type="email"
              required
              placeholder="Your email"
              className="flex-1 bg-transparent px-5 py-3 text-sm outline-none placeholder:text-muted-foreground"
            />
            <button className="btn-shine bg-primary px-5 text-sm font-medium text-primary-foreground transition hover:opacity-90">
              Subscribe
            </button>
          </form>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold tracking-widest text-foreground">
            EXPLORE
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/shop" className="hover:text-foreground">Shop</Link></li>
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/custom" className="hover:text-foreground">Customize</Link></li>
            <li><Link to="/blog" className="hover:text-foreground">Stories</Link></li>
            <li><Link to="/contact" className="hover:text-foreground">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-display text-sm font-semibold tracking-widest text-foreground">
            CONNECT
          </h4>
          <div className="flex gap-3">
            <a
              href="https://www.instagram.com/artocean"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram size={16} />
            </a>
            <a
              href="https://wa.me/00000000000"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-accent hover:text-accent-foreground"
            >
              <MessageCircle size={16} />
            </a>
            <a
              href="mailto:hello@artocean.studio"
              aria-label="Email"
              className="grid h-10 w-10 place-items-center rounded-full border border-border transition hover:bg-accent hover:text-accent-foreground"
            >
              <Mail size={16} />
            </a>
          </div>
          <p className="mt-6 text-xs leading-relaxed text-muted-foreground">
            Worldwide shipping &middot;<br />Crafted in our studio<br />by Nuzhat Zaman
          </p>
        </div>
      </div>
      <div className="border-t border-border/60 py-6 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} ArtOcean by Nuzhat Zaman. All rights reserved.
      </div>
    </footer>
  );
}
