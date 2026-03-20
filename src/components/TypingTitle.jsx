import { useEffect, useMemo, useState } from 'react'

export function TypingTitle({ lines = [], speed = 28, pause = 1200, className = '' }) {
  const text = useMemo(() => lines.join('  •  '), [lines])
  const [value, setValue] = useState('')

  useEffect(() => {
    let idx = 0
    let timer

    const step = () => {
      idx += 1
      setValue(text.slice(0, idx))

      if (idx < text.length) {
        timer = window.setTimeout(step, speed)
      } else {
        timer = window.setTimeout(() => {
          idx = 0
          setValue('')
          timer = window.setTimeout(step, speed)
        }, pause)
      }
    }

    timer = window.setTimeout(step, speed)
    return () => window.clearTimeout(timer)
  }, [text, speed, pause])

  return (
    <p className={`font-mono text-xs text-slate-600 sm:text-sm ${className}`}>
      <span className="text-brand-500">$</span> {value}
      <span className="ml-1 inline-block w-2 animate-pulse rounded-sm bg-brand-500/80 align-middle">&nbsp;</span>
    </p>
  )
}
