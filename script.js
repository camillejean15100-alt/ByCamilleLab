window.addEventListener('load', () => {
    // On récupère tes éléments par leurs IDs actuels
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // ÉTAPE 1 : Faire apparaître la bulle à côté du perso
    setTimeout(() => {
        if (bubble) {
            bubble.style.opacity = "1";
            bubble.style.transform = "translateX(0)";
            // Si tu utilises une classe pour l'animation, on l'ajoute ici :
            bubble.classList.add('visible'); 
        }
    }, 500); // 0.5 seconde après le chargement

    // ÉTAPE 2 : Faire apparaître les cartes après la bulle
    setTimeout(() => {
        if (cards) {
            cards.style.display = "flex"; // On force le passage en flex si besoin
            cards.style.opacity = "1";
            cards.style.transform = "translateX(0)";
            // Si tu utilises une classe pour l'animation, on l'ajoute ici :
            cards.classList.add('visible');
        }
    }, 2000); // 2 secondes après le chargement pour bien marquer le décalage
});
