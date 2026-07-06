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
            I am a MERN stack developer based in Dhaka, focused on building web
            applications that are fast, functional, and actually pleasant to
            use. My path here started during my CS degree at AIUB, where I moved
            from coursework into building real, full-stack projects — Firebase
            authentication, REST APIs, payment integrations — because I wanted
            to see how software actually holds up outside a classroom.
          </p>
          <p>
            These days I work mainly with React, TypeScript, Node.js, Express,
            and MongoDB. I like projects with real moving parts: user roles,
            dashboards, payments, data that needs to stay consistent —
            CivicReport (a civic issue-reporting platform with role-based
            dashboards) and ShopNest (an e-commerce platform with Stripe
            integration and full order processing) are two I am proudest of.
          </p>
          <p>
            I am still early in my career and treat that as an advantage — I am
            deliberate about learning the fundamentals properly rather than
            cutting corners, and I am looking for a team where I can keep
            building that foundation while shipping things that matter.
            Currently open to junior MERN stack roles and freelance work.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
