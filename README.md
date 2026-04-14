<!DOCTYPE html>
<html lang="it">
<head>
    <meta charset="UTF-8">
    <title>Galleria d'Arte Interattiva</title>
</head>
<body>

<h1>La mia Galleria d'Arte Interattiva</h1>
<p>Clicca sulle opere per scoprire il loro significato.</p>

<img src="opera1.jpg" width="300" onclick="mostra('Descrizione della prima opera')">
<img src="opera2.jpg" width="300" onclick="mostra('Descrizione della seconda opera')">
<img src="opera3.jpg" width="300" onclick="mostra('Descrizione della terza opera')">
<img src="opera4.jpg" width="300" onclick="mostra('Descrizione della quarta opera')">

<p id="testo"></p>

<script>
function mostra(testo) {
    document.getElementById("testo").innerText = testo;
}
</script>

</body>
</html>
