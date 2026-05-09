import { MessageCircle } from "lucide-react";

export function WhatsAppFab() {
  return (
    <a
      href="https://wa.me/00000000000?text=Hi%20ArtOcean%2C%20I%E2%80%99d%20like%20to%20order%20a%20custom%20artwork"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 grid h-14 w-14 place-items-center rounded-full bg-secondary text-secondary-foreground shadow-elegant transition hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-secondary/40" />
      <MessageCircle size={22} />
    </a>
  );
}
