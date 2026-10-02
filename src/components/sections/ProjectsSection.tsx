import { portfolioData } from "@/data/portfolio"

// Plain <img> src strings aren't prefixed with next.config's basePath, so do it here.
const BASE_PATH = "/new-portfolio"

function ExternalLinkIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-external-link"><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
  )
}

export function ProjectsSection() {
  return (
    <section
      aria-label="Projects"
      className="pt-4 md:pt-6 pb-16 md:pb-24 px-4 md:px-6 relative z-40 transform-gpu"
    >
      <div className="max-w-4xl mx-auto">
        <div className="grid gap-8 md:grid-cols-2">
          {portfolioData.projects.map((project, index) => (
            <div key={index} className="border border-border/50 rounded-lg overflow-hidden hover:shadow-lg transition-shadow bg-card/10 backdrop-blur-md pointer-events-auto flex flex-col">
              {project.image && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block aspect-[16/10] overflow-hidden border-b border-border/50 bg-black/40"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={`${BASE_PATH}${project.image}`}
                    alt=""
                    loading="lazy"
                    width={1280}
                    height={800}
                    className="h-full w-full object-cover object-top transition-transform duration-300 hover:scale-[1.02]"
                  />
                </a>
              )}
              <div className="p-6">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xl font-semibold mb-2 text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {project.title}
                    <ExternalLinkIcon />
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
            </div>
          ))}
        </div>

        {portfolioData.research.length > 0 && (
          <div id="research" className="mt-16 scroll-mt-20">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-foreground">Research</h2>
            <div className="space-y-6">
              {portfolioData.research.map((item, index) => (
                <div key={index} className="border-l-2 border-primary pl-6 md:pl-8 pointer-events-auto">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg md:text-xl font-semibold mb-1 text-foreground hover:text-primary transition-colors inline-flex items-center gap-2"
                  >
                    {item.title}
                    <ExternalLinkIcon />
                  </a>
                  <p className="text-sm text-muted-foreground mb-2 font-medium">{item.tech}</p>
                  <p className="text-sm md:text-base leading-relaxed text-muted-foreground">{item.summary}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
