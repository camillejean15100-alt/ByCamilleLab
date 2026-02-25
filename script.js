window.addEventListener('load', () => {
    const container = document.getElementById('main-frame');
    
    // On attend un peu que la page soit prête
    setTimeout(() => {
        container.classList.add('reveal-all');
    }, 500); 
});
