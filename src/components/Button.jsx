export function Button({ as: Comp = 'button', className = '', variant = 'primary', ...props }) {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-500/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 disabled:opacity-60 disabled:pointer-events-none'

  const variants = {
    primary:
      'bg-brand-500 text-black shadow-glow hover:bg-brand-400 dark:bg-brand-500 dark:text-black dark:hover:bg-brand-400',
    secondary:
      'border border-slate-200 bg-white/70 text-slate-900 hover:bg-white dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700',
    ghost:
      'text-slate-700 hover:bg-slate-200/60 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-200',
  }

  return <Comp className={`${base} ${variants[variant]} ${className}`} {...props} />
}
