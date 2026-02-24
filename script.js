window.onload = function() {
    // 1. On identifie la bulle et le conteneur des services
    const bulle = document.querySelector('.speech-bubble');
    // On cherche d'abord par ID, sinon par classe
    const services = document.getElementById('servicesIcons') || document.querySelector('.services-container');

    if (bulle && services) {
        // --- ÉTAPE A : APPARITION DE LA BULLE ---
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // --- ÉTAPE B : TRANSITION AUTOMATIQUE APRÈS 6 SECONDES ---
            setTimeout(() => {
                // On fait disparaître la bulle
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -100%)"; 

                // --- ÉTAPE C : APPARITION DES CARTES ---
                setTimeout(() => {
                    bulle.style.display = "none"; // On retire la bulle du flux
                    
                    // On force l'affichage du bloc de services
                    services.style.setProperty('display', 'flex', 'important');
                    
                    // Petit délai pour que l'opacité s'anime
                    setTimeout(() => {
                        services.style.opacity = "1";
                    }, 50);
                }, 800); // Temps de l'animation de la bulle

            }, 6000); // Temps de lecture de la bulle
        }, 500);
    } else {
        console.error("Erreur : Bulle ou Services non trouvés dans le HTML");
    }
};
