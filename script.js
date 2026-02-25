window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. Apparition de la bulle vers le perso
    setTimeout(() => {
        if(bubble) bubble.classList.add('is-visible');
    }, 500);

    // 2. Apparition des cartes vers le tournesol
    setTimeout(() => {
        if(cards) cards.classList.add('is-visible');
    }, 1500);
});
