import { contacts } from '../content/cv'
import { useLang } from '../lib/lang'
import { Section } from './Section'

export function ContactSection() {
  const { t } = useLang()

  return (
    <Section id="contact" screen={t.contactTitle} print={t.contactTitle}>
      <p className="no-print max-w-[32rem] text-[var(--color-fg)]">{t.contactBody}</p>
      <ul className="mt-5 space-y-2 font-mono text-[0.8rem]">
        {contacts.map((item) => (
          <li key={item.id}>
            <a
              href={item.href}
              className="text-[var(--color-muted)] decoration-[var(--color-accent)] underline-offset-[5px] transition-colors duration-200 hover:text-[var(--color-fg)] hover:underline"
            >
              {item.display}
            </a>
          </li>
        ))}
      </ul>
    </Section>
  )
}
