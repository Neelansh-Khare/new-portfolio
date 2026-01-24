import { ContainerScroll } from "@/components/ui/container-scroll-animation"
import { SplineScene } from "@/components/ui/splite"
import { portfolioData } from "@/data/portfolio"
import { Spotlight } from "@/components/ui/spotlight"

export function SplineHero() {
  return (
    <div className="relative w-full bg-black overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <ContainerScroll
        titleComponent={
          <div className="flex flex-col items-center justify-center relative z-10">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50 mb-6 text-center">
              {portfolioData.profile.name}
            </h1>
            <p className="text-xl md:text-2xl text-neutral-300 mb-4 max-w-lg text-center mx-auto">
              {portfolioData.profile.title}
            </p>
            <p className="text-neutral-400 max-w-lg text-base md:text-lg leading-relaxed text-center mx-auto">
              {portfolioData.profile.description}
            </p>
          </div>
        }
      >
        <div className="w-full h-full bg-black/40">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </ContainerScroll>
    </div>
  )
}

