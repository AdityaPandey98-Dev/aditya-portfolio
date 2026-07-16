import { projects } from '../data.js'
import './Projects.css'

function Projects() {
  return (
    <section id="projects" className="section projects">
      <div className="section-inner">
        <p className="eyebrow">Projects</p>
        <h2 className="section-title">Key projects</h2>
        <p className="section-subtitle">
          Enterprise systems built end-to-end — from distributed backend services to the React interfaces on top.
        </p>

        <div className="projects__grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-card__subtitle">{project.subtitle}</span>
              <h3 className="project-card__title">{project.title}</h3>

              <ul className="project-card__points">
                {project.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="project-card__tech">
                {project.tech.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
