document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsSection = document.getElementById('js-projects-section');
    const linkProjets = document.getElementById('link-projets');
    const linkAccueil = document.getElementById('link-accueil');

    // --- ANIMATION D'ACCUEIL (Ton code existant) ---
    setTimeout(() => {
        if(bubble) bubble.classList.add('bubble--active');
    }, 800);

    setTimeout(() => {
        if(bubble) {
            bubble.classList.remove('bubble--active');
            setTimeout(() => {
                bubble.style.pointerEvents = 'none'; 
                bubble.style.display = 'none';
                if(services) services.classList.add('services--visible');
            }, 500);
        }
    }, 4000);

    // --- GESTION DES CLICS (La partie manquante) ---

    // Clic sur "Voir mes projets"
    if (linkProjets) {
        linkProjets.addEventListener('click', (e) => {
            e.preventDefault(); // Empêche le rechargement de la page
            
            // On s'assure que la section est visible (au cas où elle serait en display:none)
            projectsSection.style.display = 'block';
            
            // On scrolle doucement vers la section
            projectsSection.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start' 
            });
        });
    }

    // Clic sur "Accueil" (pour remonter en haut)
    if (linkAccueil) {
        linkAccueil.addEventListener('click', (e) => {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
});
