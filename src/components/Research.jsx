import { FiBookOpen } from "react-icons/fi";
import Reveal from "./Reveal";
import { research } from "../data/portfolioData";

export default function Research() {
  return (
    <section id="research" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Research &amp; Publications</h2>
            <p>Applied ML research outside of coursework.</p>
          </div>
        </Reveal>

        <Reveal type="scale">
          <div className="research-card">
            <div className="research-card__icon">
              <FiBookOpen size={22} />
            </div>
            <div>
              <span className="research-card__conf">{research.conference}</span>
              <h3>{research.topic}</h3>
              <ul>
                {research.contributions.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
