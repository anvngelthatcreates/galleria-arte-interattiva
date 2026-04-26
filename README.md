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

Il disegno rappresenta un Ectonurita, una specie aliena presente nell'universo di Ben 10, hanno una forma simile a quella di un fantasma tradizionale ed un corpo capace di diventare intangibile o invisibile, il soggetto é nel mezzo di attraversare una parete, mettendo in evidenza gli artigli e l'unico occhio viola luminoso, un colore simbolo della galassia dove si trova il suo pianeta, Anur Phaetos"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera1.jfif" alt="Pelledoca">
    </article>

    <article class="artwork"
        data-title="Scyllure"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif"
        data-desc="-5 Febbraio 2026

Il disegno rappresenta una creatura fantastica originale ispirata alla leggenda Greca di Scylla, spesso rappresentata come una donna con molteplici tentacoli, questa creature presenta caratteristiche di alte creature abissali, come l'organo luminoso del pesce lanterna, la coda sinuosa delle anguille, delle pinne e capelli pronunciati come quelle delle sirene e una assenza di braccia, un teschio è incastrato sulla punta della coda, richiamando la leggenda Greca della donna trasformata in mostro marino e delle sue molteplici teste"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera2.jfif" alt="Scyllure">
    </article>

    <article class="artwork"
        data-title="Spiratrix"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif"
        data-desc="-12 Gennaio 2026
        Il disegno rappresenta una creatura fantastica originale ispirata alla Biddrina, un serpente mitico del folclore siciliano, altre ispirazioni aggiunte al design sono le Vipere, Biscie, Gladiatrici, Guerriere Amazzoni (principalmente attraverso le squame lucide simili ad un armatura), la Sica (una spada curva usata dai gladiatori), le Anguane e la Accabadora, rispettivamente leggende del nord Italia e Sardegna, parziali ispirazioni al Basilisco e i suoi occhi cremisi sono anch'esse presenti"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera3.jfif" alt="Spiratrix">
    </article>

    <article class="artwork"
        data-title="Maskiume"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif"
        data-desc="-6 Gennaio 2026
        La figura rappresenta un animale fantastico originale ispirato alle zanzare e a diversi simboli della città di Venezia, il collare peloso e la lunga proboscide richiamano la forma delle maschere di carnevale della città, oltre all'abbigliamento di una donna di alta classe, l'addome, contenente del sangue (suggerendo un genere femminile nella specie) è semi trasparente, richiamando sia i souvenir di vetro a forma di insetti (tra cui le zanzare) che possono essere acquistati nella città, ma anche alle boccette di profumo, anch'esse presenti in essa, la forte ispirazione a Venezia viene dal fatto che le zanzare sono in grado di riprodursi unicamente attraverso una fonte d'acqua dove deporre le uova, fattore principale della città"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera4.jfif" alt="Maskiume">
    </article>

    <article class="artwork"
        data-title="Mega Shiinotic"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif"
        data-desc="-10 Aprile 2026
        Il disegno rappresenta una forma "fan made" (creata da un fan) di una mega evoluzione del Pokémon Shiinotic, il design, ora ispirato ad una Mazza di Tamburo, anche conosciuta come Fungo Ombrello, diventa estremamente più alta e snella, mettendo in risalto il pileo, ovvero il cappello del fungo, il Pokémon risulta quasi totalmente violaceo, includendo le fronde che pendono dal cappello, rendendo chiaro la presenza del tipo veleno, anziché del tipo erba"
    >
        <img src="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera5.jfif" alt="Mega Shiinotic">
    </article>

    <article class="artwork"
        data-title="Milleocchi"
        data-img="https://raw.githubusercontent.com/anvngelthatcreates/galleria-arte-interattiva/main/opera6.jfif"
        data-desc="-28 Febbraio 2026
        Il disegno presenta un Opticoid, una specie aliena presente nell'universo di Ben 10, il corpo é muscolare e accovacciato, mettendo in evidenza gli occhi verdi, in contrasto con la pelle giallognola, la parte del corpo messa principalmente in evidenza sono le orecchie, sproporzionatamente grandi permettono un udito estremamente acuto in addizione ad una visione a 360° gradi"
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
