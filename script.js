// ===== DATI DELLE OPERE =====
// Modifica qui i titoli e le descrizioni per ogni disegno
const opere = {
    1: {
        titolo: "Titolo Opera 1",
        descrizione: "Qui scrivi la descrizione dell'opera 1. Parla della tecnica, dell'ispirazione, del significato..."
    },
    2: {
        titolo: "Titolo Opera 2",
        descrizione: "Descrizione dell'opera 2. Puoi raccontare la storia dietro questo disegno."
    },
    3: {
        titolo: "Titolo Opera 3",
        descrizione: "Descrizione dell'opera 3. Aggiungi dettagli interessanti per chi guarda."
    },
    4: {
        titolo: "Titolo Opera 4",
        descrizione: "Descrizione dell'opera 4. Cosa ha ispirato tuo fratello?"
    },
    5: {
        titolo: "Titolo Opera 5",
        descrizione: "Descrizione dell'opera 5. Racconta il processo creativo."
    },
    6: {
        titolo: "Titolo Opera 6",
        descrizione: "Descrizione dell'opera 6. Concludi con un'opera speciale!"
    }
};

// ===== ELEMENTI DOM =====
const artworks = document.querySelectorAll('.artwork');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxTitle = document.getElementById('lightboxTitle');
const lightboxDesc = document.getElementById('lightboxDesc');
const closeBtn = document.getElementById('closeBtn');

// ===== APRI LIGHTBOX =====
artworks.forEach(artwork => {
    artwork.addEventListener('click', () => {
        const id = artwork.getAttribute('data-id');
        const img = artwork.querySelector('img');
        const opera = opere[id];

        lightboxImg.src = img.src;
        lightboxImg.alt = opera.titolo;
        lightboxTitle.textContent = opera.titolo;
        lightboxDesc.textContent = opera.descrizione;

        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden'; // Blocca scroll
    });
});

// ===== CHIUDI LIGHTBOX =====
function chiudiLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Ripristina scroll
}

closeBtn.addEventListener('click', chiudiLightbox);

// Chiudi cliccando fuori dall'immagine
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        chiudiLightbox();
    }
});

// Chiudi con tasto ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
        chiudiLightbox();
    }
});
