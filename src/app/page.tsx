import Hero from "@/components/home/hero";
import StatusStrip from "@/components/home/status-strip";
import WorkPreview from "@/components/home/work-preview";
import StackMarquee from "@/components/home/stack-marquee";
import AboutTeaser from "@/components/home/about-teaser";
import CtaSection from "@/components/home/cta-section";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <StatusStrip />
      <WorkPreview />
      <StackMarquee />
      <AboutTeaser />
      <CtaSection />
    </main>
  );
}
