import { AboutSection } from './components/AboutSection'
import { ContactSection } from './components/ContactSection'
import { ExperienceSection } from './components/ExperienceSection'
import { SiteHeader } from './components/SiteHeader'
import { StackSection } from './components/StackSection'
import { WorkSection } from './components/WorkSection'
import { useLang } from './lib/lang'

export default function App() {
  const { t } = useLang()

  return (
    <div className="min-h-screen bg-[var(--color-bg)] text-[var(--color-fg)]">
      <a
        href="#content"
        className="no-print sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-50 focus:bg-[var(--color-bg)] focus:px-3 focus:py-2"
      >
        {t.skip}
      </a>

      <div className="cv-sheet relative z-10 mx-auto max-w-3xl px-6 py-14 sm:px-8 sm:py-24 print:px-0 print:py-0">
        <SiteHeader />
        <main id="content" className="mt-[4.5rem] space-y-16 sm:mt-24 sm:space-y-[4.25rem] print:mt-4 print:space-y-3">
          <AboutSection />
          <ExperienceSection />
          <WorkSection />
          <StackSection />
          <ContactSection />
        </main>
      </div>
    </div>
  )
}
