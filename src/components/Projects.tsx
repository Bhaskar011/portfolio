"use client";

import { useCallback, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { projects, type Project } from "@/lib/data";
import { GithubIcon } from "./icons";
import { ProjectModal } from "./ProjectModal";
import { ProjectVisual } from "./ProjectVisual";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const close = useCallback(() => setSelected(null), []);

  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Projects"
        title="Selected work."
        description="AI-integrated and full-stack projects that solve a concrete problem. Open any card for the full breakdown."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 0.08}>
            <article className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-1.5 hover:border-line-strong">
              <ProjectVisual project={p} className="h-44 w-full transition duration-500 group-hover:scale-[1.03]" />
              <div className="flex flex-1 flex-col p-6 sm:p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-mono text-[11px] uppercase tracking-widest text-accent">{p.category}</p>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight">
                      <button
                        type="button"
                        onClick={() => setSelected(p)}
                        className="text-left after:absolute after:inset-0 after:content-[''] focus-visible:outline-offset-8"
                        aria-haspopup="dialog"
                      >
                        {p.name}
                      </button>
                    </h3>
                  </div>
                  <ArrowUpRight
                    className="mt-1 h-5 w-5 shrink-0 text-subtle transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white"
                    aria-hidden="true"
                  />
                </div>

                <p className="mt-3 text-sm leading-relaxed text-muted">{p.short}</p>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies">
                  {p.tech.map((t) => (
                    <li key={t} className="rounded-full border border-line bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-muted">
                      {t}
                    </li>
                  ))}
                </ul>

                <div className="relative z-10 mt-auto flex items-center gap-4 pt-6 text-sm">
                  <span className="text-white/90">View details</span>
                  {p.github && (
                    <a
                      href={p.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} source code`}
                      className="text-muted transition hover:text-white"
                    >
                      <GithubIcon className="h-[18px] w-[18px]" />
                    </a>
                  )}
                  {p.demo && (
                    <a
                      href={p.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} live demo`}
                      className="text-muted transition hover:text-white"
                    >
                      <ExternalLink className="h-[18px] w-[18px]" />
                    </a>
                  )}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <AnimatePresence>{selected && <ProjectModal key={selected.slug} project={selected} onClose={close} />}</AnimatePresence>
    </section>
  );
}
