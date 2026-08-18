import pictureMe from '../assets/myPicture.png'
import './Hero.css'

function Hero() {
  return (
    <section id="accueil" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting">
            Hi, I'm <span>👋</span>
          </p>
          <h1>
            Kokoe
            <br />
            Fiawoo
          </h1>
          <p className="hero-role">Independent / Junior Software Developer</p>

          <p className="hero-text">
            I'm a dedicated and detail-oriented independent junior software developer with a strong
            passion for software development, problem-solving, and modern web technologies.
          </p>
          <p className="hero-text hero-tagline">
            Building thoughtful software and polished web experiences.
          </p>

          <div className="hero-actions">
            <a href="#projets" className="btn btn-dark">
              View Projects <span aria-hidden="true">↗</span>
            </a>
            <a href="#contact" className="text-link">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="hero-blob" aria-hidden="true" />
          <div className="hero-code-badge" aria-hidden="true">
            &lt;/&gt;
          </div>
          <div className="hero-doodle hero-doodle-1" aria-hidden="true">〰</div>
          <div className="hero-doodle hero-doodle-2" aria-hidden="true">✦</div>
          <img src={pictureMe} alt="Kokoe Fiawoo" className="hero-photo" />
        </div>
      </div>
    </section>
  )
}

export default Hero
