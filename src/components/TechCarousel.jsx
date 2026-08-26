import { motion as Motion } from 'framer-motion'

export function TechCarousel({ items }) {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-transparent py-4">
      <Motion.div
        className="flex items-center gap-8"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      >
        {row.map((t, idx) => (
          <div
            key={`${t}-${idx}`}
            className="flex items-center gap-8 whitespace-nowrap text-xs font-bold uppercase tracking-[.16em] text-slate-400 after:h-1 after:w-1 after:bg-[#d88a5b] after:content-['']"
          >
            {t}
          </div>
        ))}
      </Motion.div>
    </div>
  )
}
