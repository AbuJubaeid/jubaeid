import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FaGithub } from "react-icons/fa";

import PageTransition from "@/components/shared/page-transition";
import Reveal from "@/components/shared/reveal";
import { projects } from "@/data/projects";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageTransition>
      <article className="mx-auto max-w-4xl px-6 py-16">
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

          <p className="mt-4 text-lg text-muted-foreground">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            <span>{project.year}</span>
            <span>•</span>
            <span>{project.role}</span>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative mt-8 overflow-hidden rounded-2xl border border-border">
            <Image
              src={project.image}
              alt={project.title}
              width={1200}
              height={675}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">Overview</h2>

            <p className="leading-7 text-muted-foreground">
              {project.longDescription}
            </p>
          </div>

          <div className="mt-8">
            <h2 className="mb-3 text-xl font-semibold">Tech Stack</h2>

            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {project.liveUrl && (
              <Link
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
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
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary"
              >
                Source Code
                <FaGithub size={14} />
              </Link>
            )}
          </div>
        </Reveal>
      </article>
    </PageTransition>
  );
}
