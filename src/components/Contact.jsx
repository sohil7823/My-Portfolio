import { useState } from "react";
import { FiMail, FiPhone, FiGithub, FiLinkedin, FiSend, FiCheckCircle } from "react-icons/fi";
import Reveal from "./Reveal";
import { personal } from "../data/portfolioData";

// ---------------------------------------------------------------------------
// No email backend is wired up yet. To make this form actually send
// messages, pick one of these and drop your endpoint/keys in here:
//
//   1. Formspree  -> set FORM_ENDPOINT to your Formspree form URL and
//      POST `formData` to it directly.
//   2. EmailJS    -> import emailjs and call emailjs.send(...) inside
//      handleSubmit with your service/template/public keys.
//   3. Your own backend -> POST `formData` as JSON to your API route.
//
// Until one of those is connected, submitting only validates the fields
// and shows a status message — it does not deliver the message anywhere.
// ---------------------------------------------------------------------------
const FORM_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

const contactItems = [
  { icon: FiMail, label: "Email", value: personal.email, href: `mailto:${personal.email}` },
  { icon: FiPhone, label: "Phone", value: personal.phone, href: `tel:${personal.phone}` },
  { icon: FiGithub, label: "GitHub", value: "sohil7823", href: personal.github },
  { icon: FiLinkedin, label: "LinkedIn", value: "sohil-khan", href: personal.linkedin },
];

function validate(values) {
  const errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) {
    errors.email = "Please enter your email.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = "Please enter a valid email address.";
  }
  if (!values.message.trim()) errors.message = "Please add a short message.";
  return errors;
}

export default function Contact() {
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | "sent-locally"

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      // No backend configured — don't pretend this sent an email.
      setStatus("no-backend");
      return;
    }

    try {
      await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      setStatus("sent");
      setValues({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal type="left" className="section-head">
          <span className="section-head__bar" />
          <div>
            <h2>Let&apos;s Connect</h2>
            <p>
              I am currently looking for internship and software development opportunities.
              Feel free to connect with me.
            </p>
          </div>
        </Reveal>

        <div className="contact-grid">
          <Reveal type="left" className="contact-info">
            {contactItems.map((item) => (
              <a
                className="contact-info__item"
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                key={item.label}
              >
                <span className="contact-info__icon">
                  <item.icon size={17} />
                </span>
                <span>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </span>
              </a>
            ))}
          </Reveal>

          <Reveal type="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className={`form-field ${errors.name ? "has-error" : ""}`}>
                <label htmlFor="name">Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
                {errors.name && <span className="form-error">{errors.name}</span>}
              </div>

              <div className={`form-field ${errors.email ? "has-error" : ""}`}>
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {errors.email && <span className="form-error">{errors.email}</span>}
              </div>

              <div className={`form-field ${errors.message ? "has-error" : ""}`}>
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                  placeholder="Tell me about the role or opportunity..."
                />
                {errors.message && <span className="form-error">{errors.message}</span>}
              </div>

              <button type="submit" className="btn btn--primary btn--block">
                Send Message <FiSend />
              </button>

              {status === "sent" && (
                <p className="form-status form-status--success">
                  <FiCheckCircle /> Message sent — thanks for reaching out!
                </p>
              )}
              {status === "no-backend" && (
                <p className="form-note">
                  This form isn&apos;t connected to an email service yet. Reach me directly at{" "}
                  <a href={`mailto:${personal.email}`}>{personal.email}</a> in the meantime.
                </p>
              )}
              {status === "error" && (
                <p className="form-note">Something went wrong sending that. Please email me directly instead.</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
