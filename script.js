window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. D'abord la bulle à côté du perso (après 0.5s)
    setTimeout(() => {
        if (bubble) {
            // On s'assure que l'élément est affiché et on lance l'animation
            bubble.style.display = 'flex'; 
            // On utilise la classe que tu as définie dans ton CSS pour l'animation
            bubble.classList.add('is-visible'); 
        }
    }, 500);

    // 2. Ensuite les cartes (après 1.8s)
    setTimeout(() => {
        if (cards) {
            // On passe en flex et on lance l'animation
            cards.style.display = 'flex';
            cards.classList.add('is-visible');
        }
    }, 1800);
});
