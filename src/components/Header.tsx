import { Icon, Logo } from './ui'
import type { Language } from '../data/landingData'
import type { Theme } from '../hooks/useTheme'

type HeaderProps = {
  language: Language
  theme: Theme
  isMenuOpen: boolean
  isScrolled: boolean
  onLanguageToggle: () => void
  onThemeToggle: () => void
  onMenuToggle: () => void
  onNavigate: () => void
}

export function Header({ language, theme, isMenuOpen, isScrolled, onLanguageToggle, onThemeToggle, onMenuToggle, onNavigate }: HeaderProps) {
  const nav = language === 'en'
    ? { product: 'Product', how: 'How it works', why: 'Why Wayfinder', access: 'Early Access', join: 'Join Private Beta' }
    : { product: 'Producto', how: 'Cómo funciona', why: 'Por qué Wayfinder', access: 'Acceso anticipado', join: 'Unirse a la beta privada' }
  const navItems = [['#product', nav.product], ['#how-it-works', nav.how], ['#why-wayfinder', nav.why], ['#early-access', nav.access]]
  return <header className={`site-header ${isScrolled ? 'is-scrolled' : ''}`} id="top">
    <nav className="container nav" aria-label="Main navigation">
      <a href="#top" aria-label="Wayfinder home"><Logo /></a>
      <div className={`nav-links ${isMenuOpen ? 'is-open' : ''}`} id="nav-links">
        {navItems.map(([href, label]) => <a key={href} href={href} onClick={onNavigate}>{label}</a>)}
      </div>
      <div className="nav-actions">
        <button className="language-toggle" type="button" onClick={onLanguageToggle} aria-label={language === 'en' ? 'Cambiar a español' : 'Switch to English'} title="Switch language"><span aria-hidden="true">{language === 'en' ? 'ES' : 'EN'}</span></button>
        <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} title="Switch theme"><Icon name={theme === 'dark' ? 'sun' : 'moon'} /></button>
        <a className="button button-primary button-small" href="#early-access">{nav.join}</a>
        <button className="menu-button" type="button" onClick={onMenuToggle} aria-label={isMenuOpen ? 'Close navigation' : 'Open navigation'} aria-expanded={isMenuOpen}><Icon name={isMenuOpen ? 'close' : 'menu'} /></button>
      </div>
    </nav>
  </header>
}
