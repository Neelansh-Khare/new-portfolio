import { portfolioData } from "@/data/portfolio"
import { Mail, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"

export function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-4 md:px-6 border-t border-border relative z-40 transform-gpu">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Contact</h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Feel free to reach out for collaboration opportunities, job inquiries, or just to say hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Mail className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-400 mb-1">Email</p>
              <a
                href={`mailto:${portfolioData.contact.email}`}
                className="text-white hover:text-blue-400 transition-colors break-all"
              >
                {portfolioData.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
            <Phone className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
            <div>
              <p className="text-sm text-gray-400 mb-1">Phone</p>
              <a
                href={`tel:${portfolioData.contact.phone}`}
                className="text-white hover:text-blue-400 transition-colors"
              >
                {portfolioData.contact.phone}
              </a>
            </div>
          </div>

          {portfolioData.contact.socials.map((social, index) => (
            <div key={index} className="flex items-start gap-4 p-4 rounded-lg border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-colors">
              <ExternalLink className="w-5 h-5 mt-1 text-blue-400 flex-shrink-0" />
              <div>
                <p className="text-sm text-gray-400 mb-1">{social.name}</p>
                {social.url.startsWith('/') ? (
                  <Link
                    href={social.url}
                    className="text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {social.label}
                  </Link>
                ) : (
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-blue-400 transition-colors break-all"
                  >
                    {social.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

