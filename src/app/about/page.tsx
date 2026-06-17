import Bio from "@/components/about/bio";
import Education from "@/components/about/education";
import TechStack from "@/components/about/tech-stack";
import PageTransition from "@/components/shared/page-transition";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Bio />
      <TechStack />
      <Education />
    </PageTransition>
  );
}
