window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. Apparition de la bulle (0.5s après le chargement)
    setTimeout(() => {
        bubble.classList.add('show-element');
    }, 500);

    // 2. Apparition des cartes (2s après le chargement)
    setTimeout(() => {
        cards.classList.add('show-element');
    }, 2000);
});
