import { profile, gmailComposeUrl } from '../data.js'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="section-inner">
        <div className="contact__card">
          <div className="contact__text">
            <p className="eyebrow">Contact</p>
            <h2 className="section-title">Let's build something reliable together</h2>
            <p className="contact__desc">
              Open to Java Full Stack roles and freelance projects involving Spring Boot, microservices, and React.js. Reach out and I'll get back to you soon.
            </p>
          </div>

          <div className="contact__links">
            <a
              className="contact__link"
              href={gmailComposeUrl(profile.email, 'Opportunity for you')}
              target="_blank"
              rel="noreferrer"
            >
              <span className="contact__link-label">Email</span>
              <span className="contact__link-value">{profile.email}</span>
            </a>
            <a className="contact__link" href={`tel:${profile.phone.replace(/\s/g, '')}`}>
              <span className="contact__link-label">Phone</span>
              <span className="contact__link-value">{profile.phone}</span>
            </a>
            <a className="contact__link" href={profile.github} target="_blank" rel="noreferrer">
              <span className="contact__link-label">GitHub</span>
              <span className="contact__link-value">{profile.github.replace('https://', '')}</span>
            </a>
            <div className="contact__link">
              <span className="contact__link-label">Location</span>
              <span className="contact__link-value">{profile.location}</span>
            </div>
          </div>

          <a
            href={gmailComposeUrl(profile.email, 'Opportunity for you')}
            target="_blank"
            rel="noreferrer"
            className="btn btn--primary contact__cta"
          >
            Say hello
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
