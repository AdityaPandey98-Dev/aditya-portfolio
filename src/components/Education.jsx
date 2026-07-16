import { education, achievements, languages } from '../data.js'
import './Education.css'

function Education() {
  return (
    <section id="education" className="section education">
      <div className="section-inner">
        <p className="eyebrow">Education & Achievements</p>
        <h2 className="section-title">Foundations & milestones</h2>

        <div className="education__grid">
          <div className="info-card">
            <h3 className="info-card__title">Education</h3>
            <p className="education__degree">{education.degree}</p>
            <p className="education__school">{education.school}</p>
            <div className="education__meta">
              <span>{education.year}</span>
              <span>{education.cgpa}</span>
            </div>
          </div>

          <div className="info-card">
            <h3 className="info-card__title">Achievements</h3>
            <ul className="achievements__list">
              {achievements.map((a, i) => (
                <li key={i}>{a}</li>
              ))}
            </ul>
          </div>

          <div className="info-card">
            <h3 className="info-card__title">Languages</h3>
            <div className="languages__list">
              {languages.map((lang) => (
                <div className="languages__item" key={lang.name}>
                  <span>{lang.name}</span>
                  <span className="languages__level">{lang.level}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
