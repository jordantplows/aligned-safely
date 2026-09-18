import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

app.innerHTML = `
  <div class="page">
    <nav>
      <span class="mark">Aligned Labs</span>
      <div class="nav-links">
        <a href="mailto:contribute@alinedlabs.com" class="nav-link">Contact</a>
      </div>
    </nav>
    <section class="hero">
      <img src="/hero.png" alt="SA/E HUMANITY" class="hero-img" />
    </section>
    <section class="content">
      <div class="rule"></div>
      <p>If you are here, it's because you believe that in the next 10 years humanity could be extinct due to the lack of AI alignment. This is not a winner-takes-all situation. This will require billions in funding, but the goal is not capitalistic gains in the next ten years.</p>
      <p>The objective is to preserve humanity and all life-forms on earth. Preventing a superior species with a language not known to man from springing up and ultimately destroying all life on earth.</p>
      <p>This mission will require everyone, and it's not clear just yet how this will be structured.</p>
      <p class="accent">A proper technical memo with clarity on the direction of the lab will be published soon.</p>
    </section>
    <footer>
      <a href="mailto:contribute@alinedlabs.com">contribute@alinedlabs.com</a>
    </footer>
  </div>
`;
