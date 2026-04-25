import { Mail, Linkedin, MapPin, Download, Github } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-900/10 bg-white dark:border-white/10 dark:bg-night-800/50">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-24">
        <SectionHeader
          num={8}
          eyebrow="Contact"
          title="Let's connect."
          description="Based in Chicago, available across U.S. time zones. Happy to discuss data, analytics, BI, product analytics, ML/AI, or research-engineering opportunities."
        />

        <div className="grid gap-6 md:grid-cols-4">
          <ContactCard
            icon={<Mail size={20} />}
            label="Email"
            value={profile.email}
            href={`mailto:${profile.email}`}
            cta="Email me"
          />
          <ContactCard
            icon={<Linkedin size={20} />}
            label="LinkedIn"
            value="/in/mohammed-sahil-d2d15"
            href={profile.linkedin}
            cta="Open LinkedIn"
          />
          <ContactCard
            icon={<Github size={20} />}
            label="GitHub"
            value="/Sahil-337"
            href={profile.github}
            cta="View GitHub"
          />
          <ContactCard
            icon={<MapPin size={20} />}
            label="Location"
            value={profile.location}
            href={null}
            cta={null}
          />
        </div>

        <div className="mt-8 rounded-2xl border border-accent/20 bg-accent/5 p-6 dark:border-accent-glow/20 dark:bg-accent-glow/5">
          <p className="text-sm leading-relaxed text-ink-800 dark:text-ink-100 md:text-base">
            If you're hiring for a Data Scientist, ML/AI Analyst, Data Analyst, BI Analyst, Product Analyst, or Analytics Engineer role — I'd love to talk. {profile.tagline}.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a href={`mailto:${profile.email}`} className="btn-primary">
              <Mail size={16} /> Email Me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              <Github size={16} /> GitHub
            </a>
            <a href={profile.resumePath} download className="btn-secondary">
              <Download size={16} /> Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, cta }) {
  return (
    <div className="card card-hover">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent dark:bg-accent-glow/15 dark:text-accent-glow">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wider text-ink-500 dark:text-ink-300">
            {label}
          </p>
          <p className="mt-1 truncate text-sm font-medium text-ink-900 dark:text-ink-100">
            {value}
          </p>
          {href && cta && (
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="link-underline mt-3 inline-block text-sm font-medium text-accent dark:text-accent-glow"
            >
              {cta} →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
