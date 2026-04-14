<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Art Gallery</title>

<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: radial-gradient(circle at top, #f7f7fb, #e6e6ee);
    color: #1a1a1a;
    overflow-x: hidden;
}

/* HEADER */
header {
    text-align: center;
    padding: 80px 20px 40px;
}

h1 {
    font-family: 'Playfair Display', serif;
    font-size: 64px;
    letter-spacing: 1px;
}

.subtitle {
    margin-top: 10px;
    color: #666;
    font-weight: 300;
}

/* GRID */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 30px;
    padding: 50px;
    max-width: 1100px;
    margin: auto;
}

/* CARD SOPHISTICATA */
.card {
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;

    background: rgba(255,255,255,0.55);
    backdrop-filter: blur(14px);

    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
}

.card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 25px 50px rgba(0,0,0,0.18);
}

.card {
    position: relative;
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;

    background: rgba(255,255,255,0.55);
    backdrop-filter: blur(14px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.4s ease;

    display: flex;
    flex-direction: column;
}

.card img {
    width: 100%;
    height: 240px;
    display: block;

    object-fit: cover;
    object-position: center center;

    flex-shrink: 0;
}

    /* FIX IMPORTANTE */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

/* 🔥 FIX DEFINITIVO IMMAGINI CENTRATE */
.card img {
    width: 100%;
    height: 240px;
    object-fit: cover;

    display: block;

    /* elimina “effetto decentrato” */
    object-position: center;
}

/* opzionale ma rende tutto più pulito */
.gallery {
    align-items: stretch;
}

/* overlay elegante */
.card::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to top, rgba(0,0,0,0.25), transparent);
    opacity: 0;
    transition: 0.3s;
}

.card:hover::after {
    opacity: 1;
}

/* MODAL */
.modal {
    position: fixed;
    inset: 0;
    display: none;
    justify-content: center;
    align-items: center;
    background: rgba(0,0,0,0.65);
    backdrop-filter: blur(6px);
}

.modal-box {
    background: white;
    padding: 30px 35px;
    border-radius: 25px;
    max-width: 420px;
    text-align: center;

    font-family: 'Playfair Display', serif;
    font-size: 20px;

    animation: pop 0.3s ease;
}

@keyframes pop {
    from {
        transform: scale(0.8);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
}

.close {
    margin-top: 15px;
    font-size: 13px;
    color: #777;
}

/* piccoli dettagli premium */
::selection {
    background: #000;
    color: #fff;
}
</style>
</head>

<body>

<header>
    <h1>Art Gallery</h1>
    <p class="subtitle">Clicca un’opera per esplorarne la storia</p>
</header>

<div class="gallery">

    <div class="card" onclick="show('La Gioconda – Leonardo da Vinci, simbolo del mistero e del Rinascimento')">
        <img src="gioconda.jpg" alt="La Gioconda">
    </div>

    <div class="card" onclick="show('I Girasoli – Van Gogh, energia pura e luce emotiva')">
        <img src="girasoli.jpg" alt="I Girasoli">
    </div>

    <div class="card" onclick="show('L\'Assenzio – Degas, atmosfera sospesa tra realtà e sogno')">
        <img src="assenzio.jpg" alt="L'Assenzio">
    </div>

</div>

<!-- MODAL -->
<div id="modal" class="modal" onclick="closeModal(event)">
    <div class="modal-box">
        <p id="text"></p>
        <div class="close">clicca fuori per chiudere</div>
    </div>
</div>

<script>
function show(text) {
    document.getElementById("text").innerText = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal(e) {
    if (e.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
}
</script>

</body>
</html>
