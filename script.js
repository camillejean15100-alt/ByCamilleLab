window.onload = function() {
    const bubble = document.getElementById('bubble');
    const cards = document.getElementById('cards');

    // Après 3 secondes, on cache la bulle et on montre les cartes
    setTimeout(() => {
        bubble.style.opacity = '0';
        setTimeout(() => {
            bubble.style.display = 'none';
            cards.style.opacity = '1';
        }, 500);
    }, 3000);
};
