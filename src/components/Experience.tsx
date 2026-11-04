import { Briefcase, Check } from "lucide-react";
import { experience } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Experience() {
  return (
    <section id="experience" className="relative border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've built."
          description="Real workflows, real users: from CMS pages to an AI-assisted feedback pipeline."
        />

        <ol className="relative space-y-10 border-l border-line pl-8 sm:pl-12">
          {experience.map((job) => (
            <li key={job.company} className="relative">
              <span
                aria-hidden="true"
                className="absolute -left-[2.6rem] top-1 grid h-9 w-9 place-items-center rounded-full border border-line-strong bg-bg text-accent sm:-left-[3.6rem]"
              >
                <Briefcase className="h-4 w-4" />
              </span>

              <Reveal>
                <article className="glass rounded-3xl p-6 sm:p-9">
                  <header className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight sm:text-2xl">{job.role}</h3>
                      <p className="mt-1 text-accent-soft">{job.company}</p>
                    </div>
                    <div className="text-sm text-muted sm:text-right">
                      <p className="font-mono">{job.period}</p>
                      <p>{job.location}</p>
                    </div>
                  </header>

                  <p className="mt-5 max-w-2xl text-muted">{job.summary}</p>

                  <ul className="mt-6 space-y-3.5">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-sm leading-relaxed text-white/85 sm:text-[15px]">
                        <Check className="mt-1 h-4 w-4 shrink-0 text-teal" aria-hidden="true" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <ul className="mt-8 flex flex-wrap gap-2" aria-label="Technologies used">
                    {job.tech.map((t) => (
                      <li
                        key={t}
                        className="rounded-full border border-line bg-white/[0.03] px-3 py-1 font-mono text-xs text-muted"
                      >
                        {t}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
