window.addEventListener('load', function() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // 1. Entrée de la bulle
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // 2. Temps de lecture idéal : 2.5 secondes
            setTimeout(() => {
                // Sortie douce de la bulle
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -100%)";

                // 3. Arrivée des services
                setTimeout(() => {
                    bulle.style.display = "none";
                    services.style.display = "flex";
                    
                    requestAnimationFrame(() => {
                        services.classList.add('active');
                    });
                }, 600);
            }, 2500); 
        }, 500);
    }
});
