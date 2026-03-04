document.addEventListener('DOMContentLoaded', () => {
    // 1. SÉLECTION DES ÉLÉMENTS (Vérifie que les IDs correspondent à ton HTML)
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsSection = document.getElementById('js-projects-section');
    const galleryOverlay = document.getElementById('js-gallery-overlay');
    
    const linkProjets = document.getElementById('link-projets');
    const linkAccueil = document.getElementById('link-accueil');
    const closeBtn = document.getElementById('js-close-gallery');

    // --- A. ANIMATION D'ACCUEIL (Lancement automatique) ---
    function startIntroAnimation() {
        if (bubble) {
            bubble.style.display = 'block';
            bubble.style.opacity = '0';
            // Petit délai pour l'effet de fade-in via CSS
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

    // Lancement au chargement
    startIntroAnimation();

    // --- B. CLIC "VOIR MES PROJETS" ---
    if (linkProjets && projectsSection) {
        linkProjets.addEventListener('click', (e) => {
            e.preventDefault();
            
            // On s'assure que la section est bien affichée
            projectsSection.style.display = 'block';
            if (galleryOverlay) galleryOverlay.style.display = 'flex';

            // Scroll fluide vers les projets
            projectsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        });
    }

    // --- C. CLIC "ACCUEIL" (Retour en haut) ---
    if (linkAccueil) {
        linkAccueil.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Remonter en haut
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });

            // Optionnel : Si tu veux que l'animation recommence au retour
            // (Supprime les lignes ci-dessous si tu veux que l'accueil reste fixe)
            if (services) services.classList.remove('services--visible');
            startIntroAnimation();
        });
    }

    // --- D. FERMER LA GALERIE ---
    if (closeBtn && galleryOverlay) {
        closeBtn.addEventListener('click', () => {
            galleryOverlay.style.display = 'none';
        });
    }
});
