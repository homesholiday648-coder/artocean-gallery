import logo from "@/assets/artocean-logo.jpg";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={logo}
        alt="ArtOcean"
        className="h-10 w-10 rounded-full object-cover ring-1 ring-vandyke/20"
        width={80}
        height={80}
      />
      <div className="leading-tight">
        <div className="font-display text-[15px] font-semibold tracking-[0.18em] text-foreground">
          ARTOCEAN
        </div>
        <div className="text-[9px] tracking-[0.32em] text-muted-foreground">
          NUZHAT&nbsp;ZAMAN
        </div>
      </div>
    </div>
  );
}
