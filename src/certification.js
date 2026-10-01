import "./style.css";
const app = document.querySelector("#app");
app.innerHTML = `
  <div class="page">
    <div class="banner">
      <span class="banner-text">🚀 January cohort: 12 graduates launched practices • Avg first-month revenue: $28K</span>
      <a href="https://cal.com/jplows" target="_blank" class="banner-cta">Join February Cohort</a>
    </div>
    <nav>
      <span class="mark">Aligned</span>
      <div class="nav-links">
        <a href="/" class="nav-link">Home</a>
        <a href="/pricing.html" class="nav-link">Pricing</a>
        <a href="/certification.html" class="nav-link" style="color: var(--accent); font-weight: 600;">Certification</a>
        <a href="/trust.html" class="nav-link">Trust Center</a>
        <a href="/asi-1.html" class="nav-link">ASI-1</a>
        <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
      </div>
    </nav>

    <section class="asi-hero" style="background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%);">
      <div class="asi-hero-content">
        <div style="display: inline-block; padding: 0.5rem 1rem; background: rgba(255,255,255,0.2); border-radius: 4px; margin-bottom: 1.5rem;">
          <span style="color: white; font-size: 0.875rem; font-weight: 600; letter-spacing: 0.05em;">🎓 PROFESSIONAL CERTIFICATION</span>
        </div>
        <h1 class="asi-hero-title" style="color: white; font-size: 4rem;">Launch Your AI Security<br/>Consulting Practice</h1>
        <p class="asi-hero-subtitle" style="color: rgba(255,255,255,0.95); font-size: 1.75rem; max-width: 900px; margin: 0 auto 2rem; font-weight: 600;">Get certified in 4 weeks. Build a practice charging $10K-$50K per client.</p>

        <div style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px); border-radius: 16px; padding: 2.5rem; max-width: 900px; margin: 0 auto 2.5rem; border: 2px solid rgba(255,255,255,0.3); color: var(--fg);">
          <div style="display: grid; grid-template-columns: 1fr auto 1fr; gap: 2rem; align-items: center;">
            <div style="text-align: center;">
              <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">YOUR INVESTMENT</div>
              <div style="font-size: 3rem; font-weight: 700; color: var(--fg);">$2,500</div>
              <div style="font-size: 0.875rem; color: var(--muted);">One-time • 4 weeks</div>
            </div>
            <div style="font-size: 3rem; color: var(--muted); font-weight: 300;">→</div>
            <div style="text-align: center;">
              <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted); margin-bottom: 0.5rem;">YOUR EARNINGS</div>
              <div style="font-size: 3rem; font-weight: 700; color: #6366F1;">$10K-$50K</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Per client • You keep 100%</div>
            </div>
          </div>
        </div>

        <div class="asi-hero-actions">
          <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: #6366F1; border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem; box-shadow: 0 8px 32px rgba(0,0,0,0.3);">Enroll in February Cohort →</a>
        </div>

        <p style="font-size: 0.875rem; color: rgba(255,255,255,0.85); margin-top: 1.5rem;">✓ First 3 clients guaranteed or money back • ✓ Lifetime certification • ✓ Own your practice 100%</p>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">The Business Model</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">How AI security consultants are building $200K+ practices</p>
        </div>

        <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 16px; padding: 3rem; margin-bottom: 3rem;">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; margin-bottom: 2rem;">
            <div style="text-align: center; padding: 1.5rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📧</div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">5-10</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Outbound emails per day</div>
            </div>
            <div style="text-align: center; padding: 1.5rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">📞</div>
              <div style="font-size: 1.5rem; font-weight: 700; color: var(--fg); margin-bottom: 0.5rem;">3-5</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Discovery calls per week</div>
            </div>
            <div style="text-align: center; padding: 1.5rem;">
              <div style="font-size: 2.5rem; margin-bottom: 0.5rem;">💰</div>
              <div style="font-size: 1.5rem; font-weight: 700; color: #6366F1; margin-bottom: 0.5rem;">$30K+</div>
              <div style="font-size: 0.875rem; color: var(--muted);">Revenue per month</div>
            </div>
          </div>

          <div style="border-top: 2px solid var(--line); padding-top: 2rem;">
            <h3 style="font-size: 1.25rem; margin-bottom: 1.5rem; text-align: center;">Typical Client Acquisition Cost</h3>
            <div style="background: var(--bg); border-radius: 8px; padding: 2rem;">
              <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="color: var(--muted);">LinkedIn Sales Navigator:</span>
                <span style="font-weight: 600;">$100/month</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="color: var(--muted);">Email finder tools:</span>
                <span style="font-weight: 600;">$50/month</span>
              </div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 1rem;">
                <span style="color: var(--muted);">Time investment:</span>
                <span style="font-weight: 600;">~5 hours/week</span>
              </div>
              <div style="border-top: 2px solid var(--line); margin-top: 1rem; padding-top: 1rem; display: flex; justify-content: space-between; font-size: 1.125rem;">
                <span style="font-weight: 600;">Cost per $10K client:</span>
                <span style="font-weight: 700; color: #6366F1;">~$150</span>
              </div>
            </div>
          </div>
        </div>

        <div style="background: #EEF2FF; border: 2px solid #6366F1; border-radius: 12px; padding: 2rem; text-align: center;">
          <p style="font-size: 1.25rem; font-weight: 600; color: var(--fg); margin: 0;">
            💡 Land 1 client per month = $120K/year practice. Land 3-5 clients per month = $300K-$600K/year.
          </p>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1200px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">4-Week Curriculum</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Everything you need to launch a profitable practice</p>
        </div>

        <div style="display: grid; gap: 2rem;">
          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 120px;">
                <div style="width: 80px; height: 80px; background: #6366F1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">1</div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted);">WEEK ONE</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">AI Security Fundamentals</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Master LLM vulnerabilities, attack vectors, and security frameworks. Learn what Fortune 500 CISOs care about.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Prompt Injection</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">5 attack patterns</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Data Exfiltration</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">7 techniques</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Jailbreaking</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">9 methods</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 120px;">
                <div style="width: 80px; height: 80px; background: #6366F1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">2</div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted);">WEEK TWO</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Business Operations</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Set up your business properly. LLC formation, contracts, insurance, invoicing, taxes. The boring stuff that makes you professional.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Legal Structure</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">LLC templates</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Contracts</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">MSA, SOW, NDA</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Insurance</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">E&O coverage</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 120px;">
                <div style="width: 80px; height: 80px; background: #6366F1; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">3</div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted);">WEEK THREE</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Sales & Client Acquisition</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Learn to find and close clients. Outbound sequences, discovery call scripts, proposal templates, objection handling, pricing strategies.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Prospecting</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Email templates</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Discovery Calls</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Script + practice</div>
                  </div>
                  <div style="padding: 1rem; background: var(--bg); border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem;">Closing</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Proposal builder</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem; border: 3px solid #6366F1;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 120px;">
                <div style="width: 80px; height: 80px; background: #10B981; color: white; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 700; margin-bottom: 0.5rem;">✓</div>
                <div style="font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; color: var(--muted);">WEEK FOUR</div>
              </div>
              <div style="flex: 1;">
                <h3 style="font-size: 1.5rem; margin-bottom: 1rem;">Live Practice & Launch</h3>
                <p style="color: var(--muted); line-height: 1.75; margin-bottom: 1.5rem;">Conduct a supervised audit on a real client. Get certified. Launch your practice with our help finding your first 3 clients.</p>
                <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 1rem;">
                  <div style="padding: 1rem; background: #ECFDF5; border: 2px solid #10B981; border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem; color: #10B981;">✓ Certification</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Official badge</div>
                  </div>
                  <div style="padding: 1rem; background: #ECFDF5; border: 2px solid #10B981; border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem; color: #10B981;">✓ First Audit</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">Supervised</div>
                  </div>
                  <div style="padding: 1rem; background: #ECFDF5; border: 2px solid #10B981; border-radius: 8px;">
                    <div style="font-weight: 600; margin-bottom: 0.5rem; font-size: 0.875rem; color: #10B981;">✓ Client Intros</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">3 warm leads</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Graduate Success Stories</h2>
          <p style="font-size: 1.125rem; color: var(--muted);">Real results from January 2026 cohort</p>
        </div>

        <div style="display: grid; gap: 2rem;">
          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px; text-align: center;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 0.5rem; color: white; font-weight: 700;">JW</div>
              </div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                  <div>
                    <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">James Wilson</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Former Security Engineer @ Microsoft • Seattle, WA</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 2rem; font-weight: 700; color: #6366F1;">$67K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">First 60 days</div>
                  </div>
                </div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); font-style: italic; margin: 0;">"I was making $180K as a staff engineer. Quit 6 weeks after certification because I closed 5 clients in my first month. On track for $400K this year working 4 days a week from home."</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px; text-align: center;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 0.5rem; color: white; font-weight: 700;">MP</div>
              </div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                  <div>
                    <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">Maria Patel</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Independent Security Consultant • Austin, TX</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 2rem; font-weight: 700; color: #6366F1;">$42K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">First month</div>
                  </div>
                </div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); font-style: italic; margin: 0;">"I was already doing security consulting but couldn't charge more than $5K. The sales training and positioning alone was worth 10x the $2,500 investment. Now charging $15K-$25K per engagement."</p>
              </div>
            </div>
          </div>

          <div class="standard-card" style="padding: 2.5rem;">
            <div style="display: flex; gap: 2rem; align-items: start;">
              <div style="min-width: 100px; text-align: center;">
                <div style="width: 100px; height: 100px; background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin-bottom: 0.5rem; color: white; font-weight: 700;">DK</div>
              </div>
              <div style="flex: 1;">
                <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 1rem;">
                  <div>
                    <div style="font-size: 1.25rem; font-weight: 700; margin-bottom: 0.25rem;">David Kim</div>
                    <div style="font-size: 0.875rem; color: var(--muted);">Former Product Manager @ Stripe • San Francisco, CA</div>
                  </div>
                  <div style="text-align: right;">
                    <div style="font-size: 2rem; font-weight: 700; color: #6366F1;">$28K</div>
                    <div style="font-size: 0.75rem; color: var(--muted);">First month</div>
                  </div>
                </div>
                <p style="font-size: 1.125rem; line-height: 1.75; color: var(--fg); font-style: italic; margin: 0;">"Zero security background. Closed 2 clients in Week 3 of the program by reaching out to my PM network. Making more money and having way more fun than product management."</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section asi-section-alt">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2.5rem; margin-bottom: 1rem;">Our Guarantee</h2>
        </div>

        <div style="background: var(--surface); border: 3px solid #6366F1; border-radius: 16px; padding: 3rem; text-align: center;">
          <div style="font-size: 3rem; margin-bottom: 1.5rem;">🎯</div>
          <h3 style="font-size: 2rem; margin-bottom: 1.5rem;">First 3 Clients or Full Refund</h3>
          <p style="font-size: 1.125rem; color: var(--muted); line-height: 1.75; max-width: 700px; margin: 0 auto 2rem;">If you complete the program and don't land your first 3 paying clients within 90 days, we'll refund your entire $2,500. No questions asked.</p>
          <div style="background: #EEF2FF; border-radius: 8px; padding: 1.5rem; max-width: 600px; margin: 0 auto;">
            <p style="font-size: 0.875rem; color: var(--muted); margin: 0;"><strong style="color: var(--fg);">Fine print:</strong> You must complete all 4 weeks, submit proof of 50 outbound emails, and conduct 5 discovery calls. We track your progress.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 800px; margin: 0 auto;">
        <div style="text-align: center; margin-bottom: 3rem;">
          <h2 style="font-size: 2rem; margin-bottom: 1rem;">Common Questions</h2>
        </div>

        <div style="display: grid; gap: 1.5rem;">
          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Can I do this while working full-time?</h4>
            <p style="color: var(--muted); margin: 0;">Yes. Training is self-paced with 1-2 live calls per week. Most students keep their job during training and start consulting on nights/weekends. Many quit their job after landing 2-3 clients.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">Do I need security experience?</h4>
            <p style="color: var(--muted); margin: 0;">Technical background helps but security experience is not required. We've certified PMs, engineers, technical founders, and even sales people. You need to be technical enough to understand code and APIs.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">How is this different from the Partner Network?</h4>
            <p style="color: var(--muted); margin: 0;">Partner Network: we send you clients, you earn 80%. Certification: you find your own clients, you keep 100%. This program is for people who want to build their own independent practice.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">How do you help me find my first 3 clients?</h4>
            <p style="color: var(--muted); margin: 0;">Week 4 includes warm introductions to companies in our network that need AI security work. We also review your outbound campaigns and give you our proven email templates and scripts.</p>
          </div>

          <div style="background: var(--surface); border: 2px solid var(--line); border-radius: 12px; padding: 2rem;">
            <h4 style="font-size: 1.125rem; font-weight: 600; margin-bottom: 0.75rem;">What if I don't want to quit my job?</h4>
            <p style="color: var(--muted); margin: 0;">Perfect. Most graduates do 1-2 clients per month as a side business earning $10K-$20K extra. That's $120K-$240K per year on top of your salary.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="asi-section">
      <div class="asi-container" style="max-width: 1000px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg, #6366F1 0%, #4F46E5 100%); color: white; border-radius: 16px; padding: 4rem; text-align: center;">
          <h2 style="color: white; font-size: 3rem; margin-bottom: 1rem;">February Cohort Opens Feb 1</h2>
          <p style="font-size: 1.5rem; margin-bottom: 1rem; opacity: 0.95;">$2,500 one-time investment • 4 weeks to certification • Lifetime earning potential</p>
          <p style="font-size: 1.125rem; margin-bottom: 2.5rem; opacity: 0.85;">Limited to 20 students. January cohort sold out in 4 days.</p>

          <div style="display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
            <a href="https://cal.com/jplows" target="_blank" class="asi-btn-primary" style="background: white; color: #6366F1; border-color: white; font-size: 1.25rem; padding: 1.25rem 3rem;">Reserve Your Spot →</a>
          </div>

          <p style="font-size: 0.875rem; opacity: 0.8;">✓ First 3 clients guaranteed or money back • ✓ $150/month payment plan available • ✓ Lifetime certification</p>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-main">
        <div class="footer-column">
          <h4>Platform</h4>
          <ul class="footer-links">
            <li><a href="/certification.html">Certification</a></li>
            <li><a href="/partners.html">Partner Network</a></li>
            <li><a href="/express.html">Express Certification</a></li>
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
