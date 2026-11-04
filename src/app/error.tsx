"use client";

export default function Error({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="grid min-h-screen place-items-center px-6 text-center">
      <div>
        <p className="font-mono text-sm text-accent">Something went wrong</p>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight sm:text-5xl">Unexpected error</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">Please try again. If it keeps happening, email me and I&apos;ll fix it.</p>
        <button
          type="button"
          onClick={reset}
          className="mt-8 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
