import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">🔒 Next Available Slot: March 15 • 2-Week Delivery • $10K Fixed Price</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Book Audit</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link" style="color: var(--accent); font-weight: 600;">Book Audit</a>
      </div>
    </nav>
    <section class="asi-hero" style="background: linear-gradient(135deg, #0F172A 0%, #1E293B 100%); padding: 8rem 3rem; text-align: center;">
      <div style="max-width: 1000px; margin: 0 auto;">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">ENTERPRISE AI SECURITY</span>
        </div>
        <h1 style="color: white; font-size: 4.5rem; font-weight: 700; margin-bottom: 1.5rem; line-height: 1.1; font-family: var(--font-serif);">Prove Your AI Is Secure</h1>
        <p style="color: rgba(255,255,255,0.9); font-size: 1.75rem; margin-bottom: 3rem; line-height: 1.4;">Comprehensive security audit + certification. Show customers, investors, and regulators your AI system is safe. 2-week delivery, $10K fixed price.</p>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 3rem;">
          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">⚡️</div>
            <div style="color: white; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">2 Weeks</div>
            <div style="color: rgba(255,255,255,0.7); font-size: 0.875rem;">From kickoff to final report</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">🎯</div>
            <div style="color: white; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">$10K Fixed</div>
            <div style="color: rgba(255,255,255,0.7); font-size: 0.875rem;">No hourly billing, no surprises</div>
          </div>
          <div style="background: rgba(255,255,255,0.05); backdrop-filter: blur(10px); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 2rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 0.5rem;">📋</div>
            <div style="color: white; font-size: 1.25rem; font-weight: 600; margin-bottom: 0.5rem;">Certification</div>
            <div style="color: rgba(255,255,255,0.7); font-size: 0.875rem;">Public badge for your site</div>
          </div>
        </div>

        <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 1.25rem 3rem; background: white; color: #0F172A; text-decoration: none; font-size: 1.25rem; font-weight: 700; border-radius: 8px; border: 2px solid white; transition: all 0.3s; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Schedule Scoping Call →</a>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.75); margin-top: 1.5rem;">Trusted by YC companies, AI labs, and enterprise security teams</p>
      </div>
    </section>

    <section class="content" style="padding: 5rem 3rem; max-width: 1100px; margin: 0 auto;">
      <div class="rule"></div>
      <h2 style="font-size: 2.5rem; margin-bottom: 3rem; text-align: center;">What You Get</h2>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 3rem; margin-bottom: 4rem;">
        <div>
          <h3 style="font-size: 1.75rem; margin-bottom: 2rem; color: var(--accent);">The Audit</h3>
          <div style="display: grid; gap: 1.5rem;">
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid var(--accent); border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Prompt Injection Testing</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Adversarial testing against jailbreaks, instruction bypasses, and context poisoning</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid var(--accent); border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Data Leakage Analysis</div>
              <div style="color: var(--muted); font-size: 0.875rem;">PII exposure, training data extraction, cross-tenant isolation verification</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid var(--accent); border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Model Behavior Assessment</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Bias detection, toxicity testing, hallucination measurement</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid var(--accent); border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Infrastructure Security</div>
              <div style="color: var(--muted); font-size: 0.875rem;">API security, authentication, rate limiting, input validation</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid var(--accent); border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Supply Chain Review</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Third-party model risks, dependency analysis, vendor security</div>
            </div>
          </div>
        </div>

        <div>
          <h3 style="font-size: 1.75rem; margin-bottom: 2rem; color: var(--accent);">The Deliverables</h3>
          <div style="display: grid; gap: 1.5rem;">
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid #10B981; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Executive Summary</div>
              <div style="color: var(--muted); font-size: 0.875rem;">2-page report for board, investors, and customers</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid #10B981; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Technical Report</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Detailed findings, severity ratings, remediation steps</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid #10B981; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Security Certification</div>
              <div style="color: var(--muted); font-size: 0.875rem;">Public badge you can embed on your site and docs</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid #10B981; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Remediation Support</div>
              <div style="color: var(--muted); font-size: 0.875rem;">30 days of async support to fix issues</div>
            </div>
            <div style="padding: 1.5rem; background: var(--surface); border-left: 4px solid #10B981; border-radius: 8px;">
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Re-test (Optional)</div>
              <div style="color: var(--muted); font-size: 0.875rem;">$2.5K to verify fixes and update certification</div>
            </div>
          </div>
        </div>
      </div>

      <div style="background: linear-gradient(135deg, #EEF2FF 0%, #E0E7FF 100%); border: 3px solid #6366F1; border-radius: 16px; padding: 4rem; margin-bottom: 4rem;">
        <h3 style="font-size: 2rem; margin-bottom: 1.5rem; text-align: center;">Who This Is For</h3>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-top: 2rem;">
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🏢</div>
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Closing Enterprise Deals</div>
            <div style="color: var(--muted); font-size: 0.875rem;">Security questionnaires are blocking your pipeline</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">💰</div>
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Raising a Series A/B</div>
            <div style="color: var(--muted); font-size: 0.875rem;">Investors are asking about AI security</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">⚖️</div>
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Regulatory Compliance</div>
            <div style="color: var(--muted); font-size: 0.875rem;">SOC 2, ISO 27001, or industry standards</div>
          </div>
        </div>
      </div>

      <div class="rule"></div>
      <h2 style="font-size: 2.5rem; margin-bottom: 3rem; text-align: center;">Timeline</h2>

      <div style="display: grid; gap: 1.5rem; max-width: 800px; margin: 0 auto 4rem;">
        <div style="display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start;">
          <div style="text-align: right; padding-top: 0.5rem;">
            <div style="font-weight: 700; font-size: 1.25rem; color: var(--accent);">Day 1</div>
          </div>
          <div style="padding: 1.5rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Kickoff Call</div>
            <div style="color: var(--muted);">We scope your system, get API access, and align on priorities</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start;">
          <div style="text-align: right; padding-top: 0.5rem;">
            <div style="font-weight: 700; font-size: 1.25rem; color: var(--accent);">Days 2-10</div>
          </div>
          <div style="padding: 1.5rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Testing & Analysis</div>
            <div style="color: var(--muted);">We run automated + manual tests, document findings, verify vulnerabilities</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start;">
          <div style="text-align: right; padding-top: 0.5rem;">
            <div style="font-weight: 700; font-size: 1.25rem; color: var(--accent);">Days 11-12</div>
          </div>
          <div style="padding: 1.5rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Report Writing</div>
            <div style="color: var(--muted);">We write executive summary + technical report with remediation steps</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start;">
          <div style="text-align: right; padding-top: 0.5rem;">
            <div style="font-weight: 700; font-size: 1.25rem; color: var(--accent);">Day 14</div>
          </div>
          <div style="padding: 1.5rem; background: var(--surface); border: 2px solid #10B981; border-radius: 12px;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Delivery + Debrief</div>
            <div style="color: var(--muted);">You get the report, certification badge, and a walkthrough call</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: 120px 1fr; gap: 2rem; align-items: start;">
          <div style="text-align: right; padding-top: 0.5rem;">
            <div style="font-weight: 700; font-size: 1.25rem; color: var(--muted);">Days 15-44</div>
          </div>
          <div style="padding: 1.5rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
            <div style="font-weight: 600; margin-bottom: 0.5rem;">Remediation Support</div>
            <div style="color: var(--muted);">Async Slack/email support as you fix issues (included)</div>
          </div>
        </div>
      </div>

      <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; text-align: center;">
        <h3 style="font-size: 2rem; margin-bottom: 1rem;">Ready to Get Started?</h3>
        <p style="color: var(--muted); font-size: 1.125rem; margin-bottom: 2rem; line-height: 1.6;">Book a 30-minute scoping call. We'll assess if your system is a fit, answer questions, and give you a start date.</p>
        <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 1.25rem 3rem; background: var(--accent); color: white; text-decoration: none; font-size: 1.25rem; font-weight: 700; border-radius: 8px; border: 2px solid var(--accent); transition: all 0.3s;">Schedule Scoping Call</a>
        <p style="color: var(--muted); font-size: 0.875rem; margin-top: 1.5rem;">Next available slot: March 15 • $10K fixed price • 50% upfront, 50% on delivery</p>
      </div>
    </section>

    <footer style="padding: 3rem; text-align: center; background: var(--surface); border-top: 1px solid var(--line);">
      <div style="max-width: 800px; margin: 0 auto;">
        <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 1rem; font-family: var(--font-serif);">Aligned</div>
        <p style="color: var(--muted); margin-bottom: 2rem; line-height: 1.6;">Enterprise AI Security Audits</p>
        <div style="display: flex; justify-content: center; gap: 2rem; margin-bottom: 2rem; flex-wrap: wrap;">
          <a href="https://cal.com/jplows" target="_blank" style="color: var(--accent); text-decoration: none; font-weight: 500;">Book Audit</a>
          <a href="mailto:contribute@alignedsafely.com" style="color: var(--accent); text-decoration: none; font-weight: 500;">Email</a>
          <a href="/" style="color: var(--muted); text-decoration: none;">Home</a>
          <a href="/terms.html" style="color: var(--muted); text-decoration: none;">Terms</a>
          <a href="/privacy.html" style="color: var(--muted); text-decoration: none;">Privacy</a>
        </div>
        <div style="color: var(--muted); font-size: 0.875rem;">© 2026 Aligned. All rights reserved.</div>
      </div>
    </footer>
  </div>
`;
