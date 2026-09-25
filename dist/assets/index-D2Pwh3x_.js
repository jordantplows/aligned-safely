(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials=e.crossOrigin===`use-credentials`?`include`:e.crossOrigin===`anonymous`?`omit`:`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=[`If you are here, it's because you believe that in the next 10 years humanity could be extinct due to the lack of AI alignment. This is not a winner takes all situation. This will require billions in funding but the goal is not capitalistic gains in the next ten years.`,`The objective is to preserve humanity and all life-forms on earth. Preventing a superior species with a language not known to man from springing up and ultimately destroying all life on earth.`,`This mission will require everyone and it's not clear just yet how this will be structured. All questions can be directed to <a class="email" href="mailto:contribute@alignedsafely.com">contribute@alignedsafely.com</a>`,`A proper technical memo with clarity on the direction of the lab will be published soon.`],t=document.querySelector(`#app`);t.innerHTML=`
  <main>
    <div class="logo">
      <img src="/alinedlabs.png" alt="Alined Labs">
    </div>
    <div class="content">
      ${e.map(e=>`<p>${e}</p>`).join(`
      `)}
    </div>
  </main>
  <footer>&copy; Alined Labs</footer>
`;