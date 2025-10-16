import { useEffect, useState } from 'react'

export default function ThemeAndBoldButtons({ className = '' }) {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains('dark')
  )
  const [isBold, setIsBold] = useState(
    document.documentElement.classList.contains('bold')
  )

  useEffect(() => {
    document.documentElement.classList.toggle('dark', isDark)
    localStorage.setItem('theme', isDark ? 'dark' : 'light')
  }, [isDark])

  useEffect(() => {
    document.documentElement.classList.toggle('bold', isBold)
    localStorage.setItem('bold', isBold ? 'on' : 'off')
  }, [isBold])

  return (
    <div className={`row ${className}`}>
      <button
        className="btn"
        onClick={() => setIsDark(v => !v)}
        aria-label="Cambiar tema claro/oscuro"
        title="Cambiar tema"
      >
        {isDark ? '🌙 Oscuro' : '☀️ Claro'}
      </button>

      <button
        className="btn"
        onClick={() => setIsBold(v => !v)}
        aria-label="Alternar negrita"
        title="Alternar negrita"
      >
        {isBold ? '𝐁 Negrita ON' : '𝘉 Negrita OFF'}
      </button>
    </div>
  )
}
