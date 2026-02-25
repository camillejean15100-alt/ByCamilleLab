// Variable pour savoir si l'animation a déjà eu lieu
let animationFaite = false;

window.addEventListener('DOMContentLoaded', () => {
    lancerAnimationAccueil();
});

function lancerAnimationAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    
    // Si on n'est pas sur l'accueil ou si déjà fait, on stoppe
    if (animationFaite || !bubble) return;

    setTimeout(() => {
        bubble.classList.add('visible');
    }, 100);

    setTimeout(() => {
        bubble.classList.remove('visible'); 
        setTimeout(() => {
            bubble.style.display = 'none';
            if(services) services.classList.add('active');
            animationFaite = true; // On verrouille pour la suite
        }, 600); 
    }, 1600);
}

function changerPage(pageId, element) {
    // Empêcher le comportement par défaut du lien #
    if(event) event.preventDefault();

    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');

    if (pageId === 'projets') {
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';
    } else {
        sectionProjets.style.display = 'none';
        sectionAccueil.style.display = 'block';
        
        // Si on revient sur accueil, on s'assure que les services sont là 
        // sans relancer la bulle pénible
        const services = document.getElementById('servicesIcons');
        if(services) services.classList.add('active');
        const bubble = document.getElementById('missionBubble');
        if(bubble) bubble.style.display = 'none';
    }

    // Gestion du trait vert
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    if (element) {
        element.classList.add('active');
    }
}
