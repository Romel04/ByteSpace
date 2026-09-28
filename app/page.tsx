import { Footer } from "@/components/layout/Footer";
import { CourseDiscovery } from "@/components/sections/CourseDiscovery";
import { CreatorCTA } from "@/components/sections/CreatorCTA";
import { GrowthSection } from "@/components/sections/GrowthSection";
import { Hero } from "@/components/sections/Hero";
import { LearningPaths } from "@/components/sections/LearningPaths";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <main>
        <Hero />
        <LogoStrip />
        <CourseDiscovery />
        <LearningPaths />
        <GrowthSection />
        <CreatorCTA />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
