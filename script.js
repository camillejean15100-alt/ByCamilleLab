function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // 1. Animation de sortie pour la bulle
        bulle.style.opacity = "0";
        bulle.style.transform = "scale(0.9)";
        bulle.style.pointerEvents = "none";

        // 2. On attend la fin de l'anim (500ms) pour changer l'affichage
        setTimeout(() => {
            bulle.style.display = "none";
            services.style.display = "flex";
            
            // 3. Animation d'entrée pour les services
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 500);
    }
}
