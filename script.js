window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // Apparition de la bulle
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 500);

    // Clic sur la bulle
    bubble.addEventListener('click', () => {
        // 1. On lance l'animation de sortie de la bulle
        bubble.style.opacity = '0';
        bubble.style.transform = 'translate(-50%, -60%)'; // Elle monte un peu en disparaissant
        
        setTimeout(() => {
            bubble.style.display = 'none'; // On l'enlève
            
            // 2. On affiche les cartes
            services.classList.add('active');
            
            // Debug pour toi (à supprimer après) :
            console.log("Les cartes ont maintenant la classe :", services.className);
        }, 600);
    });
});
