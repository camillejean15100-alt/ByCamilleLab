window.addEventListener('load', function() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        // 1. Apparition quasi instantanée
        setTimeout(() => {
            bulle.classList.add('visible');
            
            // 2. TEMPS DE LECTURE ULTRA-COURT : 1.2 seconde
            setTimeout(() => {
                
                // Sortie percutante (plus rapide)
                bulle.style.transition = "all 0.4s ease-in"; 
                bulle.style.opacity = "0";
                bulle.style.transform = "translate(-50%, -150%)"; 

                // 3. ENCHAÎNEMENT IMMÉDIAT
                setTimeout(() => {
                    bulle.style.display = "none";
                    services.style.setProperty('display', 'flex', 'important');
                    
                    setTimeout(() => {
                        services.style.opacity = "1";
                    }, 50);
                }, 400); 

            }, 1200); // 1.2 seconde de présence
        }, 200);
    }
});
