import { experience } from '../data.js'
import './Experience.css'

function Experience() {
  return (
    <section id="experience" className="section experience">
      <div className="section-inner">
        <p className="eyebrow">Experience</p>
        <h2 className="section-title">Where I've built things</h2>

        <div className="timeline">
          <div className="timeline__marker" />
          <div className="timeline__card">
            <div className="timeline__head">
              <div>
                <h3 className="timeline__role">{experience.role}</h3>
                <p className="timeline__company">{experience.company} · {experience.location}</p>
              </div>
              <span className="timeline__period">{experience.period}</span>
            </div>

            <ul className="timeline__points">
              {experience.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience
