import { portfolioData } from "@/data/portfolio"
import { Mail, Phone, ExternalLink } from "lucide-react"
import Link from "next/link"
import { CopyableValue } from "@/components/ui/CopyableValue"

export function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 px-4 md:px-6 border-t border-border relative z-40 transform-gpu"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
          Contact
        </h2>
        <p className="mb-12 text-lg text-muted-foreground">
          Feel free to reach out for collaboration opportunities, job inquiries,
          or just to say hello!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/10 backdrop-blur-md hover:bg-card/20 transition-colors">
            <Mail
              className="w-5 h-5 mt-1 text-primary flex-shrink-0"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <CopyableValue
                value={portfolioData.contact.email}
                href={`mailto:${portfolioData.contact.email}`}
                label="email"
              />
            </div>
          </div>

          <div className="flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/10 backdrop-blur-md hover:bg-card/20 transition-colors">
            <Phone
              className="w-5 h-5 mt-1 text-primary flex-shrink-0"
              aria-hidden="true"
            />
            <div className="min-w-0 flex-1">
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <CopyableValue
                value={portfolioData.contact.phone}
                href={`tel:${portfolioData.contact.phone}`}
                label="phone number"
              />
            </div>
          </div>

          {portfolioData.contact.socials.map((social, index) => {
            const isInternal = social.url.startsWith("/");
            const cardClass =
              "flex items-start gap-4 p-4 rounded-lg border border-border/50 bg-card/10 backdrop-blur-md hover:bg-card/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50";
            const inner = (
              <>
                <ExternalLink
                  className="w-5 h-5 mt-1 text-primary flex-shrink-0"
                  aria-hidden="true"
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-muted-foreground mb-1">
                    {social.name}
                  </p>
                  <span className="text-foreground break-all">
                    {social.label}
                  </span>
                </div>
              </>
            );
            return isInternal ? (
              <Link key={index} href={social.url} className={cardClass}>
                {inner}
              </Link>
            ) : (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}
