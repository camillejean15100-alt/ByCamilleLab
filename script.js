
window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. LA BULLE APPARAIT (Image 1)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500);

    // 2. LA BULLE DISPARAIT (Transition vers Image 3)
    // On attend 3 secondes pour laisser lire le texte
    setTimeout(() => {
        if (bubble) {
            bubble.style.opacity = "0";
            bubble.style.transform = "translateX(50px)";
            bubble.style.transition = "all 0.5s ease";
        }
    }, 3500);

    // 3. LES CARTES APPARAISSENT (Image 3)
    // On retire la bulle du flux pour que les cartes se placent bien
    setTimeout(() => {
        if (bubble) bubble.style.display = "none";
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 4000);
});
