import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">Submit a bounty now — if Aligned-1 our latest model doesn't solve the problem, you get your money back</span>
      <a href="/bounty.html" class="banner-cta">Submit Bounty</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>
    <section class="content" style="max-width: 840px; margin: 0 auto; padding: 6rem 3rem;">
      <div class="rule"></div>
      <h1 style="font-size: 3rem; font-weight: 600; color: #ffffff; margin-bottom: 2rem; letter-spacing: -0.03em;">Security</h1>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 3rem;">We take security seriously. This page outlines our security practices and commitments.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Our Security Standards</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Aligned maintains the highest security standards for AI safety and alignment testing. Our infrastructure and processes are designed to protect your data and maintain confidentiality.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Data Protection</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">All data is encrypted in transit and at rest. We use industry-standard encryption protocols and maintain strict access controls to protect your information.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Infrastructure Security</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Our systems are hosted on secure, compliant infrastructure with regular security audits and monitoring. We maintain comprehensive logging and incident response procedures.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">ASI-2 Compliance</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">As the creators of the ASI-2 standard, we hold ourselves to the highest alignment and security standards. Our practices embody the principles we promote.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Access Controls</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">All systems require multi-factor authentication. Role-based access control (RBAC) ensures team members only access data necessary for their work. We maintain comprehensive audit logs of all system access and data modifications.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Incident Response</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">We maintain a 24/7 security operations center with dedicated incident response protocols. Security incidents are classified, investigated, and remediated according to our incident response playbook. Customers are notified within 72 hours of confirmed data breaches.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Third-Party Audits</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Aligned undergoes annual security audits by independent third-party auditors. Our infrastructure is regularly penetration tested by external security firms. We maintain ASI-2 certification for our own AI systems, practicing what we preach.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">AI-Specific Security</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Beyond traditional security measures, we implement specialized protections for AI systems:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">Prompt injection filtering on all AI interactions</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">Model output validation and alignment checks</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">Training data provenance tracking and validation</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">Continuous monitoring for model drift and misalignment</li>
      </ul>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Responsible Disclosure</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">If you discover a security vulnerability, please report it to <a href="mailto:contribute@alignedsafely.com" style="color: #c0392b; text-decoration: none;">contribute@alignedsafely.com</a>. We appreciate responsible disclosure and will work with you to address any issues promptly.</p>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;"><strong>Bug Bounty Program:</strong> We offer rewards for valid security findings. Critical vulnerabilities may receive up to $10,000. Please allow 48 hours for initial response and 30 days for remediation before public disclosure.</p>

      <h2 style="font-size: 1.5rem; font-weight: 600; color: #ffffff; margin: 3rem 0 1.5rem;">Security Certifications</h2>
      <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Aligned maintains the following security certifications and compliance standards:</p>
      <ul style="margin-left: 1.5rem; margin-bottom: 1.5rem;">
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">ASI-2 Certified (our own standard)</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">SOC 2 Type II (in progress)</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">GDPR and CCPA compliant</li>
        <li style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 0.5rem;">ISO 27001 (planned for 2027)</li>
      </ul>

      <div style="margin-top: 4rem; padding: 2.5rem; background: linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%); border: 1px solid #2a2a2a; border-radius: 12px;">
        <h3 style="font-size: 1.25rem; font-weight: 600; color: #ffffff; margin-bottom: 1rem;">Security Questions?</h3>
        <p style="font-size: 1rem; line-height: 1.85; color: #a0a0a0; margin-bottom: 1.5rem;">Our security team is available to answer questions about our practices, provide additional documentation, or discuss custom security requirements for enterprise customers.</p>
        <a href="mailto:contribute@alignedsafely.com" style="display: inline-block; padding: 1rem 2rem; background: #c0392b; color: #ffffff; text-decoration: none; font-size: 0.9rem; font-weight: 600; border-radius: 8px;">Contact Security Team</a>
      </div>
    </section>
    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/bounty.html">Penetration Testing</a></li>
            <li><a href="/trust.html">ASI-2 Certification</a></li>
            <li><a href="/pricing.html">Pricing</a></li>
            <li><a href="/trust.html">Trust Center</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Frameworks</h4>
          <ul class="footer-links">
            <li><a href="/asi-1.html">ASI-1</a></li>
            <li><a href="/blog.html">ASI-2</a></li>
            <li><a href="/trust.html">Security Standards</a></li>
            <li><a href="/trust.html">Alignment Verification</a></li>
            <li><a href="/trust.html">Continuous Monitoring</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul class="footer-links">
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/trust.html">Documentation</a></li>
            <li><a href="/bounty.html">Submit Bounty</a></li>
            <li><a href="https://cal.com/jplows" target="_blank">Book a Call</a></li>
            <li><a href="mailto:contribute@alignedsafely.com">Email Us</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="/">About</a></li>
            <li><a href="mailto:contribute@alignedsafely.com">Careers</a></li>
            <li><a href="/security.html">Security</a></li>
            <li><a href="mailto:contribute@alignedsafely.com">Press</a></li>
          </ul>
        </div>
      </div>
      <div class="footer-badges">
        <div class="compliance-badge">
          <svg class="badge-icon-small" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="3"/>
            <path d="M 30 50 L 45 65 L 70 35" fill="none" stroke="currentColor" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="badge-label">ASI-2</span>
        </div>
        <div class="compliance-badge">
          <svg class="badge-icon-small" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <rect x="20" y="30" width="60" height="50" rx="4" fill="none" stroke="currentColor" stroke-width="3"/>
            <path d="M 35 30 V 25 Q 35 15 50 15 Q 65 15 65 25 V 30" fill="none" stroke="currentColor" stroke-width="3"/>
            <circle cx="50" cy="55" r="6" fill="currentColor"/>
          </svg>
          <span class="badge-label">SECURE</span>
        </div>
        <div class="compliance-badge">
          <svg class="badge-icon-small" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <path d="M 50 15 L 75 30 L 75 60 Q 75 75 50 85 Q 25 75 25 60 L 25 30 Z" fill="none" stroke="currentColor" stroke-width="3"/>
            <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <span class="badge-label">VERIFIED</span>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-brand">
          <span class="footer-logo">Aligned</span>
          <span class="footer-copyright">© 2026 Aligned. All rights reserved.</span>
        </div>
        <div class="footer-social">
          <a href="https://twitter.com" target="_blank" class="social-link" aria-label="Twitter">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" class="social-link" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://github.com" target="_blank" class="social-link" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
        </div>
        <div class="footer-legal">
          <a href="/terms.html">Terms of Service</a>
          <a href="/privacy.html">Privacy Policy</a>
          <a href="/security.html">Security</a>
        </div>
      </div>
    </footer>
  </div>
`;
