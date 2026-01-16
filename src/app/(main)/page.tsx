"use client";

import { Navigation } from "@/components/Navigation";
import { SplineHero } from "@/components/sections/SplineHero";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ShaderSection } from "@/components/sections/ShaderSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12">
          <SplineHero />
        </div>
        <AboutSection />
        <div className="container mx-auto px-4 md:px-6 pt-0 pb-8 md:pb-12">
          <ShaderSection />
        </div>
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
