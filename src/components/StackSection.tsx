import { useLang } from '../lib/lang'
import { Section } from './Section'

export function StackSection() {
  const { t } = useLang()

  return (
    <Section id="stack" screen={t.stackTitle} print={t.stackPrintTitle}>
      <dl className="grid gap-6 sm:grid-cols-3 sm:gap-8">
        {t.stackGroups.map((group) => (
          <div key={group.label}>
            <dt className="font-mono text-[0.7rem] text-[var(--color-accent-text)]">{group.label}</dt>
            <dd className="mt-2 text-[0.92rem] leading-relaxed text-[var(--color-fg)]">{group.items}</dd>
          </div>
        ))}
      </dl>
    </Section>
  )
}
