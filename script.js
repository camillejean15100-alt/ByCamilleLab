document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const gallery = document.getElementById('js-gallery-overlay');
    const navLinks = document.querySelectorAll('.nav-list__link');

    // 1. ANIMATION D'ENTRÉE (Bulle puis Services)
    // On garde cette partie, elle est très bien pour le côté visuel
    setTimeout(() => { 
        if(bubble) bubble.classList.add('bubble--active'); 
    }, 800);

    setTimeout(() => {
        if(bubble) {
            bubble.classList.remove('bubble--active');
            setTimeout(() => {
                bubble.style.display = 'none';
                if(services) services.classList.add('services--visible');
            }, 500);
        }
    }, 4000);

    // 2. GESTION DU MENU ACTIF (SANS BUG)
    // Au lieu de cacher des sections, on se contente de souligner le lien cliqué
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // On retire la classe active de tous les liens
            navLinks.forEach(l => l.classList.remove('nav-list__link--active'));
            // On l'ajoute au lien cliqué
            this.classList.add('nav-list__link--active');
        });
    });

    // 3. GALERIE (OUVERTURE / FERMETURE)
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            if(gallery) gallery.classList.add('gallery--active');
        });
    });

    const closeBtn = document.getElementById('js-close-gallery');
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            gallery.classList.remove('gallery--active');
        });
    }

    // Fermeture avec la touche Échap
    window.addEventListener('keydown', (e) => {
        if (gallery && gallery.classList.contains('gallery--active')) {
            if (e.key === "Escape") gallery.classList.remove('gallery--active');
        }
    });
});
