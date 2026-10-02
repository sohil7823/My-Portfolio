import { FiDownload, FiMessageCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import { personal } from "../data/portfolioData";

export default function ResumeCTA() {
  return (
    <section className="section" style={{ borderTop: "none", paddingBottom: 0 }}>
      <div className="container">
        <Reveal type="scale">
          <div className="resume-cta">
            <h2>Let&apos;s Build Something Great Together</h2>
            <p>
              I am actively looking for internship and software development opportunities
              where I can apply my skills, solve real-world problems, and continue learning.
            </p>
            <div className="resume-cta__actions">
              <a href={personal.resumePath} className="btn btn--primary" download>
                Download Resume <FiDownload />
              </a>
              <a href="#contact" className="btn btn--ghost">
                Let&apos;s Connect <FiMessageCircle />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
