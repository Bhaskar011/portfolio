import { Activity, Heart, MessageSquareText, ShieldCheck, type LucideIcon } from "lucide-react";
import type { Project } from "@/lib/data";

const icons: Record<Project["icon"], LucideIcon> = {
  activity: Activity,
  heart: Heart,
  message: MessageSquareText,
  shield: ShieldCheck,
};

const palettes: Record<Project["icon"], [string, string]> = {
  activity: ["139,156,255", "94,234,212"],
  heart: ["244,114,182", "139,156,255"],
  message: ["94,234,212", "139,156,255"],
  shield: ["251,191,36", "139,156,255"],
};

/** Abstract illustrative tile (not a screenshot). Swap for real screenshots in /public/images/projects. */
export function ProjectVisual({ project, className = "" }: { project: Project; className?: string }) {
  const Icon = icons[project.icon];
  const [a, b] = palettes[project.icon];
  return (
    <div
      aria-hidden="true"
      className={`relative isolate grid place-items-center overflow-hidden ${className}`}
      style={{
        background: `radial-gradient(120% 90% at 20% 0%, rgba(${a},0.28), transparent 60%), radial-gradient(90% 80% at 90% 100%, rgba(${b},0.2), transparent 60%), #0b0d10`,
      }}
    >
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "radial-gradient(circle at center, #000, transparent 75%)",
          WebkitMaskImage: "radial-gradient(circle at center, #000, transparent 75%)",
        }}
      />
      <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/[0.06] shadow-2xl backdrop-blur">
        <Icon className="h-7 w-7 text-white" />
      </div>
    </div>
  );
}
