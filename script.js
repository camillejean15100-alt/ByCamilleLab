window.addEventListener('load', function() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // 1. Apparition de la bulle (rapide : 0.4s après chargement)
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // 2. TEMPS DE LECTURE : 3.5 secondes (Rythmé mais lisible)
            setTimeout(() => {
                
                // Animation de sortie de la bulle
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -120%)"; // Elle monte un peu plus haut

                // 3. APPARITION DES SERVICES
                setTimeout(() => {
                    bulle.style.display = "none";
                    services.style.display = "flex"; 
                    
                    // On réduit aussi le délai du fondu pour que ce soit plus nerveux
                    setTimeout(() => {
                        services.style.opacity = "1";
                    }, 50);
                }, 600); // Transition de sortie plus courte

            }, 3500); // <<--- C'est ici qu'on gère la vitesse globale
        }, 400);
    }
});
