import PageTransition from "@/components/shared/page-transition";
import Reveal from "@/components/shared/reveal";
import { projects } from "@/data/projects";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project?.title ?? "Project" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) notFound();

  return (
    <PageTransition>
      <article className="mx-auto max-w-3xl px-6 py-16">
        <Reveal>
          <Link
            href="/work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft size={14} />
            Back to work
          </Link>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="mt-6 text-4xl font-semibold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{project.year}</span>
            <span aria-hidden>•</span>
            <span>{project.role}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-8 aspect-[16/9] rounded-2xl bg-secondary" />
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mt-8 text-muted-foreground">
            {project.longDescription}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
              >
                Live Site
                <ExternalLink size={14} />
              </Link>
            )}
            {project.githubUrl && (
              <Link
                href={project.githubUrl}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Source Code
                <Github size={14} />
              </Link>
            )}
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
