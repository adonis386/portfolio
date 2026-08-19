import { useLang } from '../lib/lang'
import { Section } from './Section'

export function AboutSection() {
  const { t } = useLang()

  return (
    <Section id="about" screen={t.aboutTitle} print={t.aboutPrintTitle}>
      <p className="max-w-[38rem] text-[1.05rem] leading-[1.7] text-[var(--color-fg)]">{t.about}</p>
    </Section>
  )
}
