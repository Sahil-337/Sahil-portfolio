export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-12 max-w-3xl">
      <p className="section-label">{eyebrow}</p>
      <h2 className="mt-3 font-display text-3xl leading-tight tracking-tight text-ink-900 md:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-base leading-relaxed text-ink-600 md:text-lg">
          {description}
        </p>
      )}
    </div>
  )
}
