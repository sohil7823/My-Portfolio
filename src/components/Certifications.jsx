import { FiExternalLink } from "react-icons/fi";
import Reveal from "./Reveal";
import { certifications } from "../data/portfolioData";

export default function Certifications() {
  return (
    <section id="certifications" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Certifications</h2>
            <p>Workshops and certificate programs I&apos;ve completed.</p>
          </div>
        </Reveal>

        <div className="cert-grid">
          {certifications.map((cert, i) => (
            <Reveal type="up" delay={i * 90} key={cert.title}>
              <div className="cert-card">
                <span className="cert-card__year">{cert.year}</span>
                <h3>{cert.title}</h3>
                <p>{cert.description}</p>
                <a href={cert.path} target="_blank" rel="noreferrer" className="btn btn--ghost btn--sm">
                  View Certificate <FiExternalLink />
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
