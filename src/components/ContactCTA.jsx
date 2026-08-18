import './ContactCTA.css'

function ContactCTA() {
  return (
    <section id="contact" className="contact-cta">
      <div className="container contact-cta-inner">
        <div className="contact-cta-copy">
          {/* <p className="section-label">Contact</p> */}
          <h2 className="section-title contact-cta-title">
            Let's build something meaningful together. Reach out at{' '}
            <a href="mailto:Kokoe.faith@gmail.com">Kokoe.faith@gmail.com</a>
          </h2>
        </div>

        <a className="btn btn-light" href="mailto:Kokoe.faith@gmail.com">
          Contact Me
        </a>
      </div>
    </section>
  )
}

export default ContactCTA
