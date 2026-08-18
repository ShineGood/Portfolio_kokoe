import { useState } from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Certificates from './components/Certificates'
import Projects from './components/Projects'
import Skills from './components/Skills'
import ContactCTA from './components/ContactCTA'
import Footer from './components/Footer'

import { useActiveSection } from './hooks/useActiveSection'

import './App.css'

const SECTION_IDS = ['accueil', 'apropos', 'projets', 'competences', 'contact']

function App() {
  const activeId = useActiveSection(SECTION_IDS)
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div id="top" className={`portfolio-shell ${isDarkMode ? 'dark' : 'light'}`}>
      <Navbar activeId={activeId} 
      isDarkMode={isDarkMode} onThemeToggle={() => setIsDarkMode((current) => !current)} 
      />

      <main>
        <Hero />
        <About />
        <Certificates />
        <Projects />
        <Skills />
        <ContactCTA />
      </main>

      <Footer />
    </div>
  )
}

export default App
