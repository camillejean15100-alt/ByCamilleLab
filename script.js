document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');
    const projectsView = document.getElementById('js-projects-view');
    const gallery = document.getElementById('js-gallery-overlay');

    // Séquence d'accueil
    setTimeout(() => bubble?.classList.add('bubble--active'), 800);
    setTimeout(() => {
        bubble?.classList.remove('bubble--active');
        services?.classList.add('services--visible');
    }, 4500);

    // Navigation entre Accueil et Projets
    document.getElementById('link-projets').addEventListener('click', (e) => {
        e.preventDefault();
        projectsView.style.display = 'block';
    });

    document.getElementById('link-accueil').addEventListener('click', (e) => {
        e.preventDefault();
        projectsView.style.display = 'none';
        gallery.style.display = 'none';
    });

    // Ouverture Galerie
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('click', () => gallery.style.display = 'flex');
    });

    document.getElementById('js-close-gallery').addEventListener('click', () => {
        gallery.style.display = 'none';
    });
});
