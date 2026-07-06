import Reveal from "@/components/shared/reveal";
import { siteConfig } from "@/data/site-config";
import { mono } from "@/lib/fonts";

// Edit EXPERIENCE_YEARS to match your actual experience.
const EXPERIENCE_YEARS = "1+";

const facts = [
  { label: "Based in", value: siteConfig.location },
  { label: "Focus", value: siteConfig.role },
  { label: "Experience", value: `${EXPERIENCE_YEARS} years` },
  { label: "Status", value: "Open to freelance/desk-job" },
];

export default function StatusStrip() {
  return (
    <section className="border-y border-border bg-secondary/20">
      <Reveal>
        <div className="mx-auto flex max-w-6xl flex-wrap items-center divide-x divide-border overflow-x-auto px-6">
          {facts.map((fact) => (
            <div
              key={fact.label}
              className="flex flex-1 flex-col gap-1 whitespace-nowrap px-6 py-5 first:pl-0 last:pr-0"
            >
              <span
                className={`${mono.className} text-[10px] uppercase tracking-[0.2em] text-muted-foreground`}
              >
                {fact.label}
              </span>
              <span className="text-sm font-medium text-foreground">
                {fact.value}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
