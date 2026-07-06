import type { Project } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/work/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-border bg-card transition-colors hover:border-muted-foreground/40"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs text-muted-foreground">{project.year}</p>
            <h3 className="mt-1 text-lg font-medium">{project.title}</h3>
          </div>
          <ArrowUpRight
            size={18}
            className="mt-1 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
          />
        </div>
        <p className="mt-3 text-sm text-muted-foreground">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.stack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
