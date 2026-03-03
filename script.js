document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('bubble');
    const cards = document.querySelectorAll('.card');

    // 1. Apparition de la bulle (0.5s après le chargement)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.remove('hidden');
            bubble.classList.add('show');
        }
    }, 500);

    // 2. Disparition de la bulle (après 4s)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.replace('show', 'fade-out');
        }
    }, 4000);

    // 3. Apparition des cartes (après 4.5s)
    setTimeout(() => {
        cards.forEach((card, index) => {
            setTimeout(() => {
                card.classList.remove('hidden');
                card.classList.add('show');
                
                // Vérification console pour débugger le Packaging si besoin
                const img = card.querySelector('img');
                if (img && !img.complete) {
                    console.log("Image en attente : " + img.src);
                }
            }, index * 300); // Apparition en cascade
        });
    }, 4500);
});
