"use client";

import dynamic from "next/dynamic";

const SplineHero = dynamic(() => import("@/components/sections/SplineHero").then((mod) => mod.SplineHero), {
  ssr: false,
  loading: () => <div className="w-full h-[600px] bg-black animate-pulse" />,
});

const ShaderSection = dynamic(() => import("@/components/sections/ShaderSection").then((mod) => mod.ShaderSection), {
  ssr: false,
  loading: () => <div className="w-full h-screen bg-black" />,
});

import { Navigation } from "@/components/Navigation";
import { AboutSection } from "@/components/sections/AboutSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
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
        <EducationSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </div>
    </main>
  );
}
