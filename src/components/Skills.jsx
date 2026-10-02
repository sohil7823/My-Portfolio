import Reveal from "./Reveal";
import { skillGroups } from "../data/portfolioData";

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Technical Skills</h2>
            <p>Languages, frameworks, and tools I use to build and ship.</p>
          </div>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal type={i % 2 === 0 ? "left" : "right"} delay={(i % 4) * 60} key={group.category}>
              <div className="skill-group">
                <h3>{group.category}</h3>
                <div className="skill-pills">
                  {group.skills.map((skill) => (
                    <span className="skill-pill" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
