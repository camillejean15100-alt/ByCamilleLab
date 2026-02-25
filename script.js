window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. Apparition de la bulle
    setTimeout(() => {
        bubble.classList.add('is-visible');
    }, 500);

    // 2. Apparition des cartes un peu après
    setTimeout(() => {
        cards.classList.add('is-visible');
    }, 1500);
});
