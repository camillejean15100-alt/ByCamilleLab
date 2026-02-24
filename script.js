window.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. Apparition
    setTimeout(() => {
        bubble.classList.add('visible');
    }, 200);

    // 2. Transition
    setTimeout(() => {
        bubble.style.opacity = '0';
        
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('active');
            
            // Sur mobile, on réactive le scroll une fois les cartes là
            if(window.innerWidth <= 768) {
                document.body.style.overflowY = "auto";
            }
        }, 600);
    }, 2500); 
});
