window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. Bulle d'abord
    setTimeout(() => {
        bubble.classList.add('is-visible');
    }, 500);

    // 2. Cartes ensuite
    setTimeout(() => {
        cards.classList.add('is-visible');
    }, 1500);
});
