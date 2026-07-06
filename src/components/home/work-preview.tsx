import Reveal from "@/components/shared/reveal";
import SectionLabel from "@/components/home/section-label";
import { projects } from "@/data/projects";
import { mono } from "@/lib/fonts";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function WorkPreview() {
  const [primary, secondary] = projects.slice(0, 2);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionLabel index="01" label="Selected work" />
      </Reveal>

      <Reveal delay={0.05}>
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
          A few things I&apos;ve shipped recently.
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-6 lg:grid-cols-5">
        {/* Primary project — larger feature card */}
        {primary && (
          <div className="lg:col-span-3">
            <Reveal delay={0.1}>
              <Link
                href={`/work/${primary.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
              >
                <div>
                  <span
                    className={`${mono.className} text-xs text-muted-foreground`}
                  >
                    01
                  </span>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-2xl font-medium">{primary.title}</h3>
                    <ArrowUpRight
                      size={20}
                      className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                    />
                  </div>
                  <p className="mt-3 max-w-md text-sm text-muted-foreground">
                    {primary.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {primary.stack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          </div>
        )}

        {/* Secondary project — smaller companion card */}
        {secondary && (
          <div className="lg:col-span-2">
            <Reveal delay={0.18}>
              <Link
                href={`/work/${secondary.slug}`}
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-8 transition-colors hover:border-primary/50"
              >
                <div>
                  <span
                    className={`${mono.className} text-xs text-muted-foreground`}
                  >
                    02
                  </span>
                  <div className="mt-4 flex items-start justify-between gap-4">
                    <h3 className="text-xl font-medium">{secondary.title}</h3>
                    <ArrowUpRight
                      size={18}
                      className="mt-1 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary"
                    />
                  </div>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {secondary.description}
                  </p>
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {secondary.stack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </Link>
            </Reveal>
          </div>
        )}
      </div>

      <Reveal delay={0.24}>
        <Link
          href="/work"
          className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          View all projects
          <ArrowUpRight size={14} />
        </Link>
      </Reveal>
    </section>
  );
}
