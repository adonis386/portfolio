import { useLang } from '../lib/lang'
import { Section } from './Section'

export function ExperienceSection() {
  const { t } = useLang()

  return (
    <Section id="experience" screen={t.experienceTitle} print={t.experienceTitle}>
      <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6">
        <h3 className="text-[1.05rem] font-medium tracking-tight text-[var(--color-fg)]">{t.jobTitle}</h3>
        <p className="shrink-0 font-mono text-[0.75rem] text-[var(--color-muted)]">{t.jobDates}</p>
      </div>
      <p className="mt-1 font-mono text-[0.75rem] text-[var(--color-muted)]">{t.jobPlace}</p>
      <ul className="bullet-list max-w-[38rem] text-[var(--color-fg)]">
        {t.bullets.map((bullet) => (
          <li key={bullet}>{bullet}</li>
        ))}
      </ul>
    </Section>
  )
}
