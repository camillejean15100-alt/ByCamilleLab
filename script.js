document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    // On récupère toutes les cartes d'un coup
    const cards = document.querySelectorAll('.card');

    // 1. Apparition de la bulle (0.5s)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.remove('hidden');
            bubble.classList.add('show');
        }
    }, 500);

    // 2. Apparition des cartes une par une (cascade)
    cards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.remove('hidden');
            card.classList.add('show');
        }, 1000 + (index * 300)); // Elles arrivent l'une après l'autre
    });
});
