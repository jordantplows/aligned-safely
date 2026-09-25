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
        <a href="/blog.html" class="nav-link">ASI-2</a>
        <a href="mailto:contribute@alignedsafely.com" class="nav-link">Contact</a>
      </div>
    </nav>
    <section class="trust-hero">
      <div class="trust-container">
        <div class="rule"></div>
        <h1 class="trust-title">Trust Center</h1>
        <p class="trust-subtitle">Building the gold standard for AI alignment and security certification</p>
      </div>
    </section>
    <section class="trust-content">
      <div class="trust-section">
        <div class="badge-showcase">
          <div class="badge-container">
            <div class="asi-badge">
              <div class="badge-inner">
                <div class="badge-icon">
                  <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" stroke-width="2"/>
                    <path d="M 30 50 L 45 65 L 70 35" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </div>
                <div class="badge-text">ASI-2</div>
                <div class="badge-subtext">CERTIFIED</div>
              </div>
            </div>
          </div>
          <p class="badge-description">The ASI-2 certification badge represents the highest standard of AI alignment and security in the industry.</p>
        </div>
      </div>

      <div class="trust-section">
        <h2>What is ASI-2?</h2>
        <p>ASI-2 (Aligned Systems Intelligence Standard 2) is a comprehensive certification program that validates AI systems and organizations meet rigorous standards for alignment and security.</p>
        <p>Similar to how SOC-2 became the industry standard for security and data privacy, ASI-2 establishes the benchmark for aligned AI systems—ensuring that AI development prioritizes safety, transparency, and human values.</p>
      </div>

      <div class="trust-section">
        <h2>Certification Standards</h2>
        <div class="standards-grid">
          <div class="standard-card">
            <h3>Alignment Verification</h3>
            <p>Rigorous testing to ensure AI systems operate in accordance with stated objectives and human values.</p>
          </div>
          <div class="standard-card">
            <h3>Security Framework</h3>
            <p>Comprehensive security measures protecting against adversarial attacks and misalignment scenarios.</p>
          </div>
          <div class="standard-card">
            <h3>Transparency Standards</h3>
            <p>Clear documentation of model behavior, training data sources, and decision-making processes.</p>
          </div>
          <div class="standard-card">
            <h3>Continuous Monitoring</h3>
            <p>Ongoing assessment and validation to maintain certification as systems evolve.</p>
          </div>
        </div>
      </div>

      <div class="trust-section">
        <h2>Get ASI-2 Certified</h2>
        <p>Organizations building AI systems can apply for ASI-2 certification to demonstrate their commitment to the highest standards of alignment and security.</p>
        <a href="/bounty.html" class="trust-cta">Apply for Certification</a>
      </div>
    </section>
    <footer>
      <a href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>
    </footer>
  </div>
`;
