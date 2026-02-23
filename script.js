window.onload = function() {
    // 1. Arrivée de la bulle par la droite au chargement
    const bulle = document.getElementById('missionBubble');
    if (bulle) {
        setTimeout(() => {
            bulle.classList.add('visible');
        }, 500);
    }
};

function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    const titre = document.querySelector('.main-title');

    if (bulle && services) {
        // 2. Disparition fluide de la bulle et du titre
        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -100%)"; // S'envole vers le haut
        if (titre) titre.style.opacity = "0";

        setTimeout(() => {
            bulle.style.display = "none";
            
            // 3. Apparition des services au centre
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 600);
    }
}

// Support Clavier pour l'instinct de progression
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 || e.keyCode === 39) { // Espace ou Flèche Droite
        if (e.keyCode === 32) e.preventDefault();
        transitionVersServices();
    }
});
