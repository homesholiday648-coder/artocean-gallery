import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { Navbar } from "@/components/site/Navbar";
import { Footer } from "@/components/site/Footer";
import { CursorGlow } from "@/components/site/CursorGlow";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl font-light text-foreground">404</h1>
        <h2 className="mt-4 font-display text-xl text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          This piece is no longer on display.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground hover:opacity-90"
        >
          Return to gallery
        </Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-xl">This page didn’t load</h1>
        <p className="mt-2 text-sm text-muted-foreground">Something went quietly wrong.</p>
        <div className="mt-6 flex justify-center gap-2">
          <button
            onClick={() => { router.invalidate(); reset(); }}
            className="rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-foreground"
          >
            Try again
          </button>
          <a href="/" className="rounded-full border border-border px-5 py-2 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "ArtOcean — Turning Memories Into Timeless Art" },
      {
        name: "description",
        content:
          "Luxury handmade sculptures, paintings & personalised artwork by ArtOcean (Nuzhat Zaman). Crafted with passion. Shipped worldwide.",
      },
      { property: "og:title", content: "ArtOcean — Turning Memories Into Timeless Art" },
      { property: "og:description", content: "ArtOcean Gallery is a premium animated eCommerce website for selling luxury handmade art." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ArtOcean — Turning Memories Into Timeless Art" },
      { name: "description", content: "ArtOcean Gallery is a premium animated eCommerce website for selling luxury handmade art." },
      { name: "twitter:description", content: "ArtOcean Gallery is a premium animated eCommerce website for selling luxury handmade art." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3ea129c-30c6-40b4-8a4f-c80518e150ea/id-preview-a0963b60--45c3cdda-eccc-49ae-bfaa-b02758a3c397.lovable.app-1778321818827.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/d3ea129c-30c6-40b4-8a4f-c80518e150ea/id-preview-a0963b60--45c3cdda-eccc-49ae-bfaa-b02758a3c397.lovable.app-1778321818827.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head><HeadContent /></head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <CursorGlow />
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFab />
      <Toaster
        position="bottom-center"
        toastOptions={{
          style: {
            background: "var(--vandyke)",
            color: "var(--isabelline)",
            border: "none",
          },
        }}
      />
    </QueryClientProvider>
  );
}
