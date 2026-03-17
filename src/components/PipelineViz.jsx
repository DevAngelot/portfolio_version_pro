import { motion } from 'framer-motion'
import { Boxes, Cloud, GitBranch, ShieldCheck, Server, Timer } from 'lucide-react'

const steps = [
  { title: 'Commit', icon: GitBranch, desc: 'Small, auditable changes with consistent branching.' },
  { title: 'CI', icon: Timer, desc: 'Automated tests, linting, and build reproducibility.' },
  { title: 'Build', icon: Boxes, desc: 'Container images and immutable artifacts.' },
  { title: 'Deploy', icon: Cloud, desc: 'Safe rollouts with IaC and environment parity.' },
  { title: 'Secure', icon: ShieldCheck, desc: 'Policy, IAM mindset, and least-privilege access.' },
  { title: 'Observe', icon: Server, desc: 'Metrics, dashboards, alerting, and SLO thinking.' },
]

export function PipelineViz() {
  return (
    <div className="grid gap-3 md:grid-cols-6">
      {steps.map((s, idx) => {
        const Icon = s.icon
        return (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.5, delay: idx * 0.06 }}
            className="card p-4"
          >
            <div className="mb-3 inline-flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-500/10 text-brand-500">
                <Icon size={18} />
              </span>
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{s.title}</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-600 dark:text-slate-200">{s.desc}</p>
          </motion.div>
        )
      })}
    </div>
  )
}
