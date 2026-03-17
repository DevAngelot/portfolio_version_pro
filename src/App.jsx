import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { Github, Linkedin, Mail, MapPin, Phone, GitlabIcon as Gitlab, BookOpen } from 'lucide-react'
import { Navbar } from './components/Navbar.jsx'
import { Button } from './components/Button.jsx'
import { Section } from './components/Section.jsx'
import { TypingTitle } from './components/TypingTitle.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { CertCard } from './components/CertCard.jsx'
import { PipelineViz } from './components/PipelineViz.jsx'
import { TechCarousel } from './components/TechCarousel.jsx'
import {
  about,
  certifications,
  education,
  experience,
  person,
  projects,
  skillGroups,
  techStackCarousel,
} from './data/portfolio.js'
import { useTheme } from './hooks/useTheme.js'

function App() {
  const { theme, toggleTheme } = useTheme()

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    reset,
  } = useForm({ defaultValues: { name: '', email: '', message: '' } })

  const onSubmit = async (values) => {
    const subject = `Portfolio contact from ${values.name}`
    const body = `${values.message}\n\n---\nFrom: ${values.name} (${values.email})`
    window.location.href = `mailto:${person.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    reset()
  }

  return (
    <div className="min-h-dvh bg-grid-fade">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <section id="home" className="relative overflow-hidden py-14 sm:py-20">
          <div className="container-page">
            <div className="grid items-center gap-10 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="mb-4 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/60 px-4 py-2 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300"
                >
                  <span className="h-2 w-2 rounded-full bg-brand-500" />
                  DevOps Engineer • Linux System Administrator • Full Stack Developer
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: 'easeOut' }}
                  className="text-4xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-5xl"
                >
                  {person.name}
                </motion.h1>

                <div className="mt-4">
                  <TypingTitle
                    lines={[
                      'docker build .',
                      'kubectl apply -f infra/',
                      'terraform plan',
                      'gitlab-ci pipeline',
                      'grafana dashboards',
                      'npm run build',
                      'node server.js',
                    ]}
                  />
                </div>

                <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-200 sm:text-lg">
                  {person.title}
                </p>
                <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-700 dark:text-slate-100">
                  {person.tagline}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  <Button as="a" href="#projects" variant="secondary">
                    View Projects
                  </Button>
                  <Button as="a" href="/cv.pdf" variant="secondary">
                    Download CV
                  </Button>
                </div>

                <div className="mt-7 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-200">
                  
                  <a className="inline-flex items-center gap-2 hover:underline" href={`mailto:${person.email}`}>
                    <Mail size={16} className="text-brand-500" /> {person.email}
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href={person.links.github} target="_blank" rel="noreferrer">
                    <Github size={16} className="text-brand-500" /> GitHub
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href={person.links.gitlab} target="_blank" rel="noreferrer">
                    <Gitlab size={16} className="text-brand-500" /> GitLab
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href={person.links.linkedin} target="_blank" rel="noreferrer">
                    <Linkedin size={16} className="text-brand-500" /> LinkedIn
                  </a>
                  <a className="inline-flex items-center gap-2 hover:underline" href={person.links.medium} target="_blank" rel="noreferrer">
                    <BookOpen size={16} className="text-brand-500" /> Medium
                  </a>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="card p-6">
                  <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">DevOps Mindset</p>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
                    I focus on repeatable deployments, infrastructure as code, safe automation, and observability that
                    keeps systems reliable under real-world load.
                  </p>
                  <div className="mt-6 grid gap-3">
                    <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500/90">CI/CD</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">GitLab CI/CD • Jenkins • Github Actions </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500/90">IaC</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Terraform • Ansible </p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500/90">Observability</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">Prometheus • Grafana • Loki • Promtail</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-white/60 p-4 dark:border-slate-700 dark:bg-slate-800">
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-500/90">Cloud Computing</p>
                      <p className="mt-2 text-sm text-slate-700 dark:text-slate-300">AWS • AZURE</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <TechCarousel items={techStackCarousel} />
            </div>
          </div>
        </section>

        <Section id="pipeline"  title="DevOps Pipeline Visualization">
          <PipelineViz />
        </Section>

        <Section id="about" eyebrow="Profile" title={about.heading}>
          <div className="card p-6 sm:p-8">
            <p className="whitespace-pre-line text-sm leading-relaxed text-slate-700 dark:text-slate-100 sm:text-base">
              {about.body}
            </p>
          </div>
        </Section>

        <Section id="skills" eyebrow="Capabilities" title="Skills">
          <div className="grid gap-4 lg:grid-cols-2">
            {skillGroups.map((g) => (
              <div key={g.title} className="card p-6">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{g.title}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {g.items.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-slate-200 bg-white/60 px-3 py-1 text-xs text-slate-700 dark:border-[#2B4C7E]/55 dark:bg-[#0D1B34]/88 dark:text-slate-100"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </Section>

        <Section id="experience" eyebrow="Career" title="Experience">
          <div className="grid gap-4">
            {experience.map((e) => (
              <div key={`${e.company}-${e.role}`} className="card p-6">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
                    {e.role} — {e.company}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-200">{e.date}</p>
                </div>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-200">{e.location}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-slate-700 dark:text-slate-100">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Section>

        <Section id="projects" eyebrow="Work" title="Projects">
          <div className="grid gap-4 md:grid-cols-2">
            {projects.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>
        </Section>

        <Section id="certifications" eyebrow="Proof" title="Certifications">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {certifications.map((c) => (
              <CertCard key={c.title} cert={c} />
            ))}
          </div>
        </Section>

        <Section id="education" eyebrow="Background" title="Education">
          <div className="grid gap-4 md:grid-cols-3">
            {education.map((ed) => (
              <div key={ed.title} className="card p-6">
                <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">{ed.title}</p>
                <p className="mt-2 text-sm text-slate-600 dark:text-slate-200">{ed.org}</p>
              </div>
            ))}
          </div>
        </Section>

        <Section id="contact" eyebrow="Let’s build" title="Contact">
          <div className="grid gap-4 lg:grid-cols-2">
            <div className="card p-6">
              <p className="text-sm font-semibold text-slate-900 dark:text-slate-50">Reach out</p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 dark:text-slate-200">
                If you want a DevOps-first delivery pipeline, automation strategy, or infrastructure design, send a
                message.
              </p>

              <div className="mt-5 grid gap-3 text-sm">
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={`mailto:${person.email}`}>
                  <Mail size={16} className="text-brand-500" /> {person.email}
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={`tel:${person.phone.replace(/\s/g, '')}`}>
                  <Phone size={16} className="text-brand-500" /> {person.phone}
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={person.links.linkedin} target="_blank" rel="noreferrer">
                  <Linkedin size={16} className="text-brand-500" /> LinkedIn
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={person.links.github} target="_blank" rel="noreferrer">
                  <Github size={16} className="text-brand-500" /> GitHub
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={person.links.gitlab} target="_blank" rel="noreferrer">
                  <Gitlab size={16} className="text-brand-500" /> GitLab
                </a>
                <a className="inline-flex items-center gap-2 text-slate-700 hover:underline dark:text-slate-100" href={person.links.medium} target="_blank" rel="noreferrer">
                  <BookOpen size={16} className="text-brand-500" /> Medium
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200/70 bg-white/70 p-6 shadow-sm backdrop-blur dark:border-slate-800 dark:bg-slate-900">
              <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Name</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-500/50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-brand-500"
                    placeholder="Your name"
                    {...register('name', { required: true })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Email</label>
                  <input
                    className="mt-1 w-full rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-500/50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-brand-500"
                    placeholder="you@email.com"
                    type="email"
                    {...register('email', { required: true })}
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-700 dark:text-slate-300">Message</label>
                  <textarea
                    className="mt-1 min-h-28 w-full resize-y rounded-xl border border-slate-200 bg-white/70 px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-brand-500/50 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:placeholder:text-slate-500 dark:focus:border-brand-500"
                    placeholder="Tell me what you want to build..."
                    {...register('message', { required: true })}
                  />
                </div>
                <div className="pt-1">
                  <Button type="submit" disabled={isSubmitting} className="w-full">
                    Send
                  </Button>
                  
                </div>
              </form>
            </div>
          </div>
        </Section>
      </main>

      <footer className="border-t border-slate-200/70 py-10 dark:border-slate-800">
        <div className="container-page flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-slate-600 dark:text-slate-200">
            &copy; {new Date().getFullYear()} {person.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={person.links.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              <Github size={18} />
            </a>
            <a
              href={person.links.gitlab}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              <Gitlab size={18} />
            </a>
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={person.links.medium}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              <BookOpen size={18} />
            </a>
            <a
              href={`mailto:${person.email}`}
              className="inline-flex items-center gap-2 text-sm text-slate-600 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
