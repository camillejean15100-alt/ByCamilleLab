window.addEventListener('scroll', function() {
    const bulle = document.querySelector('.speech-bubble');
    
    if (window.scrollY > 40) {
        bulle.classList.add('visible');
    } else {
        bulle.classList.remove('visible');
    }
});
