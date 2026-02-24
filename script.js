function changerPage(page) {
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (page === 'projets') {
        // Affiche Projets, cache Accueil
        accueil.style.display = 'none';
        projets.style.display = 'block';
        
        // Menu : "Voir mes projets" devient VERT
        linkProj.style.color = "#8db600";
        linkAcc.style.color = "#1a5a96"; 
        
        // Change le fond d'écran
        document.body.style.backgroundImage = "url('voirmesprojets.jpg')";
    } else {
        // Affiche Accueil, cache Projets
        accueil.style.display = 'block';
        projets.style.display = 'none';
        
        // Menu : "Accueil" devient VERT (ou bleu selon ton choix)
        linkAcc.style.color = "#8db600";
        linkProj.style.color = "#1a5a96";
        
        // Remet le fond d'accueil
        document.body.style.backgroundImage = "url('fondaccueil.jpg')";
    }
}

// Garde ton animation de bulle ici en dessous...
window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    if (bubble && services) {
        setTimeout(() => { bubble.classList.add('visible'); }, 500);
        setTimeout(() => {
            bubble.style.opacity = '0';
            setTimeout(() => {
                bubble.style.display = 'none';
                services.classList.add('active');
                services.style.display = 'flex';
            }, 600);
        }, 3500);
    }
});
