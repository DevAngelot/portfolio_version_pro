import { useState } from 'react'
import { Award, ExternalLink } from 'lucide-react'
import { Button } from './Button.jsx'
import { ImageLightbox } from './ImageLightbox.jsx'

export function CertCard({ cert }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <>
      <article className="group card overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-brand-500/10">
        <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:gap-6">
          <div className="flex-shrink-0">
            <div className="relative overflow-hidden rounded-xl border-2 border-slate-200/80 bg-gradient-to-br from-white to-slate-50/50 p-3 shadow-md transition-all duration-300 group-hover:border-brand-400/40 group-hover:shadow-xl dark:border-slate-700 dark:from-slate-800 dark:to-slate-900/50 dark:group-hover:border-brand-500/40">
              <img 
                src={cert.image} 
                alt={cert.title} 
                className="h-28 w-full cursor-pointer object-contain transition-transform duration-300 group-hover:scale-105 sm:h-24 sm:w-36" 
                loading="lazy"
                onClick={() => setLightboxOpen(true)}
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-brand-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          </div>
        <div className="flex flex-1 flex-col gap-3">
          <div className="space-y-2">
            <h3 className="text-base font-semibold leading-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-slate-50 dark:group-hover:text-brand-400">{cert.title}</h3>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-brand-500/15 to-brand-600/10 px-3 py-1.5 text-xs font-semibold text-brand-700 shadow-sm ring-1 ring-brand-500/20 transition-all duration-300 group-hover:from-brand-500/25 group-hover:to-brand-600/20 group-hover:shadow-md dark:from-brand-500/20 dark:to-brand-600/15 dark:text-brand-400 dark:ring-brand-500/30">
              <Award size={13} className="transition-transform duration-300 group-hover:rotate-12" /> {cert.badge}
            </span>
          </div>
          <Button as="a" href={cert.credentialUrl} target="_blank" rel="noreferrer" variant="secondary" className="w-full transition-all sm:w-auto">
            View Credential <ExternalLink size={16} className="transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>
      </div>
      </article>

      {lightboxOpen && (
        <ImageLightbox
          images={[cert.image]}
          currentIndex={0}
          onClose={() => setLightboxOpen(false)}
          onNavigate={() => {}}
        />
      )}
    </>
  )
}
