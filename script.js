function lancerSequenceAccueil() {
    const bubble = document.getElementById('missionBubble');
    const services = document.getElementById('servicesIcons');

    if (bubble && services) {
        setTimeout(() => bubble.classList.add('visible'), 300);

        setTimeout(() => {
            bubble.classList.add('fade-out');
            setTimeout(() => {
                bubble.style.display = "none";
                services.style.display = "flex";
                setTimeout(() => services.classList.add('active'), 50);
            }, 400);
        }, 2800);
    }
}

function changerPage(page) {
    const acc = document.getElementById('section-accueil');
    const proj = document.getElementById('section-projets');
    const body = document.body;

    if (page === 'projets') {
        acc.style.display = 'none';
        proj.style.display = 'block';
        
        // On change le fond ici vers l'herbe et le beige
        body.style.backgroundImage = "url('voirmesprojets.jpg')";
        body.style.overflow = "auto";
        
        document.getElementById('link-acc').classList.remove('active');
        document.getElementById('link-proj').classList.add('active');
    } else {
        window.location.reload();
    }
}

window.onload = lancerSequenceAccueil;
