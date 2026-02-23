// On écoute le clavier sur toute la page
document.addEventListener('keydown', function(event) {
    // Si on appuie sur Espace (code 32) ou Flèche Droite (code 39)
    if (event.keyCode === 32 || event.keyCode === 39) {
        
        // On empêche la barre espace de faire descendre la page
        if (event.keyCode === 32) {
            event.preventDefault();
        }
        
        // On vérifie si la bulle est encore là avant de lancer l'animation
        const bulle = document.getElementById('missionBubble');
        if (bulle && bulle.style.display !== 'none') {
            transitionVersServices();
        }
    }
});
