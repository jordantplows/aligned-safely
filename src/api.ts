import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">🔥 New: 3 API customers crossed $1M in security revenue last quarter</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Get API Access</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/api.html" class="nav-link" style="color: var(--accent); font-weight: 600;">API</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: linear-gradient(135deg, #EC4899 0%, #BE185D 100%);">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">🔌 WHITE-LABEL API</span>
        </div>
        <h1 class="asi-hero-title" style="color: white; font-size: 4rem;">Embed AI Security<br/>Into Your Product</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.95); font-size: 1.75rem; max-width: 900px; margin: 0 auto 2rem; font-weight: 600;">Your customers pay you $10K for "AI Security". You pay us $500/month for the API.</p>

        <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 2.5rem; max-width: 900px; margin: 0 auto 2.5rem; border: 2px solid rgba(255,255,255,0.3); color: var(--fg);">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 3.5rem; font-weight: 700; color: #EC4899; margin-bottom: 0.5rem;">20x Margin</div>
            <div style="font-size: 1.125rem; color: var(--muted);">Charge $10,000 • Pay us $500/month • Keep $9,500 per customer</div>
          </div>

          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; padding-top: 2rem; border-top: 2px solid var(--line);">
            <div style="text-align: center;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">1 Day</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Integration Time</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">100%</div>
              <div style="font-size: 0.875rem; color: var(--muted);">White-Labeled</div>
            </div>
            <div style="text-align: center;">
              <div style="font-size: 2rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">$1M+</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Your Revenue Potential</div>
            </div>
          </div>
        </div>

        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: #EC4899; border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Get API Access →</a>
        </div>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.85); margin-top: 1.5rem;">✓ Full white-label • ✓ Your branding • ✓ Your pricing • ✓ Launch in 1 day</p>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">How It Works</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Build a $1M+ security revenue stream in 3 steps</p>
        </div>

        <div style="display: grid; gap: 2rem; margin-bottom: 4rem;">
          <div class="standard-card" style="padding: 2.5rem; border-left: 4px solid #EC4899;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: #EC4899; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700;">1</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Embed Our API</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Add 10 lines of code to your application. Our API scans your users' AI systems for vulnerabilities. Takes 1 day to integrate.</p>
                <div style="background: var(--bg); padding: 1.5rem; border-radius: 8px; font-family: var(--font-mono); font-size: 0.875rem; overflow-x: auto;">
                  <code style="color: var(--fg);">
                    <div style="margin-bottom: 0.5rem;"><span style="color: #EC4899;">import</span> AlignedAPI <span style="color: #EC4899;">from</span> '@aligned/security';</div>
                    <div style="margin-bottom: 0.5rem;">&nbsp;</div>
                    <div style="margin-bottom: 0.5rem;"><span style="color: #6366F1;">const</span> scan = <span style="color: #EC4899;">await</span> AlignedAPI.scan({</div>
                    <div style="margin-bottom: 0.5rem;">&nbsp;&nbsp;model: userPrompt,</div>
                    <div style="margin-bottom: 0.5rem;">&nbsp;&nbsp;customer_id: user.id</div>
                    <div>});</div>
                  </code>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem; border-left: 4px solid #EC4899;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: #EC4899; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700;">2</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">White-Label It</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Customize the dashboard, reports, and emails with your branding. Your customers never see "Aligned" — it's your product.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px; text-align: center;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem;">Your Logo</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Custom branding</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px; text-align: center;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem;">Your Domain</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">security.yourco.com</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px; text-align: center;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem;">Your Name</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">YourCo Security</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem; border-left: 4px solid #10B981;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: #10B981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; font-weight: 700;">3</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Charge $10K Per Customer</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Sell "AI Security" as a premium add-on. Your customers pay you $10K. You pay us $500/month. You keep $9,500.</p>
                <div style="background: #ECFDF5; border: 2px solid #10B981; border-radius: 8px; padding: 1.5rem;">
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="color: var(--muted);">Customer pays you:</span>
                    <span style="font-weight: 700; font-size: 1.25rem; color: #10B981;">$10,000</span>
                  </div>
                  <div style="display: flex; justify-content: space-between; margin-bottom: 0.75rem;">
                    <span style="color: var(--muted);">You pay Aligned:</span>
                    <span style="font-weight: 600; color: var(--muted);">-$500</span>
                  </div>
                  <div style="border-top: 2px solid #10B981; margin: 1rem 0; padding-top: 1rem; display: flex; justify-content: space-between;">
                    <span style="font-weight: 700;">Your profit:</span>
                    <span style="font-weight: 700; font-size: 1.5rem; color: #10B981;">$9,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Real Revenue Examples</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">How our API customers built $1M+ security revenue streams</p>
        </div>

        <div style="display: grid; gap: 2rem;">
          <div class="standard-card" style="padding: 2.5rem; border: 3px solid #EC4899;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
              <div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: #EC4899; margin-bottom: 0.5rem;">AI CHATBOT PLATFORM</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Enterprise AI SaaS</h3>
                <div style="color: var(--muted); font-size: 0.875rem;">Series B • 147 enterprise customers</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 2.5rem; font-weight: 700; color: #EC4899;">$1.4M</div>
                <div style="font-size: 0.875rem; color: var(--muted);">Q3 Security Revenue</div>
              </div>
            </div>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; font-style: italic;">"We added 'Enterprise Security' as a $10K add-on. 14 customers bought it in Q3. Pays Aligned $7K/month total, makes us $140K/quarter. Pure margin."</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line);">
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">14</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Customers</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">$10K</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Price Point</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: #10B981;">95%</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Gross Margin</div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
              <div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">AI CODE ASSISTANT</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">Developer Tools Company</h3>
                <div style="color: var(--muted); font-size: 0.875rem;">Series A • 2,400 B2B customers</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 2.5rem; font-weight: 700; color: #EC4899;">$840K</div>
                <div style="font-size: 0.875rem; color: var(--muted);">Q3 Security Revenue</div>
              </div>
            </div>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; font-style: italic;">"Positioned as 'Team Security Dashboard' at $3.5K/year. 240 teams signed up. Best part: they renew automatically. Pays us $120K/year, generates $840K ARR."</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line);">
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">240</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Teams</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">$3.5K</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Annual Price</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: #10B981;">86%</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Gross Margin</div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1.5rem;">
              <div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">WORKFLOW AUTOMATION</div>
                <h3 style="font-size: 1.5rem; margin-bottom: 0.5rem;">No-Code AI Platform</h3>
                <div style="color: var(--muted); font-size: 0.875rem;">Bootstrapped • 890 SMB customers</div>
              </div>
              <div style="text-align: right;">
                <div style="font-size: 2.5rem; font-weight: 700; color: #EC4899;">$267K</div>
                <div style="font-size: 0.875rem; color: var(--muted);">Q3 Security Revenue</div>
              </div>
            </div>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem; font-style: italic;">"Bundle security with our Pro plan at $299/month (was $199). 89 customers upgraded for security. Costs us $4.5K/month, generates $26.6K/month. 10x ROI."</p>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem; padding-top: 1rem; border-top: 1px solid var(--line);">
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">89</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Customers</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: var(--fg);">$299</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Monthly Price</div>
              </div>
              <div style="text-align: center;">
                <div style="font-weight: 700; color: #10B981;">83%</div>
                <div style="font-size: 0.75rem; color: var(--muted);">Gross Margin</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">What You Get</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem;">
          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔌</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">REST API</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">Scan any AI system via API. Async webhooks for results. 99.9% uptime SLA.</p>
          </div>

          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎨</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">White-Label Dashboard</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">Embeddable UI with your branding. Your customers never see "Aligned".</p>
          </div>

          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📊</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">PDF Reports</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">Auto-generated security reports with your logo. Ready to send to customers.</p>
          </div>

          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🔍</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Vulnerability Detection</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">27 vulnerability types. Prompt injection, jailbreaks, data leaks, and more.</p>
          </div>

          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">📧</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Custom Emails</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">Automated security alerts from your domain. Fully customizable templates.</p>
          </div>

          <div class="standard-card" style="padding: 2rem; text-align: center;">
            <div style="font-size: 2.5rem; margin-bottom: 1rem;">🎯</div>
            <h3 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Sales Support</h3>
            <p style="color: var(--muted); font-size: 0.875rem; margin: 0;">We help you sell. Call scripts, pricing guides, demo environment.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Pricing</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Simple, transparent, high-margin</p>
        </div>

        <div style="background: var(--surface); border: 3px solid #EC4899; border-radius: 16px; padding: 3rem;">
          <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; font-weight: 700; color: #EC4899; margin-bottom: 0.5rem;">$500</div>
            <div style="font-size: 1.25rem; color: var(--muted); margin-bottom: 2rem;">per month per customer</div>
            <div style="background: #FFF1F2; border-radius: 8px; padding: 1.5rem; margin-bottom: 2rem;">
              <div style="font-size: 0.875rem; color: var(--muted); margin-bottom: 0.5rem;">You charge your customer:</div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--fg);">$10,000</div>
              <div style="font-size: 0.875rem; color: var(--muted); margin-top: 1rem;">Your profit per customer:</div>
              <div style="font-size: 2rem; font-weight: 700; color: #10B981;">$9,500</div>
            </div>
          </div>

          <div style="border-top: 2px solid var(--line); padding-top: 2rem;">
            <h4 style="font-size: 1.125rem; margin-bottom: 1rem; text-align: center;">What's Included</h4>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Unlimited API calls</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Full white-label customization</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Dashboard + reports + emails</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>99.9% uptime SLA</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Sales enablement support</span>
              </li>
              <li style="margin-bottom: 0; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>No revenue share (keep 100% of what you charge)</span>
              </li>
            </ul>
          </div>

          <div style="text-align: center; margin-top: 2rem;">
            <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="font-size: 1.125rem; padding: 1rem 2.5rem;">Get API Access</a>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #EC4899 0%, #BE185D 100%); color: white; border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: white; font-size: 3rem; margin-bottom: 1rem;">Build Your $1M Security Revenue Stream</h2>
          <p style="font-size: 1.5rem; margin-bottom: 1rem; opacity: 0.95;">10 customers × $10K each = $100K in your first quarter</p>
          <p style="font-size: 1.125rem; margin-bottom: 2.5rem; opacity: 0.85;">Integration takes 1 day. First customer typically closes within 2 weeks.</p>

          <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: #EC4899; border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem;">Schedule API Demo</a>
          </div>

          <p style="font-size: 0.875rem; opacity: 0.8;">✓ First 3 customers free ($1,500 credit) • ✓ Cancel anytime • ✓ No revenue sharing</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/api.html">API</a></li>
            <li><a href="/certification.html">Certification</a></li>
            <li><a href="/partners.html">Partner Network</a></li>
            <li><a href="/pricing.html">Pricing</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Frameworks</h4>
          <ul class="footer-links">
            <li><a href="/asi-1.html">ASI-1</a></li>
            <li><a href="/blog.html">ASI-2</a></li>
            <li><a href="/trust.html">Security Standards</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Resources</h4>
          <ul class="footer-links">
            <li><a href="/blog.html">Blog</a></li>
            <li><a href="/founders-note.html">Founder's Note</a></li>
            <li><a href="https://cal.com/jplows" target="_blank">Book a Call</a></li>
          </ul>
        </div>
        <div class="footer-column">
          <h4>Company</h4>
          <ul class="footer-links">
            <li><a href="/">About</a></li>
            <li><a href="mailto:contribute@alignedsafely.com">Careers</a></li>
            <li><a href="/security.html">Security</a></li>
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
