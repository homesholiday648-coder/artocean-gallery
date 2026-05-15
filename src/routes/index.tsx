import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import { ArrowRight, Heart, Instagram, MessageCircle, Sparkles, Star } from "lucide-react";
import hero from "@/assets/artist-hero.jpg";
import process from "@/assets/artist-portrait.jpg";
import imgSingle from "@/assets/product-single.jpg";
import imgCouple from "@/assets/product-couple.jpg";
import imgFamily from "@/assets/product-family.jpg";
import imgAction from "@/assets/product-action.jpg";
import imgGroup from "@/assets/product-group.jpg";
import imgPainting from "@/assets/product-painting.jpg";
import imgCalligraphy from "@/assets/product-calligraphy.jpg";
import imgSketch from "@/assets/product-sketch.jpg";
import { Particles } from "@/components/site/Particles";
import { Reveal, SplitWords } from "@/components/site/Reveal";
import { ProductCard } from "@/components/site/ProductCard";
import { CategoryRow } from "@/components/site/CategoryRow";
import { QuickView } from "@/components/site/QuickView";
import { products } from "@/lib/products";
import type { Product } from "@/lib/store";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ArtOcean — Turning Memories Into Timeless Art" },
      { name: "description", content: "Luxury handmade sculptures, paintings & personalised artworks crafted with passion. Shipped worldwide." },
      { property: "og:title", content: "ArtOcean — Turning Memories Into Timeless Art" },
      { property: "og:description", content: "Luxury handmade sculptures, paintings & personalised artworks." },
    ],
  }),
  component: HomePage,
});

const collections = [
  { title: "Single Mini Sculpture", desc: "A single soul, sculpted in stillness.", slug: "single-mini-sculpture", img: imgSingle },
  { title: "Couple Mini Sculpture", desc: "Two figures, one quiet embrace.", slug: "couple-mini-sculpture", img: imgCouple },
  { title: "Family Sculpture", desc: "An heirloom for generations.", slug: "family-sculpture", img: imgFamily },
  { title: "Wedding Couple", desc: "Heritage attire, hand-painted.", slug: "wedding-couple-sculpture", img: imgAction },
  { title: "Group / Friends", desc: "Celebrate your circle.", slug: "group-friends-sculpture", img: imgGroup },
  { title: "Handmade Paintings", desc: "Hand-mixed pigments on linen.", slug: "abstract-handmade-painting", img: imgPainting },
  { title: "Calligraphy Art", desc: "Ink, paper & silence.", slug: "calligraphy-art", img: imgCalligraphy },
  { title: "Sketch Art", desc: "Graphite portraits, soft and soulful.", slug: "sketch-portrait", img: imgSketch },
];

const steps = [
  { n: "01", t: "Share Your Idea", d: "Tell us your story, your people, your moment." },
  { n: "02", t: "We Design", d: "Our artist sketches a concept just for you." },
  { n: "03", t: "Handmade Crafting", d: "Sculpted, painted and finished by hand." },
  { n: "04", t: "Delivered Worldwide", d: "Carefully packed and shipped to your door." },
];

const testimonials = [
  { name: "Aisha R.", text: "It captured my parents perfectly. I cried when I unwrapped it.", rating: 5 },
  { name: "Daniel K.", text: "Museum-quality craftsmanship. The most thoughtful gift I’ve ever given.", rating: 5 },
  { name: "Sara M.", text: "Every detail of our family was honoured. Truly timeless.", rating: 5 },
];

function HomePage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const [quick, setQuick] = useState<Product | null>(null);
  const featured = products.slice(0, 4);

  const singles = products.filter((p) => p.category === "Single" || p.slug === "single-mini-sculpture");
  const couples = products.filter((p) => p.category === "Couple" || p.slug === "couple-mini-sculpture");
  const families = products.filter((p) => p.category === "Family" || ["family-sculpture", "group-friends-sculpture"].includes(p.slug));
  const sketches = products.filter((p) => p.category === "Sketch");
  const oils = products.filter((p) => p.category === "Oil Painting" || p.category === "Painting");

  return (
    <div className="overflow-hidden">
      {/* HERO */}
      <section ref={heroRef} className="relative min-h-[100svh] overflow-hidden bg-vandyke text-isabelline">
        {/* Banner image */}
        <motion.div style={{ y, scale }} className="absolute inset-0">
          <motion.img
            src={hero}
            alt="Handmade couple sculpture"
            className="h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.6, ease: "easeOut" }}
          />
          {/* Cinematic overlays for legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-vandyke/95 via-vandyke/70 to-vandyke/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-vandyke via-vandyke/40 to-transparent" />
        </motion.div>

        <Particles count={22} />

        <motion.div
          style={{ opacity }}
          className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-start justify-center px-6 pt-32 text-left md:pt-24"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-isabelline/25 bg-isabelline/10 px-4 py-1.5 text-[11px] font-medium uppercase tracking-[0.25em] text-isabelline backdrop-blur"
          >
            <Sparkles size={12} className="text-lavender" />
            Handmade Luxury Art
          </motion.div>

          <h1 className="max-w-3xl font-display text-5xl font-light leading-[1.05] tracking-tight text-balance text-isabelline sm:text-7xl md:text-[88px]">
            <SplitWords text="Turning Memories Into" />
            <br />
            <span className="font-script italic text-lavender" style={{ fontWeight: 400 }}>
              Timeless Art
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 max-w-xl text-base leading-relaxed text-isabelline/80 sm:text-lg"
          >
            Luxury handmade sculptures, paintings & personalised artwork crafted with passion —
            shipped worldwide.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-3"
          >
            <Link
              to="/shop"
              className="btn-shine group inline-flex items-center gap-2 rounded-full bg-isabelline px-7 py-3.5 text-sm font-medium text-vandyke transition hover:bg-lavender"
            >
              Explore Collection
              <ArrowRight size={16} className="transition group-hover:translate-x-1" />
            </Link>
            <Link
              to="/custom"
              className="inline-flex items-center gap-2 rounded-full border border-isabelline/30 bg-isabelline/5 px-7 py-3.5 text-sm font-medium text-isabelline backdrop-blur transition hover:bg-isabelline/15"
            >
              Customize Your Artwork
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-isabelline/60"
          >
            scroll to discover
          </motion.div>
        </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="border-y border-border/60 bg-card py-6">
        <div className="overflow-hidden">
          <div className="marquee font-display text-2xl tracking-tight text-muted-foreground sm:text-3xl">
            {[...Array(2)].flatMap((_, j) =>
              ["Sculptures", "Paintings", "Calligraphy", "Sketch", "Custom Couple", "Family Heirlooms", "Worldwide Shipping"].map((w, i) => (
                <span key={`${j}-${i}`} className="flex items-center gap-12">
                  <span>{w}</span>
                  <span className="text-reseda">✦</span>
                </span>
              ))
            )}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="relative mx-auto max-w-7xl px-6 py-32">
        <div className="grid gap-16 md:grid-cols-2 md:items-center">
          <Reveal>
            <div className="relative">
              <div className="absolute -inset-6 -z-10 rounded-2xl bg-accent/30 blur-2xl" />
              <img
                src={process}
                alt="Artist hands shaping clay"
                loading="lazy"
                className="rounded-2xl object-cover shadow-elegant"
              />
              <div className="absolute -bottom-6 -right-6 rounded-2xl bg-card p-5 shadow-soft">
                <div className="font-display text-3xl font-semibold">12+</div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Years of craft</div>
              </div>
            </div>
          </Reveal>
          <div>
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">The Artist</span>
            <Reveal as="h2" className="mt-3 font-display text-4xl font-light leading-tight tracking-tight text-balance sm:text-5xl">
              A studio where memory becomes form.
            </Reveal>
            <Reveal delay={0.1}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                ArtOcean is the studio of <strong className="text-foreground">Nuzhat Zaman</strong>,
                a sculptor and painter devoted to one quiet idea — that a single piece of art can hold a lifetime
                of love. Every sculpture is shaped by hand, every brushstroke considered, every detail chosen to
                honour your story.
              </p>
            </Reveal>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {[
                { k: "Handmade", v: "Every single piece" },
                { k: "Personalised", v: "Made for your story" },
                { k: "Studio fired", v: "Archival materials" },
                { k: "Worldwide", v: "Carefully shipped" },
              ].map((x, i) => (
                <Reveal key={x.k} delay={0.15 + i * 0.07}>
                  <div className="rounded-xl border border-border bg-card p-4">
                    <div className="font-display text-lg font-medium">{x.k}</div>
                    <div className="text-sm text-muted-foreground">{x.v}</div>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.5}>
              <Link to="/about" className="mt-10 inline-flex items-center gap-2 text-sm font-medium underline-offset-4 hover:underline">
                Read the full story <ArrowRight size={14} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* COLLECTIONS */}
      <section className="bg-card py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Collections</span>
              <Reveal as="h2" className="mt-3 max-w-2xl font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
                A library of handmade collections.
              </Reveal>
            </div>
            <Link to="/shop" className="text-sm font-medium underline-offset-4 hover:underline">View all →</Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {collections.map((c, i) => (
              <Reveal key={c.slug} delay={i * 0.05}>
                <Link
                  to="/shop/$slug"
                  params={{ slug: c.slug }}
                  className="group hover-lift relative flex h-72 flex-col justify-end overflow-hidden rounded-2xl bg-vandyke p-7 text-isabelline noise"
                >
                  <img
                    src={c.img}
                    alt={c.title}
                    className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-vandyke via-vandyke/60 to-vandyke/10" />
                  <div className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full bg-isabelline/20 backdrop-blur transition group-hover:rotate-45">
                    <ArrowRight size={15} />
                  </div>
                  <div className="relative z-10">
                    <h3 className="font-display text-2xl font-light">{c.title}</h3>
                    <p className="mt-1 max-w-xs text-sm text-isabelline/80">{c.desc}</p>
                    <span className="mt-5 inline-flex w-fit rounded-full border border-isabelline/40 bg-vandyke/30 px-4 py-1.5 text-[10px] uppercase tracking-widest backdrop-blur transition group-hover:bg-isabelline group-hover:text-vandyke">
                      Customize Now
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Featured</span>
          <Reveal as="h2" className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
            Pieces loved by collectors.
          </Reveal>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.06}>
              <ProductCard product={p} onQuickView={setQuick} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link to="/shop" className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
            Visit the shop <ArrowRight size={15} />
          </Link>
        </div>
        <QuickView product={quick} onClose={() => setQuick(null)} />
      </section>

      {/* SHOP BY COLLECTION — CAROUSEL ROWS */}
      <section className="bg-card py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Shop by Collection</span>
            <Reveal as="h2" className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              Browse every collection, side by side.
            </Reveal>
          </div>
          <CategoryRow eyebrow="Collection 01" title="Single Mini Sculptures" products={singles} onQuickView={setQuick} />
          <CategoryRow eyebrow="Collection 02" title="Couple Sculptures" products={couples} onQuickView={setQuick} />
          <CategoryRow eyebrow="Collection 03" title="Family Sculptures" products={families} onQuickView={setQuick} />
          <CategoryRow eyebrow="Collection 04" title="Sketch Art" products={sketches} onQuickView={setQuick} />
          <CategoryRow eyebrow="Collection 05" title="Oil Paintings" products={oils} onQuickView={setQuick} />
        </div>
      </section>

      {/* CUSTOM PROCESS */}
      <section
        className="relative overflow-hidden py-32 text-isabelline"
        style={{ background: "var(--gradient-warm)" }}
      >
        <Particles count={14} />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-16 max-w-2xl">
            <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-lavender">Custom Order</span>
            <Reveal as="h2" className="mt-3 font-display text-4xl font-light leading-tight tracking-tight sm:text-5xl">
              From your story to a sculpture, in four steps.
            </Reveal>
          </div>
          <div className="grid gap-8 md:grid-cols-4">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative rounded-2xl border border-isabelline/15 bg-isabelline/5 p-7 backdrop-blur">
                  <div className="font-script text-5xl text-lavender">{s.n}</div>
                  <h3 className="mt-3 font-display text-xl">{s.t}</h3>
                  <p className="mt-2 text-sm text-isabelline/75">{s.d}</p>
                  {i < steps.length - 1 && (
                    <ArrowRight className="absolute -right-4 top-1/2 hidden -translate-y-1/2 text-isabelline/30 md:block" size={18} />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/custom"
              className="inline-flex items-center gap-2 rounded-full bg-isabelline px-7 py-3.5 text-sm font-medium text-vandyke transition hover:bg-lavender hover:text-vandyke"
            >
              Start your custom order <ArrowRight size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <div className="mb-12 text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Loved Worldwide</span>
          <Reveal as="h2" className="mt-3 font-display text-4xl font-light tracking-tight sm:text-5xl">
            Words from our collectors.
          </Reveal>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <div className="flex h-full flex-col rounded-2xl border border-border bg-card p-7 hover-lift">
                <div className="mb-4 flex gap-1 text-reseda">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="flex-1 font-display text-lg font-light leading-relaxed text-foreground">“{t.text}”</p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground font-display text-sm font-semibold">
                    {t.name[0]}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">Verified collector</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* INSTAGRAM */}
      <section className="bg-card py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 flex flex-wrap items-end justify-between gap-6">
            <div>
              <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Studio Diary</span>
              <Reveal as="h2" className="mt-3 font-display text-4xl font-light tracking-tight sm:text-5xl">
                Follow the studio on Instagram.
              </Reveal>
            </div>
            <a
              href="https://www.instagram.com/artocean"
              target="_blank" rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-2.5 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
            >
              <Instagram size={15} /> @artocean
            </a>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">
            {products.slice(0, 6).map((p, i) => (
              <Reveal key={p.id} delay={i * 0.05}>
                <a
                  href="https://www.instagram.com/artocean"
                  target="_blank" rel="noreferrer"
                  className="group relative block aspect-square overflow-hidden rounded-xl bg-muted"
                >
                  <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 grid place-items-center bg-vandyke/50 opacity-0 transition group-hover:opacity-100">
                    <Instagram className="text-isabelline" size={20} />
                  </div>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-32">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-primary p-12 text-center text-primary-foreground sm:p-20">
            <Particles count={10} />
            <Heart className="mx-auto mb-6 text-lavender" size={28} />
            <h2 className="mx-auto max-w-3xl font-display text-4xl font-light leading-tight tracking-tight sm:text-6xl">
              Have a memory in mind? <span className="font-script italic text-lavender">Let’s sculpt it.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-sm text-primary-foreground/70 sm:text-base">
              Reach out on WhatsApp or send a quick brief — we’ll reply within 24 hours.
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href="https://wa.me/00000000000"
                target="_blank" rel="noreferrer"
                className="btn-shine inline-flex items-center gap-2 rounded-full bg-isabelline px-7 py-3.5 text-sm font-medium text-vandyke hover:bg-lavender"
              >
                <MessageCircle size={15} /> Chat on WhatsApp
              </a>
              <Link to="/contact" className="inline-flex items-center gap-2 rounded-full border border-isabelline/30 px-7 py-3.5 text-sm font-medium text-isabelline hover:bg-isabelline/10">
                Send a brief
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
