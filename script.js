window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // FORCE le départ à droite pour la bulle (ignore le -30px du CSS)
    if (bubble) bubble.style.transform = "translateX(50px)";

    // 1. LA BULLE (Etape 1)
    setTimeout(() => {
        if (bubble) bubble.classList.add('is-visible');
    }, 400);

    // 2. LES CARTES (Etape 2)
    setTimeout(() => {
        if (cards) cards.classList.add('is-visible');
    }, 1600);
});
