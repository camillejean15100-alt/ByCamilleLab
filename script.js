// Variable pour le minuteur auto
let autoTransitionTimer;

window.onload = function() {
    // On cherche l'élément qui a la classe 'speech-bubble'
    const bulle = document.querySelector('.speech-bubble');
    
    if (bulle) {
        // 1. On s'assure qu'elle est prête à être vue
        bulle.style.display = "block"; 
        
        setTimeout(() => {
            // 2. On ajoute la classe pour l'animation d'entrée
            bulle.classList.add('visible');
            
            // 3. Lancement du défilement auto après 7 secondes
            autoTransitionTimer = setTimeout(() => {
                transitionVersServices();
            }, 7000); 
        }, 500);
    }
};

// --- ALLER VERS LES SERVICES ---
function transitionVersServices() {
    const bulle = document.querySelector('.speech-bubble');
    const services = document.querySelector('.services-container');

    if (bulle && services && getComputedStyle(bulle).display !== 'none') {
        // On arrête le minuteur si l'utilisateur a cliqué lui-même
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

// --- REVENIR À LA BULLE ---
function retourVersBulle() {
    const bulle = document.querySelector('.speech-bubble');
    const services = document.querySelector('.services-container');

    if (services && bulle && getComputedStyle(services).display !== 'none') {
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

// Support Clavier (Espace, Droite, Gauche)
document.addEventListener('keydown', (e) => {
    if (e.code === "Space" || e.code === "ArrowRight") {
        if (e.code === "Space") e.preventDefault();
        transitionVersServices();
    }
    if (e.code === "ArrowLeft") {
        retourVersBulle();
    }
});
