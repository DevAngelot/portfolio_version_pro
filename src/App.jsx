import { motion as Motion } from 'framer-motion'
import { ArrowDown, BookOpen, Download, Github, GitlabIcon as Gitlab, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { Navbar } from './components/Navbar.jsx'
import { Section } from './components/Section.jsx'
import { ProjectCard } from './components/ProjectCard.jsx'
import { CertCard } from './components/CertCard.jsx'
import { PipelineViz } from './components/PipelineViz.jsx'
import { TechCarousel } from './components/TechCarousel.jsx'
import { about, certifications, education, experience, person, projects, skillGroups, stats, techStackCarousel } from './data/portfolio.js'

const socials = [
  [person.links.linkedin, <Linkedin size={19} />, 'LinkedIn'], [person.links.github, <Github size={19} />, 'GitHub'],
  [person.links.gitlab, <Gitlab size={19} />, 'GitLab'], [person.links.medium, <BookOpen size={19} />, 'Medium'],
]

function App() {
  return <div className="min-h-dvh overflow-hidden bg-[#07111f] text-slate-100">
    <Navbar />
    <main>
      <section id="home" className="hero-bg relative py-16 sm:py-24 lg:py-28">
        <div className="container-page grid items-center gap-14 lg:grid-cols-[1.2fr_.8fr]">
          <Motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
            <div className="mb-6 inline-flex items-center border-l-2 border-[#d88a5b] pl-3 text-xs font-bold uppercase tracking-[.2em] text-slate-300">Disponible pour de nouvelles opportunités</div>
            <p className="mb-3 text-lg font-medium text-slate-300">Bonjour, je suis</p>
            <h1 className="text-5xl font-black tracking-tight text-white sm:text-7xl lg:text-8xl">Angelot <span className="text-gradient">Mpata</span></h1>
            <p className="mt-6 text-xl font-semibold text-white sm:text-2xl">{person.title} <span className="text-slate-500">|</span> {person.secondaryTitle}</p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">{person.tagline}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects" className="primary-btn">Découvrir mes projets <ArrowDown size={18} /></a>
              <a href="/cv_angelot_mpata_lastest_fr.pdf" target="_blank" className="secondary-btn"><Download size={18} /> Télécharger mon CV</a>
            </div>
            <div className="mt-8 flex flex-wrap gap-3">{socials.map(([url, icon, name]) => <a key={name} href={url} target="_blank" rel="noreferrer" aria-label={name} className="social-btn">{icon}</a>)}</div>
          </Motion.div>
          <Motion.div initial={{ opacity: 0, scale: .9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: .7, delay: .15 }} className="relative mx-auto w-full max-w-sm">
            <div className="relative border border-white/15 bg-white/5 p-2 shadow-2xl">
              <img src="/profil_angelot_mpata.jpg" alt="Portrait d’Angelot Mpata" className="aspect-[3/4] w-full object-cover object-top grayscale-[15%]" />
              <div className="absolute bottom-5 left-5 border-l-2 border-[#d88a5b] bg-[#07111f]/90 px-4 py-3"><p className="font-bold text-white">Basé à Kinshasa, RDC</p><p className="mt-1 text-sm text-slate-300">Cloud • DevOps • Full-Stack</p></div>
            </div>
          </Motion.div>
        </div>
        <div className="container-page mt-16"><TechCarousel items={techStackCarousel} /></div>
      </section>

      <Section id="about" eyebrow="Mon profil" title={about.heading}>
        <div className="grid gap-6 lg:grid-cols-[1.25fr_.75fr]"><div className="dark-card p-7 sm:p-9"><p className="whitespace-pre-line text-base leading-8 text-slate-300">{about.body}</p></div><div className="grid grid-cols-3 gap-3 lg:grid-cols-1">{stats.map(s => <div key={s.label} className="dark-card flex flex-col justify-center p-5"><strong className="text-2xl font-black text-[#e5a17a]">{s.value}</strong><span className="mt-1 text-xs text-slate-400 sm:text-sm">{s.label}</span></div>)}</div></div>
      </Section>

      <Section id="skills" eyebrow="Expertise" title="Compétences techniques"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{skillGroups.map(g => <article key={g.title} className="dark-card p-6"><h3 className="font-bold text-white">{g.title}</h3><div className="mt-5 flex flex-wrap gap-2">{g.items.map(i => <span key={i} className="tech-tag">{i}</span>)}</div></article>)}</div></Section>

      <Section id="pipeline" eyebrow="Ma méthode" title="Du code à la production"><PipelineViz /></Section>

      <Section id="experience" eyebrow="Parcours" title="Expériences professionnelles"><div className="relative space-y-5 border-l border-white/15">{experience.map((e, index) => <article key={`${e.company}-${e.role}`} className="relative pl-10"><span className="absolute -left-3 top-7 bg-[#07111f] pr-2 text-xs font-bold text-[#e5a17a]">0{index + 1}</span><div className="dark-card p-6 sm:p-7"><div className="flex flex-col gap-2 sm:flex-row sm:justify-between"><div><h3 className="font-bold text-white">{e.role}</h3><p className="mt-1 font-semibold text-[#e5a17a]">{e.company}</p></div><div className="text-sm text-slate-400"><p>{e.date}</p><p className="mt-1 sm:text-right">{e.location}</p></div></div><ul className="mt-5 grid gap-2 text-sm leading-6 text-slate-300">{e.bullets.map(b => <li key={b} className="flex gap-3"><span className="mt-2 h-px w-3 shrink-0 bg-[#d88a5b]" />{b}</li>)}</ul></div></article>)}</div></Section>

      <Section id="projects" eyebrow="Réalisations" title="Projets sélectionnés"><div className="grid gap-5 md:grid-cols-2">{projects.map(p => <ProjectCard key={p.title} project={p} />)}</div></Section>
      <Section id="certifications" eyebrow="Validation des acquis" title="Certifications"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{certifications.map(c => <CertCard key={c.title} cert={c} />)}</div></Section>
      <Section id="education" eyebrow="Formation" title="Parcours académique"><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{education.map(ed => <article key={ed.title} className="dark-card p-6"><p className="text-xs font-bold uppercase tracking-widest text-[#e5a17a]">{ed.period}</p><h3 className="mt-3 font-bold text-white">{ed.title}</h3><p className="mt-2 text-sm text-slate-400">{ed.org}</p>{ed.description && <p className="mt-4 text-xs leading-5 text-slate-400">{ed.description}</p>}</article>)}</div></Section>

      <Section id="contact" eyebrow="Travaillons ensemble" title="Vous avez un projet ? Parlons-en."><div className="contact-panel grid gap-8 p-7 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center"><div><p className="max-w-2xl text-slate-300">Je suis disponible pour échanger autour de vos besoins Cloud, DevOps, automatisation ou développement web.</p><div className="mt-6 flex flex-wrap gap-x-6 gap-y-3 text-sm"><a href={`mailto:${person.email}`} className="contact-link"><Mail size={18} />{person.email}</a><a href={`tel:${person.phone.replace(/\s/g, '')}`} className="contact-link"><Phone size={18} />{person.phone}</a><span className="contact-link"><MapPin size={18} />{person.location}</span></div></div><a href={`mailto:${person.email}?subject=Prise de contact via votre portfolio`} className="primary-btn justify-center">M’écrire maintenant <Mail size={18} /></a></div></Section>
    </main>
    <footer className="border-t border-white/10 py-8"><div className="container-page flex flex-col gap-3 text-sm text-slate-500 sm:flex-row sm:justify-between"><p>© {new Date().getFullYear()} Angelot Mpata. Tous droits réservés.</p><p>Conçu avec passion à Kinshasa.</p></div></footer>
  </div>
}
export default App
