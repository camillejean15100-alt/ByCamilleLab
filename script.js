document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    const cards = document.querySelectorAll('.card');

    // 1. APPARITION DE LA BULLE
    setTimeout(() => {
        if (bubble) {
            bubble.style.display = 'flex'; // On s'assure qu'elle existe
            bubble.classList.add('show');
        }
    }, 500);

    // 2. DISPARITION DE LA BULLE (APRÈS 4 SECONDES)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.replace('show', 'fade-out');
            // On la retire du flux après l'anim pour pas qu'elle gêne
            setTimeout(() => { bubble.style.display = 'none'; }, 600);
        }
    }, 4000);

    // 3. APPARITION UNIQUE DES CARTES (APRÈS 4.6 SECONDES)
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.add('show');
            }, index * 250); // Cascade propre
        });
    }, 4600);
});
