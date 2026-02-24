window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Ton animation d'accueil (ne change pas)
    setTimeout(() => {
        if(bubble) bubble.classList.add('visible');
    }, 100);

    setTimeout(() => {
        if(bubble) bubble.classList.remove('visible'); 
        setTimeout(() => {
            if(bubble) bubble.style.display = 'none';
            if(services) services.classList.add('active');
        }, 600); 
    }, 1600);
});

// 2. Ta navigation (Switch de section)
function changerPage(pageId, element) {
    // 1. Gestion des sections
    const sectionAccueil = document.getElementById('section-accueil');
    const sectionProjets = document.getElementById('section-projets');

    if (pageId === 'projets') {
        sectionAccueil.style.display = 'none';
        sectionProjets.style.display = 'block';
    } else {
        sectionProjets.style.display = 'none';
        sectionAccueil.style.display = 'block';
    }

    // 2. Gestion du trait vert (la classe active)
    document.querySelectorAll('header nav ul li a').forEach(link => {
        link.classList.remove('active');
    });

    // On ajoute la classe au lien cliqué
    if (element) {
        element.classList.add('active');
    }
}
