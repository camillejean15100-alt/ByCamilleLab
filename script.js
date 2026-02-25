window.addEventListener('load', () => {
    const bubble = document.getElementById('bubble');
    const cards = document.getElementById('cards');

    // 1. La bulle reste 3 secondes
    setTimeout(() => {
        // 2. On cache la bulle
        bubble.style.display = 'none';
        
        // 3. On fait apparaître les cartes
        cards.style.opacity = '1';
    }, 3500);
});
