const PIECES = Array.from({ length: 44 }, (_, i) => ({
  left: (i * 23) % 100,
  delay: ((i * 31) % 40) / 10,
  duration: 4.5 + ((i * 11) % 30) / 10,
  width: 5 + ((i * 5) % 5),
  height: 9 + ((i * 7) % 8),
  tone: i % 3,
}));

const TONES = ["bg-gold", "bg-amber-glow", "bg-cream"];

export function Confetti({ active }: { active: boolean }) {
  if (!active) return null;

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {PIECES.map((p, i) => (
        <span
          key={i}
          className={`animate-confetti absolute top-0 rounded-[2px] ${TONES[p.tone]}`}
          style={{
            left: `${p.left}%`,
            width: p.width,
            height: p.height,
            opacity: 0.9,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  );
}
