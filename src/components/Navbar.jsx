import { useState } from 'react'
import { Menu, X } from 'lucide-react'

const links = [['about', 'À propos'], ['skills', 'Compétences'], ['experience', 'Expérience'], ['projects', 'Projets'], ['certifications', 'Certifications'], ['contact', 'Contact']]

export function Navbar() {
  const [open, setOpen] = useState(false)
  return <header className="sticky top-0 z-50 border-b border-white/10 bg-[#07111f]/90 backdrop-blur-xl">
    <div className="container-page flex h-18 items-center justify-between">
      <a href="#home" className="text-sm font-black uppercase tracking-[.2em] text-white">Angelot<span className="text-[#e5a17a]">.</span></a>
      <nav className="hidden items-center gap-7 text-sm text-slate-300 md:flex">{links.map(([id, label]) => <a key={id} href={`#${id}`} className="transition hover:text-[#e5a17a]">{label}</a>)}</nav>
      <a href="/cv_angelot_mpata_lastest_fr.pdf" target="_blank" className="hidden border border-[#d88a5b] px-5 py-2.5 text-sm font-bold text-[#e5a17a] transition hover:bg-[#d88a5b] hover:text-[#07111f] sm:inline-flex">Télécharger mon CV</a>
      <button className="text-white md:hidden" onClick={() => setOpen(!open)} aria-label="Ouvrir le menu">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <nav className="container-page grid gap-1 border-t border-white/10 py-4 md:hidden">{links.map(([id, label]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="rounded-lg px-3 py-2 text-slate-200 hover:bg-white/5">{label}</a>)}</nav>}
  </header>
}
