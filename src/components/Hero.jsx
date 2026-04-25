import { ArrowUpRight, Download, Linkedin } from 'lucide-react'
import { hero, profile } from '../data/content'

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pt-28 md:pt-36">
      <div className="absolute inset-0 -z-10 hero-grid" aria-hidden="true" />
      <div className="mx-auto max-w-content px-5 pb-20 md:px-8 md:pb-28">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
          <p className="section-label">Data Science · Analytics · AI/ML</p>
        </div>

        <h1 className="mt-6 max-w-4xl font-display text-4xl leading-[1.08] tracking-tight text-ink-900 md:text-6xl lg:text-[68px]">
          {hero.headline.split('ML evaluation systems')[0]}
          <span className="italic text-accent">ML evaluation systems</span>
          {hero.headline.split('ML evaluation systems')[1]}
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-ink-600 md:text-lg">
          {hero.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href="#projects" className="btn-primary">
            View Projects <ArrowUpRight size={16} />
          </a>
          <a
            href={profile.resumePath}
            download
            className="btn-secondary"
          >
            <Download size={16} /> Download Resume
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="btn-secondary"
          >
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {hero.badges.map((b) => (
            <span key={b} className="chip">{b}</span>
          ))}
        </div>
      </div>
    </section>
  )
}
