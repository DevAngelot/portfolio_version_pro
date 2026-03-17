import { motion } from 'framer-motion'

export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="py-14 sm:py-20">
      <div className="container-page">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          {eyebrow ? (
            <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-500/90">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-50 sm:text-3xl">
            {title}
          </h2>
        </motion.div>
        {children}
      </div>
    </section>
  )
}
