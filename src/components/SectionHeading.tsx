import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-14 max-w-2xl">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-muted sm:text-lg">{description}</p> : null}
    </Reveal>
  );
}
