function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <a className="project-card-media" href={project.href} target="_blank" rel="noreferrer">
        <span>Project Image</span>
      </a>
      <div className="project-card-body">
        <div>
          <h3 className="project-card-title">{project.title}</h3>
          <p className="project-card-tech">{project.tech}</p>
        </div>
        <span className="project-card-arrow" aria-hidden="true">↗</span>
      </div>
      <p className="project-card-description">{project.description}</p>
    </article>
  )
}

export default ProjectCard
