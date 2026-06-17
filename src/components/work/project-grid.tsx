import Reveal from "@/components/shared/reveal";
import ProjectCard from "@/components/work/project-card";
import { projects } from "@/data/projects";

export default function ProjectGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {projects.map((project, i) => (
        <Reveal key={project.slug} delay={i * 0.08}>
          <ProjectCard project={project} />
        </Reveal>
      ))}
    </div>
  );
}
