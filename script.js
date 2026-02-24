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

function changerPage(pageId) {
    // 1. Switch des sections
    document.getElementById('section-accueil').style.display = (pageId === 'accueil') ? 'block' : 'none';
    document.getElementById('section-projets').style.display = (pageId === 'projets') ? 'block' : 'none';

    // 2. Switch de la classe active (le trait vert)
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.classList.remove('active');
    });
    
    // On cible le lien cliqué par son onclick
    event.currentTarget.classList.add('active');
}
