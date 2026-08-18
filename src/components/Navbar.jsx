import { Fragment, useState } from 'react'
import MobileMenu from './MobileMenu'
import './Navbar.css'

const NAV_LINKS = [
  { id: 'accueil', label: 'Home' },
  { id: 'apropos', label: 'About' },
  { id: 'projets', label: 'Projects' },
  { id: 'competences', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

function Navbar({ activeId, isDarkMode, onThemeToggle }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <Fragment>
      <header className="navbar">
        <div className="container navbar-inner">
          
          {/* Logo */}
          <a href="#accueil" className="navbar-logo" aria-label="Home">
            <span>KF</span>
            <i className="navbar-logo-dot" />
          </a>

          {/* Navigation Links */}
          <nav className="navbar-links" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={`navbar-link ${activeId === link.id ? 'is-active' : ''}`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="navbar-actions">

            {/* Let's talk */}
            <a href="#contact" className="btn btn-dark navbar-cta">
              Let's talk <span aria-hidden="true">↗</span>
            </a>

            {/* Dark / Light mode */}
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

          {/* Mobile menu button */}
          <button
            type="button"
            className="navbar-burger"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(true)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        links={NAV_LINKS}
        activeId={activeId}
        isDarkMode={isDarkMode}
        onThemeToggle={onThemeToggle}
      />
    </Fragment>
  )
}

export default Navbar
