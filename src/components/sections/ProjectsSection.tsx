import { portfolioData } from "@/data/portfolio"

export function ProjectsSection() {
  return (
    <section id="projects" className="py-16 md:py-24 px-4 md:px-6 relative z-40 transform-gpu">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="border border-border/50 rounded-lg p-6 hover:shadow-lg transition-shadow bg-card/10 backdrop-blur-md pointer-events-auto">
              {project.link ? (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                >
                  {project.title}
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
                </a>
              ) : (
                <h3 className="text-xl font-semibold mb-2 text-foreground">{project.title}</h3>
              )}
              <p className="text-sm text-muted-foreground mb-4 font-medium">{project.tech}</p>
              <ul className="space-y-2 list-disc list-inside">
                {project.description.map((item, itemIndex) => (
                  <li key={itemIndex} className="text-sm leading-relaxed text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

