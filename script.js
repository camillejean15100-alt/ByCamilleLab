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

// --- CHANGEMENT DE PAGE ---
function changerPage(nom) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    const body = document.getElementById('site-body');
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (nom === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
        body.style.background = "#F3E9C7"; // Fond beige pour les projets
        linkProj.classList.add('active');
        linkAcc.classList.remove('active');
    } else {
        location.reload(); // Recharge pour relancer l'animation d'accueil
    }
}
