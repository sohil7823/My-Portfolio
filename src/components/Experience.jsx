import Reveal from "./Reveal";
import { experience } from "../data/portfolioData";

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Experience</h2>
            <p>Hands-on exposure outside the classroom.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {experience.map((item, i) => (
            <Reveal type="up" delay={i * 100} key={item.role} as="div" className="timeline-item">
              <span className="timeline-item__date">{item.date}</span>
              <h3>{item.role}</h3>
              <ul>
                {item.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
