"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { heroStats, site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";

export function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 22 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay: 1.0 + i * 0.09, ease: [0.21, 0.6, 0.35, 1] as const },
  });

  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 sm:pt-32">
      <div aria-hidden="true" className="bg-grid absolute inset-0 -z-10" />
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-[-10%] -z-10 h-[520px] w-[820px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
        style={{ background: "radial-gradient(closest-side, rgba(139,156,255,0.22), transparent)" }}
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:pb-28">
        <div>
          <motion.p
            {...item(0)}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-white/[0.03] px-3.5 py-1.5 text-xs text-muted"
          >
            <MapPin className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            {site.location}
          </motion.p>

          <motion.h1 {...item(1)} className="text-5xl font-semibold leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="text-gradient">{site.name}</span>
          </motion.h1>

          <motion.p {...item(2)} className="mt-5 font-mono text-sm text-accent-soft sm:text-base">
            {site.role} <span className="text-subtle">|</span> {site.tagline}
          </motion.p>

          <motion.p {...item(3)} className="mt-6 max-w-xl text-lg leading-relaxed text-muted">
            I build practical software: responsive full-stack web apps and intelligent automation workflows. At Bosch
            India Foundation I connected Claude AI to a feedback pipeline that turns 200+ monthly submissions into
            trackable action items.
          </motion.p>

          <motion.div {...item(4)} className="mt-9 flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-black transition hover:bg-white/90"
            >
              Explore My Work
              <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
            </a>
            <a
              href={site.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium transition hover:bg-white/[0.06]"
            >
              <Download className="h-4 w-4" aria-hidden="true" />
              Download Resume
            </a>
            <div className="ml-1 flex items-center gap-1.5">
              {site.github && (
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profile"
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-white/[0.07] hover:text-white"
                >
                  <GithubIcon className="h-5 w-5" />
                </a>
              )}
              {site.linkedin && (
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profile"
                  className="grid h-11 w-11 place-items-center rounded-full text-muted transition hover:bg-white/[0.07] hover:text-white"
                >
                  <LinkedinIcon className="h-5 w-5" />
                </a>
              )}
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.1, ease: [0.21, 0.6, 0.35, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 -z-10 rounded-[2rem] opacity-70 blur-2xl"
            style={{ background: "linear-gradient(135deg, rgba(139,156,255,0.35), rgba(94,234,212,0.18))" }}
          />
          <div className="glass relative overflow-hidden rounded-[1.75rem] p-2">
            <div className="relative aspect-[7/9] overflow-hidden rounded-[1.25rem]">
              <Image
                src="/images/profile.webp"
                alt={`Portrait of ${site.name}`}
                fill
                priority
                sizes="(min-width: 1024px) 420px, (min-width: 640px) 384px, 90vw"
                className="object-cover object-[60%_30%]"
              />
              <div
                aria-hidden="true"
                className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent"
              />
            </div>
          </div>
          <div className="absolute -bottom-5 -left-3 z-10 rounded-2xl border border-line-strong bg-surface px-4 py-3 shadow-2xl sm:-left-8">
            <p className="text-[11px] uppercase tracking-widest text-subtle">Most recent</p>
            <p className="text-sm font-medium">Bosch India Foundation</p>
          </div>
        </motion.div>
      </div>

      <div className="border-t border-line bg-white/[0.015]">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-y-8 px-5 py-10 sm:px-8 md:grid-cols-4">
          {heroStats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 mt-1 text-sm text-muted">{s.label}</dt>
              <dd className="order-1 text-3xl font-semibold tracking-tight sm:text-4xl">{s.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
