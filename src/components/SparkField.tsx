const SPARKS = Array.from({ length: 26 }, (_, i) => ({
  left: (i * 37) % 100,
  size: 2 + ((i * 7) % 4),
  duration: 6 + ((i * 13) % 9),
  delay: (i * 0.7) % 9,
  bottom: (i * 17) % 60,
}));

export function SparkField() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Circuit traces */}
      <svg
        className="absolute inset-0 h-full w-full animate-circuit"
        viewBox="0 0 800 600"
        preserveAspectRatio="none"
      >
        <g stroke="var(--gold)" strokeWidth="1" fill="none" opacity="0.35">
          <path className="animate-dash" d="M0 90 H210 V210 H430 V120 H800" />
          <path className="animate-dash" d="M0 480 H160 V360 H520 V470 H800" />
          <path className="animate-dash" d="M120 600 V430 H300 V300 H520 V0" />
          <path className="animate-dash" d="M660 600 V420 H760 V180" />
        </g>
        <g fill="var(--amber-glow)" opacity="0.6">
          {[
            [210, 210],
            [430, 120],
            [160, 360],
            [520, 470],
            [300, 300],
            [760, 180],
          ].map(([x, y]) => (
            <circle key={`${x}-${y}`} cx={x} cy={y} r="3.5" />
          ))}
        </g>
      </svg>

      {/* Golden particles */}
      {SPARKS.map((s, i) => (
        <span
          key={i}
          className="animate-spark absolute rounded-full bg-gold shadow-glow"
          style={{
            left: `${s.left}%`,
            bottom: `${s.bottom}%`,
            width: s.size,
            height: s.size,
            animationDuration: `${s.duration}s`,
            animationDelay: `${s.delay}s`,
          }}
        />
      ))}
    </div>
  );
}
