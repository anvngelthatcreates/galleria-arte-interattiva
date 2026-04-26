<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galleria d'Arte Digitale</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

<header>
    <h1>Galleria d'Arte Digitale</h1>
    <p class="subtitle">Le opere di Angelica Domenici e Stefano Domenici</p>
</header>

<main class="gallery">

    <article class="artwork"
        data-title="Pelledoca"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera1.jfif"
        data-desc="-13 Febbraio 2026

Il disegno rappresenta un Ectonurita..."
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera1.jfif" alt="Pelledoca">
    </article>

    <article class="artwork"
        data-title="Scyllure"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif"
        data-desc="-5 Febbraio 2026

Creatura ispirata a Scylla..."
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif" alt="Scyllure">
    </article>

    <article class="artwork"
        data-title="Spiratrix"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif"
        data-desc="-12 Gennaio 2026"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif" alt="Spiratrix">
    </article>

    <article class="artwork"
        data-title="Maskiume"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif"
        data-desc="-6 Gennaio 2026"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif" alt="Maskiume">
    </article>

    <article class="artwork"
        data-title="Mega Shiinotic"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif"
        data-desc="-10 Aprile 2026"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif" alt="Mega Shiinotic">
    </article>

    <article class="artwork"
        data-title="Milleocchi"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera6.jfif"
        data-desc="-28 Febbraio 2026"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera6.jfif" alt="Milleocchi">
    </article>

</main>

<!-- Lightbox unico -->
<div class="lightbox" id="lightbox">
    <button id="closeBtn">&times;</button>
    <img id="lightboxImg">
    <h2 id="lightboxTitle"></h2>
    <p id="lightboxDesc"></p>
</div>

<script src="script.js"></script>
</body>
</html>
