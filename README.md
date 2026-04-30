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

    <!-- 1 -->
    <article class="artwork" data-id="1">
        <img src="img/opera1.jfif" alt="Pelledoca">
    </article>

    <!-- 2 -->
    <article class="artwork" data-id="2">
        <img src="img/opera2.jfif" alt="Scyllure">
    </article>

    <!-- 3 -->
    <article class="artwork" data-id="3">
        <img src="img/opera3.jfif" alt="Spiratrix">
    </article>

    <!-- 4 -->
    <article class="artwork" data-id="4">
        <img src="img/opera4.jfif" alt="Maskiume">
    </article>

    <!-- 5 -->
    <article class="artwork" data-id="5">
        <img src="img/opera5.jfif" alt="Mega Shiinotic">
    </article>

    <!-- 6 -->
    <article class="artwork" data-id="6">
        <img src="img/opera6.jfif" alt="Milleocchi">
    </article>

</main>

<!-- LIGHTBOX UNICO CORRETTO -->
<div class="lightbox" id="lightbox">
    <button id="closeBtn">&times;</button>
    <img id="lightboxImg">
    <h2 id="lightboxTitle"></h2>
    <p id="lightboxDesc"></p>
</div>

<script src="script.js"></script>
</body>
</html>
