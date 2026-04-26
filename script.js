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
        desc.innerHTML = a.dataset.desc.replace(/\n/g, "<br>");
        lightbox.style.display = "block";
    });
});

closeBtn.onclick = () => lightbox.style.display = "none";

lightbox.addEventListener("click", e => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});
