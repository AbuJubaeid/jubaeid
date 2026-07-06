"use client";

import { siteConfig } from "@/data/site-config";
import { mono } from "@/lib/fonts";
import type { Variants } from "framer-motion";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const imageVariant: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

// A single corner bracket — four of these frame the photo like a
// selection / viewfinder, echoing bracket syntax from code.
function Corner({ className }: { className: string }) {
  return (
    <span
      aria-hidden
      className={`absolute h-6 w-6 border-primary transition-all duration-500 group-hover:h-8 group-hover:w-8 ${className}`}
    />
  );
}

export default function Hero() {
  return (
    <section className="mx-auto flex min-h-[85vh] max-w-6xl flex-col items-center justify-center gap-12 px-6 pt-28 sm:pt-10 lg:flex-row lg:justify-between lg:gap-16 lg:px-10 lg:pt-0">
      {/* Text — second on mobile, left on desktop */}
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="order-2 w-full text-center lg:order-1 lg:max-w-xl lg:text-left"
      >
        <motion.div
          variants={item}
          className={`${mono.className} mb-6 inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-[11px] uppercase tracking-[0.2em] text-muted-foreground`}
        >
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary/60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
          </span>
          Available for work
        </motion.div>

        <motion.p
          variants={item}
          className="mb-4 text-sm uppercase tracking-[0.2em] text-muted-foreground"
        >
          {siteConfig.role}
        </motion.p>

        <motion.h1
          variants={item}
          className="text-gradient text-5xl font-semibold leading-[1.05] tracking-tight sm:text-7xl"
        >
          {siteConfig.name}
        </motion.h1>

        <motion.p
          variants={item}
          className="mx-auto mt-6 max-w-lg text-lg text-muted-foreground lg:mx-0"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex items-center justify-center gap-4 lg:justify-start"
        >
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-transform hover:scale-[1.03]"
          >
            View Work
            <ArrowRight
              size={16}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Get in Touch
          </Link>
        </motion.div>
      </motion.div>

      {/* Photo — first (top) on mobile, right on desktop, framed like a selected code block */}
      <motion.div
        variants={imageVariant}
        initial="hidden"
        animate="show"
        className="group order-1 relative flex w-full max-w-[240px] items-center justify-center sm:max-w-[280px] lg:order-2 lg:max-w-[320px]"
      >
        {/* Ambient glow */}
        <div className="absolute inset-0 -z-10 scale-105 rounded-3xl bg-primary/10 blur-3xl transition-all duration-500 group-hover:bg-primary/20" />

        {/* Bracket frame — sits just outside the photo edges */}
        <Corner className="-left-3 -top-3 border-l-2 border-t-2 rounded-tl-md" />
        <Corner className="-right-3 -top-3 border-r-2 border-t-2 rounded-tr-md" />
        <Corner className="-left-3 -bottom-3 border-l-2 border-b-2 rounded-bl-md" />
        <Corner className="-right-3 -bottom-3 border-r-2 border-b-2 rounded-br-md" />

        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-border/60 shadow-xl"
        >
          <Image
            src="/images/hero-picture.jpg"
            alt={siteConfig.name}
            fill
            priority
            className="object-cover object-top transition-transform duration-500 ease-out group-hover:scale-105"
            sizes="(max-width: 1024px) 280px, 320px"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
