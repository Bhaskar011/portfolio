export default function Loading() {
  return (
    <div role="status" aria-live="polite" className="grid min-h-screen place-items-center">
      <span className="sr-only">Loading…</span>
      <span aria-hidden="true" className="block h-8 w-8 animate-spin rounded-full border-2 border-white/15 border-t-accent" />
    </div>
  );
}
