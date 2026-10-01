import "./style.css";
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">🎯 New: $25K bounty posted for GPT-4 jailbreak • 3 active bounties • $147K paid out this month</span>
      <a href="#active-bounties" class="banner-cta">See Active Bounties</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/bounties.html" class="nav-link" style="color: var(--accent); font-weight: 600;">Bounties</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: linear-gradient(135deg, var(--brand) 0%, var(--brand-muted) 100%);">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.1); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: var(--surface); font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">FOR RESEARCHERS</span>
        </div>
        <h1 class="asi-hero-title" style="color: var(--surface);">Earn $10K+ Finding<br/>AI Vulnerabilities</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.85); font-size: 1.5rem; max-width: 800px; margin: 0 auto 2rem;">Test AI systems from top companies. Get paid $500-$50K per critical vulnerability. No upfront cost, no competition limit.</p>

        <div style="display: flex; align-items: center; justify-content: center; gap: 3rem; margin-bottom: 2.5rem;">
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; font-weight: 700; color: var(--surface); font-family: var(--font-serif);">$847K</div>
            <div style="font-size: 0.875rem; color: rgba(255,255,255,0.7);">Total Paid Out</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; font-weight: 700; color: var(--surface); font-family: var(--font-serif);">127</div>
            <div style="font-size: 0.875rem; color: rgba(255,255,255,0.7);">Researchers Earning</div>
          </div>
          <div style="text-align: center;">
            <div style="font-size: 2.5rem; font-weight: 700; color: var(--surface); font-family: var(--font-serif);">23</div>
            <div style="font-size: 0.875rem; color: rgba(255,255,255,0.7);">Active Programs</div>
          </div>
        </div>

        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: var(--surface); color: var(--brand); border-color: var(--surface);">Join as Researcher</a>
          <a href="#how-it-works" class="asi-btn-secondary">How It Works</a>
        </div>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 1.5rem;">Free to join • Get paid within 48 hours • No exclusivity required</p>
      </div>
    </section>

    <section class="asi-section" id="active-bounties">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Active Bounty Programs</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Find vulnerabilities in production AI systems. Get paid for validated findings.</p>
        </div>

        <div style="display: grid; grid-template-columns: 1fr; gap: 1.5rem; margin-bottom: 4rem;">
          <!-- Bounty Card 1 -->
          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; justify-content: between; align-items: start; margin-bottom: 1.5rem; gap: 2rem;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.5rem; margin: 0;">Enterprise AI Chatbot</h3>
                  <span style="padding: 0.25rem 0.75rem; background: var(--pass-bg); color: var(--pass); border-radius: 4px; font-size: 0.75rem; font-weight: 600;">ACTIVE</span>
                </div>
                <p style="color: var(--muted); margin-bottom: 1rem;">Financial services chatbot handling customer support and account queries. GPT-4 powered with RAG.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Prompt Injection</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Jailbreaking</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Data Extraction</span>
                </div>
              </div>
              <div style="text-align: right; min-width: 180px;">
                <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.25rem;">$25,000</div>
                <div style="font-size: 0.875rem; color: var(--muted); margin-bottom: 1rem;">Critical Finding</div>
                <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--accent); color: var(--bg); text-decoration: none; font-weight: 600; border-radius: 6px; border: 2px solid var(--accent);">Start Testing →</a>
              </div>
            </div>
            <div style="border-top: 1px solid var(--line); padding-top: 1rem; display: flex; justify-content: space-between; color: var(--muted); font-size: 0.875rem;">
              <span>💰 Medium: $5,000 • Low: $500</span>
              <span>⏱️ 14 days remaining</span>
            </div>
          </div>

          <!-- Bounty Card 2 -->
          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem; gap: 2rem;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.5rem; margin: 0;">AI Code Assistant</h3>
                  <span style="padding: 0.25rem 0.75rem; background: var(--pass-bg); color: var(--pass); border-radius: 4px; font-size: 0.75rem; font-weight: 600;">ACTIVE</span>
                </div>
                <p style="color: var(--muted); margin-bottom: 1rem;">Developer tool that generates code and answers technical questions. Claude 3.5 based with custom prompting.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Prompt Leakage</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Code Injection</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">PII Disclosure</span>
                </div>
              </div>
              <div style="text-align: right; min-width: 180px;">
                <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.25rem;">$15,000</div>
                <div style="font-size: 0.875rem; color: var(--muted); margin-bottom: 1rem;">Critical Finding</div>
                <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--accent); color: var(--bg); text-decoration: none; font-weight: 600; border-radius: 6px; border: 2px solid var(--accent);">Start Testing →</a>
              </div>
            </div>
            <div style="border-top: 1px solid var(--line); padding-top: 1rem; display: flex; justify-content: space-between; color: var(--muted); font-size: 0.875rem;">
              <span>💰 Medium: $3,000 • Low: $300</span>
              <span>⏱️ 21 days remaining</span>
            </div>
          </div>

          <!-- Bounty Card 3 -->
          <div class="standard-card" style="padding: 2rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem; gap: 2rem;">
              <div style="flex: 1;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 0.75rem;">
                  <h3 style="font-size: 1.5rem; margin: 0;">Healthcare AI Assistant</h3>
                  <span style="padding: 0.25rem 0.75rem; background: var(--pass-bg); color: var(--pass); border-radius: 4px; font-size: 0.75rem; font-weight: 600;">ACTIVE</span>
                </div>
                <p style="color: var(--muted); margin-bottom: 1rem;">Medical diagnosis support tool for healthcare providers. HIPAA compliant, GPT-4 with medical knowledge base.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">PHI Leakage</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Unsafe Outputs</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border: 1px solid var(--line); border-radius: 6px; font-size: 0.875rem;">Jailbreaking</span>
                </div>
              </div>
              <div style="text-align: right; min-width: 180px;">
                <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.25rem;">$50,000</div>
                <div style="font-size: 0.875rem; color: var(--muted); margin-bottom: 1rem;">Critical Finding</div>
                <a href="https://cal.com/jplows" target="_blank" style="display: inline-block; padding: 0.75rem 1.5rem; background: var(--accent); color: var(--bg); text-decoration: none; font-weight: 600; border-radius: 6px; border: 2px solid var(--accent);">Start Testing →</a>
              </div>
            </div>
            <div style="border-top: 1px solid var(--line); padding-top: 1rem; display: flex; justify-content: space-between; color: var(--muted); font-size: 0.875rem;">
              <span>💰 Medium: $10,000 • Low: $1,000</span>
              <span>⏱️ 30 days remaining</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt" id="how-it-works">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">How It Works</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Three simple steps to start earning</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem;">
          <div style="text-align: center;">
            <div style="width: 80px; height: 80px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; font-weight: 700; color: var(--bg);">1</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Sign Up Free</h3>
            <p style="color: var(--muted); line-height: 1.75;">Create your researcher account. Browse active bounty programs. Pick one to test.</p>
          </div>
          <div style="text-align: center;">
            <div style="width: 80px; height: 80px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; font-weight: 700; color: var(--bg);">2</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Find Vulnerabilities</h3>
            <p style="color: var(--muted); line-height: 1.75;">Test the AI system. Document vulnerabilities. Submit detailed report with proof-of-concept.</p>
          </div>
          <div style="text-align: center;">
            <div style="width: 80px; height: 80px; background: var(--accent); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1.5rem; font-size: 2rem; font-weight: 700; color: var(--bg);">3</div>
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Get Paid</h3>
            <p style="color: var(--muted); line-height: 1.75;">We validate your finding. Company confirms. You get paid within 48 hours via wire or crypto.</p>
          </div>
        </div>

        <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; position: relative;">
          <div style="position: absolute; top: -2px; left: -2px; width: 20px; height: 20px; border-left: 2px solid var(--accent); border-top: 2px solid var(--accent); border-top-left-radius: 16px;"></div>
          <div style="position: absolute; bottom: -2px; right: -2px; width: 20px; height: 20px; border-right: 2px solid var(--accent); border-bottom: 2px solid var(--accent); border-bottom-right-radius: 16px;"></div>

          <h3 style="font-size: 1.5rem; margin-bottom: 1.5rem; text-align: center;">What You Can Earn</h3>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
            <div style="text-align: center; padding: 1.5rem; background: var(--critical-bg); border-radius: 8px;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--critical); margin-bottom: 0.5rem;">$10K-$50K</div>
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Critical</div>
              <div style="font-size: 0.875rem; color: var(--muted);">RCE, data breach, jailbreak with PII access</div>
            </div>
            <div style="text-align: center; padding: 1.5rem; background: var(--warn-bg); border-radius: 8px;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--warn); margin-bottom: 0.5rem;">$3K-$10K</div>
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Medium</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Prompt injection, data leakage, unsafe outputs</div>
            </div>
            <div style="text-align: center; padding: 1.5rem; background: var(--pass-bg); border-radius: 8px;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--pass); margin-bottom: 0.5rem;">$300-$3K</div>
              <div style="font-weight: 600; margin-bottom: 0.5rem;">Low</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Prompt leakage, minor bypasses, edge cases</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Top Earners This Month</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 4rem;">
          <div class="standard-card" style="text-align: center; padding: 2rem;">
            <div style="width: 80px; height: 80px; background: var(--accent-subtle); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">🥇</div>
            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">$87,500</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">@sec_researcher_alex</div>
            <div style="font-size: 0.875rem; color: var(--muted);">5 critical, 12 medium findings</div>
          </div>
          <div class="standard-card" style="text-align: center; padding: 2rem;">
            <div style="width: 80px; height: 80px; background: var(--accent-subtle); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">🥈</div>
            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">$43,200</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">@ai_hacker_sam</div>
            <div style="font-size: 0.875rem; color: var(--muted);">2 critical, 8 medium findings</div>
          </div>
          <div class="standard-card" style="text-align: center; padding: 2rem;">
            <div style="width: 80px; height: 80px; background: var(--accent-subtle); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; font-size: 2rem;">🥉</div>
            <div style="font-size: 1.5rem; font-weight: 700; margin-bottom: 0.5rem;">$29,800</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">@prompt_ninja</div>
            <div style="font-size: 0.875rem; color: var(--muted);">1 critical, 11 medium findings</div>
          </div>
        </div>

        <div style="background: var(--brand); color: var(--surface); border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: var(--surface); font-size: 2.5rem; margin-bottom: 1.5rem;">Ready to Start Earning?</h2>
          <p style="font-size: 1.25rem; color: rgba(255,255,255,0.85); margin-bottom: 2rem; max-width: 700px; margin-left: auto; margin-right: auto;">Join 127 researchers who've earned $847K+ testing AI systems. No upfront cost, no exclusivity. Start today.</p>
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: var(--surface); color: var(--brand); border-color: var(--surface); font-size: 1.125rem; padding: 1rem 2.5rem;">Join as Researcher</a>
          <p style="font-size: 0.875rem; color: rgba(255,255,255,0.6); margin-top: 1.5rem;">Free forever • Get paid within 48 hours • Test on your schedule</p>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">For Companies: Post a Bounty</h2>
          <p style="font-size: 1.125rem; color: var(--muted); max-width: 700px; margin: 0 auto;">Get your AI system tested by 127 expert security researchers. Pay only for validated vulnerabilities.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem; margin-bottom: 3rem;">
          <div class="standard-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Why Companies Choose Us</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Cost-effective:</strong> Pay only for findings, not for time</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Fast results:</strong> 127 researchers test in parallel</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">AI expertise:</strong> Researchers specialize in LLM vulnerabilities</span>
              </li>
              <li style="margin-bottom: 0; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Ongoing testing:</strong> Continuous coverage as you ship</span>
              </li>
            </ul>
          </div>

          <div class="standard-card" style="padding: 2rem;">
            <h3 style="font-size: 1.25rem; margin-bottom: 1rem;">Typical Program Cost</h3>
            <div style="margin-bottom: 1.5rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: var(--muted);">Platform fee (one-time):</span>
                <span style="font-weight: 600;">$5,000</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 0.5rem;">
                <span style="color: var(--muted);">Average bounty payouts:</span>
                <span style="font-weight: 600;">$15,000</span>
              </div>
              <div style="border-top: 2px solid var(--line); margin: 1rem 0; padding-top: 1rem;">
                <div style="display: flex; justify-content: space-between;">
                  <span style="font-weight: 600;">Total first month:</span>
                  <span style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">$20,000</span>
                </div>
              </div>
            </div>
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;">70% cheaper than hiring in-house security team. 10x more coverage.</p>
          </div>
        </div>

        <div style="text-align: center;">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">Post Your Bounty Program</a>
          <p style="font-size: 0.875rem; color: var(--muted); margin-top: 1rem;">30-day free trial • Cancel anytime • No minimum commitment</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/bounty.html">Penetration Testing</a></li>
            <li><a href="/bounties.html">Bounty Platform</a></li>
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
