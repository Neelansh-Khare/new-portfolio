'use client'

import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineScene } from "@/components/ui/splite"
import { portfolioData } from "@/data/portfolio"

export function SplineHero() {
  return (
    <Card className="w-full h-[500px] md:h-[600px] bg-black/[0.96] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      
      <div className="flex flex-col md:flex-row h-full">
        <div className="flex-1 p-8 md:p-12 relative z-10 flex flex-col justify-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mb-4">
            {portfolioData.profile.name}
          </h1>
          <p className="text-lg md:text-xl text-neutral-300 mb-2">
            {portfolioData.profile.title}
          </p>
          <p className="mt-4 text-neutral-300 max-w-lg text-sm md:text-base">
            {portfolioData.profile.description}
          </p>
        </div>

        <div className="flex-1 relative min-h-[300px] md:min-h-0">
          <SplineScene 
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}

