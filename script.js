function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // Effacement de la bulle
        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -60%) scale(0.9)";

        setTimeout(() => {
            bulle.style.display = "none";
            
            // Affichage des services
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 500);
    }
}
