import { Mail, Linkedin, MapPin, Download } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile } from '../data/content'

export default function Contact() {
  return (
    <section id="contact" className="border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Contact"
          title="Let's talk."
          description="Interested in discussing data, BI, product analytics, or AI/ML analyst opportunities? I'd love to hear about your team."
        />

        <div className="grid gap-6 md:grid-cols-3">
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
            icon={<MapPin size={20} />}
            label="Location"
            value={profile.location}
            href={null}
            cta={null}
          />
        </div>

        <div className="mt-10 flex flex-wrap gap-3">
          <a href={`mailto:${profile.email}`} className="btn-primary">
            <Mail size={16} /> Email Me
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
          <a
            href={profile.resumePath}
            download
            className="btn-secondary"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>
      </div>
    </section>
  )
}

function ContactCard({ icon, label, value, href, cta }) {
  return (
    <div className="card">
      <div className="flex items-start gap-3">
        <span className="inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
          {icon}
        </span>
        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-wider text-ink-500">
            {label}
          </p>
          <p className="mt-1 truncate text-base font-medium text-ink-900">
            {value}
          </p>
          {href && cta && (
            <a
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className="link-underline mt-3 inline-block text-sm font-medium text-accent"
            >
              {cta} →
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
