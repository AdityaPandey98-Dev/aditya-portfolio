import { about, stats } from '../data.js'
import './About.css'

function About() {
  return (
    <section id="about" className="section about">
      <div className="section-inner">
        <p className="eyebrow">About</p>
        <h2 className="section-title">Enterprise-grade software, built to last</h2>
        <p className="about__text">{about}</p>

        <div className="about__stats">
          {stats.map((s) => (
            <div className="stat-card" key={s.label}>
              <span className="stat-card__value">{s.value}</span>
              <span className="stat-card__label">{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About
