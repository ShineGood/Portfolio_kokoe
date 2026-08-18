import { useEffect, useState } from 'react'
import './Footer.css'

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/ShineGood' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kokoe-fiawoo-b8369a1a1' },
  { label: 'Email', href: 'mailto:Kokoe.faith@gmail.com' },
]

function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setShowBackToTop(window.scrollY > 400)
    }
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <footer className="footer">
      <div className="container footer-top">
        <h2 className="footer-heading">Thank you for visiting</h2>
        <p className="footer-text">
          Feel free to reach out if you have any questions or would like to collaborate.
        </p>
        {/* <a className="btn btn-light" href="mailto:Kokoe.faith@gmail.com">
          Contact Me
        </a> */}
      </div>

      <div className="container footer-bottom">
        <span className="footer-copyright">KOKOE FIAWOO © 2026 - All rights reserved.</span>
        <div className="footer-links">
          {SOCIAL_LINKS.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </div>
      </div>

      <a
        className={`back-to-top ${showBackToTop ? 'is-visible' : ''}`}
        href="#accueil"
        aria-label="Back to top"
        aria-hidden={!showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
      >
        <span aria-hidden="true">↑</span>
      </a>
    </footer>
  )
}

export default Footer
