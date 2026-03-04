document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');

    // 1. Apparition de la bulle (0.8s après le chargement pour laisser respirer)
    setTimeout(() => {
        bubble.classList.add('bubble--active');
    }, 800);

    // 2. Disparition de la bulle après 3.5 secondes
    setTimeout(() => {
        bubble.classList.remove('bubble--active');
        
        // On attend la fin de la transition de fermeture (0.5s) avant d'afficher les services
        setTimeout(() => {
            // On cache physiquement la bulle pour qu'elle ne gêne pas les clics
            bubble.style.pointerEvents = 'none'; 
            bubble.style.display = 'none';
            
            // 3. Apparition fluide des services
            services.classList.add('services--visible');
        }, 500);

    }, 4000); // 4000ms total pour laisser le temps de lire le texte
});
