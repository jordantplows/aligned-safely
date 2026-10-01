import "./style.css";
import { controls } from "./asi-1-controls";
// Profile descriptions
const profileDescriptions = {
    Consumer: "Uses third-party AI vendors and services (ChatGPT, Claude, etc.) for internal work. Assessment covers vendor vetting, data handling, access controls, and governance.",
    Deployer: "Builds on foundation-model APIs — chatbots, copilots, agents, RAG systems. Assessment covers input/output security, agent controls, prompt injection defenses, and monitoring.",
    Builder: "Trains, fine-tunes, or hosts its own models. Assessment includes all Deployer controls plus training-data governance, model-theft protection, and adversarial testing.",
};
// State management with localStorage
const STORAGE_KEY = "asi-1-assessment-state";
function loadState() {
    const defaultState = {
        profile: null,
        usesAgents: false,
        answers: {},
        currentStep: "profile",
        currentQuestionIndex: 0,
    };
    try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
            return { ...defaultState, ...JSON.parse(stored) };
        }
    }
    catch (e) {
        console.warn("Failed to load assessment state from localStorage", e);
    }
    return defaultState;
}
function saveState(state) {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    }
    catch (e) {
        console.warn("Failed to save assessment state to localStorage", e);
    }
}
function clearState() {
    try {
        localStorage.removeItem(STORAGE_KEY);
    }
    catch (e) {
        console.warn("Failed to clear assessment state from localStorage", e);
    }
}
// Get controls in scope for a profile
function getControlsInScope(profile, usesAgents) {
    let filtered = controls.filter((c) => c.profiles.includes(profile));
    // AGT-2 is Core only when agents are used
    filtered = filtered.map((c) => {
        if (c.ref === "AGT-2") {
            return { ...c, isCore: usesAgents };
        }
        return c;
    });
    return filtered;
}
// Group controls by domain
function groupByDomain(controls) {
    return controls.reduce((acc, control) => {
        if (!acc[control.domain])
            acc[control.domain] = [];
        acc[control.domain].push(control);
        return acc;
    }, {});
}
// Scoring logic (pure function)
export function scoreAssessment(answers, profile, usesAgents) {
    const inScope = getControlsInScope(profile, usesAgents);
    const passes = (level) => typeof level === "number" && level >= 2;
    let totalPassed = 0;
    let corePassed = 0;
    let coreTotal = 0;
    const perDomain = {};
    const gaps = [];
    inScope.forEach((control) => {
        const answer = answers[control.ref];
        const level = answer?.level ?? 0;
        const passed = passes(level);
        // Overall
        if (passed)
            totalPassed++;
        // Core
        if (control.isCore) {
            coreTotal++;
            if (passed)
                corePassed++;
            else
                gaps.push({ control, isCoreGap: true });
        }
        else if (!passed) {
            gaps.push({ control, isCoreGap: false });
        }
        // Per-domain
        if (!perDomain[control.domain]) {
            perDomain[control.domain] = { passed: 0, total: 0 };
        }
        perDomain[control.domain].total++;
        if (passed)
            perDomain[control.domain].passed++;
    });
    const overallPct = inScope.length > 0 ? (totalPassed / inScope.length) * 100 : 0;
    const ready = corePassed === coreTotal && overallPct >= 85;
    // Sort gaps: Core first
    gaps.sort((a, b) => {
        if (a.isCoreGap && !b.isCoreGap)
            return -1;
        if (!a.isCoreGap && b.isCoreGap)
            return 1;
        return 0;
    });
    return {
        overallPct,
        corePassed,
        coreTotal,
        perDomain,
        gaps,
        ready,
    };
}
// Application state
let state = loadState();
// Router
function render() {
    saveState(state);
    switch (state.currentStep) {
        case "profile":
            renderProfileStep();
            break;
        case "questionnaire":
            renderQuestionnaireStep();
            break;
        case "result":
            renderResultStep();
            break;
    }
}
// Profile step
function renderProfileStep() {
    const app = document.querySelector("#app");
    app.innerHTML = `
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
                    <p class="asi-profile-option-desc">${profileDescriptions.Consumer}</p>
                  </div>
                </label>

                <label class="asi-profile-option">
                  <input type="radio" name="profile" value="Deployer" required />
                  <div class="asi-profile-option-content">
                    <div class="asi-profile-option-header">
                      <span class="asi-profile-option-badge">Deployer</span>
                    </div>
                    <p class="asi-profile-option-desc">${profileDescriptions.Deployer}</p>
                  </div>
                </label>

                <label class="asi-profile-option">
                  <input type="radio" name="profile" value="Builder" required />
                  <div class="asi-profile-option-content">
                    <div class="asi-profile-option-header">
                      <span class="asi-profile-option-badge">Builder</span>
                    </div>
                    <p class="asi-profile-option-desc">${profileDescriptions.Builder}</p>
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
  `;
    const form = document.getElementById("profile-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        state.profile = formData.get("profile");
        state.usesAgents = formData.get("uses-agents") === "yes";
        state.currentStep = "questionnaire";
        state.currentQuestionIndex = 0;
        render();
    });
}
// Questionnaire step
function renderQuestionnaireStep() {
    if (!state.profile) {
        state.currentStep = "profile";
        render();
        return;
    }
    const inScope = getControlsInScope(state.profile, state.usesAgents);
    const currentControl = inScope[state.currentQuestionIndex];
    if (!currentControl) {
        // Done with questionnaire
        state.currentStep = "result";
        render();
        return;
    }
    const app = document.querySelector("#app");
    const progress = ((state.currentQuestionIndex + 1) / inScope.length) * 100;
    const existingAnswer = state.answers[currentControl.ref];
    app.innerHTML = `
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
              <h2 class="asi-questionnaire-title">Assessment for ${state.profile}</h2>
              <p class="asi-progress-text">Question ${state.currentQuestionIndex + 1} of ${inScope.length}</p>
            </div>
            <div class="asi-progress-bar">
              <div class="asi-progress-fill" style="width: ${progress}%"></div>
            </div>
          </div>

          <form id="question-form" class="asi-question-form">
            <fieldset>
              <legend class="asi-question-legend">
                <div class="asi-question-header">
                  <code class="asi-control-ref">${currentControl.ref}</code>
                  ${currentControl.isCore ? '<span class="asi-core-badge">Core</span>' : ""}
                </div>
                <h3 class="asi-question-title">${currentControl.name}</h3>
              </legend>

              <p class="asi-question-criterion" id="criterion-desc"><strong>Pass criterion:</strong> ${currentControl.passCriterion}</p>

              <div class="asi-maturity-options" role="radiogroup" aria-describedby="criterion-desc">
                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="0" ${existingAnswer?.level === 0 ? "checked" : ""} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">0</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Absent</span>
                      <span class="asi-maturity-desc">No control in place</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="1" ${existingAnswer?.level === 1 ? "checked" : ""} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">1</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Ad hoc</span>
                      <span class="asi-maturity-desc">Informal/inconsistent, not documented</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="2" ${existingAnswer?.level === 2 ? "checked" : ""} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">2</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Defined</span>
                      <span class="asi-maturity-desc">Documented, consistently applied</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option">
                  <input type="radio" name="level" value="3" ${existingAnswer?.level === 3 ? "checked" : ""} required />
                  <div class="asi-maturity-option-content">
                    <span class="asi-maturity-level">3</span>
                    <div class="asi-maturity-details">
                      <span class="asi-maturity-label">Managed</span>
                      <span class="asi-maturity-desc">Measured, reviewed, improved</span>
                    </div>
                  </div>
                </label>

                <label class="asi-maturity-option asi-maturity-option-unsure">
                  <input type="radio" name="level" value="not-sure" ${existingAnswer?.level === "not-sure" ? "checked" : ""} required />
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
                >${existingAnswer?.notes || ""}</textarea>
              </div>
            </fieldset>

            <div class="asi-question-actions">
              <button type="button" id="back-btn" class="asi-btn-secondary" ${state.currentQuestionIndex === 0 ? "disabled" : ""}>
                ← Previous
              </button>
              <button type="submit" class="asi-btn-primary">
                ${state.currentQuestionIndex < inScope.length - 1 ? "Next →" : "View Results"}
              </button>
            </div>
          </form>

          <div class="asi-questionnaire-meta">
            <p><strong>Domain:</strong> ${currentControl.domain}</p>
            <p><strong>Maps to:</strong> ${currentControl.owaspMap}</p>
          </div>
        </div>
      </section>
    </div>
  `;
    const form = document.getElementById("question-form");
    form.addEventListener("submit", (e) => {
        e.preventDefault();
        const formData = new FormData(form);
        const levelValue = formData.get("level");
        const level = levelValue === "not-sure" ? "not-sure" : parseInt(levelValue);
        const notes = formData.get("notes").trim();
        state.answers[currentControl.ref] = {
            controlRef: currentControl.ref,
            level,
            notes: notes || undefined,
        };
        state.currentQuestionIndex++;
        render();
    });
    const backBtn = document.getElementById("back-btn");
    backBtn?.addEventListener("click", () => {
        if (state.currentQuestionIndex > 0) {
            state.currentQuestionIndex--;
            render();
        }
    });
}
// Result step
function renderResultStep() {
    if (!state.profile) {
        state.currentStep = "profile";
        render();
        return;
    }
    const result = scoreAssessment(state.answers, state.profile, state.usesAgents);
    const app = document.querySelector("#app");
    // Per-domain breakdown HTML
    let domainBreakdownHTML = "";
    for (const domain in result.perDomain) {
        const { passed, total } = result.perDomain[domain];
        const pct = total > 0 ? ((passed / total) * 100).toFixed(0) : "0";
        domainBreakdownHTML += `
      <div class="asi-result-domain">
        <div class="asi-result-domain-header">
          <span class="asi-result-domain-name">${domain}</span>
          <span class="asi-result-domain-score">${passed}/${total} passed (${pct}%)</span>
        </div>
        <div class="asi-result-domain-bar">
          <div class="asi-result-domain-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
    }
    // Gaps HTML
    let gapsHTML = "";
    if (result.gaps.length > 0) {
        result.gaps.forEach((gap) => {
            gapsHTML += `
        <div class="asi-gap-item ${gap.isCoreGap ? "asi-gap-core" : ""}">
          <div class="asi-gap-header">
            <code class="asi-control-ref">${gap.control.ref}</code>
            ${gap.isCoreGap ? '<span class="asi-core-badge">Core Gap</span>' : ""}
          </div>
          <h4 class="asi-gap-name">${gap.control.name}</h4>
          <p class="asi-gap-criterion"><strong>To pass:</strong> ${gap.control.passCriterion}</p>
        </div>
      `;
        });
    }
    else {
        gapsHTML = '<p class="asi-no-gaps">No gaps identified. All in-scope controls pass.</p>';
    }
    app.innerHTML = `
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

          <div class="asi-result-summary ${result.ready ? "asi-result-ready" : "asi-result-not-ready"}">
            <div class="asi-result-status">
              <h2 class="asi-result-status-title">${result.ready ? "Assessment-Ready" : "Not Assessment-Ready"}</h2>
              <p class="asi-result-status-desc">
                ${result.ready
        ? "Based on your self-assessment, you'd likely be <strong>ready to pursue</strong> a verified ASI-1 assessment."
        : "Your self-assessment indicates gaps that should be addressed before pursuing a verified ASI-1 assessment."}
              </p>
            </div>

            <div class="asi-result-metrics">
              <div class="asi-result-metric">
                <div class="asi-result-metric-value">${result.overallPct.toFixed(0)}%</div>
                <div class="asi-result-metric-label">Overall controls passed</div>
                <div class="asi-result-metric-note">Need ≥85% to pass</div>
              </div>
              <div class="asi-result-metric">
                <div class="asi-result-metric-value">${result.corePassed}/${result.coreTotal}</div>
                <div class="asi-result-metric-label">Core controls passed</div>
                <div class="asi-result-metric-note">Must pass all Core</div>
              </div>
            </div>
          </div>

          <div class="asi-result-section">
            <h3 class="asi-result-section-title">Per-domain breakdown</h3>
            <div class="asi-result-domains">
              ${domainBreakdownHTML}
            </div>
          </div>

          ${result.gaps.length > 0
        ? `
          <div class="asi-result-section">
            <h3 class="asi-result-section-title">Control gaps (${result.gaps.length})</h3>
            <p class="asi-result-section-desc">Controls that did not pass. Core gaps are shown first.</p>
            <div class="asi-gaps-list">
              ${gapsHTML}
            </div>
          </div>
          `
        : ""}

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
  `;
    // Download button
    const downloadBtn = document.getElementById("download-btn");
    downloadBtn?.addEventListener("click", () => {
        downloadResults(state.profile, state.usesAgents, state.answers, result);
    });
    // Request button - show modal
    const requestBtn = document.getElementById("request-btn");
    const modal = document.getElementById("request-modal");
    const modalOverlay = document.getElementById("modal-overlay");
    const modalClose = document.getElementById("modal-close");
    const cancelBtn = document.getElementById("cancel-btn");
    const showModal = () => {
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    };
    const hideModal = () => {
        modal.style.display = "none";
        document.body.style.overflow = "";
    };
    requestBtn?.addEventListener("click", showModal);
    modalClose?.addEventListener("click", hideModal);
    modalOverlay?.addEventListener("click", hideModal);
    cancelBtn?.addEventListener("click", hideModal);
    // Lead form submission
    const leadForm = document.getElementById("lead-form");
    const leadResult = document.getElementById("lead-result");
    leadForm?.addEventListener("submit", (e) => {
        e.preventDefault();
        // Don't actually submit - just show the contact info
        leadForm.style.display = "none";
        leadResult.style.display = "block";
    });
    // Copy email button
    const copyBtn = document.getElementById("copy-email-btn");
    const emailElement = document.getElementById("contact-email");
    copyBtn?.addEventListener("click", async () => {
        const email = emailElement?.textContent || "";
        try {
            await navigator.clipboard.writeText(email);
            const originalHTML = copyBtn.innerHTML;
            copyBtn.innerHTML = `<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"></polyline>
      </svg>`;
            setTimeout(() => {
                copyBtn.innerHTML = originalHTML;
            }, 2000);
        }
        catch (err) {
            console.error("Failed to copy:", err);
        }
    });
    // Restart button
    const restartBtn = document.getElementById("restart-btn");
    restartBtn?.addEventListener("click", () => {
        if (confirm("Start a new assessment? Your current results will be cleared.")) {
            clearState();
            state = loadState();
            render();
        }
    });
}
// Download results function
function downloadResults(profile, usesAgents, answers, result) {
    const timestamp = new Date().toISOString().split("T")[0];
    const inScope = getControlsInScope(profile, usesAgents);
    let text = `ASI-1 SELF-ASSESSMENT RESULTS
(Self-reported, unverified — NOT an attestation)

Generated: ${timestamp}
Profile: ${profile}
Uses AI Agents: ${usesAgents ? "Yes" : "No"}

SUMMARY
Overall: ${result.overallPct.toFixed(0)}% of controls passed (need ≥85%)
Core: ${result.corePassed}/${result.coreTotal} Core controls passed (must pass all)
Status: ${result.ready ? "Ready to pursue verified assessment" : "Not ready — gaps must be addressed"}

PER-DOMAIN BREAKDOWN
`;
    for (const domain in result.perDomain) {
        const { passed, total } = result.perDomain[domain];
        const pct = total > 0 ? ((passed / total) * 100).toFixed(0) : "0";
        text += `${domain}: ${passed}/${total} (${pct}%)\n`;
    }
    if (result.gaps.length > 0) {
        text += `\nCONTROL GAPS (${result.gaps.length})\n`;
        result.gaps.forEach((gap) => {
            text += `\n${gap.control.ref} - ${gap.control.name}${gap.isCoreGap ? " [CORE GAP]" : ""}\n`;
            text += `Pass criterion: ${gap.control.passCriterion}\n`;
        });
    }
    text += `\nALL ANSWERS\n`;
    inScope.forEach((control) => {
        const answer = answers[control.ref];
        const level = answer?.level ?? "no answer";
        text += `\n${control.ref} - ${control.name}${control.isCore ? " [CORE]" : ""}\n`;
        text += `Level: ${level}\n`;
        if (answer?.notes) {
            text += `Notes: ${answer.notes}\n`;
        }
    });
    text += `\n---\nThis is a self-assessment. A real ASI-1 attestation requires evidence review and verification.`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `asi-1-self-assessment-${timestamp}.txt`;
    a.click();
    URL.revokeObjectURL(url);
}
// Initial render
render();
