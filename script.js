document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsSection = document.getElementById('js-projects-section');
    const galleryOverlay = document.getElementById('js-gallery-overlay');
    
    const linkProjets = document.getElementById('link-projets');
    const linkAccueil = document.getElementById('link-accueil');
    const closeBtn = document.getElementById('js-close-gallery');

    // --- A. ANIMATION D'ACCUEIL ---
    function startIntroAnimation() {
        if (bubble) {
            bubble.style.display = 'block';
            setTimeout(() => {
                bubble.classList.add('bubble--active');
            }, 100);
        }

        setTimeout(() => {
            if (bubble) {
                bubble.classList.remove('bubble--active');
                setTimeout(() => {
                    bubble.style.display = 'none';
                    if (services) services.classList.add('services--visible');
                }, 500);
            }
        }, 4000);
    }

    startIntroAnimation();

    // --- B. CLIC "VOIR MES PROJETS" ---
    if (linkProjets && projectsSection) {
        linkProjets.addEventListener('click', (e) => {
            e.preventDefault();
            
            // On affiche la section des projets (ton fond voirmesprojets.jpg)
            projectsSection.style.display = 'block';
            
            // IMPORTANT : On s'assure que la galerie bleue reste CACHÉE au scroll
            if (galleryOverlay) galleryOverlay.style.display = 'none';

            projectsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // --- C. CLIC "ACCUEIL" ---
    if (linkAccueil) {
        linkAccueil.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Ferme tout avant de remonter
            if (projectsSection) projectsSection.style.display = 'none';
            if (galleryOverlay) galleryOverlay.style.display = 'none';

            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Relance l'intro propre
            if (services) services.classList.remove('services--visible');
            startIntroAnimation();
        });
    }

    // --- D. OUVERTURE DE LA GALERIE (Clic sur les rectangles blancs) ---
    // On écoute le clic sur n'importe quelle carte projet dans la grille
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => {
            if (galleryOverlay) {
                galleryOverlay.style.display = 'flex';
                // Ici tu pourras plus tard charger l'image spécifique au projet
            }
        });
    });

    // --- E. FERMER LA GALERIE ---
    if (closeBtn && galleryOverlay) {
        closeBtn.addEventListener('click', () => {
            galleryOverlay.style.display = 'none';
        });
    }
});
