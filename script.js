window.addEventListener('scroll', function() {
    const bubble = document.querySelector('.speech-bubble');
    // Dès qu'on scroll un tout petit peu (30px), la bulle jaillit
    if (window.scrollY > 30) {
        bubble.classList.add('visible');
    } else {
        bubble.classList.remove('visible');
    }
});
