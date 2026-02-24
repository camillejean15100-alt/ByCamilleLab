window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bubble && services) {
        // 1. Apparition de la bulle
        setTimeout(() => {
            bubble.classList.add('visible');
        }, 200);

        // 2. Transition vers les cartes
        setTimeout(() => {
            bubble.style.opacity = '0';
            
            setTimeout(() => {
                bubble.style.display = 'none';
                services.classList.add('active');
                
                if(window.innerWidth <= 768) {
                    document.body.style.overflowY = "auto";
                }
            }, 600);
        }, 2500); 
    }
});
