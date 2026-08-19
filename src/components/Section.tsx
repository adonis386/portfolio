import type { ReactNode } from 'react'

type SectionProps = {
  id: string
  screen: string
  print: string
  children: ReactNode
}

export function Section({ id, screen, print, children }: SectionProps) {
  return (
    <section aria-labelledby={id} className="section-grid">
      <h2 id={id} className="section-label">
        <span className="screen-only">{screen}</span>
        <span className="print-only">{print}</span>
      </h2>
      <div>{children}</div>
    </section>
  )
}
