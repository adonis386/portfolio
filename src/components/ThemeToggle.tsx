import { Moon, Sun } from 'lucide-react'
import { useLang } from '../lib/lang'
import { useTheme } from '../lib/theme'

export function ThemeToggle() {
  const { theme, toggle } = useTheme()
  const { t } = useLang()
  const label = theme === 'dark' ? t.themeToLight : t.themeToDark

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className="inline-flex size-9 cursor-pointer items-center justify-center text-[var(--color-muted)] transition-colors duration-200 hover:text-[var(--color-fg)]"
    >
      {theme === 'dark' ? (
        <Sun aria-hidden="true" size={16} strokeWidth={1.75} />
      ) : (
        <Moon aria-hidden="true" size={16} strokeWidth={1.75} />
      )}
    </button>
  )
}
