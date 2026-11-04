"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Loader2, Mail, MapPin, Send } from "lucide-react";
import { contactSchema, type ContactInput } from "@/lib/schema";
import { site } from "@/lib/data";
import { GithubIcon, LinkedinIcon } from "./icons";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

type Status = { kind: "idle" } | { kind: "success" } | { kind: "error"; message: string };

const field =
  "w-full rounded-xl border border-line bg-white/[0.03] px-4 py-3 text-sm text-white placeholder:text-subtle transition focus:border-accent/60 focus:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-accent/20 aria-[invalid=true]:border-red-400/60";

function Err({ id, msg }: { id: string; msg?: string }) {
  return msg ? (
    <p id={id} role="alert" className="mt-1.5 text-xs text-red-300">
      {msg}
    </p>
  ) : null;
}

export function Contact() {
  const [startedAt, setStartedAt] = useState(0);
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: "", email: "", subject: "", message: "", company: "" },
  });

  // Record when the user first interacts (used for the server-side bot check).
  const markStart = () => setStartedAt((t) => t || Date.now());

  const onSubmit = handleSubmit(async (values) => {
    setStatus({ kind: "idle" });
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...values, startedAt: startedAt || undefined }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (res.ok && data?.ok) {
        setStatus({ kind: "success" });
        reset();
        setStartedAt(0);
      } else {
        setStatus({ kind: "error", message: data?.error ?? "Something went wrong. Please try again." });
      }
    } catch {
      setStatus({ kind: "error", message: "Network error. Please check your connection and try again." });
    }
  });

  return (
    <section id="contact" className="relative mx-auto max-w-6xl px-5 py-24 sm:px-8 sm:py-32">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something."
        description="Hiring, a project idea, or just a hello. Send a message and I'll get back to you."
      />

      <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <Reveal>
          <ul className="space-y-3">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="glass group flex items-center gap-4 rounded-2xl p-5 transition hover:border-line-strong"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs text-subtle">Email</span>
                  <span className="block truncate text-sm">{site.email}</span>
                </span>
              </a>
            </li>
            {site.linkedin && (
              <li>
                <a
                  href={site.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-line-strong"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                    <LinkedinIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-subtle">LinkedIn</span>
                    <span className="block text-sm">Connect with me</span>
                  </span>
                </a>
              </li>
            )}
            {site.github && (
              <li>
                <a
                  href={site.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass flex items-center gap-4 rounded-2xl p-5 transition hover:border-line-strong"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                    <GithubIcon className="h-5 w-5" />
                  </span>
                  <span>
                    <span className="block text-xs text-subtle">GitHub</span>
                    <span className="block text-sm">See my code</span>
                  </span>
                </a>
              </li>
            )}
            <li className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="grid h-11 w-11 place-items-center rounded-xl border border-line bg-white/[0.04] text-accent">
                <MapPin className="h-5 w-5" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-subtle">Location</span>
                <span className="block text-sm">{site.location}</span>
              </span>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={0.1}>
          <form
            onSubmit={onSubmit}
            onFocus={markStart}
            noValidate
            aria-label="Contact form"
            className="glass space-y-5 rounded-3xl p-6 sm:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-muted">
                  Name
                </label>
                <input
                  id="name"
                  autoComplete="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-err" : undefined}
                  className={field}
                  {...register("name")}
                />
                <Err id="name-err" msg={errors.name?.message} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-muted">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  placeholder="you@company.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-err" : undefined}
                  className={field}
                  {...register("email")}
                />
                <Err id="email-err" msg={errors.email?.message} />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="mb-2 block text-sm text-muted">
                Subject
              </label>
              <input
                id="subject"
                placeholder="What's this about?"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-err" : undefined}
                className={field}
                {...register("subject")}
              />
              <Err id="subject-err" msg={errors.subject?.message} />
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm text-muted">
                Message
              </label>
              <textarea
                id="message"
                rows={6}
                placeholder="Tell me a little about what you have in mind…"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
                className={`${field} resize-y`}
                {...register("message")}
              />
              <Err id="message-err" msg={errors.message?.message} />
            </div>

            {/* Honeypot: hidden from people and assistive tech, bots tend to fill it */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="company">Company (leave blank)</label>
              <input id="company" tabIndex={-1} autoComplete="off" {...register("company")} />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" aria-hidden="true" /> Send message
                </>
              )}
            </button>

            <div aria-live="polite" className="min-h-[1.5rem]">
              {status.kind === "success" && (
                <p className="flex items-start gap-2 rounded-xl border border-teal/30 bg-teal/10 px-4 py-3 text-sm text-teal">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  Message sent. Thanks for reaching out, I&apos;ll reply soon.
                </p>
              )}
              {status.kind === "error" && (
                <p
                  role="alert"
                  className="flex items-start gap-2 rounded-xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200"
                >
                  <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
                  {status.message}
                </p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
