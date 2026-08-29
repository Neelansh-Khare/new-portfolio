import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ShaderSectionClient } from "@/components/sections/ShaderSection.client";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { SplineHeroClient } from "@/components/sections/SplineHero.client";

export default function Home() {
  return (
    <main className="min-h-screen relative z-10">
      <Navigation />
      <div className="pt-16 md:pt-20">
        <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12">
          <SplineHeroClient />
        </div>
        <AboutSection />
        <div className="container mx-auto px-4 md:px-6 pt-0 pb-8 md:pb-12">
          <ShaderSectionClient />
        </div>
        <ExperienceSection />
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
