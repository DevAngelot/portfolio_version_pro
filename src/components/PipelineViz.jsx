import { motion as Motion } from 'framer-motion'
import { Boxes, Cloud, GitBranch, ShieldCheck, Server, Timer } from 'lucide-react'

const steps = [
  { title: 'Code', icon: GitBranch, desc: 'Des changements versionnés, lisibles et vérifiables.' },
  { title: 'Tester', icon: Timer, desc: 'Tests et contrôles qualité exécutés automatiquement.' },
  { title: 'Construire', icon: Boxes, desc: 'Images conteneurisées et artefacts reproductibles.' },
  { title: 'Déployer', icon: Cloud, desc: 'Déploiements fiables grâce à l’Infrastructure as Code.' },
  { title: 'Sécuriser', icon: ShieldCheck, desc: 'Accès maîtrisés et principe du moindre privilège.' },
  { title: 'Superviser', icon: Server, desc: 'Métriques, tableaux de bord, logs et alertes.' },
]

export function PipelineViz() {
  return (
    <div className="grid gap-3 md:grid-cols-6">
      {steps.map((s, idx) => {
        const Icon = s.icon
        return (
          <Motion.div
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
              <p className="text-sm font-semibold text-slate-900">{s.title}</p>
            </div>
            <p className="text-xs leading-relaxed text-slate-600">{s.desc}</p>
          </Motion.div>
        )
      })}
    </div>
  )
}
