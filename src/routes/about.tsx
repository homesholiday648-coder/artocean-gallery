import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "@/components/site/Reveal";
import process from "@/assets/artist-process.jpg";
import hero from "@/assets/hero-sculpture.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — ArtOcean by Nuzhat Zaman" },
      { name: "description", content: "The story of ArtOcean, the studio of sculptor and painter Nuzhat Zaman." },
      { property: "og:title", content: "About ArtOcean" },
      { property: "og:description", content: "A studio devoted to handmade sculptures, paintings and personalised art." },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  { y: "2013", t: "First sculpture", d: "Nuzhat sculpts her first commissioned figurine." },
  { y: "2017", t: "ArtOcean is born", d: "The studio is founded with a single quiet idea: art that holds memory." },
  { y: "2020", t: "Worldwide shipping", d: "Pieces begin reaching collectors across continents." },
  { y: "2024", t: "1,000+ pieces", d: "Over a thousand handmade artworks delivered to loving homes." },
];

function AboutPage() {
  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">About</span>
          <Reveal as="h1" className="mt-3 font-display text-5xl font-light leading-tight tracking-tight sm:text-7xl">
            A studio shaped by hand, <span className="font-script italic text-reseda">and heart.</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground sm:text-lg">
              ArtOcean is the studio of Nuzhat Zaman — a sculptor and painter who believes a single
              piece of art can hold a lifetime of love.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-10 md:grid-cols-2">
          <Reveal>
            <img src={hero} alt="" className="h-full w-full rounded-2xl object-cover shadow-elegant" loading="lazy" />
          </Reveal>
          <Reveal delay={0.1}>
            <img src={process} alt="" className="h-full w-full rounded-2xl object-cover shadow-elegant" loading="lazy" />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-4xl px-6">
        <h2 className="font-display text-4xl font-light tracking-tight sm:text-5xl">The journey.</h2>
        <div className="mt-10 space-y-8 border-l border-border pl-8">
          {timeline.map((t, i) => (
            <Reveal key={t.y} delay={i * 0.07}>
              <div className="relative">
                <span className="absolute -left-[42px] top-2 grid h-3 w-3 place-items-center rounded-full bg-reseda ring-4 ring-background" />
                <div className="font-script text-3xl text-reseda">{t.y}</div>
                <h3 className="mt-1 font-display text-xl">{t.t}</h3>
                <p className="mt-1 text-muted-foreground">{t.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-32 max-w-5xl px-6">
        <Reveal>
          <blockquote className="rounded-3xl border border-border bg-card p-12 text-center font-display text-2xl font-light leading-relaxed sm:text-3xl">
            “Every piece I make is a love letter — to a parent, a child, a partner, a memory. My hands
            shape the clay, but the story is always yours.”
            <footer className="mt-6 text-sm font-normal uppercase tracking-[0.3em] text-muted-foreground">
              — Nuzhat Zaman
            </footer>
          </blockquote>
        </Reveal>
      </section>
    </div>
  );
}
