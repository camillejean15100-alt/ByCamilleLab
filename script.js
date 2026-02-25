window.onload = function() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');
    
    // Étape 1 : Faire apparaître la bulle
    setTimeout(() => bubble.classList.add('visible'), 500);

    // Étape 2 : Switch vers les cartes après 3s
    setTimeout(() => {
        bubble.style.display = 'none';
        services.style.display = 'flex';
    }, 3500);
};

function changerPage(page) {
    if (page === 'projets') {
        document.getElementById('section-accueil').style.display = 'none';
        document.getElementById('section-projets').style.display = 'block';
        document.body.style.backgroundImage = "url('voirmesprojets.jpg')";
    } else {
        window.location.reload();
    }
}
