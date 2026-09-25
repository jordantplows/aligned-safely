import "./style.css";
const content = [
    "If you are here, it's because you believe that in the next 10 years humanity could be extinct due to the lack of AI alignment. This is not a winner takes all situation. This will require billions in funding but the goal is not capitalistic gains in the next ten years.",
    "The objective is to preserve humanity and all life-forms on earth. Preventing a superior species with a language not known to man from springing up and ultimately destroying all life on earth.",
    'This mission will require everyone and it\'s not clear just yet how this will be structured. All questions can be directed to <a class="email" href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>',
    "A proper technical memo with clarity on the direction of the lab will be published soon.",
];
const app = document.querySelector("#app");
app.innerHTML = `
  <main>
    <div class="logo">
      <img src="/alinedlabs.png" alt="Alined Labs">
    </div>
    <div class="content">
      ${content.map((p) => `<p>${p}</p>`).join("\n      ")}
    </div>
  </main>
  <footer>&copy; Alined Labs</footer>
`;
