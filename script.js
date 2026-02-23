window.addEventListener('scroll', function() {
    // On récupère l'élément avec la classe speech-bubble
    const bulleMission = document.querySelector('.speech-bubble');
    
    // Si on scroll de plus de 45px, la bulle arrive
    if (window.scrollY > 45) {
        bulleMission.classList.add('visible');
    } else {
        bulleMission.classList.remove('visible');
    }
});
