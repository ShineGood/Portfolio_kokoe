import { certificates } from '../data/certificates'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

function Certificates() {
  const [ref, isVisible] = useReveal()

  return (
    <section className="projects certificates">
      <div className="container">
        <div className="projects-header">
          <div>
            {/* <p className="section-label">Certificates</p> */}
            <h2 className="section-title projects-title">Certificates</h2>
          </div>
        </div>

        <div className={`project-grid certificates-grid reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          {certificates.map((certificate) => (
            <article key={certificate.title} className="project-card">
              <a className="project-card-media certificate-media" href={certificate.href} target="_blank" rel="noreferrer">
                <img src={certificate.image} alt={certificate.title} />
              </a>
              <div className="project-card-body">
                <div>
                  <h3 className="project-card-title">{certificate.title}</h3>
                  <p className="project-card-tech">{certificate.tech}</p>
                </div>
                <span className="project-card-arrow" aria-hidden="true">↗</span>
              </div>
              <p className="project-card-description">{certificate.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certificates
