import "./style.css";
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="page">
    <div class="banner" style="background: var(--critical); border-bottom: 2px solid var(--critical);">
      <span class="banner-text" style="color: white;">⚡ URGENT: Enterprise deal blocked by security requirements? Get certified in 7 days</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta" style="background: white; color: var(--critical);">Emergency Call →</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/express.html" class="nav-link" style="color: var(--critical); font-weight: 600;">Express Cert</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: linear-gradient(135deg, var(--critical) 0%, #8B0000 100%); padding: 6rem 3rem;">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">⚡ FAST TRACK</span>
        </div>
        <h1 class="asi-hero-title" style="color: white; font-size: 4rem;">Enterprise Customer Needs<br/>Security Certification?</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.9); font-size: 1.75rem; max-width: 900px; margin: 0 auto 2rem; font-weight: 600;">Get ASI-1 certified in 7 days. Pass their security review. Close the deal.</p>

        <div style="background: rgba(255,255,255,0.1); backdrop-filter: blur(10px); border-radius: 16px; padding: 2rem; max-width: 700px; margin: 0 auto 2.5rem; border: 2px solid rgba(255,255,255,0.2);">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; text-align: center;">
            <div>
              <div style="font-size: 3rem; font-weight: 700; color: white;">7</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);">Days to Certified</div>
            </div>
            <div>
              <div style="font-size: 3rem; font-weight: 700; color: white;">$10K</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);">Flat Fee</div>
            </div>
            <div>
              <div style="font-size: 3rem; font-weight: 700; color: white;">100%</div>
              <div style="font-size: 0.875rem; color: rgba(255,255,255,0.8);">Money Back</div>
            </div>
          </div>
        </div>

        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: var(--critical); border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Start Certification Now →</a>
        </div>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.7); margin-top: 1.5rem;">⚡ Emergency processing available • 🎯 Pass guarantee or 100% refund • ✓ 23 companies certified this quarter</p>
      </div>
    </section>

    <section class="asi-section" style="padding: 5rem 3rem; background: var(--critical-bg);">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem; color: var(--critical);">Sound Familiar?</h2>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 3rem;">
          <div style="padding: 2rem; background: var(--surface); border-left: 4px solid var(--critical); border-radius: 8px;">
            <p style="font-size: 1.25rem; color: var(--fg); line-height: 1.75; margin: 0;">
              <strong style="color: var(--critical);">"We're about to close a $750K enterprise deal, but their security team won't sign off until we have AI security certification. The deal dies in 2 weeks if we can't provide it."</strong>
            </p>
            <p style="font-size: 0.875rem; color: var(--muted); margin-top: 1rem; margin-bottom: 0;">— VP Sales, Series B AI Startup</p>
          </div>

          <div style="padding: 2rem; background: var(--surface); border-left: 4px solid var(--critical); border-radius: 8px;">
            <p style="font-size: 1.25rem; color: var(--fg); line-height: 1.75; margin: 0;">
              <strong style="color: var(--critical);">"Enterprise customer sent us a 147-question security questionnaire. Half the questions are AI-specific and our InfoSec team has no idea how to answer them."</strong>
            </p>
            <p style="font-size: 0.875rem; color: var(--muted); margin-top: 1rem; margin-bottom: 0;">— CTO, AI SaaS Company</p>
          </div>

          <div style="padding: 2rem; background: var(--surface); border-left: 4px solid var(--critical); border-radius: 8px;">
            <p style="font-size: 1.25rem; color: var(--fg); line-height: 1.75; margin: 0;">
              <strong style="color: var(--critical);">"We got SOC 2 certified but the CISO at our biggest prospect said 'SOC 2 doesn't cover AI-specific risks. Do you have ASI-1 or equivalent?'"</strong>
            </p>
            <p style="font-size: 0.875rem; color: var(--muted); margin-top: 1rem; margin-bottom: 0;">— CEO, Healthcare AI Platform</p>
          </div>
        </div>

        <div style="text-align: center; padding: 2rem; background: var(--surface); border-radius: 12px; border: 2px solid var(--critical);">
          <p style="font-size: 1.5rem; font-weight: 600; color: var(--fg); margin: 0;">Don't lose the deal because of security paperwork.</p>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 4rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">What You Get: ASI-1 Express</h2>
          <p style="font-size: 1.125rem; color: var(--muted); max-width: 700px; margin: 0 auto;">Everything you need to satisfy enterprise security requirements in 7 days</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 4rem;">
          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">📋</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Security Questionnaire Completion</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">We fill out their entire security questionnaire with accurate, audit-ready responses. Works with any format.</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">🔒</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Comprehensive Security Audit</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">Full penetration testing of your AI systems. Detailed report with findings, proof-of-concepts, and remediation steps.</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">✅</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">ASI-1 Certification Badge</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">Official certification you can share with customers, investors, and on your website. Valid for 12 months.</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">📞</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">CISO Call Support</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">We'll join the security review call with your customer's CISO to answer technical questions and validate our findings.</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">📄</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Security Documentation Package</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">Architecture diagrams, data flow charts, incident response plan, and AI-specific security policies ready to share.</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; align-items: start; gap: 1rem; margin-bottom: 1.5rem;">
              <div style="font-size: 2rem;">🚀</div>
              <div>
                <h3 style="font-size: 1.25rem; margin-bottom: 0.5rem;">Remediation Fast Track</h3>
                <p style="color: var(--muted); line-height: 1.75; margin: 0;">We fix critical vulnerabilities for you. Your engineers shadow us to learn. No delays waiting for your team.</p>
              </div>
            </div>
          </div>
        </div>

        <div style="background: var(--accent-subtle); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; position: relative;">
          <div style="position: absolute; top: -2px; left: -2px; width: 24px; height: 24px; border-left: 2px solid var(--accent); border-top: 2px solid var(--accent); border-top-left-radius: 16px;"></div>
          <div style="position: absolute; bottom: -2px; right: -2px; width: 24px; height: 24px; border-right: 2px solid var(--accent); border-bottom: 2px solid var(--accent); border-bottom-right-radius: 16px;"></div>

          <h3 style="font-size: 2rem; margin-bottom: 2rem; text-align: center;">7-Day Timeline</h3>

          <div style="display: grid; grid-template-columns: repeat(7, 1fr); gap: 1rem;">
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">1</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Kickoff</div>
              <div style="font-size: 0.7rem; color: var(--muted);">System access & questionnaire</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">2</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Testing</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Pen test & vulnerability scan</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">3</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Report</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Findings documented</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">4</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Fix</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Remediate critical issues</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">5</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Review</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Validation testing</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--critical); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">6</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Docs</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Complete questionnaire</div>
            </div>
            <div style="text-align: center;">
              <div style="width: 60px; height: 60px; border-radius: 50%; background: var(--pass); color: white; display: flex; align-items: center; justify-content: center; margin: 0 auto 0.75rem; font-weight: 700; font-size: 1.25rem;">✓</div>
              <div style="font-size: 0.75rem; font-weight: 600; margin-bottom: 0.5rem;">Certified</div>
              <div style="font-size: 0.7rem; color: var(--muted);">Badge & close deal</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">The Math: Why $10K Is Worth It</h2>
        </div>

        <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; margin-bottom: 3rem;">
          <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: center; margin-bottom: 2rem;">
            <div>
              <div style="text-align: center; padding: 2rem; background: var(--critical-bg); border-radius: 12px;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--critical); margin-bottom: 0.5rem;">$0</div>
                <div style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Lost Deal</div>
                <div style="font-size: 0.875rem; color: var(--muted);">No certification = No enterprise customer</div>
              </div>
            </div>
            <div style="font-size: 3rem; color: var(--muted);">VS</div>
            <div>
              <div style="text-align: center; padding: 2rem; background: var(--pass-bg); border-radius: 12px;">
                <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass); margin-bottom: 0.5rem;">$500K+</div>
                <div style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5rem;">Deal Closed</div>
                <div style="font-size: 0.875rem; color: var(--muted);">$10K investment = $500K+ contract</div>
              </div>
            </div>
          </div>

          <div style="border-top: 2px solid var(--line); padding-top: 2rem;">
            <h4 style="font-size: 1.25rem; margin-bottom: 1rem; text-align: center;">Real Customer Examples</h4>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1.5rem;">
              <div style="text-align: center; padding: 1.5rem; background: var(--bg); border-radius: 8px;">
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">50x ROI</div>
                <div style="font-size: 0.875rem; color: var(--muted);">$10K cert → $500K deal</div>
              </div>
              <div style="text-align: center; padding: 1.5rem; background: var(--bg); border-radius: 8px;">
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">125x ROI</div>
                <div style="font-size: 0.875rem; color: var(--muted);">$10K cert → $1.25M deal</div>
              </div>
              <div style="text-align: center; padding: 1.5rem; background: var(--bg); border-radius: 8px;">
                <div style="font-size: 1.75rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">275x ROI</div>
                <div style="font-size: 0.875rem; color: var(--muted);">$10K cert → $2.75M deal</div>
              </div>
            </div>
          </div>
        </div>

        <div style="background: var(--warn-bg); border: 2px solid var(--warn); border-radius: 12px; padding: 2rem; text-align: center;">
          <p style="font-size: 1.25rem; font-weight: 600; color: var(--fg); margin: 0;">
            ⚠️ The average enterprise sales cycle is 6-9 months. Don't waste it because you can't pass security review.
          </p>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">100% Money-Back Guarantee</h2>
          <p style="font-size: 1.125rem; color: var(--muted); max-width: 700px; margin: 0 auto;">We're so confident in our process, we offer the strongest guarantee in the industry</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 4rem;">
          <div class="standard-card" style="padding: 2.5rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">✅</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Pass Guarantee</h3>
            <p style="color: var(--muted); line-height: 1.75; margin: 0;">If you don't pass your customer's security review after getting ASI-1 certified, we refund 100% of the $10K. No questions asked.</p>
          </div>
          <div class="standard-card" style="padding: 2.5rem; text-align: center;">
            <div style="font-size: 3rem; margin-bottom: 1rem;">⚡</div>
            <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Speed Guarantee</h3>
            <p style="color: var(--muted); line-height: 1.75; margin: 0;">If we don't deliver your certification in 7 days, you get $2,000 back. We've never missed a deadline in 23 certifications.</p>
          </div>
        </div>

        <div style="background: var(--brand); color: white; border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: white; font-size: 3rem; margin-bottom: 1rem;">Ready to Close Your Deal?</h2>
          <p style="font-size: 1.5rem; margin-bottom: 2.5rem; opacity: 0.9;">Start your 7-day certification today</p>

          <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: var(--brand); border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem;">Start Certification Now</a>
          </div>

          <p style="font-size: 0.875rem; opacity: 0.7;">⚡ Emergency 48-hour processing available for additional $5K • 💰 100% money-back guarantee</p>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">Frequently Asked Questions</h2>
        </div>

        <div style="display: grid; gap: 1.5rem;">
          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What if I need it faster than 7 days?</h4>
            <p style="color: var(--muted); margin: 0;">We offer emergency 48-hour processing for an additional $5K. We'll work around the clock to get you certified. Book an emergency call immediately.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What if my AI system has critical vulnerabilities?</h4>
            <p style="color: var(--muted); margin: 0;">We fix them as part of the certification. Our team remediates critical and high-severity issues during days 4-5. Your engineers shadow us so they learn the fixes.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Will this satisfy any enterprise security questionnaire?</h4>
            <p style="color: var(--muted); margin: 0;">Yes. ASI-1 covers all AI-specific security controls that enterprise customers care about. We've successfully satisfied security reviews at Fortune 500 companies, healthcare orgs, and financial institutions.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What's included in the $10K?</h4>
            <p style="color: var(--muted); margin: 0;">Everything: penetration testing, vulnerability remediation, security questionnaire completion, documentation package, ASI-1 certification badge, CISO call support, and 30 days of post-certification support.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What happens after 12 months?</h4>
            <p style="color: var(--muted); margin: 0;">ASI-1 certification is valid for 12 months. We'll reach out 30 days before expiration to schedule your recertification audit. Recertification is typically faster (3-5 days) and less expensive ($5K).</p>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/express.html">Express Certification</a></li>
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
