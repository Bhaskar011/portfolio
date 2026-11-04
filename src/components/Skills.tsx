import {
  Braces,
  BrainCircuit,
  Database,
  LayoutTemplate,
  Server,
  Workflow,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { skillGroups } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  braces: Braces,
  layout: LayoutTemplate,
  server: Server,
  database: Database,
  brain: BrainCircuit,
  workflow: Workflow,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Skills"
        title="Tools I work with."
        description="Grouped by what they're used for, all drawn from projects and internship work."
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((g, i) => {
          const Icon = icons[g.icon];
          return (
            <Reveal key={g.title} delay={(i % 3) * 0.07}>
              <section
                aria-labelledby={`skills-${i}`}
                className="glass h-full rounded-2xl p-6 transition duration-300 hover:border-line-strong hover:bg-white/[0.04]"
              >
                <div className="mb-5 flex items-center gap-3">
                  <span className="grid h-9 w-9 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                    <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
                  </span>
                  <h3 id={`skills-${i}`} className="text-base font-medium">
                    {g.title}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <li
                      key={s}
                      className="cursor-default rounded-full border border-line bg-white/[0.03] px-3 py-1.5 text-[13px] text-white/80 transition duration-200 hover:-translate-y-0.5 hover:border-accent/50 hover:bg-accent/10 hover:text-white"
                    >
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
