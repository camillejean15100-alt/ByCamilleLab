document.addEventListener('DOMContentLoaded', () => {
    // Sélection des éléments
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsSection = document.getElementById('js-projects-section');
    const galleryOverlay = document.getElementById('js-gallery-overlay'); // Ajouté
    const linkProjets = document.getElementById('link-projets');
    const linkAccueil = document.getElementById('link-accueil');

    // --- ANIMATION D'ACCUEIL ---
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

    // --- GESTION DU CLIC PROJETS ---
    if (linkProjets && projectsSection) {
        linkProjets.addEventListener('click', (e) => {
            e.preventDefault();
            
            // 1. On force l'affichage de la section
            projectsSection.style.display = 'block';
            
            // 2. Si ta galerie est en "display: none" par défaut, on l'affiche
            if (galleryOverlay) {
                galleryOverlay.style.display = 'flex'; 
            }
            
            // 3. Scroll fluide
            projectsSection.scrollIntoView({ 
                behavior: 'smooth' 
            });
        });
    }

    // --- BOUTON FERMER GALERIE ---
    const closeBtn = document.getElementById('js-close-gallery');
    if (closeBtn && galleryOverlay) {
        closeBtn.addEventListener('click', () => {
            galleryOverlay.style.display = 'none';
        });
    }
});
