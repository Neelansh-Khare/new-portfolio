import { portfolioData } from "@/data/portfolio"

export function AboutSection() {
  return (
    <section id="about" className="pt-8 md:pt-12 pb-16 md:pb-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">About Me</h2>
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          {portfolioData.about.map((paragraph, index) => (
            <p key={index} className="text-white/90">{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}

