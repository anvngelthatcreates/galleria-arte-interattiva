const artworks = document.querySelectorAll(".artwork");
const lightbox = document.getElementById("lightbox");
const img = document.getElementById("lightboxImg");
const title = document.getElementById("lightboxTitle");
const desc = document.getElementById("lightboxDesc");
const closeBtn = document.getElementById("closeBtn");

artworks.forEach(a => {
    a.addEventListener("click", () => {
        img.src = a.dataset.img;
        title.textContent = a.dataset.title;
        desc.textContent = a.dataset.desc;
        lightbox.style.display = "block";
    });
});

closeBtn.onclick = () => lightbox.style.display = "none";
