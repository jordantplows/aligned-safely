import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">🚀 February Cohort Opens Feb 1 • Limited to 20 Students • 12 January Graduates Earned $28K First Month</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Apply Now</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="https://cal.com/jplows" target="_blank" class="nav-link" style="color: var(--accent); font-weight: 600;">Apply Now</a>
      </div>
    </nav>
    <section class="asi-hero" style="background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); padding: 8rem 3rem; text-align: center;">
      <div style="max-width: 900px; margin: 0 auto;">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">4-WEEK CERTIFICATION</span>
        </div>
        <h1 style="color: white; font-size: 4.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1; font-family: var(--font-serif);">Launch Your AI Security<br/>Consulting Practice</h1>
        <p style="color: rgba(255,255,255,0.95); font-size: 1.75rem; margin-bottom: 2.5rem; line-height: 1.4;">Get certified in 4 weeks. Charge $10K-$50K per client. We guarantee your first 3 clients.</p>

        <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 2.5rem; margin: 0 auto 2.5rem; max-width: 700px; color: var(--fg);">
          <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: center;">
            <div style="text-align: center;">
              <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">INVESTMENT</div>
              <div style="font-size: 3rem; font-weight: 700; color: var(--fg);">$2,500</div>
              <div style="font-size: 0.875rem; color: var(--muted);">One-time</div>
            </div>
            <div style="font-size: 3rem; color: var(--muted); font-weight: 300;">→</div>
            <div style="text-align: center;">
              <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">YOUR EARNINGS</div>
              <div style="font-size: 3rem; font-weight: 700; color: #6366F1;">$10K+</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Per Client</div>
            </div>
          </div>
        </div>

        <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 1.25rem 3rem; background: white; color: #6366F1; text-decoration: none; font-size: 1.25rem; font-weight: 700; border-radius: 8px; border: 2px solid white; transition: all 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Apply for February Cohort →</a>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.85); margin-top: 1.5rem;">✓ First 3 clients guaranteed or money back • ✓ Starts Feb 1 • ✓ Limited to 20 students</p>
      </div>
    </section>
    <section class="content" style="padding: 5rem 3rem; max-width: 900px; margin: 0 auto;">
      <div class="rule"></div>
      <h2 style="font-size: 2.5rem; margin-bottom: 2rem; text-align: center;">What You Get</h2>

      <div style="display: grid; gap: 2rem; margin-bottom: 3rem;">
        <div style="padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Week 1: AI Security Fundamentals</h3>
          <p style="color: var(--muted); line-height: 1.75; margin: 0;">Master LLM vulnerabilities, attack vectors, and security frameworks. Learn what enterprise CISOs care about.</p>
        </div>

        <div style="padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Week 2: Business Setup</h3>
          <p style="color: var(--muted); line-height: 1.75; margin: 0;">LLC formation, contracts, insurance, invoicing. The boring stuff that makes you professional.</p>
        </div>

        <div style="padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Week 3: Sales & Client Acquisition</h3>
          <p style="color: var(--muted); line-height: 1.75; margin: 0;">Outbound sequences, discovery calls, proposals, objection handling, pricing strategies.</p>
        </div>

        <div style="padding: 2rem; background: var(--surface); border: 2px solid #6366F1; border-radius: 12px;">
          <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Week 4: Live Practice & Launch</h3>
          <p style="color: var(--muted); line-height: 1.75; margin: 0;">Supervised audit on real client. Get certified. We help you land your first 3 clients.</p>
        </div>
      </div>

      <div style="background: #EEF2FF; border: 3px solid #6366F1; border-radius: 12px; padding: 3rem; text-align: center; margin-bottom: 3rem;">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Our Guarantee</h3>
        <p style="font-size: 1.125rem; color: var(--muted); line-height: 1.75; margin: 0;">Land your first 3 paying clients within 90 days or get a full refund. We succeed when you succeed.</p>
      </div>

      <div style="text-align: center;">
        <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 1.25rem 3rem; background: #6366F1; color: white; text-decoration: none; font-size: 1.25rem; font-weight: 700; border-radius: 8px; border: 2px solid #6366F1; transition: all 0.3s;">Schedule Call to Learn More</a>
      </div>
    </section>
    <footer style="padding: 3rem; text-align: center; background: var(--surface); border-top: 1px solid var(--line);">
      <div style="max-width: 600px; margin: 0 auto;">
        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; font-family: var(--font-serif);">Aligned</div>
        <p style="color: var(--muted); margin-bottom: 2rem; line-height: 1.6;">AI Security Consultant Certification</p>
        <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
          <a href="https://cal.com/jplows" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 500;">Apply Now</a>
          <a href="mailto:contribute@alignedsafely.com" style="color: var(--accent); text-decoration: none; font-weight: 500;">Email</a>
          <a href="/terms.html" style="color: var(--muted); text-decoration: none;">Terms</a>
          <a href="/privacy.html" style="color: var(--muted); text-decoration: none;">Privacy</a>
        <div style="color: var(--muted); font-size: 0.875rem;">© 2026 Aligned. All rights reserved.</div>
      </div>
    </footer>
  </div>
`;
