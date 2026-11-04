import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="relative grid min-h-screen place-items-center px-6 text-center">
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-1/3 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-50 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(139,156,255,0.25), transparent)" }}
      />
      <div className="relative">
        <p className="font-mono text-sm text-accent">404</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-6xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page you&apos;re looking for doesn&apos;t exist or has moved.</p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Back to home
        </Link>
      </div>
    </main>
  );
}
