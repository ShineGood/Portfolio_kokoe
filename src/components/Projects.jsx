import ProjectCard from './ProjectCard'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import './Projects.css'

function Projects() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="projets" className="projects">
      <div className="container">
        <div className="projects-header">
          <div>
            {/* <p className="section-label">Projects</p> */}
            <h2 className="section-title projects-title">Projects &amp; Experience</h2>
          </div>
          <a className="text-link projects-link" href="#projets">
            View all projects →
          </a>
        </div>

        <div className={`project-grid reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
