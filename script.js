window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Apparition de la bulle (immédiat)
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 100);

    // 2. Transition vers les cartes (après 1.6s)
    setTimeout(() => {
        bubble.classList.remove('visible'); 
        
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active'); // Utilise ton CSS ".services-container.active"
        }, 600); 
    }, 1600);
});

// Fonction pour le menu sans toucher au design
function changerPage(pageId) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    
    if (pageId === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
    } else {
        proj.style.display = 'none';
        acc.style.display = 'block';
    }
}
