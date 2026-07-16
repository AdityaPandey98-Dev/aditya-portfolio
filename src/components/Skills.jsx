import { skillGroups } from '../data.js'
import './Skills.css'

function Skills() {
  return (
    <section id="skills" className="section skills">
      <div className="section-inner">
        <p className="eyebrow">Skills</p>
        <h2 className="section-title">Technology I work with</h2>
        <p className="section-subtitle">
          A full-stack toolkit spanning backend services, distributed architecture, cloud infrastructure and modern AI integration.
        </p>

        <div className="skills__grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <h3 className="skill-card__title">{group.title}</h3>
              <div className="skill-card__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
