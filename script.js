document.addEventListener('DOMContentLoaded', () => {
    // On cible la bulle par son ID
    const bubble = document.getElementById('bubble');
    
    // On cible TOUTES les cartes (les 3 que tu as dans ton HTML)
    const cards = document.querySelectorAll('.card');

    // 1. Affichage de la bulle après 500ms
    setTimeout(() => {
        if (bubble) {
            bubble.classList.remove('hidden');
            bubble.classList.add('show');
        }
    }, 500);

    // 2. Affichage des cartes avec un léger décalage (cascade)
    cards.forEach((card, index) => {
        setTimeout(() => {
            if (card) {
                card.classList.remove('hidden');
                card.classList.add('show');
            }
        }, 1000 + (index * 250)); // La 1ère à 1s, la 2ème à 1.25s, la 3ème à 1.5s
    });
});
