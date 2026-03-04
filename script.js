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

    
