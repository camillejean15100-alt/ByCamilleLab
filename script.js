window.addEventListener('load', () => {
    // 1. La bulle
    setTimeout(() => {
        document.getElementById('mission-bubble').classList.add('is-visible');
    }, 500);

    // 2. Les cartes
    setTimeout(() => {
        document.getElementById('cards-container').classList.add('is-visible');
    }, 1800);
});
