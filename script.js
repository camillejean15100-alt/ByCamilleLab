window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // Étape 1 : Faire apparaître la bulle à côté du perso (0.5s après chargement)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500);

    // Étape 2 : Faire apparaître les cartes après la bulle (1.8s après chargement)
    setTimeout(() => {
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 1800);
});
