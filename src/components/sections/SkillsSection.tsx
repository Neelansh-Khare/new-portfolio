import { portfolioData } from "@/data/portfolio"

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Skills & Technologies</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.skills.map((category, index) => (
            <div key={index}>
              <h3 className="text-xl font-semibold mb-4 text-foreground">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-card/10 backdrop-blur-sm border border-border/50 rounded-full text-sm text-muted-foreground"
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

