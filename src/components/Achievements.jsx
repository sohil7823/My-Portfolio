import { FiAward } from "react-icons/fi";
import Reveal from "./Reveal";
import { achievements } from "../data/portfolioData";

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Achievements</h2>
            <p>Milestones along the way.</p>
          </div>
        </Reveal>

        <div className="achievements-grid">
          {achievements.map((item, i) => (
            <Reveal type="up" delay={i * 90} key={item}>
              <div className="achievement-card">
                <div className="achievement-card__icon">
                  <FiAward size={18} />
                </div>
                <p>{item}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
