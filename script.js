function lancerSequenceAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (!bubble || !services) return;

    // Reset immédiat
    bubble.style.display = "block";
    bubble.style.opacity = "0";
    services.style.display = "none";
    services.classList.remove('active');

    // 1. La bulle arrive très vite (0.2s après le chargement)
    setTimeout(() => {
        bubble.classList.add('visible');
        bubble.style.opacity = "1";
    }, 200);

    // 2. On switch après seulement 2.5 secondes (plus dynamique)
    setTimeout(() => {
        bubble.style.transition = "all 0.4s ease";
        bubble.style.opacity = "0";
        bubble.style.transform = "translate(-50%, -70%) scale(0.9)"; // Effet de retrait

        setTimeout(() => {
            bubble.style.display = "none";
            services.style.display = "flex";
            
            // Apparition des cartes en cascade immédiate
            setTimeout(() => {
                services.classList.add('active');
            }, 50);
        }, 400);
    }, 2500); 
}

window.onload = lancerSequenceAccueil;
