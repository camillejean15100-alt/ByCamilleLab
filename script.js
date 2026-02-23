window.addEventListener('scroll', function() {
    const laBulle = document.querySelector('.speech-bubble');
    
    // Si on a descendu de plus de 40 pixels
    if (window.scrollY > 40) {
        laBulle.classList.add('visible');
    } else {
        laBulle.classList.remove('visible');
    }
});
