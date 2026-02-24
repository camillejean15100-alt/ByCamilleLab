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
    // Suppression de la variable titre ici car on ne veut plus le manipuler

    if (bulle && services && bulle.style.display !== 'none') {
        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -100%)"; 
        
        // J'ai enlevé la ligne : if (titre) titre.style.opacity = "0";

        setTimeout(() => {
            bulle.style.display = "none";
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 600);
    }
}

// --- REVENIR À LA BULLE ---
function retourVersBulle() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (services && bulle && services.style.display !== 'none') {
        services.style.opacity = "0";
        
        setTimeout(() => {
            services.style.display = "none";
            
            bulle.style.display = "inline-block";
            
            // J'ai enlevé la ligne : if (titre) titre.style.opacity = "1";
            
            setTimeout(() => {
                bulle.style.opacity = "1";
                bulle.style.transform = "translate(-50%, -50%)";
            }, 50);
        }, 600);
    }
}

// Support Clavier
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 || e.keyCode === 39) { 
        if (e.keyCode === 32) e.preventDefault();
        transitionVersServices();
    }
    if (e.keyCode === 37) { 
        retourVersBulle();
    }
});
