document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');

    // 1. Faire apparaître la bulle après un court délai
    setTimeout(() => {
        bubble.classList.add('bubble--active');
    }, 500);

    // 2. Après 3 secondes, on cache la bulle et on montre les cartes
    setTimeout(() => {
        // Disparition de la bulle
        bubble.classList.remove('bubble--active');
        
        // Petit délai pour attendre la fin de l'anim de la bulle
        setTimeout(() => {
            bubble.style.display = 'none';
            // Apparition des cartes décalées à droite
            services.classList.add('services--visible');
        }, 500);

    }, 3500);
});
