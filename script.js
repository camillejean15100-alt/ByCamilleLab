window.onload = function() {
    const bulle = document.getElementById('missionBubble');
    if (bulle) {
        setTimeout(() => {
            bulle.classList.add('visible');
        }, 500);
    }
};

// --- ALLER VERS LES SERVICES ---
function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    const titre = document.querySelector('.main-title');

    if (bulle && services && bulle.style.display !== 'none') {
        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -100%)"; 
        if (titre) titre.style.opacity = "0";

        setTimeout(() => {
            bulle.style.display = "none";
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 600);
    }
}

// --- REVENIR À LA BULLE (NOUVEAU) ---
function retourVersBulle() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    const titre = document.querySelector('.main-title');

    if (services && bulle && services.style.display !== 'none') {
        // 1. Les services s'effacent
        services.style.opacity = "0";
        
        setTimeout(() => {
            services.style.display = "none";
            
            // 2. La bulle et le titre réapparaissent
            bulle.style.display = "inline-block";
            if (titre) titre.style.opacity = "1";
            
            setTimeout(() => {
                bulle.style.opacity = "1";
                bulle.style.transform = "translate(-50%, -50%)"; // Elle revient au centre
            }, 50);
        }, 600);
    }
}

// Support Clavier complet
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 || e.keyCode === 39) { // Espace ou Droite -> Suivant
        if (e.keyCode === 32) e.preventDefault();
        transitionVersServices();
    }
    if (e.keyCode === 37) { // Flèche Gauche -> Retour
        retourVersBulle();
    }
});
