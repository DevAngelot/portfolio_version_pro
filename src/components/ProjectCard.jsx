import { ExternalLink, Github, Images } from 'lucide-react'

function Tag({ children }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
      {children}
    </span>
  )
}

export function ProjectCard({ project }) {
  const cover = project.images?.[0]

  return (
    <article className="card overflow-hidden">
      <div className="relative">
        {cover ? (
          <img
            src={cover}
            alt=""
            className="h-48 w-full border-2 border-slate-200/70 object-cover opacity-95 dark:border-slate-700"
            loading="lazy"
          />
        ) : (
          <div className="flex h-48 w-full items-center justify-center border-2 border-slate-200/70 bg-slate-100 text-slate-400 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-500">
            <Images size={22} />
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
        <div className="absolute bottom-3 left-3 right-3">
          <h3 className="text-lg font-semibold text-white">{project.title}</h3>
        </div>
      </div>

      <div className="p-5">
        <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-200">{project.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies?.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.links?.github ? (
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
              href={project.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={16} /> GitHub
            </a>
          ) : null}
          {project.links?.demo ? (
            <a
              className="inline-flex items-center gap-2 text-sm font-medium text-brand-500 hover:underline"
              href={project.links.demo}
              target="_blank"
              rel="noreferrer"
            >
              <ExternalLink size={16} /> Demo
            </a>
          ) : null}
        </div>

        {project.images?.length ? (
          <div className="mt-5 grid grid-cols-3 gap-2">
            {project.images.slice(0, 3).map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="h-16 w-full rounded-xl border-2 border-slate-200/70 object-cover dark:border-slate-700"
                loading="lazy"
              />
            ))}
          </div>
        ) : null}
      </div>
    </article>
  )
}
