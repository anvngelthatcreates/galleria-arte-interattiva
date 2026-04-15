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
}

/* HEADER */
header {
    text-align: center;
    padding: 70px 20px 30px;
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

/* CARD */
.card {
    border-radius: 22px;
    overflow: hidden;
    cursor: pointer;

    background: rgba(255,255,255,0.55);
    backdrop-filter: blur(14px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: 0.4s ease;
}

.card:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 25px 50px rgba(0,0,0,0.18);
}

.card img {
    width: 100%;
    height: 240px;
    object-fit: cover;
    display: block;
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
    max-width: 500px;
    text-align: left;

    font-family: 'Playfair Display', serif;
    animation: pop 0.3s ease;
}

.modal-box p {
    font-size: 18px;
    line-height: 1.6;
    font-family: 'Inter', sans-serif;
}

@keyframes pop {
    from { transform: scale(0.8); opacity: 0; }
    to { transform: scale(1); opacity: 1; }
}

.close {
    margin-top: 15px;
    font-size: 13px;
    color: #777;
    text-align: center;
}
</style>
</head>

<body>

<header>
    <h1>Art Gallery</h1>
    <p class="subtitle">Clicca un’opera per scoprire la sua storia</p>
</header>

<div class="gallery">

    <div class="card" onclick="show(0)">
        <img src="gioconda.jpg" alt="La Gioconda">
    </div>

    <div class="card" onclick="show(1)">
        <img src="girasoli.jpg" alt="I Girasoli">
    </div>

    <div class="card" onclick="show(2)">
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
const artworks = [
`<b>La Gioconda</b> – Leonardo da Vinci<br><br>
Realizzata tra il 1503 e il 1506, è uno dei dipinti più celebri al mondo. 
Raffigura Lisa Gherardini e colpisce per il suo enigmatico sorriso e per la tecnica dello sfumato,
che dona profondità e realismo straordinario. È considerata simbolo del Rinascimento italiano.`,

`<b>I Girasoli</b> – Vincent van Gogh<br><br>
Serie realizzata tra il 1888 e il 1889 ad Arles. 
Van Gogh utilizza tonalità calde per esprimere emozioni intense legate alla luce e alla natura.
I girasoli rappresentano vitalità, amicizia e la ricerca della bellezza nella semplicità.`,

`<b>L’Assenzio</b> – Edgar Degas<br><br>
Dipinto nel 1876, rappresenta due figure sedute in un bar parigino.
L’opera riflette l’alienazione sociale della Parigi moderna,
mostrando la solitudine anche in un contesto urbano affollato.
È una critica sottile alla società della Belle Époque.`
];

function show(i) {
    document.getElementById("text").innerHTML = artworks[i];
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
