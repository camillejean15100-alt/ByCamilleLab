window.onload = function() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    const title = document.querySelector('.main-title');

    // 1. Apparition de la bulle
    setTimeout(() => { if(bubble) bubble.classList.add('visible'); }, 500);

    // 2. Bascule titre/bulle vers services après 3s
    setTimeout(() => {
        if(bubble) bubble.style.display = 'none';
        if(title) title.style.display = 'none';
        if(services) services.style.display = 'flex';
    }, 3500);
};

function changerPage(page) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    if (page === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
        document.body.style.backgroundImage = "url('voirmesprojets.jpg')";
        document.body.style.overflow = "auto";
    } else { window.location.reload(); }
}
