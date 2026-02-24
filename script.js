window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. On fait apparaître la bulle (ton CSS gère la transition)
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 500);

    // 2. Au clic sur la bulle, on passe aux cartes
    bubble.addEventListener('click', () => {
        bubble.classList.remove('visible');
        
        // On attend la fin de l'effacement pour afficher les cartes
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active');
        }, 600);
    });
});
