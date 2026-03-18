import { Button } from './Button.jsx'

const links = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/70 bg-white/75 backdrop-blur">
      <div className="container-page flex h-16 items-center justify-between">
        <a href="#home" className="font-semibold tracking-tight text-slate-900">
          ANGELOT
          <span className="text-brand-500">.</span>
        </a>

        <nav className="hidden items-center gap-6 text-sm text-slate-600 md:flex">
          {links.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="transition hover:text-slate-900"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button as="a" href="#projects" variant="secondary" className="hidden sm:inline-flex">
            View Projects
          </Button>
        </div>
      </div>
    </header>
  )
}
