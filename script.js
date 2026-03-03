document.addEventListener("DOMContentLoaded", () => {
    const bubble = document.querySelector('.speech-bubble');
    const cards = document.querySelectorAll('.card');

    // 1. Apparition de la bulle
    setTimeout(() => {
        bubble.classList.remove('hidden');
        bubble.classList.add('show');
    }, 500);

    // 2. Transition vers les cartes après 4 secondes
    setTimeout(() => {
        bubble.classList.replace('show', 'hidden');

        setTimeout(() => {
            cards.forEach((card, index) => {
                setTimeout(() => {
                    card.classList.remove('hidden');
                    card.classList.add('show');
                }, index * 300);
            });
        }, 600);
    }, 4000);
});
