import { Award, ExternalLink } from 'lucide-react'
import { Button } from './Button.jsx'

export function CertCard({ cert }) {
  return (
    <article className="card overflow-hidden">
      <div className="relative">
        <img src={cert.image} alt="" className="h-44 w-full border-2 border-slate-200/70 object-cover dark:border-slate-700" loading="lazy" />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between gap-3">
          <p className="text-sm font-semibold text-white">{cert.title}</p>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs text-white">
            <Award size={14} /> {cert.badge}
          </span>
        </div>
      </div>
      <div className="p-5">
        <Button as="a" href={cert.credentialUrl} target="_blank" rel="noreferrer" variant="secondary" className="w-full">
          View Credential <ExternalLink size={16} />
        </Button>
      </div>
    </article>
  )
}
