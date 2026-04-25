import SectionHeader from './SectionHeader'
import { about } from '../data/content'
import { Check } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="border-t border-ink-900/10 bg-white">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader eyebrow="About" title="Analytics, ML, and the work around them." />

        <div className="grid gap-12 md:grid-cols-5">
          <div className="md:col-span-3 space-y-5 text-base leading-relaxed text-ink-700 md:text-lg">
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <div className="md:col-span-2">
            <p className="section-label mb-4">Quick highlights</p>
            <ul className="space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-start gap-3">
                  <span className="mt-1 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-accent/10 text-accent">
                    <Check size={12} strokeWidth={3} />
                  </span>
                  <span className="text-sm text-ink-700 md:text-base">{h}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
