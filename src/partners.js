import "./style.css";
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">💰 Next cohort starts Nov 15 • 47 partners earned $2.1M in Q3 • Average $43K per partner</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Apply Now</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/partners.html" class="nav-link" style="color: var(--accent); font-weight: 600;">Partner Network</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: linear-gradient(135deg, var(--pass) 0%, #059669 100%);">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">💼 PARTNER PROGRAM</span>
        </div>
        <h1 class="asi-hero-title" style="color: white; font-size: 4rem;">Become an AI Security<br/>Auditor in 3 Weeks</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.95); font-size: 1.75rem; max-width: 900px; margin: 0 auto 2rem; font-weight: 600;">Get certified. We send you clients. You earn $10K-$50K per engagement.</p>

        <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 2.5rem; max-width: 800px; margin: 0 auto 2.5rem; border: 2px solid rgba(255,255,255,0.3); color: var(--fg);">
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 2rem; text-align: center;">
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass);">$43K</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Avg Q3 Earnings</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass);">3</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Weeks Training</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass);">47</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Active Partners</div>
            </div>
            <div>
              <div style="font-size: 2.5rem; font-weight: 700; color: var(--pass);">217</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Audits Completed</div>
            </div>
          </div>
        </div>

        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: var(--pass); border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Apply for November Cohort →</a>
        </div>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.85); margin-top: 1.5rem;">✓ No AI security experience required • ✓ Free training & certification • ✓ Guaranteed first client</p>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">How Much Can You Actually Earn?</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Real earnings from our Q3 partners (July-Sept 2026)</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 3rem;">
          <div class="standard-card" style="padding: 2.5rem; text-align: center; border: 3px solid var(--pass);">
            <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--pass); margin-bottom: 1rem;">TOP PERFORMER</div>
            <div style="font-size: 3rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">$127K</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">Sarah M. • Former Infosec Analyst</div>
            <div style="font-size: 0.875rem; color: var(--muted); padding-top: 1rem; border-top: 1px solid var(--line);">9 audits @ avg $14K</div>
          </div>

          <div class="standard-card" style="padding: 2.5rem; text-align: center;">
            <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 1rem;">MEDIAN</div>
            <div style="font-size: 3rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">$43K</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">Typical Partner • Part-time</div>
            <div style="font-size: 0.875rem; color: var(--muted); padding-top: 1rem; border-top: 1px solid var(--line);">3-4 audits @ avg $12K</div>
          </div>

          <div class="standard-card" style="padding: 2.5rem; text-align: center;">
            <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 1rem;">FIRST MONTH</div>
            <div style="font-size: 3rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">$10K</div>
            <div style="color: var(--muted); margin-bottom: 1rem;">Guaranteed First Client</div>
            <div style="font-size: 0.875rem; color: var(--muted); padding-top: 1rem; border-top: 1px solid var(--line);">1 audit • We mentor you</div>
          </div>
        </div>

        <div style="background: var(--pass-bg); border: 2px solid var(--pass); border-radius: 12px; padding: 2rem; text-align: center;">
          <p style="font-size: 1.25rem; font-weight: 600; color: var(--fg); margin: 0;">
            Work part-time earning $43K per quarter. Or go full-time and earn $150K+ per year. You control the volume.
          </p>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">What You'll Do as a Partner</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 3rem; margin-bottom: 4rem;">
          <div>
            <h3 style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
              <span style="display: inline-flex; width: 48px; height: 48px; background: var(--pass); color: white; border-radius: 50%; align-items: center; justify-content: center; font-weight: 700;">1</span>
              We Send You Clients
            </h3>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">You don't need to do any sales or marketing. We have more clients than we can handle. When a client signs up, we match them with an available partner.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Client already paid and ready to start</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>All logistics handled (kickoff, scheduling, etc)</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>You just show up and do the audit</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
              <span style="display: inline-flex; width: 48px; height: 48px; background: var(--pass); color: white; border-radius: 50%; align-items: center; justify-content: center; font-weight: 700;">2</span>
              You Perform the Audit
            </h3>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Using our tools and methodology, you test the client's AI system for vulnerabilities. Everything you need is provided: attack scripts, report templates, testing environment.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>2-3 days of testing per audit</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Aligned-1 AI helps you find vulnerabilities</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Pre-written report templates</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
              <span style="display: inline-flex; width: 48px; height: 48px; background: var(--pass); color: white; border-radius: 50%; align-items: center; justify-content: center; font-weight: 700;">3</span>
              We Quality Check
            </h3>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Submit your report. Our team reviews it for quality and completeness. We make any necessary edits and handle final delivery to the client.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>We protect the Aligned brand reputation</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>You get feedback to improve</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Client gets enterprise-quality work</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 style="font-size: 1.75rem; margin-bottom: 2rem; display: flex; align-items: center; gap: 1rem;">
              <span style="display: inline-flex; width: 48px; height: 48px; background: var(--pass); color: white; border-radius: 50%; align-items: center; justify-content: center; font-weight: 700;">4</span>
              You Get Paid
            </h3>
            <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Once the client approves the report, we pay you within 48 hours. Payments via wire transfer, ACH, or crypto. No waiting 30-60 days for payment.</p>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>80% revenue share (you keep $8K on a $10K audit)</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Paid within 48 hours of completion</span>
              </li>
              <li style="margin-bottom: 0.75rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span>Choose your next engagement or take time off</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">3-Week Training Program</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Everything you need to start earning. Free for accepted partners.</p>
        </div>

        <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; margin-bottom: 3rem; position: relative;">
          <div style="position: absolute; top: -2px; left: -2px; width: 24px; height: 24px; border-left: 2px solid var(--accent); border-top: 2px solid var(--accent); border-top-left-radius: 16px;"></div>
          <div style="position: absolute; bottom: -2px; right: -2px; width: 24px; height: 24px; border-right: 2px solid var(--accent); border-bottom: 2px solid var(--accent); border-bottom-right-radius: 16px;"></div>

          <div style="display: grid; gap: 2rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px;">
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">WEEK 1</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">Foundations</div>
              </div>
              <div>
                <h4 style="font-size: 1.125rem; margin-bottom: 0.75rem;">LLM Security Fundamentals</h4>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1rem;">Learn how LLMs work, common vulnerabilities, and attack vectors. No prior AI knowledge required.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Prompt Injection</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Jailbreaking</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Data Extraction</span>
                </div>
              </div>
            </div>

            <div style="border-top: 1px solid var(--line);"></div>

            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px;">
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">WEEK 2</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--accent);">Tools</div>
              </div>
              <div>
                <h4 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Testing Methodology & Platform</h4>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1rem;">Master our testing platform, learn to use Aligned-1 AI assistant, practice on real systems.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Testing Platform</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Attack Scripts</span>
                  <span style="padding: 0.5rem 1rem; background: var(--accent-subtle); border-radius: 6px; font-size: 0.875rem;">Report Writing</span>
                </div>
              </div>
            </div>

            <div style="border-top: 1px solid var(--line);"></div>

            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px;">
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">WEEK 3</div>
                <div style="font-size: 1.5rem; font-weight: 700; color: var(--pass);">Practice</div>
              </div>
              <div>
                <h4 style="font-size: 1.125rem; margin-bottom: 0.75rem;">Supervised Practice Audit</h4>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1rem;">Perform a full audit on a practice system with mentor guidance. Pass the certification exam. Get your first paid client.</p>
                <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
                  <span style="padding: 0.5rem 1rem; background: var(--pass-bg); color: var(--pass); border-radius: 6px; font-size: 0.875rem;">✓ Full Audit</span>
                  <span style="padding: 0.5rem 1rem; background: var(--pass-bg); color: var(--pass); border-radius: 6px; font-size: 0.875rem;">✓ Certification</span>
                  <span style="padding: 0.5rem 1rem; background: var(--pass-bg); color: var(--pass); border-radius: 6px; font-size: 0.875rem;">✓ First Client</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div style="text-align: center; padding: 2rem; background: var(--accent-subtle); border-radius: 12px;">
          <p style="font-size: 1.125rem; font-weight: 600; color: var(--fg); margin: 0;">
            💰 Training is 100% free. We only make money when you make money. Your success is our business model.
          </p>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Who Should Apply?</h2>
        </div>

        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 2rem;">
          <div style="padding: 2rem; background: var(--surface); border: 2px solid var(--pass); border-radius: 12px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; color: var(--pass);">✅ Perfect Fit</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Security professionals</strong> wanting to specialize in AI</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Software engineers</strong> with security interest</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Bug bounty hunters</strong> ready for consulting work</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Technical founders</strong> with free time</span>
              </li>
              <li style="margin-bottom: 0; display: flex; gap: 0.75rem;">
                <span>✓</span>
                <span><strong style="color: var(--fg);">Anyone technical</strong> who can learn fast</span>
              </li>
            </ul>
          </div>

          <div style="padding: 2rem; background: var(--surface); border: 2px solid var(--line); border-radius: 12px;">
            <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; color: var(--muted);">⚠️ Requirements</h3>
            <ul style="list-style: none; padding: 0; margin: 0; color: var(--muted);">
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>•</span>
                <span>Basic programming knowledge (any language)</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>•</span>
                <span>Can commit 3 weeks for training</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>•</span>
                <span>Available 20-40 hours/month after training</span>
              </li>
              <li style="margin-bottom: 1rem; display: flex; gap: 0.75rem;">
                <span>•</span>
                <span>Strong written communication skills</span>
              </li>
              <li style="margin-bottom: 0; display: flex; gap: 0.75rem;">
                <span>•</span>
                <span>Based in US, Canada, UK, or EU (for now)</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Partner Success Stories</h2>
        </div>

        <div style="display: grid; gap: 2rem;">
          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: var(--pass-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 0.5rem;">👨‍💻</div>
              </div>
              <div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); margin-bottom: 1rem; font-style: italic;">"I was a full-stack engineer earning $150K/year. Joined Aligned as a side hustle, earned $47K in my first quarter working nights and weekends. Just quit my job to do this full-time."</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Marcus T.</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Former Senior Engineer @ Stripe</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--pass);">$47K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">First Quarter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: var(--pass-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 0.5rem;">👩‍💼</div>
              </div>
              <div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); margin-bottom: 1rem; font-style: italic;">"I ran a security consulting firm but struggled to find clients. Aligned sends me 2-3 clients per month. I keep 80% of revenue with none of the sales headaches. Best business decision I've made."</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Sarah M.</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Independent Security Consultant</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--pass);">$127K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Last Quarter</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 80px; text-align: center;">
                <div style="width: 80px; height: 80px; background: var(--pass-bg); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; margin-bottom: 0.5rem;">🎓</div>
              </div>
              <div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); margin-bottom: 1rem; font-style: italic;">"Fresh out of college with a CS degree. Couldn't land a FAANG job. Three months later I'm earning more than my friends who got into Google. And I work from home."</p>
                <div style="display: flex; justify-content: space-between; align-items: center;">
                  <div>
                    <div style="font-weight: 600; margin-bottom: 0.25rem;">Alex C.</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Recent CS Graduate</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 1.5rem; font-weight: 700; color: var(--pass);">$31K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">First 3 Months</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">How much does training cost?</h4>
            <p style="color: var(--muted); margin: 0;">Zero. Training is 100% free. We only make money (20% platform fee) when you complete paid audits. Your success = our success.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Do I need AI security experience?</h4>
            <p style="color: var(--muted); margin: 0;">No. We train you from scratch. You need basic technical skills (programming, command line) but we teach all the AI security specifics.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">How many audits can I do per month?</h4>
            <p style="color: var(--muted); margin: 0;">You control the volume. Each audit takes 2-3 days. Most partners do 2-4 per month part-time. Full-time partners do 6-8 per month.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What if I don't like it after training?</h4>
            <p style="color: var(--muted); margin: 0;">No commitment. If you complete training and decide it's not for you, walk away. No fees, no penalties. We'd rather you discover that in week 1 than waste your time.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Is this 1099 contractor work or W2?</h4>
            <p style="color: var(--muted); margin: 0;">1099 contractor. You're self-employed, set your own hours, and choose which audits to accept. Perfect for side income or full-time independence.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="background: var(--pass); color: white; border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: white; font-size: 3rem; margin-bottom: 1rem;">Ready to Start Earning?</h2>
          <p style="font-size: 1.5rem; margin-bottom: 1rem; opacity: 0.95;">Next cohort starts November 15, 2026</p>
          <p style="font-size: 1.125rem; margin-bottom: 2.5rem; opacity: 0.85;">Limited to 15 partners per cohort. Apply now to secure your spot.</p>

          <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: var(--pass); border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem;">Apply for November Cohort</a>
          </div>

          <p style="font-size: 0.875rem; opacity: 0.8;">✓ 100% free training • ✓ Guaranteed first client • ✓ 80% revenue share • ✓ No sales required</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/partners.html">Partner Network</a></li>
            <li><a href="/express.html">Express Certification</a></li>
            <li><a href="/bounty.html">Penetration Testing</a></li>
            <li><a href="/shield.html">Shield Pro</a></li>
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
            <li><a href="mailto:contribute@alignedsafely.com">Email Us</a></li>
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
