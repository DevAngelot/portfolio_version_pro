import { ExternalLink, Github } from 'lucide-react'

function Tag({ children }) {
  return <span className="border-b border-slate-300 pb-1 text-xs text-slate-600">{children}</span>
}

export function ProjectCard({ project }) {
  return <article className="group card flex h-full flex-col p-7 transition-all duration-300 hover:border-[#d88a5b]">
    <div className="space-y-3">
      {project.date && <p className="text-xs font-bold uppercase tracking-[.18em] text-[#a6532f]">{project.date}</p>}
      <h3 className="text-xl font-bold leading-tight text-slate-950">{project.title}</h3>
      <p className="text-sm leading-7 text-slate-600">{project.description}</p>
    </div>
    <div className="mt-5 flex flex-wrap gap-2">{project.technologies?.map(t => <Tag key={t}>{t}</Tag>)}</div>
    <div className="mt-auto flex flex-wrap gap-3 pt-6">
      {project.links?.github && <a className="inline-flex items-center gap-2 border-b border-slate-400 pb-1 text-sm font-bold text-slate-800 transition hover:border-[#a6532f] hover:text-[#a6532f]" href={project.links.github} target="_blank" rel="noreferrer"><Github size={16} />Code source</a>}
      {project.links?.demo && <a className="inline-flex items-center gap-2 border-b-2 border-[#a6532f] pb-1 text-sm font-bold text-[#7f3f24] transition hover:text-[#b85e36]" href={project.links.demo} target="_blank" rel="noreferrer">Voir le projet <ExternalLink size={16} /></a>}
    </div>
  </article>
}
