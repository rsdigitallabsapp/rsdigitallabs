import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { HeroSection } from "@/components/sections/HeroSection";
import { SelectedWorkSection } from "@/components/sections/SelectedWorkSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FooterSection } from "@/components/sections/FooterSection";
import { SectionSeam } from "@/components/SectionSeam";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main>
        <HeroSection />
        <SectionSeam direction="into-light" />
        <SelectedWorkSection />
        <div className="section-divider" />
        <TimelineSection />
        <div className="section-divider" />
        <AboutSection />
        <SectionSeam direction="into-dark" />
        <FooterSection formVariant="general" />
      </main>
    </>
  );
}
