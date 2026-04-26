<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Galleria d'Arte Digitale</title>
    <link rel="stylesheet" href="style.css">
    <link rel="preconnect" href="[fonts.googleapis.com](https://fonts.googleapis.com)">
    <link href="[fonts.googleapis.com](https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Inter:wght@300;400&display=swap)" rel="stylesheet">
</head>
<body>

    <!-- Sfondo animato -->
    <div class="background-animation"></div>

    <!-- Header -->
    <header>
        <h1>Galleria d'Arte Digitale</h1>
        <p class="subtitle">Le opere di [Nome di tuo fratello]</p>
    </header>

    <!-- Griglia delle opere -->
    <main class="gallery">

        <article class="artwork" data-id="1">
            <img src="img/opera1.jpg" alt="Opera 1">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

        <article class="artwork" data-id="2">
            <img src="img/opera2.jpg" alt="Opera 2">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

        <article class="artwork" data-id="3">
            <img src="img/opera3.jpg" alt="Opera 3">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

        <article class="artwork" data-id="4">
            <img src="img/opera4.jpg" alt="Opera 4">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

        <article class="artwork" data-id="5">
            <img src="img/opera5.jpg" alt="Opera 5">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

        <article class="artwork" data-id="6">
            <img src="img/opera6.jpg" alt="Opera 6">
            <div class="artwork-overlay">
                <span>Scopri l'opera</span>
            </div>
        </article>

    </main>

    <!-- Lightbox / Scheda dettaglio -->
    <div class="lightbox" id="lightbox">
        <button class="close-btn" id="closeBtn" aria-label="Chiudi">&times;</button>
        <div class="lightbox-content">
            <img src="" alt="" id="lightboxImg">
            <div class="lightbox-info">
                <h2 id="lightboxTitle">Titolo Opera</h2>
                <p id="lightboxDesc">Descrizione dell'opera...</p>
            </div>
        </div>
    </div>

    <!-- Footer -->
    <footer>
        <p>Capolavoro PCTO — 2026</p>
    </footer>

    <script src="script.js"></script>
</body>
</html>
