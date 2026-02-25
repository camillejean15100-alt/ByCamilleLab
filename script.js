window.addEventListener('load', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // 1. Préparation : On force la bulle à droite (écrase le CSS)
    if (bubble) {
        bubble.style.transform = "translateX(50px)"; 
    }

    // 2. Déclenchement de la BULLE (Etape 1)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('is-visible');
        }
    }, 500); // Apparaît après 0.5s

    // 3. Déclenchement des CARTES (Etape 2)
    setTimeout(() => {
        if (cards) {
            cards.classList.add('is-visible');
        }
    }, 1800); // Apparaît 1.3s après la bulle
});
