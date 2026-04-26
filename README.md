<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galleria d'Arte Digitale</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap" rel="stylesheet">
</head>
<body>

<div class="background-animation"></div>

<header>
    <h1>Galleria d'Arte Digitale</h1>
    <p class="subtitle">Le opere di Angelica Domenici e Stefano Domenici</p>
</header>

<main class="gallery">

    <article class="artwork"
        data-title="Pelledoca"
        data-img="img/opera1.jfif"
        data-desc="-13 Febbraio 2026

Il disegno rappresenta un Ectonurita, una specie aliena presente nell'universo di Ben 10..."
    >
        <img src="img/opera1.jfif" alt="Pelledoca">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

    <article class="artwork"
        data-title="Scyllure"
        data-img="img/opera2.jfif"
        data-desc="-5 Febbraio 2026

Creatura fantastica ispirata alla leggenda greca di Scylla..."
    >
        <img src="img/opera2.jfif" alt="Scyllure">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

    <article class="artwork"
        data-title="Spiratrix"
        data-img="img/opera3.jfif"
        data-desc="-12 Gennaio 2026

Creatura ispirata alla Biddrina e ad altre leggende italiane..."
    >
        <img src="img/opera3.jfif" alt="Spiratrix">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

    <article class="artwork"
        data-title="Maskiume"
        data-img="img/opera4.jfif"
        data-desc="-6 Gennaio 2026

Animale fantastico ispirato alle zanzare e ai simboli di Venezia..."
    >
        <img src="img/opera4.jfif" alt="Maskiume">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

    <article class="artwork"
        data-title="Mega Shiinotic"
        data-img="img/opera5.jfif"
        data-desc="-10 Aprile 2026

Forma fan made di una mega evoluzione del Pokémon Shiinotic..."
    >
        <img src="img/opera5.jfif" alt="Mega Shiinotic">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

    <article class="artwork"
        data-title="Milleocchi"
        data-img="img/opera6.jfif"
        data-desc="-28 Febbraio 2026

Rappresenta un Opticoid, specie aliena dell'universo di Ben 10..."
    >
        <img src="img/opera6.jfif" alt="Milleocchi">
        <div class="artwork-overlay"><span>Scopri l'opera</span></div>
    </article>

</main>

<!-- UNICO LIGHTBOX -->
<div class="lightbox" id="lightbox">
    <button class="close-btn" id="closeBtn" aria-label="Chiudi">&times;</button>
    <div class="lightbox-content">
        <img src="" alt="" id="lightboxImg">
        <div class="lightbox-info">
            <h2 id="lightboxTitle"></h2>
            <p id="lightboxDesc"></p>
        </div>
    </div>
</div>

<footer>
    <p>Capolavoro PCTO — 2026</p>
</footer>

<script src="script.js"></script>
</body>
</html>
