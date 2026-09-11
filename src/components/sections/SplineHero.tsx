import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { SplineScene } from "@/components/ui/splite"
import { portfolioData } from "@/data/portfolio"
import { Spotlight } from "@/components/ui/spotlight"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Mail } from "lucide-react"
import profilePic from "../../../public/images/profile.jpeg"

export function SplineHero() {
  return (
    <div className="relative w-full bg-transparent overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center relative z-10">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 text-center md:text-left">
                {portfolioData.profile.name}
              </h1>
              <div className="relative w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40">
                <Image
                  src={profilePic}
                  alt={portfolioData.profile.name}
                  fill
                  className="rounded-full border-4 border-neutral-800 shadow-2xl object-cover"
                  priority
                />
              </div>
            </div>
            <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-lg text-center mx-auto">
              {portfolioData.profile.title}
            </p>
            <p className="text-neutral-400 max-w-lg text-base md:text-lg leading-relaxed text-center mx-auto">
              {portfolioData.profile.description}
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
              >
                See projects
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
              >
                <Mail className="w-4 h-4" aria-hidden="true" />
                Contact me
              </Link>
            </div>
          </div>
        }
      >
        <div className="w-full h-full">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </ContainerScroll>
    </div>
  )
}
