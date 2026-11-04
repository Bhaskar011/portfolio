"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ExternalLink, X } from "lucide-react";
import type { Project } from "@/lib/data";
import { GithubIcon } from "./icons";
import { ProjectVisual } from "./ProjectVisual";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") return onClose();
      if (e.key !== "Tab" || !panelRef.current) return;
      const f = panelRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (!f.length) return;
      const first = f[0];
      const last = f[f.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
      previous?.focus();
    };
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <motion.div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        initial={{ opacity: 0, y: 40, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 30, scale: 0.98 }}
        transition={{ duration: 0.3, ease: [0.21, 0.6, 0.35, 1] }}
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl border border-line-strong bg-surface shadow-2xl sm:rounded-3xl"
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close project details"
          className="absolute right-4 top-4 z-10 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-black/50 backdrop-blur transition hover:bg-black/80"
        >
          <X className="h-4 w-4" />
        </button>

        <ProjectVisual project={project} className="h-44 w-full" />

        <div className="p-6 sm:p-9">
          <p className="font-mono text-xs uppercase tracking-widest text-accent">{project.category}</p>
          <h3 id="project-modal-title" className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-xs text-subtle">{project.period}</p>

          <p className="mt-6 leading-relaxed text-white/85">{project.description}</p>

          <h4 className="mt-8 text-sm font-medium text-white">The problem it solves</h4>
          <p className="mt-2 text-sm leading-relaxed text-muted">{project.problem}</p>

          <h4 className="mt-8 text-sm font-medium text-white">Key features</h4>
          <ul className="mt-3 space-y-2.5">
            {project.features.map((f) => (
              <li key={f} className="flex gap-3 text-sm leading-relaxed text-muted">
                <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-teal" />
                {f}
              </li>
            ))}
          </ul>

          <h4 className="mt-8 text-sm font-medium text-white">Built with</h4>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <li key={t} className="rounded-full border border-line bg-white/[0.04] px-3 py-1 font-mono text-xs text-muted">
                {t}
              </li>
            ))}
          </ul>

          {(project.github || project.demo) && (
            <div className="mt-9 flex flex-wrap gap-3">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-medium text-black"
                >
                  <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  Live demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-2.5 text-sm font-medium"
                >
                  <GithubIcon className="h-4 w-4" />
                  Source code
                </a>
              )}
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
