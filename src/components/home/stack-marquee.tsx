import Reveal from "@/components/shared/reveal";
import SectionLabel from "@/components/home/section-label";
import { techStack } from "@/data/tech-stack";

// Flatten the grouped tech-stack data into two rows for the marquee.
const allTech = techStack.flatMap((group) => group.items.map((t) => t.name));
const half = Math.ceil(allTech.length / 2);
const rowA = allTech.slice(0, half);
const rowB = allTech.slice(half);

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  // Duplicate the list so the loop is seamless.
  const looped = [...items, ...items];

  return (
    <div
      className="flex w-max gap-4 [animation:marquee_28s_linear_infinite] hover:[animation-play-state:paused] motion-reduce:animate-none"
      style={{
        animationDirection: reverse ? "reverse" : "normal",
      }}
    >
      {looped.map((name, i) => (
        <span
          key={`${name}-${i}`}
          className="whitespace-nowrap rounded-full border border-border bg-card px-5 py-2.5 text-sm text-muted-foreground"
        >
          {name}
        </span>
      ))}
    </div>
  );
}

export default function StackMarquee() {
  return (
    <section className="border-y border-border py-24">
      <div className="mx-auto max-w-6xl px-6">
        <Reveal>
          <SectionLabel index="02" label="Tools & technologies" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="max-w-2xl text-3xl font-semibold tracking-tight sm:text-4xl">
            What I build with.
          </h2>
        </Reveal>
      </div>

      <div
        className="mt-12 space-y-4 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] [-webkit-mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
      >
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>

      {/* Keyframes for the marquee — scoped to this component via a plain style tag */}
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
