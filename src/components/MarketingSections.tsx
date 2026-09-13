import { useState, type CSSProperties, type FormEvent } from 'react'
import { audiences, copy, pipelineStages, releases, type Language } from '../data/landingData'
import { Icon, Kicker, Logo, Reveal } from './ui'

type SectionProps = { language: Language }

const flowIcons = ['branch', 'review', 'validation', 'staging', 'check'] as const
const flowTones = ['blue', 'amber', 'light-blue', 'light-blue', 'green']

export function ProblemAndJourney({ language }: SectionProps) {
  const c = copy[language]
  return <>
    <section className="section section-tight" id="problem"><div className="container problem-layout">
      <Reveal><Kicker>{c.problem.kicker}</Kicker><h2 className="section-title">{c.problem.title}</h2><p className="section-copy">{c.problem.copy}</p></Reveal>
      <Reveal className="pain-list">{c.problem.cards.map(([title, text], index) => <article className="pain-card" key={title}><span className="pain-number">0{index + 1}</span><h3>{title}</h3><p>{text}</p></article>)}</Reveal>
    </div></section>
    <section className="section-tight" id="how-it-works"><div className="container journey-wrap"><Reveal>
      <div className="journey-top"><div><Kicker>{c.journey.kicker}</Kicker><h2 className="section-title">{c.journey.title}</h2></div><p className="section-copy">{c.journey.copy}</p></div>
      <div className="journey-flow" aria-label="Branch, Review, Validation, Staging, and Production">
        {c.journey.steps.map(([name, detail], index) => <div className="flow-step" style={{ '--step': `var(--${flowTones[index]})` } as CSSProperties} key={name}><span className="flow-node"><Icon name={flowIcons[index]} /></span><strong>{name}</strong><span>{detail}</span></div>)}
      </div>
    </Reveal></div></section>
  </>
}

function AttentionArt({ language }: SectionProps) {
  const rows = language === 'en'
    ? [['Bulk Actions for Records Table', 'incight-web · PR #851', 'CI failed', 'red'], ['Dashboard Filters', 'incight-dashboards-web · PR #842', 'Review', 'amber'], ['Widget Query Caching', 'agent-ai · PR #838', 'Approval', 'amber']]
    : [['Acciones masivas para tabla de registros', 'incight-web · PR #851', 'CI falló', 'red'], ['Dashboard Filters', 'incight-dashboards-web · PR #842', 'Revisión', 'amber'], ['Caché de consultas para widgets', 'agent-ai · PR #838', 'Aprobación', 'amber']]
  return <div className="benefit-art attention-art"><div className="art-caption"><span>{language === 'en' ? 'Needs attention' : 'Necesita atención'}</span><span>{language === 'en' ? '4 open' : '4 abiertos'}</span></div>{rows.map(([title, meta, status, tone]) => <div className="attention-row" style={{ '--attention': `var(--${tone})` } as CSSProperties} key={meta}><i/><div><b>{title}</b><span>{meta}</span></div><span className="attention-pill">{status}</span></div>)}</div>
}

function ReadinessArt({ language }: SectionProps) {
  const checks = language === 'en' ? ['CI passed', 'Tests passed', 'Preview healthy', 'AI review passed', 'Approval required'] : ['CI pasó', 'Pruebas pasaron', 'Preview saludable', 'Revisión de IA aprobada', 'Aprobación requerida']
  return <div className="benefit-art readiness-art"><div className="readiness-head"><div><p>{language === 'en' ? 'Shipping readiness' : 'Preparación de envío'}</p><b className="readiness-score">4 <small>/ 5</small></b></div><span className="attention-pill readiness-pill">{language === 'en' ? 'Almost ready' : 'Casi listo'}</span></div><div className="readiness-bar"><span/></div>{checks.map((check, index) => <div className={`check ${index === 4 ? 'pending' : ''}`} key={check}><i>{index === 4 ? '○' : '✓'}</i>{check}</div>)}<div className="ready-state">{language === 'en' ? 'One approval away from shipping' : 'A una aprobación de enviar'}</div></div>
}

function ReleaseArt({ language }: SectionProps) {
  return <div className="benefit-art release-art"><div className="release-top"><span>{language === 'en' ? 'Release 2.15' : 'Lanzamiento 2.15'}</span><b>5 PRs · 3 repos</b></div><div className="branch-compare"><div className="branch-tag">development</div><div className="branch-arrow">→</div><div className="branch-tag">staging</div></div><div className="included"><p>PR #842 · incight-dashboards-web</p><b>Dashboard Filters</b></div><div className="included"><p>PR #846 · incight-web</p><b>Fix CSV Export Encoding</b></div><div className="included"><p>PR #855 · agent-ai</p><b>Agent Timeout Handling</b></div><div className="release-ready"><i/>{language === 'en' ? '8 of 9 release checks complete' : '8 de 9 checks de lanzamiento completos'}</div></div>
}

export function BenefitsSection({ language }: SectionProps) {
  const c = copy[language]
  const cards = [
    { icon: 'warning' as const, tone: 'amber', copy: c.benefits.attention, art: <AttentionArt language={language}/> },
    { icon: 'check' as const, tone: 'green', copy: c.benefits.readiness, art: <ReadinessArt language={language}/> },
    { icon: 'window' as const, tone: 'light-blue', copy: c.benefits.releases, art: <ReleaseArt language={language}/> },
  ]
  return <section className="section" id="benefits"><div className="container"><Reveal className="benefit-header"><div><Kicker>{c.benefits.kicker}</Kicker><h2 className="section-title">{c.benefits.title}</h2></div><p className="section-copy">{c.benefits.copy}</p></Reveal><div className="benefit-grid">{cards.map(({ icon, tone, copy: cardCopy, art }) => <Reveal className="benefit-card" key={cardCopy[0]}><div className="benefit-copy"><span className="benefit-icon" style={{ '--benefit': `var(--${tone})` } as CSSProperties}><Icon name={icon}/></span><h3>{cardCopy[0]}</h3><p>{cardCopy[1]}</p></div>{art}</Reveal>)}</div></div></section>
}

const localizedStages = {
  en: ['In progress', 'Review', 'Ready to ship', 'Staging', 'Production'],
  es: ['En desarrollo', 'Revisión', 'Listo para enviar', 'Staging', 'Producción'],
}

export function PipelineSection({ language }: SectionProps) {
  const c = copy[language]
  const stateTranslations = language === 'en' ? {} : { 'In development': 'En desarrollo', 'Review ready': 'Listo para revisión', 'CI failed': 'CI falló', 'All checks passed': 'Todos los checks pasaron', 'Preview healthy': 'Preview saludable', 'Released today': 'Publicado hoy' }
  return <section className="pipeline-section" id="pipeline"><div className="container"><Reveal><Kicker>{c.pipeline.kicker}</Kicker><h2 className="section-title">{c.pipeline.title}</h2><p className="section-copy">{c.pipeline.copy}</p></Reveal><Reveal className="pipeline-frame"><div className="pipeline-frame-top"><div><h3>{c.pipeline.heading}</h3><p>{c.pipeline.subheading}</p></div><span className="pipeline-total"><i/>{c.pipeline.total}</span></div><div className="pipeline-scroll" aria-label="Swipe through the delivery pipeline"><div className="pipeline-board">{pipelineStages.map((stage, index) => <div className="pipeline-column" style={{ '--stage': `var(--${stage.tone})` } as CSSProperties} key={stage.name}><div className="pipeline-column-head"><i/><b>{localizedStages[language][index]}</b><span>{stage.count}</span></div>{stage.tickets.map((ticket) => <article className="pipe-ticket" key={ticket.number}><span className="ticket-num">{ticket.number}</span><b>{ticket.title}</b><p>{ticket.meta}</p><span className="ticket-state" style={ticket.stateTone ? { '--stage': 'var(--red)' } as CSSProperties : undefined}><i/>{stateTranslations[ticket.state as keyof typeof stateTranslations] ?? ticket.state}</span></article>)}</div>)}</div></div></Reveal></div></section>
}

const aiAnswers = {
  en: [
    ['PR #842 is the best next review.', 'CI and tests are green, the preview is healthy, and approval is the only remaining shipping requirement.', ['4 / 5 passed', 'Healthy', 'Approval']],
    ['PR #846 can ship today.', 'Its checks, tests, preview, and approval are complete. It is ready for the next release.', ['5 / 5 passed', 'Healthy', 'None']],
    ['Three changes are in staging.', 'Dashboard filters, KPI refresh, and CSV export encoding are the main changes to validate before Release 2.15.', ['3 in staging', 'Healthy', 'Visual check']],
  ],
  es: [
    ['PR #842 es la mejor revisión para hacer ahora.', 'CI y pruebas están en verde, el preview está saludable y la aprobación es el único requisito pendiente.', ['4 / 5 aprobados', 'Saludable', 'Aprobación']],
    ['PR #846 puede enviarse hoy.', 'Sus checks, pruebas, preview y aprobación están completos. Está listo para el próximo release.', ['5 / 5 aprobados', 'Saludable', 'Nada']],
    ['Hay tres cambios en staging.', 'Dashboard Filters, KPI Refresh y CSV Export Encoding son los cambios principales a validar antes del Release 2.15.', ['3 en staging', 'Saludable', 'Chequeo visual']],
  ],
} as const

export function AiSection({ language }: SectionProps) {
  const c = copy[language]
  const [questionIndex, setQuestionIndex] = useState(0)
  const answer = aiAnswers[language][questionIndex]
  return <section className="section section-tight" id="ai"><div className="container ai-layout"><Reveal><Kicker>{c.ai.kicker}</Kicker><h2 className="section-title">{c.ai.title}</h2><p className="section-copy">{c.ai.copy}</p><div className="ai-features">{c.ai.features.map((feature) => <div className="ai-feature" key={feature}><i>✓</i>{feature}</div>)}</div></Reveal><Reveal className="ask-window"><div className="ask-header"><span className="ask-orb"><Icon name="sparkle"/></span><b>{c.ai.heading}</b><span>{c.ai.ready}</span></div><div className="ask-body"><div className="ask-question"><Icon name="sparkle"/><span>{c.ai.questions[questionIndex]}</span></div><div className="ask-answer"><p><b>{answer[0]}</b> {answer[1]}</p><div className="answer-details">{[c.ai.checks, c.ai.preview, c.ai.remaining].map((label, index) => <div className="answer-detail" key={label}><label>{label}</label><b>{answer[2][index]}</b></div>)}</div></div></div><div className="ask-suggestions">{c.ai.questions.map((question, index) => <button className="question-chip" type="button" onClick={() => setQuestionIndex(index)} aria-pressed={questionIndex === index} key={question}>{question}</button>)}</div></Reveal></div></section>
}

export function PreviewSection({ language }: SectionProps) {
  const c = copy[language]
  const labels = language === 'en' ? ['Commit', 'Deployed', 'Status'] : ['Commit', 'Desplegado', 'Estado']
  const validation = language === 'en' ? [['Desktop visual check', 'Passed', 'green'], ['Tablet visual check', 'Passed', 'green'], ['Mobile visual check', 'Needs look', 'amber']] : [['Chequeo visual de escritorio', 'Aprobado', 'green'], ['Chequeo visual de tablet', 'Aprobado', 'green'], ['Chequeo visual de móvil', 'Revisar', 'amber']]
  return <section className="section" id="preview"><div className="container preview-layout"><Reveal className="preview-panel"><div className="preview-top"><div className="browser-dots"><i/><i/><i/></div><div className="preview-url">preview.wayfinder.app/pr/842/dashboard-filters</div></div><div className="preview-canvas"><div className="preview-nav"><span>Northstar</span><div>Platform &nbsp;&nbsp; Pricing &nbsp;&nbsp; About</div><span>Start free</span></div><div className="preview-content"><div><h3>{c.preview.visualTitle}</h3><p>{c.preview.visualCopy}</p><button type="button">{language === 'en' ? 'Explore product →' : 'Explorar producto →'}</button></div><div className="preview-graphic"><div className="preview-graphic-inner"/></div></div></div></Reveal><Reveal><Kicker>{c.preview.kicker}</Kicker><h2 className="section-title">{c.preview.title}</h2><p className="section-copy">{c.preview.copy}</p><div className="preview-info">{labels.map((label, index) => <div className="preview-info-item" key={label}><label>{label}</label><b className={index === 2 ? 'text-green' : ''}>{index === 0 ? 'a13f9c2' : index === 1 ? '6 min ago' : language === 'en' ? 'Healthy' : 'Saludable'}</b></div>)}</div><div className="validation-list">{validation.map(([label, state, tone]) => <div className="validation" key={label}><span>{label}</span><b className={tone === 'green' ? 'text-green' : 'text-amber'}>{state}</b></div>)}</div></Reveal></div></section>
}

export function ReleasesSection({ language }: SectionProps) {
  const c = copy[language]
  const localized = language === 'en' ? releases : [
    { ...releases[0], name: 'Lanzamiento 2.15', date: 'Previsto para el 18 de septiembre', scope: '5 PRs · 3 repositorios', readinessLabel: 'Preparación', status: 'Casi listo' },
    { ...releases[1], name: 'Lanzamiento 2.14', date: 'Enviado el 11 de septiembre', scope: '8 PRs · 3 repositorios', readinessLabel: 'Resultado', readiness: 'Despliegue exitoso', status: 'En producción' },
  ]
  return <section className="section section-tight" id="releases"><div className="container"><Reveal><Kicker>{c.release.kicker}</Kicker><h2 className="section-title">{c.release.title}</h2><p className="section-copy">{c.release.copy}</p></Reveal><Reveal className="release-list">{localized.map((release) => <article className="release-row" key={release.name}><div className="release-name"><span className={`release-icon ${release.tone === 'green' ? 'release-icon-green' : ''}`}><Icon name={release.tone === 'green' ? 'check' : 'release'}/></span><div><h3>{release.name}</h3><p>{release.date}</p></div></div><div className="release-detail"><label>{language === 'en' ? 'Scope' : 'Alcance'}</label><b>{release.scope}</b></div><div className="release-detail"><label>{release.readinessLabel}</label><b>{release.readiness}</b></div><span className={`release-status status-${release.tone}`}>{release.status}</span></article>)}</Reveal></div></section>
}

export function MobileSection({ language }: SectionProps) {
  const c = copy[language]
  return <section className="mobile-section" id="mobile"><div className="container mobile-layout"><Reveal className="mobile-copy"><Kicker>{c.mobile.kicker}</Kicker><h2 className="section-title">{c.mobile.title}</h2><p className="section-copy">{c.mobile.copy}</p><div className="mobile-points">{c.mobile.points.map((point) => <div key={point}><i>✓</i><span>{point}</span></div>)}</div><span className="pwa-badge"><Icon name="deploy"/>{language === 'en' ? 'Add to Home Screen' : 'Agregar a la pantalla de inicio'} <span className="muted">PWA</span></span></Reveal><Reveal className="phone-wrap"><div className="phone"><div className="phone-screen"><div className="phone-notch"/><div className="phone-top"><span>9:41</span><span>● ● ●</span></div><h3 className="phone-hello">{language === 'en' ? 'Good morning,' : 'Buen día,'}<br/>Alex</h3><p className="phone-sub">{language === 'en' ? 'Here’s what needs your attention.' : 'Esto es lo que necesita tu atención.'}</p><div className="phone-stats"><div className="phone-stat"><b>2</b><span>{language === 'en' ? 'ready to ship' : 'listos para enviar'}</span></div><div className="phone-stat"><b className="text-amber">4</b><span>{language === 'en' ? 'need attention' : 'necesitan atención'}</span></div></div><div className="phone-section-label">{language === 'en' ? 'Ready to ship' : 'Listo para enviar'}</div><div className="phone-pr"><div className="phone-pr-top"><span>PR #842</span><span>incight-dashboards-web</span></div><b>Dashboard Filters</b><span>4 / 5 shipping checks</span></div><div className="phone-pr"><div className="phone-pr-top"><span>PR #846</span><span>incight-web</span></div><b>Fix CSV Export Encoding</b><span>{language === 'en' ? 'Ready to ship' : 'Listo para enviar'}</span></div></div></div></Reveal></div></section>
}

export function AudienceAndComparison({ language }: SectionProps) {
  const c = copy[language]
  const audienceCopy = language === 'en' ? audiences : [
    { initials: 'TL', title: 'Tech Leads', copy: 'Mantené clara la visión de entrega mientras guiás decisiones técnicas.' }, { initials: 'EM', title: 'Engineering Managers', copy: 'Entendé el riesgo y el ritmo sin perseguir actualizaciones individuales.' }, { initials: 'ST', title: 'Equipos de startups', copy: 'Generá calma alrededor de los lanzamientos mientras el producto y el equipo evolucionan rápido.' }, { initials: 'PE', title: 'Ingeniería de producto', copy: 'Coordiná el último tramo entre código, validación y clientes.' },
  ]
  const githubList = language === 'en' ? ['Pull requests', 'Commits', 'Branches', 'Checks'] : ['Pull requests', 'Commits', 'Ramas', 'Checks']
  const wayfinderList = language === 'en' ? ['Delivery state', 'Shipping readiness', 'Release context', 'AI risk and preview status'] : ['Estado de entrega', 'Preparación de envío', 'Contexto de lanzamiento', 'Riesgo de IA y estado del preview']
  return <>
    <section className="section section-tight" id="who-its-for"><div className="container"><Reveal><Kicker>{c.audience.kicker}</Kicker><h2 className="section-title">{c.audience.title}</h2><p className="section-copy">{c.audience.copy}</p></Reveal><Reveal className="audience-grid">{audienceCopy.map((audience) => <article className="audience-item" key={audience.initials}><i>{audience.initials}</i><h3>{audience.title}</h3><p>{audience.copy}</p></article>)}</Reveal><Reveal><p className="respect-note"><b>{c.audience.note}</b></p></Reveal></div></section>
    <section className="section section-tight" id="why-wayfinder"><div className="container"><Reveal><Kicker>{c.comparison.kicker}</Kicker><h2 className="section-title">{c.comparison.title}<br/>{c.comparison.emphasis}</h2></Reveal><Reveal className="comparison"><div className="compare-column"><div className="compare-brand"><span className="github-mark">⌘</span>GitHub</div><p>{c.comparison.github}</p><div className="compare-list compare-github">{githubList.map((entry) => <div key={entry}><i/>{entry}</div>)}</div></div><div className="compare-column wayfinder"><div className="compare-brand"><Logo compact/>Wayfinder</div><p>{c.comparison.wayfinder}</p><div className="compare-list compare-wayfinder">{wayfinderList.map((entry) => <div key={entry}><i/>{entry}</div>)}</div></div></Reveal></div></section>
  </>
}

export function EarlyAccess({ language }: SectionProps) {
  const c = copy[language]
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState<{ value: string; valid: boolean } | null>(null)
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    if (!isValid) {
      setMessage({ value: c.cta.invalid, valid: false })
      return
    }
    setMessage({ value: c.cta.success, valid: true })
    setEmail('')
  }
  return <section className="cta-section" id="early-access"><div className="container"><Reveal className="cta-panel"><Kicker>{c.cta.kicker}</Kicker><h2>{c.cta.title}</h2><p>{c.cta.copy}</p><form className="signup" noValidate onSubmit={handleSubmit}><label className="sr-only" htmlFor="email">Work email address</label><input id="email" name="email" type="email" autoComplete="email" placeholder={c.cta.placeholder} value={email} onChange={(event) => setEmail(event.target.value)} aria-invalid={message?.valid === false}/><button className="button button-primary" type="submit">{c.cta.join} <Icon name="arrow"/></button></form><p className={`signup-message ${message?.valid === false ? 'is-error' : ''}`} role="status" aria-live="polite">{message?.value}</p><div className="cta-small">{c.cta.or} <a href="mailto:hello@wayfinder.app">{c.cta.demo}</a>.</div></Reveal></div></section>
}

export function Footer({ language }: SectionProps) {
  const c = copy[language]
  return <footer className="site-footer"><div className="container footer-row"><div><a href="#top"><Logo/></a><p className="footer-copy">{c.footer.tagline}<br/>© 2026 Wayfinder</p></div><div className="footer-links"><a href="#product">{language === 'en' ? 'Product' : 'Producto'}</a><a href="#early-access">{language === 'en' ? 'Early Access' : 'Acceso anticipado'}</a><a href="https://github.com" target="_blank" rel="noreferrer">GitHub</a><a href="#top">{c.footer.privacy}</a></div></div></footer>
}
