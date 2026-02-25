/**
 * SCRIPT POUR CAMILLE LAB
 * Gère l'animation d'accueil et la navigation par section
 */

document.addEventListener('DOMContentLoaded', () => {
    // Lance la séquence de bienvenue au chargement initial
    lancerSequenceAccueil();
});

// --- 1. SÉQUENCE D'ANIMATION (ACCUEIL) ---
function lancerSequenceAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bubble && services) {
        // Reset des états pour l'animation
        bubble.style.display = "block";
        bubble.classList.remove('visible', 'fade-out');
        services.style.display = "none";
        services.classList.remove('active');

        // A. Apparition de la bulle (vitesse rapide)
        setTimeout(() => {
            bubble.classList.add('visible');
        }, 300);

        // B. Transition vers les cartes après lecture
        setTimeout(() => {
            bubble.classList.add('fade-out');

            setTimeout(() => {
                bubble.style.display = "none";
                services.style.display = "flex";
                
                // Déclenche l'animation "pop" des cartes services
                setTimeout(() => {
                    services.classList.add('active');
                }, 50);
            }, 400); 

        }, 2800); 
    }
}

// --- 2. SYSTÈME DE NAVIGATION ---
function changerPage(page) {
    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');
    const body = document.getElementById('site-body');

    if (page === 'projets') {
        // Masquer l'accueil et afficher les projets
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';
        
        // Application du fond spécifique "voirmesprojets.jpg"
        body.style.backgroundImage = "url('voirmesprojets.jpg')";
        
        // Autoriser le défilement pour voir la grille
        document.body.style.overflow = "auto";
        
        // Mise à jour visuelle du menu (liens actifs)
        document.getElementById('link-acc').classList.remove('active');
        document.getElementById('link-proj').classList.add('active');
    } 
    else if (page === 'accueil') {
        // Pour l'accueil, on recharge pour relancer l'animation proprement
        // et retrouver le fond "fondaccueuil.jpg" via le CSS
        window.location.reload();
    }
}
