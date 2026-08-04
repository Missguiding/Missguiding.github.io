// =======================================
// Maison LouLin
// Lightbox galerij
// =======================================


document.addEventListener("DOMContentLoaded", () => {


    const images = document.querySelectorAll(".art-piece img");

    const lightbox = document.getElementById("lightbox");

    const lightboxImage = document.getElementById("lightbox-image");

    const closeButton = document.querySelector(".close");

    const nextButton = document.querySelector(".next");

    const prevButton = document.querySelector(".prev");


    let currentIndex = 0;



    // Foto openen

   images.forEach((image, index)=>{


    console.log("klikfunctie actief op foto", index);


    image.addEventListener("click", ()=>{


        currentIndex = index;

        openLightbox();


    });


});



    function openLightbox(){

    
    lightbox.style.display = "flex";

    lightboxImage.src = images[currentIndex].src;


    }



    function closeLightbox(){


        lightbox.style.display = "none";


    }



    function showNext(){


        currentIndex++;


        if(currentIndex >= images.length){

            currentIndex = 0;

        }


        lightboxImage.src = images[currentIndex].src;


    }



    function showPrevious(){


        currentIndex--;


        if(currentIndex < 0){

            currentIndex = images.length - 1;

        }


        lightboxImage.src = images[currentIndex].src;


    }




    closeButton.addEventListener("click", closeLightbox);


    nextButton.addEventListener("click", showNext);


    prevButton.addEventListener("click", showPrevious);





    // Klik naast foto = sluiten

    lightbox.addEventListener("click", (event)=>{


        if(event.target === lightbox){

            closeLightbox();

        }


    });




    // Toetsenbord bediening

    document.addEventListener("keydown",(event)=>{


        if(lightbox.style.display === "flex"){



            if(event.key === "Escape"){

                closeLightbox();

            }



            if(event.key === "ArrowRight"){

                showNext();

            }



            if(event.key === "ArrowLeft"){

                showPrevious();

            }


        }


    });
    
  // =======================================
// Scroll animaties
// =======================================


const animatedElements = document.querySelectorAll(
    ".fade-in, .fade-slow, .image-reveal"
);


const observer = new IntersectionObserver(
    
    (entries)=>{

        entries.forEach(entry=>{

            if(entry.isIntersecting){

                entry.target.classList.add("visible");

            }

        });

    },

    {
        threshold:0.15
    }

);


animatedElements.forEach(element=>{

    observer.observe(element);

});

});


