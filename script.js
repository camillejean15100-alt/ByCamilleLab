// --- ANIMATION DE L'ACCUEIL ---
window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Faire apparaître la bulle au bout de 500ms
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 500);

    // 2. Faire disparaître la bulle et afficher les cartes après 3 secondes
    setTimeout(() => {
        bubble.style.opacity = '0';
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active');
        }, 600); // Temps de la transition CSS
    }, 3500);
});

function changerPage(page) {
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (page === 'projets') {
        accueil.style.display = 'none';
        projets.style.display = 'block';
        
        // Gestion du menu actif (Vert)
        linkProj.classList.add('active');
        linkAcc.classList.remove('active');
        
        // Application du fond spécifique à la galerie
        document.body.style.backgroundImage = "url('voirmesprojets.jpg')";
    } else {
        accueil.style.display = 'block';
        projets.style.display = 'none';
        
        linkAcc.classList.add('active');
        linkProj.classList.remove('active');
        
        // Retour au fond d'accueil
        document.body.style.backgroundImage = "url('fondaccueil.jpg')";
    }
}
