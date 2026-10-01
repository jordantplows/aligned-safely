import"./style-DP_wUZhT.js";import{t as e}from"./asi-1-controls-DJBW_-Ta.js";var t=document.querySelector(`#app`);t.innerHTML=`
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
        <a href="mailto:contribute@alignedsafely.com" class="nav-link">Contact</a>
      </div>
    </nav>

    <!-- Hero Section -->
    <section class="asi-hero">
      <div class="asi-hero-content">
        <h1 class="asi-hero-title">ASI-1</h1>
        <p class="asi-hero-subtitle">Independent AI-security attestation for companies deploying and building AI systems</p>
        <div class="asi-hero-actions">
          <a href="/asi-1-assessment.html" class="asi-btn-primary">Take Self-Assessment</a>
          <a href="#catalog" class="asi-btn-secondary">See the Framework</a>
        </div>
      </div>
    </section>

    <!-- What ASI-1 Covers -->
    <section class="asi-section">
      <div class="asi-container">
        <div class="asi-dual-blocks">
          <div class="asi-block">
            <h2>What ASI-1 covers</h2>
            <p>ASI-1 assesses the security controls companies need to deploy and operate AI systems safely—covering risks that general security standards don't reach:</p>
            <ul class="asi-risk-list">
              <li>Prompt injection and jailbreaking</li>
              <li>Model and prompt exfiltration</li>
              <li>Unsafe agent actions and excessive agency</li>
              <li>Training and retrieval-data poisoning</li>
              <li>Sensitive-information disclosure through model outputs</li>
            </ul>
          </div>
          <div class="asi-block asi-block-contrast">
            <h2>ASI-1 is not SOC 2</h2>
            <p><strong>SOC 2 is a broad organizational-controls audit conducted by a licensed CPA firm.</strong> ASI-1 is narrower and AI-specific—it focuses exclusively on the security controls for AI systems.</p>
            <p>A company can hold both. ASI-1 does not replace SOC 2; it complements it by addressing AI-specific risks that SOC 2 was not designed to cover.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Three Profiles -->
    <section class="asi-section asi-section-alt">
      <div class="asi-container">
        <h2 class="asi-section-title">Three profiles, tailored scope</h2>
        <div class="asi-profiles">
          <div class="asi-profile-card">
            <div class="asi-profile-badge">Consumer</div>
            <h3>Consumer</h3>
            <p>Uses third-party AI vendors and services. Assessment covers vendor vetting, data handling, and access controls.</p>
          </div>
          <div class="asi-profile-card">
            <div class="asi-profile-badge">Deployer</div>
            <h3>Deployer</h3>
            <p>Builds on foundation-model APIs—chatbots, copilots, agents, RAG. Covers input/output security, agent controls, and prompt injection defenses.</p>
          </div>
          <div class="asi-profile-card">
            <div class="asi-profile-badge">Builder</div>
            <h3>Builder</h3>
            <p>Trains, fine-tunes, or hosts its own models. Adds training-data governance, model-theft protection, and adversarial testing.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Control Catalog -->
    <section class="asi-section" id="catalog">
      <div class="asi-container">
        <div class="asi-catalog-header">
          <h2 class="asi-section-title">Control catalog</h2>
          <p class="asi-catalog-intro">30 controls across governance, data security, model access, agent behavior, monitoring, and testing. Filter by profile or domain to see what applies to your organization.</p>
        </div>

        <div class="asi-filters">
          <div class="asi-filter-group">
            <label class="asi-filter-label">Profile</label>
            <div class="asi-filter-buttons" role="group" aria-label="Profile filters">
              <button class="asi-filter-btn active" data-filter-type="profile" data-filter-value="all">All</button>
              <button class="asi-filter-btn" data-filter-type="profile" data-filter-value="Consumer">Consumer</button>
              <button class="asi-filter-btn" data-filter-type="profile" data-filter-value="Deployer">Deployer</button>
              <button class="asi-filter-btn" data-filter-type="profile" data-filter-value="Builder">Builder</button>
            </div>
          </div>
          <div class="asi-filter-group">
            <label class="asi-filter-label">Domain</label>
            <div class="asi-filter-select-wrapper">
              <select class="asi-filter-select" id="domain-filter" aria-label="Domain filter">
                <option value="all">All domains</option>
              </select>
            </div>
          </div>
        </div>

        <div id="controls-container" class="asi-controls-grid">
          <!-- Controls will be rendered here -->
        </div>
      </div>
    </section>

    <!-- Scoring & the bar -->
    <section class="asi-section asi-section-alt">
      <div class="asi-container asi-container-narrow">
        <h2 class="asi-section-title">Scoring & the bar</h2>
        <div class="asi-scoring">
          <div class="asi-maturity-scale">
            <div class="asi-maturity-item">
              <div class="asi-maturity-level">0</div>
              <div class="asi-maturity-label">Absent</div>
            </div>
            <div class="asi-maturity-item">
              <div class="asi-maturity-level">1</div>
              <div class="asi-maturity-label">Ad hoc</div>
            </div>
            <div class="asi-maturity-item">
              <div class="asi-maturity-level">2</div>
              <div class="asi-maturity-label">Defined</div>
            </div>
            <div class="asi-maturity-item">
              <div class="asi-maturity-level">3</div>
              <div class="asi-maturity-label">Managed</div>
            </div>
          </div>
          <p>Each control is scored on a 0–3 maturity scale. A control <strong>passes at Level 2 or higher</strong> (Defined or Managed).</p>
          <p>To earn ASI-1 attestation, a company must:</p>
          <ul class="asi-requirements">
            <li>Pass <strong>every Core control</strong> in scope for their profile</li>
            <li>Pass <strong>≥85% of all in-scope controls</strong></li>
          </ul>
          <p class="asi-scoring-note">This dual-threshold design ensures that critical controls are non-negotiable while allowing measured flexibility for emerging practices.</p>
        </div>
      </div>
    </section>

    <!-- How an assessment works -->
    <section class="asi-section">
      <div class="asi-container asi-container-narrow">
        <h2 class="asi-section-title">How an assessment works</h2>
        <div class="asi-process">
          <div class="asi-process-step">
            <div class="asi-process-number">1</div>
            <div class="asi-process-content">
              <h3>Scoping</h3>
              <p>Determine which profile applies and which systems are in scope.</p>
            </div>
          </div>
          <div class="asi-process-step">
            <div class="asi-process-number">2</div>
            <div class="asi-process-content">
              <h3>Intake questionnaire</h3>
              <p>Company completes a detailed questionnaire covering all in-scope controls.</p>
            </div>
          </div>
          <div class="asi-process-step">
            <div class="asi-process-number">3</div>
            <div class="asi-process-content">
              <h3>Evidence review</h3>
              <p>Assessors review documentation, policies, logs, and configurations provided by the company.</p>
            </div>
          </div>
          <div class="asi-process-step">
            <div class="asi-process-number">4</div>
            <div class="asi-process-content">
              <h3>Verification</h3>
              <p>Evidence-based verification of controls. Any hands-on testing is authorized and scoped in the engagement contract.</p>
            </div>
          </div>
          <div class="asi-process-step">
            <div class="asi-process-number">5</div>
            <div class="asi-process-content">
              <h3>Scoring & report</h3>
              <p>Each control is scored; company receives a detailed report and, if the bar is met, an attestation.</p>
            </div>
          </div>
        </div>
        <p class="asi-process-note"><strong>Note:</strong> Assessment is evidence-based. All verification activities are authorized and documented in the engagement agreement.</p>
      </div>
    </section>

    <!-- Grounded in established standards -->
    <section class="asi-section asi-section-alt">
      <div class="asi-container asi-container-narrow">
        <h2 class="asi-section-title">Grounded in established standards</h2>
        <p class="asi-standards-intro">ASI-1 maps to recognized frameworks for AI risk and security:</p>
        <div class="asi-standards">
          <div class="asi-standard-item">
            <h3>OWASP Top 10 for LLM Applications 2025</h3>
            <p>Community-driven catalog of the most critical security risks in LLM applications.</p>
            <a href="https://genai.owasp.org/" target="_blank" rel="noopener noreferrer" class="asi-standard-link">genai.owasp.org</a>
          </div>
          <div class="asi-standard-item">
            <h3>NIST AI Risk Management Framework</h3>
            <p>Framework for managing risks to individuals, organizations, and society from AI systems.</p>
            <a href="https://www.nist.gov/itl/ai-risk-management-framework" target="_blank" rel="noopener noreferrer" class="asi-standard-link">nist.gov/itl/ai-risk-management-framework</a>
          </div>
          <div class="asi-standard-item">
            <h3>MITRE ATLAS</h3>
            <p>Knowledge base of adversarial tactics and techniques based on real-world attacks against ML systems.</p>
            <a href="https://atlas.mitre.org/" target="_blank" rel="noopener noreferrer" class="asi-standard-link">atlas.mitre.org</a>
          </div>
        </div>
        <p class="asi-disclaimer"><em>These frameworks are referenced as taxonomic sources for ASI-1 controls. Their inclusion does not imply endorsement by OWASP, NIST, or MITRE of the ASI-1 standard or Aligned's assessment services.</em></p>
      </div>
    </section>

    <!-- Specimen Badge -->
    <section class="asi-section">
      <div class="asi-container asi-container-narrow">
        <div class="asi-badge-showcase">
          <div class="asi-badge-specimen">
            <svg class="asi-badge-icon" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <path d="M 50 10 L 75 25 L 75 55 Q 75 70 50 80 Q 25 70 25 55 L 25 25 Z" fill="none" stroke="currentColor" stroke-width="2.5"/>
              <path d="M 35 50 L 45 60 L 65 40" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <div class="asi-badge-text">ASI-1</div>
            <div class="asi-badge-year">2026</div>
            <div class="asi-badge-specimen-label">SPECIMEN</div>
          </div>
          <p class="asi-badge-caption">Example attestation badge. Companies that pass the assessment receive a verified badge and listing.</p>
        </div>
      </div>
    </section>

    <!-- Request an Assessment -->
    <section class="asi-section asi-section-cta">
      <div class="asi-container asi-container-narrow">
        <h2 class="asi-section-title">Request an assessment</h2>
        <p class="asi-cta-intro">Ready to demonstrate your AI security posture? Contact our team to discuss your profile and start the assessment process.</p>
        <div class="asi-contact">
          <div class="asi-contact-email">
            <span class="asi-contact-label">Contact:</span>
            <code class="asi-contact-value" id="contact-email">PLACEHOLDER_CONTACT_EMAIL</code>
            <button class="asi-copy-btn" id="copy-email-btn" aria-label="Copy email address">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
              </svg>
            </button>
          </div>
          <p class="asi-contact-note">We'll respond within 2 business days to discuss your needs.</p>
        </div>
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
            <li><a href="mailto:contribute@alignedsafely.com">Contact</a></li>
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
`;var n=[...new Set(e.map(e=>e.domain))],r=document.getElementById(`domain-filter`);n.forEach(e=>{let t=document.createElement(`option`);t.value=e,t.textContent=e,r.appendChild(t)});var i=`all`,a=`all`;function o(){let t=document.getElementById(`controls-container`),n=e.filter(e=>{let t=i===`all`||e.profiles.includes(i),n=a===`all`||e.domain===a;return t&&n});if(n.length===0){t.innerHTML=`<p class="asi-no-results">No controls match the selected filters.</p>`;return}let r=n.reduce((e,t)=>(e[t.domain]||(e[t.domain]=[]),e[t.domain].push(t),e),{}),o=``;for(let e in r)o+=`<div class="asi-control-domain">
      <h3 class="asi-control-domain-title">${e}</h3>`,r[e].forEach(e=>{o+=`
        <div class="asi-control-card">
          <div class="asi-control-header">
            <code class="asi-control-ref">${e.ref}</code>
            ${e.isCore?`<span class="asi-core-badge">Core</span>`:``}
          </div>
          <h4 class="asi-control-name">${e.name}</h4>
          <p class="asi-control-criterion"><strong>Pass criterion:</strong> ${e.passCriterion}</p>
          <div class="asi-control-meta">
            <div class="asi-control-meta-item">
              <span class="asi-control-meta-label">Maps to:</span>
              <span class="asi-control-meta-value">${e.owaspMap}</span>
            </div>
            <div class="asi-control-meta-item">
              <span class="asi-control-meta-label">Profiles:</span>
              <span class="asi-control-meta-value">${e.profiles.join(`, `)}</span>
            </div>
          </div>
        </div>
      `}),o+=`</div>`;t.innerHTML=o}var s=document.querySelectorAll(`[data-filter-type="profile"]`);s.forEach(e=>{e.addEventListener(`click`,()=>{s.forEach(e=>e.classList.remove(`active`)),e.classList.add(`active`),i=e.getAttribute(`data-filter-value`),o()})}),r.addEventListener(`change`,e=>{a=e.target.value,o()});var c=document.getElementById(`copy-email-btn`),l=document.getElementById(`contact-email`);c.addEventListener(`click`,async()=>{let e=l.textContent||``;try{await navigator.clipboard.writeText(e);let t=c.innerHTML;c.innerHTML=`<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>`,setTimeout(()=>{c.innerHTML=t},2e3)}catch(e){console.error(`Failed to copy:`,e)}}),o();