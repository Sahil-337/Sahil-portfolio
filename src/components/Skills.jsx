import SectionHeader from './SectionHeader'
import { skills } from '../data/content'

export default function Skills() {
  return (
    <section id="skills" className="border-t border-ink-900/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Skills"
          title="Tools and methods I use day to day."
          description="Grouped by how I actually work — programming, data and BI, ML, NLP, and the business side."
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((s) => (
            <div key={s.group} className="card">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-ink-500">
                {s.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-ink-900/10 bg-paper px-2.5 py-1 text-xs font-medium text-ink-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
