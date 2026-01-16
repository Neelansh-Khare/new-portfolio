import { portfolioData } from "@/data/portfolio"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 bg-black/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-white">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="border border-white/20 rounded-lg p-6 hover:shadow-lg transition-shadow bg-black/30">
              <h3 className="text-xl font-semibold mb-2 text-white">{project.title}</h3>
              <p className="text-sm text-white/70 mb-4 font-medium">{project.tech}</p>
              <ul className="space-y-2 list-disc list-inside">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm leading-relaxed text-white/90">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

