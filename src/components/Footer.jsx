import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { personal } from "../data/portfolioData";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__brand">
            <strong>{personal.name}</strong>
            <span>B.Tech CSE (AI &amp; ML) | Aspiring Software Developer</span>
          </div>

          <div className="footer__links">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub">
              <FiGithub size={17} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FiLinkedin size={17} />
            </a>
            <a href={`mailto:${personal.email}`} aria-label="Email">
              <FiMail size={17} />
            </a>
          </div>
        </div>

        <div className="footer__bottom">© 2026 Sohil Khan. All Rights Reserved.</div>
      </div>
    </footer>
  );
}
