import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { copy, type Lang } from '../content/cv'

type LangContextValue = {
  lang: Lang
  t: (typeof copy)[Lang]
  setLang: (lang: Lang) => void
}

const LangContext = createContext<LangContextValue | null>(null)

function readLang(): Lang {
  try {
    const stored = localStorage.getItem('lang')
    if (stored === 'en' || stored === 'es') return stored
  } catch {
    /* ignore */
  }
  return 'es'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem('lang', lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = (next: Lang) => {
    setLangState(next)
  }

  return (
    <LangContext.Provider value={{ lang, t: copy[lang], setLang }}>
      {children}
    </LangContext.Provider>
  )
}

export function useLang() {
  const value = useContext(LangContext)
  if (!value) {
    throw new Error('useLang must be used within LangProvider')
  }
  return value
}
