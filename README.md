<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Aesthetic Art Gallery</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: 'Inter', sans-serif;
    background: linear-gradient(135deg, #f6f6f9, #e9e9f0);
    color: #1a1a1a;
    text-align: center;
}

/* HEADER */
h1 {
    font-family: 'Playfair Display', serif;
    font-size: 52px;
    margin-top: 50px;
    letter-spacing: 1px;
}

.subtitle {
    color: #666;
    margin-top: 10px;
    margin-bottom: 30px;
}

/* GALLERY */
.gallery {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 25px;
    padding: 40px;
    max-width: 1100px;
    margin: auto;
}

.card {
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    cursor: pointer;
    transition: 0.4s ease;
}

.card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 15px;
}

/* MODAL */
.modal {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0,0,0,0.6);
    justify-content: center;
    align-items: center;
    padding: 20px;
}

.modal-content {
    background: white;
    padding: 30px;
    border-radius: 20px;
    max-width: 400px;
    font-family: 'Playfair Display', serif;
    font-size: 20px;
    box-shadow: 0 20px 50px rgba(0,0,0,0.3);
}

.close {
    margin-top: 20px;
    display: inline-block;
    cursor: pointer;
    font-size: 14px;
    color: #666;
}
</style>
</head>

<body>

<h1>Art Gallery</h1>
<p class="subtitle">CLICCA UN'OPERA PER SCOPRIRNE LA STORIA</p>

<div class="gallery">

    <div class="card" onclick="openModal('La Gioconda – Leonardo da Vinci, simbolo del mistero e del Rinascimento')">
        <img src="gioconda.jpg" alt="La Gioconda">
    </div>

    <div class="card" onclick="openModal('I Girasoli – Vincent van Gogh, energia pura e luce')">
        <img src="girasoli.jpg" alt="I Girasoli">
    </div>

    <div class="card" onclick="openModal('L\'Assenzio – Edgar Degas, atmosfera della Belle Époque tra sogno e realtà')">
        <img src="assenzio.jpg" alt="L'Assenzio">
    </div>

</div>

<!-- MODAL -->
<div id="modal" class="modal" onclick="closeModal(event)">
    <div class="modal-content">
        <p id="modalText"></p>
        <div class="close">Clicca ovunque per chiudere</div>
    </div>
</div>

<script>
function openModal(text) {
    document.getElementById("modalText").innerText = text;
    document.getElementById("modal").style.display = "flex";
}

function closeModal(event) {
    if (event.target.id === "modal") {
        document.getElementById("modal").style.display = "none";
    }
}
</script>

</body>
</html>
