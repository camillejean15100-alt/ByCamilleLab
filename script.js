function changerPage(page) {
    const accueil = document.getElementById('section-accueil');
    const projets = document.getElementById('section-projets');
    const linkAcc = document.getElementById('link-acc');
    const linkProj = document.getElementById('link-proj');

    if (page === 'projets') {
        accueil.style.display = 'none';
        projets.style.display = 'block';
        
        // Menu : "Voir mes projets" devient VERT
        linkProj.classList.add('active');
        linkAcc.classList.remove('active');
        
        // Change le fond du body pour la galerie
        document.body.style.background = "url('voirmesprojets.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    } else {
        accueil.style.display = 'block';
        projets.style.display = 'none';
        
        // Menu : "Accueil" redevient VERT
        linkAcc.classList.add('active');
        linkProj.classList.remove('active');
        
        // Remet le fond d'accueil
        document.body.style.background = "url('fondaccueil.jpg') no-repeat center center fixed";
        document.body.style.backgroundSize = "cover";
    }
}

// Ton animation de bulle (on ne la touche pas, elle fonctionne)
window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    if (bubble) {
        setTimeout(() => { bubble.classList.add('visible'); }, 500);
        setTimeout(() => {
            bubble.style.opacity = '0';
            setTimeout(() => {
                bubble.style.display = 'none';
                if(services) services.classList.add('active');
            }, 600);
        }, 3500);
    }
});
