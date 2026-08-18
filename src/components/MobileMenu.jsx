import { useEffect } from 'react'
import './MobileMenu.css'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ShineGood' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kokoe-fiawoo-b8369a1a1' },
  { label: 'Email', href: 'mailto:Kokoe.faith@gmail.com' },
]

function MobileMenu({ isOpen, onClose, links, activeId, isDarkMode,
  onThemeToggle, }) {
  useEffect(() => {
    document.body.classList.toggle('no-scroll', isOpen)
    return () => document.body.classList.remove('no-scroll')
  }, [isOpen])

  useEffect(() => {
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [onClose])

  return (
    <div className={`mobile-menu-root ${isOpen ? 'is-open' : ''}`} aria-hidden={!isOpen}>
      <div className="mobile-menu-overlay" onClick={onClose} />

      <div className="mobile-menu-panel">
        <div className="mobile-menu-header">
          <span className="navbar-logo">
            <span>KF</span>
            <i className="navbar-logo-dot" />
          </span>
          <button type="button" className="mobile-menu-close" aria-label="Close menu" onClick={onClose}>
            ×
          </button>
        </div>

        <nav className="mobile-menu-links" aria-label="Mobile primary">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`mobile-menu-link ${activeId === link.id ? 'is-active' : ''}`}
              onClick={onClose}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn-dark btn-full" onClick={onClose}>
          Let's talk <span aria-hidden="true">↗</span>
        </a>

        <div className="mobile-menu-theme">
          <span>{isDarkMode ? 'Dark Mode' : 'Light Mode'}</span>

          <button
            type="button"
            className="theme-toggle"
            onClick={onThemeToggle}
            aria-label={
              isDarkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {isDarkMode ? '☀️' : '🌙'}
          </button>
        </div>

        <div className="mobile-menu-socials">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}


export default MobileMenu
