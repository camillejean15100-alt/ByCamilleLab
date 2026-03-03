window.onload = () => {
    const bulle = document.getElementById('bubble');
    const cartes = document.getElementById('cards-wrapper');

    // On affiche la bulle après 0.5s
    setTimeout(() => {
        if (bulle) bulle.classList.add('show');
    }, 500);

    // On affiche tout le bloc des cartes après 1s
    setTimeout(() => {
        if (cartes) cartes.classList.add('show');
    }, 1000);
};
