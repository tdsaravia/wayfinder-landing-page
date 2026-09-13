import type { ReactNode } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

type IconName = 'arrow' | 'check' | 'sun' | 'moon' | 'menu' | 'close' | 'sparkle' | 'branch' | 'review' | 'validation' | 'staging' | 'release' | 'warning' | 'window' | 'deploy'

export function Icon({ name, className }: { name: IconName; className?: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.8, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const }
  const paths: Record<IconName, ReactNode> = {
    arrow: <><path d="M5 12h14" {...common}/><path d="m13 6 6 6-6 6" {...common}/></>,
    check: <path d="m5 12 4.2 4.2L19 6.5" {...common} strokeWidth={2}/>,
    sun: <><circle cx="12" cy="12" r="3.5" {...common}/><path d="M12 2.7v2.1M12 19.2v2.1M21.3 12h-2.1M4.8 12H2.7M18.58 5.42l-1.48 1.48M6.9 17.1l-1.48 1.48M18.58 18.58 17.1 17.1M6.9 6.9 5.42 5.42" {...common}/></>,
    moon: <path d="M20.2 15.2A8.5 8.5 0 0 1 8.8 3.8 8.5 8.5 0 1 0 20.2 15.2Z" {...common}/>,
    menu: <path d="M4 7h16M4 12h16M4 17h16" {...common}/>,
    close: <path d="m6 6 12 12M18 6 6 18" {...common}/>,
    sparkle: <path d="m12 3 1.8 5.4L19 10l-5.2 1.6L12 17l-1.8-5.4L5 10l5.2-1.6L12 3Z" {...common}/>,
    branch: <path d="M7 3v12M17 9V3M7 8h10M7 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM17 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" {...common}/>,
    review: <><path d="m8 12 2.6 2.6L16.5 8.7" {...common}/><circle cx="12" cy="12" r="9" {...common}/></>,
    validation: <path d="M9 3h6M10 3v5l-5 9a3 3 0 0 0 2.62 4.5h8.76A3 3 0 0 0 19 17l-5-9V3M8 15h8" {...common}/>,
    staging: <path d="M7 4h10M6 8h12M5 12h14M6 16h12M7 20h10" {...common}/>,
    release: <path d="M7 4h10l3 3v10l-3 3H7l-3-3V7l3-3ZM9 12h6M12 9v6" {...common}/>,
    warning: <path d="M12 9v4M12 17h.01M10.29 3.86 2.82 17a2 2 0 0 0 1.74 3h14.88a2 2 0 0 0 1.74-3L13.71 3.86a2 2 0 0 0-3.42 0Z" {...common}/>,
    window: <path d="M4 5h16v14H4zM8 9h8M8 13h5" {...common}/>,
    deploy: <path d="M12 16V4M8 8l4-4 4 4M5 14v5h14v-5" {...common}/>,
  }
  return <svg viewBox="0 0 24 24" className={className} aria-hidden="true">{paths[name]}</svg>
}

export function Logo({ compact = false }: { compact?: boolean }) {
  return <span className="brand"><span className="mark"><svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M12 3 18.4 9 12 21 5.6 9 12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/><path d="m12 9 2.5 4-2.5 3.5L9.5 13 12 9Z" fill="currentColor"/></svg></span>{!compact && <span>Wayfinder</span>}</span>
}

export function Kicker({ children }: { children: ReactNode }) {
  return <span className="kicker">{children}</span>
}

export function Button({ children, variant = 'primary', className = '', ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & { variant?: 'primary' | 'secondary' }) {
  return <button className={`button button-${variant} ${className}`} {...props}>{children}</button>
}

export function Reveal({ children, className = '' }: { children: ReactNode; className?: string }) {
  const { elementRef, visible } = useScrollReveal()
  return <div ref={elementRef} className={`reveal ${visible ? 'is-visible' : ''} ${className}`}>{children}</div>
}
