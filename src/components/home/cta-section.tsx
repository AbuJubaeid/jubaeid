import Reveal from "@/components/shared/reveal";
import SectionLabel from "@/components/home/section-label";
import { siteConfig } from "@/data/site-config";
import { mono } from "@/lib/fonts";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="border-t border-border bg-secondary/20">
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <Reveal>
          <div className="flex justify-center">
            <SectionLabel index="04" label="Get in touch" />
          </div>
        </Reveal>

        <Reveal delay={0.05}>
          <h2 className="mx-auto max-w-2xl text-4xl font-semibold tracking-tight sm:text-6xl">
            Got a project in mind?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-md text-muted-foreground">
            I&apos;m currently open to new opportunities and freelance work.
            Let&apos;s talk about what you&apos;re building.
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
            >
              Start a conversation
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
            {siteConfig.email && (
              <a
                href={`mailto:${siteConfig.email}`}
                className={`${mono.className} text-sm text-muted-foreground transition-colors hover:text-foreground`}
              >
                {siteConfig.email}
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
