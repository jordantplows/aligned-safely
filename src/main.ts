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
    <section class="hero">
      <img src="/hero.png" alt="SA/E HUMANITY" class="hero-img" />
    </section>
    <section class="content">
      <div class="rule"></div>
      <p>We are setting the gold standard for AI alignment and security in the industry. This is not a winner-takes-all situation. This will require billions in funding, but the goal is not capitalistic gains in the next ten years.</p>
      <p>Our mission is to establish the highest standards of AI safety and alignment, ensuring that advanced AI systems are developed with robust security and alignment guarantees. We're building the infrastructure and standards that will define what it means to be truly aligned.</p>
      <p>Through our ASI-2 certification program and rigorous testing framework, we're creating the industry standard for AI safety—similar to how SOC-2 defined security standards, but specifically for aligned AI systems.</p>
      <p class="accent">A proper technical memo with clarity on the direction of the lab will be published soon.</p>
    </section>
    <footer>
      <a href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>
    </footer>
  </div>
`;
