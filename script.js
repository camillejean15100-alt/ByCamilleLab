document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const gallery = document.getElementById('js-gallery-overlay');
    const projectCards = document.querySelectorAll('.project-card');

    // Animation accueil uniquement si on est sur l'accueil
    if (window.location.hash === "" || window.location.hash === "#view-accueil") {
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
    }

    // Gestion Galerie
    projectCards.forEach(card => {
        card.addEventListener('click', () => {
            gallery.classList.add('gallery--active');
        });
    });

    document.getElementById('js-close-gallery').addEventListener('click', () => {
        gallery.classList.remove('gallery--active');
    });
});
