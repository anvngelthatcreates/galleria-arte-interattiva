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
    <p class="subtitle">Le opere di Stefano Domenici, sito creato da Angelica Domenici</p>
</header>

<main class="gallery">

    <article class="artwork" data-id="1"
        data-title="Pelledoca"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera1.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera1.jfif">
    </article>

    <article class="artwork" data-id="2"
        data-title="Scyllure"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif">
    </article>

    <article class="artwork" data-id="3"
        data-title="Spiratrix"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif">
    </article>

    <article class="artwork" data-id="4"
        data-title="Maskiume"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif">
    </article>

    <article class="artwork" data-id="5"
        data-title="Mega Shiinotic"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif">
    </article>

    <article class="artwork" data-id="6"
        data-title="Milleocchi"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera6.jfif">
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera6.jfif">
    </article>

</main>

<div class="lightbox" id="lightbox">
    <button id="closeBtn">&times;</button>
    <img id="lightboxImg">
    <h2 id="lightboxTitle"></h2>
    <p id="lightboxDesc"></p>
</div>

<script src="script.js"></script>
</body>
</html>
