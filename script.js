// --- ANIMATION DE L'ACCUEIL ---
window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Faire apparaître la bulle au bout de 500ms
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 500);

    // 2. Faire disparaître la bulle et afficher les cartes après 3 secondes
    setTimeout(() => {
        bubble.style.opacity = '0';
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active');
        }, 600); // Temps de la transition CSS
    }, 3500);
});

