import Reveal from "@/components/shared/reveal";
import SectionHeading from "@/components/shared/section-heading";
import { education, experience } from "@/data/education";
import type { TimelineItem } from "@/data/education";

function Timeline({ items }: { items: TimelineItem[] }) {
  return (
    <div className="relative space-y-10 border-l border-border pl-8">
      {items.map((item, i) => (
        <Reveal key={item.title} delay={i * 0.08}>
          <div className="relative">
            <span className="absolute -left-[2.05rem] top-1.5 h-2.5 w-2.5 rounded-full bg-foreground" />
            <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
              {item.duration}
            </p>
            <h3 className="mt-1.5 text-lg font-medium">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.institution}</p>
            <p className="mt-2 max-w-xl text-sm text-muted-foreground/90">
              {item.description}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

export default function Education() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <SectionHeading eyebrow="Background" title="Education & Experience" />
      </Reveal>

      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <h3 className="mb-6 text-sm font-medium text-muted-foreground">
            Education
          </h3>
          <Timeline items={education} />
        </div>
        <div>
          <h3 className="mb-6 text-sm font-medium text-muted-foreground">
            Experience
          </h3>
          <Timeline items={experience} />
        </div>
      </div>
    </section>
  );
}
