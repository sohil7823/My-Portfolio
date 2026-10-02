import Reveal from "./Reveal";
import { education } from "../data/portfolioData";

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Education</h2>
            <p>Academic background and current standing.</p>
          </div>
        </Reveal>

        <div className="timeline">
          {education.map((item, i) => (
            <Reveal type="up" delay={i * 100} key={item.degree} className="timeline-item">
              <span className="timeline-item__date">{item.period}</span>
              <h3>{item.degree}</h3>
              <p className="timeline-item__sub">
                {item.specialization}
                {item.institute && `, ${item.institute}`}
                {item.place && `, ${item.place}`}
              </p>
              <p className="timeline-item__sub" style={{ fontWeight: 500, color: "var(--text)" }}>
                {item.score}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
