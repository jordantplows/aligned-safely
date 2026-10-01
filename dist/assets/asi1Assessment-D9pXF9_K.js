import"./style-DP_wUZhT.js";import{t as e}from"./asi-1-controls-DJBW_-Ta.js";var t={Consumer:`Uses third-party AI vendors and services (ChatGPT, Claude, etc.) for internal work. Assessment covers vendor vetting, data handling, access controls, and governance.`,Deployer:`Builds on foundation-model APIs — chatbots, copilots, agents, RAG systems. Assessment covers input/output security, agent controls, prompt injection defenses, and monitoring.`,Builder:`Trains, fine-tunes, or hosts its own models. Assessment includes all Deployer controls plus training-data governance, model-theft protection, and adversarial testing.`},n=`asi-1-assessment-state`;function r(){let e={profile:null,usesAgents:!1,answers:{},currentStep:`profile`,currentQuestionIndex:0};try{let t=localStorage.getItem(n);if(t)return{...e,...JSON.parse(t)}}catch(e){console.warn(`Failed to load assessment state from localStorage`,e)}return e}function i(e){try{localStorage.setItem(n,JSON.stringify(e))}catch(e){console.warn(`Failed to save assessment state to localStorage`,e)}}function a(){try{localStorage.removeItem(n)}catch(e){console.warn(`Failed to clear assessment state from localStorage`,e)}}function o(t,n){let r=e.filter(e=>e.profiles.includes(t));return r=r.map(e=>e.ref===`AGT-2`?{...e,isCore:n}:e),r}function s(e,t,n){let r=o(t,n),i=e=>typeof e==`number`&&e>=2,a=0,s=0,c=0,l={},u=[];r.forEach(t=>{let n=e[t.ref]?.level??0,r=i(n);r&&a++,t.isCore?(c++,r?s++:u.push({control:t,isCoreGap:!0})):r||u.push({control:t,isCoreGap:!1}),l[t.domain]||(l[t.domain]={passed:0,total:0}),l[t.domain].total++,r&&l[t.domain].passed++});let d=r.length>0?a/r.length*100:0,f=s===c&&d>=85;return u.sort((e,t)=>e.isCoreGap&&!t.isCoreGap?-1:!e.isCoreGap&&t.isCoreGap?1:0),{overallPct:d,corePassed:s,coreTotal:c,perDomain:l,gaps:u,ready:f}}var c=r();function l(){switch(i(c),c.currentStep){case`profile`:u();break;case`questionnaire`:d();break;case`result`:f()}}function u(){let e=document.querySelector(`#app`);e.innerHTML=`
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
          <a href="/asi-1.html" class="nav-link">ASI-1</a>
          <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
        </div>
      </nav>

      <section class="asi-section">
        <div class="asi-container asi-container-narrow">
          <h1 class="asi-section-title">ASI-1 Self-Assessment</h1>
          <p class="asi-assessment-intro">Get a preliminary, unverified readiness indication by answering maturity questions for each control in your profile. This is <strong>not</strong> an attestation—it's a self-reported assessment to help you understand where you stand before requesting a verified assessment.</p>

          <div class="asi-data-notice">
            <h3>Data handling</h3>
            <p>Your answers stay in your browser unless you choose to submit them. We collect only what's needed to provide guidance. No answers are sent to analytics or third parties.</p>
          </div>

          <form id="profile-form" class="asi-profile-form">
            <fieldset>
              <legend class="asi-form-legend">Select your profile</legend>
              <p class="asi-form-help">Choose the profile that best describes how your organization uses AI:</p>

              <div class="asi-profile-options">
                <label class="asi-profile-option">
                  <input type="radio" name="profile" value="Consumer" required />
                  <div class="asi-profile-option-content">
                    <div class="asi-profile-option-header">
                      <span class="asi-profile-option-badge">Consumer</span>
                    </div>
                    <p class="asi-profile-option-desc">${t.Consumer}</p>
                  </div>
                </label>

                <label class="asi-profile-option">
                  <input type="radio" name="profile" value="Deployer" required />
                  <div class="asi-profile-option-content">
                    <div class="asi-profile-option-header">
                      <span class="asi-profile-option-badge">Deployer</span>
                    </div>
                    <p class="asi-profile-option-desc">${t.Deployer}</p>
                  </div>
                </label>

                <label class="asi-profile-option">
                  <input type="radio" name="profile" value="Builder" required />
                  <div class="asi-profile-option-content">
                    <div class="asi-profile-option-header">
                      <span class="asi-profile-option-badge">Builder</span>
                    </div>
                    <p class="asi-profile-option-desc">${t.Builder}</p>
                  </div>
                </label>
              </div>
            </fieldset>

            <fieldset class="asi-agents-fieldset">
              <legend class="asi-form-legend">Do you operate AI agents?</legend>
              <p class="asi-form-help">AI agents that can take actions on your behalf (e.g., code execution, API calls, data operations). This affects whether AGT-2 (Human-in-the-loop gates) is considered a Core control.</p>

              <div class="asi-radio-group">
                <label class="asi-radio-label">
                  <input type="radio" name="uses-agents" value="yes" required />
                  <span>Yes, we operate AI agents</span>
                </label>
                <label class="asi-radio-label">
                  <input type="radio" name="uses-agents" value="no" required />
                  <span>No, we don't operate AI agents</span>
                </label>
              </div>
            </fieldset>

            <button type="submit" class="asi-btn-primary">Start Assessment</button>
          </form>
        </div>
      </section>

      <footer>
        <div class="footer-main">
          <div class="footer-column">
            <h4>Platform</h4>
            <ul class="footer-links">
              <li><a href="/bounty.html">Penetration Testing</a></li>
              <li><a href="/trust.html">ASI-2 Certification</a></li>
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
        <div class="footer-bottom">
          <div class="footer-brand">
            <span class="footer-logo">Aligned</span>
            <span class="footer-copyright">© 2026 Aligned. All rights reserved.</span>
          </div>
          <div class="footer-legal">
            <a href="/terms.html">Terms of Service</a>
            <a href="/privacy.html">Privacy Policy</a>
            <a href="/security.html">Security</a>
          </div>
        </div>
      </footer>
    </div>
  `;let n=document.getElementById(`profile-form`);n.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(n);c.profile=t.get(`profile`),c.usesAgents=t.get(`uses-agents`)===`yes`,c.currentStep=`questionnaire`,c.currentQuestionIndex=0,l()})}function d(){if(!c.profile){c.currentStep=`profile`,l();return}let e=o(c.profile,c.usesAgents),t=e[c.currentQuestionIndex];if(!t){c.currentStep=`result`,l();return}let n=document.querySelector(`#app`),r=(c.currentQuestionIndex+1)/e.length*100,i=c.answers[t.ref];n.innerHTML=`
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
          <a href="/asi-1.html" class="nav-link">ASI-1</a>
          <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
        </div>
      </nav>

      <section class="asi-section">
        <div class="asi-container asi-container-narrow">
          <div class="asi-questionnaire-header">
            <div class="asi-progress-header">
              <h2 class="asi-questionnaire-title">Assessment for ${c.profile}</h2>
              <p class="asi-progress-text">Question ${c.currentQuestionIndex+1} of ${e.length}</p>
            </div>
            <div class="asi-progress-bar">
              <div class="asi-progress-fill" style="width: ${r}%"></div>
            </div>
          </div>

          <form id="question-form" class="asi-question-form">
            <fieldset>
              <legend class="asi-question-legend">
                <div class="asi-question-header">
                  <code class="asi-control-ref">${t.ref}</code>
                  ${t.isCore?`<span class="asi-core-badge">Core</span>`:``}
                </div>
                <h3 class="asi-question-title">${t.name}</h3>
              </legend>

              <p class="asi-question-criterion" id="criterion-desc"><strong>Pass criterion:</strong> ${t.passCriterion}</p>

              <div class="asi-maturity-options" role="radiogroup" aria-describedby="criterion-desc">
                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="0" ${i?.level===0?`checked`:``} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">0</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Absent</span>
                      <span class="asi-maturity-desc">No control in place</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="1" ${i?.level===1?`checked`:``} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">1</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Ad hoc</span>
                      <span class="asi-maturity-desc">Informal/inconsistent, not documented</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="2" ${i?.level===2?`checked`:``} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">2</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Defined</span>
                      <span class="asi-maturity-desc">Documented, consistently applied</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="3" ${i?.level===3?`checked`:``} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">3</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Managed</span>
                      <span class="asi-maturity-desc">Measured, reviewed, improved</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option asi-maturity-option-unsure">
                  <input type="radio" name="level" value="not-sure" ${i?.level===`not-sure`?`checked`:``} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-details">
                      <span class="asi-maturity-label">Not sure</span>
                      <span class="asi-maturity-desc">Treated as not passing; flagged for review</span>
                    </span>
                  </div>
                </label>
              </div>

              <div class="asi-question-notes">
                <label for="notes" class="asi-notes-label">Evidence / Notes (optional)</label>
                <textarea
                  id="notes"
                  name="notes"
                  rows="3"
                  placeholder="Describe your controls, provide context, or note areas for improvement..."
                  class="asi-notes-textarea"
                >${i?.notes||``}</textarea>
              </div>
            </fieldset>

            <div class="asi-question-actions">
              <button type="button" id="back-btn" class="asi-btn-secondary" ${c.currentQuestionIndex===0?`disabled`:``}>
                ← Previous
              </button>
              <button type="submit" class="asi-btn-primary">
                ${c.currentQuestionIndex<e.length-1?`Next →`:`View Results`}
              </button>
            </div>
          </form>

          <div class="asi-questionnaire-meta">
            <p><strong>Domain:</strong> ${t.domain}</p>
            <p><strong>Maps to:</strong> ${t.owaspMap}</p>
          </div>
        </div>
      </section>
    </div>
  `;let a=document.getElementById(`question-form`);a.addEventListener(`submit`,e=>{e.preventDefault();let n=new FormData(a),r=n.get(`level`),i=r===`not-sure`?`not-sure`:parseInt(r),o=n.get(`notes`).trim();c.answers[t.ref]={controlRef:t.ref,level:i,notes:o||void 0},c.currentQuestionIndex++,l()}),document.getElementById(`back-btn`)?.addEventListener(`click`,()=>{c.currentQuestionIndex>0&&(c.currentQuestionIndex--,l())})}function f(){if(!c.profile){c.currentStep=`profile`,l();return}let e=s(c.answers,c.profile,c.usesAgents),t=document.querySelector(`#app`),n=``;for(let t in e.perDomain){let{passed:r,total:i}=e.perDomain[t],a=i>0?(r/i*100).toFixed(0):`0`;n+=`
      <div class="asi-result-domain">
        <div class="asi-result-domain-header">
          <span class="asi-result-domain-name">${t}</span>
          <span class="asi-result-domain-score">${r}/${i} passed (${a}%)</span>
        </div>
        <div class="asi-result-domain-bar">
          <div class="asi-result-domain-fill" style="width: ${a}%"></div>
        </div>
      </div>
    `}let i=``;e.gaps.length>0?e.gaps.forEach(e=>{i+=`
        <div class="asi-gap-item ${e.isCoreGap?`asi-gap-core`:``}">
          <div class="asi-gap-header">
            <code class="asi-control-ref">${e.control.ref}</code>
            ${e.isCoreGap?`<span class="asi-core-badge">Core Gap</span>`:``}
          </div>
          <h4 class="asi-gap-name">${e.control.name}</h4>
          <p class="asi-gap-criterion"><strong>To pass:</strong> ${e.control.passCriterion}</p>
        </div>
      `}):i=`<p class="asi-no-gaps">No gaps identified. All in-scope controls pass.</p>`,t.innerHTML=`
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
          <a href="/asi-1.html" class="nav-link">ASI-1</a>
          <a href="https://cal.com/jplows" target="_blank" class="nav-link">Book a Call</a>
        </div>
      </nav>

      <section class="asi-section">
        <div class="asi-container asi-container-narrow">
          <div class="asi-result-header">
            <h1 class="asi-section-title">Assessment Results</h1>
            <div class="asi-result-disclaimer">
              <strong>Important:</strong> This is a preliminary, self-reported, <strong>unverified</strong> self-assessment. It is NOT an ASI-1 attestation, certification, or badge. A real ASI-1 attestation requires evidence review and verification by qualified assessors.
            </div>
          </div>

          <div class="asi-result-summary ${e.ready?`asi-result-ready`:`asi-result-not-ready`}">
            <div class="asi-result-status">
              <h2 class="asi-result-status-title">${e.ready?`Assessment-Ready`:`Not Assessment-Ready`}</h2>
              <p class="asi-result-status-desc">
                ${e.ready?`Based on your self-assessment, you'd likely be <strong>ready to pursue</strong> a verified ASI-1 assessment.`:`Your self-assessment indicates gaps that should be addressed before pursuing a verified ASI-1 assessment.`}
              </p>
            </div>

            <div class="asi-result-metrics">
              <div class="asi-result-metric">
                <div class="asi-result-metric-value">${e.overallPct.toFixed(0)}%</div>
                <div class="asi-result-metric-label">Overall controls passed</div>
                <div class="asi-result-metric-note">Need ≥85% to pass</div>
              </div>
              <div class="asi-result-metric">
                <div class="asi-result-metric-value">${e.corePassed}/${e.coreTotal}</div>
                <div class="asi-result-metric-label">Core controls passed</div>
                <div class="asi-result-metric-note">Must pass all Core</div>
              </div>
            </div>
          </div>

          <div class="asi-result-section">
            <h3 class="asi-result-section-title">Per-domain breakdown</h3>
            <div class="asi-result-domains">
              ${n}
            </div>
          </div>

          ${e.gaps.length>0?`
          <div class="asi-result-section">
            <h3 class="asi-result-section-title">Control gaps (${e.gaps.length})</h3>
            <p class="asi-result-section-desc">Controls that did not pass. Core gaps are shown first.</p>
            <div class="asi-gaps-list">
              ${i}
            </div>
          </div>
          `:``}

          <div class="asi-result-actions">
            <button id="download-btn" class="asi-btn-secondary">Download Results</button>
            <button id="request-btn" class="asi-btn-primary">Request Verified Assessment</button>
          </div>

          <div class="asi-result-footer">
            <button id="restart-btn" class="asi-btn-link">← Start a new assessment</button>
          </div>
        </div>
      </section>

      <div id="request-modal" class="asi-modal" style="display: none;">
        <div class="asi-modal-overlay" id="modal-overlay"></div>
        <div class="asi-modal-content">
          <button class="asi-modal-close" id="modal-close" aria-label="Close">&times;</button>
          <h3 class="asi-modal-title">Request Verified Assessment</h3>
          <p class="asi-modal-desc">
            A verified ASI-1 assessment requires evidence review by qualified assessors. Provide your contact information and we'll reach out within 2 business days.
          </p>

          <form id="lead-form" class="asi-lead-form">
            <div class="form-group">
              <label for="lead-name">Name</label>
              <input type="text" id="lead-name" name="name" required />
            </div>
            <div class="form-group">
              <label for="lead-email">Work Email</label>
              <input type="email" id="lead-email" name="email" required />
            </div>
            <div class="form-group">
              <label for="lead-company">Company</label>
              <input type="text" id="lead-company" name="company" required />
            </div>
            <div class="form-group">
              <label class="asi-checkbox-label">
                <input type="checkbox" name="share-answers" id="share-answers" />
                <span>Share my self-assessment answers to expedite the process</span>
              </label>
            </div>

            <div class="asi-modal-actions">
              <button type="button" id="cancel-btn" class="asi-btn-secondary">Cancel</button>
              <button type="submit" class="asi-btn-primary">Submit Request</button>
            </div>
          </form>

          <div id="lead-result" style="display: none;">
            <p class="asi-lead-result-message">Thank you for your interest. Please contact us directly at:</p>
            <div class="asi-contact-email">
              <code class="asi-contact-value" id="contact-email">PLACEHOLDER_CONTACT_EMAIL</code>
              <button class="asi-copy-btn" id="copy-email-btn" aria-label="Copy email address">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                  <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
              </button>
            </div>
            <p class="asi-lead-result-note">Include your name, company, and mention this self-assessment. We'll respond within 2 business days.</p>
          </div>
        </div>
      </div>
    </div>
  `,document.getElementById(`download-btn`)?.addEventListener(`click`,()=>{p(c.profile,c.usesAgents,c.answers,e)});let o=document.getElementById(`request-btn`),u=document.getElementById(`request-modal`),d=document.getElementById(`modal-overlay`),f=document.getElementById(`modal-close`),m=document.getElementById(`cancel-btn`),h=()=>{u.style.display=`block`,document.body.style.overflow=`hidden`},g=()=>{u.style.display=`none`,document.body.style.overflow=``};o?.addEventListener(`click`,h),f?.addEventListener(`click`,g),d?.addEventListener(`click`,g),m?.addEventListener(`click`,g);let _=document.getElementById(`lead-form`),v=document.getElementById(`lead-result`);_?.addEventListener(`submit`,e=>{e.preventDefault(),_.style.display=`none`,v.style.display=`block`});let y=document.getElementById(`copy-email-btn`),b=document.getElementById(`contact-email`);y?.addEventListener(`click`,async()=>{let e=b?.textContent||``;try{await navigator.clipboard.writeText(e);let t=y.innerHTML;y.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`,setTimeout(()=>{y.innerHTML=t},2e3)}catch(e){console.error(`Failed to copy:`,e)}}),document.getElementById(`restart-btn`)?.addEventListener(`click`,()=>{confirm(`Start a new assessment? Your current results will be cleared.`)&&(a(),c=r(),l())})}function p(e,t,n,r){let i=new Date().toISOString().split(`T`)[0],a=o(e,t),s=`ASI-1 SELF-ASSESSMENT RESULTS
(Self-reported, unverified — NOT an attestation)

Generated: ${i}
Profile: ${e}
Uses AI Agents: ${t?`Yes`:`No`}

SUMMARY
Overall: ${r.overallPct.toFixed(0)}% of controls passed (need ≥85%)
Core: ${r.corePassed}/${r.coreTotal} Core controls passed (must pass all)
Status: ${r.ready?`Ready to pursue verified assessment`:`Not ready — gaps must be addressed`}

PER-DOMAIN BREAKDOWN
`;for(let e in r.perDomain){let{passed:t,total:n}=r.perDomain[e],i=n>0?(t/n*100).toFixed(0):`0`;s+=`${e}: ${t}/${n} (${i}%)\n`}r.gaps.length>0&&(s+=`\nCONTROL GAPS (${r.gaps.length})\n`,r.gaps.forEach(e=>{s+=`\n${e.control.ref} - ${e.control.name}${e.isCoreGap?` [CORE GAP]`:``}\n`,s+=`Pass criterion: ${e.control.passCriterion}\n`})),s+=`
ALL ANSWERS
`,a.forEach(e=>{let t=n[e.ref],r=t?.level??`no answer`;s+=`\n${e.ref} - ${e.name}${e.isCore?` [CORE]`:``}\n`,s+=`Level: ${r}\n`,t?.notes&&(s+=`Notes: ${t.notes}\n`)}),s+=`
---
This is a self-assessment. A real ASI-1 attestation requires evidence review and verification.`;let c=new Blob([s],{type:`text/plain`}),l=URL.createObjectURL(c),u=document.createElement(`a`);u.href=l,u.download=`asi-1-self-assessment-${i}.txt`,u.click(),URL.revokeObjectURL(l)}l();