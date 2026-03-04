document.addEventListener('DOMContentLoaded', () => {
    // Sélection avec vérification
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsSection = document.getElementById('js-projects-section');
    const galleryOverlay = document.getElementById('js-gallery-overlay');
    
    const linkProjets = document.getElementById('link-projets');
    const linkAccueil = document.getElementById('link-accueil');
    const closeBtn = document.getElementById('js-close-gallery');

    // --- A. ANIMATION D'ACCUEIL ---
    function startIntroAnimation() {
        if (!bubble) return; // Si la bulle n'est pas là, on stoppe l'erreur
        
        bubble.style.display = 'block';
        bubble.style.opacity = '0';
        
        setTimeout(() => {
            bubble.classList.add('bubble--active');
        }, 100);

        setTimeout(() => {
            bubble.classList.remove('bubble--active');
            setTimeout(() => {
                bubble.style.display = 'none';
                if (services) services.classList.add('services--visible');
            }, 500);
        }, 4000);
    }

    startIntroAnimation();

    // --- B. CLIC "VOIR MES PROJETS" ---
    if (linkProjets && projectsSection) {
        linkProjets.addEventListener('click', (e) => {
            e.preventDefault();
            projectsSection.style.display = 'block';
            
            // On s'assure que la galerie bleue ne s'ouvre pas tout de suite
            if (galleryOverlay) galleryOverlay.style.display = 'none';

            projectsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // --- C. CLIC "ACCUEIL" ---
    if (linkAccueil) {
        linkAccueil.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // On cache les projets pour revenir au propre
            if (projectsSection) projectsSection.style.display = 'none';
            if (services) services.classList.remove('services--visible');
            
            startIntroAnimation();
        });
    }

    // --- D. OUVERTURE GALERIE (Clic sur les 8 rectangles blancs) ---
    // On utilise la délégation d'événement pour éviter les bugs de sélection
    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('project-card')) {
            if (galleryOverlay) {
                galleryOverlay.style.display = 'flex'; // Ouvre la galerie bleue
            }
        }
    });

    // --- E. FERMETURE ---
    if (closeBtn && galleryOverlay) {
        closeBtn.addEventListener('click', () => {
            galleryOverlay.style.display = 'none';
        });
    }
});
