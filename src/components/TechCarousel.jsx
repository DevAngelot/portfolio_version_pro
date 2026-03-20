import { motion } from 'framer-motion'

export function TechCarousel({ items }) {
  const row = [...items, ...items]

  return (
    <div className="relative overflow-hidden rounded-2xl border border-slate-200/70 bg-white/60 p-4">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white/80 to-transparent" />
      <motion.div
        className="flex gap-3"
        initial={{ x: 0 }}
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 24, ease: 'linear', repeat: Infinity }}
      >
        {row.map((t, idx) => (
          <div
            key={`${t}-${idx}`}
            className="whitespace-nowrap rounded-xl border border-slate-200 bg-white/70 px-3 py-2 text-sm text-slate-700 shadow-sm"
          >
            {t}
          </div>
        ))}
      </motion.div>
    </div>
  )
}
