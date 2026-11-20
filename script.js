
// =======================================
// Maison LouLin
// Foto's, statussen en lightbox
// =======================================

// Nieuwe creaties in New Arrivals.
// Status: "new", "available" of "gifted".
const newArrivals = [
    { image: "new-01.jpg", status: "new" },
    { image: "new-02.jpg", status: "gifted" },
    { image: "new-03.jpg", status: "gifted" },
    { image: "new-04.jpg", status: "new" }
];

// Status van de foto's in de gewone galerij.
// Pas "available" aan naar "gifted" voor geschonken stukken.
const galleryPieces = {
    "collectie-01.jpg": "available",
    "collectie-02.jpg": "available",
    "collectie-03.jpg": "available",
    "collectie-04.jpg": "",
    "collectie-05.jpg": "available",
    "collectie-06.jpg": "",
    "collectie-07.jpg": "",
    "collectie-08.jpg": "available",
    "collectie-09.jpg": "",
    "collectie-10.jpg": "",
    "collectie-11.jpg": "",
    "collectie-12.jpg": "available"
};

const statusLabels = {
    new: "Nieuw",
    available: "Uw hart gewonnen?",
    gifted: "Iemand blij gemaakt!",
    ownuse: ""
};

document.addEventListener("DOMContentLoaded", () => {

    function addStatusLabel(container, status) {
        const labelText = statusLabels[status];
        if (!labelText) return;

        const label = document.createElement("span");
        label.className = `piece-status status-${status}`;
        label.textContent = labelText;
        container.appendChild(label);
    }

    // New Arrivals automatisch opbouwen
    const arrivalsGrid = document.getElementById("arrivals-grid");

    if (arrivalsGrid) {
        newArrivals.forEach((item, index) => {
            const piece = document.createElement("div");
            piece.className = "arrival-piece";

            addStatusLabel(piece, item.status);

            const img = document.createElement("img");
            img.src = `images/new/${item.image}`;
            img.alt = `Keramiekcreatie Maison LouLin ${index + 1}`;
            img.loading = "lazy";

            piece.appendChild(img);
            arrivalsGrid.appendChild(piece);
        });
    }

    // Statuslabels op de gewone galerijfoto's
    document.querySelectorAll(".art-piece img").forEach(image => {
        const filename = image.getAttribute("src").split("/").pop();
        const status = galleryPieces[filename];

        const piece = image.closest(".art-piece");
        if (piece) addStatusLabel(piece, status);
    });

    // Lightbox voor alle foto's
    const images = Array.from(
        document.querySelectorAll(".arrival-piece img, .art-piece img")
    );

    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightbox-image");
    const closeButton = document.querySelector(".close");
    const nextButton = document.querySelector(".next");
    const prevButton = document.querySelector(".prev");

    if (lightbox && lightboxImage && closeButton && nextButton && prevButton) {
        let currentIndex = 0;

        function openLightbox() {
            lightboxImage.src = images[currentIndex].src;
            lightbox.style.display = "flex";
        }

        function closeLightbox() {
            lightbox.style.display = "none";
        }

        function showNext() {
            currentIndex = (currentIndex + 1) % images.length;
            lightboxImage.src = images[currentIndex].src;
        }

        function showPrevious() {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            lightboxImage.src = images[currentIndex].src;
        }

        images.forEach((image, index) => {
            image.addEventListener("click", () => {
                currentIndex = index;
                openLightbox();
            });
        });

        closeButton.addEventListener("click", closeLightbox);
        nextButton.addEventListener("click", showNext);
        prevButton.addEventListener("click", showPrevious);

        lightbox.addEventListener("click", event => {
            if (event.target === lightbox) closeLightbox();
        });

        document.addEventListener("keydown", event => {
            if (lightbox.style.display === "flex") {
                if (event.key === "Escape") closeLightbox();
                if (event.key === "ArrowRight") showNext();
                if (event.key === "ArrowLeft") showPrevious();
            }
        });
    }

    // Bestaande scrollanimaties
    const animatedElements = document.querySelectorAll(
        ".fade-in, .fade-slow, .image-reveal"
    );

    if ("IntersectionObserver" in window) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        animatedElements.forEach(element => observer.observe(element));
    } else {
        animatedElements.forEach(element => element.classList.add("visible"));
    }
});

