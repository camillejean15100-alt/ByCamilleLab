window.addEventListener('load', () => {
    // 1. Apparition de la bulle (0.5s)
    setTimeout(() => {
        document.getElementById('mission-bubble').classList.add('is-visible');
    }, 500);

    // 2. Apparition des cartes (1.8s)
    setTimeout(() => {
        document.getElementById('cards-container').classList.add('is-visible');
    }, 1800);
});
