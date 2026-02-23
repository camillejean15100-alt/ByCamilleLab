function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // Disparition de la bulle
        bulle.style.opacity = "0";
        bulle.style.pointerEvents = "none";

        setTimeout(() => {
            bulle.style.display = "none";
            
            // Apparition des services centrés
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 500);
    }
}
