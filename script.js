document.addEventListener("DOMContentLoaded", () => {
    const bubble = document.querySelector('.speech-bubble');
    const cards = document.querySelectorAll('.card');

    // 1. Entrée de la bulle
    setTimeout(() => {
        bubble.classList.remove('hidden');
        bubble.classList.add('show');
    }, 500);

    // 2. Switch bulle -> cartes après 4s
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
