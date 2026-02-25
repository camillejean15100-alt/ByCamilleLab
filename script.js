/**
 * SCRIPT POUR CAMILLE LAB
 * Gère l'animation d'accueil et la navigation
 */

// On attend que tout le contenu soit chargé
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. INITIALISATION DES ÉLÉMENTS ---
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    const body = document.getElementById('site-body');

    // --- 2. SÉQUENCE D'ANIMATION (ACCUEIL) ---
    
    // Si on est sur l'accueil, on lance la séquence
    if (bubble && services) {
        // Étape A : On fait apparaître la bulle (le CSS gère le défilement via .visible)
        setTimeout(() => {
            bubble.classList.add('visible');
        }, 500);

        // Étape B : Après 4 secondes, on switch : bulle -> cartes
        setTimeout(() => {
            // On fait disparaître la bulle proprement
            bubble.style.transition = "opacity 0.6s ease, transform 0.6s ease";
            bubble.style.opacity = "0";
            bubble.style.transform = "translate(-50%, -100%)"; // Elle s'envole un peu

            setTimeout(() => {
                bubble.style.display = "none";
                
                // On active le container des cartes
                services.style.display = "flex"; // On le remet en flex
                // Un micro-délai pour que l'opacité CSS s'active bien
                setTimeout(() => {
                    services.classList.add('active');
                }, 50);
            }, 600);

        }, 4500); // Temps total de lecture de la bulle
    }
});

// --- 3. SYSTÈME DE NAVIGATION (CHANGER PAGE) ---

function changerPage(page) {
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const body = document.getElementById('site-body');
    
    // Liens de navigation
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    // On réinitialise l'état actif des liens
    linkAcc.classList.remove('active');
    linkProj.classList.remove('active');

    if (page === 'accueil') {
        // Pour revenir à l'accueil, le plus propre est de recharger 
        // pour revoir l'animation, ou simplement switcher les sections :
        accueil.style.display = 'block';
        projets.style.display = 'none';
        body.style.backgroundImage = "url('fondaccueuil.jpg')";
        body.style.overflow = "hidden"; // On bloque le scroll sur l'accueil
        linkAcc.classList.add('active');
    } 
    else if (page === 'projets') {
        accueil.style.display = 'none';
        projets.style.display = 'block';
        
        // On change le fond pour le fond du site
        body.style.backgroundImage = "url('fondsite.jpg')";
        body.style.overflow = "auto"; // On autorise le scroll pour voir les projets
        linkProj.classList.add('active');
        
        // Optionnel : Scroll automatique vers le haut
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}
