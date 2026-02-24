window.onload = function() {
    // 1. On récupère les éléments par leurs ID du HTML
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // --- ÉTAPE 1 : Apparition de la bulle ---
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // --- ÉTAPE 2 : Attente de 6 secondes puis transition AUTO ---
            setTimeout(() => {
                
                // Animation de sortie de la bulle (elle s'envole)
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -100%)"; 

                // --- ÉTAPE 3 : Apparition des services ---
                setTimeout(() => {
                    bulle.style.display = "none"; // Cache la bulle
                    
                    // Affiche le conteneur des services
                    services.style.display = "flex"; 
                    
                    // Déclenche le fondu (opacity)
                    setTimeout(() => {
                        services.style.opacity = "1";
                    }, 50);
                }, 800); // Temps de l'animation de sortie

            }, 6000); // Temps de lecture avant le défilement auto
        }, 500);
    }
};
