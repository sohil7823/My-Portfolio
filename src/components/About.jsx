import Reveal from "./Reveal";
import { aboutMe } from "../data/portfolioData";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>About Me</h2>
            <p>The short version of who I am and what I&apos;m working toward.</p>
          </div>
        </Reveal>

        <div className="about__grid">
          <Reveal type="up" className="about__text">
            <p>{aboutMe.intro}</p>
          </Reveal>

          <div className="about__highlights">
            {aboutMe.highlights.map((item, i) => (
              <Reveal type="scale" delay={i * 80} key={item.label}>
                <div className="highlight-card">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
