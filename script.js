
document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('js-bubble');
    const services = document.getElementById('js-services');

    // Apparition de la bulle
    setTimeout(() => {
        bubble.classList.add('bubble--active');
    }, 500);

    // Transition vers les services
    setTimeout(() => {
        bubble.classList.remove('bubble--active');
        
        setTimeout(() => {
            bubble.style.display = 'none';
            services.classList.add('services--visible');
        }, 500);

    }, 3500);
});
