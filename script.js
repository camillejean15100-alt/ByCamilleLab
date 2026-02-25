window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // --- ÉTAPE 1 : APPARITION DE LA BULLE ---
    // Elle arrive vers Camille (0.5s après le chargement)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500);

    // --- ÉTAPE 2 : DISPARITION DE LA BULLE ---
    // On la cache après 3 secondes pour laisser le temps de lire
    setTimeout(() => {
        if (bubble) {
            bubble.style.opacity = "0";
            bubble.style.transform = "translateX(50px)"; // Petit effet de recul
            bubble.style.transition = "all 0.5s ease-in";
        }
    }, 3500);

    // --- ÉTAPE 3 : APPARITION DES CARTES ---
    // Une fois la bulle partie, on affiche les 3 cartes (image 3)
    setTimeout(() => {
        if (bubble) {
            bubble.style.display = "none"; // Supprime l'espace pour pas décaler les cartes
        }
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 4000);
});
