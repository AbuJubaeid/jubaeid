import Reveal from "@/components/shared/reveal";
import SectionLabel from "@/components/home/section-label";
import { siteConfig } from "@/data/site-config";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function AboutTeaser() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-24">
      <Reveal>
        <SectionLabel index="03" label="About" />
      </Reveal>

      <div className="grid gap-10 lg:grid-cols-[auto_1fr] lg:items-start lg:gap-16">
        <Reveal delay={0.05}>
          <span
            aria-hidden
            className="text-gradient block text-8xl font-semibold leading-none sm:text-9xl"
          >
            &ldquo;
          </span>
        </Reveal>

        <Reveal delay={0.1}>
          <blockquote>
            <p className="max-w-2xl text-2xl font-medium leading-snug tracking-tight sm:text-3xl">
              {/* Replace this with a real, specific pull-quote from your own
              story — one or two sentences that capture how you think about
              your work, not a generic summary. */}
              I care more about the problem being solved well than the
              framework used to solve it — good software should feel
              invisible to the people using it.
            </p>
          </blockquote>

          <p className="mt-6 max-w-lg text-muted-foreground">
            Based in {siteConfig.location}, working as a{" "}
            {siteConfig.role.toLowerCase()}.
          </p>

          <Link
            href="/about"
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Read the full story
            <ArrowUpRight size={14} />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
