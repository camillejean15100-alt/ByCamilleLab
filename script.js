/**
 * SCRIPT COMPLET CAMILLE LAB
 * Gère l'animation d'accueil et la navigation
 */

// 1. Démarrage automatique au chargement de la page
window.onload = function() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bubble && services) {
        // Étape A : Apparition de la bulle de mission (Camille parle)
        setTimeout(() => {
            bubble.classList.add('visible');
        }, 500);

        // Étape B : Après 3.5 secondes, on cache la bulle et on montre les 3 services
        setTimeout(() => {
            bubble.style.display = 'none';
            services.style.display = 'flex';
            // Ajoute une petite animation d'entrée pour les services si besoin
        }, 3500);
    }
};

// 2. Fonction de navigation (Changement de page)
function changerPage(page) {
    const body = document.getElementById('site-body');
    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (page === 'projets') {
        // Masquer l'accueil et afficher les projets
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';

        // Changer le fond pour mettre celui avec l'herbe en bas
        body.style.backgroundImage = "url('voirmesprojets.jpg')";
        
        // Permettre de scroller pour voir toute la grille
        body.style.overflow = "auto";

        // Mettre à jour le menu (couleurs bleu/vert)
        if (linkAcc) linkAcc.classList.remove('active');
        if (linkProj) linkProj.classList.add('active');
    } 
    else if (page === 'accueil') {
        // Pour revenir à l'accueil, on recharge pour relancer l'animation
        window.location.reload();
    }
}
