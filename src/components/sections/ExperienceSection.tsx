import { portfolioData } from "@/data/portfolio"

export function ExperienceSection() {
  return (
    <section id="experience" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Experience</h2>
        <div className="space-y-12">
          {portfolioData.experience.map((exp, index) => (
            <div key={index} className="border-l-2 border-primary pl-6 md:pl-8">
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white">{exp.title}</h3>
              <p className="text-white/80 font-medium mb-1">{exp.company}</p>
              <p className="text-sm text-white/60 mb-4">{exp.period}</p>
              <ul className="space-y-2 list-disc list-inside">
                {exp.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-base leading-relaxed text-white/90">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

