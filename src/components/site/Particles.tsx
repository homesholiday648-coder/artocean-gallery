import { useMemo } from "react";

export function Particles({ count = 18 }: { count?: number }) {
  const items = useMemo(
    () =>
      Array.from({ length: count }).map((_, i) => ({
        id: i,
        left: Math.random() * 100,
        size: 4 + Math.random() * 10,
        dur: 18 + Math.random() * 22,
        delay: -Math.random() * 30,
        dx: (Math.random() - 0.5) * 120,
        opacity: 0.2 + Math.random() * 0.4,
      })),
    [count]
  );
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      {items.map((p) => (
        <span
          key={p.id}
          className="absolute bottom-[-10%] block rounded-full bg-lavender animate-drift"
          style={{
            left: `${p.left}%`,
            width: p.size,
            height: p.size,
            opacity: p.opacity,
            animationDuration: `${p.dur}s`,
            animationDelay: `${p.delay}s`,
            ["--dx" as never]: `${p.dx}px`,
            filter: "blur(1px)",
          }}
        />
      ))}
    </div>
  );
}
