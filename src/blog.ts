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
    <section class="blog-hero">
      <div class="blog-hero-content">
        <div class="rule"></div>
        <h1 class="blog-hero-title">ASI-2</h1>
        <p class="blog-hero-subtitle">The new standard for aligned artificial intelligence systems</p>
      </div>
    </section>
    <section class="blog-content">
      <article class="blog-post">
        <div class="post-meta">
          <span class="post-category">STANDARD</span>
          <span class="post-date">September 2026</span>
        </div>
        <h2>Introducing ASI-2: The Industry Standard for AI Alignment</h2>
        <p>Today, we're announcing ASI-2 (Aligned Systems Intelligence Standard 2), a comprehensive framework for certifying that AI systems meet rigorous alignment and security standards.</p>

        <h3>Why ASI-2 Matters</h3>
        <p>As AI systems become more powerful and autonomous, the industry needs a clear, auditable standard for what it means to be "aligned." Just as SOC-2 certification became the gold standard for data security and privacy, ASI-2 establishes the benchmark for AI systems that prioritize safety, transparency, and human values.</p>

        <h3>The ASI-2 Framework</h3>
        <p>ASI-2 certification requires organizations to demonstrate:</p>
        <ul>
          <li><strong>Robust Alignment Testing:</strong> Comprehensive evaluation of model behavior across adversarial scenarios</li>
          <li><strong>Security Guarantees:</strong> Protection against prompt injection, jailbreaking, and misalignment attacks</li>
          <li><strong>Transparent Operations:</strong> Clear documentation of training processes, data sources, and decision-making</li>
          <li><strong>Continuous Validation:</strong> Ongoing monitoring and re-certification as systems evolve</li>
        </ul>

        <h3>Setting the Gold Standard</h3>
        <p>Our mission is to establish ASI-2 as the definitive certification for aligned AI systems. Organizations that achieve ASI-2 certification demonstrate their commitment to building AI that is safe, secure, and aligned with human values.</p>

        <div class="post-cta">
          <p>Interested in ASI-2 certification for your organization?</p>
          <a href="/bounty.html" class="blog-cta-button">Get Started</a>
        </div>
      </article>

      <aside class="blog-sidebar">
        <div class="sidebar-section">
          <h4>Latest Updates</h4>
          <div class="update-item">
            <span class="update-date">Sep 2026</span>
            <span class="update-title">ASI-2 Framework Launch</span>
          </div>
          <div class="update-item">
            <span class="update-date">Coming Soon</span>
            <span class="update-title">First Certified Partners</span>
          </div>
          <div class="update-item">
            <span class="update-date">Coming Soon</span>
            <span class="update-title">Technical Specification v1.0</span>
          </div>
        </div>
      </aside>
    </section>
    <footer>
      <a href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>
    </footer>
  </div>
`;
