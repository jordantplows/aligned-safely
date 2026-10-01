import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">Limited availability — Only 10 Shield Pro clients accepted per quarter</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Book Strategy Call</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="/shield.html" class="nav-link">Shield Pro</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: var(--brand);">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: var(--fg); font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">ENTERPRISE</span>
        </div>
        <h1 class="asi-hero-title" style="color: var(--surface);">Aligned Shield Pro</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.85); font-size: 1.5rem; max-width: 800px; margin: 0 auto 2rem;">Enterprise AI security monitoring, incident response, and continuous protection for mission-critical AI systems</p>
        <div style="display: flex; align-items: center; justify-content: center; gap: 2rem; margin-bottom: 2rem;">
          <div style="text-align: center;">
            <div style="font-size: 3rem; font-weight: 700; color: var(--surface); font-family: var(--font-serif);">$10K</div>
            <div style="font-size: 1rem; color: rgba(255,255,255,0.7);">per month</div>
          </div>
        </div>
        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: var(--surface); color: var(--brand); border-color: var(--surface);">Schedule Enterprise Demo</a>
          <a href="#value" class="asi-btn-secondary">See What's Included</a>
        </div>
      </div>
    </section>

    <section class="asi-section" style="padding: 6rem 3rem;">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; max-width: 800px; margin: 0 auto 4rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1.5rem;">Why enterprises choose Shield Pro</h2>
          <p style="font-size: 1.125rem; color: var(--muted); line-height: 1.75;">The average AI security breach costs $2.5M in damage, reputation loss, and regulatory fines. Shield Pro prevents incidents before they happen.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem;">
          <div class="standard-card">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🛡️</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Continuous Protection</h3>
            <p style="color: var(--muted); line-height: 1.75; margin: 0;">24/7 adversarial monitoring with Aligned-1 AI constantly probing your systems for vulnerabilities</p>
          </div>
          <div class="standard-card">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚡</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Instant Response</h3>
            <p style="color: var(--muted); line-height: 1.75; margin: 0;">Direct Slack channel to our security team with 4-hour SLA on critical incidents</p>
          </div>
          <div class="standard-card">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📊</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Executive Visibility</h3>
            <p style="color: var(--muted); line-height: 1.75; margin: 0;">Monthly security briefings and board-ready reports on your AI security posture</p>
          </div>
        </div>

        <div id="value" style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; margin-bottom: 4rem; position: relative;">
          <div style="position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-left: 2px solid var(--accent); border-top: 2px solid var(--accent); border-top-left-radius: 16px;"></div>
          <div style="position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-right: 2px solid var(--accent); border-bottom: 2px solid var(--accent); border-bottom-right-radius: 16px;"></div>

          <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;">What's Included</h2>

          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem;">
            <div>
              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                Continuous Adversarial Monitoring
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 2rem 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• Weekly automated penetration tests</li>
                <li style="margin-bottom: 0.5rem;">• Real-time vulnerability scanning</li>
                <li style="margin-bottom: 0.5rem;">• Threat intelligence feed</li>
                <li style="margin-bottom: 0.5rem;">• PagerDuty/Slack integration</li>
              </ul>

              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                24/7 Incident Response
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 2rem 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• Direct Slack channel access</li>
                <li style="margin-bottom: 0.5rem;">• 4-hour SLA for critical issues</li>
                <li style="margin-bottom: 0.5rem;">• Guided remediation support</li>
                <li style="margin-bottom: 0.5rem;">• Post-incident analysis</li>
              </ul>

              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                Quarterly Comprehensive Audits
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 0 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• Full penetration testing</li>
                <li style="margin-bottom: 0.5rem;">• ASI-1 compliance assessment</li>
                <li style="margin-bottom: 0.5rem;">• Gap analysis & roadmap</li>
                <li style="margin-bottom: 0.5rem;">• Priority-ranked backlog</li>
              </ul>
            </div>

            <div>
              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                Monthly Executive Briefings
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 2rem 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• 60-min video call with leadership</li>
                <li style="margin-bottom: 0.5rem;">• AI security posture dashboard</li>
                <li style="margin-bottom: 0.5rem;">• Threat landscape updates</li>
                <li style="margin-bottom: 0.5rem;">• Board-ready slide deck</li>
              </ul>

              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                Team Training & Support
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 2rem 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• Quarterly engineering workshops</li>
                <li style="margin-bottom: 0.5rem;">• Secure AI development practices</li>
                <li style="margin-bottom: 0.5rem;">• Private security playbook access</li>
                <li style="margin-bottom: 0.5rem;">• Compliance certificates</li>
              </ul>

              <h3 style="font-size: 1.25rem; margin-bottom: 1rem; display: flex; align-items: center; gap: 0.75rem;">
                <span style="display: inline-block; width: 8px; height: 8px; background: var(--accent); border-radius: 50%;"></span>
                Dedicated Account Manager
              </h3>
              <ul style="list-style: none; padding: 0; margin: 0 0 0 1.5rem; color: var(--muted);">
                <li style="margin-bottom: 0.5rem;">• Single point of contact</li>
                <li style="margin-bottom: 0.5rem;">• Quarterly business reviews</li>
                <li style="margin-bottom: 0.5rem;">• Custom security roadmap</li>
                <li style="margin-bottom: 0.5rem;">• Priority feature requests</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background: var(--accent-subtle); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; margin-bottom: 4rem;">
          <h2 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;">ROI Calculator</h2>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center;">
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--critical); margin-bottom: 0.5rem;">$2.5M</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Average cost of AI security breach</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--warn); margin-bottom: 0.5rem;">$400K</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Cost of in-house AI security team (3 FTEs)</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass); margin-bottom: 0.5rem;">$120K</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Shield Pro annual cost</div>
            </div>
          </div>

          <div style="margin-top: 2rem; padding: 1.5rem; background: var(--surface); border-radius: 8px; text-align: center;">
            <p style="font-size: 1.125rem; font-weight: 600; margin: 0;">70% cost savings vs in-house team · 20x ROI if it prevents one breach</p>
          </div>
        </div>

        <div style="text-align: center; margin-bottom: 4rem;">
          <h2 style="font-size: 2rem; margin-bottom: 1.5rem;">Who Shield Pro is for</h2>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; max-width: 900px; margin: 0 auto;">
            <div style="text-align: left; padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
              <h3 style="font-size: 1.125rem; margin-bottom: 1rem;">✅ Perfect fit if you:</h3>
              <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
                <li style="margin-bottom: 0.75rem;">✓ Have AI in production serving customers</li>
                <li style="margin-bottom: 0.75rem;">✓ Handle sensitive or regulated data</li>
                <li style="margin-bottom: 0.75rem;">✓ Need SOC 2 or similar compliance</li>
                <li style="margin-bottom: 0.75rem;">✓ Annual revenue $5M-$100M</li>
                <li style="margin-bottom: 0.75rem;">✓ Engineering team of 20+ people</li>
              </ul>
            </div>
            <div style="text-align: left; padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
              <h3 style="font-size: 1.125rem; margin-bottom: 1rem;">⚠️ Not ready if you:</h3>
              <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
                <li style="margin-bottom: 0.75rem;">✗ Still in MVP/beta stage</li>
                <li style="margin-bottom: 0.75rem;">✗ No production AI systems yet</li>
                <li style="margin-bottom: 0.75rem;">✗ Less than $2M annual revenue</li>
                <li style="margin-bottom: 0.75rem;">✗ Looking for one-time assessment</li>
                <li style="margin-bottom: 0.75rem;">→ Check out our <a href="/pricing.html" style="color: var(--accent);">standard pen testing</a> instead</li>
              </ul>
            </div>
          </div>
        </div>

        <div style="background: var(--brand); color: var(--surface); border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: var(--surface); font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to protect your AI systems?</h2>
          <p style="font-size: 1.25rem; color: rgba(255,255,255,0.85); margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">Limited to 10 new clients per quarter. Book a 30-minute strategy call to discuss your AI security needs.</p>
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: var(--surface); color: var(--brand); border-color: var(--surface); font-size: 1.125rem; padding: 1rem 2.5rem;">Schedule Enterprise Demo</a>
          <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 1.5rem;">No commitment required · 30-day money-back guarantee</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/bounty.html">Penetration Testing</a></li>
            <li><a href="/shield.html">Shield Pro</a></li>
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
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul class="footer-links">
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/founders-note.html">Founder's Note</a></li>
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
