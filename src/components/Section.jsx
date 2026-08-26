import { motion as Motion } from 'framer-motion'

export function Section({ id, eyebrow, title, children }) {
  return (
    <section id={id} className="relative py-16 sm:py-24">
      <div className="container-page">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-120px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-8"
        >
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.24em] text-[#e5a17a]">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="max-w-3xl text-3xl font-black tracking-tight text-white sm:text-4xl">
            {title}
          </h2>
        </Motion.div>
        {children}
      </div>
    </section>
  )
}
