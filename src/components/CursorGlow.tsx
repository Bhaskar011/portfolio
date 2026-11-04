"use client";

import { useEffect, useRef } from "react";

/** Soft spotlight that follows the pointer. Disabled on touch and reduced-motion. */
export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    let raf = 0;
    let x = 0;
    let y = 0;
    const onMove = (e: PointerEvent) => {
      x = e.clientX;
      y = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          el.style.transform = `translate3d(${x - 300}px, ${y - 300}px, 0)`;
          el.style.opacity = "1";
          raf = 0;
        });
      }
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 h-[600px] w-[600px] rounded-full opacity-0 transition-opacity duration-500"
      style={{
        background: "radial-gradient(circle, rgba(139,156,255,0.10) 0%, rgba(139,156,255,0) 60%)",
        willChange: "transform",
      }}
    />
  );
}
