import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

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
        <a href="/blog.html" class="nav-link">ASI-2</a>
        <a href="mailto:contribute@alignedsafely.com" class="nav-link">Contact</a>
      </div>
    </nav>
    <section class="form-container">
      <div class="form-header">
        <h2>Submit a Bounty</h2>
        <p class="form-intro">Tell us about the AI security issue you need tested. If Aligned-1 doesn't solve it, you get your money back.</p>
      </div>
      <form class="bounty-form" id="bountyForm">
        <div class="form-group">
          <label for="name">Name</label>
          <input type="text" id="name" name="name" required>
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" id="email" name="email" required>
        </div>
        <div class="form-group">
          <label for="company">Company (Optional)</label>
          <input type="text" id="company" name="company">
        </div>
        <div class="form-group">
          <label for="issue">Describe the Issue</label>
          <textarea id="issue" name="issue" rows="6" placeholder="What vulnerability or security concern do you need tested?" required></textarea>
        </div>
        <div class="form-group">
          <label for="details">Additional Details</label>
          <textarea id="details" name="details" rows="4" placeholder="Any specific attack vectors, context, or requirements we should know about?"></textarea>
        </div>
        <div class="calendar-section">
          <div class="rule"></div>
          <h3>Schedule a Call</h3>
          <p>Book a 30-minute consultation to discuss your bounty submission and next steps.</p>
          <a href="https://cal.com" target="_blank" class="calendar-link">Schedule on Calendar →</a>
        </div>
        <button type="submit" class="form-submit">Submit Bounty</button>
      </form>
    </section>
    <footer>
      <a href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>
    </footer>
  </div>
`;

const form = document.getElementById("bountyForm") as HTMLFormElement;
const submitButton = form.querySelector('button[type="submit"]') as HTMLButtonElement;

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const data = {
    name: formData.get("name"),
    email: formData.get("email"),
    company: formData.get("company"),
    issue: formData.get("issue"),
    details: formData.get("details"),
  };

  // Update button state
  const originalText = submitButton.textContent;
  submitButton.textContent = "Submitting...";
  submitButton.disabled = true;

  try {
    // TODO: Replace with your actual form endpoint
    // Options: Formspree, Web3Forms, or a custom backend
    // For now, using a placeholder URL - configure before deploying
    const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      submitButton.textContent = "✓ Submitted";
      submitButton.style.background = "#27ae60";
      form.reset();

      setTimeout(() => {
        submitButton.textContent = originalText;
        submitButton.style.background = "";
        submitButton.disabled = false;
      }, 3000);
    } else {
      throw new Error("Submission failed");
    }
  } catch (error) {
    submitButton.textContent = "Failed - Try Again";
    submitButton.style.background = "#c0392b";

    setTimeout(() => {
      submitButton.textContent = originalText;
      submitButton.style.background = "";
      submitButton.disabled = false;
    }, 3000);
  }
});
