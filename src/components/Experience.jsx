import SectionHeader from './SectionHeader'
import { experience } from '../data/content'
import { MapPin } from 'lucide-react'

export default function Experience() {
  return (
    <section id="experience" className="border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Experience"
          title="Where I've done the work."
          description="Startup, institutional, and customer-facing environments — with a consistent thread of analytics, ML evaluation, and stakeholder reporting."
        />

        <ol className="relative space-y-8 border-l border-ink-900/10 pl-6 md:pl-8">
          {experience.map((role) => (
            <li key={role.title + role.company} className="relative">
              <span
                className="absolute -left-[31px] top-2 h-3 w-3 rounded-full border-2 border-paper bg-accent md:-left-[35px]"
                aria-hidden="true"
              />
              <div className="card">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-lg font-semibold text-ink-900 md:text-xl">
                      {role.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-accent">
                      {role.company}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-ink-700">{role.period}</p>
                    <p className="mt-1 inline-flex items-center gap-1 text-xs text-ink-500">
                      <MapPin size={12} /> {role.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 space-y-2.5">
                  {role.bullets.map((b, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm leading-relaxed text-ink-700 md:text-[15px]"
                    >
                      <span className="mt-2 inline-block h-1 w-1 flex-none rounded-full bg-ink-400" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
