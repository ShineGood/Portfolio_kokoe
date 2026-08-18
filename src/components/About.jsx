import pictureMe from '../assets/myPicture.png'
import { useReveal } from '../hooks/useReveal'
import './About.css'

function About() {
  const [ref, isVisible] = useReveal()

  return (
    <section id="apropos" className="about">
      <div className={`container about-grid reveal ${isVisible ? 'is-visible' : ''}`} ref={ref}>
        <div className="about-media">
          <div className="about-tape" aria-hidden="true" />
          <img src={pictureMe} alt="Kokoe Fiawoo" className="about-photo" />
        </div>

        <div className="about-copy">
          {/* <p className="section-label">About</p> */}
          <h2 className="section-title about-title">About Me</h2>

          <p>
            Hello! I am a dedicated and detail-oriented independent junior software developer with a strong
            passion for software development and problem-solving. I have hands-on experience in
            full-stack development, object-oriented programming, and working with modern web
            technologies such as HTML5, CSS3, JavaScript, TypeScript, and React.
          </p>
          <p>
            My goal is to become a proficient software engineer who builds scalable,
            user-friendly applications that solve real-world problems. I'm eager to keep
            learning, collaborate on innovative projects, and contribute to the tech community
            through open-source work and internships.
          </p>
          <p>
            When I'm not coding, you can find me baking, exploring new places, reading books,
            and spending time with friends and family. I believe in continuous learning and
            always strive to improve my craft. I'm excited to share my journey and connect with
            others in the tech community.
          </p>
          <p>
            This site is part of my term project, designed and coded by me to demonstrate what
            I've learned. Thank you for visiting!
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
