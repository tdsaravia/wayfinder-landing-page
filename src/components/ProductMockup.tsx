import type { Language } from '../data/landingData'
import { Icon, Logo } from './ui'

const productCopy = {
  en: {
    overview: 'Overview', prs: 'Pull requests', releases: 'Releases', activity: 'Activity', ask: 'Ask Wayfinder', workspace: 'Workspace', teamTools: 'Team tools',
    greeting: 'Good morning, Tobias', subheading: 'Here’s what is moving across your team.', ready: 'Ready to ship', attention: 'Need attention',
    allPassed: 'All shipping checks passed', needed: 'Review, CI, or approval needed', pipeline: 'Shipping pipeline', active: '6 active changes',
    stages: [['In progress', 'PR #855', 'Agent timeout', 'In progress'], ['Review', 'PR #842', 'Dashboard filters', '4 / 5 checks'], ['Ready to ship', 'PR #846', 'CSV export encoding', 'Ready to ship'], ['Staging', 'PR #835', 'KPI refresh', 'Preview healthy'], ['Production', 'PR #829', 'Pareto widget', 'Released']],
  },
  es: {
    overview: 'Resumen', prs: 'Pull requests', releases: 'Lanzamientos', activity: 'Actividad', ask: 'Preguntale a Wayfinder', workspace: 'Espacio de trabajo', teamTools: 'Herramientas del equipo',
    greeting: 'Buen día, Tobias', subheading: 'Esto es lo que se está moviendo en tu equipo.', ready: 'Listo para enviar', attention: 'Requiere atención',
    allPassed: 'Todas las comprobaciones de envío pasaron', needed: 'Se requiere revisión, CI o aprobación', pipeline: 'Flujo de entrega', active: '6 cambios activos',
    stages: [['En desarrollo', 'PR #855', 'Timeout de agente', 'En desarrollo'], ['Revisión', 'PR #842', 'Dashboard filters', '4 / 5 checks'], ['Listo para enviar', 'PR #846', 'CSV export encoding', 'Listo para enviar'], ['Staging', 'PR #835', 'KPI refresh', 'Preview saludable'], ['Producción', 'PR #829', 'Pareto widget', 'Publicado']],
  },
} as const

const stageTones = ['blue', 'amber', 'green', 'light-blue', 'green']

export function ProductMockup({ language }: { language: Language }) {
  const text = productCopy[language]
  const navigation = [
    ['window', text.overview, undefined], ['branch', text.prs, '4'], ['release', text.releases, undefined], ['validation', text.activity, undefined], ['sparkle', text.ask, undefined],
  ] as const
  return <div className="hero-product" id="product">
    <div className="app-window">
      <div className="window-top"><div className="window-dots" aria-hidden="true"><i/><i/><i/></div><div className="window-title">{language === 'en' ? 'Delivery overview' : 'Resumen de entregas'}</div><div className="window-team"><span>TS</span>{language === 'en' ? 'Tobias’s team' : 'Equipo de Tobias'}</div></div>
      <div className="product-body">
        <aside className="product-side" aria-label="Product navigation">
          <div className="product-side-brand"><Logo compact />Wayfinder</div>
          <div className="side-label">{text.workspace}</div>
          {navigation.slice(0, 3).map(([icon, label, badge], index) => <div className={`side-link ${index === 0 ? 'selected' : ''}`} key={label}><Icon name={icon}/>{label}{badge && <b>{badge}</b>}</div>)}
          <div className="side-label">{text.teamTools}</div>
          {navigation.slice(3).map(([icon, label]) => <div className="side-link" key={label}><Icon name={icon}/>{label}</div>)}
        </aside>
        <div className="product-main">
          <div className="product-heading"><div><h2>{text.greeting}</h2><p>{text.subheading}</p></div><div className="team-mini" aria-label="Team members"><i>TS</i><i>GW</i><i>JC</i><i>SM</i></div></div>
          <div className="summary-grid">
            <div className="summary-tile summary-ready"><label>{text.ready}</label><strong>2</strong><span>{text.allPassed}</span></div>
            <div className="summary-tile summary-attention"><label>{text.attention}</label><strong>4</strong><span>{text.needed}</span></div>
          </div>
          <div className="pipeline-label"><span>{text.pipeline}</span><span>{text.active}</span></div>
          <div className="mini-pipeline">
            {text.stages.map(([name, number, title, state], index) => <div className="mini-stage" style={{ '--stage': `var(--${stageTones[index]})` } as React.CSSProperties} key={number}><h3>{name}</h3><div className="mini-card"><p>{number}</p><b>{title}</b><span>{state}</span></div></div>)}
          </div>
        </div>
      </div>
    </div>
  </div>
}
