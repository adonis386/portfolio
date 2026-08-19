import { useLang } from '../lib/lang'

export function LangToggle() {
  const { lang, setLang, t } = useLang()
  const next = lang === 'es' ? 'en' : 'es'
  const label = lang === 'es' ? t.langToEn : t.langToEs

  return (
    <button
      type="button"
      onClick={() => setLang(next)}
      aria-label={label}
      title={label}
      className="inline-flex h-9 cursor-pointer items-center px-1.5 font-mono text-[0.7rem] text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-fg)]"
    >
      {lang === 'es' ? 'EN' : 'ES'}
    </button>
  )
}
