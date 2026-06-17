import Reveal from "@/components/shared/reveal";
import SectionHeading from "@/components/shared/section-heading";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function FeaturedWork() {
  const featured = projects.slice(0, 2);

  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionHeading eyebrow="Selected Work" title="Featured Projects" />
      </Reveal>

      <div className="grid gap-6 sm:grid-cols-2">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <Link
              href={`/work/${project.slug}`}
              className="group block rounded-2xl border border-border bg-card p-6 transition-colors hover:border-muted-foreground/40"
            >
              <div className="flex items-start justify-between">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <ArrowUpRight
                  size={18}
                  className="text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {project.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.stack.slice(0, 3).map((tech) => (
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
        ))}
      </div>

      <Reveal delay={0.2}>
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
