// Clean, abstract visuals. No fake data or pretend screenshots.
// Each visual is a small SVG composition that hints at the domain.

export function MlFrameworkVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="mlg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B3D2E" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#0B3D2E" stopOpacity="0.02" />
        </linearGradient>
      </defs>
      <rect width="400" height="220" fill="url(#mlg)" />
      {/* Nodes */}
      {[40, 110, 180, 250, 320].map((x, i) => (
        <g key={i}>
          <circle cx={x} cy="80" r="10" fill="#0B3D2E" opacity={0.15 + i * 0.15} />
          <circle cx={x} cy="150" r="10" fill="#0B3D2E" opacity={0.9 - i * 0.15} />
        </g>
      ))}
      {/* Connectors */}
      {[
        [40, 110], [110, 180], [180, 250], [250, 320],
      ].map(([a, b], i) => (
        <line key={i} x1={a} y1="80" x2={b} y2="150" stroke="#0B3D2E" strokeWidth="1" opacity="0.35" />
      ))}
      <text x="20" y="30" fontSize="11" fill="#0B1220" opacity="0.5" fontFamily="Inter">
        ML validation pipeline
      </text>
    </svg>
  )
}

export function DashboardVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0B3D2E" opacity="0.04" />
      {/* KPI tiles */}
      <g transform="translate(20,20)">
        {[0, 1, 2].map((i) => (
          <rect key={i} x={i * 120} y="0" width="110" height="46" rx="8" fill="#fff" stroke="#0B1220" strokeOpacity="0.08" />
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={`k${i}`} x={i * 120 + 12} y="10" width="50" height="6" rx="3" fill="#0B3D2E" opacity="0.5" />
        ))}
        {[0, 1, 2].map((i) => (
          <rect key={`v${i}`} x={i * 120 + 12} y="24" width="80" height="12" rx="3" fill="#0B1220" opacity="0.8" />
        ))}
      </g>
      {/* Bar chart */}
      <g transform="translate(20,90)">
        <rect width="360" height="110" rx="8" fill="#fff" stroke="#0B1220" strokeOpacity="0.08" />
        {[28, 54, 72, 45, 88, 62, 76].map((h, i) => (
          <rect key={i} x={20 + i * 48} y={100 - h} width="26" height={h} rx="3" fill="#0B3D2E" opacity={0.35 + (i % 3) * 0.2} />
        ))}
      </g>
    </svg>
  )
}

export function NlpVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0B3D2E" opacity="0.04" />
      {/* Word blocks */}
      {[
        { x: 30, y: 40, w: 70, t: 'support' },
        { x: 110, y: 40, w: 56, t: 'culture' },
        { x: 176, y: 40, w: 44, t: 'ethics' },
        { x: 230, y: 40, w: 64, t: 'response' },
        { x: 304, y: 40, w: 70, t: 'analytics' },
        { x: 50, y: 78, w: 58, t: 'survey' },
        { x: 118, y: 78, w: 74, t: 'sentiment' },
        { x: 202, y: 78, w: 50, t: 'student' },
        { x: 262, y: 78, w: 62, t: 'feedback' },
        { x: 334, y: 78, w: 42, t: 'model' },
      ].map((w, i) => (
        <g key={i}>
          <rect x={w.x} y={w.y} width={w.w} height="22" rx="11" fill="#fff" stroke="#0B1220" strokeOpacity="0.08" />
          <text x={w.x + w.w / 2} y={w.y + 15} fontSize="10" fill="#0B1220" opacity="0.7" fontFamily="Inter" textAnchor="middle">{w.t}</text>
        </g>
      ))}
      {/* Flow lines */}
      <path d="M 30 140 C 120 140, 120 180, 370 180" stroke="#0B3D2E" strokeOpacity="0.4" fill="none" strokeWidth="1.5" />
      <circle cx="30" cy="140" r="5" fill="#0B3D2E" />
      <circle cx="370" cy="180" r="5" fill="#0B3D2E" />
      <text x="30" y="200" fontSize="10" fill="#0B1220" opacity="0.5" fontFamily="Inter">text input</text>
      <text x="330" y="168" fontSize="10" fill="#0B1220" opacity="0.5" fontFamily="Inter">insight</text>
    </svg>
  )
}

export function CommunityVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0B3D2E" opacity="0.04" />
      {/* Central hub */}
      <circle cx="200" cy="110" r="26" fill="#0B3D2E" opacity="0.85" />
      <text x="200" y="114" fontSize="10" fill="#FAFAF7" fontFamily="Inter" textAnchor="middle">250+</text>
      {/* Spokes */}
      {[
        [80, 50], [320, 50], [60, 150], [340, 150], [200, 30], [200, 190],
      ].map(([x, y], i) => (
        <g key={i}>
          <line x1="200" y1="110" x2={x} y2={y} stroke="#0B1220" strokeOpacity="0.2" />
          <circle cx={x} cy={y} r="14" fill="#fff" stroke="#0B1220" strokeOpacity="0.15" />
        </g>
      ))}
      <text x="20" y="210" fontSize="10" fill="#0B1220" opacity="0.5" fontFamily="Inter">projects → partnerships → impact</text>
    </svg>
  )
}

export function ProductVisual() {
  return (
    <svg viewBox="0 0 400 220" className="h-full w-full" aria-hidden="true">
      <rect width="400" height="220" fill="#0B3D2E" opacity="0.04" />
      {/* Feedback loop */}
      <path
        d="M 100 110 C 100 50, 300 50, 300 110 C 300 170, 100 170, 100 110 Z"
        fill="none"
        stroke="#0B3D2E"
        strokeWidth="2"
        strokeOpacity="0.5"
        strokeDasharray="4 4"
      />
      {[
        { x: 100, y: 110, t: 'user' },
        { x: 200, y: 50, t: 'signal' },
        { x: 300, y: 110, t: 'model' },
        { x: 200, y: 170, t: 'action' },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="16" fill="#fff" stroke="#0B1220" strokeOpacity="0.15" />
          <text x={n.x} y={n.y + 4} fontSize="9" fill="#0B1220" opacity="0.8" fontFamily="Inter" textAnchor="middle">{n.t}</text>
        </g>
      ))}
      <text x="20" y="210" fontSize="10" fill="#0B1220" opacity="0.5" fontFamily="Inter">feedback loop</text>
    </svg>
  )
}

export function Visual({ name }) {
  switch (name) {
    case 'mlFramework': return <MlFrameworkVisual />
    case 'dashboard': return <DashboardVisual />
    case 'nlp': return <NlpVisual />
    case 'community': return <CommunityVisual />
    case 'product': return <ProductVisual />
    default: return <DashboardVisual />
  }
}
