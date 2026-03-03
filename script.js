document.addEventListener('DOMContentLoaded', () => {
    // 1. On cible la bulle et les cartes
    const bulle = document.querySelector('.speech-bubble');
    const cartes = document.querySelectorAll('.card');

    // ÉTAPE 1 : Afficher la bulle après 400ms
    setTimeout(() => {
        if (bulle) {
            bulle.classList.remove('hidden');
            bulle.classList.add('show');
        }
    }, 400);

});
