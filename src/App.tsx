import { useEffect, useState } from 'react'
import { Header } from './components/Header'
import { ProductMockup } from './components/ProductMockup'
import { AiSection, AudienceAndComparison, BenefitsSection, EarlyAccess, Footer, MobileSection, PipelineSection, PreviewSection, ProblemAndJourney, ReleasesSection } from './components/MarketingSections'
import { Icon, Reveal } from './components/ui'
import { copy, type Language } from './data/landingData'
import { useTheme } from './hooks/useTheme'
import './App.css'

const getInitialLanguage = (): Language => {
  try {
    return window.localStorage.getItem('wayfinder-language') === 'es' ? 'es' : 'en'
  } catch {
    return 'en'
  }
}

function App() {
  const [language, setLanguage] = useState<Language>(getInitialLanguage)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { theme, toggleTheme } = useTheme()
  const content = copy[language]

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > 8)
    updateHeader()
    window.addEventListener('scroll', updateHeader, { passive: true })
    return () => window.removeEventListener('scroll', updateHeader)
  }, [])

  useEffect(() => {
    document.documentElement.lang = language
    document.title = language === 'en' ? 'Wayfinder — From branch to production. One view.' : 'Wayfinder — De la rama a producción. Una sola vista.'
    document.querySelector('meta[name="description"]')?.setAttribute('content', language === 'en' ? 'Wayfinder gives engineering teams a clear view from branch to production.' : 'Wayfinder ofrece a los equipos de ingeniería una vista clara de la rama a producción.')
    try {
      window.localStorage.setItem('wayfinder-language', language)
    } catch {
      // Language persistence enhances the prototype but is not required to use it.
    }
  }, [language])

  useEffect(() => {
    document.body.classList.toggle('menu-open', isMenuOpen)
    return () => document.body.classList.remove('menu-open')
  }, [isMenuOpen])

  const closeMenu = () => setIsMenuOpen(false)

  return <div className="site-shell">
    <div className="page-atmosphere" aria-hidden="true" />
    <Header language={language} theme={theme} isMenuOpen={isMenuOpen} isScrolled={isScrolled} onLanguageToggle={() => setLanguage((currentLanguage) => currentLanguage === 'en' ? 'es' : 'en')} onThemeToggle={toggleTheme} onMenuToggle={() => setIsMenuOpen((open) => !open)} onNavigate={closeMenu}/>
    <main>
      <section className="hero"><div className="container"><div className="hero-copy"><div className="hero-pill"><b>{content.hero.beta}</b><span>{content.hero.connection}</span></div><h1>{content.hero.title}<br/><span className="emphasis">{content.hero.emphasis}</span></h1><p className="hero-summary">{content.hero.summary}</p><div className="hero-actions"><a className="button button-primary" href="#early-access">{content.hero.join} <Icon name="arrow"/></a><a className="button button-secondary" href="#how-it-works">{content.hero.how} <Icon name="arrow"/></a></div><p className="hero-note"><Icon name="check"/>{content.hero.note}</p></div><Reveal><ProductMockup language={language}/><p className="product-caption">{content.hero.caption}</p></Reveal><div className="proof-strip"><span>{content.hero.proof}</span><span className="proof-item"><i/><b>{language === 'en' ? 'Branches' : 'Ramas'}</b> {language === 'en' ? 'connected to releases' : 'conectadas a lanzamientos'}</span><span className="proof-item"><i/><b>{language === 'en' ? 'Readiness' : 'Preparación'}</b> {language === 'en' ? 'made visible' : 'hecha visible'}</span></div></div></section>
      <ProblemAndJourney language={language}/>
      <BenefitsSection language={language}/>
      <PipelineSection language={language}/>
      <AiSection language={language}/>
      <PreviewSection language={language}/>
      <ReleasesSection language={language}/>
      <MobileSection language={language}/>
      <AudienceAndComparison language={language}/>
      <EarlyAccess language={language}/>
    </main>
    <Footer language={language}/>
  </div>
}

export default App
