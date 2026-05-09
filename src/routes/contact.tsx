import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { Mail, MapPin, MessageCircle, Instagram, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — ArtOcean" },
      { name: "description", content: "Get in touch with the ArtOcean studio for commissions, press and inquiries." },
      { property: "og:title", content: "Contact ArtOcean" },
      { property: "og:description", content: "We’d love to hear about your project." },
    ],
  }),
  component: ContactPage,
});

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(1000),
});

const cards = [
  { i: <MessageCircle size={18} />, t: "WhatsApp", d: "Chat with the studio", href: "https://wa.me/00000000000" },
  { i: <Instagram size={18} />, t: "Instagram", d: "@artocean", href: "https://www.instagram.com/artocean" },
  { i: <Mail size={18} />, t: "Email", d: "hello@artocean.studio", href: "mailto:hello@artocean.studio" },
  { i: <MapPin size={18} />, t: "Studio", d: "By appointment", href: "#map" },
];

function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    const r = schema.safeParse(form);
    if (!r.success) { toast.error("Please check the form fields."); return; }
    toast.success("Message sent. We’ll be in touch soon.");
    setForm({ name: "", email: "", message: "" });
  }

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Contact</span>
          <Reveal as="h1" className="mt-3 font-display text-5xl font-light tracking-tight sm:text-7xl">
            Let’s create something <span className="font-script italic text-reseda">together.</span>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c, i) => (
            <Reveal key={c.t} delay={i * 0.05}>
              <a href={c.href} target="_blank" rel="noreferrer" className="hover-lift block rounded-2xl border border-border bg-card p-6">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-accent text-accent-foreground">{c.i}</div>
                <h3 className="mt-4 font-display text-lg">{c.t}</h3>
                <p className="text-sm text-muted-foreground">{c.d}</p>
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-20 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <Reveal>
            <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-8 sm:p-10">
              <h2 className="font-display text-3xl font-light">Send a brief</h2>
              <p className="mt-1 text-sm text-muted-foreground">Tell us about your idea or commission.</p>
              <div className="mt-6 grid gap-4">
                <input
                  required maxLength={100}
                  value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                />
                <input
                  required type="email" maxLength={255}
                  value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Your email"
                  className="rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                />
                <textarea
                  required maxLength={1000} rows={6}
                  value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell us about your project..."
                  className="resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                />
                <button className="btn-shine inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                  <Send size={14} /> Send message
                </button>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.1}>
            <div id="map" className="relative h-full min-h-[420px] overflow-hidden rounded-3xl border border-border bg-card">
              <iframe
                title="Studio location"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-0.16%2C51.49%2C-0.10%2C51.52&layer=mapnik"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
