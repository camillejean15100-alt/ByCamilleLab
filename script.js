document.addEventListener('DOMContentLoaded', () => {
    // --- 1. ÉLÉMENTS ---
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const gallery = document.getElementById('js-gallery-overlay');
    const closeBtn = document.getElementById('js-close-gallery');
    const projectCards = document.querySelectorAll('.project-card');

    // --- 2. TON ANIMATION D'ACCUEIL (INCHANGÉE) ---
    // La bulle apparaît après 0.8s
    setTimeout(() => { 
        if(bubble) bubble.classList.add('bubble--active'); 
    }, 800);

    // La bulle disparaît et les services arrivent après 4s
    setTimeout(() => {
        if(bubble) {
            bubble.classList.remove('bubble--active');
            setTimeout(() => {
                bubble.style.display = 'none';
                if(services) services.classList.add('services--visible');
            }, 500);
        }
    }, 4000);

    // --- 3. GALERIE (FIXE ET INSTANTANÉE) ---
    // On active la galerie au clic sur les cartes blanches
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            if(gallery) {
                gallery.classList.add('gallery--active');
                // Bloque le scroll du fond quand la galerie est ouverte
                document.body.style.overflow = 'hidden';
            }
        });
    });

    // Fermeture de la galerie
    if(closeBtn) {
        closeBtn.addEventListener('click', () => {
            gallery.classList.remove('gallery--active');
            document.body.style.overflow = 'auto';
        });
    }

    // Fermeture avec la touche Échap
    window.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && gallery.classList.contains('gallery--active')) {
            gallery.classList.remove('gallery--active');
            document.body.style.overflow = 'auto';
        }
    });
});
