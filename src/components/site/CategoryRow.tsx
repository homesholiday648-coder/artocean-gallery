import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ProductCard } from "@/components/site/ProductCard";
import { Reveal } from "@/components/site/Reveal";
import type { Product } from "@/lib/store";

export function CategoryRow({
  eyebrow,
  title,
  products,
  onQuickView,
}: {
  eyebrow: string;
  title: string;
  products: Product[];
  onQuickView?: (p: Product) => void;
}) {
  if (!products.length) return null;
  return (
    <div className="mb-20">
      <div className="mb-8 flex items-end justify-between gap-6">
        <div>
          <span className="text-[10px] font-medium uppercase tracking-[0.3em] text-reseda">{eyebrow}</span>
          <Reveal as="h2" className="mt-2 font-display text-3xl font-light tracking-tight sm:text-4xl">
            {title}
          </Reveal>
        </div>
      </div>
      <Carousel opts={{ align: "start", loop: false }} className="relative">
        <CarouselContent className="-ml-4">
          {products.map((p) => (
            <CarouselItem key={p.id} className="pl-4 basis-3/4 sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
              <ProductCard product={p} onQuickView={onQuickView} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="-left-3 hidden md:flex" />
        <CarouselNext className="-right-3 hidden md:flex" />
      </Carousel>
    </div>
  );
}
