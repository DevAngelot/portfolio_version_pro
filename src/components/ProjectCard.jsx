import { useState } from 'react'
import { ExternalLink, Github, Images } from 'lucide-react'
import { ImageLightbox } from './ImageLightbox.jsx'

function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {children}
    </span>
  )
}

export function ProjectCard({ project }) {
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const cover = project.images?.[0]

  const openLightbox = (index) => {
    setCurrentImageIndex(index)
    setLightboxOpen(true)
  }

  return (
    <>
      <article className="group card overflow-hidden transition-all duration-300 hover:shadow-lg dark:hover:shadow-brand-500/10">
        <div className="relative overflow-hidden">
          <div className="relative bg-gradient-to-br from-white to-slate-50/50 p-4 dark:from-slate-800 dark:to-slate-900/50">
            {cover ? (
              <img
                src={cover}
                alt={project.title}
                className="h-48 w-full cursor-pointer rounded-lg border-2 border-slate-200/80 object-contain transition-all duration-300 group-hover:scale-105 group-hover:border-brand-400/40 dark:border-slate-700 dark:group-hover:border-brand-500/40"
                loading="lazy"
                onClick={() => openLightbox(0)}
              />
            ) : (
              <div className="flex h-48 w-full items-center justify-center rounded-lg border-2 border-slate-200/80 text-slate-400 dark:border-slate-700 dark:text-slate-500">
                <Images size={32} />
              </div>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        </div>

        <div className="flex flex-col gap-4 p-5">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold leading-tight text-slate-900 transition-colors group-hover:text-brand-600 dark:text-slate-50 dark:group-hover:text-brand-400">
              {project.title}
            </h3>
            <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{project.description}</p>
          </div>

          <div className="flex flex-wrap gap-2">
            {project.technologies?.map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>

          <div className="flex flex-wrap gap-3">
            {project.links?.github && (
              <a
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 transition hover:text-brand-600 hover:underline dark:text-brand-400"
                href={project.links.github}
                target="_blank"
                rel="noreferrer"
              >
                <Github size={16} /> GitHub
              </a>
            )}
            {project.links?.demo && (
              <a
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-500 transition hover:text-brand-600 hover:underline dark:text-brand-400"
                href={project.links.demo}
                target="_blank"
                rel="noreferrer"
              >
                <ExternalLink size={16} /> Demo
              </a>
            )}
          </div>

          {project.images?.length > 1 && (
            <div className="flex gap-2">
              {project.images.slice(1, 4).map((img, idx) => (
                <img
                  key={img}
                  src={img}
                  alt=""
                  className="h-16 w-16 cursor-pointer rounded-lg border-2 border-slate-200/70 object-cover transition-all hover:border-brand-400 hover:shadow-md dark:border-slate-700 dark:hover:border-brand-500"
                  loading="lazy"
                  onClick={() => openLightbox(idx + 1)}
                />
              ))}
              {project.images.length > 4 && (
                <div className="flex h-16 w-16 items-center justify-center rounded-lg border-2 border-slate-200/70 bg-slate-100 text-xs font-semibold text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                  +{project.images.length - 4}
                </div>
              )}
            </div>
          )}
        </div>
      </article>

      {lightboxOpen && (
        <ImageLightbox
          images={project.images}
          currentIndex={currentImageIndex}
          onClose={() => setLightboxOpen(false)}
          onNavigate={setCurrentImageIndex}
        />
      )}
    </>
  )
}
