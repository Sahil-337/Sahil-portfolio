import { Download, FileText } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { profile, targetRoles } from '../data/content'

export default function Resume() {
  return (
    <section id="resume" className="border-t border-ink-900/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Resume"
          title="The long version — one page."
          description="Download my resume for a detailed overview of my experience across data science, machine learning, analytics, and AI-driven systems."
        />

        <div className="card flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="flex items-start gap-4">
            <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
              <FileText size={22} />
            </span>
            <div>
              <p className="text-base font-semibold text-ink-900">
                Mohammed_Sahil_Resume.pdf
              </p>
              <p className="mt-1 text-sm text-ink-600">
                {profile.availability}
              </p>
            </div>
          </div>
          <a
            href={profile.resumePath}
            download
            className="btn-primary"
          >
            <Download size={16} /> Download Resume
          </a>
        </div>

        <div className="mt-10">
          <p className="section-label mb-3">Currently open to</p>
          <div className="flex flex-wrap gap-2">
            {targetRoles.map((r) => (
              <span key={r} className="chip">{r}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
