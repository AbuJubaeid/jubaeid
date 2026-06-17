import Reveal from "@/components/shared/reveal";
import { siteConfig } from "@/data/site-config";

export default function Bio() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16">
      <Reveal>
        <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          About
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Hi, I&apos;m {siteConfig.name.split(" ")[0]}.
        </h1>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-8 max-w-2xl space-y-4 text-muted-foreground">
          <p>
            Replace this paragraph with your real story — where you started,
            what got you into development, and what drives you today. Keep it
            personal and specific rather than generic.
          </p>
          <p>
            Mention what kind of problems you enjoy solving, the type of
            projects or teams you work best with, and anything that makes
            your background distinct (self-taught, bootcamp, CS degree,
            career switch, etc).
          </p>
          <p>
            Based in {siteConfig.location}. Currently open to{" "}
            {siteConfig.role.toLowerCase()} roles and freelance work.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
