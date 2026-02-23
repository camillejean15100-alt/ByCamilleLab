// Affiche la bulle au chargement
window.onload = function() {
    const bulle = document.getElementById('missionBubble');
    if (bulle) {
        bulle.classList.add('visible');
    }
};

// Transition vers les services au clic
function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bulle && services) {
        bulle.style.opacity = "0";
        setTimeout(() => {
            bulle.style.display = "none";
            services.style.display = "flex";
            setTimeout(() => {
                services.style.opacity = "1";
                services.style.transition = "opacity 0.6s ease";
            }, 50);
        }, 500);
    }
}
