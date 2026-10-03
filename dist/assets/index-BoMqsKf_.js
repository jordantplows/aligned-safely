(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[{id:`3.1`,name:`Sentinel`,phase:`Detect`,desc:`Monitoring of model behavior, compute allocation and agentic activity. Deliverable: open monitoring specification and reference implementation.`},{id:`3.2`,name:`Tripwire`,phase:`Detect`,desc:`Capability thresholds agreed in advance, with defined escalation. Deliverable: published threshold framework.`},{id:`3.3`,name:`Quarantine`,phase:`Contain`,desc:`Isolated environments for testing and holding systems of unknown alignment. Deliverable: containment facility design.`},{id:`3.4`,name:`Lens`,phase:`Align`,desc:`Interpretability and audit methods that show what a model is optimizing for. Deliverable: audit toolkit.`},{id:`3.5`,name:`Concord`,phase:`Align`,desc:`Verification and information-sharing between nations and labs. Deliverable: draft coordination protocol.`}],t=!1;function n(){let r=document.getElementById(`app`);if(r&&(r.innerHTML=`
    <article>
      <div class="header">
        <span>ASI-MEMO-001</span>
        <span>Unrestricted</span>
        <span>October 2026</span>
      </div>

      <h1>Global Countermeasures Against Misaligned Superintelligence</h1>
      <p class="subtitle">A proposal for a coordinated alignment program</p>

      <table class="metadata">
        <tbody>
          <tr><td class="label">From</td><td>Aligned Super Intelligence</td></tr>
          <tr><td class="label">To</td><td>Governments, AI laboratories, research institutions</td></tr>
          <tr><td class="label">Subject</td><td>The Manhattan Project for AI alignment</td></tr>
          <tr><td class="label">Status</td><td>Open for participation — <a href="#s5">§5</a></td></tr>
        </tbody>
      </table>

      <section class="abstract">
        <div class="abstract-label">Abstract</div>
        <p>Superintelligent AI may arrive before the means to verify or correct its objectives exist. We propose a concentrated, time-bound program that brings scientists, engineers and institutions together to solve alignment before superintelligence arrives, and to build working countermeasures in case it arrives first. This memo sets out the problem, the precedent, five workstreams, the principles governing the program, and how to take part.</p>
      </section>

      <nav class="toc">
        <div class="toc-label">Contents</div>
        <div class="toc-links">
          <a href="#s1">1. Problem</a>
          <a href="#s2">2. Precedent</a>
          <a href="#s3">3. Program</a>
          <a href="#s4">4. Principles</a>
          <a href="#s5">5. Participation</a>
        </div>
      </nav>

      <section id="s1">
        <h2>1. Problem</h2>
        <p>A system operating beyond human capability cannot be overseen by human-speed processes. Detection, attribution and response must run at machine speed, and they must exist before they are needed.</p>
        <p>Alignment is currently worked on by scattered teams with a fraction of the resources spent on capability. That gap is the primary risk.</p>
      </section>

      <section id="s2">
        <h2>2. Precedent</h2>
        <p>When nuclear physics made a civilization-scale weapon possible, the response was a single program: concentrated talent, dedicated resources and a fixed deadline.</p>
        <p>We propose the same structure for alignment, with one difference: the goal is defensive, and the output is shared.</p>
      </section>

      <section id="s3">
        <h2>3. Program</h2>
        <p>The program is organized as five workstreams across three functions: <em>detect</em>, <em>contain</em> and <em>align</em>.</p>
        <div class="table-wrapper">
          <table class="workstreams">
            <caption>Table 1. Workstreams and deliverables.</caption>
            <thead>
              <tr>
                <th>No.</th>
                <th>Workstream</th>
                <th>Function</th>
                <th>Deliverable</th>
              </tr>
            </thead>
            <tbody>
              ${e.map(e=>`
                <tr>
                  <td class="mono">${e.id}</td>
                  <td class="bold">${e.name}</td>
                  <td class="mono">${e.phase}</td>
                  <td>${e.desc}</td>
                </tr>
              `).join(``)}
            </tbody>
          </table>
        </div>
      </section>

      <section id="s4">
        <h2>4. Principles</h2>
        <ol>
          <li><strong>Mission before profit.</strong> Funding serves the work. Decisions are made on what reduces risk, not what grows revenue.</li>
          <li><strong>Open by default.</strong> Evaluations, threat models and tooling are published wherever doing so does not create new risk.</li>
          <li><strong>Independent and accountable.</strong> No single government, lab or investor controls the program. Oversight is shared and open to scrutiny.</li>
        </ol>
      </section>

      <section id="s5">
        <h2>5. Participation</h2>
        <p>We are assembling the team. Researchers, engineers, policymakers and institutions willing to put this problem first are invited to respond below.</p>
        ${t?`
          <div class="form-success">
            Received. We read every submission and will reply.
          </div>
        `:`
          <form id="participation-form" class="participation-form">
            <label>
              Name
              <input type="text" name="name" required>
            </label>
            <label>
              Email
              <input type="email" name="email" required>
            </label>
            <label>
              Organization (optional)
              <input type="text" name="organization">
            </label>
            <label>
              Area of contribution
              <select name="area">
                <option>Research</option>
                <option>Engineering</option>
                <option>Policy</option>
                <option>Institutional partnership</option>
                <option>Funding</option>
                <option>Report a risk or incident</option>
              </select>
            </label>
            <label class="full-width">
              Statement (optional)
              <textarea name="statement" rows="4"></textarea>
            </label>
            <button type="submit">Submit</button>
          </form>
        `}
      </section>

      <footer>
        <span>Aligned Super Intelligence</span>
        <span>ASI-MEMO-001 · Rev. 1</span>
      </footer>
    </article>
  `,!t)){let e=document.getElementById(`participation-form`);e&&e.addEventListener(`submit`,e=>{e.preventDefault(),t=!0,n()})}}n();