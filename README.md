<!DOCTYPE html>
<html lang="it">
<head>
<meta charset="UTF-8">
<title>Aesthetic Art Gallery</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Inter:wght@300;400;500&display=swap" rel="stylesheet">

<style>
body {
    margin: 0;
    background: linear-gradient(135deg, #f6f6f9, #e9e9f0);
    font-family: 'Inter', sans-serif;
    color: #1a1a1a;
    text-align: center;
}

h1 {
    font-family: 'Playfair Display', serif;
    font-size: 48px;
    margin-top: 50px;
    letter-spacing: 1px;
}

p.subtitle {
    color: #666;
    margin-bottom: 30px;
}

.gallery {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 25px;
    padding: 40px;
}

.card {
    width: 220px;
    background: rgba(255,255,255,0.6);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    padding: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.08);
    transition: all 0.4s ease;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-10px) scale(1.03);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15);
}

.card img {
    width: 100%;
    border-radius: 15px;
}

#info {
    margin-top: 30px;
    font-size: 18px;
    color: #333;
    min-height: 40px;
    font-family: 'Playfair Display', serif;
}
</style>
</head>

<body>

<h1>Art Gallery</h1>
<p class="subtitle">clicca un'opera per scoprire la sua storia</p>

<div class="gallery">

<div class="card" onclick="show('La Gioconda – Leonardo da Vinci, simbolo del mistero e del Rinascimento')">
<img src="gioconda.jpg">
</div>

<div class="card" onclick="show('I Girasoli – Van Gogh, energia pura e luce')">
<img src="girasoli.jpg">
</div>

<div class="card" onclick="show('Impressione, levar del sole – Monet, nascita dell’Impressionismo')">
<img src="monet.jpg">
</div>

<div class="card" onclick="show('Il Bacio – Klimt, amore e oro eterno')">
<img src="bacio.jpg">
</div>

</div>

<p id="info"></p>

<script>
function show(text) {
    document.getElementById("info").innerText = text;
}
</script>

</body>
</html>
