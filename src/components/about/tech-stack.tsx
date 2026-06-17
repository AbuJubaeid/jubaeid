import { Badge } from "@/components/ui/badge";
import Reveal from "@/components/shared/reveal";
import SectionHeading from "@/components/shared/section-heading";
import { techStack } from "@/data/tech-stack";

export default function TechStack() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading
          eyebrow="Skills"
          title="Tech Stack"
          description="Tools and technologies I work with regularly."
        />
      </Reveal>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {techStack.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.08}>
            <div className="rounded-2xl border border-border bg-card p-6">
              <h3 className="mb-4 text-sm font-medium text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((tech) => (
                  <Badge
                    key={tech.name}
                    variant="secondary"
                    className="rounded-full px-3 py-1 text-xs font-normal"
                  >
                    {tech.name}
                  </Badge>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
