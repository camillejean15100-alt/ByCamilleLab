document.addEventListener("DOMContentLoaded", () => {
    const bubble = document.querySelector('.speech-bubble');
    const cards = document.querySelectorAll('.card');

    // 1. Apparition de la bulle après 0.5s
    setTimeout(() => {
        bubble.classList.remove('hidden');
        bubble.classList.add('show');
    }, 500);

    // 2. Séquence de transition
    setTimeout(() => {
        // Disparition de la bulle
        bubble.classList.remove('show');
        bubble.classList.add('hidden');

        // Attente de la fin de l'animation de la bulle (0.6s) pour lancer les cartes
        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                }, index * 300); // Apparition en cascade
            });
        }, 600);

    }, 4000); // La bulle reste affichée 4 secondes au total
});
