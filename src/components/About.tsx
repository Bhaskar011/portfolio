import { Building2, Code2, GraduationCap, Puzzle, Sparkles, Target, type LucideIcon } from "lucide-react";
import { aboutHighlights } from "@/lib/data";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const icons: Record<string, LucideIcon> = {
  graduation: GraduationCap,
  code: Code2,
  building: Building2,
  sparkles: Sparkles,
  puzzle: Puzzle,
  target: Target,
};

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="About"
        title="Developer who ships useful things."
        description="I'm an early-career software engineer with a degree in Information Science Engineering. I enjoy turning messy, manual processes into clean software, and I like AI most when it quietly removes work."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {aboutHighlights.map((h, i) => {
          const Icon = icons[h.icon];
          return (
            <Reveal key={h.title} delay={(i % 3) * 0.08}>
              <article className="glass group h-full rounded-2xl p-6 transition duration-300 hover:-translate-y-1 hover:border-line-strong hover:bg-white/[0.04]">
                <div className="mb-5 grid h-10 w-10 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent transition group-hover:border-accent/40">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="mb-2 text-base font-medium">{h.title}</h3>
                <p className="text-sm leading-relaxed text-muted">{h.text}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
