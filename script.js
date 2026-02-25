/**
 * SCRIPT POUR CAMILLE LAB
 * Gestion de l'animation automatique et de la navigation
 */

document.addEventListener('DOMContentLoaded', () => {
    // On lance l'animation dès que la structure est prête
    lancerSequenceAccueil();
});

// 1. LA SÉQUENCE D'ANIMATION (Bulle puis Cartes)
function lancerSequenceAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (!bubble || !services) return;

    // Réinitialisation des états (au cas où on revient sur la page)
    bubble.style.display = "block";
    bubble.style.opacity = "0";
    bubble.classList.remove('visible', 'fade-out');
    services.style.display = "none";
    services.classList.remove('active');

    // Étape A : Apparition rapide de la bulle (0.3s après chargement)
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 300);

    // Étape B : Transition vers les cartes après 2.5 secondes de lecture
    setTimeout(() => {
        // La bulle s'efface (déclenche .fade-out dans le CSS)
        bubble.classList.add('fade-out');

        setTimeout(() => {
            bubble.style.display = "none";
            
            // Affichage des cartes de services
            services.style.display = "flex";
            
            // Petit délai pour laisser le navigateur activer le display:flex 
            // avant de lancer l'animation .active
            setTimeout(() => {
                services.classList.add('active');
            }, 50);
        }, 400); // Temps de la transition fade-out

    }, 2800); 
}

// 2. LA NAVIGATION ENTRE LES PAGES
function changerPage(page) {
    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');
    const body = document.getElementById('site-body');
    
    // Gestion des liens actifs dans le menu
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (page === 'projets') {
        // On cache l'accueil et on montre les projets
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';
        
        // Changement de fond
        body.style.background = "url('fondsite.jpg') no-repeat center center fixed";
        body.style.backgroundSize = "cover";
        
        // On autorise le scroll pour voir les réalisations
        document.body.style.overflow = "auto";
        
        // Update menu
        if(linkAcc) linkAcc.classList.remove('active');
        if(linkProj) linkProj.classList.add('active');
    } 
    else if (page === 'accueil') {
        // Pour l'accueil, on recharge pour rejouer l'animation proprement
        window.location.reload();
    }
}
