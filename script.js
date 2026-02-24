// --- ALLER VERS LES SERVICES ---
function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // On ne cherche même plus le titre ici, on l'oublie complètement
    if (bulle && services && bulle.style.display !== 'none') {
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
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (services && bulle && services.style.display !== 'none') {
        services.style.opacity = "0";
        
        setTimeout(() => {
            services.style.display = "none";
            bulle.style.display = "inline-block";
            
            setTimeout(() => {
                bulle.style.opacity = "1";
                bulle.style.transform = "translate(-50%, -50%)";
            }, 50);
        }, 600);
    }
}
