import { ArrowUpRight } from 'lucide-react'
import { useLang } from '../lib/lang'
import { Section } from './Section'

export function WorkSection() {
  const { t } = useLang()

  return (
    <Section id="work" screen={t.workTitle} print={t.workPrintTitle}>
      <ul>
        {t.projects.map((project) => (
          <li key={project.name} className="project-row first:pt-0">
            <h3 className="text-[1.12rem] font-medium tracking-tight text-[var(--color-fg)]">
              {project.name}
              <span className="print-only"> — {t.workRole}</span>
            </h3>
            <p className="mt-1.5 max-w-[38rem] text-[0.98rem] leading-relaxed text-[var(--color-fg)]">
              {project.impact}
            </p>
            <p className="mt-2 font-mono text-[0.72rem] text-[var(--color-muted)]">{project.stack}</p>
            <p className="mt-2 flex flex-wrap gap-x-4 font-mono text-[0.72rem]">
              {project.live ? (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[var(--color-accent-text)] underline-offset-[5px] transition-colors duration-200 hover:underline"
                >
                  {t.live}
                  <ArrowUpRight className="no-print" aria-hidden="true" size={12} strokeWidth={1.75} />
                  <span className="print-only print-url"> {project.live}</span>
                </a>
              ) : null}
              {project.repo ? (
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-0.5 text-[var(--color-accent-text)] underline-offset-[5px] transition-colors duration-200 hover:underline"
                >
                  {t.repo}
                  <ArrowUpRight className="no-print" aria-hidden="true" size={12} strokeWidth={1.75} />
                  <span className="print-only print-url"> {project.repo}</span>
                </a>
              ) : null}
            </p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
