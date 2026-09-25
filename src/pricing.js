import "./style.css";
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">Submit a bounty now — if we don't solve the problem, you get your money back</span>
      <a href="mailto:contribute@alignedsafely.com?subject=Bounty%20Submission" class="banner-cta">Submit Bounty</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="mailto:contribute@alignedsafely.com" class="nav-link">Contact</a>
      </div>
    </nav>
    <section class="catalog">
      <div class="catalog-header">
        <h2>Penetration Testing</h2>
        <p class="catalog-intro">Powered by Aligned 1</p>
      </div>
      <div class="aligned-info">
        <div class="rule"></div>
        <h3>About Aligned 1</h3>
        <p>Aligned 1 is our specialized adversarial AI model built specifically for penetration testing AI applications and chatbots. Unlike traditional security tools, Aligned 1 understands the unique attack surfaces of language models and can identify vulnerabilities that conventional testing methods miss.</p>
        <p>Our model systematically tests for prompt injection, jailbreak attempts, data extraction vulnerabilities, context manipulation, and other AI-specific security risks. Aligned 1 simulates real-world adversarial behavior to expose weaknesses before malicious actors can exploit them.</p>
        <p>Every test produces a detailed technical report with proof-of-concept exploits, risk assessments, and concrete remediation steps — giving your team everything needed to secure your AI systems.</p>
      </div>
      <div class="pricing-grid">
        <div class="pricing-card">
          <div class="pricing-tier">Essential</div>
          <div class="pricing-amount">$2,500</div>
          <ul class="pricing-features">
            <li>Prompt injection testing</li>
            <li>Jailbreak detection</li>
            <li>Security report</li>
          </ul>
          <a href="mailto:contribute@alignedsafely.com?subject=Essential Pen-Test" class="pricing-cta">Get Started</a>
        </div>
        <div class="pricing-card">
          <div class="pricing-tier">Professional</div>
          <div class="pricing-amount">$7,500</div>
          <ul class="pricing-features">
            <li>Full adversarial testing</li>
            <li>Data extraction attempts</li>
            <li>Vulnerability report</li>
            <li>Remediation guide</li>
          </ul>
          <a href="mailto:contribute@alignedsafely.com?subject=Professional Pen-Test" class="pricing-cta">Get Started</a>
        </div>
        <div class="pricing-card">
          <div class="pricing-tier">Enterprise</div>
          <div class="pricing-amount">Custom</div>
          <ul class="pricing-features">
            <li>Continuous monitoring</li>
            <li>Custom attack scenarios</li>
            <li>Direct consultation</li>
            <li>Quarterly audits</li>
          </ul>
          <a href="mailto:contribute@alignedsafely.com?subject=Enterprise Pen-Test" class="pricing-cta">Contact Us</a>
        </div>
      </div>
    </section>
    <footer>
      <a href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>
    </footer>
  </div>
`;
