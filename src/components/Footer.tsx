import { ArrowUp, Mail } from "lucide-react";
import { nav, site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-5 py-12 sm:px-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold tracking-tight">{site.name}</p>
          <p className="mt-1 text-sm text-muted">{site.role} · {site.tagline}</p>
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            {nav.map((n) => (
              <li key={n.id}>
                <a href={`#${n.id}`} className="transition hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-1.5">
          <a
            href={`mailto:${site.email}`}
            aria-label="Email"
            className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-white/[0.07] hover:text-white"
          >
            <Mail className="h-[18px] w-[18px]" />
          </a>
          {site.github && (
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-white/[0.07] hover:text-white"
            >
              <GithubIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          {site.linkedin && (
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="grid h-10 w-10 place-items-center rounded-full text-muted transition hover:bg-white/[0.07] hover:text-white"
            >
              <LinkedinIcon className="h-[18px] w-[18px]" />
            </a>
          )}
          <a
            href="#home"
            aria-label="Back to top"
            className="ml-2 grid h-10 w-10 place-items-center rounded-full border border-line-strong transition hover:bg-white/[0.07]"
          >
            <ArrowUp className="h-4 w-4" />
          </a>
        </div>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-subtle">
        © {year} {site.name}. All rights reserved.
      </div>
    </footer>
  );
}
