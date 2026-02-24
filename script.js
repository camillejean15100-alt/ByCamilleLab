window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Apparition de la bulle (200ms après chargement)
    setTimeout(() => {
        if (bubble) {
            bubble.classList.add('visible');
        }
    }, 200);

    // 2. Transition : Disparition bulle -> Apparition Cartes
    setTimeout(() => {
        if (bubble && services) {
            bubble.style.opacity = '0';
            
            setTimeout(() => {
                bubble.style.display = 'none';
                services.classList.add('active');
                
                // Sur mobile (<= 768px), on réactive le scroll pour voir les cartes
                if(window.innerWidth <= 768) {
                    document.body.style.overflowY = "auto";
                }
            }, 600); // Temps de la transition d'opacité
        }
    }, 2500); // Temps d'affichage de la bulle (2.5s)
});
