import SectionHeader from './SectionHeader'
import { education, certifications } from '../data/content'
import { GraduationCap, Award } from 'lucide-react'

export default function Education() {
  return (
    <section id="education" className="border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader eyebrow="Education & Certifications" title="Foundation." />

        <div className="grid gap-8 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            {education.map((e) => (
              <div key={e.school} className="card">
                <div className="flex items-start gap-4">
                  <span className="mt-1 inline-flex h-10 w-10 flex-none items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <GraduationCap size={20} />
                  </span>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-ink-900">
                          {e.school}
                        </h3>
                        <p className="text-sm text-ink-600">{e.location}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-ink-700">{e.date}</p>
                        <p className="text-xs text-ink-500">GPA: {e.gpa}</p>
                      </div>
                    </div>
                    <p className="mt-2 text-sm font-medium text-accent">{e.degree}</p>
                    <ul className="mt-4 space-y-1.5">
                      {e.highlights.map((h, i) => (
                        <li key={i} className="flex gap-2 text-sm text-ink-700">
                          <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-ink-400" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <p className="section-label mb-4">Certifications</p>
            <div className="space-y-3">
              {certifications.map((c) => (
                <div
                  key={c.name}
                  className="flex items-start gap-3 rounded-xl border border-ink-900/10 bg-paper p-4"
                >
                  <span className="mt-0.5 inline-flex h-8 w-8 flex-none items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Award size={16} />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ink-900">{c.name}</p>
                    <p className="mt-0.5 text-xs text-ink-600">{c.issuer}</p>
                    <p className="mt-0.5 text-xs text-ink-500">{c.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
