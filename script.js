window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Apparition de la bulle (immédiat)
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 100);

    // 2. Disparition bulle + Apparition cartes (après 1.5s)
    setTimeout(() => {
        bubble.classList.remove('visible'); // Lance la transition CSS de sortie
        
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active'); // Affiche les cartes à 38%
        }, 600); // Attend la fin de la transition de la bulle
    }, 1600);
});

function changerPage(nom) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    const body = document.getElementById('site-body');

    if (nom === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
        body.style.background = "#F3E9C7"; // Passage au fond beige
    } else {
        location.reload(); // Retour accueil
    }
}
