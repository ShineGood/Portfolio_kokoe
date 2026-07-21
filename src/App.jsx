import { useState } from 'react'
import heroImage from './assets/hero.png'
import reactCert from './assets/certificates/react.png';
import pythonCert from './assets/certificates/pyth.png';
import pictureMe from './assets/myPicture.png'

import './App.css'

const skills = [
  { name: 'Python', icon: '🐍' },
  { name: 'Java', icon: '☕' },
  { name: 'JavaScript', icon: 'JS' },
  { name: 'TypeScript', icon: 'TS' },
  { name: 'SQL', icon: '🗃️' },
  { name: 'HTML5', icon: '🌐' },
  { name: 'CSS3', icon: '🎨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Git', icon: '🧰' },
  { name: 'GitHub', icon: '🐙' },
  { name: 'VS Code', icon: '💻' },
  { name: 'IntelliJ', icon: '🧠' },
  { name: 'Eclipse', icon: '📝' },
  { name: 'UML', icon: '📐' },
  { name: 'Object-Oriented Design', icon: '🧩' },
  { name: 'Design Patterns', icon: '🪄' },
  { name: 'Prompt Engineering', icon: '✨' },
  { name: 'UI / UX Designer', icon: '🖌️' },
]

const certificates = [
  {
    title: 'Python Certificate',
    description:
      'Completed Python programming course.',
    image: pythonCert,
    imageLabel: 'View Python Certificate',
    href: pythonCert,
  },
  {
    title: 'React Certificate',
    description:
      'Completed React development course.',
    image: reactCert,  
    imageLabel: 'View React Certificate',
    href: reactCert,
  },
]

const projects = [
  {
    title: 'Weekly Meal Planner Application',
    description:
      'Developed a command-line meal planning application in Python to help users plan weekly meals and discover recipes using file-based recipe instructions and an interactive menu-driven interface.',
    // image: projectImage
    imageLabel: 'Project Image',
    href: '#',
  },
  {
    title: 'Fruit Drag-and-Drop Game',
    description:
      'Built an interactive fruit sorting game using HTML, CSS, and JavaScript with drag-and-drop interactions and a responsive interface.',
    // image: projectImage
    imageLabel: 'Project Image',
    href: '#',
  },
  
  {
    title: 'Natlang: Emotion Analysis App',
    description:
      'Created a full-stack React + Python/Flask app that analyzes customer complaints and generates empathetic responses using the Google Gemini API.',
    // image: projectImage
    imageLabel: 'Project Image',
    href: '#',
  },
  {
    title: 'Computer Science Department Management System',
    description:
      'Designed a Java-based academic management system with course enrollment, waitlisting, GPA calculation, notifications, and UML-backed architecture.',
    // image: projectImage
    imageLabel: 'Project Image',
    href: '#',
  },
  {
    title: 'OtakuLink Database Implementation',
    description:
      'Designed and implemented a relational database schema for data storage, retrieval, and application content management using SQL.',
    // image: projectImage
    imageLabel: 'Project Image',
    href: '#',
  },
]

const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/ShineGood', icon: 'GH' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kokoe-fiawoo-b8369a1a1', icon: 'in' },
  { label: 'Email', href: 'mailto:Kokoe.faith@gmail.com', icon: '@' },
]

function SectionTitle({ children }) {
  return <h2 className="section-title">{children}</h2>
}

function Header({ isDarkMode, onThemeToggle }) {
  return (
    <header className="topbar">
      <div className="brand">Kokoe Fiawoo</div>
      <div className="topbar-actions">
        <button
          type="button"
          className="theme-toggle"
          onClick={onThemeToggle}
        >
          {isDarkMode ? 'Switch to light' : 'Switch to dark'}
        </button>
        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </header>
  )
}

function IntroSection() {
  return (
    <section className="hero-card">
      <div className="hero-left">
        <div className="hero-copy">
          <p className="eyebrow">Independent / Junior Software Developer</p>
          <h1>Building thoughtful software and polished web experiences.</h1>
          <p className="intro">
            I’m a dedicated and detail-oriented independent junior software developer with a strong
            passion for software development, problem-solving, and modern web technologies.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#projects">
              View Projects
            </a>
            <a className="btn btn-secondary" href="#contact">
              Contact Me
            </a>
          </div>
        </div>
      </div>

      <div className="hero-panel">
        <div className="photo-placeholder">
         
          <img src={pictureMe} alt="Kokoe Fiawoo" className="profile-photo" />
          
        </div>
        <div className="slideshow-stack" aria-hidden="true">
          <div
            className="slide-card slide-card-1"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(217, 70, 239, 0.58), rgba(8, 1, 16, 0.76)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
          >
            <span>Creative UI</span>
            <strong>Neon-first interfaces</strong>
          </div>
          <div
            className="slide-card slide-card-2"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(91, 33, 182, 0.72), rgba(0, 0, 0, 0.76)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'right center',
            }}
          >
            <span>Build</span>
            <strong>Clean full-stack products</strong>
          </div>
          <div
            className="slide-card slide-card-3"
            style={{
              backgroundImage: `linear-gradient(135deg, rgba(168, 85, 247, 0.72), rgba(21, 7, 39, 0.86)), url(${heroImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'left center',
            }}
          >
            <span>Scale</span>
            <strong>Thoughtful modern experiences</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  return (
    <section id="about" className="content-section">
      <SectionTitle>About Me</SectionTitle>
      <div className="about-copy">
        <p>
          Hello! I am a dedicated and detail-oriented independent junior software developer with a strong
          passion for software development and problem-solving. I have hands-on experience in
          full-stack development, object-oriented programming, and working with modern web
          technologies such as HTML5, CSS3, JavaScript, TypeScript, and React.
        </p>
        <p>
          My goal is to become a proficient software engineer who builds scalable,
          user-friendly applications that solve real-world problems. I’m eager to keep
          learning, collaborate on innovative projects, and contribute to the tech community
          through open-source work and internships.
        </p>
        <p>
          When I’m not coding, you can find me baking, exploring new places, reading books,
          and spending time with friends and family. I believe in continuous learning and
          always strive to improve my craft. I’m excited to share my journey and connect with
          others in the tech community.
        </p>
        <p>
          This site is part of my term project, designed and coded by me to demonstrate what
          I’ve learned. Thank you for visiting!
        </p>
      </div>
    </section>
  )
}

function CertificatesSection() {
  return (
    <section className="content-section">
      <SectionTitle>Certificates</SectionTitle>
      <div className="certificate-grid">
        {certificates.map((certificate) => (
          <article key={certificate.title} className="certificate-card">
            <a className="certificate-media" href={certificate.href} target="_blank" rel="noreferrer">
              <img src={certificate.image} alt={certificate.title} />
              <span>{certificate.imageLabel}</span>
            </a>

            <h3>{certificate.title}</h3>
            <p>{certificate.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function SkillsSection() {
  return (
    <section className="content-section skills-section">
      <SectionTitle>Technical Skills</SectionTitle>
      <div className="chip-grid">
        {skills.map((skill) => (
          <span key={skill.name} className="chip">
            <span className="chip-icon" aria-hidden="true">
              {skill.icon}
            </span>
            <span>{skill.name}</span>
          </span>
        ))}
      </div>
    </section>
  )
}

function ProjectsSection() {
  return (
    <section id="projects" className="content-section projects-section">
      <SectionTitle>Projects & Experience</SectionTitle>
      <div className="project-grid">
        {projects.map((project) => (
          <article key={project.title} className="project-card">
            <a className="project-media" href={project.href} target="_blank" rel="noreferrer">
              {/* <img src={project.image} alt={project.title}/> */}
              <span>{project.imageLabel}</span>
            </a>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="content-section contact-section">
      <SectionTitle>Contact</SectionTitle>
      <p>
        Let’s build something meaningful together. Reach out at{' '}
        <a href="mailto:Kokoe.faith@gmail.com">Kokoe.faith@gmail.com</a>
      </p>
    </section>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <a className="back-to-top" href="#top" aria-label="Back to Top">
        <span aria-hidden="true">↑</span>
      </a>
      <div className="footer-divider" />
      <h2>Thank you for visiting</h2>
      <p>Feel free to reach out if you have any questions or would like to collaborate.</p>

      <div className="footer-actions">
        <a className="btn btn-primary" href="mailto:hello@example.com">
          Contact Me
        </a>
      </div>

      <div className="social-row">
        {socialLinks.map((link) => (
          <a
            key={link.label}
            className="social-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
            aria-label={link.label}
          >
            <span className="social-icon" aria-hidden="true">
              {link.icon}
            </span>
            <span>{link.label}</span>
          </a>
        ))}
      </div>

      <div className="legal">
        <span>KOKOE FIAWOO</span>
        <span>© 2026 - All rights reserved.</span>
      </div>
    </footer>
  )
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true)

  return (
    <div id="top" className={`portfolio-shell ${isDarkMode ? 'dark' : 'light'}`}>
      <Header
        isDarkMode={isDarkMode}
        onThemeToggle={() => setIsDarkMode((current) => !current)}
      />

      <main>
        <IntroSection />

        <div className="intro-meta-grid">
          <div className="mini-card">
            <span>Focus</span>
            <strong>UI Engineering</strong>
          </div>
          <div className="mini-card">
            <span>Location</span>
            <strong>Worldwide</strong>
          </div>
          <div className="mini-card">
            <span>Status</span>
            <strong>Open to freelance work</strong>
          </div>
          <div className="mini-card accent">
            <span>Creative UI</span>
            <strong>Neon-first experiences</strong>
          </div>
        </div>

        <AboutSection />
        <CertificatesSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </div>
  )
}

export default App
