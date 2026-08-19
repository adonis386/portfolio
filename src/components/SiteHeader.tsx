import { FileDown } from 'lucide-react'
import { contacts, profile } from '../content/cv'
import { useLang } from '../lib/lang'
import { LangToggle } from './LangToggle'
import { Portrait } from './Portrait'
import { ThemeToggle } from './ThemeToggle'

export function SiteHeader() {
  const { t } = useLang()
  const headerLinks = contacts.filter((item) => item.id === 'email' || item.id === 'github')

  return (
    <header className="fade-in">
      <div className="no-print mb-10 flex items-baseline justify-between gap-4 sm:mb-14 print:mb-0">
        <p className="font-mono text-[0.72rem] text-[var(--color-muted)]">{t.role}</p>
        <div className="flex items-center gap-1">
          <LangToggle />
          <ThemeToggle />
        </div>
      </div>

      <div className="flex items-end justify-between gap-6 sm:gap-10">
        <div className="min-w-0">
          <h1 className="max-w-[10ch] text-[clamp(2.6rem,9.5vw,5.2rem)] leading-[0.9] font-semibold tracking-[-0.055em] text-[var(--color-fg)]">
            <span className="block">{profile.given}</span>
            <span className="block">{profile.family}</span>
          </h1>
          <p className="mt-6 max-w-[26rem] text-[1.12rem] leading-snug text-[var(--color-fg)] italic sm:mt-8 sm:text-[1.28rem]">
            {t.oneLiner}
          </p>
          <p className="mt-3 font-mono text-[0.78rem] text-[var(--color-muted)]">{t.location}</p>
        </div>

        <Portrait
          src={`${import.meta.env.BASE_URL}${profile.photo}`}
          alt={t.photoAlt}
          className="h-[7.75rem] w-[6.1rem] shrink-0 sm:h-[11.5rem] sm:w-[8.75rem]"
        />
      </div>

      <nav
        aria-label="Contact"
        className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 font-mono text-[0.75rem]"
      >
        {headerLinks.map((item) => (
          <a
            key={item.id}
            href={item.href}
            className="text-[var(--color-muted)] decoration-[var(--color-accent)] decoration-from-font underline-offset-[5px] transition-colors duration-200 hover:text-[var(--color-fg)] hover:underline"
          >
            {item.display}
          </a>
        ))}
        <a
          href={`${import.meta.env.BASE_URL}adonis-gonzalez-cv.pdf`}
          className="no-print inline-flex cursor-pointer items-center gap-1.5 text-[var(--color-muted)] decoration-[var(--color-accent)] underline-offset-[5px] transition-colors duration-200 hover:text-[var(--color-fg)] hover:underline"
        >
          <FileDown aria-hidden="true" size={13} strokeWidth={1.75} />
          {t.pdfLabel}
        </a>
      </nav>
    </header>
  )
}
