import React, { useState } from 'react';
import './App.css';

interface Module {
  id: string;
  name: string;
  desc: string;
}

const modules: Module[] = [
  {
    id: 'CM-01',
    name: 'Sentinel',
    desc: 'Always-on monitoring of model behavior, compute allocation and agentic activity across monitored deployments.',
  },
  {
    id: 'CM-02',
    name: 'Tripwire',
    desc: 'Capability thresholds agreed in advance, with automatic escalation when a system approaches or crosses them.',
  },
  {
    id: 'CM-03',
    name: 'Quarantine',
    desc: 'Air-gapped evaluation and isolation environments for testing and holding systems of unknown alignment.',
  },
  {
    id: 'CM-04',
    name: 'Lens',
    desc: 'Interpretability and audit tooling that explains what a model is optimizing for and flags deceptive behavior.',
  },
  {
    id: 'CM-05',
    name: 'Concord',
    desc: 'Verification and information-sharing protocols that let nations and labs coordinate a response without exposing sensitive assets.',
  },
];

function App() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <a href="#top" className="logo">
            <span className="logo-square"></span>
            <span className="logo-text">Aligned Super Intelligence</span>
          </a>
          <nav className="nav">
            <a href="#thesis">Thesis</a>
            <a href="#approach">Approach</a>
            <a href="#countermeasures">Countermeasures</a>
            <a href="#partners">Partners</a>
            <a href="#contact" className="nav-cta">
              Contact sales →
            </a>
          </nav>
        </div>
      </header>

      <main id="top">
        {/* Hero Section */}
        <section className="hero">
          <div className="section-meta">
            <span>§ 00 — Mission</span>
            <span className="status">
              <span className="status-dot"></span>
              Program status: active
            </span>
          </div>
          <h1 className="hero-title">
            In the pursuit of global counter-measures to prevent{' '}
            <em className="highlight">human extinction</em> from ASI
          </h1>
          <div className="hero-content">
            <p className="hero-description">
              We build aligned superintelligence to detect, contain and neutralize
              misaligned AI systems — for the governments, frontier labs and researchers
              responsible for keeping humanity in control.
            </p>
            <div className="hero-actions">
              <a href="#contact" className="btn-primary">
                Contact sales →
              </a>
              <a href="#approach" className="btn-secondary">
                Our approach
              </a>
            </div>
          </div>
        </section>

        {/* Thesis Section */}
        <section id="thesis" className="section thesis">
          <div className="section-label">§ 01 — Thesis</div>
          <div className="thesis-content">
            <h2 className="section-title">
              Superintelligence will not wait for consensus. The defense has to exist
              before it is needed.
            </h2>
            <div className="thesis-grid">
              <p>
                A misaligned system operating beyond human capability cannot be stopped
                by human-speed processes. Oversight, attribution and response must run at
                machine speed.
              </p>
              <p>
                Only an aligned system of comparable capability can reliably watch for,
                reason about and counter one that is not. We build that system and put it
                in the hands of those accountable for public safety.
              </p>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section id="approach" className="section approach">
          <div className="approach-header">
            <div className="section-label">§ 02 — Approach</div>
            <h2 className="section-title">Detect. Contain. Align.</h2>
          </div>
          <div className="approach-grid">
            <div className="approach-item">
              <div className="approach-number">01</div>
              <h3>Detect</h3>
              <p>
                Continuous observation of model behavior, compute usage and deployment
                signals to surface emergent dangerous capability early.
              </p>
            </div>
            <div className="approach-item">
              <div className="approach-number">02</div>
              <h3>Contain</h3>
              <p>
                Pre-agreed tripwires and isolation protocols that limit a system's reach
                the moment it crosses a defined threshold.
              </p>
            </div>
            <div className="approach-item">
              <div className="approach-number">03</div>
              <h3>Align</h3>
              <p>
                Interpretability, evaluation and correction tooling that returns systems
                to verified, human-sanctioned objectives.
              </p>
            </div>
          </div>
        </section>

        {/* Countermeasures Section */}
        <section id="countermeasures" className="section countermeasures">
          <div className="countermeasures-header">
            <div className="section-label">§ 03 — Countermeasures</div>
            <h2 className="section-title">
              One platform, five instruments of defense.
            </h2>
          </div>
          <div className="modules-list">
            {modules.map((module) => (
              <div key={module.id} className="module-item">
                <span className="module-id">{module.id}</span>
                <span className="module-name">{module.name}</span>
                <span className="module-desc">{module.desc}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Partners Section */}
        <section id="partners" className="section partners">
          <div className="section-label">§ 04 — Who we work with</div>
          <h2 className="section-title">
            Built for those who carry the responsibility.
          </h2>
          <div className="partners-grid">
            <div className="partner-item">
              <h3>Governments &amp; defense</h3>
              <p>
                Sovereign deployments for national AI safety institutes, defense agencies
                and treaty verification bodies.
              </p>
            </div>
            <div className="partner-item">
              <h3>Frontier AI labs</h3>
              <p>
                Independent oversight, pre-deployment evaluation and emergency
                containment integrated into training and release pipelines.
              </p>
            </div>
            <div className="partner-item">
              <h3>Researchers</h3>
              <p>
                Access to evaluation environments, interpretability tooling and shared
                threat models for alignment and security research.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="section contact">
          <div className="contact-intro">
            <div className="section-label">§ 05 — Contact sales</div>
            <h2 className="section-title">
              The window to act is <em className="highlight">now</em>.
            </h2>
            <p>
              Tell us about your organization and mandate. Our team responds to qualified
              government, lab and research enquiries within two business days.
            </p>
          </div>
          {!sent ? (
            <form onSubmit={handleSubmit} className="contact-form">
              <label>
                Name
                <input type="text" required />
              </label>
              <label>
                Work email
                <input type="email" required />
              </label>
              <label>
                Organization
                <input type="text" required />
              </label>
              <label>
                Sector
                <select>
                  <option>Government / defense</option>
                  <option>Frontier AI lab</option>
                  <option>Research institution</option>
                  <option>Other</option>
                </select>
              </label>
              <label>
                Message
                <textarea rows={3}></textarea>
              </label>
              <button type="submit" className="btn-primary">
                Request a briefing →
              </button>
            </form>
          ) : (
            <div className="contact-success">
              <div className="success-label">Received</div>
              <p className="success-message">
                Thank you. A member of our team will be in touch shortly.
              </p>
            </div>
          )}
        </section>
      </main>

      <footer className="footer">
        <span className="footer-brand">
          <span className="footer-square"></span>
          Aligned Super Intelligence © 2026
        </span>
        <div className="footer-links">
          <a href="#thesis">Thesis</a>
          <a href="#countermeasures">Countermeasures</a>
          <a href="#contact">Contact</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
