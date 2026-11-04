import { Award, GraduationCap, Users } from "lucide-react";
import { activities, certifications, education } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Education() {
  return (
    <section id="education" className="relative border-y border-line bg-surface/60">
      <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
        <SectionHeading eyebrow="Education & Certifications" title="Learning, formally and otherwise." />

        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
              <GraduationCap className="h-4 w-4 text-accent" aria-hidden="true" /> Education
            </h3>
            <ol className="space-y-4">
              {education.map((e) => (
                <li key={e.school}>
                  <Reveal>
                    <article className="glass rounded-2xl p-6">
                      <p className="font-mono text-xs text-subtle">{e.period}</p>
                      <h4 className="mt-2 text-lg font-semibold tracking-tight">{e.school}</h4>
                      <p className="mt-1 text-sm text-white/85">{e.degree}</p>
                      <p className="mt-1 text-sm text-muted">
                        {e.place}
                        {e.note ? ` · ${e.note}` : ""}
                      </p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>

          <div>
            <h3 className="mb-6 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
              <Award className="h-4 w-4 text-accent" aria-hidden="true" /> Certifications
            </h3>
            <ul className="grid gap-4 sm:grid-cols-2">
              {certifications.map((c) => (
                <li key={c.name}>
                  <Reveal className="h-full">
                    <article className="glass h-full rounded-2xl p-5">
                      <p className="text-base font-medium">{c.name}</p>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted">{c.detail}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>

            <h3 className="mb-6 mt-10 flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-muted">
              <Users className="h-4 w-4 text-accent" aria-hidden="true" /> Leadership
            </h3>
            <ul className="space-y-4">
              {activities.map((a) => (
                <li key={a.title}>
                  <Reveal>
                    <article className="glass rounded-2xl p-5">
                      <p className="text-base font-medium">{a.title}</p>
                      <p className="mt-1.5 text-sm text-muted">{a.text}</p>
                    </article>
                  </Reveal>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
