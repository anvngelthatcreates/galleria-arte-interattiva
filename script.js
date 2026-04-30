document.addEventListener("DOMContentLoaded", () => {

  const artworks = document.querySelectorAll(".artwork");

  // ===== CREA LIGHTBOX DA ZERO =====
  const lightbox = document.createElement("div");
  lightbox.id = "newLightbox";
  lightbox.innerHTML = `
    <div class="lb-wrapper">
        <span class="lb-close">&times;</span>
        <img class="lb-img" src="" alt="">
        <div class="lb-text">
            <h2 class="lb-title"></h2>
            <p class="lb-desc"></p>
        </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  // ===== STILI INLINE =====
  const style = document.createElement("style");
  style.innerHTML = `
    #newLightbox{
      position: fixed;
      inset:0;
      background: rgba(0,0,0,0.96);
      display:none;
      justify-content:center;
      align-items:center;
      z-index:9999;
      padding:30px;
    }

    .lb-wrapper{
      max-width:900px;
      width:100%;
      max-height:90vh;
      overflow-y:auto;
      text-align:center;
      color:white;
      font-family: 'Inter', sans-serif;
    }

    .lb-img{
      max-width:90%;
      max-height:55vh;
      border-radius:12px;
      margin-bottom:25px;
    }

    .lb-title{
      font-family: 'Playfair Display', serif;
      font-size:28px;
      margin-bottom:15px;
    }

    .lb-desc{
      line-height:1.8;
      font-size:17px;
      opacity:0.85;
      white-space: pre-line;
    }

    .lb-close{
      position:fixed;
      top:25px;
      right:35px;
      font-size:50px;
      cursor:pointer;
    }
  `;
  document.head.appendChild(style);

  const lb = document.getElementById("newLightbox");
  const lbImg = lb.querySelector(".lb-img");
  const lbTitle = lb.querySelector(".lb-title");
  const lbDesc = lb.querySelector(".lb-desc");
  const lbClose = lb.querySelector(".lb-close");

  // ===== LE TUE DESCRIZIONI =====
  const descriptions = [
`-13 Febbraio 2026

Il disegno rappresenta un Ectonurita, una specie aliena presente nell'universo di Ben 10, hanno una forma simile a quella di un fantasma tradizionale ed un corpo capace di diventare intangibile o invisibile, il soggetto é nel mezzo di attraversare una parete, mettendo in evidenza gli artigli e l'unico occhio viola luminoso, un colore simbolo della galassia dove si trova il suo pianeta, Anur Phaetos`,

`-5 Febbraio 2026

Il disegno rappresenta una creatura fantastica originale ispirata alla leggenda Greca di Scylla, spesso rappresentata come una donna con molteplici tentacoli, questa creature presenta caratteristiche di alte creature abissali, come l'organo luminoso del pesce lanterna, la coda sinuosa delle anguille, delle pinne e capelli pronunciati come quelle delle sirene e una assenza di braccia, un teschio è incastrato sulla punta della coda, richiamando la leggenda Greca della donna trasformata in mostro marino e delle sue molteplici teste`,

`-12 Gennaio 2026

Il disegno rappresenta una creatura fantastica originale ispirata alla Biddrina, un serpente mitico del folclore siciliano, altre ispirazioni aggiunte al design sono le Vipere, Biscie, Gladiatrici, Guerriere Amazzoni (principalmente attraverso le squame lucide simili ad un armatura), la Sica (una spada curva usata dai gladiatori), le Anguane e la Accabadora, rispettivamente leggende del nord Italia e Sardegna, parziali ispirazioni al Basilisco e i suoi occhi cremisi sono anch'esse presenti`,

`-6 Gennaio 2026

La figura rappresenta un animale fantastico originale ispirato alle zanzare e a diversi simboli della città di Venezia, il collare peloso e la lunga proboscide richiamano la forma delle maschere di carnevale della città, oltre all'abbigliamento di una donna di alta classe, l'addome, contenente del sangue (suggerendo un genere femminile nella specie) è semi trasparente, richiamando sia i souvenir di vetro a forma di insetti (tra cui le zanzare) che possono essere acquistati nella città, ma anche alle boccette di profumo, anch'esse presenti in essa, la forte ispirazione a Venezia viene dal fatto che le zanzare sono in grado di riprodursi unicamente attraverso una fonte d'acqua dove deporre le uova, fattore principale della città`,

`-10 Aprile 2026

Il disegno rappresenta una forma 'fan made' (creata da un fan) di una mega evoluzione del Pokémon Shiinotic, il design, ora ispirato ad una Mazza di Tamburo, anche conosciuta come Fungo Ombrello, diventa estremamente più alta e snella, mettendo in risalto il pileo, ovvero il cappello del fungo, il Pokémon risulta quasi totalmente violaceo, includendo le fronde che pendono dal cappello, rendendo chiaro la presenza del tipo veleno, anziché del tipo erba`,

`-28 Febbraio 2026

Il disegno presenta un Opticoid, una specie aliena presente nell'universo di Ben 10, il corpo é muscolare e accovacciato, mettendo in evidenza gli occhi verdi, in contrasto con la pelle giallognola, la parte del corpo messa principalmente in evidenza sono le orecchie, sproporzionatamente grandi permettono un udito estremamente acuto in addizione ad una visione a 360° gradi`
  ];

  artworks.forEach((art, index) => {
    art.addEventListener("click", () => {
      const imgEl = art.querySelector("img");
      lbImg.src = imgEl.src;
      lbTitle.textContent = imgEl.alt;
      lbDesc.textContent = descriptions[index];
      lb.style.display = "flex";
    });
  });

  lbClose.onclick = () => lb.style.display = "none";
  lb.onclick = (e) => {
    if(e.target.id === "newLightbox") lb.style.display = "none";
  };

});
