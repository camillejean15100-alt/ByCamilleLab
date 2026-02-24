window.onload = function() {
    const bulle = document.querySelector('.speech-bubble');
    const services = document.querySelector('.services-container');

    if (bulle && services) {
        // ÉTAPE 1 : Faire apparaître la bulle après 0.5s
        setTimeout(() => {
            bulle.classList.add('visible');
            bulle.style.display = "block";
            
            // ÉTAPE 2 : Attendre 6 secondes (lecture) puis lancer la transition
            setTimeout(() => {
                
                // Animation de sortie de la bulle
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -100%)"; 

                // ÉTAPE 3 : Une fois la bulle effacée, montrer les cartes
                setTimeout(() => {
                    bulle.style.display = "none";
                    
                    // On force l'affichage du conteneur
                    services.style.display = "flex"; 
                    
                    // Petit délai pour l'animation de fondu des cartes
                    setTimeout(() => {
                        services.style.opacity = "1";
                    }, 50);
                }, 800); // Temps de l'animation de sortie

            }, 6000); // Temps de lecture de la bulle
        }, 500);
    }
};
