import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import SectionHeader from './SectionHeader'
import { projects } from '../data/content'
import { Visual } from './Visuals'

function ProjectCard({ p }) {
  const [open, setOpen] = useState(false)

  return (
    <article className="card flex flex-col overflow-hidden p-0">
      {/* Visual */}
      <div className="relative h-44 w-full overflow-hidden border-b border-ink-900/10 bg-paper">
        <Visual name={p.visual} />
      </div>

      <div className="flex flex-1 flex-col p-6">
        <p className="text-xs font-medium uppercase tracking-wider text-accent">
          {p.tag}
        </p>
        <h3 className="mt-2 text-lg font-semibold text-ink-900 md:text-xl">
          {p.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-ink-600 md:text-[15px]">
          {p.summary}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <span key={t} className="chip">{t}</span>
          ))}
        </div>

        <ul className="mt-5 space-y-1.5">
          {p.metrics.map((m) => (
            <li key={m} className="flex gap-2 text-sm text-ink-700">
              <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent" />
              <span>{m}</span>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setOpen(!open)}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-sm font-medium text-ink-900 hover:text-accent"
          aria-expanded={open}
        >
          {open ? 'Hide case study' : 'View case study'}
          {open ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>

        {open && (
          <div className="mt-6 space-y-5 border-t border-ink-900/10 pt-6">
            <CaseBlock title="Problem">{p.problem}</CaseBlock>
            <CaseBlock title="Approach">
              <ul className="space-y-1.5">
                {p.approach.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-700">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-ink-400" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseBlock>
            <CaseBlock title="Tools">
              <div className="flex flex-wrap gap-2">
                {p.tools.map((t) => (
                  <span key={t} className="chip">{t}</span>
                ))}
              </div>
            </CaseBlock>
            <CaseBlock title="Impact">
              <ul className="space-y-1.5">
                {p.impact.map((a, i) => (
                  <li key={i} className="flex gap-2 text-sm text-ink-700">
                    <span className="mt-1.5 inline-block h-1 w-1 flex-none rounded-full bg-accent" />
                    <span>{a}</span>
                  </li>
                ))}
              </ul>
            </CaseBlock>
            <CaseBlock title="What this shows">{p.demonstrates}</CaseBlock>
            {p.note && (
              <p className="text-xs italic text-ink-500">{p.note}</p>
            )}
          </div>
        )}
      </div>
    </article>
  )
}

function CaseBlock({ title, children }) {
  return (
    <div>
      <h4 className="text-xs font-semibold uppercase tracking-wider text-ink-500">
        {title}
      </h4>
      <div className="mt-2 text-sm leading-relaxed text-ink-700 md:text-[15px]">
        {children}
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="border-t border-ink-900/10">
      <div className="mx-auto max-w-content px-5 py-20 md:px-8 md:py-28">
        <SectionHeader
          eyebrow="Projects & Case Studies"
          title="Work, the story behind it, and what it moved."
          description="Each case study follows the same structure: the problem, how I approached it, the tools, and the measurable impact."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <ProjectCard key={p.id} p={p} />
          ))}
        </div>
      </div>
    </section>
  )
}
