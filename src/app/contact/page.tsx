import ContactForm from "@/components/contact/contact-form";
import PageTransition from "@/components/shared/page-transition";
import Reveal from "@/components/shared/reveal";
import { siteConfig } from "@/data/site-config";
import { Mail, MapPin } from "lucide-react";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-5xl px-6 py-16">
        <Reveal>
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Contact
          </p>
          <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
            Let&apos;s work together.
          </h1>
          <p className="mt-4 max-w-md text-muted-foreground">
            Have a project in mind or just want to say hi? Fill out the form or
            reach out directly.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.1}>
            <div className="space-y-6">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-muted-foreground" />
                <Link
                  href={`mailto:${siteConfig.email}`}
                  className="transition-colors hover:text-muted-foreground"
                >
                  {siteConfig.email}
                </Link>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-muted-foreground" />
                <span>{siteConfig.location}</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaGithub size={16} className="text-muted-foreground" />
                <Link
                  href={siteConfig.social.github}
                  target="_blank"
                  className="transition-colors hover:text-muted-foreground"
                >
                  GitHub
                </Link>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <FaLinkedin size={16} className="text-muted-foreground" />
                <Link
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  className="transition-colors hover:text-muted-foreground"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </PageTransition>
  );
}
