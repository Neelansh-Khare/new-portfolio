import { portfolioData } from "@/data/portfolio"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-white">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-black/30 border border-white/20 rounded-full text-sm text-white"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

