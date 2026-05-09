import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Reveal } from "@/components/site/Reveal";
import { toast } from "sonner";
import { ArrowRight, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Route = createFileRoute("/custom")({
  head: () => ({
    meta: [
      { title: "Customize Your Artwork — ArtOcean" },
      { name: "description", content: "Commission a one-of-a-kind handmade sculpture, painting or portrait by ArtOcean." },
      { property: "og:title", content: "Customize Your Artwork — ArtOcean" },
      { property: "og:description", content: "Tell your story. We sculpt it." },
    ],
  }),
  component: CustomPage,
});

const steps = [
  { t: "Share Your Idea", d: "Tell us your story, your people, your moment." },
  { t: "We Design Your Artwork", d: "Our artist sketches a concept just for you." },
  { t: "Handmade Crafting", d: "Sculpted, painted and finished by hand." },
  { t: "Delivered Worldwide", d: "Carefully packed and shipped to your door." },
];

function CustomPage() {
  const [step, setStep] = useState(0);
  const [form, setForm] = useState({ name: "", email: "", type: "Couple Sculpture", brief: "" });
  const [done, setDone] = useState(false);

  function next() { setStep((s) => Math.min(s + 1, 2)); }
  function prev() { setStep((s) => Math.max(s - 1, 0)); }
  function submit(e: React.FormEvent) {
    e.preventDefault();
    setDone(true);
    toast.success("Thank you! We’ll reply within 24 hours.");
  }

  return (
    <div className="pt-32">
      <section className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">Custom</span>
          <Reveal as="h1" className="mt-3 font-display text-5xl font-light leading-tight tracking-tight sm:text-7xl">
            Tell your story. <span className="font-script italic text-reseda">We sculpt it.</span>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              From a first look between newlyweds to a family portrait spanning generations — every commission begins with a conversation.
            </p>
          </Reveal>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.t} delay={i * 0.06}>
              <div className="rounded-2xl border border-border bg-card p-6">
                <div className="font-script text-4xl text-reseda">0{i + 1}</div>
                <h3 className="mt-2 font-display text-lg">{s.t}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="mt-20 rounded-3xl border border-border bg-card p-8 sm:p-12">
            <div className="mb-8 flex items-center gap-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex flex-1 items-center gap-3">
                  <div className={`grid h-9 w-9 place-items-center rounded-full text-sm font-medium ${
                    i <= step ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}>{i + 1}</div>
                  {i < 2 && <div className={`h-px flex-1 ${i < step ? "bg-primary" : "bg-border"}`} />}
                </div>
              ))}
            </div>

            <AnimatePresence mode="wait">
              {!done ? (
                <motion.form
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={(e) => { if (step < 2) { e.preventDefault(); next(); } else submit(e); }}
                  className="grid gap-5"
                >
                  {step === 0 && (
                    <>
                      <h3 className="font-display text-2xl font-light">What kind of artwork?</h3>
                      <div className="grid gap-3 sm:grid-cols-2">
                        {["Single Sculpture", "Couple Sculpture", "Family Sculpture", "Painting", "Calligraphy", "Sketch Portrait"].map((t) => (
                          <button
                            type="button"
                            key={t}
                            onClick={() => setForm({ ...form, type: t })}
                            className={`rounded-xl border p-4 text-left text-sm transition ${
                              form.type === t ? "border-primary bg-primary/5" : "border-border hover:border-foreground/40"
                            }`}
                          >
                            {t}
                          </button>
                        ))}
                      </div>
                    </>
                  )}
                  {step === 1 && (
                    <>
                      <h3 className="font-display text-2xl font-light">Tell us about it</h3>
                      <textarea
                        required
                        value={form.brief}
                        onChange={(e) => setForm({ ...form, brief: e.target.value })}
                        placeholder="Describe your story, the people, and any reference details..."
                        rows={6}
                        className="w-full resize-none rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                      />
                    </>
                  )}
                  {step === 2 && (
                    <>
                      <h3 className="font-display text-2xl font-light">Your details</h3>
                      <input
                        required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                      />
                      <input
                        required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                        placeholder="Your email"
                        className="w-full rounded-xl border border-border bg-background p-4 text-sm outline-none focus:border-foreground/40"
                      />
                    </>
                  )}
                  <div className="mt-2 flex justify-between gap-3">
                    <button type="button" onClick={prev} disabled={step === 0} className="rounded-full border border-border px-5 py-2.5 text-sm disabled:opacity-30">
                      Back
                    </button>
                    <button type="submit" className="btn-shine inline-flex items-center gap-2 rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground hover:opacity-90">
                      {step < 2 ? "Continue" : "Submit Request"} <ArrowRight size={14} />
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div
                  key="done"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="py-12 text-center"
                >
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground">
                    <Check size={20} />
                  </div>
                  <h3 className="mt-5 font-display text-3xl font-light">Beautifully received.</h3>
                  <p className="mt-2 text-sm text-muted-foreground">We’ll reply to {form.email} within 24 hours.</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
