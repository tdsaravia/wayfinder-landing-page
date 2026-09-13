import { useEffect, useState } from 'react'

export type Theme = 'dark' | 'light'

const getInitialTheme = (): Theme => {
  try {
    const storedTheme = window.localStorage.getItem('wayfinder-theme')
    if (storedTheme === 'light' || storedTheme === 'dark') return storedTheme
  } catch {
    // Storage is optional for the landing page.
  }
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export function useTheme() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', theme === 'dark' ? '#07111F' : '#F5F7FA')
    try {
      window.localStorage.setItem('wayfinder-theme', theme)
    } catch {
      // Storage is optional for the landing page.
    }
  }, [theme])

  return { theme, toggleTheme: () => setTheme((currentTheme) => (currentTheme === 'dark' ? 'light' : 'dark')) }
}
