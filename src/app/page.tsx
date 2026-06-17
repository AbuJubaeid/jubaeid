import FeaturedWork from "@/components/home/featured-work";
import Hero from "@/components/home/hero";
import PageTransition from "@/components/shared/page-transition";

export default function Home() {
  return (
    <PageTransition>
      <Hero />
      <FeaturedWork />
    </PageTransition>
  );
}
