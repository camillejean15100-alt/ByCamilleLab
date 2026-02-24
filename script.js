// Variable pour stocker le minuteur (au cas où on veut l'arrêter)
let autoTransitionTimer;

window.onload = function() {
    const bulle = document.getElementById('missionBubble');
    if (bulle) {
        // 1. Apparition de la bulle après 0.5s
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // 2. Démarrage du compte à rebours pour la transition automatique
            // On laisse 6 secondes (6000ms) pour lire le texte de la bulle
            autoTransitionTimer = setTimeout(() => {
                transitionVersServices();
            }, 6000); 
        }, 500);
    }
};

// --- ALLER VERS LES SERVICES ---
function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services && bulle.style.display !== 'none') {
        // Si l'utilisateur clique ou utilise les flèches, on annule le minuteur auto
        clearTimeout(autoTransitionTimer);

        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -100%)"; 

        setTimeout(() => {
            bulle.style.display = "none";
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 600);
    }
}

// ... garde le reste de tes fonctions (retourVersBulle et Clavier)
