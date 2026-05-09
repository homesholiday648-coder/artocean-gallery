import { createFileRoute, Link } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import process from "@/assets/artist-process.jpg";
import painting from "@/assets/product-painting.jpg";
import couple from "@/assets/product-couple.jpg";
import family from "@/assets/product-family.jpg";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Stories — ArtOcean Journal" },
      { name: "description", content: "Behind the scenes, artist stories and the making of handmade art at ArtOcean." },
      { property: "og:title", content: "ArtOcean Journal" },
      { property: "og:description", content: "Studio diaries, artist stories and the making of art." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { t: "Inside the studio: how a couple sculpture is made", c: "Behind the scenes", img: process, d: "8 min read" },
  { t: "On colour: mixing earth and bloom", c: "Artist stories", img: painting, d: "5 min read" },
  { t: "A father, a daughter, a sculpture", c: "Customer memories", img: family, d: "6 min read" },
  { t: "First-look sculptures: the wedding tradition reimagined", c: "Artwork process", img: couple, d: "7 min read" },
];

function BlogPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Journal</span>
          <Reveal as="h1" className="mt-3 font-display text-5xl font-light tracking-tight sm:text-7xl">
            Stories from the studio.
          </Reveal>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {posts.map((p, i) => (
            <Reveal key={p.t} delay={i * 0.06}>
              <Link to="/blog" className="group block">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
                  <img src={p.img} alt={p.t} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-isabelline/80 px-3 py-1 text-[10px] uppercase tracking-widest text-vandyke backdrop-blur">{p.c}</span>
                </div>
                <h3 className="mt-5 font-display text-2xl font-light leading-tight transition group-hover:text-reseda">{p.t}</h3>
                <p className="mt-2 text-xs uppercase tracking-widest text-muted-foreground">{p.d}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
