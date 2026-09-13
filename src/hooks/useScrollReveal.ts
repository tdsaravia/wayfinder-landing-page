import { useEffect, useRef, useState } from 'react'

export function useScrollReveal() {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(() => {
    if (typeof window === 'undefined') return true
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches || !('IntersectionObserver' in window)
  })

  useEffect(() => {
    const element = elementRef.current
    if (!element || visible) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.unobserve(entry.target)
      }
    }, { threshold: 0.12 })
    observer.observe(element)
    return () => observer.disconnect()
  }, [visible])

  return { elementRef, visible }
}
