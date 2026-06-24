import { Navigation } from "@/components/Navigation";
import { SmoothScroll } from "@/components/SmoothScroll";
import { CursorGlow } from "@/components/CursorGlow";
import { HeroSection } from "@/components/sections/HeroSection";
import { AppsSection } from "@/components/sections/AppsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  return (
    <>
      <SmoothScroll />
      <CursorGlow />
      <Navigation />
      <main>
        <HeroSection />
        <div className="section-divider" />
        <AppsSection />
        <div className="section-divider" />
        <AboutSection />
        <div className="section-divider" />
        <TimelineSection />
        <FooterSection />
      </main>
    </>
  );
}
