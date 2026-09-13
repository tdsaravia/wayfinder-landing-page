export type Language = 'en' | 'es'

export type PipelineStage = {
  name: string
  count: number
  tone: 'blue' | 'amber' | 'green' | 'light-blue'
  tickets: { number: string; title: string; meta: string; state: string; stateTone?: 'red' }[]
}

export type Release = {
  name: string
  date: string
  scope: string
  readinessLabel: string
  readiness: string
  status: string
  tone: 'amber' | 'green'
}

export type Audience = { initials: string; title: string; copy: string }

export const copy = {
  en: {
    nav: { product: 'Product', how: 'How it works', why: 'Why Wayfinder', access: 'Early Access', join: 'Join Private Beta' },
    hero: {
      beta: 'PRIVATE BETA', connection: 'Engineering delivery, clearly connected.', title: 'From branch to production.', emphasis: 'One view.',
      summary: 'See what your team is shipping, what needs attention, and what is actually ready to move forward.',
      join: 'Join the private beta', how: 'See how it works', note: 'Built for Tech Leads and Engineering Managers.',
      caption: 'One calm view across branches, reviews, checks, staging, and production.',
      proof: 'Made for teams that want delivery context, not another dashboard.',
    },
    problem: {
      kicker: 'The delivery gap', title: 'Shipping software gets messy fast.',
      copy: 'A modern engineering team might have pull requests, branches, checks, reviews, environments, and releases all moving at once. The information exists — but it is scattered.',
      cards: [
        ['Too many places to check', 'PRs, CI, branches, previews, reviews, and releases live across different tools and tabs.'],
        ['Hard to know what is actually ready', 'CI passing is important, but it does not always mean a change is safe to ship.'],
        ['Release context gets lost', 'Understanding what changed between development, staging, and production often becomes manual work.'],
      ],
    },
    journey: {
      kicker: 'A shared map', title: 'One control room for everything moving toward production.',
      copy: 'Every change has a journey. Wayfinder shows where it is, what is blocking it, and what can move forward.',
      steps: [['Branch', 'Work begins'], ['Review', 'People align'], ['Validation', 'Checks run'], ['Staging', 'Reality check'], ['Production', 'Delivered']],
    },
    benefits: {
      kicker: 'Clarity at every stage', title: 'The questions that keep delivery moving.',
      copy: 'Wayfinder connects the signals your team already has, then makes the next action easy to see.',
      attention: ['Know what needs attention', 'Surface CI failures, requested changes, missing approvals, and work that might otherwise slip through the cracks.'],
      readiness: ['Know what is ready to ship', 'Shipping Readiness makes the remaining requirements visible before a change moves to the next environment.'],
      releases: ['Understand every release', 'Compare branches, see included pull requests, and understand impact before you tell a release to move forward.'],
    },
    pipeline: {
      kicker: 'Shipping pipeline', title: 'See work moving toward production.',
      copy: 'Wayfinder turns engineering delivery into one clear flow — without turning your work into a ticket board.',
      heading: 'Engineering delivery', subheading: 'All active changes across Tobias’s team', total: '6 changes moving',
    },
    ai: {
      kicker: 'Practical AI', title: 'AI that understands delivery context.',
      copy: 'Ask direct delivery questions, grounded in the state of your pull requests, checks, environments, and release history.',
      heading: 'Ask Wayfinder', ready: 'Context ready', checks: 'Checks', preview: 'Preview', remaining: 'Remaining',
      questions: ['What should I review first?', 'What can ship today?', 'What changed in staging?'],
      features: ['What should I review first?', 'What should I manually test?', 'What can ship today?', 'What changed between dev and staging?'],
    },
    preview: {
      kicker: 'Live preview', title: 'Review frontend changes without hunting for screenshots.',
      copy: 'When a preview deployment is available, Wayfinder makes it simple to open and validate the real product before approving a change.',
      visualCopy: 'A realistic frontend preview, ready to open when a change needs validation.', visualTitle: 'Build with confidence.',
    },
    release: { kicker: 'Release context', title: 'Know exactly what is going out next.', copy: 'Keep a clear delivery history and understand what reached production — without assembling release context by hand.' },
    mobile: {
      kicker: 'Mobile-ready web app', title: 'Your delivery command center, wherever you are.',
      copy: 'Check what needs attention, review readiness, and release status from your phone. Wayfinder is a web application that can live on your Home Screen.',
      points: ['Catch the one approval holding up a ready change.', 'See whether a release is clear to move forward.', 'Open the same delivery context without the desktop hunt.'],
    },
    audience: {
      kicker: 'Built for the people coordinating delivery', title: 'Teams shipping software every day.',
      copy: 'Wayfinder gives product engineering teams a shared delivery view, without turning it into employee monitoring.',
      note: 'Wayfinder tracks the state of the work — not the productivity of the people.',
    },
    comparison: {
      kicker: 'A complementary delivery layer', title: 'GitHub tells you what changed.', emphasis: 'Wayfinder tells you whether it is ready to move forward.',
      github: 'The source of truth for code, pull requests, and checks.', wayfinder: 'The delivery context around code, across the full path to production.',
    },
    cta: { kicker: 'Early access', title: 'See what your team is shipping.', copy: 'Wayfinder is being built for Tech Leads who want a clearer view from branch to production.', join: 'Join Private Beta', demo: 'request a demo', or: 'Or', placeholder: 'work@email.com', invalid: 'Enter a valid work email to join the list.', success: 'Thanks — you’re on the early access list.' },
    footer: { tagline: 'From branch to production. One view.', privacy: 'Privacy' },
  },
  es: {
    nav: { product: 'Producto', how: 'Cómo funciona', why: 'Por qué Wayfinder', access: 'Acceso anticipado', join: 'Unirse a la beta privada' },
    hero: {
      beta: 'BETA PRIVADA', connection: 'Entrega de ingeniería, claramente conectada.', title: 'De la rama a producción.', emphasis: 'Una sola vista.',
      summary: 'Entendé qué está enviando tu equipo, qué necesita atención y qué está realmente listo para avanzar.',
      join: 'Unirse a la beta privada', how: 'Ver cómo funciona', note: 'Creado para Tech Leads y Engineering Managers.',
      caption: 'Una vista tranquila de ramas, revisiones, checks, staging y producción.', proof: 'Para equipos que buscan contexto de entrega, no otro dashboard.',
    },
    problem: {
      kicker: 'La brecha de entrega', title: 'Entregar software se vuelve caótico muy rápido.',
      copy: 'Un equipo de ingeniería moderno puede tener pull requests, ramas, checks, revisiones, entornos y lanzamientos moviéndose al mismo tiempo. La información existe, pero está dispersa.',
      cards: [
        ['Demasiados lugares para revisar', 'Los PRs, CI, ramas, previews, revisiones y lanzamientos viven en diferentes herramientas y pestañas.'],
        ['Es difícil saber qué está realmente listo', 'Que CI pase es importante, pero no siempre significa que un cambio sea seguro para enviar.'],
        ['El contexto de los lanzamientos se pierde', 'Entender qué cambió entre desarrollo, staging y producción suele convertirse en trabajo manual.'],
      ],
    },
    journey: {
      kicker: 'Un mapa compartido', title: 'Una sala de control para todo lo que avanza hacia producción.',
      copy: 'Cada cambio tiene un recorrido. Wayfinder muestra dónde está, qué lo bloquea y qué puede avanzar.',
      steps: [['Rama', 'El trabajo empieza'], ['Revisión', 'El equipo se alinea'], ['Validación', 'Los checks se ejecutan'], ['Staging', 'Chequeo en contexto'], ['Producción', 'Entregado']],
    },
    benefits: {
      kicker: 'Claridad en cada etapa', title: 'Las preguntas que mantienen la entrega en movimiento.',
      copy: 'Wayfinder conecta las señales que tu equipo ya tiene y hace que la siguiente acción sea fácil de ver.',
      attention: ['Entendé qué necesita atención', 'Detectá fallas de CI, cambios solicitados, aprobaciones faltantes y trabajo que de otra forma podría pasar desapercibido.'],
      readiness: ['Entendé qué está listo para enviar', 'Shipping Readiness hace visibles los requisitos pendientes antes de que un cambio avance al siguiente entorno.'],
      releases: ['Entendé cada lanzamiento', 'Compará ramas, revisá los pull requests incluidos y entendé el impacto antes de avanzar un lanzamiento.'],
    },
    pipeline: { kicker: 'Flujo de entrega', title: 'Mirá el trabajo avanzar hacia producción.', copy: 'Wayfinder convierte la entrega de ingeniería en un flujo claro, sin convertir tu trabajo en un tablero de tickets.', heading: 'Entrega de ingeniería', subheading: 'Todos los cambios activos del equipo de Tobias', total: '6 cambios en movimiento' },
    ai: { kicker: 'IA práctica', title: 'IA que entiende el contexto de entrega.', copy: 'Hacé preguntas directas sobre entregas, basadas en el estado de tus pull requests, checks, entornos e historial de lanzamientos.', heading: 'Preguntale a Wayfinder', ready: 'Contexto listo', checks: 'Checks', preview: 'Preview', remaining: 'Pendiente', questions: ['¿Qué debería revisar primero?', '¿Qué puede enviarse hoy?', '¿Qué cambió en staging?'], features: ['¿Qué debería revisar primero?', '¿Qué debería probar manualmente?', '¿Qué puede enviarse hoy?', '¿Qué cambió entre dev y staging?'] },
    preview: { kicker: 'Preview en vivo', title: 'Revisá cambios de frontend sin perseguir capturas de pantalla.', copy: 'Cuando hay un preview disponible, Wayfinder facilita abrir y validar el producto real antes de aprobar un cambio.', visualCopy: 'Un preview realista de frontend, listo para abrir cuando un cambio necesita validación.', visualTitle: 'Construí con confianza.' },
    release: { kicker: 'Contexto de lanzamiento', title: 'Sabé exactamente qué sale en el próximo lanzamiento.', copy: 'Mantené un historial de entrega claro y entendé qué llegó a producción, sin armar el contexto de lanzamiento a mano.' },
    mobile: { kicker: 'Aplicación web lista para móvil', title: 'Tu centro de comando de entrega, estés donde estés.', copy: 'Revisá qué necesita atención, el estado de preparación y los lanzamientos desde tu teléfono. Wayfinder es una aplicación web que puede vivir en tu pantalla de inicio.', points: ['Detectá la aprobación que está frenando un cambio listo.', 'Mirá si un lanzamiento está listo para avanzar.', 'Abrí el mismo contexto de entrega sin buscar en el escritorio.'] },
    audience: { kicker: 'Creado para quienes coordinan la entrega', title: 'Equipos que envían software todos los días.', copy: 'Wayfinder ofrece a los equipos de ingeniería de producto una vista compartida de la entrega, sin convertirla en monitoreo de personas.', note: 'Wayfinder sigue el estado del trabajo, no la productividad de las personas.' },
    comparison: { kicker: 'Una capa complementaria de entrega', title: 'GitHub te dice qué cambió.', emphasis: 'Wayfinder te dice si está listo para avanzar.', github: 'La fuente de verdad para código, pull requests y checks.', wayfinder: 'El contexto de entrega alrededor del código, a lo largo de todo el camino a producción.' },
    cta: { kicker: 'Acceso anticipado', title: 'Mirá qué está enviando tu equipo.', copy: 'Wayfinder se está creando para Tech Leads que quieren una vista más clara de la rama a producción.', join: 'Unirse a la beta privada', demo: 'solicitar una demo', or: 'O', placeholder: 'email@empresa.com', invalid: 'Ingresá un email de trabajo válido para unirte a la lista.', success: 'Gracias — ya estás en la lista de acceso anticipado.' },
    footer: { tagline: 'De la rama a producción. Una sola vista.', privacy: 'Privacidad' },
  },
} as const

export const pipelineStages: PipelineStage[] = [
  { name: 'In progress', count: 1, tone: 'blue', tickets: [{ number: 'PR #855', title: 'Agent Timeout Handling', meta: 'agent-ai · Tobias', state: 'In development' }] },
  { name: 'Review', count: 2, tone: 'amber', tickets: [{ number: 'PR #842', title: 'Dashboard Filters', meta: 'dashboards-web · Gabriel', state: 'Review ready' }, { number: 'PR #851', title: 'Bulk Actions', meta: 'incight-web · John', state: 'CI failed', stateTone: 'red' }] },
  { name: 'Ready to ship', count: 1, tone: 'green', tickets: [{ number: 'PR #846', title: 'CSV Export Encoding', meta: 'incight-web · Sarah', state: 'All checks passed' }] },
  { name: 'Staging', count: 1, tone: 'light-blue', tickets: [{ number: 'PR #835', title: 'KPI Refresh', meta: 'dashboards-web · Gabriel', state: 'Preview healthy' }] },
  { name: 'Production', count: 1, tone: 'green', tickets: [{ number: 'PR #829', title: 'Pareto Widget', meta: 'dashboards-web · Sarah', state: 'Released today' }] },
]

export const releases: Release[] = [
  { name: 'Release 2.15', date: 'Targeting September 18', scope: '5 PRs · 3 repositories', readinessLabel: 'Readiness', readiness: '8 / 9 checks', status: 'Almost ready', tone: 'amber' },
  { name: 'Release 2.14', date: 'Shipped September 11', scope: '8 PRs · 3 repositories', readinessLabel: 'Result', readiness: 'Deployment successful', status: 'In production', tone: 'green' },
]

export const audiences: Audience[] = [
  { initials: 'TL', title: 'Tech Leads', copy: 'Keep the delivery picture clear while guiding technical decisions.' },
  { initials: 'EM', title: 'Engineering Managers', copy: 'Understand risk and momentum without chasing individual updates.' },
  { initials: 'ST', title: 'Startup teams', copy: 'Build calm around releases while the product and team evolve quickly.' },
  { initials: 'PE', title: 'Product engineering', copy: 'Coordinate the last mile between code, validation, and customers.' },
]
