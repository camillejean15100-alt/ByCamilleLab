document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const viewAccueil = document.getElementById('view-accueil');
    const viewProjets = document.getElementById('view-projets');
    const gallery = document.getElementById('js-gallery-overlay');
    const linkAccueil = document.getElementById('link-accueil');
    const linkProjets = document.getElementById('link-projets');

    // ANIMATION ACCUEIL
    setTimeout(() => { if(bubble) bubble.classList.add('bubble--active'); }, 800);
    setTimeout(() => {
        if(bubble) {
            bubble.classList.remove('bubble--active');
            setTimeout(() => {
                bubble.style.display = 'none';
                if(services) services.classList.add('services--visible');
            }, 500);
        }
    }, 4000);

    // NAVIGATION
    linkProjets.addEventListener('click', (e) => {
        e.preventDefault();
        viewProjets.style.display = 'block';
        linkAccueil.classList.remove('nav-list__link--active');
        linkProjets.classList.add('nav-list__link--active');
    });

    linkAccueil.addEventListener('click', (e) => {
        e.preventDefault();
        viewProjets.style.display = 'none';
        linkProjets.classList.remove('nav-list__link--active');
        linkAccueil.classList.add('nav-list__link--active');
    });

    // GALERIE
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => gallery.classList.add('gallery--active'));
    });

    document.getElementById('js-close-gallery').addEventListener('click', () => {
        gallery.classList.remove('gallery--active');
    });

    window.addEventListener('keydown', (e) => {
        if (!gallery.classList.contains('gallery--active')) return;
        if (e.key === "Escape") gallery.classList.remove('gallery--active');
        if (e.key === "ArrowRight") document.getElementById('js-next-btn').click();
        if (e.key === "ArrowLeft") document.getElementById('js-prev-btn').click();
    });
});
