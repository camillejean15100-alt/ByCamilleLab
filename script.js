window.addEventListener('scroll', function() {
    const bulle = document.querySelector('.speech-bubble');
    if (window.scrollY > 60) {
        bulle.classList.add('visible');
    } else {
        bulle.classList.remove('visible');
    }
});
function transitionVersServices() {
    const bulle = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    // 1. On cache la bulle avec une animation
    bulle.classList.add('bubble-hidden');

    // 2. On attend un petit peu (300ms) et on affiche les icônes
    setTimeout(() => {
        services.classList.add('services-visible');
    }, 300);
}
