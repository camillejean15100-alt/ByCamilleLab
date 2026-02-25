// Fonction pour gérer l'affichage des sections
function changerPage(page) {
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const body = document.getElementById('site-body');
    
    if (page === 'accueil') {
        accueil.style.display = 'block';
        projets.style.display = 'none';
        body.style.backgroundImage = "url('fondaccueuil.jpg')";
        body.style.overflow = "hidden";
        lancerSequenceAccueil(); // On relance l'anim
    } else {
        accueil.style.display = 'none';
        projets.style.display = 'block';
        body.style.backgroundImage = "url('fondsite.jpg')";
        body.style.overflow = "auto";
    }
}

// La séquence d'animation isolée
function lancerSequenceAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (!bubble || !services) return;

    // Reset complet au début
    bubble.style.display = "block";
    bubble.style.opacity = "0";
    bubble.classList.remove('visible');
    services.style.display = "none";
    services.classList.remove('active');

    // 1. Apparition de la bulle
    setTimeout(() => {
        bubble.classList.add('visible');
        bubble.style.opacity = "1";
    }, 100);

    // 2. Disparition bulle -> Apparition services
    setTimeout(() => {
        bubble.style.transition = "opacity 0.5s ease";
        bubble.style.opacity = "0";
        
        setTimeout(() => {
            bubble.style.display = "none";
            services.style.display = "flex"; // Force l'affichage
            setTimeout(() => {
                services.classList.add('active');
                services.style.opacity = "1"; // Force l'opacité
            }, 50);
        }, 500);
    }, 4000);
}

// Lancement au démarrage
window.onload = lancerSequenceAccueil;
