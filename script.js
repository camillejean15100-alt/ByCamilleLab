document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('mission-bubble');
    const cards = document.getElementById('cards-container');

    // Délai avant transition
    setTimeout(() => {
        // Effacement bulle
        bubble.style.opacity = '0';
        
        setTimeout(() => {
            bubble.style.display = 'none';
            
            // Affichage cartes
            cards.style.display = 'flex';
            // Petit timeout pour laisser au navigateur le temps de rendre le flex
            setTimeout(() => {
                cards.classList.add('is-visible');
            }, 50);
            
        }, 600);
        
    }, 3000);
});
