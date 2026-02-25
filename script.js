window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. On prépare la bulle à droite (on écrase le -30px du CSS)
    if (bubble) {
        bubble.style.transform = "translateX(100px)";
    }

    // 2. Étape 1 : La bulle arrive de la droite vers le perso
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500);

    // 3. Étape 2 : Les cartes arrivent ensuite avec leur animation
    setTimeout(() => {
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 1800);
});
