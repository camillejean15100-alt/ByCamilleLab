// Variable pour le minuteur automatique
let autoTransitionTimer;

window.onload = function() {
    const bulle = document.querySelector('.speech-bubble');
    
    if (bulle) {
        // 1. Apparition de la bulle au chargement
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // 2. LANCEMENT DU DÉFILEMENT AUTO (7 secondes)
            autoTransitionTimer = setTimeout(() => {
                transitionVersServices();
            }, 7000); 
        }, 500);
    }
};

// --- FONCTION : ALLER VERS LES SERVICES ---
function transitionVersServices() {
    const bulle = document.querySelector('.speech-bubble');
    // On cible le conteneur des services par sa classe CSS
    const services = document.querySelector('.services-container');

    // On vérifie que la bulle existe et qu'elle est visible avant de switcher
    if (bulle && services && window.getComputedStyle(bulle).opacity !== "0") {
        
        // On annule le minuteur auto pour éviter les bugs si l'utilisateur a cliqué lui-même
        clearTimeout(autoTransitionTimer);

        // Animation de sortie de la bulle
        bulle.style.opacity = "0";
        bulle.style.transform = "translate(-50%, -100%)"; 

        setTimeout(() => {
            bulle.style.display = "none";
            
            // Affichage des cartes
            services.style.display = "flex"; 
            
            // Petit délai pour déclencher la transition CSS (opacity)
            setTimeout(() => {
                services.style.opacity = "1";
            }, 50);
        }, 600);
    }
}

// --- FONCTION : RETOUR À LA BULLE ---
function retourVersBulle() {
    const bulle = document.querySelector('.speech-bubble');
    const services = document.querySelector('.services-container');

    if (services && bulle) {
        services.style.opacity = "0";
        
        setTimeout(() => {
            services.style.display = "none";
            bulle.style.display = "block";
            
            setTimeout(() => {
                bulle.style.opacity = "1";
                bulle.style.transform = "translate(-50%, -50%)";
            }, 50);
        }, 600);
    }
}

// --- COMMANDES CLAVIER ---
document.addEventListener('keydown', (e) => {
    if (e.code === "Space" || e.code === "ArrowRight") {
        if (e.code === "Space") e.preventDefault(); // Empêche le scroll avec Espace
        transitionVersServices();
    }
    if (e.code === "ArrowLeft") {
        retourVersBulle();
    }
});
