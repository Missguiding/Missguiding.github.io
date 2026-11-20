
:root {
    --background: #F8F5F1;
    --text: #40362F;
    --accent: #A56D4D;
    --white: white;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: var(--background);
    font-family: Inter, sans-serif;
    color: var(--text);
}

/* =======================================
   Header
======================================= */

header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 25px 70px;
    z-index: 999;
    background: rgba(255,255,255,.55);
    backdrop-filter: blur(12px);
}

.logo {
    font-family: "Cormorant Garamond", serif;
    font-size: 34px;
}

.logo span {
    font-weight: 600;
}

nav {
    display: flex;
    gap: 40px;
}

nav a {
    text-decoration: none;
    color: var(--text);
    font-weight: 500;
    transition: .3s;
}

nav a:hover {
    color: var(--accent);
}

/* =======================================
   Hero
======================================= */

.hero {
    height: 100vh;
    position: relative;
    overflow: hidden;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
}

.hero-overlay {
    position: absolute;
    inset: 0;
    background: rgba(0,0,0,.28);
}

.hero-content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    color: white;
    width: 90%;
    max-width: 700px;
}

.hero-content h1 {
    font-family: "Cormorant Garamond", serif;
    font-size: 90px;
    font-weight: 500;
    margin-bottom: 20px;
}

.hero-content p {
    font-size: 24px;
    line-height: 1.8;
    margin-bottom: 40px;
}

.button {
    display: inline-block;
    padding: 18px 45px;
    background: var(--accent);
    color: white;
    text-decoration: none;
    border-radius: 40px;
    transition: .3s;
}

.button:hover {
    transform: translateY(-3px);
}

/* =======================================
   Algemene secties
======================================= */

section {
    padding: 110px 10%;
}

h2 {
    font-family: "Cormorant Garamond", serif;
    font-size: 56px;
    text-align: center;
    margin-bottom: 20px;
}

.subtitle {
    text-align: center;
    margin-bottom: 60px;
    font-size: 20px;
    color: #777;
}

/* =======================================
   Over Maison LouLin
======================================= */

#about {
    max-width: 950px;
    margin: auto;
    text-align: center;
    line-height: 2;
    font-size: 20px;
}

.story-subtitle {
    margin-top: 50px;
    margin-bottom: 25px;
}

/* =======================================
   Art Carousel
======================================= */

.carousel {
    overflow: hidden;
    margin-top: 70px;
    padding: 40px 0;
}

.carousel-track {
    display: flex;
    align-items: center;
    gap: 45px;
    width: max-content;
    animation: galleryMove 55s linear infinite;
}

.carousel:hover .carousel-track {
    animation-play-state: paused;
}

.art-piece {
    background: #fff;
    padding: 14px;
    width: 280px;
    height: 340px;
    box-shadow: 0 20px 40px rgba(80,60,40,.15);
    transition: .4s;
}

.art-piece img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: pointer;
}

.art-piece:hover {
    transform: translateY(-15px) scale(1.04);
}

.tall {
    height: 460px;
}

.wide {
    width: 420px;
}

.rotate-left {
    transform: rotate(-2deg);
}

.rotate-right {
    transform: rotate(2deg);
}

@keyframes galleryMove {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-50%);
    }
}

/* =======================================
   Galerij
======================================= */

#gallery {
    background: #F4EEE7;
    overflow: hidden;
}

/* =======================================
   New Arrivals
======================================= */


#new-arrivals {
    background: var(--background);
    color: var(--text);
}

.arrivals-grid {
    max-width: 1000px;
    margin: 50px auto 0;
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 35px;
    align-items: stretch;
}

.arrival-piece {
    position: relative;
    background: white;
    padding: 14px;
    box-shadow: 0 15px 35px rgba(80,60,40,.12);
    transition: transform .3s ease, box-shadow .3s ease;
}

.arrival-piece:hover {
    transform: translateY(-5px);
    box-shadow: 0 20px 40px rgba(80,60,40,.17);
}

.arrival-piece img {
    width: 100%;
    height: 360px;
    object-fit: cover;
    display: block;
    cursor: pointer;
}

/* Labels */

.arrival-label {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 2;
    background: var(--accent);
    color: white;
    padding: 8px 14px;
    font-family: "Cormorant Garamond", serif;
    font-size: 16px;
    letter-spacing: 1px;
}

/* Smartphone */

@media (max-width: 600px) {
    .arrivals-grid {
        grid-template-columns: 1fr;
        gap: 25px;
        padding: 0 15px;
    }

    .arrival-piece img {
        height: 320px;
    }
}

/* Nieuw-label */

.arrival-label {
    position: absolute;
    top: 25px;
    left: 25px;
    z-index: 2;
    background: var(--accent);
    color: white;
    padding: 8px 14px;
    font-family: "Cormorant Garamond", serif;
    font-size: 16px;
    letter-spacing: 1px;
    transform: rotate(-8deg);
}

/* =======================================
   Lightbox
======================================= */

.lightbox {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,.92);
    display: none;
    justify-content: center;
    align-items: center;
    z-index: 5000;
}

.lightbox img {
    max-width: 90%;
    max-height: 85%;
    object-fit: contain;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0,0,0,.5);
}

.close {
    position: absolute;
    top: 30px;
    right: 40px;
    color: white;
    font-size: 45px;
    cursor: pointer;
}

.prev,
.next {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    color: white;
    font-size: 60px;
    cursor: pointer;
    user-select: none;
}

.prev {
    left: 40px;
}

.next {
    right: 40px;
}

/* =======================================
   Scroll animaties
======================================= */

.fade-in {
    opacity: 0;
    transform: translateY(40px);
    transition: opacity 1s ease, transform 1s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

.fade-slow {
    opacity: 0;
    transform: translateY(60px);
    transition: opacity 1.5s ease, transform 1.5s ease;
}

.fade-slow.visible {
    opacity: 1;
    transform: translateY(0);
}

.image-reveal {
    opacity: 0;
    transform: scale(.95);
    transition: opacity 1.2s ease, transform 1.2s ease;
}

.image-reveal.visible {
    opacity: 1;
    transform: scale(1);
}

/* =======================================
   Signatuur
======================================= */

.signature {
    text-align: center;
    margin-top: 50px;
}

.signature img {
    width: 120px;
    height: auto;
    opacity: .9;
    transition: .4s;
}

.signature img:hover {
    transform: scale(1.08) rotate(-3deg);
}

.signature p {
    margin-top: 15px;
    font-style: italic;
    color: #777;
}

/* =======================================
   Contact en footer
======================================= */

#contact {
    text-align: center;
}

#contact a {
    color: var(--accent);
    font-size: 22px;
    text-decoration: none;
}

.contact-mail {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 12px;
}

.contact-mail i {
    font-size: 24px;
    color: var(--accent);
}

.contact-mail a {
    color: var(--accent);
    font-size: 22px;
    text-decoration: none;
}

footer {
    padding: 40px;
    text-align: center;
    background: white;
}

/* =======================================
   Tablet
======================================= */

@media (max-width: 1024px) {

    header {
        padding: 20px 35px;
    }

    .hero-content h1 {
        font-size: 70px;
    }

    .hero-content p {
        font-size: 20px;
    }

    nav {
        gap: 20px;
    }

    .art-piece {
        width: 220px;
        height: 280px;
    }

    .tall {
        height: 360px;
    }

    .wide {
        width: 320px;
    }
}

/* =======================================
   Smartphone
======================================= */

@media (max-width: 768px) {

    header {
        flex-direction: column;
        padding: 15px;
        gap: 15px;
    }

    .logo {
        font-size: 28px;
    }

    nav {
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
    }

    .hero {
        height: 85vh;
    }

    .hero-content h1 {
        font-size: 52px;
    }

    .hero-content p {
        font-size: 18px;
    }

    .button {
        padding: 15px 30px;
    }

    section {
        padding: 80px 7%;
    }

    h2 {
        font-size: 42px;
    }

    .subtitle {
        font-size: 18px;
    }

    .art-piece {
        width: 180px;
        height: 230px;
    }

    .tall {
        height: 300px;
    }

    .wide {
        width: 260px;
    }

    .arrivals-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }

    .arrival-piece:nth-child(2) {
        transform: none;
    }

    .arrival-piece img {
        height: 380px;
    }

    .prev {
        left: 15px;
    }

    .next {
        right: 15px;
    }
}

/* =======================================
   Kleine smartphone
======================================= */

@media (max-width: 480px) {

    .hero-content h1 {
        font-size: 42px;
    }

    .hero-content p {
        font-size: 16px;
    }

    .button {
        width: 100%;
        max-width: 260px;
    }

    .logo {
        font-size: 24px;
    }

    nav {
        font-size: 15px;
    }

    h2 {
        font-size: 34px;
    }

    .subtitle {
        font-size: 16px;
    }

    .art-piece {
        width: 150px;
        height: 200px;
    }

    .tall {
        height: 260px;
    }

    .wide {
        width: 220px;
    }

    .arrival-piece img {
        height: 320px;
    }

    .close {
        top: 15px;
        right: 20px;
    }

    .prev,
    .next {
        font-size: 42px;
    }
}


/* =======================================
   Statuslabels bij alle creaties
======================================= */

.art-piece,
.arrival-piece {
    position: relative;
}

.piece-status {
    position: absolute;
    top: 24px;
    left: 24px;
    z-index: 5;
    display: inline-block;
    max-width: calc(100% - 48px);
    padding: 8px 12px;
    border-radius: 2px;
    background: rgba(248, 245, 241, .94);
    color: var(--text);
    font-family: "Cormorant Garamond", serif;
    font-size: 16px;
    line-height: 1.15;
    letter-spacing: .2px;
    box-shadow: 0 3px 12px rgba(64, 54, 47, .10);
    pointer-events: none;
}

.status-new {
    background: rgba(165, 109, 77, .96);
    color: white;
}

.status-available {
    background: rgba(248, 245, 241, .96);
    color: var(--text);
}

.status-gifted {
    background: rgba(64, 54, 47, .88);
    color: white;
}

/* =======================================
   Een stuk dat je raakt? - contactboodschap
======================================= */

.interest-section {
    background: var(--background);
    padding-top: 85px;
    padding-bottom: 90px;
    text-align: center;
}

.interest-content {
    max-width: 760px;
    margin: 0 auto;
}

.interest-content h2 {
    margin-bottom: 22px;
}

.interest-content p {
    max-width: 700px;
    margin: 0 auto 30px;
    color: #665F59;
    font-size: 18px;
    line-height: 1.9;
}

.interest-button {
    display: inline-block;
    padding: 14px 30px;
    border: 1px solid var(--accent);
    color: var(--accent);
    text-decoration: none;
    font-size: 16px;
    letter-spacing: .3px;
    transition: background .3s ease, color .3s ease;
}

.interest-button:hover {
    background: var(--accent);
    color: white;
}

@media (max-width: 768px) {
    .piece-status {
        top: 18px;
        left: 18px;
        max-width: calc(100% - 36px);
        padding: 7px 9px;
        font-size: 14px;
    }

    .interest-section {
        padding-top: 65px;
        padding-bottom: 70px;
    }

        .interest-content p {
        font-size: 16px;
    }

    
    
/* Maison LouLin - interactieve social media knoppen */

.ml-socials {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 24px;
    margin: 32px auto 18px;
}

.ml-social-button {
    box-sizing: border-box;
    display: inline-flex;
    flex: 0 0 54px;
    width: 54px;
    height: 54px;
    align-items: center;
    justify-content: center;

    border: 1px solid #A56D4D;
    border-radius: 50%;
    background: #FFFFFF;
    color: #A56D4D;

    text-decoration: none;
    font-size: 27px;
    line-height: 1;
    cursor: pointer;

    box-shadow: 0 3px 9px rgba(64, 54, 47, 0.10);

    transition:
        background 0.25s ease,
        color 0.25s ease,
        transform 0.25s ease,
        box-shadow 0.25s ease;
}

.ml-social-button:hover {
    background: #A56D4D;
    color: #FFFFFF;
    transform: translateY(-4px) scale(1.08);
    box-shadow: 0 7px 15px rgba(64, 54, 47, 0.18);
}

.ml-social-button:focus-visible {
    outline: 3px solid #A56D4D;
    outline-offset: 4px;
}

.ml-mail-icon {
    font-size: 25px;
}

.ml-instagram-icon {
    font-size: 34px;
    font-weight: 300;
}

.ml-facebook-icon {
    font-family: Arial, sans-serif;
    font-size: 29px;
    font-weight: bold;
}
