
document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    const cards = document.querySelectorAll('.card');

    // 1. Apparition de la bulle après 0.5 seconde
    setTimeout(() => {
        if (bubble) {
            bubble.classList.remove('hidden');
            bubble.classList.add('show');
        }
    }, 500);

    // 2. Disparition de la bulle après 4 secondes pour laisser place aux cartes
    setTimeout(() => {
        if (bubble) {
            bubble.classList.remove('show');
            bubble.classList.add('fade-out');
        }
    }, 4000);

    // 3. Apparition des cartes juste après la disparition de la bulle
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('hidden');
                card.classList.add('show');
            }, index * 300); // Petit décalage entre chaque carte pour l'élégance
        });
    }, 4500);
});
