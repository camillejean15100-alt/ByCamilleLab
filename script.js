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
    // On récupère les deux sections
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const titreH1 = document.querySelector('.main-title');

    if (page === 'projets') {
        // --- MODE PROJETS ---
        accueil.style.display = 'none';      // Cache tout l'accueil
        if(titreH1) titreH1.style.display = 'none'; // Cache le titre H1
        
        projets.style.display = 'block';     // Affiche la galerie
        document.body.style.backgroundImage = "none"; // Nettoie le fond du body
    } else {
        // --- MODE ACCUEIL ---
        accueil.style.display = 'block';     // Réaffiche l'accueil
        if(titreH1) titreH1.style.display = 'block'; 
        
        projets.style.display = 'none';      // Cache la galerie
        document.body.style.backgroundImage = "url('fondaccueil.jpg')";
    }
}
