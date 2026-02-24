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
function changerPage(pageId) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    const liens = document.querySelectorAll('header nav ul li a');

    // Masquage / Affichage
    if (pageId === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
    } else {
        proj.style.display = 'none';
        acc.style.display = 'block';
    }

    // Gestion du trait vert (Active)
    liens.forEach(link => link.classList.remove('active'));
    if (event && event.currentTarget) {
        event.currentTarget.classList.add('active');
    }
}
