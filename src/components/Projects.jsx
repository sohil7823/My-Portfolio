import { FiGithub, FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import { projects } from "../data/portfolioData";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Featured Projects</h2>
            <p>A mix of frontend, full-stack, and machine learning work.</p>
          </div>
        </Reveal>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <Reveal type="up" delay={(i % 2) * 100} key={project.name}>
              <article className="project-card">
                <div className="project-card__top">
                  <span className="project-card__number">{project.number}</span>
                  {project.date && <span className="project-card__date">{project.date}</span>}
                </div>

                <h3>{project.name}</h3>
                <span className="project-card__tag">{project.tag}</span>

                <p>{project.description}</p>

                <div className="project-card__tech">
                  {project.tech.map((tech) => (
                    <span className="tech-badge" key={tech}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-card__actions">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn--ghost btn--sm"
                  >
                    <FiGithub /> Code
                  </a>
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn--primary btn--sm"
                    >
                      <FiExternalLink /> Live Demo
                    </a>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
