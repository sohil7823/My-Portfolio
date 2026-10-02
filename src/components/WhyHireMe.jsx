import { FiTarget, FiCode, FiCpu, FiUsers } from "react-icons/fi";
import Reveal from "./Reveal";
import { whyHireMe } from "../data/portfolioData";

const icons = [FiTarget, FiCode, FiCpu, FiUsers];

export default function WhyHireMe() {
  return (
    <section id="why-hire-me" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Why Hire Me?</h2>
            <p>Four things I bring to a team from day one.</p>
          </div>
        </Reveal>

        <div className="hire-grid">
          {whyHireMe.map((card, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal type="up" delay={i * 90} key={card.title}>
                <div className="hire-card">
                  <div className="hire-card__icon">
                    <Icon size={20} />
                  </div>
                  <h3>{card.title}</h3>
                  <ul>
                    {card.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
