window.addEventListener('load', () => {
    // On récupère tes éléments par leurs IDs
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // ÉTAPE 1 : La bulle apparaît d'abord (0.5s après le chargement)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500);

    // ÉTAPE 2 : Les cartes apparaissent après (1.8s pour bien marquer le décalage)
    setTimeout(() => {
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 1800);
});
