import { Award, ExternalLink } from 'lucide-react'

export function CertCard({ cert }) {
  return <article className="group card flex min-h-56 flex-col p-7 transition-all duration-300 hover:border-[#d88a5b]">
    <div className="flex items-start justify-between gap-4">
      <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center border border-[#d88a5b] text-[#a6532f]"><Award size={25} /></span>
      <span className="border-b border-slate-300 pb-1 text-xs font-bold uppercase tracking-wider text-slate-500">{cert.badge}</span>
    </div>
    <h3 className="mt-5 text-lg font-bold leading-snug text-slate-950">{cert.title}</h3>
    <div className="mt-auto pt-6">
      {cert.credentialUrl ? <a href={cert.credentialUrl} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 border-b-2 border-[#a6532f] pb-1 text-sm font-bold text-[#7f3f24] transition hover:text-[#b85e36]">Voir le certificat <ExternalLink size={16} /></a> : <span className="text-sm font-medium text-slate-500">Certification mentionnée dans le CV</span>}
    </div>
  </article>
}
