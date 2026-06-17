import PageTransition from "@/components/shared/page-transition";
import Reveal from "@/components/shared/reveal";
import SectionHeading from "@/components/shared/section-heading";
import ProjectGrid from "@/components/work/project-grid";

export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="mx-auto max-w-6xl px-6 py-16">
        <Reveal>
          <SectionHeading
            eyebrow="Portfolio"
            title="Selected Work"
            description="A collection of projects I've designed and built. Click into any project for more detail."
          />
        </Reveal>
        <ProjectGrid />
      </section>
    </PageTransition>
  );
}
