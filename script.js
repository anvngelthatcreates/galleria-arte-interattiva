const descriptions = {
    1: `-13 Febbraio 2026

Il disegno rappresenta un Ectonurita, una specie aliena presente nell'universo di Ben 10, hanno una forma simile a quella di un fantasma tradizionale ed un corpo capace di diventare intangibile o invisibile, il soggetto é nel mezzo di attraversare una parete, mettendo in evidenza gli artigli e l'unico occhio viola luminoso, un colore simbolo della galassia dove si trova il suo pianeta, Anur Phaetos`,

    2: `-5 Febbraio 2026

Il disegno rappresenta una creatura fantastica originale ispirata alla leggenda Greca di Scylla...`,

    3: `-12 Gennaio 2026

Il disegno rappresenta una creatura fantastica originale ispirata alla Biddrina...`,

    4: `-6 Gennaio 2026

La figura rappresenta un animale fantastico originale ispirato alle zanzare e a Venezia...`,

    5: `-10 Aprile 2026

Il disegno rappresenta una forma 'fan made' (creata da un fan) di una mega evoluzione del Pokémon Shiinotic...`,

    6: `-28 Febbraio 2026

Il disegno presenta un Opticoid, una specie aliena presente nell'universo di Ben 10...`
};

const artworks = document.querySelectorAll(".artwork");
const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightboxImg");
const title = document.getElementById("lightboxTitle");
const desc = document.getElementById("lightboxDesc");
const closeBtn = document.getElementById("closeBtn");

artworks.forEach(a => {
    a.addEventListener("click", () => {
        const id = a.dataset.id;
        img.src = a.dataset.img;
        title.textContent = a.dataset.title;
        desc.innerHTML = descriptions[id].replace(/\n/g, "<br>");
        lightbox.style.display = "block";
    });
});

closeBtn.onclick = () => lightbox.style.display = "none";
