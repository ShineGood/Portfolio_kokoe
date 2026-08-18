import { skills } from '../data/skills'
import { useReveal } from '../hooks/useReveal'
import './Skills.css'

function Skills() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="competences" className="skills">
      <div className="container skills-grid">
        <div className="skills-intro">
          {/* <p className="section-label">Skills</p> */}
          <h2 className="section-title skills-title">Technical Skills</h2>
        </div>

        <div className={`skills-badges reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
          {skills.map((skill) => (
            <span key={skill.name} className="skill-badge">
              {skill.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
