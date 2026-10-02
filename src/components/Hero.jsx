import { useEffect, useState } from "react";
import { FiDownload, FiArrowRight, FiGithub, FiLinkedin, FiUser } from "react-icons/fi";
import { personal, rotatingRoles, heroDescription } from "../data/portfolioData";

function useTypingEffect(words, { typeSpeed = 65, deleteSpeed = 35, pause = 1400 } = {}) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      setText(words[0]);
      return undefined;
    }

    const currentWord = words[wordIndex % words.length];
    let timeout;

    if (!deleting && text.length < currentWord.length) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length + 1)), typeSpeed);
    } else if (!deleting && text.length === currentWord.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text.length > 0) {
      timeout = setTimeout(() => setText(currentWord.slice(0, text.length - 1)), deleteSpeed);
    } else if (deleting && text.length === 0) {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typeSpeed, deleteSpeed, pause]);

  return text;
}

export default function Hero() {
  const typedText = useTypingEffect(rotatingRoles);
  const [loaded, setLoaded] = useState(false);
  const [photoError, setPhotoError] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 80);
    return () => clearTimeout(t);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__glow" aria-hidden="true">
        <span />
        <span />
      </div>

      <div className="container hero__grid">
        <div className={`reveal reveal--up ${loaded ? "is-visible" : ""}`}>
          <div className="hero__eyebrow">
            <span className="dot" />
            Open to internships &amp; SDE roles
          </div>

          <h1>Hi, I&apos;m {personal.name}</h1>

          <p className="hero__role">
            Software Developer | B.Tech CSE (AI &amp; ML)
            <br />
            <span className="hero__typing">{typedText}&nbsp;</span>
          </p>

          <p className="hero__desc">{heroDescription}</p>

          <div className="hero__actions">
            <a href="#projects" className="btn btn--primary">
              View My Projects <FiArrowRight />
            </a>
            <a href={personal.resumePath} className="btn btn--ghost" download>
              Download Resume <FiDownload />
            </a>
          </div>

          <div className="hero__social">
            <a href={personal.github} target="_blank" rel="noreferrer" aria-label="GitHub profile">
              <FiGithub size={18} />
            </a>
            <a href={personal.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
              <FiLinkedin size={18} />
            </a>
          </div>
        </div>

        <div
          className={`hero__photo-wrap reveal reveal--scale ${loaded ? "is-visible" : ""}`}
          style={{ transitionDelay: "150ms" }}
        >
          <div className="hero__photo-ring">
            <div className="hero__photo">
              {photoError ? (
                <div className="hero__photo-placeholder">
                  <FiUser />
                  Add profile.jpg to /public
                </div>
              ) : (
                <img
                  src={personal.photoPath}
                  alt={`${personal.name} profile photo`}
                  onError={() => setPhotoError(true)}
                />
              )}
            </div>
          </div>

          <div className="hero__badge">
            <div>
              <strong>8.02</strong>
              <span>Current GPA</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
