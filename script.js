
document.addEventListener('DOMContentLoaded', () => {
    const bubble = document.getElementById('missionBubble');
    const cards = document.getElementById('cardsBox');

    // 1. On laisse la bulle visible pendant 4 secondes
    setTimeout(() => {
        // 2. On fait disparaître la bulle
        bubble.classList.add('fade-out');
        
        // 3. Juste après la disparition, on fait apparaître les cartes
        setTimeout(() => {
            cards.classList.add('show-cards');
        }, 600); 

    }, 4000); 
});
