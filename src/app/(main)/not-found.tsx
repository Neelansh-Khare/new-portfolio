import Link from "next/link";

export const metadata = {
  title: "Page not found | Neelansh Khare",
  description: "The page you're looking for doesn't exist or has moved.",
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6 relative z-10">
      <div className="max-w-lg text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-4 font-code">
          404
        </p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Page not found
        </h1>
        <p className="text-muted-foreground mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Back home
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full border border-white/20 text-foreground font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          >
            Read the blog
          </Link>
        </div>
      </div>
    </main>
  );
}
